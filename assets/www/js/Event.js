//getTodaysEvents

var Event = function(){
    this.barcodes = [];
    this.sections = [];
    this.event_id = -1;
    this.p_sections = '';
    
};

Event.prototype = {
    initCheckin: function() {
        //$("#scanCode")[0].addEventListener('touchstart', this.scanCode.bind(this) , false);
        $("#scanCode").click(this.scanCode.bind(this));
        //$("#submitCode").click(this.submitCodes.bind(this));
        $("#submitCode")[0].addEventListener('touchend', this.submitCodes.bind(this) , false);
    },
    initEvent: function(token) {
        var self = this;
        $('select#program').change(this.changeSection.bind(self));
        if (!$('form#addEventForm').hasClass('none')) {
             $('form#addEventForm').addClass('none');
        }
        
        if ($('#addIcon').hasClass('none')) {
             $('#addIcon').removeClass('none');
        }
        //$('#addIcon').click(function(e) {e.preventDefault(); console.log("afd"); $('form#addEventForm').removeClass('none'); $('#addIcon').addClass('none'); })
        $('#addIcon')[0].addEventListener('touchstart', function(e){e.preventDefault();  $('form#addEventForm').removeClass('none'); $('#addIcon').addClass('none');}, false);
        $('form#addEventForm').submit(function(e){e.preventDefault(); self.submitEventForm(token)});
    },
    reset: function() {
        this.barcodes = [];
        this.sections = [];
        this.event_id = -1;
        $("#barcodes").html('<li class="placeholder">None<li>');
        $("#bad_barcodes").html('<li class="placeholder">None<li>');
        $("#success_scan").html('<li class="placeholder">None<li>');
    },
    getCurrentEvents: function(token) {
        var self = this;
        self.reset();
        $('#events_table').html('');
        $.ajax({
          url: "http://128.237.74.78:3000/getTodaysEvents.json",
          type: "GET",
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          data: {"auth_token": token},
          success: function(data) {
            if(!jQuery.isEmptyObject(data)) {
                $('#events_table').html('');
                var ev = $('<table/>')
                var headers = $('<thead />');
                headers.append('<tr><th>Program</th><th>Sections</th><th>Duration</th><th>View</th></tr>');
                ev.append(headers);
                ev_body = $('<tbody/>');
                var todays_date; 
                for (i in data) {
                  var row = $('<tr />');
                  var todays_date = data[i]['event']['date']; 
                  row.append('<td>'+data[i]['program']+'</td>');
                  var section_list = $('<td/>');
                  for(j in data[i]['section']) {
                    section_list.append('<span>'+data[i]['section'][j]+'</span><br/>')
                  }
                  row.append(section_list);
                  var start_time = new Date(data[i]['event']['start_time']);
                  var end_time = new Date(data[i]['event']['end_time']);
                  row.append('<td>'+formatTime(start_time)+" - "+ formatTime(end_time)+'</td>');
                  var td = $('<td/>');
                  var button = document.createElement('a');
                  button.setAttribute('href','javascript:void(0)');
                  button.setAttribute('data-sections',data[i]['section']);
                  button.setAttribute('data-event',data[i]['event']['id']);
                  button.setAttribute('class','button icon-chevron-right');
                  button.addEventListener('touchstart', self.clickScan.bind(self), false );
                  button = $(button);
                  //button.click(self.clickScan.bind(self));
                  td.append(button);
                  row.append(td);
                  //row.append('<td><a id="scan" href="javascript:void(0)" onclick="clickScan(this)" data-sections="'+data[i]['section']+'" data-event="'+data[i]['event']['id']+'">Scan</a></td>');
                  ev_body.append(row);             
                }
                ev.append(ev_body);
                $('#events_table').append(ev);
                $('#date_header').append(" "+todays_date);
                return false; } else {
                     $('#events_table').append('<h4>There are no events for today. Create a new one on the Events page.</h4>');
                }
          },
          error: function(err) {
            console.log("ERROR: ");
            console.log(err);
          }
        });
        return false;
    },
    scanCode: function(e) {
        console.log(this.barcodes.length);
        console.log(this.event_id);
        var self = this;
        e.preventDefault();
        $(".placeholder").hide();
        $('#bad_barcodes').html('');
        $('#success_scan').html('');
        
        if(isMobileBrowser) {
            alert("Barcoding cannot be accessed from the browser");
        } else { 
            if(self.barcodes.length < 11) {
                if(self.event_id !== -1) {
                    window.plugins.barcodeScanner.scan(
                        function(result) {           
                        $('#barcodes').append('<li>'+result.text+'</li>');
                        self.barcodes.push(result.text);
                        //alert(result.text);
                        //alert("Scanned Code: " + result.text 
                               // + ". Format: " + result.format
                               // + ". Cancelled: " + result.cancelled);
                    }, function(error) {
                        alert("Scan failed: " + error);
                    });
                }
            } else {
                 $("#barcode_flash").html("Please submit your barcodes before continue scanning");
                 $("#barcode_flash").fadeIn("slow", function() { $("#barcode_flash").fadeOut(1600); return false;})
            }
         }
    },
    clickScan: function() {
        var transition = new Transitioner();
        transition.slideDown($('#scan_page'));
        this.event_id = event.target.dataset.event;
        this.sections = event.target.dataset.sections.split(',');
        $('#sections').html('');
        for(i in this.sections) {
            $('#sections').append('<li>'+this.sections[i]+'</li>');
        }
    },
    submitCodes: function(e) {
        e.preventDefault();
        var self = this;
        if(this.event_id !== -1) {
            if(this.barcodes.length > 0) {
                $.ajax({
                  url: "http://128.237.74.78:3000/createAttendances",
                  type: "POST",
                  data: {"barcodes": self.barcodes, "event_id": self.event_id},
                  success: function(data) {
                    if(typeof data.message === 'undefined') {
                        $('#success_scan').html('');
                        $('#bad_barcodes').html('');
                        if(data.scanned.length > 0) {
                            for(var i = 0; i<data.scanned.length; i++) {
                                 $('#success_scan').append('<li>'+data.scanned[i]+'</li>')
                            }
                        } else {
                             $('#success_scan').append('No successfully scanned students.')
                        }
                        
                        if(data.bad_barcodes.length > 0 || data.already_scanned.length > 0) {
                            for(var j = 0; j<data.bad_barcodes.length; j++) {
                                 $('#bad_barcodes').append('<li>'+data.bad_barcodes[j]+'</li>')
                            }
                            
                            for(var k = 0; k<data.already_scanned.length; k++) {
                                 $('#bad_barcodes').append('<li>'+data.already_scanned[k]+' was already scanned</li>')
                            }
                        } else {
                             $('#bad_barcodes').append('Every student was scanned.')
                        }
                    } else {
                        $("#barcode_flash").html(data.message);
                        $("#barcode_flash").fadeIn("slow", function() { $("#barcode_flash").fadeOut(1600); return false;})
                    }
                    $('#barcodes').html('');
                    self.barcodes = [];
                    return false;
                  },
                  error: function(err) {
                    console.log("ERROR: ");
                    console.log(err);
                  }
                });
            } else {
                  $("#barcode_flash").html("You have no barcodes.");
                  $("#barcode_flash").fadeIn("slow", function() { $("#barcode_flash").fadeOut(1600); return false;})
                  return false;
            }
         }
        return false;
    },
    getProgramsAndSections: function(token) {
        var self = this;
        $.ajax({
          url: "http://128.237.74.78:3000/getProgramsAndSections.json",
          type: "GET",
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          data: {"auth_token": token},
          success: function(data) {
            $('select#program').html('');
            $('select#program_sections').html('');
            for( i in data.programs) {
                var opt = $('<option/>');
                var optGroup = $('<optgroup/>');
                optGroup.prop('label',data.programs[i]['name']);
                opt.prop('value',data.programs[i]['id']);
                opt.html(data.programs[i]['name']);
                $('select#program').append(opt);
                $('select#program_sections').append(optGroup);
            }
            for( i in data.sections) {
                var opt = $('<option/>');
                opt.prop('value',data.sections[i]['id']);
                opt.html(data.sections[i]['section']);
                $('select#program_sections optgroup[label="'+data.sections[i]['name']+'"]').append(opt);
            }
            self.p_sections = $("select#program_sections").html();
            for( i in data.locations) {
                var opt = $('<option/>');
                opt.prop('value',data.locations[i]['id']);
                opt.html(data.locations[i]['name']);
                $('select#locations').append(opt);
            }
                  
          },
          error: function(err) {
            console.log("ERROR: ");
            console.log(err);
          }
            });
    },
    changeSection: function() {
      var self = this;
      var escaped_program;
      var options;
      var program;
      program = $("select#program :selected").text();
      escaped_program = program.replace(/([ #;&,.+*~\':"!^$[\]()=>|\/@])/g, "\\$1");
      options = $(self.p_sections).filter("optgroup[label=" + escaped_program + "]").html();
      if (options) {
          $("select#program_sections").html(options);
          $("select#program_sections").removeClass('none');
        } 
    },
    submitEventForm: function(token) {
        var program = $("select#program :selected").val();
        var sections = $("select#program_sections").val();
        var location = $("select#locations :selected").val();
        var start_time = $("#start_time").val();
        var end_time = $("#end_time").val();
        console.log(sections);
        $.ajax({
          url: "http://128.237.74.78:3000/createEvent",
          type: "POST",
          cache : false,
          beforeSend: function(xhr, settings){settings.url},
          data: {"auth_token": token, "program": program, "sections": sections, "location": location, "start_time": start_time, "end_time": end_time},
          success: function(data) {
            if(typeof data.message !== 'undefined') {
                $("#event_flash").html(data.message);
                $("#event_flash").fadeIn("slow", function() { $("#event_flash").fadeOut(1600)})
                $("#start_time").val('');
                $("#end_time").val('');
                $("#addEventForm").addClass("none");
                $("#addIcon").removeClass("none");
            } else {
                $("#event_flash").html(data.error);
                $("#event_flash").fadeIn("slow", function() { $("#event_flash").fadeOut(1600)})
            }
            return false;
          },
          error: function(err) {
            console.log("ERROR: ");
            console.log(err.statusText);
          }
        });
        return false;
        
    }
    
    
}

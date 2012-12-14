//getTodaysEvents
var Event = function () {
    this.barcodes = [];
    this.sections = [];
    this.event_id = -1;
    this.p_sections = '';

  };

Event.prototype = {
  initCheckin: function () {
    $("#scanCode").bind('tapone', this.scanCode.bind(this));
    $("#submitCode").bind('tapone', this.submitCodes.bind(this));
  },
  initEvent: function (token) {
    var self = this;
    $('select#program').change(this.changeSection.bind(self));
    if (!$('form#addEventForm').hasClass('none')) {
      $('form#addEventForm').addClass('none');
    }

    if ($('#addIcon').hasClass('none')) {
       $('#addIcon').removeClass('none');
       $(".icon-large").removeClass('none');
       $("#events h3").removeClass('none');
    }
    $('#addIcon').bind('tapone', function (e) {
      e.preventDefault();
      $('form#addEventForm').removeClass('none');
      $('#addIcon').addClass('none');
      $(".icon-large").addClass('none');
      $("#events h3").addClass('none');
      if(!$("#ps").hasClass('none')) {
        $("#ps").addClass('none');
      }
    });
    $('form#addEventForm').submit(function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      self.submitEventForm(token);
    });
  },
  reset: function () {
    this.barcodes = [];
    this.sections = [];
    this.event_id = -1;
    $("#barcodes").html('<li class="placeholder">None<li>');
    $("#bad_barcodes").html('<li class="placeholder">None<li>');
    $("#success_scan").html('<li class="placeholder">None<li>');
  },
  getCurrentEvents: function (token) {
    var self = this;
    self.reset();
    $('#events_ul').html('');
    $.ajax({
      url: "http://uif2012.herokuapp.com/getTodaysEvents.json",
      type: "GET",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      data: {
        "auth_token": token
      },
      success: function (data) {
        $('#events_ul').html('');
        if (!jQuery.isEmptyObject(data)) { 
          var todays_date = '';
          for (var i in data) {
          todays_date = data[i]['event']['date'];
  
              var li = $('<li/>');
              var h2 = $('<h2/>');
              h2.html(data[i]['program']);
              
              var p = $('<p/>');
              p.addClass("desc");
              var str = '';  
              for(var j in data[i]['section']) {
                 if(j != data[i]['section'].length -1) {
                   str+= data[i]['section'][j]+", ";     
                 } else {
                     str+= ' ' +data[i]['section'][j];
                 }
              }
              p.html(str);
              
              var span=$('<span/>');
              var start_time = data[i]['event']['start_time'].slice(0, data[i]['event']['start_time'].indexOf('+'));
              var end_time = data[i]['event']['end_time'].slice(0, data[i]['event']['end_time'].indexOf('+'));

              var start_arr = start_time.split(/[- T :]/);
              var start = new Date(Date.UTC(start_arr[0], start_arr[1], start_arr[2], start_arr[3], start_arr[4], start_arr[5]));
              var end_arr = end_time.split(/[- T :]/);
              var end = new Date(Date.UTC(end_arr[0], end_arr[1], end_arr[2], end_arr[3], end_arr[4], end_arr[5]));
              span.html(formatTime(start) + " - " + formatTime(end));

              li.append(h2);
              li.append(p);
              li.append(span);
              $('#events_ul').append(li);
              jQuery.data(li[0], "data", { "sections": data[i]['section'], "event": data[i]['event']['id']});
              li.on('tapone', self.clickScan.bind(self));
          
          }
          $('#date-header').html("Events for: " + todays_date);
         
          return false;
        } else {
          $('#events_ul').append('<li><h2>There are no events for today. Create a new one on the Events page.</h2></li>');
        }
      },
      error: function (err) {
        console.log("ERROR: ");
        console.log(err);
      }
    });
    return false;
  },
  scanCode: function (e) {
    
    var self = this;
    e.preventDefault();
    $(".placeholder").hide();
    $('#bad_barcodes').html('');
    $('#success_scan').html('');

    if (!window.phonegap) {
      alert("Barcoding cannot be accessed from the browser");
    } else {
        if (self.event_id !== -1) {
          window.plugins.barcodeScanner.scan(
    
          function (result) {
            $('#barcodes').append('<li>' + result.text + '</li>');
            self.barcodes.push(result.text);
            //alert(result.text);
            //alert("Scanned Code: " + result.text 
            // + ". Format: " + result.format
            // + ". Cancelled: " + result.cancelled);
          }, function (error) {
            alert("Scan failed: " + error);
          });
        }
    }
  },
  clickScan: function (e) {
    e.preventDefault();
    var transition = new Transitioner();
    transition.slideDown($('#scan_page'));
    this.event_id = jQuery.data(e.target, "data").event;
    this.sections = jQuery.data(e.target, "data").sections;
    $('#sections').html('');
    for (i in this.sections) {
      $('#sections').append('<li>' + this.sections[i] + '</li>');
    }
  },
  submitCodes: function (e) {
    e.preventDefault();
    var self = this;
    if (this.event_id !== -1) {
      if (this.barcodes.length > 0) {
        $.ajax({
          url: "http://uif2012.herokuapp.com/createAttendances",
          type: "POST",
          data: {
            "barcodes": self.barcodes,
            "event_id": self.event_id
          },
          success: function (data) {
            if (typeof data.message === 'undefined') {
              $('#success_scan').html('');
              $('#bad_barcodes').html('');
              if (data.scanned.length > 0) {
                for (var i = 0; i < data.scanned.length; i++) {
                  $('#success_scan').append('<li>' + data.scanned[i] + '</li>')
                }
              } else {
                $('#success_scan').append('No successfully scanned students.')
              }

              if (data.bad_barcodes.length > 0 || data.already_scanned.length > 0) {
                for (var j = 0; j < data.bad_barcodes.length; j++) {
                  $('#bad_barcodes').append('<li>' + data.bad_barcodes[j] + '</li>')
                }

                for (var k = 0; k < data.already_scanned.length; k++) {
                  $('#bad_barcodes').append('<li>' + data.already_scanned[k] + ' was already scanned</li>')
                }
              } else {
                $('#bad_barcodes').append('Every student was scanned.')
              }
            } else {
              $("#barcode_flash").html(data.message);
              $("#barcode_flash").fadeIn("slow", function () {
                $("#barcode_flash").fadeOut(1600);
                return false;
              })
            }
            $('#barcodes').html('');
            self.barcodes = [];
            return false;
          },
          error: function (err) {
            console.log("ERROR: ");
            console.log(err);
          }
        });
      } else {
        $("#barcode_flash").html("You have no barcodes.");
        $("#barcode_flash").fadeIn("slow", function () {
          $("#barcode_flash").fadeOut(1600);
          return false;
        });
        return false;
      }
    }
  },
  getProgramsAndSections: function (token) {
    var self = this;
    $.ajax({
      url: "http://uif2012.herokuapp.com/getProgramsAndSections.json",
      type: "GET",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      data: {
        "auth_token": token
      },
      success: function (data) {
        $('select#program').html('');
        $('select#program_sections').html('');
        $('select#locations').html('');
        var def = $('<option/>');
        def.prop('value', '');
        def.prop('label', 'Choose a Program');
        def.prop('selected', 'selected');
        $('select#program').append(def);
        for (i in data.programs) {
          var opt = $('<option/>');
          var optGroup = $('<optgroup/>');
          optGroup.prop('label', data.programs[i]['name']);
          opt.prop('value', data.programs[i]['id']);
          opt.html(data.programs[i]['name']);
          $('select#program').append(opt);
          $('select#program_sections').append(optGroup);
        }
        for (i in data.sections) {
          var opt = $('<option/>');
          opt.prop('value', data.sections[i]['id']);
          opt.html(data.sections[i]['section']);
          $('select#program_sections optgroup[label="' + data.sections[i]['name'] + '"]').append(opt);
        }
        self.p_sections = $("select#program_sections").html();
        for (i in data.locations) {
          var opt = $('<option/>');
          opt.prop('value', data.locations[i]['id']);
          opt.html(data.locations[i]['name']);
          $('select#locations').append(opt);
        }

      },
      error: function (err) {
        console.log("ERROR: ");
        console.log(err);
      }
    });
  },
  changeSection: function () {
    var self = this;
    var escaped_program;
    var options;
    var program;
    program = $("select#program :selected").text();
    escaped_program = program.replace(/([ #;&,.+*~\':"!^$[\]()=>|\/@])/g, "\\$1");
    options = $(self.p_sections).filter("optgroup[label=" + escaped_program + "]").html();
    if (options) {
      $("select#program_sections").html(options);
      $("#ps").removeClass('none');
    }
  },
  submitEventForm: function (token) {
    var self = this;
    var program = $("select#program :selected").val();
    var sections = $("select#program_sections").val();
    var location = $("select#locations :selected").val();
    var start_time = $("#start_time").val();
    var end_time = $("#end_time").val();
    $.ajax({
      url: "http://uif2012.herokuapp.com/createEvent",
      type: "POST",
      cache: false,
      beforeSend: function (xhr, settings) {
        settings.url
      },
      data: {
        "auth_token": token,
        "program": program,
        "sections": sections,
        "location": location,
        "start_time": start_time,
        "end_time": end_time
      },
      success: function (data) {
        if (typeof data.message !== 'undefined') {
          $("#event_flash").html(data.message);
          $("#event_flash").fadeIn("fast", function () {
            $("#event_flash").fadeOut(1600)
          })
          $("#start_time").val('');
          $("#end_time").val('');
          $("#addEventForm").addClass("none");
          $("#addIcon").removeClass("none");
          $(".icon-large").removeClass("none");
          $("#events h3").removeClass("none");
          var transition = new Transitioner();
          self.getCurrentEvents(token);
          transition.slideDown($('#checkin'));
        } else {
          $("#event_flash").html(data.error);
          $("#event_flash").fadeIn("slow", function () {
            $("#event_flash").fadeOut(1600)
          })
        }
        return false;
      },
      error: function (err) {
        console.log("ERROR: ");
        console.log(err.statusText);
      }
    });
    return false;

  }


}

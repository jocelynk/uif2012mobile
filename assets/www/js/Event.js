//getTodaysEvents

var Event = function(){
    this.barcodes = [];
    this.sections = [];
    this.event_id = -1;
};

Event.prototype = {
    init: function() {
        $("#scanCode")[0].addEventListener('touchstart', this.scanCode.bind(this) , false);
        
        //$("#submitCode").click(this.submitCodes.bind(this));
        $("#submitCode")[0].addEventListener('touchend', this.submitCodes.bind(this) , false);
    },
    reset: function() {
        this.barcodes = [];
        this.sections = [];
        this.event_id = -1;
    },
    getCurrentEvents: function(token) {
        var self = this;
        $.ajax({
          url: "http://128.237.74.78:3000/getTodaysEvents.json",
          type: "GET",
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          data: {"auth_token": token},
          success: function(data) {
            $('#events_table').html('');
            var ev = $('<table/>')
            var headers = $('<thead />');
            headers.append('<tr><th>Program</th><th>Sections</th><th>Duration</th><th>Scan</th></tr>');
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
              button.setAttribute('class',"button");
              button.innerHTML = "Scan";
              button.addEventListener('touchstart', self.clickScan.bind(self), false );
              button = $(button);
              button.click(self.clickScan.bind(self));
              td.append(button);
              row.append(td);
              //row.append('<td><a id="scan" href="javascript:void(0)" onclick="clickScan(this)" data-sections="'+data[i]['section']+'" data-event="'+data[i]['event']['id']+'">Scan</a></td>');
              ev_body.append(row);             
            }
            ev.append(ev_body);
            $('#events_table').append(ev);
            $('#date_header').append(" "+todays_date);
            return false;
          },
          error: function(err) {
            console.log("ERROR: ");
            console.log(err);
          }
        });
        return false;
    },
    scanCode: function(e) {
        var self = this;
        e.preventDefault();
        
        window.plugins.barcodeScanner.scan(
            function(result) {
            $('#barcodes').append('<li>'+result.text+'</li>');
            self.barcodes.push(result.text);
            console.log(self.event_id);
            //alert(result.text);
            //alert("Scanned Code: " + result.text 
                   // + ". Format: " + result.format
                   // + ". Cancelled: " + result.cancelled);
            return false;
        }, function(error) {
            alert("Scan failed: " + error);
        });
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
                        
                        if(data.bad_barcodes.length > 0) {
                            for(var j = 0; j<data.bad_barcodes.length; j++) {
                                 $('#bad_barcodes').append('<li>'+data.bad_barcodes[j]+'</li>')
                            }
                        } else {
                             $('#bad_barcodes').append('Every student was scanned.')
                        }
                    } else {
                        $("#barcode_flash").html(data.message);
                        $("#barcode_flash").fadeIn("slow", function() { $("#barcode_flash").fadeOut(1600); return false;})
                    }
                    $('#barcodes').html('');
                    
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
    }
    
}

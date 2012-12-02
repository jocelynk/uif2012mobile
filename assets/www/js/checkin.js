//getTodaysEvents

var eventDetails = {
    event_id: -1,
    sections: [],
    barcodes: []
}


function resetEventDetails() {
    eventDetails["barcodes"] = [];
    eventDetails["sections"] = [];
    eventDetails["event_id"] = -1;
}

function getCurrentEvents(token) {
    console.log("getting current events")
    $.ajax({
          url: "http://128.237.254.224:3000/getTodaysEvents.json",
          type: "GET",
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          data: {"auth_token": token},
          success: function(data) {
          console.log(data);
            $('#events_table').html('');
            console.log(data); 
            var ev = $('<table/>')
            var headers = $('<thead />');
            headers.append('<tr><th>Program</th><th>Sections</th><th>Start Time</th><th>End Time</th><th>Scan</th></tr>');
            ev.append(headers);
            ev_body = $('<tbody/>');
            var todays_date; 
            for (i in data) {
              var row = $('<tr />');
              todays_date = data[i]['event']['date']; 
<<<<<<< HEAD
              // row.append('<td>'+data[i]['event']['date']+'</td>');
=======
              row.append('<td>'+data[i]['event']['date']+'</td>');
>>>>>>> 6432f71155fd78feb50fd06864f3d5721388a930
              row.append('<td>'+data[i]['program']+'</td>');
              var section_list = $('<td/>');
              for(j in data[i]['section']) {
                section_list.append('<span>'+data[i]['section'][j]+'</span><br/>')
              }
              row.append(section_list);
              var start_time = new Date(data[i]['event']['start_time']);
              var end_time = new Date(data[i]['event']['end_time']);
              row.append('<td>'+formatTime(start_time)+'</td>');
              row.append('<td>'+formatTime(end_time)+'</td>');
              row.append('<td><a id="scan" href="javascript:void(0)" onclick="clickScan(this)" data-sections="'+data[i]['section']+'" data-event="'+data[i]['event']['id']+'">Scan</a></td>');
              ev_body.append(row);
            }
            ev.append(ev_body);
            $('#events_table').append(ev);
            $('#date_header').append(" "+todays_date);
<<<<<<< HEAD
           
=======
           console.log(ev);
>>>>>>> 6432f71155fd78feb50fd06864f3d5721388a930
            return false;
          },
          error: function(err) {
            console.log("ERROR: ");
            console.log(err);
          }
        });
        return false;
}

var scanCode = function() {
    window.plugins.barcodeScanner.scan(
        function(result) {
        $('#barcodes').append('<li>'+result.text+'</li>');
        eventDetails["barcodes"].push(result.text);
        console.log(eventDetails["barcodes"]);
        console.log(eventDetails["event_id"]);
        //alert(result.text);
        //alert("Scanned Code: " + result.text 
               // + ". Format: " + result.format
               // + ". Cancelled: " + result.cancelled);
               return false;
    }, function(error) {
        alert("Scan failed: " + error);
    });
}

function clickScan() {
console.log("asdfasdfasdf");
    console.log(event.target);
     var transition = new Transitioner();
     transition.slideDown($('#scan_page'));
     eventDetails["event_id"] = event.target.dataset.event;
     eventDetails["sections"] = event.target.dataset.sections.split(',');
     $('#sections').html('');
     for(i in eventDetails["sections"]) {
        $('#sections').append('<li>'+eventDetails["sections"][i]+'</li>');
     }
}

function submitCodes() {
     //var codes = [046088336251, 461749529271, 474160386673, 862100648575, 420693751780]
     if(eventDetails["barcodes"].length > 0) {
         $.ajax({
          url: "http://128.237.74.78:3000/createAttendances",
          type: "POST",
          data: {"barcodes": eventDetails["barcodes"], "event_id": eventDetails["event_id"]},
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
                resetEventDetails();
            } else {
                $("#barcode_flash").html(data.message);
                $("#barcode_flash").fadeIn("slow", function() { $("#barcode_flash").fadeOut(1600); return false;})
            }
            
            
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


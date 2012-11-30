//getTodaysEvents

function getCurrentEvents(token) {
    console.log("getting current events")
    $.ajax({
          url: "http://128.237.74.78:3000/getTodaysEvents.json",
          type: "GET",
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          data: {"auth_token": token},
          success: function(data) {
            console.log(data);
           
            return false;
          },
          error: function(err) {
            console.log("ERROR: ");
            console.log(err);
          }
        });
        return false;
}
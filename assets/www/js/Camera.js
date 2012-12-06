/*var PhotoUpload = function() {};

PhotoUpload.prototype = function() {
    uploadPhoto: function(imageURI) {
        var options = new FileUploadOptions();
            options.chunkedMode = false;
            options.fileKey="file";
            options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
            options.mimeType="image/jpeg";

            var params = new Object();
            params.value1 = "test";
            params.value2 = "param";

            options.params = params;

            var ft = new FileTransfer();
            ft.upload(imageURI, "http://some.server.com/upload.php", this.success, this.fail, options);
    },
    success: function() { console.log("Code = " + r.responseCode);
            console.log("Response = " + r.response);
            console.log("Sent = " + r.bytesSent);},
    fail: function() {   alert("An error has occurred: Code = " = error.code);
    }
}*/



         function uploadPhoto(imageURI) {
         $("#image").attr("src", imageURI);
         var options = new FileUploadOptions();
         options.chunkedMode = false;
         options.fileKey="file";
         options.fileName=imageURI.substr(imageURI.lastIndexOf('/') +1);
         options.mimeType="image/jpeg";

         var params = new Object();
         params.value1 = "test";
         params.value2 = "param";

         options.params = params;

         var ft = new FileTransfer();
         ft.upload(imageURI, "http://128.237.74.78:3000/getPhoto.json?auth_token="+localStorage.getItem('token'), win, fail, options);
         }

         function win(r) {
         console.log("Code Blah = " + r.responseCode);
         console.log("Response D: = " + r.response);
         console.log("Sent Bytes = " + r.bytesSent);
         }

         function fail(error) {
         console.log("An error has occurred: Code = " + error.code);
         console.log("upload error source " + error.source);
         console.log("upload error target " + error.target);
         }
 



var Camera = function () {
    this.barcode = -1;
    this.init();

  };

Camera.prototype = {
  init: function () {
    var self = this;
    $("#scanCode2").bind('tapone', self.scanCode2.bind(self));
    $("#lib").bind('tapone', self.uploadFromLibrary.bind(self));
    $("#cap").bind('tapone', self.uploadFromCapture.bind(self));

  },
  scanCode2: function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var self = this;
    console.log(this.barcode);
    if (!window.phonegap) {
      alert("Barcoding cannot be accessed from the browser");
    } else {
      window.plugins.barcodeScanner.scan(

      function (result) {
        console.log(self.barcode);
        self.barcode = result.text;
        self.findStudent(result.text)
        return false;
      }, function (error) {
        alert("Scan failed: " + error);
      });
    }
  },
  findStudent: function (barcode) {
    var self = this;
    $.ajax({
      url: "http://uif2012.herokuapp.com/searchForStudent.json",
      type: "GET",
      cache: false,
      beforeSend: function (xhr, settings) {
        settings.url
      },
      data: {
        "bar_code": barcode
      },
      success: function (data) {
        if (typeof data.message == 'undefined') {
          $('#student_result').html('Are you searching for ' + data.first_name + ' ' + data.last_name + '? If not, press the scan button again.');
          $("#student_result").show();
          $("#scanCode2").hide();
          $('#photo_buttons').removeClass('none');
        } else {
          $("#student_flash").html(data.message);
          $("#student_result").show();
          $("#student_flash").fadeIn("slow", function () {
          $("#student_flash").fadeOut(1600)
          })
        }
        return false;
      },
      error: function (err) {
        console.log("ERROR: ");
        console.log(err.statusText);
        alert("There was an error with the scan");
      }
    });
    return false;
  },
  uploadFromLibrary: function (e) {
    var self = this;
      e.preventDefault();
      console.log(self.barcode);
      if (self.barcode !== -1) {
        navigator.camera.getPicture(self.uploadPhoto.bind(self), function (message) {
          alert('get picture failed');
        }, {
          quality: 50,
          destinationType: navigator.camera.DestinationType.FILE_URI,
          sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
        })
      }

  },
  uploadFromCapture: function (e) {
    self = this;
    e.preventDefault();
    // Take picture using device camera, allow edit  
      if (self.barcode != -1) {
        navigator.camera.getPicture(self.uploadPhoto.bind(self), function (message) {
          alert('get picture failed');
        }, {
          quality: 20,
          destinationType: navigator.camera.DestinationType.FILE_URI,
          allowEdit: true
        });
      }
  },
  uploadPhoto: function (imageURI) {
    $("#student_result").hide();
    $("#image").css("height", "auto");
    $("#image").attr("src", imageURI);
    var options = new FileUploadOptions();
    options.chunkedMode = false;
    options.fileKey = "file";
    options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
    options.mimeType = "image/jpeg";

    var params = new Object();
    params.barcode = this.barcode;

    options.params = params;

    var ft = new FileTransfer();
    ft.upload(imageURI, "http://uif2012.herokuapp.com/getPhoto.json?auth_token=" + localStorage.getItem('token'), this.success, this.failure, options);
  },
  success: function (r) {
    console.log("Code = " + r.responseCode);
    console.log("Response = " + r.response);
    console.log("Sent = " + r.bytesSent);  
    $("#scanCode2").show();
    $("#image").css("height", '40%');
    $('#photo_buttons').addClass('none');
    $('#student_result').html('');
    alert("Your image was successfully uploaded");
  },
  failure: function (error) {
    console.log("An error has occurred: Code = " + error.code);
    console.log("upload error source " + error.source);
    console.log("upload error target " + error.target);
    $("#image").prop("src", '');
    alert("Unsuccessful upload");
  }
}

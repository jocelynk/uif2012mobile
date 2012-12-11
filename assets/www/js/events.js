 function onLoad() {
   document.addEventListener("deviceready", onDeviceReady, false);
 }

 // Cordova is loaded and it is now safe to make calls Cordova methods
 //


 function onDeviceReady() {
   document.addEventListener("pause", onPause, false);
 }

 // Handle the pause event
 //


 function onPause() {}

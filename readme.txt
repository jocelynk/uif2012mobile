Jocelyn Kong (jocelynk)
Aderinsola Akintilo (aakintil)

Things That will be added to application for due date of Dec. 14th:
- Ability to view and add more events
- Updated Home page
- Change table to list
- UI improvements (not sure what this would entail as of now)
- Phonegap lifecycle events to mimic Android Activity LifeCycle
- code cleanup
- switch libs to productions version
- makes things more mobiley
- change eventListeners to tap library

Description: This application is a complement mobile application to a Ruby on Rails based application we are developing for a local Pittsburgh Organization Urban Impact. These two applications allow the organization to track attendances via barcoding and run statistics on the results to send to the government for funding.

Mobile End
Currently, the mobile application allows users to scan barcodes of the students which is then sent into the database and take and upload photos of students to be saved in the database.

Rails End
Wrote a custom API to allow the mobile application to hit the database of the web application.

How to Use:
1. Login with credentials:
  - Username: profh@cmu.edu
  - Password: secret
2. Navigation is the button in the upper-right hand corner
3. Navigation Tabs
  - Checkin
    * Pulls from the database a list of events currently available for today
    * Tap the arrow next to an event row on the table
    * Scan button will allow you to scan barcodes
    * Submit button will send the barcodes to the database to populate attendance
  - Student
    * Search for a student by scanning a barcode
    * Upload a photo from library or capture a new photo to upload into the database

Because this mobile app complements our existing web application, you will have to login to our web application to see the results.
1. Credentials:
  - Username: profh
  - Password: secret    
2. Create a new event for the current day to be able to see events in the mobile application
3. Find an object with a 12 digit barcode. Scan that to see what barcode it is.
4. Go to students link. Choose a student and edit their barcode to be the barcode of the object.
5. On the home page, if you click on the barcode icon of your current event, you will see a list of students who attended or did not attend the event. If you can the barcode with your mobile phone, you should see the student updated to attending.
6. If you upload a student's photo and go to their page, you should see the uploaded photo replacing their default avatar.
    
Required Elements
1. HTML - index.html starting from line 1
2. CSS - style.css, lines 35-51 uses CSS3 transitions
3. Dom Manipulation - Event.js, lines 56-61, button manipulation
4. JQuery - scri8080pts.js, starting from line 7, manages dropdown of nav
5. UI widgets (not using JQuery Mobile or Sencha Touch), atmosphere.css - created own UI not using framework
6. PhoneGap - assets/libs/barcodescanner.js - using Phonegap barcode scanner plugin, also in Camera.js using Phonegap camera plugin
7. AJAX (clientside) - Authentication.js, line 34 is url to Custom Rails API
8. AJAX - server side, see Rails API folder files (token_controller.rb, mobile_controller.rb, routes.rb)
9. localStorage - LoaderApp.js, line 26 saves authentication token for session
10. server-side databases - Rails server-side database, see schema.rb

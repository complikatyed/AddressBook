/* jshint jquery: true */
'use strict'

function hello() {
  return 'world';
}




// Above is some space for tests.  Down here is the actual JS code...
//
//Make the form appear on 'add new contact' click

var $form = $('form');

$form.submit(function(evt) {
  evt.preventDefault();

  var $firstName   = $('input[name="firstName"]'),
      $lastName    = $('input[name="lastName"]'),
      $nickName    = $('input[name="nickName"]'),
      $phoneNumber = $('input[name="phoneNumber"]'),
      $email       = $('input[name="email"]'),
      $twitter     = $('input[name="twitter"]'),
      $photoUrl    = $('input[name="photoURL"]'),
      firstName    = $firstName.val(),
      lastName     = $lastName.val(),
      nickName     = $nickName.val(),
      phoneNumber  = $phoneNumber.val(),
      email        = $email.val(),
      twitter      = $twitter.val(),
      photoUrl     = $photoUrl.val();


});



// POST form data to firebase
//
// Add data to contact list in firebase
//
// Make the form disappear
//
// getJSON call for the information
//
// Create divs for each contact
//
// Append contact data to the new divs
//
// Remove contact button goes with each div
//
// Contact info gets removed from both page and database on click

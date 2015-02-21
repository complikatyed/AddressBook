/* jshint jquery: true */

'use strict';

function hello() {
  return 'world';
}


// Above is some space for tests.  Down here is the actual JS code...


var FIREBASE_URL   = 'https://groovyaddressapp.firebaseio.com/contacts.json',
    $form          = $('contacts-form'), // This is the main "getting information" form
    $newContact    = $('.newContact'),   // This is the button at the top (that reveals the contact form).
    $addContact    = $('.addContact'),   // This is the button IN the form that submits the contact info.
    $removeContact = $('.remove');       // This is the button that will remove a contact (from DB and screen list).




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


//Part that makes the "add a new friend" form visible

$(document).ready(function () {
  $newContact.click(function () {   // Click the "New Contact" button so form will show
    $form.show();                   // Show the form.
    $addContact.show();             // Not sure what this is doing...
    $newContact.hide();             // Now the "New Contact" button goes away
  });

  $addContact.click(getContact);    // Calls the "Get Contact" function (defined below)
  removeContact();                  // Calls the "Remove Contact" function (which is defined below)
});

$.get(FIREBASE_URL, function(data) {           // Sending a call to the firebase for data
  Object.keys(data).forEach(function(uuid) {   // For each item in the firebase, get the data (use the uuid to identify them)
    createContactTable(uuid, data[uuid]);       // Add the data to the table, using the uuid to identify the info in the table.
  });
});

function createContactTable(uuid, contact) {    // Declaring a function that will use the uuid and contact to create a table.
    var $tr = $('<tr><<td class="name">' + contact.name +
                '</td><td class="phone">' + contact.phone +
                '</td><td class="email">' + contact.email +
                '</td><td class="twitter">' + contact.twitter +
                '</td><td class="image"><img class="image" src="' + contact.photo +
                '"></td><td><button class="remove">Remove</button></td></tr>');
    $tr.attr('data-uuid', uuid);
    $('.target').append($tr);
}

function getContact(event) {
  event.preventDefault();

  var $name    = $('.contactName').val(),
      $phone   = $('.phoneNumber').val(),
      $email   = $('.email').val(),
      $twitter = $('.twitter').val(),
      $photo   = $('.photoUrl').val();

  var contact = {name: $name, phone: $phone, email: $email, twitter: $twitter, photo: $photo};
  var data = JSON.stringify(contact);
  $.post(FIREBASE_URL, data, function(res){
    createContactTable(uuid, contact);
  });
  $form.hide();
  $addContact.hide();
  $newContact.show();
}

function removeContact() {
  $('tbody').on('click', $removeContact, function(evt){
    var $tr = $(evt.target).closest('tr');
    $tr.remove();
    var uuid = $tr.data('uuid');
    var url = 'https://groovyaddressapp.firebaseio.com/contacts/' + uuid + '.json';
    $.ajax(url, {type: "DELETE"});
  });
}

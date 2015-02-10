/* jshint jquery: true */
'use strict'

function hello() {
  return 'world';
}




// Above is some space for tests.  Down here is the actual JS code...


var myUrl = 'https://groovyaddressapp.firebaseio.com/Contacts.json',
    $tr = $('<tr></tr>'),
    $form = $('form'),
    $tbody = $('tbody');

$('#addNew').on('click', function() {
  event.preventDefault();
  retrieveContactData();
});


$('#table').on('click', '.remove', function() {
  var $tr = $(this).closes("tr");
  $tr.remove();
});

function retrieveContactData() {
  $.get(myUrl, getContacts);
}

function getContacts(data) {
  var contact = new Contact(data);
  createTableData(contact);

  function createTableData(contact) {
    $tr;
    var $tdName = $('<td>' + contact.contactName + '</td>');
    $tr.append($tdName);
    var $tdPhone = $('<td>' + contact.phoneNumber + '</td>');
    $tr.append($tdPhone);
    var $tdEmail = $('<td>' + contact.email + '</td>');
    $tr.append($tdEmail);
    var $tdTwitter = $('<td>' + contact.twitter + '</td>');
    $tr.append($tdTwitter);
    var $tdPicture = $('<td>' + contact.photoUrl + '</td>');
    $tr.append($tdPicture);
    var $tdButton = $('<button class="remove">Remove</button>');
    $tr.append($tdButton);
    $('#table').append($tr);

    jsonifiedData = JSON.stringify(contact);
    $.post(myUrl, jsonifiedData);
  }
}

function Contact(obj) {
   this.contactName = obj.contactName;
   this.phoneNumber = obj.phoneNumber;
   this.email = obj.email;
   this.twitter = obj.twitter;
   this.photoUrl = obj.photoUrl;
}


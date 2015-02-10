/* jshint jquery: true */


function hello() {
  return 'world';
}




// Above is some space for tests.  Down here is the actual JS code...


var myUrl = 'https://groovyaddressapp.firebaseio.com/contacts.json',
    $tr = $('<tr></tr>');


$('#addNew').on('click', function() {
  event.preventDefault();
  retrieveContactData();
});

// I think the problem is the circularity.  I don't have anything in the data to grab, so it's looping.


function retrieveContactData() {
  $.getJSON(myUrl, getContacts);
}

function getContacts(res) {
  var contact = new Contact(res);
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


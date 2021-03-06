//Variable declaration in jquery

let fName = $('#name'),
  password = $('#password'),
  email = $('#email'),
  phoneNumber = $('#phone'),

  regUserBtn = $('#regUserBtn'),
  logUserBtn = $('#logUserBtn'),
  updateUserForm = $("#updateUserForm"),
  userIndex,
  users = [],
  admin = ["gileado@icloud.com", "balmify@gmail.com"],
  globalIpAddress = "http://159.65.21.42:9000";


loadUsersData()

//Hide this form and show only when you want to edit data
updateUserForm.hide()
loadUsersData();
//Events in jquery
regUserBtn.on('click', function () {
  let userObj = {
    "name": fName.val(),
    "phone": phoneNumber.val(),
    "email": email.val(),
    "password": password.val()
  };

  if (userIndex == null) {

    $.ajax({
      type: 'POST',
      url: `${globalIpAddress}/register`,
      data: userObj,
      success: function (response) {
        //Authenticating a user
        if (response.error) {
          alert(`Registration Failed, ${response.error}`);
        } else {
          alert(`Registration successful, welcome ${response.name}`);
          window.location.href = 'login.html';
        }

      },
      error: function (err) {
        console.log(err.statusText);
      },
    });
  } else {

    let updateId = users[userIndex]['_id'];
    $.ajax({
      type: 'PUT',
      url: `${globalIpAddress}/user/${updateId}`,
      data: userObj,
      success: function (response) {
        if (response.error) {
          alert(`Registration Failed, ${response.error}`);
        } else {
          alert(`Update successful, at ${response.success}`);
          loadUsersData();
        }

      },
      error: function (err) {
        alert(err.statusText);
        console.log();
      },
    });
    userIndex = null;
    regUserBtn.html('Add Data');
  }

  clearForm();
  loadUsersData();
});
//For Login
logUserBtn.on('click', function () {
  let logObj = {
    "email": email.val(),
    "password": password.val()
  };

  if (userIndex == null) {

    $.ajax({
      type: 'POST',
      url: `${globalIpAddress}/login`,
      data: logObj,
      success: function (response) {
        //Authenticating a user
        if (response.error) {
          alert(`Login Failed, ${response.error}`);
        } else {
          alert(`Login successful, welcome ${response.name}`);
        
            if (response.email == "gileado@icloud.com" || response.email == "balmify@gmail.com") {
              window.location.href = '../sassiholford_admin/index.html'
            } else {
              window.location.href = 'cart.html';
            }
        }
      },
      error: function (err) {
        alert(err.statusText);
        console.log();
      },
    });
  };
});

//Assign event to a tag which is editBtn
$('#allUsersView').on('click', '.editBtn', function () {
  updateUserForm.show()
  userIndex = $(this).attr('indexData');

  fName.val(users[userIndex]['name']);
  password.val(users[userIndex]['password']);
  email.val(users[userIndex]['email']);
  phoneNumber.val(users[userIndex]['phone']);
  regUserBtn.html('Update Data');
});

$('#allUsersView').on('click', '.deleteBtn', function () {
  let shouldDelete = confirm('Do you want to delete this record?');

  if (shouldDelete) {
    let deleteIndex = $(this).attr('indexData');

    let deleteId = users[deleteIndex]['_id'];

    $.ajax({
      type: 'DELETE',
      url: `${globalIpAddress}/user/${deleteId}`,
      success: function (response) {
        console.log(response);
        alert('User Deleted');
        loadUsersData();
      },
      error: function (err) {
        console.log(err.statusText);
      },
    });



  }
});

function loadUsersData() {
  $.ajax({
    type: 'GET',
    url: `${globalIpAddress}/users`,
    success: function (response) {
      users = response;
      let rows = '';

      for (let index = 0; index < users.length; index++) {
        rows += `
     <tr>
        <th>${index + 1}</th>
        <th>${users[index]["name"]}</th>
        <th>${users[index]["email"]}</th>
        <th>${users[index]["phone"]}</th>
        <th><a href="#" class="editBtn" indexData="${index}" >Edit</a> | <a href="#" indexData="${index}" class="deleteBtn">Delete</a></th>
      </tr>`
      }

      $('#allUsersView').html(rows)
    },
    error: function (err) {
      console.log(err);
    },
  });


}

function clearForm() {
  updateUserForm.hide()
  fName.val('');
  password.val('');
  email.val('');
  phoneNumber.val('');
}
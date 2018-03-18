// ---------- Sign up JS ----------
$(document).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDKcl2RLFtvO_JaPaHK46UzCjOJ_hp3MPA",
    authDomain: "farmers-markit.firebaseapp.com",
    databaseURL: "https://farmers-markit.firebaseio.com",
    projectId: "farmers-markit",
    storageBucket: "farmers-markit.appspot.com",
    messagingSenderId: "236876279787"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  //NEW USER variables
  var username = "";
  var email = "";
  var password = "";
  var checkPass = "";
  //Add to firebase

  //Get user info and store into variable
  var email = $("#email") //email
    .val()
    .trim();
  var userName = $("#newUser") //username
    .val()
    .trim();
  var password = $("#newPass") //password
    .val()
    .trim();
  var checkPass = $("#rePass") //retyped password
    .val()
    .trim();

  //When user clicks sign up
  //Push values into user object
  $("#signUp").on("click", function(event) {
    event.preventDefault();

    // Grabbed values from text-boxes
    username = $("#newUser")
      .val()
      .trim();
    email = $("#email")
      .val()
      .trim();
    password = $("#newPass")
      .val()
      .trim();
    checkPass = $("#rePass")
      .val()
      .trim();

    // Code for "Setting values in the database"
    database.ref("user").push({
      username: username,
      email: email,
      password: password
    });
  });

  // ---------- Checks if password match ----------

  function checkPasswordMatch() {
    var password = $("#newPass")
      .val()
      .trim();
    var confirmPassword = $("#rePass")
      .val()
      .trim();
    //Conditions to check if passwords that was typed in matches
    if (password != confirmPassword) {
      $("#CheckPasswordMatch").text("Passwords do not match!");
    } else {
      $("#CheckPasswordMatch").text("Passwords match.");
    }
  }
  checkPasswordMatch();

  //Hide div first
  $("#CheckPasswordMatch").hide();

  //Show when password is being typed in
  $("#rePass").on("keyup", function() {
    $("#CheckPasswordMatch").show();
  });
  $("#rePass").keyup(checkPasswordMatch);
});

// ---------- Check if username is available ----------
// ---------- Check if email already exists ----------

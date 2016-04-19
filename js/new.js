$("#login-trigger").click(function(){
  $('#signupModal').modal('hide');
  $('#loginModal').modal('show');
});

$("#signup-trigger").click(function(){
  $('#signupModal').modal('show');
  $('#loginModal').modal('hide');
});
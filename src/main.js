import $ from 'jquery';

// var MyBirthDay =require('./countage.js').birthdayModule;


$(document).ready(function(){
  $("#btn").click(function(){
    var usersBirthday = $("#mybirthday").val();
    $("#result").text(usersBirthday);
  });
  $("#todaysdate").click(function(){

    var usValue = new Date();
    $("#result1").text(usValue);

  });


});

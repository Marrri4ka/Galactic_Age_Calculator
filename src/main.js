import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Earth from './earth.png';

// var MyBirthDay =require('./countage.js').birthdayModule;


$(document).ready(function(){
  $("#earthImg").src = Earth;

  $("#btn").click(function(){
    var usersBirthday = $("#mybirthday").val();
    $("#result").text(usersBirthday);
  });
  $("#todaysdate").click(function(){

    var usValue = new Date();
    $("#result1").text(usValue);
  });


});

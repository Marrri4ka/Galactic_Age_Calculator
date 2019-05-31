var MyBirthDay = require('./../src/countage.js').birthdayModule;
describe ('MyBirthDay', function(){

  it ('should test whether the program show the right date', function(){
    var myBirthDay = new MyBirthDay(1991,07,30);
    expect(myBirthDay.countAge()).toEqual(27);

  });

});

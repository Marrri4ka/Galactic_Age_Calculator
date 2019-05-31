var MyBirthDay = require('./../src/countage.js').birthdayModule;
describe ('MyBirthDay', function(){

  // it ('should count age on Earth', function(){
  //   var myBirthDay = new MyBirthDay(1991,07,30);
  //   expect(myBirthDay.countAgeonEarth()).toEqual(27);
  //
  // });

  it('should count age on Mercury ', function(){
    var myBirthDay = new MyBirthDay(1991,07,30);
    expect(myBirthDay.countAgeonMercury()).toEqual(115);

  });

});

var MyBirthDay = require('./../src/countage.js').birthdayModule;
describe ('MyBirthDay', function(){

  it ('should count age on Earth', function(){
    var myBirthDay = new MyBirthDay(1991,07,30);
    expect(myBirthDay.countAgeOnEarth()).toEqual(27);

  });

  it('should count age on Mercury ', function(){
    var myBirthDay = new MyBirthDay(1991,07,30);
    expect(myBirthDay.countAgeOnMercury()).toEqual(115);

  });


    it('should count age on Jupiter ', function(){
      var myBirthDay = new MyBirthDay(1991,07,30);
      expect(myBirthDay.countAgeOnJupiter()).toEqual(2);

    });

    it('should count age on Venus ', function(){
      var myBirthDay = new MyBirthDay(1991,07,30);
      expect(myBirthDay.countAgeOnVenus()).toEqual(44);

    });

it('should count how long you should stay on Earth', function(){
  var myBirthDay= new MyBirthDay(1991,07,30,90);
  expect(myBirthDay.countLifeExpectancy()).toEqual(63);

});

});

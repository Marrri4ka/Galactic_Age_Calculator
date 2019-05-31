const MyBirthDay = require('./../src/countage.js').birthdayModule;
describe ('MyBirthDay', function() {
  it ('should count age on Earth', function() {
    const myBirthDay = new MyBirthDay(1991,07,30,"USA","m");
    expect(myBirthDay.countAgeOnEarth()).toEqual(27);

  });

  it('should count age on Mercury ', function() {
      const myBirthDay = new MyBirthDay(1991,07,30,"USA","m");
    expect(myBirthDay.countAgeOnMercury()).toEqual(115);

  });


  it('should count age on Jupiter ', function() {
    const myBirthDay = new MyBirthDay(1991,07,30,"USA","m");
    expect(myBirthDay.countAgeOnJupiter()).toEqual(2);
  });

  it('should count age on Venus ', function() {
      const myBirthDay = new MyBirthDay(1991,07,30,"USA","m");
    expect(myBirthDay.countAgeOnVenus()).toEqual(44);
  });

  it('should count how long you should stay on Earth', function() {
    const myBirthDay= new MyBirthDay(1991,07,30,"USA","f");
    expect(myBirthDay.countLifeExpectancy()).toEqual(53);
  });

  it('should check if you exceed expectations:)', function() {
    const myBirthDay= new MyBirthDay(1963,01,09,"USA","f");
    expect (myBirthDay.countLifeExpectancy()).toEqual(24);
  });
});

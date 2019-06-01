import { MyBirthDay } from './../src/countage.js';

describe ('MyBirthDay', function() {
  it ('should count age on Earth', function() {
    const myBirthDay = new MyBirthDay(1991,7,30,"USA","m");
    expect(myBirthDay.countAgeOnEarth()).toEqual(27);

  });

  it('should count age on Mercury ', function() {
    const myBirthDay = new MyBirthDay(1991,7,30,"USA","m");
    expect(myBirthDay.countAgeOnMercury()).toEqual(115);

  });


  it('should count age on Jupiter ', function() {
    const myBirthDay = new MyBirthDay(1991,7,30,"USA","m");
    expect(myBirthDay.countAgeOnJupiter()).toEqual(2);
  });

  it('should count age on Venus ', function() {
    const myBirthDay = new MyBirthDay(1991,7,30,"USA","m");
    expect(myBirthDay.countAgeOnVenus()).toEqual(44);
  });

  it('should count how long you should stay on Earth', function() {
    const myBirthDay= new MyBirthDay(1991,7,30,"USA","f");
    expect(myBirthDay.countLifeExpectancy()).toEqual(53);
  });

  it('should check if you exceed expectations:)', function() {
    const myBirthDay= new MyBirthDay(1963,1,9,"USA","f");
    expect (myBirthDay.countLifeExpectancy()).toEqual(24);
  });


  it('should count how long you should stay on Mars,', function() {
    const myBirthDay= new MyBirthDay(1963,1,9,"USA","f");//80
    expect (myBirthDay.countLifeExpectancyMars()).toEqual(51);
  });

  it('should count how long you should stay on Mercurt,', function() {
    const myBirthDay= new MyBirthDay(1991,7,30,"USA","f");//80
    expect (myBirthDay.countLifeExpectancyMercury()).toEqual(35);
  });

  it('should count how long you should stay on Jupiter,', function() {
    const myBirthDay= new MyBirthDay(1991,7,30,"USA","f");//80
    expect (myBirthDay.countLifeExpectancyJupiter()).toEqual(78);
  });

  it('should count how long you should stay on Venus,', function() {
    const myBirthDay= new MyBirthDay(1991,7,30,"USA","f");//80
    expect (myBirthDay.countLifeExpectancyVenus()).toEqual(36);
  });
});

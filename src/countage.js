function MyBirthDay(year,month,day,lifeexpectancy)

{
  this.year = year;
  this.month = month;
  this.day = day;
  this.lifeexpectancy = lifeexpectancy;
}
MyBirthDay.prototype.ageOnPlanet = function(multiplier)
{
  var oneDay = 24*60*60*1000; // milisec
  var todaysdate = new Date();
  var birthday = new Date(this.year,this.month,this.day);

  var res = Math.round(Math.abs(todaysdate.getTime() - birthday.getTime())/oneDay);
  var MercuryYears = 365*multiplier;
  var res1 = Math.floor(res/MercuryYears);
  return res1;
};

MyBirthDay.prototype.countLifeExpectancy = function(){


  if(this.lifeexpectancy < this.countAgeOnEarth())
  {
    return this.countAgeOnEarth() - this.lifeexpectancy;
  }

  else {
    return this.lifeexpectancy- this.countAgeOnEarth();
  }


};



MyBirthDay.prototype.countAgeOnEarth = function()
{
  return this.ageOnPlanet(1);
};

MyBirthDay.prototype.countAgeOnMercury = function()
{

  return this.ageOnPlanet(0.24);
};

MyBirthDay.prototype.countAgeOnVenus = function()
{

  return this.ageOnPlanet(0.62);
};

MyBirthDay.prototype.countAgeOnMars = function()
{


  return this.ageOnPlanet(1.88);
};

MyBirthDay.prototype.countAgeOnJupiter = function()
{


  return this.ageOnPlanet(11.86);
};



exports.birthdayModule = MyBirthDay;

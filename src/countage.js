function MyBirthDay(year,month,day,country,gender)
{
  this.year = year;
  this.month = month;
  this.day = day;
  this.country = country;
  this.gender = gender;
}

MyBirthDay.prototype.ageOnPlanet = function(multiplier)
{
  const oneDay = 24*60*60*1000; // milisec
  let todaysdate = new Date();
  const birthday = new Date(this.year,this.month,this.day);

  let res = Math.round(Math.abs(todaysdate.getTime() - birthday.getTime())/oneDay);
  const MercuryYears = 365*multiplier;
  let res1 = Math.floor(res/MercuryYears);
  return res1;
};

MyBirthDay.prototype.getAverageLifeAge = function()
{
  if(this.country === "USA" && this.gender === "m" )
  {
    return 75;
  }
  if(this.country === "USA" && this.gender === "f")
  {
    return 80;
  }
  if(this.country === "UK" && this.gender === "m" )
  {
    return 78;
  }
  if(this.country === "UK" && this.gender === "f")
  {
    return 83;
  }
  if(this.country === "UKR" && this.gender === "m" )
  {
    return 68;
  }
  if(this.country === "UKR" && this.gender === "f")
  {
    return 72;
  }

};

MyBirthDay.prototype.countLifeExpectancy = function(){

  if(this.getAverageLifeAge() < this.countAgeOnEarth())
  {
    return this.countAgeOnEarth() - this.getAverageLifeAge();
  }

  else {
    return this.getAverageLifeAge()- this.countAgeOnEarth();
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

function MyBirthDay(year,month,day)

{
  this.year = year;
  this.month = month;
  this.day = day;
}


MyBirthDay.prototype.countAgeonEarth = function()
{
  var oneDay = 24*60*60*1000; // milisec
  var todaysdate = new Date();
  var birthday = new Date(this.year,this.month,this.day);

  var res = Math.round(Math.abs(todaysdate.getTime() - birthday.getTime())/oneDay);
  var res1 = Math.floor(res/365);

  return res1;
};

MyBirthDay.prototype.countAgeonMercury = function()
{
  var oneDay = 24*60*60*1000; // milisec
  var todaysdate = new Date();
  var birthday = new Date(this.year,this.month,this.day);

  var res = Math.round(Math.abs(todaysdate.getTime() - birthday.getTime())/oneDay);
  var MercuryYears = 365*0.24;
  var res1 = Math.floor(res/MercuryYears);

  return res1;
};


exports.birthdayModule = MyBirthDay;

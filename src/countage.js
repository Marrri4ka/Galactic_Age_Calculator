class MyBirthDay
{
  constructor(year,month,day,country,gender)
  {
    this.year = year;
    this.month = month;
    this.day = day;
    this.country = country;
    this.gender = gender;
  }

  ageOnPlanet (multiplier)
  {
    const oneDay = 24*60*60*1000; // milisec
    let todaysdate = new Date();
    const birthday = new Date(this.year,this.month,this.day);

    let res = Math.round(Math.abs(todaysdate.getTime() - birthday.getTime())/oneDay);
    const MercuryYears = 365*multiplier;
    let res1 = Math.floor(res/MercuryYears);
    return res1;
  }

  getAverageLifeAge ()
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
  }

  countLifeExpectancy (){
    if(this.getAverageLifeAge() < this.countAgeOnEarth())
    {
      return this.countAgeOnEarth() - this.getAverageLifeAge();
    }
    else {
      return this.getAverageLifeAge()- this.countAgeOnEarth();
    }
  }

  countLifeExpectancyMercury (){
    if(this.getAverageLifeAge() < this.countAgeOnMercury())
    {
      return this.countAgeOnMercury() - this.getAverageLifeAge();
    }
    else {
      return this.getAverageLifeAge()- this.countAgeOnMercury();
    }
  }

  countLifeExpectancyVenus (){
    if(this.getAverageLifeAge() < this.countAgeOnVenus())
    {
      return this.countAgeOnVenus() - this.getAverageLifeAge();
    }
    else {
      return this.getAverageLifeAge()- this.countAgeOnVenus();
    }
  }

  countLifeExpectancyMars (){
    if(this.getAverageLifeAge() < this.countAgeOnMars())
    {
      return this.countAgeOnMars() - this.getAverageLifeAge();
    }
    else {
      return this.getAverageLifeAge()- this.countAgeOnMars();
    }
  }

  countLifeExpectancyJupiter (){
    if(this.getAverageLifeAge() < this.countAgeOnJupiter())
    {
      return this.countAgeOnJupiter() - this.getAverageLifeAge();
    }
    else {
      return this.getAverageLifeAge()- this.countAgeOnJupiter();
    }
  }


  countAgeOnEarth ()
  {
    return this.ageOnPlanet(1);
  }

  countAgeOnMercury ()
  {
    return this.ageOnPlanet(0.24);
  }
  countAgeOnVenus ()
  {
    return this.ageOnPlanet(0.62);
  }
  countAgeOnMars ()
  {
    return this.ageOnPlanet(1.88);
  }

  countAgeOnJupiter ()
  {
    return this.ageOnPlanet(11.86);
  }
}

exports.birthdayModule = MyBirthDay;

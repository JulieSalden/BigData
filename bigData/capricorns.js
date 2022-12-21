const ARIES = "Aries";
const TAURUS = "Taurus";
const GEMINI = "Gemini";
const CANCER = "Cancer";
const LEO = "Leo";
const VIRGO = "Virgo";
const LIBRA = "Libra";
const SCORPIO = "Scorpio";
const SAGGITARIUS = "Saggitarius";
const CAPRICORN = "Capricorn";
const AQUARIUS = "Aquarius";
const PISCES = "Pisces";

// sterrebeeld van de mensen bepalen
const starSign = (month, day) => {
  if (month === 1 && day <= 20) return CAPRICORN;
  if (month === 1 && day >= 21) return AQUARIUS;
  if (month === 2 && day <= 19) return AQUARIUS;
  if (month === 2 && day >= 20) return PISCES;
  if (month === 3 && day <= 20) return PISCES;
  if (month === 3 && day >= 21) return ARIES;
  if (month === 4 && day <= 20) return ARIES;
  if (month === 4 && day >= 21) return TAURUS;
  if (month === 5 && day <= 20) return TAURUS;
  if (month === 5 && day >= 21) return GEMINI;
  if (month === 6 && day <= 21) return GEMINI;
  if (month === 6 && day >= 22) return CANCER;
  if (month === 7 && day <= 22) return CANCER;
  if (month === 7 && day >= 23) return LEO;
  if (month === 8 && day <= 23) return LEO;
  if (month === 8 && day >= 24) return VIRGO;
  if (month === 9 && day <= 21) return VIRGO;
  if (month === 9 && day >= 22) return LIBRA;
  if (month === 10 && day <= 22) return LIBRA;
  if (month === 10 && day >= 23) return SCORPIO;
  if (month === 11 && day <= 21) return SCORPIO;
  if (month === 11 && day >= 22) return SAGGITARIUS;
  if (month === 12 && day <= 21) return SAGGITARIUS;
  if (month === 12 && day >= 22) return CAPRICORN;
};

// om een sterrebeeld te bepalen heb een dag en een maand nodig, dus die variabele moet ik maken uit dmy
// dat doe ik door ("/") te gebruiken en dan de plaats aan te geven van de var die ik nodig heb
// vervolgens voeg ik met rp.sign een kenmerk toe aan het object, omdat ik daar later op wil filteren
// rp.sign wordt bepaald door de maand en de dag in de starSign functie te gooien en die bepaalt 
// vervolgens welk sterrebeeld het is. Daarna de persoon met alle kenmerken returnen!!! Anders komt er niks uit
const getStarSign = (rp) => {
  const month = parseInt(rp.birthday.dmy.split("/")[1]);
  const day = parseInt(rp.birthday.dmy.split("/")[0]);
  rp.sign = starSign(month, day);
  return rp
};


// alle vrouwelijke capricorns boven 30 verzamelen en daarna zorgen dat het kenmerk sterrebeeld wordt
// toegevoegd met de getStarSign functie (die vervolgens weer starSign aanroept). 
// zodra deze allemaal door map persoon voor persoon gedaan zijn kan ik er weer op filteren.
const getCapricornWomenAbove30 = () => {
  const allCapriWomenAbove30 = randomPersonData
    .filter((rp) => {
      return rp.gender === "female";
    })
    .filter((rp) => {
      return rp.age > 30;
    })
    .map(rp => getStarSign(rp))
    .filter((rp) => {
      return rp.sign === CAPRICORN;
    });
    return allCapriWomenAbove30
};

console.log(getCapricornWomenAbove30());


// toevoegen aan de dom inc voor achter naam en foto
const addCapricornsToDom = () => {
  const capriList = getCapricornWomenAbove30();
  capriList.forEach((capri) => {
    const newLi = document.createElement("li");
    const fnSpan = document.createElement("SPAN")
    fnSpan.innerText = capri.name;
    const snSpan = document.createElement("SPAN")
    snSpan.innerText = capri.surname;
    const photoSpan = document.createElement("img")
    photoSpan.src = capri.photo
    newLi.appendChild(fnSpan)
    newLi.appendChild(snSpan)
    newLi.appendChild(photoSpan)
    results.appendChild(newLi);
    
  });
};


// event voor de button
const capricornListClick = () => {
  capricornButton.addEventListener("click", emptyList);
  capricornButton.addEventListener("click", addCapricornsToDom);
};

capricornListClick();

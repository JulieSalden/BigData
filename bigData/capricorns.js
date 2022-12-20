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

const getStarSign = (rp) => {
  const month = parseInt(rp.birthday.dmy.split("/")[1]);
  const day = parseInt(rp.birthday.dmy.split("/")[0]);
  rp.sign = starSign(month, day);
};


// alle vrouwelijke capricorns boven 30 verzamelen
const getCapricornWomenAbove30 = () => {
  const allWomenAbove30 = randomPersonData
    .filter((rp) => {
      return rp.gender === "female";
    })
    .filter((rp) => {
      return rp.age > 30;
    })
    .map(getStarSign)
    .filter((rp) => {
      return rp.sign === CAPRICORN;
    });
};

console.log(getCapricornWomenAbove30());


// toevoegen aan de dom inc voor achter naam en foto
const addCapricornsToDom = () => {
  const capriList = getCapricornWomenAbove30();
  capriList.sort()
  capriList.forEach((capri) => {
    const newLi = document.createElement("li");
    const fnSpan = document.createElement("SPAN").innerText = randomPersonData.name;
    const snSpan = document.createElement("SPAN").innerText = randomPersonData.surname;
    const photoSpan = document.createElement("img")
    photoSpan.src = randomPersonData.photo
    newli.appendChild(fnSpan)
    newli.appendChild(snSpan)
    newli.appendChild(photoSpan)
    results.appendChild(newLi);
    
  });
};


// event voor de button
const capricornListClick = () => {
  countryButton.addEventListener("click", emptyList);
  capricornButton.addEventListener("click", addCapricornsToDom);
};

capricornListClick();

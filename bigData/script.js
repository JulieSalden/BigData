const getCountryList = () => {
  return randomPersonData.map((rp) => {
    return rp.region;
  });
};

const sortCountries = () => {
  randomPersonData.sort((a, b) => a.region.localeCompare(b.region));
};

const addCountriesToDom = () => {
  const countryList = getCountryList();
  countryList.forEach((country) => {
    const countryUl = document.createElement("ul");
    const newLi = document.createElement("li");
    newLi.innerHTML = country;
    countryUl.appendChild(newLi);
    sortCountries();
  });
};

const countryListClick = () => {
  const countryButton = document.querySelector("#countryList");
  countryButton.addEventListener("click", addCountriesToDom);
};




//onst getCapricorns = () => {
 // const allWomenAbove30 = randomPersonData
 //   .filter((rp) => {
 //     return rp.gender === "female";
 //   })
 //   .filter((rp) => {
 //     return rp.age > 30;
 //   });
 // console.log(allWomenAbove30);
//};

//getCapricorns();

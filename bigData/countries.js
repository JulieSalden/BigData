// lijst met land namen verzamelen
const getCountryList = () => {
  return randomPersonData.map((rp) => {
    return rp.region;
  });
};

// landen toevoegen aan de dom
const addCountriesToDom = () => {
  const countryList = getCountryList();
  countryList.sort();
  countryList.forEach((country) => {
    const newLi = document.createElement("li");
    newLi.innerHTML = country;
    results.appendChild(newLi);
  });
};

// wanneer de button geklikt wordt
const countryListClick = () => {
  countryButton.addEventListener("click", emptyList);
  countryButton.addEventListener("click", addCountriesToDom);
};

countryListClick();



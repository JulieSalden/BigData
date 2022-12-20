const countryButton = document.querySelector("#countryList");
const results = document.querySelector(".results");
const capricornButton = document.querySelector("#capricornWomen");

// functie om ul leeg te maken voordat er iets toegevoegd wordt
const emptyList = () => {
    while (results.firstChild) {
      results.removeChild(results.firstChild);
    }
  };

  
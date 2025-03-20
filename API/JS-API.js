var baseUrl = "https://random-data-api.com/api/v2/beers";

function fetchData() {
  let resultSize = document.getElementById("resultSize").value;
  let url = `${baseUrl}?size=${resultSize}`;
  // Use fetch() to make the request to the API
  fetch(url)
    .then((response) => response.json())
    .then((results) => displayResults(results))
    .catch((error) => {
        console.error(`Error fetching data: ${error.message}`);
        window.alert(`Error fetching data: ${error.message}`);
    });
}

function clearTable() {
  const table = document.getElementById("beerTable");
  table.innerHTML="";
}

function displayResults(results) {
    // If the result is only one element (not an array), convert it into an array
  clearTable(); // wenn ich das benutze geht mein head weg, müsste tbody seperieren
    if (!Array.isArray(results)) {
    results = [results];
  }
  if (results.length === 0) {
    const para = document.createElement("p");
    para.innerHTML = "No results returned.";
    document.getElementById("beerTable").appendChild(para);
  } else {
    for (const beers of results) {
      console.log(beers)
      const rowTable = document.createElement("tr");
      const brand = document.createElement("td");
      brand.innerHTML = beers.brand;
      rowTable.appendChild(brand);
      const name = document.createElement("td");
      name.innerHTML = beers.name;
      rowTable.appendChild(name);
      const style = document.createElement("td");
      style.innerHTML = beers.style;
      rowTable.appendChild(style);
      const yeast = document.createElement("td");
      yeast.innerHTML = beers.yeast;
      rowTable.appendChild(yeast);
      document.getElementById("beerTable").appendChild(rowTable);
    }
  }
}


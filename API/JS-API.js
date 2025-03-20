var baseUrl = "https://random-data-api.com/api/v2/beers";

function fetchData() {
  let resultSize = document.getElementById("resultSize").value;
  let url = `${baseUrl}?size=${resultSize}`;

  // Clear the previous table content before fetching new data
  clearTable();

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
  const table = document.getElementById("usersTable");
 
  table.innerHTML = ""; // Clears everything. Adjust if you have a header row!
}

function displayResults(results) {
  if (!Array.isArray(results)) {
    results = [results];
  }

  if (results.length === 0) {
    const para = document.createElement("p");
    para.innerHTML = "No beers returned.";
    document.getElementById("usersTable").appendChild(para);
  } else {
    // Create table header for beers
    const headerRow = document.createElement("tr");
    
    const headers = ["Brand", "Name", "Style", "Alcohol Content"];
    headers.forEach((headerText) => {
      const th = document.createElement("th");
      th.innerText = headerText;
      headerRow.appendChild(th);
    });

    document.getElementById("usersTable").appendChild(headerRow);

    // Now populate rows with beer data
    for (const beer of results) {
      console.log(beer);
      const rowTable = document.createElement("tr");

      const brand = document.createElement("td");
      brand.innerHTML = beer.brand;
      rowTable.appendChild(brand);

      const name = document.createElement("td");
      name.innerHTML = beer.name;
      rowTable.appendChild(name);

      const style = document.createElement("td");
      style.innerHTML = beer.style;
      rowTable.appendChild(style);

      const alcohol = document.createElement("td");
      alcohol.innerHTML = beer.alcohol;
      rowTable.appendChild(alcohol);

      document.getElementById("usersTable").appendChild(rowTable);
    }
  }
}

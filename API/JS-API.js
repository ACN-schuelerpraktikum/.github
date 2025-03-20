var baseUrl = "https://random-data-api.com/api/v2/users";

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

function displayResults(results) {
    // If the result is only one element (not an array), convert it into an array
  if (!Array.isArray(results)) {
    results = [results];
  }
  if (results.length === 0) {
    const para = document.createElement("p");
    para.innerHTML = "No results returned.";
    document.getElementById("usersTable").appendChild(para);
  } else {
    for (const user of results) {
      console.log(user)
      const rowTable = document.createElement("tr");
      const first_name = document.createElement("td");
      first_name.innerHTML = user.first_name;
      rowTable.appendChild(first_name);
      const last_name = document.createElement("td");
      last_name.innerHTML = user.last_name;
      rowTable.appendChild(last_name);
      const date_of_birth = document.createElement("td");
      date_of_birth.innerHTML = user.date_of_birth;
      rowTable.appendChild(date_of_birth);
      const avatar = document.createElement("td");
      const img = document.createElement("img");
      img.src = user.avatar;
      avatar.appendChild(img);
      rowTable.appendChild(avatar);
      document.getElementById("usersTable").appendChild(rowTable);
    }
  }
}
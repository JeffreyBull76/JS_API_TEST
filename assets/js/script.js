const API_KEY = "YD3q4Gab_2O5T59dVQmDJS1RpAY";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {

    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        displayStatus(data);
    } else {
        throw new Error(data.error);
    }

}

function displayStatus(data) {
    document.getElementById("resultsModalTitle").innerText = "API Key Status"
    document.getElementById("results-content").innerHTML = `Your key is valid until <br>${data.expiry}`;

    resultsModal.show();
}

// Code below is the CI way to complete this

// function displayStatus(data) {

//     let heading = "API Key Status";
//     let results = `<div>Your key is valid until</div>`;
//     results += `<div class="key-status">${data.expiry}</div>`;

//     document.getElementById("resultsModalTitle").innerText = heading;
//     document.getElementById("results-content").innerHTML = results;
//     resultsModal.show();

// }
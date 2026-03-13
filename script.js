

const form = document.getElementById("applicationForm");

form.addEventListener("submit", function(e) {

    e.preventDefault(); // stop page refresh

    const formData = new FormData(form);

    const deployURL = "https://script.google.com/macros/s/AKfycbzk2FvaFp-1dOL2LoChJvwqtslrdHyP1I750zqbTg8BvQoMxnh8uy-dP65yMiKprUh8yg/exec";

    fetch(deployURL, {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {

        alert("Application submitted successfully!");

        form.reset();

    })
    .catch(error => {

        alert("Error submitting form");
        console.log(error);

    });

});

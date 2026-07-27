fetch("movies.json")
.then(response => response.json())
.then(data => {

    let table =
    "<table id='jsonTable'>" +
    "<tr>" +
    "<th>Film</th>" +
    "<th>Main Characters</th>" +
    "<th>Irreconcilable Difference</th>" +
    "<th>Release Year</th>" +
    "</tr>";

    data.forEach(function(movie){

        table +=
        "<tr>" +
        "<td>" + movie.title + "</td>" +
        "<td>" + movie.protagonists + "</td>" +
        "<td>" + movie.difference + "</td>" +
        "<td>" + movie.release + "</td>" +
        "</tr>";

    });

    table += "</table>";

    document.getElementById("movieData").innerHTML = table;

})
    .catch(error => {
        console.error("Error loading JSON:", error);
    });

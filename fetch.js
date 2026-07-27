
/////////////////
window.onload = function() {

    fetch('movies.json')
 
    .then(function(response) {
       return response.json();
    })
   
    .then(function(json) {
 
       var tableCode = '<table><caption>Irreconcilable Differences</caption><thead><tr><th>Film</th><th>Main Characters</th><th>Irreconcilable Difference</th><th>Release Year</th></tr></thead><tbody>';
 
      //NOTE: For readability, each item is on a new line ;-)
       for (var i = 0; i < json.length; i++) {
          tableCode += '<tr><td>' + 
          json[i].film + '</td><td>' + 
          json[i].maincharacter + '</td><td>' + 
          json[i].difference + '</td><td>' + 
          json[i].year + 
          '</td></tr>';
       }
 
       tableCode += '</tbody><tfoot><tr><td colspan="4">Source: Some Books API</td></tr></tfoot></table>';
 
       document.getElementById('movies').innerHTML = tableCode;
   })
 }

$(document).ready(function() {

var getFishes = $('#get-fishes');
var getMba = $('#MBA_Rank')
var results = $('#results');

// adding an event listener ti get the fishes button on click
getFishesButton.on('click', getFishes);
// adding even listener to the the mba rank from data.json, which will change whe  the fish type is changed
fishSelect.on('change', getMba);

function getFishes(e) {
  $.ajax({
    type: "GET",
    url: "app/db/data.json"
  }) // ends once done
  .done(function(response){
    //emptys the fish everytime so it does not duplicate
    fishSelect.empty();

  var regions = [];
  })
}


// end of document.ready
});



<% fishname << stuff['Seafood_display_name'] %>
<% mbarank << stuff['MBA_Rank'] %>
<% omegalevel << stuff['Omega_Level'] %>
<% mercuryrank << stuff['Mercury_Rank'] %>
<% foodchain << stuff['Food_Chain'] %>
<% mercuryppm << stuff['Mercury_PPM']%>
<% sustainabiltytext << stuff['Sustainability_Seafood_Box_Text'] %>
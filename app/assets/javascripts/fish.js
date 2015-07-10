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
    //empty regions array
  var regions = [];

  $.each(response, function(index, item){
    if($.inArray(item.fish, fishes) === -1 && item.fish.length >= 1) {
      fishes.push(item.fish);
      fishSelect.append('<option value="' + item.fish + '">-- MBA will go here --</option>')
    }
  })
  fishSelect.prepend('<option value="default">-- MBA will go here --</option>')
  });
}

results.html()

// end of document.ready
});




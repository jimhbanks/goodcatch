$(document).ready(function() {
  console.log('fish.js responding');
// var getFishes = $('#get-fishes');
// var getFishes = $('#get-fishes');
// // var getMba = $('#MBA_Rank')
// var results = $('#results');

// adding an event listener ti get the fishes button on click
// getFishesButton.on('click', getFishes);
// adding even listener to the the mba rank from data.json, which will change whe  the fish type is changed
// fishSelect.on('change', getMba);

  function getFishes(index, value) {
    var fish = $(this).val()
    $.ajax({
      type: "GET",
      url: "/fish_data",
      dataType: "JSON",
      data: {fish: fish},
      method: 'POST'
    })
    .done(function(response) {
      var fishes = []; 
      $('#fishinfo').empty();
      // $.each(response, function(index, item) {
      //   if ($.inArray(item.fish, fishes) === -1) {
      //     fishes.push(item); 
      //   }
      // })
    $.each(response, function(index, fish){
      
      console.log(fish)
      $('#fishinfo').append('<h1>' + fish.Seafood_display_name + '</h1><h3>' + fish.MBA_Rank + '</h3>');
    })

      console.log(fishes, 'fishes');
    })  
  }
  // click event
  $(".fishname").on('change', getFishes);

});




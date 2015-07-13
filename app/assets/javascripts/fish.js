$(document).ready(function() {
  console.log('fish.js responding');
var getFishes = $('#get-fishes');
// var getFishes = $('#get-fishes');
// // var getMba = $('#MBA_Rank')
// var results = $('#results');

// adding an event listener ti get the fishes button on click
getFishesButton.on('click', getFishes);
// adding even listener to the the mba rank from data.json, which will change whe  the fish type is changed
// fishSelect.on('change', getMba);

function getFishes(index, value()) {
  $.ajax({
    type: "GET",
    url: "/datas",
    dataType: "JSON",
    success: function (data){
      console.log(data);
    }
  })
}

// click event
$(".fishname").on('change', function(){
    console.log('fishname hit');
 $.ajax({
    type: 'GET',
    url: "/datas",
    dataType: "JSON",
    success: function (data){
      console.log(data);
    }
  })
  getFishes()

})


results.html()

// end of document.ready
});




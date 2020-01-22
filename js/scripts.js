$(document).ready(function() {
  $("form#input").submit(function(event) {
    var countTo = parseInt($("input#countTo").val());
    var countBy = parseInt($("input#countBy").val());
    
    console.log(countTo)
    console.log(countBy)
    for (var currentNumber = 0; currentNumber <= countTo; currentNumber += countBy) {
      $(".output").append(currentNumber + " ");
      console.log(currentNumber)
    }
    event.preventDefault();
  });
});
/*
=======================================================

** Week 4 - Project 2**
*** jQuery Mania ***


=======================================================
*/

// Add your JS here.





//1.

/*$(document).ready(function() {

$(".alertme").click(function() {
 alert("jquery is fun");
});


}); */


//2.

/*$(document).ready(function () {

  $(".clickme").click(function () {
    $(".clickme").html("I was clicked");
  })
}) */


//3.
/*
$(document).ready(function() {

    $(".addStyle").click(function() {
        $(".addStyle").addClass("buttonStyle");
    });
});  *?




//4.


/*$(document).ready(function() {
$(".addDifferentStyle").click(function() {
$(".addDifferentStyle").addClass("addUniqueStyle");
});
}); */


//5.

$(document).ready(function() {

    $(".addStyle").click(function() {
        $(".addStyle").addClass("buttonStyle");
    });


    $(".addDifferentStyle").click(function() {
        $(".addDifferentStyle").addClass("addUniqueStyle");
    });

    // $("button").click(function() {
        // $("button").removeClass();
    // })






//6.



$(".clickToggle").click(function () {

  $(".clickToggle").toggleClass("addUniqueStyle");
});


//7.

$(".squareBtn").click(function () {

  $(".square").hide();
});




//8.

$(".circle").click(function () {

  $(".circle").hide();
});



//9.

$(".toggleRedSquare").click(function () {

  $(".redSquare").toggle(1000);
});

});

// Close: $(document).ready(function() {

$(".color-button").click(
    function(){
    $("body").toggleClass("light");
    $(".homepage").toggleClass("light");
    $(".alternate1").toggleClass("light");
    $(".alternate2").toggleClass("light");
    $(".sound-descriptions").toggleClass("light");
    $("form").toggleClass("light");
    $(".questions-container").toggleClass("light");
    $(".font-selector").toggleClass("light");
    $("#myAudio").toggleClass("light");
  }
  );

  $(".reveal-scene1").click(
    function(){
        $(".bigsur").toggleClass("show");
    }
  );

    $(".reveal-scene2").click(
    function(){
        $(".desert").toggleClass("show");
    }
  );

  $(".reveal-scene3").click(
    function(){
        $(".sf").toggleClass("show");
    }
  );

  $(".reveal-scene4").click(
    function(){
        $(".vegas").toggleClass("show");
    }
  );

  $(".generatePerson").click(
    function(){
      $(".radio-btn").toggleClass("revealPerson")
    }
  );

$('input').on('change', function () {
  var v = $(this).val();
  $('body').css('font-size', v + 'px')
  $('span').html(v);
});

$("#font-selector").change(function() {
  // alert($(this).val());
//   $('.changeMe').css("font-family", $(this).val());
$("body").removeClass();
$("body").addClass($(this).val());
});



$(".generateAnimal").click(
  function(){
    $(".animal").toggleClass("revealAnimal")
  }
);

$( function() {
  $( ".draggable" ).draggable(
      { snap: true }
      );
} );




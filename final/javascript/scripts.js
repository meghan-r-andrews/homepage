$( function() {
    $( ".draggable" ).draggable(
        { }
        );
  } );

  // $("button").click(function(){
  //   $("p").toggleClass("main");
  // });

  $(".dark-button").click(
    function(){
      $("body").toggleClass("dark");
      $(".current-selected").toggleClass("dark");
      $(".switch-link").toggleClass("dark");
      $("img").toggleClass("dark");
      $("label").toggleClass("dark");
      $(".header").toggleClass("dark");
      $(".back2").toggleClass("dark");
      $("a").toggleClass("dark");
      $(".icon-explainer").toggleClass("dark");
      $(".back2").toggleClass("dark");
      $("select").toggleClass("dark");
      $(".x-index").toggleClass("dark");
      $(".modal").toggleClass("dark");
      $(".close").toggleClass("dark");
      $(".prev").toggleClass("dark");
      $(".next").toggleClass("dark");
      $("figcaption").toggleClass("dark");

    }
  );

  $("#close-button").click(
    function(){
      $(".icon-explainer").toggleClass("hide");
    }
  );

    
  $('input').on('change', function () {
    var v = $(this).val();
    $('html').css('font-size', v + 'px')
    $('span').html(v);
  });

  $("#font-selector").change(function() {
    // alert($(this).val());
  //   $('.changeMe').css("font-family", $(this).val());
  $("body").removeClass();
  $("body").addClass($(this).val());
  });

  function zoomImage() {
    const image = document.getElementById('zoomedImage');
    image.classList.toggle('zoomed');
  }
  

$( document ).ready(function() {
  $("#nav ul li a[href^='#']").on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 300, function(){

      window.location.hash = hash;
    });
  });

  $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  }); 

  $('#myCarousel').carousel({
    interval: 10000
  })

  $('#myCarousel').on('slid.bs.carousel', function() {
  });
});
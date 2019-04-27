
$(document).ready(function(){
    $('.custom-bars').click(function(){
        $('.custom-bars').toggleClass('active');
    });
    
    $(function() {   
        $('.demo').slick({
            rtl: true,
            infinite: false,
            speed: 250,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: false,
                }
              },
              {
                breakpoint: 577,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }
            //   {
            //     breakpoint: 320,
            //     settings: {
            //       slidesToShow: 2,
            //       slidesToScroll: 1
            //     }
            //   }
            ]
          });
    });    
    
    
    
});
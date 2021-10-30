

$(function(){

    'use strict'

// banner-slaider//
$('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots:true,
});
// banner-slaider//


// video part//
$(document).ready(function(){
    $('.venobox').venobox(); 
});
// video part//

// jane-slider//
    $('#jane').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows:false,
        dots:true,
     });
          
// jane-slider//







})
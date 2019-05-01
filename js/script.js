
$(document).ready(function() {
    $("#news-slider2").owlCarousel({
        items:3,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[980,2],
        itemsMobile:[600,1],
        pagination:false,
        navigationText:false,
        autoPlay:true
    });

    $("#news-slider14").owlCarousel({
            items : 4,
            itemsDesktop:[1199,3],
            itemsDesktopSmall:[980,2],
            itemsMobile : [550,1],
            pagination:false,
            autoPlay:true
        });
});

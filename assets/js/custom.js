$('#bannerSlider').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

$('#clientSlider').owlCarousel({
    loop: true,
    margin: 30,
    responsive: {
        0: {
            items: 1,
            dots: true,
            nav: false
        },
        600: {
            items: 2,
            dots: true,
            nav: false
        },
        1000: {
            items: 4,
            nav: true,
            dots: false
        }
    }
});


$('#photoCarousel').carousel({
    interval: false,
});

$('videoCarousel').carousel({
    interval: false,
});

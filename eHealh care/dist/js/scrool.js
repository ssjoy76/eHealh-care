$(window).scroll(function () {
if ($(this).scrollTop() > 40) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});
$(document).ready(function () {
    var disabled = $('.main-content').find('.disabled-image');
    $(disabled).parents('.banner-container').find('.toggleColor').removeClass('pink-bg blue-bg');
    $(disabled).parent().children('.banner-text-block').toggleClass('disabled-image-txt');
    $(disabled).parent().find('.banner-sub-heading, .banner-product-description-quantity').toggleClass('disabled-image-txt');
    $(disabled).parents().children('.banner-text').toggleClass('banner-text-disabled');
});
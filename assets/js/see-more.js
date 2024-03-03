$(document).ready(function () {
    $('.toggle-button').click(function () {
        $('.more-text').toggle();
        var buttonText = $('.more-text').is(':visible') ? 'Rút gọn' : 'Xem thêm';
        $(this).text(buttonText);

    });
});
// 'use strict'


$(document).ready(function () {

    // chuyển quảng cáo
    $('.btn-left-ads').click(function (e) { 
        showAds();        
    });

    $('.btn-right-ads').click(function (e) { 
        showAds(-1, 'fadeOutToRight', 'fadeInToRight');
    });

    // hiển thị form đăng nhập
    $('.header__btn-wrap .btn-login').click(function (e) {
        $('.background-fixed-fullscreen').css('display', 'flex');
        $('.form-login-wrapper').css('display', 'block');
    });

    // hiển thị form đăng ký
    $('.header__btn-wrap .btn-register').click(function (e) {
        $('.background-fixed-fullscreen').css('display', 'flex');
        $('.form-register-wrapper').css('display', 'block');
    });

    // đổi form đăng nhập sang đăng ký
    $('.login-form .btn-form-switch-register ').click(function (e) {
        $('.form-login-wrapper').css('display', 'none');
        $('.form-register-wrapper').css('display', 'block');
    });

    // đổi form đăng ký sang đăng nhập
    $('.register-form .btn-form-switch-login ').click(function (e) {
        $('.form-login-wrapper').css('display', 'block');
        $('.form-register-wrapper').css('display', 'none');
    });

    // đóng form
    $('.form-wrapper .btn-form-close').click(function (e) {
        // console.log(this.parentNode);
        this.parentNode.style.display = 'none';
        $('.background-fixed-fullscreen').css('display', 'none');

    });

});

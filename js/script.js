'use strict'

var adsList = [
    { 'photo': 'image/quangcao/quangcao1.jpg' },
    { 'photo': 'image/quangcao/quangcao2.jpg' },
    { 'photo': 'image/quangcao/quangcao3.jpg' },
    { 'photo': 'image/quangcao/quangcao4.jpg' },
    { 'photo': 'image/quangcao/quangcao5.jpg' }
];
let adsCurrent = 0;
let adsWrap = document.querySelector('.ads__wrap');
adsWrap.querySelector('.ads__img').style.backgroundImage = `url(${adsList[0].photo})`;
adsWrap.querySelector('.ads__img').style.animation = 'fadeIn ease 1s';

let intervalId = setInterval(showAds, 8000);

function showAds(increment = 1, animation1 = 'fadeOutToLeft', animation2 = 'fadeInToLeft') {
    // xóa quảng cáo hiện tại 
    $('.ads__img').remove();

    let div = createAds(adsCurrent);
    div.style.animation = animation1 + ' ease 0.75s';
    adsWrap.appendChild(div);

    adsCurrent += increment;
    if (adsCurrent >= adsList.length) adsCurrent = 0;
    if (adsCurrent < 0) adsCurrent = adsList.length - 1;

    // hiển thị quảng cáo mới     
    div = createAds(adsCurrent);
    div.style.animation = animation2 + ' ease 0.75s';
    adsWrap.appendChild(div);
}

function createAds(adsCurrent) {
    let div = document.createElement('div');
    let path = adsList[adsCurrent].photo;
    div.className = 'ads__img';
    div.style.backgroundImage = `url(${path})`;
    // div.style.animation = 'fadeOut ease 1s';

    return div;
}


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

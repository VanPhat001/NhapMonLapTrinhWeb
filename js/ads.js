
var adsList = [
    { 'photo': 'image/quangcao/quangcao1.jpg' },
    { 'photo': 'image/quangcao/quangcao2.jpg' },
    { 'photo': 'image/quangcao/quangcao3.jpg' },
    { 'photo': 'image/quangcao/quangcao4.jpg' },
    { 'photo': 'image/quangcao/quangcao5.jpg' }
];
let adsCurrent = 0;
let adsWrap = document.querySelector('.ads__wrap');
adsWrap.querySelector('.ads__img').style.backgroundImage = `url(${adsList[0]})`;
adsWrap.querySelector('.ads__img').style.animation = 'fadeIn ease 1s';

setInterval(() => {
    adsWrap.removeChild(adsWrap.querySelector('.ads__img'));

    let div = document.createElement('div');
    let path = adsList[adsCurrent].photo;
    div.className = 'ads__img';
    div.style.backgroundImage = `url(${path})`;
    div.style.animation = 'fadeOut ease 1s';
    adsWrap.appendChild(div);
    
    adsCurrent++;
    if (adsCurrent >= adsList.length) adsCurrent = 0;

    div = document.createElement('div');
    path = adsList[adsCurrent].photo;
    div.className = 'ads__img';
    div.style.backgroundImage = `url(${path})`;
    div.style.animation = 'fadeIn ease 1s';
    adsWrap.appendChild(div);

}, 5000);
var banner1 = {

    src: 'images/pickachu.jpg',
    url: 'https://genericworker.github.io'

};

var banner2 = {

    src: 'images/dedene.jpg',
    url: 'https://www.nasa.gov/mission_pages/hubble/multimedia/index.html'

};

var banner3 = {

    src: 'images/charizardrare.jpg',
    url: 'http://www.google.com'

};

 

var banners = new Array(banner1, banner2, banner3);

 

var bnrCntr = 0;

 

function cycle() {

    bnrCntr = bnrCntr + 1;

 

    if (bnrCntr == 3) bnrCntr = 0;

 

    var ban = document.getElementById('banner');

 

    ban.src = banners[bnrCntr].src;

 

    if (banners[bnrCntr].url.length > 0) {

        ban.style.cursor = 'pointer';

        ban.onclick = function() {

            window.location.href = banners[bnrCntr].url;

        }

    } else {

        ban.style.cursor = 'default';

        ban.onclick = function() {};

    }

 

    setTimeout(cycle, 3000);

}
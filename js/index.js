const images = [
    'images/milstone8.jpg',
    'images/milstone1.jpg',
    'images/milstone2.png',
    'images/milstone3.png',
    'images/milstone4.jpg',
    'images/milstone5.png',
    'images/milstone6.png',
    'images/milstone7.png',

]
let imgIndex = 0;
const imgE1 = document.getElementById('banner-img');
setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    console.log(imgIndex, imgUrl);

    imgE1.setAttribute('src', imgUrl)
    imgIndex++;
}, 1000)

const images2 = [
    'images/nizam.png',
    'images/nizam2.png',
    'images/Nizam bd.jpg',

]
let imgIndex2 = 0;
const imgE12 = document.getElementById('fotter-img');
setInterval(() => {
    if (imgIndex2 === images2.length) {
        imgIndex2 = 0;
    }
    const imgUrl2 = images2[imgIndex2];
    console.log(imgIndex2, imgUrl2);

    imgE12.setAttribute('src', imgUrl2)
    imgIndex2++;
}, 1000)

const imgE13 = document.getElementById('nav-img');
setInterval(() => {
    if (imgIndex2 === images2.length) {
        imgIndex2 = 0;
    }
    const imgUrl2 = images2[imgIndex2];
    console.log(imgIndex2, imgUrl2);

    imgE13.setAttribute('src', imgUrl2)
    imgIndex2++;
}, 1000)
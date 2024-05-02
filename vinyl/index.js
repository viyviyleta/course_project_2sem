const images = [
    { id: "photo1", normalSrc: "./src/covers/LINKIN_PARK_-_Hybrid_Theory__Warner.jpg", hoverSrc: "./src/covers/91pvqrs_xl_sl1500_-_.jpg" },
    { id: "photo2", normalSrc: "./src/covers/2.png", hoverSrc: "./src/covers/2hover.webp" },
    { id: "photo3", normalSrc: "./src/covers/3.png", hoverSrc: "./src/covers/3hover.webp" },
    { id: "photo4", normalSrc: "./src/covers/4.jpg", hoverSrc: "./src/covers/4hover.jpg" },
    { id: "photo5", normalSrc: "./src/covers/5.jpg", hoverSrc: "./src/covers/5hover.jpg" },
    { id: "photo6", normalSrc: "./src/covers/6.jpg", hoverSrc: "./src/covers/6hover.jpg" },
    { id: "photo7", normalSrc: "./src/covers/7.jpg", hoverSrc: "./src/covers/7hover.webp" },
    { id: "photo8", normalSrc: "./src/covers/8.png", hoverSrc: "./src/covers/8hover.jpg" },
    { id: "photo9", normalSrc: "./src/covers/9.png", hoverSrc: "./src/covers/9hover.jpg" },
    { id: "photo10", normalSrc: "./src/covers/10.png", hoverSrc: "./src/covers/10hover.jpg" }
];
images.forEach(image => {
    let element = document.getElementById(image.id);
    element.onmouseover = function() {
        element.src = image.hoverSrc;
    };
    element.onmouseout = function() {
        element.src = image.normalSrc;
    };
});

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".image-gallery img");
    let currentImage = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none";
        });
    }

    function nextImage() {
        currentImage = (currentImage + 1) % images.length;
        showImage(currentImage);
    }

    showImage(currentImage); // 显示第一张图片
    setInterval(nextImage, 3000); // 每3秒切换一次图片
});
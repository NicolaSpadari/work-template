export default function initLazyLoad() {
    console.log("init lazy load");

    if ("loading" in HTMLImageElement.prototype) {
        document.body.classList.add("native");

        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach((img) => {
            img.src = img.dataset.src;
        });
    } else {
        document.body.classList.add("legacy");

        const fallbackScript = document.createElement("script");
        fallbackScript.async = true;
        fallbackScript.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.0/lazysizes.min.js";
        document.body.appendChild(fallbackScript);
    }
}

export default function initLazyLoad() {
    console.log("init lazy load");

    if ("loading" in HTMLImageElement.prototype) {
        $("body").addClass("native");

        $("img[loading='lazy']").each((i, img) => {
            $(img).attr("src", $(img).data("src"));
        });
    } else {
        $("body").addClass("legacy");

        const fallbackScript = document.createElement("script");
        fallbackScript.async = true;
        fallbackScript.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.0/lazysizes.min.js";
        document.body.appendChild(fallbackScript);
    }
}

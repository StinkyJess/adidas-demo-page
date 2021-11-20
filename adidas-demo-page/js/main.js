//javascript Document
(()=> {
    let animation = lottie.loadAnimation({
        container: document.querySelector("#logoContainer"),
        path: "data.json",
        renderer:"svg",
        loop: "false",
        autoplay: true,
        name: "Adidas Animation"

    });
})();
document.addEventListener("DOMContentLoaded", function() {
    var currentPage = window.location.pathname;
    var navLinks = document.querySelectorAll("nav menu li a");

    navLinks.forEach(function(link) {
        var href = link.getAttribute("href");
        
        var relativePath = new URL(href, window.location.origin).pathname;
        
        if (relativePath === currentPage) {
            const currentPageName = currentPage.replace("/", "").replace(".html","");
            const image = document.querySelector(`#${currentPageName}`);
            const anchor = image?.parentElement.parentElement.querySelector('a');
            const div = link.parentElement.querySelector('div');
            div.removeChild(image);
            const activeImage = document.createElement("img");
            activeImage.src = `/assets/${currentPageName}-active.png`;
            link.parentElement.insertBefore(activeImage, anchor);
            link.classList.add("selected"); 
        }
    });
});

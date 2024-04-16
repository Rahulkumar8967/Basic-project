document.addEventListener("DOMContentLoaded", function () {
    var progressBar = document.getElementById("progress-bar");

    // Calculate the progress as the user scrolls
    window.addEventListener("scroll", function () {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrollPercentage = (scrollPosition / windowHeight) * 100;
        progressBar.style.width = scrollPercentage + "%";
    });
});

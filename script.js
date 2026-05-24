document.addEventListener('DOMContentLoaded', function() {
    var year = new Date().getFullYear();
    var yearElements = document.querySelectorAll('.year');
    yearElements.forEach(function(el) {
        el.textContent = year;
    });
});

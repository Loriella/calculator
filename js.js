const visual = document.querySelector('.visual_display');
document.querySelectorAll('.btn-number').forEach(function (element) {
    element.onclick = function () {
        visual.innerHTML = element.dataset.number;
    }
});
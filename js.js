const visual = document.querySelector('.visual_display');
let visualResult = '';

function setVisualResult(value) {
    if (typeof value === "number") {
        visualResult = String(value);
    } else if (typeof value === "string") {
        visualResult += value;
    } else {
        visualResult = '';
    }

    if (visualResult.length > 8) {
        visual.innerHTML = visualResult.slice(0, 8);
    } else {
        visual.innerHTML = visualResult || '0';
    }
}

function actionBackspace() {
    visualResult = visualResult.slice(0, -1);
    visual.innerHTML = visualResult || '0';
}

/**
 * добавление обработчиков на цифровые кнопки
 * */
document.querySelectorAll('.btn-number').forEach(function (element) {
    element.onclick = function () {
        setVisualResult(element.dataset.number)
    }
});
/**
 * кнопка "очистить всё"
 */
document.querySelector('.btn-clear').onclick = function () {
    setVisualResult();
};

/**
 * кнопка backspace
 */
document.querySelector('.btn-backspace').onclick = function () {
    actionBackspace();
};

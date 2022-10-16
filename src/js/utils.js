const UTILS = {
    randomBoolean() {
        return Math.random() > 0.5;
    },

    randomInt(min, max) {
        if (typeof max === 'undefined') {
            max = min;
            min = 0;
        }
        return Math.floor(Math.random() * (max - min)) + min;
    },

    replaceMain(element) {
        const main = document.getElementById('main');
        main.innerHTML = '';
        main.appendChild(element);
    },

    getValue(id) {
        return document.getElementById(id).value;
    }
};

Array.prototype.randomItem = function () {
    return this[UTILS.randomInt(this.length)]
}
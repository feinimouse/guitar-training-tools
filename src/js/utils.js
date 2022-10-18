const UTILS = {
    randomInt(min, max) {
        if (typeof max === 'undefined') {
            max = min;
            min = 0;
        }
        return Math.floor(Math.random() * (max - min)) + min;
    },

    getRandomItem(list) {
        return list[UTILS.randomInt(list.length)]
    },

    replaceMain(element) {
        const main = document.getElementById('main');
        main.innerHTML = '';
        main.appendChild(element);
    },

    getIntValue(id) {
        return parseInt(document.getElementById(id).value);
    }
};

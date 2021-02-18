"use strict";

(function () {
    try {
        getFormData('popup', 'popup__btn', console.log);
    } catch (e) {
        if (e.name === 'NotFoundError') {
            console.log(e.message);
        } else {
            throw e;
        }
    }
})();
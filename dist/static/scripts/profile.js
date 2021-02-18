"use strict";

(function () {
    try {
        getFormData('profile__data', 'profile__actions_block__btn', console.log);
    } catch (e) {
        if (e.name === 'NotFoundError') {
            console.log(e.message);
        } else {
            throw e;
        }
    }
})();


"use strict";

class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotFoundError";
    }
}

/**
 * @param {string} containerClass
 * @param {string} btnClass
 * @param {function} callback
 */
function getFormData(containerClass, btnClass, callback) {
    const containerList = document.getElementsByClassName(containerClass);
    if (!checkCollectionOnFirstItem(containerList)) {
        throw new NotFoundError(`Can not found container by name '${containerClass}'`);
    }
    const containerFirst = containerList[0];
    const btnList = document.getElementsByClassName(btnClass);
    if (!checkCollectionOnFirstItem(btnList)) {
        throw new NotFoundError(`Can not found btn by name '${btnClass}' in container '${containerClass}'`)
    }
    const firstBtn = btnList[0];
    firstBtn.onclick = (e) => {
        const inputList = containerFirst.getElementsByTagName('input');
        if (checkCollectionOnFirstItem(inputList)) {
            let res = {};
            for (let i = 0; i < inputList.length; i++) {
                let name = inputList[i].getAttribute('name');
                let value = inputList[i].value;
                res[name] = value;
            }
            containerFirst.getElementsByTagName('input')
            callback(res);
        }
    };
}

/**
 * @param {HTMLCollection} collection
 * @returns {boolean}
 */
function checkCollectionOnFirstItem(collection) {
    if (collection === undefined || collection === null
        || typeof(collection) !== 'object' || !collection.length) {
        return false;
    }
    return collection[0] !== undefined;
}
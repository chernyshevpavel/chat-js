"use strict";

function getFormData(containerClass, btnClass, callback) {
    let profileDataList = document.getElementsByClassName(containerClass);
    if (profileDataList.length) {
        let profileData = document.getElementsByClassName(containerClass)[0];
        let btnList = document.getElementsByClassName(btnClass);
        if (btnList.length) {
            let firstBtn = btnList[0];
            firstBtn.onclick = (e) => {
                let inputList = profileData.getElementsByTagName('input');
                let res = [];
                for (let i = 0; i < inputList.length; i++) {
                    let obj = {};
                    obj.name = inputList[i].getAttribute('name');
                    obj.value = inputList[i].value;
                    res.push(obj);
                }
                profileData.getElementsByTagName('input')
                callback(res);
            };
        }
    }
}
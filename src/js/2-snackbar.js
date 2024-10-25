"use strict"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const input = document.querySelector('.delay');
let delay = null;

input.addEventListener("input", (event) => {
    delay = event.target.value;
})

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let checked = document.querySelector('input[name="state"]:checked');
    
    const promise = new Promise((resolve, reject) => {
        if (checked.value === 'fulfilled') {
            resolve(`✅ Fulfilled promise in ${delay}ms`)
        }
        else {
            reject(`❌ Rejected promise in ${delay}ms`)
        }
    }
    );
    promise.then((value) => {
        setTimeout(() => {
            iziToast.error({
                message: value,
                position: 'topCenter',
                color: 'green',
                messageColor: "black",
                close: false,
                timeout: 4000,
                progressBar: false,
                icon: false
            })
        }, delay)
    })
    promise.catch((err) => {
        setTimeout(() => {
            iziToast.error({
                message: err,
                position: 'topCenter',
                color: 'red',
                messageColor: "black",
                close: false,
                timeout: 4000,
                progressBar: false,
                icon: false
            })
        }, delay)
        
    })
    form.reset()
});


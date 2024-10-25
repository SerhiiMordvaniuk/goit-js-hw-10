"use strict"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const createBtn = document.querySelector(".create-btn");
const form = document.querySelector('.form');
const input = document.querySelector('.delay');
let delay = null;
const lalala = 111;

input.addEventListener("input", (event) => {
    let inputValue = event.target.value
    delay = event.target.value;  
    console.log(delay);

})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(delay);
    createBtn.disablet = true;
    
    const promise = new Promise((resolve, reject) => {
        if (lalala > 10) {
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
                progressBar: false
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
                progressBar: false
            }, delay)
        })
        form.reset()
    
    })    
});


"use strict"
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


let userSelectedDate = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        if (options.defaultDate >= selectedDates[0]) {
            startBtn.style.backgroundColor = "#cfcfcf";
            startBtn.style.color = "#989898";
            startBtn.style.pointerEvents = "none";
            iziToast.error({
                message: 'Please choose a date in the future',
                position: 'topCenter',
                color: 'red',
                messageColor: "black",
                close: false,
                timeout: 4000,
                progressBar: false
            });
        }
        else {
            startBtn.style.backgroundColor = "#4e75ff";
            startBtn.style.color = "#fff";
            startBtn.style.pointerEvents = "auto";
            }
    },
};


flatpickr("#datetime-picker", options);

const startBtn = document.querySelector("button[data-start]");


startBtn.addEventListener("click", () => {
    console.log("no");
    
})



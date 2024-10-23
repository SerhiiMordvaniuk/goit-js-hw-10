"use strict"
// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

let userSelectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      userSelectedDate = selectedDates;
      console.log(userSelectedDate);
  },
};

console.log(userSelectedDate);



flatpickr("#datetime-picker", options);

const startBtn = document.querySelector("button[data-start]");

// console.log(startBtn);

// startBtn.addEventListener("click", () => {
//     startBtn.style.backgroundColor = "#cfcfcf";
//     startBtn.style.color = "#989898";
//     startBtn.style.pointerEvents = "none";
// })





 

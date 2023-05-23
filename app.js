const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveAwayDate = document.querySelector(".giveaway");
console.log(giveAwayDate.textContent);
const deadLine = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2023, 06, 24, 11, 30, 00, 0);
// console.log(futureDate);
const year = futureDate.getFullYear();
let month = months[futureDate.getMonth()];
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
console.log(date);
console.log(month);
giveAwayDate.textContent = `Give A Way Ends On ${weekday}, ${date} ${month} ${year} ${hours}:${minutes} am`;

//future in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  //1ms = 1000ms
  //1m = 60s
  //1hr = 60m
  //1d = 24h

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinutes = 60 * 1000;

  //calculate all values

  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinutes);
  let seconds = Math.floor((t % oneMinutes) / 1000);

  //set values to array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (t <= 0) {
    clearInterval(countdown);
    deadLine.innerHTML = ` <h4 class="expired">sorry this give a way has expired</h4> `;
  }
}

//countdown

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();

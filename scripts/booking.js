var cost_per_day = 35;
var cost_per_day_half = 20;
let days_selected = [];
let daily_rate = cost_per_day;

var monday = document.getElementById("monday");
var tuesday = document.getElementById("tuesday");
var wednesday = document.getElementById("wednesday");
var thursday = document.getElementById("thursday");
var friday = document.getElementById("friday");
var full_day_button = document.getElementById("full");
var half_day_button = document.getElementById("half");
var clear_button = document.getElementById("clear-button");
var calculated_cost = document.getElementById("calculated-cost");

function updatedays_selected(day) {
  if (days_selected.includes(day)) {
    return;
  }
  days_selected.push(day);
}

function update_day_counter() {
  calculated_cost.innerHTML = days_selected.length * daily_rate;
}

monday.addEventListener("click", function () {
  this.classList.toggle("clicked");
  updatedays_selected("monday");
  update_day_counter();
});

tuesday.addEventListener("click", function () {
  this.classList.toggle("clicked");
  updatedays_selected("tuesday");
  update_day_counter();
});

wednesday.addEventListener("click", function () {
  this.classList.toggle("clicked");
  updatedays_selected("wednesday");
  update_day_counter();
});

thursday.addEventListener("click", function () {
  this.classList.toggle("clicked");
  updatedays_selected("thursday");
  update_day_counter();
});

friday.addEventListener("click", function () {
  this.classList.toggle("clicked");
  updatedays_selected("friday");
  update_day_counter();
});

clear_button.addEventListener("click", function () {
  monday.classList.remove("clicked");
  tuesday.classList.remove("clicked");
  wednesday.classList.remove("clicked");
  thursday.classList.remove("clicked");
  friday.classList.remove("clicked");
  days_selected = [];
  calculated_cost.innerHTML = 0;
  daily_rate = cost_per_day;
  full_day_button.classList.add("clicked");
  half_day_button.classList.remove("clicked");
});

full_day_button.addEventListener("click", function () {
  daily_rate = cost_per_day;
  this.classList.add("clicked");
  half_day_button.classList.remove("clicked");
  update_day_counter();
});

half_day_button.addEventListener("click", function () {
  daily_rate = cost_per_day_half;
  this.classList.add("clicked");
  full_day_button.classList.remove("clicked");
  update_day_counter();
});

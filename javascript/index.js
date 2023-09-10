
document.addEventListener("DOMContentLoaded", function() {
    //display day of the week
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var currentDate = new Date();
    var currentDay = daysOfWeek[currentDate.getDay()];

    var currentDayOfTheWeek = document.getElementById('day-of-the-week')
    currentDayOfTheWeek.textContent =  currentDay;

    //UTC
    var currentUTCTime = currentDate.getTime();
    var UTCTimeElement = document.getElementById('UTC-time')
    UTCTimeElement.textContent = currentUTCTime
});
// HNG1.js
document.addEventListener("DOMContentLoaded", function updateDateTime() {
    const slackNameElement = document.querySelector('[data-testid="slackUserName"]');
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    // To Get the current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];

    // To Get the current UTC time in milliseconds
    const currentUTCTime = currentDate.getTime();
    
    setTimeout(updateDateTime, 1000);

    // To Update the elements with the data
    slackNameElement.textContent = "Ubani Sanni";
    currentDayElement.textContent = currentDayOfWeek;
    currentUTCTimeElement.textContent = `Current UTC Time: ${currentUTCTime} ms`;
});
updateDateTime();
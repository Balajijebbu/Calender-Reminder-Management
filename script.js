var CalendarReminderManager = /** @class */ (function () {
    function CalendarReminderManager() {
        this.addReminderButton = document.getElementById("addReminder");
        this.remindersForMonthContainer = document.getElementById("remindersForMonth");
        this.addReminderButton.addEventListener("click", this.addReminder.bind(this));
    }
    CalendarReminderManager.prototype.addReminder = function () {
        var dateInput = document.getElementById("date");
        var monthSelect = document.getElementById("month");
        var yearInput = document.getElementById("year");
        var timeInput = document.getElementById("time");
        var locationInput = document.getElementById("location");
        var eventInput = document.getElementById("event");
        if (!this.validateNotEmpty(dateInput, monthSelect, yearInput, timeInput, locationInput, eventInput)) {
            alert("Please fill in all fields.");
            return;
        }
        var date = parseInt(dateInput.value);
        var month = parseInt(monthSelect.value);
        var year = parseInt(yearInput.value);
        var time = timeInput.value; // Extract time from input
        var location = locationInput.value; // Extract location from input
        var event = eventInput.value; // Extract event from input
        if (!this.validateDate(date, month, year)) {
            alert("Please enter a valid date.");
            return;
        }
        if (!this.validateMonth(month)) {
            alert("Please enter a valid month.");
            return;
        }
        if (!this.validateYear(year)) {
            alert("Please enter a valid year.");
            return;
        }
        var reminderItem = document.createElement("li");
        reminderItem.classList.add("list-group-item");
        reminderItem.innerHTML = "\n            <p>Date: ".concat(date, "/").concat(month, "/").concat(year, "</p>\n            <p>Time: ").concat(time, "</p>\n            <p>Location: ").concat(location, "</p>\n            <p>Event: ").concat(event, "</p>");
        this.remindersForMonthContainer.appendChild(reminderItem);
    };
    CalendarReminderManager.prototype.validateNotEmpty = function () {
        var inputs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inputs[_i] = arguments[_i];
        }
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value === "") {
                return false;
            }
        }
        return true;
    };
    CalendarReminderManager.prototype.validateDate = function (date, month, year) {
        if (month === 2) {
            // Check for leap year
            if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                return !isNaN(date) && date >= 1 && date <= 29; // February in a leap year has 29 days
            }
            else {
                return !isNaN(date) && date >= 1 && date <= 28; // February in a non-leap year has 28 days
            }
        }
        else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
            return !isNaN(date) && date >= 1 && date <= 31;
        }
        else {
            return !isNaN(date) && date >= 1 && date <= 30;
        }
    };
    CalendarReminderManager.prototype.validateMonth = function (month) {
        return !isNaN(month) && month >= 1 && month <= 12;
    };
    CalendarReminderManager.prototype.validateYear = function (year) {
        return !isNaN(year) && year >= 2024;
    };
    return CalendarReminderManager;
}());
document.addEventListener("DOMContentLoaded", function () {
    new CalendarReminderManager();
});

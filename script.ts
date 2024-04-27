class CalendarReminderManager {
    private addReminderButton: HTMLButtonElement;
    private remindersForMonthContainer: HTMLElement;

    constructor() {
        this.addReminderButton = document.getElementById("addReminder") as HTMLButtonElement;
        this.remindersForMonthContainer = document.getElementById("remindersForMonth") as HTMLElement;
        this.addReminderButton.addEventListener("click", this.addReminder.bind(this));
    }

    private addReminder() {
        const dateInput = document.getElementById("date") as HTMLInputElement;
        const monthSelect = document.getElementById("month") as HTMLSelectElement;
        const yearInput = document.getElementById("year") as HTMLInputElement;
        const timeInput = document.getElementById("time") as HTMLInputElement;
        const locationInput = document.getElementById("location") as HTMLInputElement;
        const eventInput = document.getElementById("event") as HTMLInputElement;

        if (!this.validateNotEmpty(dateInput, monthSelect, yearInput, timeInput, locationInput, eventInput)) {
            alert("Please fill in all fields.");
            return;
        }

        const date = parseInt(dateInput.value);
        const month = parseInt(monthSelect.value);
        const year = parseInt(yearInput.value);
        const time = timeInput.value; // Extract time from input
        const location = locationInput.value; // Extract location from input
        const event = eventInput.value; // Extract event from input

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

        const reminderItem = document.createElement("li");
        reminderItem.classList.add("list-group-item");
        reminderItem.innerHTML = `
            <p>Date: ${date}/${month}/${year}</p>
            <p>Time: ${time}</p>
            <p>Location: ${location}</p>
            <p>Event: ${event}</p>`;

        this.remindersForMonthContainer.appendChild(reminderItem);
    }

    private validateNotEmpty(...inputs: (HTMLInputElement | HTMLSelectElement)[]) {
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value === "") {
                return false;
            }
        }
        return true;
    }

    private validateDate(date: number, month: number, year: number) {
        if (month === 2) {
            // Check for leap year
            if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                return !isNaN(date) && date >= 1 && date <= 29; // February in a leap year has 29 days
            } else {
                return !isNaN(date) && date >= 1 && date <= 28; // February in a non-leap year has 28 days
            }
        } else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
            return !isNaN(date) && date >= 1 && date <= 31;
        } else {
            return !isNaN(date) && date >= 1 && date <= 30;
        }
    }

    private validateMonth(month: number) {
        return !isNaN(month) && month >= 1 && month <= 12;
    }

    private validateYear(year: number) {
        return !isNaN(year) && year >= 2024;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    new CalendarReminderManager();
});

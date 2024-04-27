var events = [
    { title: "Meeting", date: "2024-04-10", time: "10:00 AM", description: "Discuss project updates" },
    { title: "Birthday Party", date: "2024-04-15", time: "7:00 PM", description: "Celebrate John's birthday" }
];
function displayEvents() {
    var eventsContainer = document.getElementById("events");
    if (eventsContainer) {
        eventsContainer.innerHTML = "";
        events.forEach(function (event, index) {
            var eventElement = document.createElement("div");
            eventElement.classList.add("event");
            eventElement.onclick = function () { return openEventDetails(index); };
            eventElement.innerHTML = "\n                <h3>".concat(event.title, "</h3>\n                <p><strong>Date:</strong> ").concat(event.date, "</p>\n                <p><strong>Time:</strong> ").concat(event.time, "</p>\n                <p><strong>Description:</strong> ").concat(event.description, "</p>\n            ");
            eventsContainer.appendChild(eventElement);
        });
    }
}
function openEventDetails(eventIndex) {
    var event = events[eventIndex];
    alert("Event: ".concat(event.title, "\nDate: ").concat(event.date, "\nTime: ").concat(event.time, "\nDescription: ").concat(event.description));
}
var contact = {
    email: "jeyabalaji@calendarreminder.com",
    phone: "9789099336"
};
function displayContactInfo() {
    var contactContainer = document.getElementById("contact");
    if (contactContainer) {
        var emailParagraph = document.createElement("p");
        emailParagraph.textContent = "Email: ".concat(contact.email);
        contactContainer.appendChild(emailParagraph);
        var phoneParagraph = document.createElement("p");
        phoneParagraph.textContent = "Phone: ".concat(contact.phone);
        contactContainer.appendChild(phoneParagraph);
    }
}

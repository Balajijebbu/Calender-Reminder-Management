interface CalendarEvent {
    title: string;
    date: string;
    time: string;
    description: string;
}

const events: CalendarEvent[] = [
    { title: "Meeting", date: "2024-04-10", time: "10:00 AM", description: "Discuss project updates" },
    { title: "Birthday Party", date: "2024-04-15", time: "7:00 PM", description: "Celebrate John's birthday" }
];

function displayEvents() {
    const eventsContainer = document.getElementById("events");
    if (eventsContainer) {
        eventsContainer.innerHTML = ""; 

        events.forEach((event, index) => {
            const eventElement = document.createElement("div");
            eventElement.classList.add("event");
            eventElement.onclick = () => openEventDetails(index);

            eventElement.innerHTML = `
                <h3>${event.title}</h3>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Time:</strong> ${event.time}</p>
                <p><strong>Description:</strong> ${event.description}</p>
            `;

            eventsContainer.appendChild(eventElement);
        });
    }
}

function openEventDetails(eventIndex: number) {
    const event = events[eventIndex];
    alert(`Event: ${event.title}\nDate: ${event.date}\nTime: ${event.time}\nDescription: ${event.description}`);
}

interface ContactInfo {
    email: string;
    phone: string;
}

const contact: ContactInfo = {
    email: "jeyabalaji@calendarreminder.com",
    phone: "9789099336"
};

function displayContactInfo() {
    const contactContainer = document.getElementById("contact");
    if (contactContainer) {
        const emailParagraph = document.createElement("p");
        emailParagraph.textContent = `Email: ${contact.email}`;
        contactContainer.appendChild(emailParagraph);

        const phoneParagraph = document.createElement("p");
        phoneParagraph.textContent = `Phone: ${contact.phone}`;
        contactContainer.appendChild(phoneParagraph);
    }
}

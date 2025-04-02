// Chatbot simple simulation
function sendMessage() {
    const chatbox = document.getElementById('chatbox');
    const userInput = document.getElementById('userInput').value;
    
    // Display user message
    chatbox.innerHTML += `<p>You: ${userInput}</p>`;
    
    // Clear input field
    document.getElementById('userInput').value = '';

    // Generate chatbot response
    const responses = [
        "I will help you with booking tickets.",
        "Please provide the details for booking.",
        "Do you need assistance with selecting the event?",
        "Are you looking for information on ticket pricing?"
    ];

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    setTimeout(() => {
        chatbox.innerHTML += `<p>Chatbot: ${randomResponse}</p>`;
        chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll to latest message
    }, 1000);
}

// Booking Function
async function bookTicket() {
    const name = document.getElementById('name').value;
    const language = document.getElementById('language').value;
    const tickets = document.getElementById('tickets').value;
    const event = document.getElementById('event').value;

    // Simple validation
    if (!name || !language || !tickets || !event) {
        alert('Please fill in all fields.');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/api/book-ticket', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ visitorName: name, language, tickets, event })
        });

        const data = await response.json();

        if (response.ok) {
            // Show booking confirmation
            showPopup(data.message || 'Booking successful!');
        } else {
            // Show error message
            showPopup(data.message || 'An error occurred. Please try again.');
        }
    } catch (error) {
        // Handle network errors
        showPopup('Network error. Please check your connection.');
    }
}

// Function to show a popup message
function showPopup(message) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
        <p>${message}</p>
        <button onclick="closePopup()">OK</button>
    `;
    document.body.appendChild(popup);
}

// Function to close the popup message
function closePopup() {
    const popup = document.querySelector('.popup');
    if (popup) {
        popup.remove();
    }
}

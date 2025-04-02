// Send user message and receive chatbot response
function sendMessage() {
    const chatbox = document.getElementById('chatbox');
    const userInput = document.getElementById('userInput').value;

    // Display user message
    chatbox.innerHTML += `<p>You: ${userInput}</p>`;
    
    // Clear input field
    document.getElementById('userInput').value = '';

    // Simulate chatbot response
    const responses = [
        "I can help you book tickets.",
        "What event are you interested in?",
        "How many tickets would you like to book?",
        "Please provide your name for the booking.",
        "We offer discounts for group bookings!"
    ];

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    setTimeout(() => {
        chatbox.innerHTML += `<p>Chatbot: ${randomResponse}</p>`;
        chatbox.scrollTop = chatbox.scrollHeight;  // Auto-scroll to the latest message
    }, 1000);
}

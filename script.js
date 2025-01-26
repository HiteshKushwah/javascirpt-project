// // Predefined questions and answers
// const qa = {
//     "what is quantum physics?": "Quantum physics is the study of particles at the atomic and subatomic levels.",
//     "what is a photon?": "A photon is a particle representing a quantum of light.",
//     "what is superposition?": "Superposition is the ability of a quantum system to be in multiple states at once.",
//     "what is entanglement?": "Entanglement is a phenomenon where particles remain connected so that the state of one affects the other.",
//     "what is heisenberg's uncertainty principle?": "It states that the position and momentum of a particle cannot be simultaneously measured with precision."
//   };
  
//   // DOM Elements
//   const chatArea = document.getElementById('chat-area');
//   const userInput = document.getElementById('user-input');
//   const sendBtn = document.getElementById('send-btn');
  
//   // Function to add a message to the chat
//   function addMessage(content, sender) {
//     const message = document.createElement('div');
//     message.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
//     message.textContent = content;
//     chatArea.appendChild(message);
//     chatArea.scrollTop = chatArea.scrollHeight; // Auto-scroll to the latest message
//   }
  
//   // Event listener for the send button
//   sendBtn.addEventListener('click', () => {
//     const question = userInput.value.toLowerCase().trim();
//     if (question === '') return; // Prevent empty input
    
//     addMessage(question, 'user'); // Show user message
//     userInput.value = ''; // Clear input field
    
//     // Find the answer or show default response
//     const answer = qa[question] || "I don't know the answer to that. Try asking something else!";
//     setTimeout(() => addMessage(answer, 'bot'), 500); // Simulate bot delay
//   });
  

const qa = {
    "what is quantum physics?": "Quantum physics is the study of particles at the atomic and subatomic levels.",
    "what is a photon?": "A photon is a particle representing a quantum of light.",
    "what is superposition?": "Superposition is the ability of a quantum system to be in multiple states at once.",
    "what is entanglement?": "Entanglement is a phenomenon where particles remain connected so that the state of one affects the other.",
    "what is heisenberg's uncertainty principle?": "It states that the position and momentum of a particle cannot be simultaneously measured with precision."
  };
  
  const chatArea = document.getElementById('chat-area');
  const userInput = document.getElementById('user-input'); // Correctly select the input field
  const sendBtn = document.getElementById('send-btn');
  
  function addMessage(content, sender) {
    const message = document.createElement('div');
    message.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    message.textContent = content;
    chatArea.appendChild(message);
    chatArea.scrollTop = chatArea.scrollHeight; // Scroll to the latest message
  }
  
  sendBtn.addEventListener('click', () => {
    const question = userInput.value.toLowerCase().trim(); // Correct `toLowerCase()` usage
    if (question === '') return; // Prevent empty input
  
    addMessage(question, 'user'); // Display user message
    userInput.value = ''; // Clear the input field
  
    const answer = qa[question] || "I couldn't find an answer for that."; // Improved default message
    setTimeout(() => addMessage(answer, 'bot'), 1000); // Simulate bot response delay
  });
  
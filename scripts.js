/* Chatbot pop-up function */
document.getElementById("chatButton").addEventListener("click", openChat);

function openChat() {
    document.getElementById("chatPopup").style.display = "block";
}

function closeChat() {
    document.getElementById("chatPopup").style.display = "none";
}

/* User input */

const chatDisplay = document.getElementById('chat-display');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

displayMessage('Bot', "Welcome to Recipe Combobulated! How may I assist you on your culinary journey?");
displayMessage('Bot', "Would you like to learn more about the features of this website?");
displayMessage('Bot', "Would you like a random recipe?");

userInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

sendButton.addEventListener('click', function () {
    sendMessage();
});

function scrollChatToBottom() {
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
}

function clearChat() {
    chatDisplay.innerHTML = '';
}

function sendMessage() {
    const userMessage = userInput.value;
    displayMessage('User', userMessage);
    generateAnswer(userMessage);
    userInput.value = '';
    scrollChatToBottom();
}

function displayMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    messageDiv.classList.add('message-box');
    chatDisplay.appendChild(messageDiv);
    scrollChatToBottom();
}

function generateAnswer(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();

    while (!lowerCaseMessage.includes('exit')) {
        if (lowerCaseMessage.includes('learn') || lowerCaseMessage.includes('more')) {
            clearChat();
            displayMessage('Bot', "Recipe Combobulated aims to have thousands of recipes at your fingertips. We also strive to give you recipes based on the availability of your present ingredients!");
            displayMessage('Bot', "If you would like to go back, please type 'back'");
        } else if (lowerCaseMessage.includes('back')) {
            clearChat();
            displayMessage('Bot', "Would you like to learn more about the features of this website?");
            displayMessage('Bot', "Would you like a random recipe?");
        } else if (lowerCaseMessage.includes('random') || lowerCaseMessage.includes('recipe')) {
            displayRandomPastaRecipe();
        } else if (lowerCaseMessage.includes('exit')) {
            break;
        } else {
            displayMessage('Bot', "I'm sorry, I didn't quite catch that. Feel free to ask about recipes, and I'll do my best to help!");
        }

        return;
    }

    clearChat();
    displayMessage('Bot', 'Goodbye! Have a great day!');
}

function displayRandomPastaRecipe() {
    const pastaRecipes = [
        {
            name: "Spaghetti Bolognese",
            ingredients: [
                "300g ground beef",
                "1 onion, finely chopped",
                "2 cloves garlic, minced",
                "1 can (400g) crushed tomatoes",
                "1 teaspoon dried oregano",
                "1 teaspoon dried basil",
                "Salt and pepper to taste",
                "300g spaghetti",
                "Grated Parmesan cheese for serving"
            ],
            instructions: [
                "In a large skillet, brown the ground beef over medium heat.",
                "Add the chopped onion and minced garlic, sauté until softened.",
                "Stir in the crushed tomatoes, oregano, basil, salt, and pepper.",
                "Simmer the sauce for 20-30 minutes, stirring occasionally.",
                "Meanwhile, cook the spaghetti according to the package instructions.",
                "Serve the Bolognese sauce over the cooked spaghetti, and top with grated Parmesan cheese."
            ]
        },
        {
            name: "Chicken Alfredo Pasta",
            ingredients: [
                "300g fettuccine pasta",
                "2 chicken breasts, sliced",
                "2 tablespoons olive oil",
                "4 cloves garlic, minced",
                "1 cup heavy cream",
                "1 cup grated Parmesan cheese",
                "Salt and pepper to taste",
                "Chopped parsley for garnish"
            ],
            instructions: [
                "Cook the fettuccine pasta according to the package instructions.",
                "In a skillet, heat the olive oil over medium-high heat.",
                "Add the sliced chicken breasts and cook until browned and cooked through.",
                "Add the minced garlic and sauté for 1-2 minutes.",
                "Pour in the heavy cream and Parmesan cheese, stirring until the cheese is melted and the sauce is creamy.",
                "Season with salt and pepper to taste.",
                "Serve the Alfredo sauce over the cooked fettuccine, and garnish with chopped parsley."
            ]
        },
        {
            name: "Vegetarian Pesto Pasta",
            ingredients: [
                "300g penne pasta",
                "1 cup cherry tomatoes, halved",
                "1 cup baby spinach",
                "1/2 cup black olives, sliced",
                "1/2 cup feta cheese, crumbled",
                "1/3 cup pesto sauce",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Cook the penne pasta according to the package instructions.",
                "In a large bowl, combine the cooked pasta, cherry tomatoes, baby spinach, olives, and feta cheese.",
                "Add the pesto sauce and toss until everything is well coated.",
                "Season with salt and pepper to taste.",
                "Serve the vegetarian pesto pasta warm or at room temperature."
            ]
        }
    ];

    clearChat();
    const randomIndex = Math.floor(Math.random() * pastaRecipes.length);


    const recipe = pastaRecipes[randomIndex];

    displayMessage('Bot', `Here's a random pasta recipe for you: ${recipe.name}`);
    displayMessage('Bot', 'Ingredients:');
    recipe.ingredients.forEach(ingredient => {
        displayMessage('Bot', `- ${ingredient}`);
    });


    displayMessage('Bot', 'Instructions:');
    recipe.instructions.forEach(instruction => {
        displayMessage('Bot', `- ${instruction}`);
    });

    displayMessage('Bot', "If you would like to go back, please type 'back'");
}

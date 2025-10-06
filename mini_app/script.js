// Initialize the Telegram Web App object
const tg = window.Telegram.WebApp;

// Set the theme parameters from the Telegram client
tg.ready();

// Display user info if available
if (tg.initDataUnsafe.user) {
    const userInfoDiv = document.getElementById('user-info');
    userInfoDiv.innerHTML = `Hello, <strong>${tg.initDataUnsafe.user.first_name}</strong>!`;
}

// Function to handle the button click
function buyItem(itemName) {
    // Send data back to the bot (optional, for advanced use)
    tg.sendData(`User wants to buy ${itemName}`);

    // Show a confirmation alert inside the Mini App
    alert(`You are about to buy ${itemName}!`);

    // You can also close the Mini App window after an action
    // tg.close();
}
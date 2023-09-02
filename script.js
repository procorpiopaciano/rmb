const gif = document.getElementById('gif');
const replaceButton = document.getElementById('replaceButton');
const jackstoneButton = document.getElementById('jackstoneButton');
const lato1Button = document.getElementById('lato1Button');
const lato2Button = document.getElementById('lato2Button');
const modal = document.getElementById('myModal');
const passwordInput = document.getElementById('passwordInput');
const passwordSubmit = document.getElementById('passwordSubmit');
const sidebar = document.getElementById('sidebar');
const container = document.getElementById('container');
const backgroundMusic = document.getElementById('backgroundMusic');

replaceButton.style.display = 'none'; // Initially hide the "Replace GIF" button

passwordSubmit.addEventListener('click', () => {
    checkPassword();
});

// Listen for the Enter key in the password input field
passwordInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        checkPassword();
    }
});

function checkPassword() {
    const enteredPassword = passwordInput.value;
    // Replace 'your-password' with your desired password
    if (enteredPassword === 'sirmbangpinakamasarapmaglutongsinigangnababoy') {

        alert('Increase the volume before pressing OK to continue');

        modal.style.display = 'none'; // Hide the modal
        sidebar.style.display = 'block'; // Show the sidebar
        container.style.display = 'block'; // Show the container
        replaceButton.style.display = 'block'; // Show the "Replace GIF" button
        backgroundMusic.play();
    } else {
        alert('Incorrect password. Please try again.');
    }
}

replaceButton.addEventListener('click', () => {
    // Replace the GIF with a new image source

    alert('Make sure to wish first!!! before pressing OK to continue');

    gif.src = 'images/rmb-off.gif'; // Replace 'another-image.jpg' with your desired image path
    // Hide the "Replace GIF" button
    replaceButton.style.display = 'none';
    // Show the additional buttons
    jackstoneButton.style.display = 'block';
    lato1Button.style.display = 'block';
    lato2Button.style.display = 'block';
});

// Add an onclick event to the jackstoneButton
jackstoneButton.addEventListener('click', () => {
    // Display an alert box
    alert('Clear the 10 levels of jackstone then inform the developer that you have finished this challenge. Win a voucher once you finished this challenge.');
});

lato1Button.addEventListener('click', () => {
  // Display an alert box
  alert('Using the lato-lato with green handle, perform a combo of 15 seconds to win a voucher. Sound record your combo then send to the developer.');
});

lato2Button.addEventListener('click', () => {
  // Display an alert box
  alert('Using the lato-lato with a rope handle, perform a combo of 20 seconds to win a voucher. Sound record your combo then send to the developer.');
});


// Show the modal when the page loads
modal.style.display = 'flex';

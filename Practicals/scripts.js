let counter = 9997; // Initialize the counter variable with a starting value

const DISPLAY = document.getElementById('display'); // Get a reference to the display element
const ALERT_EL = document.getElementById('alert'); // Get a reference to the alert message element
const ERROR_MSG_OUT_OF_MEMORY = 'Out of memory'; // Define error message for out of memory
const ERROR_MSG_INVALID_RANGE = 'Zero is the low limit'; // Define error message for invalid range
 

function updateDisplay() {
    const numberToString = addPaddingAtStart(counter.toString(), 4, '0'); // Convert counter to string and pad with zeros if necessary
    const boxCount = numberToString.length;
    const spanElements = DISPLAY.children;

    // Remove excess span elements
    for (let i = spanElements.length - 1; i >= boxCount; i--) {
        DISPLAY.removeChild(spanElements[i]);
    }

    // Update the existing span elements with the new counter value
    for (let i = 0; i < boxCount; i++) {
        if (i < spanElements.length) {
            spanElements[i].innerText = numberToString[i];
        } else {
            addBox(); // Add a new box if necessary
        }
    }
}

 

// Function to increment the counter
function increment() {
    const boxCount = DISPLAY.children.length; // Get the number of span elements (boxes) in the display
    counter++; // Increment the counter
    // Check if the counter exceeds the maximum displayable value
    if (counter.toString().length > 6) {
        ALERT_EL.innerText = ERROR_MSG_OUT_OF_MEMORY; // Display an error message if the counter exceeds the maximum value
        return;
    }
    // Check if additional box needs to be added to the display
    if (counter.toString().length > boxCount) {
        addBox(); // Add a box to the display if necessary
    }
    ALERT_EL.innerText = ''; // Clear any previous error message
    updateDisplay(); // Update the display with the new counter value
}

// Function to add a box to the display
function addBox() {
    const SPAN = document.createElement('span'); // Create a new span element
    SPAN.classList.add('box'); // Add 'box' class to the new span element
    SPAN.innerText = '0'; // Set the initial text of the new span element to '0'
    DISPLAY.append(SPAN); // Append the new span element to the display
}
 

 

// Function to decrement the counter
function decrement() {
    if (counter === 0) {
        ALERT_EL.innerText = ERROR_MSG_INVALID_RANGE; // Display an error message if the counter is already at zero
        return;
    }
    counter--; // Decrement the counter
    ALERT_EL.innerText = ''; // Clear any previous error message
    updateDisplay(); // Update the display with the new counter value
}

// Function to reset the counter
function reset() {
    counter = 0; // Reset the counter to zero
    ALERT_EL.innerText = ''; // Clear any previous error message
    updateDisplay(); // Update the display with the new counter value
}

// Function to add padding at the start of a string
function addPaddingAtStart(originalString, desiredLength, paddingCharacter) {
    const originalStringLength = originalString.length;
    const remainingSpace = desiredLength - originalStringLength;
    if(remainingSpace > 0) {
        let newString = originalString;
        for(let i=0; i < remainingSpace; i++) {
            newString = paddingCharacter + newString;
        }
        return newString;
    }
    return originalString;
}

// Function to ensure that the display is initialized correctly when the page loads
updateDisplay();

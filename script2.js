let counter = 999999; // Default counter limit set to 4 digits

const DISPLAY = document.getElementById("display");
const ALERT_MESSAGE = document.querySelector(".alert");

// Function to add padding at the start of a string
function addPaddingAtStart(originalString, desiredLength, paddingCharacter) {
  const paddingLength = Math.max(0, desiredLength - originalString.length);
  return paddingCharacter.repeat(paddingLength) + originalString;
}

function addBox() {
    const SPAN = document.createElement("span");
    SPAN.classList.add("box");
    SPAN.innerText = 0;
    DISPLAY.appendChild(SPAN);
}

function addBoxesIfNeeded(numToAdd) {
    for (let i = 0; i < numToAdd; i++) {
        addBox();
    }
}

function removeExcessBoxesIfNeeded(numToRemove) {
    const spanElements = DISPLAY.children;
    for (let i = 0; i < numToRemove; i++) {
        DISPLAY.removeChild(spanElements[spanElements.length - 1]); // Remove the last box element
    }
}

function updateDisplay() {
    const spanElements = DISPLAY.children;
    let counterString = addPaddingAtStart(counter.toString(), 4, '0'); // Default to 4 digits
    const numDigits = counterString.length;
    
    // Check if the number of digits exceeds six
    if (numDigits > 6) {
        ALERT_MESSAGE.style.display = "block";
        return;
    } else {
        ALERT_MESSAGE.style.display = "none";
    }
    
    // Check if the number of digits exceeds the number of existing boxes
    if (numDigits > spanElements.length) {
        const numToAdd = numDigits - spanElements.length;
        addBoxesIfNeeded(numToAdd);
    } 
    // Check if the number of digits is less than the number of existing boxes and less than or equal to 6
    else if (numDigits < spanElements.length && numDigits <= 6) {
        const numToRemove = spanElements.length - numDigits;
        removeExcessBoxesIfNeeded(numToRemove);
    }

    // Update the text content of each box element with the counter digits
    for (let i = 0; i < spanElements.length; i++) {
        spanElements[i].innerText = counterString[i];
    }
}

function increment() {
  if (counter >= 999999) {
    
      addBoxesIfNeeded(0); // Add  digits when counter reaches 9999
  }
  counter++;
  updateDisplay();
}
 
function decrement() {
    if (counter === 0) {
      ALERT_MESSAGE.style.display = "block";
      return;
    }
    counter--;
    updateDisplay();
  }
  

function reset() {
  counter = 0;
  updateDisplay();
}

function addZeroPaddingToStart() {}

updateDisplay();
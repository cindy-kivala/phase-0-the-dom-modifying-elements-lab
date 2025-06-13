// Remove the <main> element with id 'main'
const main = document.getElementById("main");
if (main) {
  main.remove();
}

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set its id to 'victory'
newHeader.id = "victory";

// Set its text content
newHeader.textContent = "Cindy is the champion";

// Append the new header to the document body
document.body.append(newHeader);

//*app for message form*//
const messageForm = document.getElementById("message-form");

async function handleSubmit(event) {
  event.preventDefault();
  //get info from form using FormData
  const formData = new FormData(messageForm);
  const body = Object.fromEntries(formData);
  //post request
  const response = await fetch("https://guestbook-l74i.onrender.com/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const messages = await response.json();
  console.log(messages);
}

messageForm.addEventListener("submit", handleSubmit);

//*app for message-container*//
const messageContainer = document.getElementById("message-container");

async function getMessages() {
  //retrieve messages from server
  const response = await fetch("https://guestbook-l74i.onrender.com/messages");
  const messages = await response.json();

  // display the books on the page
  for (let i = 0; i < messages.length; i++) {
    // make a variable for the information in the book
    const name = messages[i].name;
    const message = messages[i].message;

    // make a new element
    const p = document.createElement("p");

    // add the text to the element
    p.textContent = `${name}: ${message}`;

    // append the element to the page
    messageContainer.appendChild(p);
  }
}

getMessages();

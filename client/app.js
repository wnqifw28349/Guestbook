//*app for message form*//
const messageForm = document.getElementById("message-form");

async function handleSubmit(event) {
  event.preventDefault();

  //get info from the form
  const formData = new FormData(messageForm);
  const formObj = Object.fromEntries(formData);

  const response = await fetch("https://guestbook-l74i.onrender.com/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formObj),
  });

  // const messages = await response.json();

  console.log(response);
}

messageForm.addEventListener("submit", handleSubmit);

//*app for message-container*//
const messageContainer = document.getElementById("message-container");

async function getMessages() {
  //retrieve messages from server
  const response = await fetch("https://guestbook-l74i.onrender.com/messages");
  const messages = await response.json();

  // display the messages
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

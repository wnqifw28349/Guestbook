//*app for message form*//
const messageForm = document.getElementById("message-form");

async function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(messageForm);
  const formObj = Object.fromEntries(formData);
  const response = await fetch("https://guestbook-l74i.onrender.com/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formObj),
  });
  console.log(response);
}

messageForm.addEventListener("submit", handleSubmit);

//*app for message-container*//
const messageContainer = document.getElementById("message-container");

async function getMessages() {
  const response = await fetch("https://guestbook-l74i.onrender.com/messages");
  const messages = await response.json();

  for (let i = 0; i < messages.length; i++) {
    const name = messages[i].name;
    const message = messages[i].message;
    const p = document.createElement("p");
    p.textContent = `${name} wrote ${message}`;
    messageContainer.appendChild(p);
  }
}

getMessages();

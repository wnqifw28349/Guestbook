const messageForm = document.getElementById("messageForm");

async function handleSubmit(event) {
  event.preventDefault();
  //get info from form
  const formData = new FormData(messageForm);
  const body = Object.fromEntries(formData);
  //post request
  const response = await fetch("http://localhost:3000/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  form.querySelector('[role="status"]').textContent =
    "Your message is ready. This is a demo form; no message has been sent.";
});

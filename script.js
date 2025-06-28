function login(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const message = document.getElementById("message");

  if (email === "test@example.com" && password === "123456") {
    message.style.color = "green";
    message.textContent = "✅ Login Successful!";
  } else {
    message.style.color = "red";
    message.textContent = "❌Invalid email or password!";
  }

  return false;
}

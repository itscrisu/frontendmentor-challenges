const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = form["firstname"].value;
  const lastName = form["lastname"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  firstName === ""
    ? addError("firstname", "First name cannot be empty")
    : removeErrorMessage("firstname");
  lastName === ""
    ? addError("lastname", "Last name cannot be empty")
    : removeErrorMessage("lastname");

  // I believe in this case that I need to use else if is more readable like this instead of using ternary operator
  if (email === "") {
    addError("email", "Email cannot be empty");
  } else if (!isValid(email)) {
    addError("email", "Looks like this is not an email");
  } else {
    removeErrorMessage("email");
  }

  password === ""
    ? addError("password", "Password cannot be empty")
    : removeErrorMessage("password");
});

function addError(field, message) {
  const formControl = form[field].parentNode;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.classList.add("error");
}

function removeErrorMessage(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove("error");
}

function isValid(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

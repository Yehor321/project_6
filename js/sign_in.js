const form = document.getElementById("profile_login");

const email = document.getElementsByName("email")[0];
const password = document.getElementsByName("password")[0];
const name = document.getElementsByName("name")[0];
const surname = document.getElementsByName("surname")[0];

form.onsubmit = (e) => {
    e.preventDefault();
    alert( name.value + " " + surname.value + ", раді тебе бачити!");
    console.log(email.value, password.value);
}
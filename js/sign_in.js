const form = document.getElementById("profile_login");

const email = document.getElementsByName("email")[0];
const password = document.getElementsByName("password")[0];
const name = document.getElementsByName("name")[0];
const surname = document.getElementsByName("surname")[0];

form.onsubmit = (e) => {

    e.preventDefault();

    if (name.value.length < 4) {
        alert("Будь ласка введіть довше ім'я");
        return;
    }
    
    if (surname.value.length < 4) {
        alert("Будь ласка введіть довше прізвище");
        return;
    }
    
    if (password.value.length < 8) {
        alert("Будь ласка введіть правильний пароль довжина якого має бути 8, або більше");
        return;
    }

    alert( name.value + " " + surname.value + ", раді тебе бачити!");
    console.log(email.value, password.value);
}
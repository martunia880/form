const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");
const formBox1 = document.getElementById("registerswitch");
const formBox2 = document.getElementById('login');
const formBox3 = document.getElementById("register");
const formBox4 = document.getElementById("loginswitch");
const formBox = document.querySelectorAll(".formbox");

const checkShow = () => {
    formBox.forEach(box => {
        box.classList.toggle("show");
        box.classList.toggle("unshow");
    });
}
const slideMove = () => {
    formBox1.classList.toggle("down");
    formBox2.classList.toggle("up");
    formBox3.classList.toggle("up");
    formBox4.classList.toggle("down");
}

registerBtn.addEventListener("click", () => {
    slideMove();
    checkShow();
})

loginBtn.addEventListener("click", () => {
    slideMove();
    checkShow();
})

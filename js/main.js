const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");
const formBox1 = document.getElementById("registerswitch");
const formBox2 = document.getElementById('login');
const formBox3 = document.getElementById("register");
const formBox4 = document.getElementById("loginswitch");

registerBtn.addEventListener("click", () => {
    formBox1.classList.add("down");
    formBox1.classList.add("unshow");
    formBox1.classList.remove("show");
    formBox2.classList.add("up");
    formBox2.classList.add("unshow");
    formBox2.classList.remove("show");
    formBox3.classList.add("up");
    formBox3.classList.add("show");
    formBox3.classList.remove("unshow");
    formBox4.classList.add("down");
    formBox4.classList.add("show");
    formBox4.classList.remove("unshow");
})
loginBtn.addEventListener("click", () => {
    formBox1.classList.remove("down");
    formBox1.classList.remove("unshow");
    formBox1.classList.add("show");
    formBox2.classList.remove("up");
    formBox2.classList.remove("unshow");
    formBox2.classList.add("show");
    formBox3.classList.remove("up");
    formBox3.classList.remove("show");
    formBox3.classList.add("unshow");
    formBox4.classList.remove("down");
    formBox4.classList.remove("show");
    formBox4.classList.add("unshow");
})

// const registerBtn = document.querySelector(".register-btn");
// const loginBtn = document.querySelector(".login-btn");
// const formBoxes = document.querySelectorAll(".formbox");

// function bb = () => {
//     if (formBoxes.classList.contains("show"))
// }

// function toggleFormBoxes(showBoxes, hideBoxes) {
//   showBoxes.forEach(box => {
//     box.classList.add("show");
//     box.classList.remove("unshow");
//   });

//   hideBoxes.forEach(box => {
//     box.classList.add("unshow");
//     box.classList.remove("show");
//   });
// }

// document.querySelector(".register-btn").addEventListener("click", () => {
//   toggleFormBoxes([formBox3, formBox4], [formBox1, formBox2]);
// });

// document.querySelector(".login-btn").addEventListener("click", () => {
//   toggleFormBoxes([formBox1, formBox2], [formBox3, formBox4]);
// });
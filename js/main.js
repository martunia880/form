const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");
const formBox1 = document.getElementById("registerswitch");
const formBox2 = document.getElementById('login');
const formBox3 = document.getElementById("register");
const formBox4 = document.getElementById("loginswitch");

registerBtn.addEventListener("click", () => {
    formBox4.classList.add("up");
    formBox4.classList.add("show");
    formBox3.classList.add("down");
    formBox3.classList.add("show");

    //test
    formBox3.style.zIndex="10";


})
loginBtn.addEventListener("click", () => {
    
})

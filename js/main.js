const registerBtn = document.querySelector(".register-btn");
const registerBtn2 = document.querySelector(".register-btn2");
const loginBtn = document.querySelector(".login-btn");
const loginBtn2 = document.querySelector(".login-btn2");
const formBox1 = document.getElementById("registerswitch");
const formBox2 = document.getElementById('login');
const formBox3 = document.getElementById("register");
const formBox4 = document.getElementById("loginswitch");
const formBox = document.querySelectorAll(".formbox");
const error = document.querySelectorAll(".error-text");
const firstname = document.querySelector("#name");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const loginEmail = document.querySelector("#login-email");
const loginPassword = document.querySelector("#login-password");
const checkbox2 = document.querySelector('#checkbox2');
const checkbox1 = document.querySelector('#checkbox1');


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

const showError = (input,msg) => {
    const errorMsg = input.querySelectorAll(".error-text");
    const b = input.nextElementSibling;
    b.classList.remove('error-visibility');
    b.value=msg;
}
const hideError = (input) => {
    const errorMsg = input.querySelectorAll(".error-text");
    const b = input.nextElementSibling;
    b.classList.add('error-visibility');
}
const checkForm = input => {
    input.forEach(el => {;
        if(el.value === '') {
            showError(el,'cos');
        } else {
            hideError(el);
        }
    })
}
const clearBtn = (e) => {
    checkbox1.checked = false;
    checkbox2.checked = false;
    e.preventDefault();
    [firstname,lastname,email,password,loginEmail,loginPassword].forEach(el => {
        el.nextElementSibling.classList.add('error-visibility');
        el.value="";
    })
}
registerBtn.addEventListener("click", (e) => {
    slideMove();
    checkShow();
    clearBtn(e);
})

loginBtn.addEventListener("click", (e) => {
    slideMove();
    checkShow();
    clearBtn(e);
})
registerBtn2.addEventListener("click", e => {
    e.preventDefault();
    checkForm([firstname,lastname,email,password]);
    if (!checkbox2.checked) {
        alert('Musisz zaakceptować regulamin');
    }
})
loginBtn2.addEventListener("click", e => {
    e.preventDefault();
    checkForm([loginEmail,loginPassword]);
})

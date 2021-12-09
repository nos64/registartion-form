
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const confirmMessage = document.getElementById('confirm-message')
const regBtn = document.querySelector('.registration-modal-form-button');
const checkboxLabelRule = document.getElementById('checkbox-label-rule');
const checkboxLabelPolitic = document.getElementById('checkbox-label-politic');
const eye1 = document.querySelector('.registration-modal-form__show-pass1');
const eye2 = document.querySelector('.registration-modal-form__show-pass2');

//Проверка формы перед отправкой
const checkPass = () => {
    password.addEventListener('keyup', passwordValidate);
    passwordConfirm.addEventListener('keyup', passwordValidate);

    function passwordValidate() {
        if (password.value === '' && passwordConfirm.value === '') {
            confirmMessage.style.display = 'none';
        } else if (password.value !== passwordConfirm.value) {
            confirmMessage.style.display = 'inline';
        } else {
            confirmMessage.style.display = 'none';
        }
    } 
}

const checkCheckboxes = () => {
    if (checkboxLabelRule.checked && checkboxLabelPolitic.checked) {
        return true
    }
}

document.querySelector('.registration-modal-form').addEventListener('input', (event) => {
    event.preventDefault();
    checkPass()
    if (email.value && password.value && passwordConfirm.value && password.value === passwordConfirm.value && checkCheckboxes()) {
        regBtn.disabled = false;
    } else {
        regBtn.disabled = true;
    }
})
// Burger-menu
{
    const hamburger = document.querySelector(".hamburger");
    const headerMenuItem = document.querySelectorAll(".header-menu-item");
    const headerUser = document.querySelector('.header-user');
    const headerRegistration = document.querySelector('.header-registration');
    const headerLanguage = document.querySelector('.header-language');
    const headerUserImg = document.querySelector('.header-user-img');

    hamburger.addEventListener('click', function () {
      this.classList.toggle('change');
      for (let i = 0, length = headerMenuItem.length; i < length; i++) {
        headerMenuItem[i].classList.toggle('active');
      }
      headerUser.classList.toggle('active');
      headerRegistration.classList.toggle('active');
      headerLanguage.classList.toggle('active');
      headerUserImg.classList.toggle('active');
    });
}


//Show password

eye1.addEventListener('click', () => {
    if(password.getAttribute('type') === 'password') {
        password.setAttribute('type', 'text');
    } else {
        password.setAttribute('type', 'password');
    }
});

eye2.addEventListener('click', () => {

    if(passwordConfirm.getAttribute('type') === 'password') {
        passwordConfirm.setAttribute('type', 'text');
    } else {
        passwordConfirm.setAttribute('type', 'password');
    }
});


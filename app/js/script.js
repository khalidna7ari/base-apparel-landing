const input = document.querySelector('input');
const error = document.querySelector('.error');
const errorMessage = document.querySelector('.error--message')
const formContainer = document.querySelector('form');
const button = document.querySelector('button');






//checks if the email is valid

const isValid  = (email) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      error.classList.remove('display--off')
      errorMessage.classList.remove('display--off')
      formContainer.classList.remove('border--toggle')
    }
    else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      error.classList.add('display--off')
      errorMessage.classList.add('display--off')
      formContainer.classList.add('border--toggle')
    }
    }

const incorrectEmail = (i) => {
  i.preventDefault();
  if (input.value != ''){
    isValid(input.value)
    input.value = ''
  }
}

button.addEventListener('click', incorrectEmail)



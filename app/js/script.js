const input = document.querySelector('input');
const error = document.querySelector('.error');
const errorMessage = document.querySelector('.error--message')
const formContainer = document.querySelector('form');







//checks if the email is valid

const isValid  = (email) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      return console.log('mecrovat')

    }
} 




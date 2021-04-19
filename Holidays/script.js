const signin= document.querySelector('#sign-in-button');
const signup= document.querySelector('#sign-up-button');
const container= document.querySelector('.container');


signup.addEventListener('click',()=>{
    container.classList.add('sign-up-mode');
});
signin.addEventListener('click',()=>{
    container.classList.remove('sign-up-mode');
});



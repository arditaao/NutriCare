const wrappper = document.querySelector('.wrapper');
const signUpLink =document.querySelector('>SignUp-link');
const signInLink =document.querySelector('>SignIn-link');

signUpLink.addEventListener('click',()=>{
    wrappper.classList.add('animate-signIn');
    wrappper.classList.remove('animate-signUp');
});
signInLink.addEventListener('click',()=>{
    wrappper.classList.add('animate-signUp');
    wrappper.classList.remove('animate-signIn');
});
const container = document.getElementById('container');
const loginButton = document.getElementById('login')
const registerButton = document.getElementById('register');

registerButton.addEventListener('click',() =>{
    container.classList.add('active');
    console.log('Reg per Click')
});

loginButton.addEventListener('click', () =>{
    container.classList.remove('active');
    console.log("Log Per Click");
});


const fp = document.querySelector('.FP')

fp.addEventListener('click', () =>{
    console.log('click on fp')
});
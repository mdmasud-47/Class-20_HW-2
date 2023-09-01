document.getElementById('eye').addEventListener('click', function(){

    let password = document.getElementById('password')
    let eye = document.getElementById('eye')

    if(password.type == 'text'){
        password.type = 'password';
       eye.innerHTML = ' <i class="fa-solid fa-eye-slash"></i>'
        
    }else{
        password.type = 'text';
        eye.innerHTML = '<i class="fa-solid fa-eye">';
    }
})

password.addEventListener('keyup', function(){
    let leng = password.value.length
    let demo = document.getElementById('demo')

    if(leng < 8){
        demo.innerText = "Weak Password";
        demo.style.color = 'red'
    }else{
        demo.innerText = "Strong Password";
        demo.style.color = 'green'
    }
})
let mode_toggler= document.getElementById('mode_toggler');
let root= document.documentElement;
mode_toggler.addEventListener('click', function(){
    if(root.classList.contains('dark')){
        root.classList.remove('dark')
        mode_toggler.innerHTML = '<i class="fa-solid fa-toggle-on"></i>'
        localStorage.removeItem('mode')
    }else{
        root.classList.add('dark')
        localStorage.setItem('mode', 'dark')
        mode_toggler.innerHTML = '<i class="fa-solid fa-toggle-off"></i>'
    }
})

if(localStorage.getItem('mode') == 'dark'){
    root.classList.add('dark')
}
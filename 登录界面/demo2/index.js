const container = document.getElementsByClassName('container')[0];
const signUp = document.getElementById('sign-up');
const signIn = document.getElementById('sign-in');;

signUp.onclick = function(){
    container.classList.add('active');
}

signIn.onclick = function(){
    container.classList.remove('active');
}
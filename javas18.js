const form=document.getElementById('form');
var username=document.getElementById('username');
const email=document.getElementById('email');
const password1=document.getElementById('password1');
const password2=document.getElementById('password2');
const small=document.querySelector('small');

form.addEventListener('sumbit',function(e){
    e.preventDefault();
    checkInput();
    
});

function checkInput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passValue = password1.value.trim();
    const passValue2 = password2.value.trim();
    if(usernameValue===''){
        showError(username,"Username can not be Blank");
    }
    else{
        showSuccess(username);
    }
    if(emailValue===''){
        showError(email,"Email can not be Blank");
    }
    else{
        showSuccess(email);
    }
    if(passValue===''){
        showError(password1,"Password can not be Blank");
    }
    else{
        showSuccess(password1);
    }
    if(passValue2===''){
        showError(password2,"Password can not be Blank");
    }
    else{
        showSuccess(password);
    }
}

function showError(input,msg){
    const formControl=input.parentNode;
    formControl.className='error';
    const small=formControl.querySelector('small');
    small.innerHTML=msg;
}

function showSuccess(input){
    const formControl=input.parentNode;
    formControl.className='form-control success';
    
}
function isEmailValid(email){
    return /^([a-zA-Z0-9_\. \-\+]+)@([a-zA-Z0-9_\. \-\+]+)\.([a-zA-Z]{2,3})$/.test(email);
}
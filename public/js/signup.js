
function validate(){
    var pwd = document.getElementById('password').value;
    var repwd = document.getElementById('repwd').value;
   
    var username=document.getElementById('uname').value;
    var emailvalue =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var email= document.getElementById('email').value;
    
    
    if(! emailvalue.test(email)){
        document.getElementById('emailmsg').style.color = 'red';
        document.getElementById('emailmsg').innerHTML = 'invalid email id'
        return false;
    }
    else{
        document.getElementById('emailmsg').style.color = 'green';
        document.getElementById('emailmsg').innerHTML = 'valid email id';
    }
   
    
    if(pwd.length<8){
       document.getElementById('pMsg').style.color = 'red';
        document.getElementById('pMsg').innerHTML ='weak password';
        return false;
    }
    else{
        document.getElementById('pMsg').style.color = 'green';
         document.getElementById('pMsg').innerHTML ='strong password';
        
    }
    
   

    if(pwd != repwd)
    {
        
        document.getElementById('pwdMsg').style.color = 'red';
        document.getElementById('pwdMsg').innerHTML = 'Password not matched!';
       
        return false;
    }
    else{
        document.getElementById('pwdMsg').style.color = 'green';
        document.getElementById('pwdMsg').innerHTML = 'Password matched!';
    }
   
   
    return true;
 
}
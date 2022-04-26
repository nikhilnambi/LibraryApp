function validate(){
   var emailvalue =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   var email= document.getElementById('email').value;
   var pwd = document.getElementById('password').value;

 if(! emailvalue.test(email)){
     document.getElementById('emailmsg').style.color = 'red';
     document.getElementById('emailmsg').innerHTML = 'invalid email id'
     return false;
 }

 if(pwd.length<8){
    document.getElementById('pMsg').style.color = 'red';
     document.getElementById('pMsg').innerHTML ='Password Should Contain atleast 8 letters';
     return false;
 }


 return true;


 }
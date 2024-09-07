function clearErrors(){
    errors=document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML="";
    }
}
function seterror(id,error){
    //setx error inside tag of id
    element=document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML= error;

}
function validateForm(){
    var returnval = true;
    clearErrors();

    //perform validation and if validaition fails,set the value of returnval to false
     var name = document.forms['myForm']["fname"].value;
    if(name.length<5){
        seterror("name","*length of name is too short");
        returnval = false;
    }
    if(name.length==0){
        seterror("name","*length of name cannot be zero");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if(email.length>15){
        seterror("email","*email of name is too long");
        returnval = false;
    }
    
    var phone = document.forms['myForm']["fphone"].value;
    if(phone.length != 10){
        seterror("phone","*phone number should be 10 digits");
        returnval = false;
    }
    
    var password= document.forms['myForm']["fpass"].value;
    if(password.length< 10){
        seterror("password","*password  should be 10 char long");
        returnval = false;
    }
    var confirmpassword= document.forms['myForm']["fcpass"].value;
    if(confirmpassword!=password){
        seterror("cpass","*pass should be same as password");
        returnval = false;
    }

    return returnval;

}
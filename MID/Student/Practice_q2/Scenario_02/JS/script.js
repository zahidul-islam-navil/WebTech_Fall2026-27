function collect_data()
{
    let validateEmail = validEmail();
    let validPassword = validatePassword();
    return validateEmail && validPassword;
}
function validEmail()
{
    let Email = document.getElementById("PatientEmail").value.trim();
    let Error = document.getElementById("EmailError");
    let regexpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(Email === "")
    {
        Error.innerHTML = "Please Enter The Email";
        return false;
    }
    else if(!regexpression.test(Email))
    {
        Error.innerHTML = "Please Enter The Right Email Format";
        return false;
    }
    else
    {
        Error.innerHTML = "Patient Email: " + Email;
        return true;
    }
}
function validatePassword()
{
    let Password = document.getElementById("password").value;
    let Error = document.getElementById("PasswordError");
    if(Password === "")
    {
        Error.innerHTML = "Please Enter The Password";
        return false;
    }
    else if(Password.length < 6)
    {
        Error.innerHTML = "Password Must be at least 6 Char";
        return false;
    }
    else
    {
        Error.innerHTML = "Password Accepted";
        return true;
    }
}
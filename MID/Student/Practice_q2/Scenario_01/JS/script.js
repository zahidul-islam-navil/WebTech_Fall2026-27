function collect_data()
{
    let validName = validateName();
    let validateAge = validAge();
    return validName && validateAge;
}
function validateName()
{
    let Pname = document.getElementById("PatientName").value.trim();
    let Error = document.getElementById("NameError");
    if(Pname == "")
    {
        Error.innerHTML = "Enter The Name";
        return false;
    }
    else if(Pname.length < 6)
    {
        Error.innerHTML = "Name Must be at least 6 Char";
        return false;
    }
    else
    {
        Error.innerHTML = "Patient Name: " + Pname;
        return true;
    }
}
function validAge()
{
    let PAge = Number(document.getElementById("PatientAge").value);
    let ErrorAge = document.getElementById("AgeError");
    if(document.getElementById("PatientAge").value === "")
    {
        ErrorAge.innerHTML = "Please Enter The Age";
        return false;
    }
    else if(PAge < 1 || PAge > 100)
    {
        ErrorAge.innerHTML = "Age Must be Within the Limit";
        return false;
    }
    else
    {
        ErrorAge.innerHTML = "Patient Age: " + PAge;
        return true;
    }
}
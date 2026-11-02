function collect_data()
{
    let validategender = validateGender();
    let validDept = validateDepartment();
    return validategender && validDept;
}
function validateGender()
{
    let genders = document.querySelectorAll('input[name="gender"]');
    let GenderError = document.getElementById("ErrorGender");
    let selectGender = "";
    for(let i = 0; i < genders.length; i++)
    {
        if(genders[i].checked)
        {
            selectGender = genders[i].value;
            break;
        }
    }
    if(selectGender == "")
    {
        GenderError.innerHTML = "Please Enter the Gender";
        return false;
    }
    else
    {
        GenderError.innerHTML = "Gender: " + selectGender;
        return true;
    }
}

// appended part is here

function validateDepartment()
{
    let departments = document.querySelectorAll('input[name="dept"]');
    let deptError = document.getElementById("DeptError");
    let selectedDepartments = [];
    for(let i = 0; i < departments.length; i++)
    {
        if(departments[i].checked)
        {
            selectedDepartments.push(departments[i].value);
        }
    }
    if(selectedDepartments.length === 0)
    {
        deptError.innerHTML = "Please select at least one department";
        return false;
    }
    else
    {
        deptError.innerHTML = "Selected Department(s): "
            + selectedDepartments.join(", ");
        return true;
    }
}
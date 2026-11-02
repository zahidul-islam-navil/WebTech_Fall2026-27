function add(a, b)
{
    return a + b;
}
function collect_data()
{
    let value1 = document.getElementById("number1").value;
    let value2 = document.getElementById("number2").value;
    let Error = document.getElementById("out");
    if(value1 === "" || value2 === "")
    {
        Error.innerHTML = "Please Enter Both Numbers";
        return false;
    }
    else
    {
        let a = Number(value1);
        let b = Number(value2);
        let sum = add(a, b);
        Error.innerHTML = "Sum: " + sum;
        console.log(sum);
        if(sum > 100)
        {
            alert("Big number!");
        }
        return true;
    }
}
document.getElementById("btn")
    .addEventListener("click", collect_data);
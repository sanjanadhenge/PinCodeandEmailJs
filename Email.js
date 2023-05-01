let EMAIL_Regex = RegExp('^[0-9a-zA-Z]+[.+-_]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}');
let sample = "abc.xyz@Brigelabz.co";
ValidatePincode(sample,EMAIL_Regex);
function ValidatePincode(email,EMAIL_Regex)
{
    if(EMAIL_Regex.test(email))
    {
        console.log("valid");
    }
    else
    {
        console.log("Invalid");
    }
}
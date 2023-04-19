function checkCreds()
{
    alert("check Creds");
    var FirstName = document.getElementById("FirstName").value;
    var LastName = document.getElementById("LastName").value;
    var Badgenumber = document.getElementById("Badgenumber").value;
    var FullName = FirstName + " " + LastName;
alert(FirstName + " " + Badgenumber);

    if(FullName.length> 20 || FullName.length <4);
   {
    document.getElementById("loginStatus").innerHTML = "Invalid length on FullName + LastName";
   }


if(Badgenumber >10 || Badgenumber<2)
   {
    document.getElementById("loginStatus").innerHTML = "Invalid number of participants";
   }

alert(FullName);

 else if(FullName.length<= 20 || FullName.length <=4)
 
   {
    document.getElementById("loginStatus").innerHTML = "FullName " + " " + Badgenumber;
    alert("Congrats - you are now logged on - hit enter now to go to the next page");
    location.replace("Page 2.html");
   }
}

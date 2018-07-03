
var userchk=document.getElementById("username").value;
window.alert(userchk.length+'hi');
if(userchk.length<5)
{
window.alert('username length less than 5');
}


function focuson(x){
x.style.border="2px outset black";
x.style.background="";
}

function focusoff(x){
x.style="";
}
function valid()
{
var fn=document.getElementById("FirstName").value;
var ln=document.getElementById("LastName").value;
var em=document.getElementById("Email").value;
var mob=document.getElementById("MobileNo").value;
var usern=document.getElementById("username").value;
var pass=document.getElementById("password").value;
var comp=document.getElementById("companyname").value;
var patt = /^[A-Za-z][A-Za-z]*[A-Za-z]$/i;
var chfn=patt.test(fn);
var chln=patt.test(ln);
var chco=patt.test(comp);
//var patt1= /^[A-Za-z][\.\_\w]*@\w[\.\w]{0,2}?[A-Za-z]+$/i;
var patt1= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var chem=patt1.test(em);
var patt2=/^[7-9][0-9]+$/;
var chmob=patt2.test(mob);
var patt3 = /^[A-Za-z][\w\_\.#&*@\^]*\w$/;
var chusr=patt3.test(usern);
//password strength
//var pass1=/[\_\.\#\&\*@\\\^]*/;
//var chkp=pass1.exec(password);

if(comp.length<2 || chco==0)
{
window.alert("Invalid Company Name");
}
if(fn.length<2 || chfn==0)
{
window.alert("Invalid First Name");
}  
if(ln.length<2 || chln==0)
{
window.alert("Invalid Last Name");
}
if(chem==0)
{
window.alert("Invalid Email Address");
}
if(mob.length!=0){
if(mob.length<10 || chmob==0)
{
window.alert("Invalid Mobile No");
}
}
}
if(chusr==0)
{
window.alert("Invalid Username");
}
window.location= "login.php";
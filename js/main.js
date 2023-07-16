callBTN = document.getElementById("callBTN");
SNBTN = document.getElementById("SNBTN");
call = document.getElementById("call");
SN = document.getElementById("SN");

callBTN.addEventListener("click" , ()=>{
    navigator.clipboard.writeText(call.innerHTML);
})

SNBTN.addEventListener("click" , ()=>{
    navigator.clipboard.writeText(SN.innerHTML);
})
function showError(id,msg){
document.getElementById(id+"Error").textContent=msg
}

function clearError(id){
document.getElementById(id+"Error").textContent=""
}

/* STEP CONTROL */

function showStep(n){

document.querySelectorAll(".step").forEach(s=>{
s.classList.remove("active")
})

document.getElementById("step"+n).classList.add("active")

let percent=(n/3)*100

document.getElementById("bar").style.width=percent+"%"

}

function prevStep(n){
showStep(n)
}

/* VALIDATE STEP 1 */

function nextStep1(){

let valid=true

let name=document.getElementById("fullname").value.trim()

if(name.length<3){
showError("fullname","Tên ≥ 3 ký tự")
valid=false
}else{
clearError("fullname")
}

let dob=document.getElementById("dob").value

if(dob===""){
showError("dob","Chọn ngày sinh")
valid=false
}else{
clearError("dob")
}

let gender=document.querySelector("input[name='gender']:checked")

if(!gender){
showError("gender","Chọn giới tính")
valid=false
}else{
clearError("gender")
}

if(valid){
showStep(2)
}

}

/* VALIDATE STEP 2 */

function nextStep2(){

let valid=true

let email=document.getElementById("email").value

let emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(!emailRegex.test(email)){
showError("email","Email không hợp lệ")
valid=false
}else{
clearError("email")
}

let pass=document.getElementById("password").value

if(pass.length<8){
showError("password","≥ 8 ký tự")
valid=false
}else{
clearError("password")
}

let confirm=document.getElementById("confirm").value

if(pass!==confirm){
showError("confirm","Không khớp mật khẩu")
valid=false
}else{
clearError("confirm")
}

if(valid){

let name=document.getElementById("fullname").value
let dob=document.getElementById("dob").value
let gender=document.querySelector("input[name='gender']:checked").value
let email=document.getElementById("email").value

document.getElementById("summary").innerHTML=

"<p><b>Họ tên:</b> "+name+"</p>"+
"<p><b>Ngày sinh:</b> "+dob+"</p>"+
"<p><b>Giới tính:</b> "+gender+"</p>"+
"<p><b>Email:</b> "+email+"</p>"

showStep(3)

}

}

/* SUBMIT */

document.getElementById("form").addEventListener("submit",function(e){

e.preventDefault()

document.getElementById("form").style.display="none"

document.getElementById("success").innerHTML=
"<h3>Đăng ký thành công 🎉</h3>"

})


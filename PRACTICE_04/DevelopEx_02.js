function showError(id,msg){
document.getElementById(id+"Error").textContent=msg
}

function clearError(id){
document.getElementById(id+"Error").textContent=""
}

/* Đếm ký tự họ tên */

document.getElementById("fullname").addEventListener("input",function(){

let len=this.value.length

document.getElementById("nameCounter").textContent=len+"/50"

})

/* Thanh độ mạnh mật khẩu */

document.getElementById("password").addEventListener("input",function(){

let pass=this.value

let strength=document.getElementById("strength")

let score=0

if(pass.length>=8) score++
if(/[A-Z]/.test(pass)) score++
if(/[a-z]/.test(pass)) score++
if(/\d/.test(pass)) score++

if(score<=2){

strength.style.width="33%"
strength.className="strength weak"

}

else if(score==3){

strength.style.width="66%"
strength.className="strength medium"

}

else{

strength.style.width="100%"
strength.className="strength strong"

}

})

/* Hiện / ẩn mật khẩu */

document.getElementById("togglePass").addEventListener("click",function(){

let pass=document.getElementById("password")

if(pass.type==="password"){
pass.type="text"
}else{
pass.type="password"
}

})

/* Validate */

function validateFullname(){

let name=document.getElementById("fullname").value.trim()

let regex=/^[a-zA-ZÀ-ỹ\s]+$/

if(name==="" || name.length<3){

showError("fullname","Ít nhất 3 ký tự")

return false

}

if(!regex.test(name)){

showError("fullname","Chỉ chứa chữ")

return false

}

clearError("fullname")
return true

}

function validateEmail(){

let email=document.getElementById("email").value

let regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(!regex.test(email)){

showError("email","Email không hợp lệ")

return false

}

clearError("email")
return true

}

function validatePhone(){

let phone=document.getElementById("phone").value

let regex=/^0[0-9]{9}$/

if(!regex.test(phone)){

showError("phone","SĐT không hợp lệ")

return false

}

clearError("phone")
return true

}

function validatePassword(){

let pass=document.getElementById("password").value

let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

if(!regex.test(pass)){

showError("password","Mật khẩu yếu")

return false

}

clearError("password")
return true

}

function validateConfirm(){

let pass=document.getElementById("password").value
let confirm=document.getElementById("confirm").value

if(pass!==confirm){

showError("confirm","Mật khẩu không khớp")

return false

}

clearError("confirm")
return true

}

function validateGender(){

let radios=document.querySelectorAll("input[name='gender']")

let ok=false

radios.forEach(r=>{
if(r.checked) ok=true
})

if(!ok){

showError("gender","Chọn giới tính")

return false

}

clearError("gender")
return true

}

function validateTerms(){

let terms=document.getElementById("terms")

if(!terms.checked){

showError("terms","Phải đồng ý điều khoản")

return false

}

clearError("terms")
return true

}

document.getElementById("registerForm").addEventListener("submit",function(e){

e.preventDefault()

let valid=true

valid = validateFullname() & valid
valid = validateEmail() & valid
valid = validatePhone() & valid
valid = validatePassword() & valid
valid = validateConfirm() & valid
valid = validateGender() & valid
valid = validateTerms() & valid

if(valid){

document.getElementById("registerForm").style.display="none"

let name=document.getElementById("fullname").value

document.getElementById("successMsg").innerHTML=
"<h3 class='success'>Đăng ký thành công 🎉</h3><p>Xin chào "+name+"</p>"

}

})
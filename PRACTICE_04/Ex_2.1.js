function showError(id,message){

document.getElementById(id+"Error").textContent=message

}

function clearError(id){

document.getElementById(id+"Error").textContent=""

}

function validateFullname(){

let name=document.getElementById("fullname").value.trim()

let regex=/^[a-zA-ZÀ-ỹ\s]+$/

if(name===""){
showError("fullname","Không được để trống")
return false
}

if(name.length<3){
showError("fullname","Ít nhất 3 ký tự")
return false
}

if(!regex.test(name)){
showError("fullname","Chỉ được chứa chữ")
return false
}

clearError("fullname")
return true

}

function validateEmail(){

let email=document.getElementById("email").value.trim()

let regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(email===""){
showError("email","Không được để trống")
return false
}

if(!regex.test(email)){
showError("email","Email không hợp lệ")
return false
}

clearError("email")
return true

}

function validatePhone(){

let phone=document.getElementById("phone").value.trim()

let regex=/^0[0-9]{9}$/

if(phone===""){
showError("phone","Không được để trống")
return false
}

if(!regex.test(phone)){
showError("phone","SĐT phải 10 số và bắt đầu bằng 0")
return false
}

clearError("phone")
return true

}

function validatePassword(){

let pass=document.getElementById("password").value

let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

if(pass===""){
showError("password","Không được để trống")
return false
}

if(!regex.test(pass)){
showError("password","Mật khẩu phải ≥8 ký tự, có chữ hoa, chữ thường, số")
return false
}

clearError("password")
return true

}

function validateConfirm(){

let pass=document.getElementById("password").value
let confirm=document.getElementById("confirm").value

if(confirm!==pass){
showError("confirm","Mật khẩu không khớp")
return false
}

clearError("confirm")
return true

}

function validateGender(){

let genders=document.querySelectorAll("input[name='gender']")

let checked=false

genders.forEach(g=>{
if(g.checked) checked=true
})

if(!checked){
showError("gender","Vui lòng chọn giới tính")
return false
}

clearError("gender")
return true

}

function validateTerms(){

let terms=document.getElementById("terms")

if(!terms.checked){
showError("terms","Bạn phải đồng ý điều khoản")
return false
}

clearError("terms")
return true

}

document.getElementById("fullname").addEventListener("blur",validateFullname)
document.getElementById("email").addEventListener("blur",validateEmail)
document.getElementById("phone").addEventListener("blur",validatePhone)
document.getElementById("password").addEventListener("blur",validatePassword)
document.getElementById("confirm").addEventListener("blur",validateConfirm)

document.querySelectorAll("input").forEach(el=>{
el.addEventListener("input",function(){
let id=this.id
if(id) clearError(id)
})
})

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

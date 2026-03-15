const prices={
"Áo":150000,
"Quần":200000,
"Giày":500000
}

function showError(id,msg){
document.getElementById(id+"Error").textContent=msg
}

function clearError(id){
document.getElementById(id+"Error").textContent=""
}

function validateProduct(){

let p=document.getElementById("product").value

if(p===""){
showError("product","Vui lòng chọn sản phẩm")
return false
}

clearError("product")
return true
}

function validateQuantity(){

let q=document.getElementById("quantity").value

if(q<1 || q>99){
showError("quantity","Số lượng từ 1-99")
return false
}

clearError("quantity")
return true
}

function validateDate(){

let input=document.getElementById("date").value

if(input===""){
showError("date","Chọn ngày giao")
return false
}

let today=new Date()
let selected=new Date(input)

let max=new Date()
max.setDate(today.getDate()+30)

if(selected<today){
showError("date","Không được chọn ngày quá khứ")
return false
}

if(selected>max){
showError("date","Không quá 30 ngày")
return false
}

clearError("date")
return true
}

function validateAddress(){

let addr=document.getElementById("address").value.trim()

if(addr.length<10){
showError("address","Ít nhất 10 ký tự")
return false
}

clearError("address")
return true
}

function validateNote(){

let note=document.getElementById("note").value

if(note.length>200){
showError("note","Tối đa 200 ký tự")
return false
}

clearError("note")
return true
}

function validatePayment(){

let radios=document.querySelectorAll("input[name='payment']")

let checked=false

radios.forEach(r=>{
if(r.checked) checked=true
})

if(!checked){
showError("payment","Chọn phương thức thanh toán")
return false
}

clearError("payment")
return true
}

function updateTotal(){

let product=document.getElementById("product").value
let quantity=document.getElementById("quantity").value

let total=0

if(product && quantity){

total=prices[product]*quantity

}

document.getElementById("total").textContent=
Number(total).toLocaleString("vi-VN")

}

document.getElementById("product").addEventListener("change",updateTotal)
document.getElementById("quantity").addEventListener("input",updateTotal)

document.getElementById("note").addEventListener("input",function(){

let len=this.value.length

document.getElementById("noteCounter").textContent=len+"/200"

if(len>200){

document.getElementById("noteCounter").style.color="red"

}else{

document.getElementById("noteCounter").style.color="black"

}

})

document.getElementById("orderForm").addEventListener("submit",function(e){

e.preventDefault()

let valid=true

valid = validateProduct() & valid
valid = validateQuantity() & valid
valid = validateDate() & valid
valid = validateAddress() & valid
valid = validateNote() & valid
valid = validatePayment() & valid

if(valid){

let product=document.getElementById("product").value
let quantity=document.getElementById("quantity").value
let date=document.getElementById("date").value
let total=document.getElementById("total").textContent

document.getElementById("summary").innerHTML=
"Sản phẩm: "+product+"<br>"+
"Số lượng: "+quantity+"<br>"+
"Ngày giao: "+date+"<br>"+
"Tổng tiền: "+total+" VNĐ"

document.getElementById("confirmBox").style.display="block"

}

})

document.getElementById("confirmBtn").onclick=function(){

document.getElementById("orderForm").style.display="none"
document.getElementById("confirmBox").style.display="none"

document.getElementById("successMsg").innerHTML=
"<h3 class='success'>Đặt hàng thành công 🎉</h3>"

}

document.getElementById("cancelBtn").onclick=function(){

document.getElementById("confirmBox").style.display="none"

}
let students=[]
let filteredStudents=[]

let sortAsc=true

function getRank(score){

if(score>=8.5) return "Giỏi"
if(score>=7) return "Khá"
if(score>=5) return "Trung bình"
return "Yếu"

}

function renderTable(){

let tbody=document.getElementById("tableBody")

tbody.innerHTML=""

let total=0

filteredStudents.forEach((s,index)=>{

total+=s.score

let tr=document.createElement("tr")

if(s.score<5){
tr.classList.add("low")
}

tr.innerHTML=`

<td>${index+1}</td>
<td>${s.name}</td>
<td>${s.score}</td>
<td>${getRank(s.score)}</td>
<td><button class="deleteBtn" data-index="${s.index}">Xóa</button></td>

`

tbody.appendChild(tr)

})

let avg=filteredStudents.length ?
(total/filteredStudents.length).toFixed(2):0

document.getElementById("stats").textContent=
"Tổng SV: "+filteredStudents.length+" | Điểm TB: "+avg

}

function applyFilters(){

let keyword=document.getElementById("searchInput").value.toLowerCase()

let type=document.getElementById("filterSelect").value

filteredStudents=students
.map((s,i)=>({...s,index:i}))
.filter(s=>{

let matchName=s.name.toLowerCase().includes(keyword)

let rank=getRank(s.score)

let matchType=(type==="all" || rank===type)

return matchName && matchType

})

filteredStudents.sort((a,b)=>{

return sortAsc ? a.score-b.score : b.score-a.score

})

renderTable()

}

document.getElementById("addBtn").addEventListener("click",function(){

let name=document.getElementById("nameInput").value.trim()

let score=parseFloat(document.getElementById("scoreInput").value)

if(name==="" || isNaN(score) || score<0 || score>10){

alert("Dữ liệu không hợp lệ")

return

}

students.push({name,score})

applyFilters()

document.getElementById("nameInput").value=""
document.getElementById("scoreInput").value=""

document.getElementById("nameInput").focus()

})

document.getElementById("scoreInput").addEventListener("keyup",function(e){

if(e.key==="Enter"){
document.getElementById("addBtn").click()
}

})

document.getElementById("searchInput").addEventListener("input",applyFilters)

document.getElementById("filterSelect").addEventListener("change",applyFilters)

document.getElementById("scoreHeader").addEventListener("click",function(){

sortAsc=!sortAsc

applyFilters()

})

document.getElementById("tableBody").addEventListener("click",function(e){

if(e.target.classList.contains("deleteBtn")){

let index=e.target.dataset.index

students.splice(index,1)

applyFilters()

}

})

applyFilters()

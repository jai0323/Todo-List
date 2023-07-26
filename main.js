// funality
// add item
// delete item
// search
let form = document.getElementById("addForm")
let itemlist = document.getElementById("items")
let filter = document.getElementById("filter")

form.addEventListener("submit",function(e){
 e.preventDefault()
 
 let item = document.getElementById("item").value
 let li = document.createElement("li")
 li.appendChild(document.createTextNode(item))
 let button= document.createElement("button")
 button.appendChild(document.createTextNode("X"))
 button.className="btn btn-danger btn-sm float-right delete"
 li.className="list-group-item"
 li.appendChild(button)
 itemlist.appendChild(li)
 document.getElementById("item").value=""
})

itemlist.addEventListener("click",function(e){
    if(e.target.classList.contains("delete")){
       confirm("Are you sure you want to delete the item")
       itemlist.removeChild(e.target.parentElement)
    }
})

filter.addEventListener("keyup",function(e){
    let value= e.target.value
    let li = document.getElementsByTagName("li")
    Array.from(li).forEach(function(item){
        if(item.firstChild.textContent.toLowerCase().indexOf(value)!==-1){
            item.style.display="block"
        }
        else{
            item.style.display="none"
        }
    })
})
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
     popupbox.style.display="block"
     popupoverlay.style.display="block"
})


var cancelbutton=document.getElementById("cancel-popup")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupbox.style.display="none"
     popupoverlay.style.display="none"

})
// select container,add-book-title,book-author-input,book-discription-input
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("author-name-input")
var bookdescriptioninput=document.getElementById("book-short-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=` <h2>${booktitleinput.value}</h2>
            <h4>${bookauthorinput.value}</h4> 
            <p>${bookdescriptioninput.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
     popupbox.style.display="none"
     popupoverlay.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}
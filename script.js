let body = document.querySelector("body")
let newDiv = document.createElement("div")
let newSpan = document.createElement("span")
let newbutton = document.createElement("button")
newbutton.innerText="Change Colour!"

function randomColourGenerator(){
    let r = (Math.floor(Math.random()*256)+1)
    let g = (Math.floor(Math.random()*256)+1)
    let b = (Math.floor(Math.random()*256)+1)

    if(((r<100&&g<100)||(r<100&&b<100)||(g<100&&b<100))||
    (r>100&&g<100&&b>100)){
        newSpan.style.color="rgb(250,250,250)"
    }else{
        newSpan.style.color="rgb(50,50,50)"
    }
    
    newSpan.innerText=`rgb(${r},${g},${b})`
    let bgColour = `rgb(${r}, ${g}, ${b})`
    body.style.backgroundColor=bgColour
    //body.setAttribute("bgColor",`${bgColour}`)
}

newbutton.addEventListener("click", randomColourGenerator)

newDiv.appendChild(newSpan)
newDiv.appendChild(newbutton)
body.appendChild(newDiv)
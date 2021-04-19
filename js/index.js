function mouseSobre(id){
    const x = document.getElementById(id);
    var xClass = x.getAttribute("class");
    if (xClass == "card col border-0"){
        x.setAttribute("class", "card col border-0 shadow-lg")
    }
}

function mouseSai(id){
    const x = document.getElementById(id);
    var xClass = x.getAttribute("class");
    if (xClass == "card col border-0 shadow-lg"){
        x.setAttribute("class", "card col border-0")
    }
}
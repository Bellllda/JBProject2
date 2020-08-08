function contin(){
    let vis = this.nextElementSibling;
    if (vis.style.visibility === "visible") {
        vis.style.visibility = "hidden";
    } else {
        vis.style.visibility = "visible"
    }
}


export function collapser(){
    let collapse = document.querySelectorAll(".collapse");
    collapse.forEach(function (check){
        check.addEventListener("click", contin);
    })
}  



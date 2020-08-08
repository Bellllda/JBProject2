export function searchBar(eve) {
    eve.preventDefault()
    let Coin;
    let text = document.getElementById("put").value.toUpperCase()
    document.getElementById("put").value = "";
    document.querySelectorAll(".card-symb").forEach((c) => {
        if (text === c.innerHTML) {
            Coin = c.innerHTML
            notIs(Coin)
        }
        if (text === "") {
            allIs()
        }
    })
}

export function notIs(m){
    let cards = document.querySelectorAll(".card-creation")
    
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].firstElementChild.innerHTML === m){
        cards[i].style.display = "block"
    }
    else{
        cards[i].style.display = "none"
    }
}
}

export function allIs(){
    let cards = document.querySelectorAll(".card-creation")
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "block"
    }
    
}




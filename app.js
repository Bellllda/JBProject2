import {pressHome} from "./phome.js"
import {searchBar} from "./search.js"
import {collapser} from "./collapsing.js"
import { graphFun } from "./graphMake.js";



document.getElementById("home").addEventListener("click", function () {
    document.getElementById("searchbar").hidden = false;
    document.getElementById("container").hidden = false;
    document.getElementById("homehid").hidden = false;
    document.getElementById("livehid").hidden = true;
    document.getElementById("abouthid").hidden = true;
}, false);
document.getElementById("live").addEventListener("click", function () {
    document.getElementById("searchbar").hidden = true;
    document.getElementById("container").hidden = true;
    document.getElementById("homehid").hidden = true;
    document.getElementById("livehid").hidden = false;
    document.getElementById("abouthid").hidden = true;
}, false);
document.getElementById("about").addEventListener("click", function () {
    document.getElementById("searchbar").hidden = true;
    document.getElementById("container").hidden = false;
    document.getElementById("homehid").hidden = true;
    document.getElementById("livehid").hidden = true;
    document.getElementById("abouthid").hidden = false;
}, false);

let press = document.getElementById("home");
pressHome(press);
window.onload = () => press.click();


//document.getElementById("search").onclick = searchBar();
document.getElementById("search").addEventListener("click", searchBar)    


collapser()

function checkBox(){
let box = document.querySelectorAll(".switch")
box.forEach(function (vi){
    if (vi.checked === true)  {
        console.log("ok?")
    }  
});
}
checkBox






graphFun()











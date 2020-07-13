document.getElementById("home").addEventListener("click", function () {
    document.getElementById("homehid").hidden = false;
    document.getElementById("livehid").hidden = true;
    document.getElementById("abouthid").hidden = true;
}, false);
document.getElementById("live").addEventListener("click", function () {
    document.getElementById("homehid").hidden = true;
    document.getElementById("livehid").hidden = false;
    document.getElementById("abouthid").hidden = true;
}, false);
document.getElementById("about").addEventListener("click", function () {
    document.getElementById("homehid").hidden = true;
    document.getElementById("livehid").hidden = true;
    document.getElementById("abouthid").hidden = false;
}, false);

//import {toLoad} from "./loaded.js"
import {dataExtract} from "./data.js"
import {createCards} from "./cards.js"


export function pressHome(press) {
    press.addEventListener("click", () => {
        dataExtract("https://api.coingecko.com/api/v3/coins", createCards)
    });
}


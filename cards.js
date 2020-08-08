
import {collapser} from "./collapsing.js"

export function createCards(){ 
        let currencies = this.response.slice(0,100);
        let cards = currencies.map((currency) => `
            <div class="card-creation">
                       <div class="card-symb">${currency.symbol.toUpperCase()}</div>
                       <div class="cid">
                       <h4>${currency.id}</h4>
                       </div>
                       <div class="symbol-down">
                       <div>
                       <input type="checkbox" class="switch" >
                       <label for="switch">LiveReport:error</label>
                       </div><br>
                     <button type="button" class="collapse menu" id=${currency.id}>Info</button>
                     <div class="info" style="visibility: hidden">
                        <label>Picture: </label>
                        <img src="${currency.image.thumb}">
                        <label>
                        <div class="price">${currency.market_data.current_price.usd}$ </div>
                        </label>
                        <label>
                        <div class="price">${currency.market_data.current_price.eur}€ </div>
                        </label>
                        <label>
                        <div class="price">${currency.market_data.current_price.ils}₪ </div>
                        </label>
                     </div>   
                     </div>                
            </div>
            </div>`
            );

            let container = document.getElementById("container");
            if (container) {
                container.innerHTML = cards.join("")
            }
            collapser()
}

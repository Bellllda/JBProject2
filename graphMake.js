import {dataExtract} from "./data.js"

export async function graphFun(){
const data = await dataGet()
let ctx = document.getElementById("graph").getContext('2d');
let newgraph = new Chart(ctx, {
    type: 'line',
  data: {
    
    datasets: [{ 
        data: data,
        label: 0,
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [2],
        label: 1,
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [3],
        label: 2,
        borderColor: "#3cba9f",
        fill: false
      }, { 
        data: [4],
        label: 3,
        borderColor: "#e8c3b9",
        fill: false
      }, { 
        data: [5],
        label: 4,
        borderColor: "#c45850",
        fill: false
      }
    ]
  },
  options: {
    scales: {
        xAxes: [{
            type: 'time',
            time: {
                displayFormats: {
                    quarter: 'h:mm:ss a'
                }
            }
        }]
    }
    
  }
});
}
const carr = []
function dataGet(){
    dataExtract("https://api.coingecko.com/api/v3/coins", dataTry())
    return function dataTry(){
        let resp = this.response.slice(0,100);
        resp.forEach(coined => {
            carr.push = (coined)
        });
            
            

    }


}



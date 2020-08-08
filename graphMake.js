import {dataExtract} from "./data.js"

export function graphFun(){
//let dps = []
let ctx = document.getElementById("graph").getContext('2d');
let newgraph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [2,4,6,8,10,12,14],
        datasets: [{
            label: 'BTC to Dollar',
            data: [11684.27,11683.89,11685.8,11684.97,11681.6,11681.2],
            fill: false,
            backgroundColor: [
                'rgba(255, 99, 132)'
            ],
            borderColor: [
                'rgba(255, 99, 132)'
            ],
            borderWidth: 1
            },
            {
                label: 'ETH to Dollar',
                data: [380.02,370.87,380.56,390.3,401.21,405.54,407.98],
                fill: false,
                backgroundColor: [
                    'rgba(255, 150, 132)'
                ],
                borderColor: [
                    'rgba(255, 150, 132)'
                ],
                borderWidth: 1
                },
                {
                    label: 'XRP to Dollar',
                    data: [0.296797,0.296860,0.296806,0.296807,0.296609,0.296780,0.296803],
                    fill: false,
                    backgroundColor: [
                        'rgba(100, 99, 132)'
                    ],
                    borderColor: [
                        'rgba(100, 99, 132)'
                    ],
                    borderWidth: 1
                    },
                    {
                        label: 'USDT to Dollar',
                        data: [0.998,1.02,0.997,0.996,0.999,1.03,1.04],
                        fill: false,
                        backgroundColor: [
                            'rgba(150, 30, 132)'
                        ],
                        borderColor: [
                            'rgba(150, 30, 132)'
                        ],
                        borderWidth: 1
                        },
                        {
                            label: 'BCH to Dollar',
                            data: [307.20,306.99,306.82,306.59,306.39,306.24,306.13],
                            fill: false,
                            backgroundColor: [
                                'rgba(200, 50, 80)'
                            ],
                            borderColor: [
                                'rgba(200, 50, 80)'
                            ],
                            borderWidth: 1
                            },
        
        
        
        
        
        
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});
}


//var yBTC = 100; 
//var updateInterval = 1000;
//var dataLength = 20; 
//
//dataExtract("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD", updateChart)
//var updateChart = function (count) {
//
//	count = 2;
//
//	
//		let yBTC = this.response;
//		dps.push({
//			x: xBTC,
//			y: yBTC
//		});
//		xBTC++;
//	
//
//	newgraph.render();
//};
//updateChart(dataLength);
//setInterval(function(){updateChart()}, updateInterval);
//
//
//
//
//var carr = []
//function dataGet(){
//    dataExtract("https://api.coingecko.com/api/v3/coins", dataTry)
//    
//}
//        function dataTry(){
//            let resp = this.response.slice(0,100);
//            
//            resp.forEach(coined => {
//                return carr.push = (coined)
//            });
//}



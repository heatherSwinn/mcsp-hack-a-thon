//initialize data
let drinkVotes = {
    'White Chocolate Mocha': 0,
    'Pumpkin Creme Cold Brew': 0,
    'Caramel Macchiato': 0,
    'Pike Place Roast': 0,
    'Caramel Ribbon Crunch Frappuccino': 0,
    'Other': 0
}

//function to update the chart
function updateChart(){
    var ctx = document.getElementById('voteChart').getContext ('2d');
    var data = {
        labels: Object.keys(drinkVotes),
        datasets: [{
            axis: 'y',
            label: 'Best Starbucks Drink',
            data: Object.values(drinkVotes),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)'
              ],
              borderWidth: 1,
              
          }]
        };
        var options = {
          scales: {
            x: {
              beginAtZero: true
            }
          }
        };
        
        //destory existing chart before rendering new one
        let existingChart = Chart.getChart(ctx);
        if (existingChart) {
            existingChart.destroy();
        }

        //create new chart
        new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                indexAxis: 'y',
                plugins:{
                    legend:{
                        labels: {
                            font:{
                                size: 20
                            }
                        }
                    }
                }
            }
        });
    }

    //function for votes and invoke chart
    function vote(drink) {
        drinkVotes[drink]++;
        updateChart();
    }

    updateChart();
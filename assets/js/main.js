// Chart Js Start

var ctx = document.getElementById("myChart4").getContext('2d');
var myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","aug","Sep","Oct","Nov","Dec"],
		datasets: [{
			label: 'Series A',
			backgroundColor: "rgb(85, 110, 230)",
			data: [10,10,25,20,25,15,12,45,85,96,54,12],
		}, {
			label: 'Series B',
			backgroundColor: "rgb(241, 180, 76)",
			data: [10,10,25,20,25,15,12,45,85,96,54,12],
		}, {
			label: 'Series C',
			backgroundColor: "rgb(52, 195, 143)",
			data: [10,10,25,20,25,15,12,45,85,96,54,12],
		},],
	},
options: {
    tooltips: {
      displayColors: true,
      callbacks:{
        mode: 'x',
      },
    },
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: false,
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
        type: 'linear',
      }]
    },
		responsive: true,
		maintainAspectRatio: false,
		legend: { position: 'bottom' },
	}
});

// Chart Js End
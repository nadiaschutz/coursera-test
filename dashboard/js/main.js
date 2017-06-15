const CHART1 = document.getElementById("lineChart1");
let lineChart1 = new Chart(CHART1, {

    type: 'line',
    data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
            label: 'Queries',
            data: [12, 19, 3, 17, 6, 3, 7],
            backgroundColor: "rgba(41, 128, 185, 0.5)"
    }, {
            label: 'Answers',
            data: [2, 150, 5, 5, 2, 3, 10],
            backgroundColor: "rgba(22, 160, 133, 0.5)"
    }]
    }
})

const CHART2 = document.getElementById("lineChart2");
let lineChart2 = new Chart(CHART2, {

    type: 'bar',
    data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
            label: 'Bot-to-Agent Transfers',
            data: [12, 19, 3, 17, 6, 3, 7],
            backgroundColor: "rgba(142, 68, 173, 0.6)"
    }]
    }
})

const CHART3 = document.getElementById("lineChart3");
let lineChart3 = new Chart(CHART3, {

    type: 'line',
    data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
            label: 'Number of Unique Users',
            data: [12, 19, 3, 17, 6, 3, 7],
            backgroundColor: "rgba(243, 156, 18, 0.6)"
    }]
    }
})

const CHART4 = document.getElementById("lineChart4");
let lineChart4 = new Chart(CHART4, {

    type: 'bar',
    data: {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
        datasets: [{
            label: 'Question Distribution',
            data: [12, 19, 3, 17, 6, 3, 7, 50, 45, 75, 85,150,4,25,35],
            backgroundColor: "rgba(192, 57, 43, 0.6)"
    }]
    }
})



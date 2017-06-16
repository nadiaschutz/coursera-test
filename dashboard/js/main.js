var theUrl = "http://pcbbot-staging.mybluemix.net/statistics";


//show a arr of a the last  7 week days like this [6, 0, 1, 2, 3, 4, 5](the last day is today, which is friday)
var week = [];
var getLastWeek = function () {
    var today = new Date();
    var todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    for (var i = 0; i < 7; i++) {
        var day = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i);

        var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";

        week.push(weekday[day.getDay()]);
    }
    week = week.reverse();

}();






/*

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}
*/

//chart 1
var chartDataQ1=[12, 19, 3, 17, 6, 3, 7];
var chartDataTotalQ1= chartDataQ1.reduce(function(pv, cv) { return pv + cv; }, 0);
var chartDataA1=[2, 150, 5, 5, 2, 3, 10];
var chartDataTotalA1= chartDataA1.reduce(function(pv, cv) { return pv + cv; }, 0);


var CHART1 = document.getElementById("lineChart1");
var lineChart1 = new Chart(CHART1, {

    type: 'line',
    data: {
        labels: week,
        datasets: [{
            label: 'Queries',
            data: chartDataQ1,
            backgroundColor: "rgba(41, 128, 185, 0.5)"
    }, {
            label: 'Answers',
            data:  chartDataA1,
            backgroundColor: "rgba(22, 160, 133, 0.5)"
    }]
    }
    
})

document.getElementById('lineChart1-total').textContent = "Total: Queries " + chartDataTotalQ1+", Answers "+ chartDataTotalA1;


//chart 2
var chartData2=[55, 105, 3, 17, 6, 3, 7];
var chartDataTotal2= chartData2.reduce(function(pv, cv) { return pv + cv; }, 0);

var CHART2 = document.getElementById("lineChart2");
var lineChart2 = new Chart(CHART2, {

    type: 'bar',
    data: {
        labels: week,
        datasets: [{
            label: 'Bot-to-Agent Transfers',
            //agent.weekly
            data: chartData2,
            backgroundColor: "rgba(142, 68, 173, 0.6)"
    }]
    }
})
document.getElementById('lineChart2-total').textContent = "Total: " + chartDataTotal2 ;

//chart 3
var chartData3=[55, 105, 3, 567, 6, 0, 7];
var chartDataTotal3= chartData3.reduce(function(pv, cv) { return pv + cv; }, 0);



var CHART3 = document.getElementById("lineChart3");
var lineChart3 = new Chart(CHART3, {

    type: 'line',
    data: {
        labels: week,
        //
        datasets: [{
            label: 'Number of Unique Users',
            data: chartData3,
            backgroundColor: "rgba(243, 156, 18, 0.6)"
    }]
    }
})
document.getElementById('lineChart3-total').textContent = "Total: " + chartDataTotal3 ;


//chart 4

var chartData4=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var chartDataTotal4= chartData4.reduce(function(pv, cv) { return pv + cv; }, 0);



var CHART4 = document.getElementById("lineChart4");
var lineChart4 = new Chart(CHART4, {

    type: 'bar',
    data: {
        labels: chartData4,
        datasets: [{
            label: 'Question Distribution',
            data: [12, 19, 3, 17, 6, 3, 7, 50, 45, 75, 85, 150, 4, 25, 35], //labels.distribution
            backgroundColor: "rgba(192, 57, 43, 0.6)"
    }]
    }
})
document.getElementById('lineChart4-total').textContent = "Total: " + chartDataTotal4 ;

/*
var theUrl = "http://pcbbot-staging.mybluemix.net/statistics";
function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}


 
//example callback function...

function myCallback(){
console.log(data.statistics.users.total); 
    //this will give total number of users
}
*/


/*
"data": 
{"statistics": 
    {"feedback": {"total": 16, "weekly": [0, 0, 0, 14, 0, 0, 2]}, 
        "labels": {"distribution": [470, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0, 1], "total": 477}, 
        "unmatched": {"total": 117, "weekly": [98, 0, 0, 6, 0, 0, 13]}, 
        /*"agent": {"total": 14, "weekly": [7, 0, 0, 4, 1, 1, 1]},
        "debug": {"url": "https://prodbm-dot-deeppixel-corebot.appspot.com/editapi?cmd=gethistory&dpid=27d5722a-85ad-44d1-98bf-800982cdca97", "status_code": 200},
        "matched": {"total": 360, "weekly": [176, 0, 0, 104, 2, 3, 75]}, 
        "unique": {"total": 477, "weekly": [274, 0, 0, 110, 2, 3, 88]}, 
        "users": {"total": 20, "weekly": [7, 0, 0, 5, 1, 1, 6]}}}, "statusCode": 200
*/

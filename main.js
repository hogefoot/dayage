var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
var days_in_months = ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"]
function start(){
    let oday = document.getElementById("date_inp").value
    let omonth = document.getElementById("month_inp").value
    let oyear = document.getElementById("year_inp").value
    let nmonth = 0
    let nday = 0
    let nyear = 0
    let dmonth = month - omonth
    if(!Number.isInteger(oday), Number.isInteger(omonth), Number.isInteger(oyear) <= 0){
        alert("please only use integers")
    }
    for(let x = 0; x < dmonth; x++){
        nmonth += parseInt(days_in_months[x])
    }
    if(oday > days_in_months[omonth - 1]){
        alert("invalid day")
    }
    if(omonth >= 13){
        alert("invalid month")
    }
    if(oyear >= year + 1){
        alert("invalid year")
    }
    if(omonth = 0){
        alert("invalid month")
    }
    if(oyear <= year - 140){
        alert("invalid year")
    }
    nday = day - oday
    for(let x = oyear; x < year; x++){
        if(Number.isInteger(x / 4) === true){
            nday += 1
        }
    }
    let sum = year - oyear
    nyear = sum * 365
    tday = nday + nmonth + nyear
    document.getElementById('tdays').innerHTML = 'you have been alive for: ' + tday + ' days'
    console.log(nday, nmonth, nyear)
}
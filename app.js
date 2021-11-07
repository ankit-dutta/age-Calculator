function calculate(){
    var myday = document.getElementById('date_field').value;
    var mymonth = document.getElementById('month_field').value;
    var myyear = document.getElementById('year_field').value;

    var date = new Date();
    var d = date.getDate();
    var m = 1 + date.getMonth();
    var y = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(myday > d){
        d = d + month[m - 1];
        m = m - 1;
    }
    if(mymonth > m){
        m = m + 12;
        y = y - 1;
    }
    // var d1 = d - myday;
    // var m1 = m - mymonth;
    var y1 = y - myyear;

    document.getElementById('age').innerHTML = 
    `
    <br> <center>Your Age is : ${y1} </center>`;
}
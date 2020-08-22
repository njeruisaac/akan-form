var akanMale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var akanFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
var dayOfTheWeek =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function results() {
    var month =parseInt(document.getElementById("month").value);
    var year =parseInt(document.getElementById("year").value);
    var day=parseInt(document.getElementById("day").value);
    var date=new Date(year + "/" + month + "/" + day);
    var gender= print();
    var day2=date.getDay();
    var akan; 
    

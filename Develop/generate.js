
// moment
const time = moment().format("MMMM DD YYYY");
console.log (time);
$("#currentDay").text(time)
//let yearChosen = new Date().getFullYear(); // 2023
// let monthChosen = new Date().getMonth(); // 11

// function getNumberOfDays(year, month) {
// console.log(year, month);
// let numDays = new Date (year, month + 1, 0).getDate();
// return numDays;
// }//


var saveButton = $(".saveBtn");
console.log (saveButton);
saveButton.on("click",function(){
    var idValue=$(this).parent().attr("id")
    var texValue=$(this).siblings(".description").val()
    localStorage.setItem(idValue, texValue)
})
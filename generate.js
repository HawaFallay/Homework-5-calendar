
// moment
const time = moment().format("MMMM DD YYYY");
console.log(time);
$("#currentDay").text(time)
//let yearChosen = new Date().getFullYear(); // 2023
// let monthChosen = new Date().getMonth(); // 11

// function getNumberOfDays(year, month) {
// console.log(year, month);
// let numDays = new Date (year, month + 1, 0).getDate();
// return numDays;
// }//
$("#scheduleClear").on("click", (any) => {
        localStorage.clear();
        location.reload();
    });

var saveButton = $(".saveBtn");
console.log(saveButton);
saveButton.on("click", function(){
    var idValue=$(this).parent().attr("id")
    var texValue=$(this).siblings(".description").val()
    localStorage.setItem(idValue, texValue)
});

$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))

var currentHour= moment().hours()
console.log(currentHour);
$(".time-block").each(function(){
    var divNumber= $(this).attr("id")
    if (divNumber <currentHour){
        $(this).addClass("past")
    }
    else if (divNumber==currentHour){
        $(this).addClass("present")
    }
    else if (divNumber>currentHour){
        $(this).addClass("future")
    }
})
// setting date variable equal to the current date and time
var date = moment().format('dddd, MMMM Do, YYYY')
$("#currentDay").text(date);

var timeBlock = $(".time-block");
var currentTime = moment().format('h');
var saveButton = $(".saveBtn");
var hour = $(".hour").text();

function setColor() {
    var currentTime = moment().format('h');
    if (currentTime === hour) {
        timeBlock.toggleClass("present");
    } else if (currentTime > hour){
        timeBlock.toggleClass("future");
    }else {
        timeBlock.toggleClass("past");
    }console.log(hour)
}
setColor()

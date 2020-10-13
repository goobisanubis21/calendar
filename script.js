$(document).ready(function () {

    // setting date variable equal to the current date and time
    var date = moment().format('dddd, MMMM Do, YYYY')
    $("#currentDay").text(date);

    var timeBlock = $(".time-block");
    var currentTime = moment().format('H');
    var saveButton = $(".saveBtn");
    var hour = $(".hour");
    var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
    // console.log() 

    function setColor() {
        for (var i = 0; i < hour.length; i++) {
            for (var j = 0; j < hours[i].length; j++) {
                hour.attr("class", hours[j]);
                if (currentTime == hour[i]) {
                    timeBlock.toggleClass("present");
                }
                if (currentTime < hours[i]) {
                    timeBlock.toggleClass("future");
                }
                if (currentTime > hours[i]) {
                    timeBlock.toggleClass("past");
                }
            }
        } console.log(hour)
    }
    setColor();

    function showTask() {
        var showTask = localStorage.getItem("task");
        timeBlock.text(showTask);
    }

    saveButton.on("click", function () {
        var task = $(timeBlock).val();
        localStorage.setItem("task", task);
        task = $(this).val();
        showTask()
    })

    showTask();
});
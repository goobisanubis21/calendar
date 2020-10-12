$(document).ready(function () {

    // setting date variable equal to the current date and time
    var date = moment().format('dddd, MMMM Do, YYYY')
    $("#currentDay").text(date);

    var timeBlock = $(".time-block");
    var currentTime = moment().format('H');
    var saveButton = $(".saveBtn");
    var hour = $(".hour");
    var allTimes = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
    // for(var i = 0; i < hour.length; i++) {
    //     var times = hour.attr('value');
    //     console.log(times[i])
    // } 

    function setColor() {
        for (var i = 0; i < hour.length; i++) {
            if (currentTime == allTimes[i]) {
                timeBlock.toggleClass("present");
            }
            if (currentTime < allTimes[i]) {
                timeBlock.toggleClass("future");
            }
            if (currentTime > allTimes[i]) {
                timeBlock.toggleClass("past");
            }
        }console.log(allTimes)
    }
    setColor();

    function showTask() {
        var showTask = localStorage.getItem("task");
        timeBlock.text(showTask);
    }

    saveButton.on("click", function () {
        var task = $(timeBlock).val();
        task += $(this).val();
        localStorage.setItem("task", task);
        console.log(task);
        showTask()
    })

    // showTask();
});
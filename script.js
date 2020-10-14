$(document).ready(function () {

    // setting date variable equal to the current date and time
    var date = moment().format('dddd, MMMM Do, YYYY')
    $("#currentDay").text(date);

    var timeBlock = $(".time-block");
    var currentTime = moment().hours();
    var saveButton = $(".saveBtn");
    var hour = $(".hour");
    var task = localStorage.getItem("task");
    
    function setColor() {
        $(".time-block").each(function () {
            var hourBlock = $(this).attr("id");
            if (currentTime > hourBlock) {
               $(this).addClass("past");
            }
            else if (currentTime == hourBlock) {
                console.log("futures")
                $(this).removeClass("past");
                $(this).addClass("present")

            }
            else if (currentTime < hourBlock) {
                $(this).removeClass("present")
                $(this).removeClass("past");
                $(this).addClass("future")
            }
        })
    }
    setColor();

    // function showTask() {
    //     for (var i = 0; i < hour.length; i++) {
    //         $(".timeBlock" + i + "task").val(localStorage.getItem("task"));
    //         timeBlock.text(task)
    //     }
    // }

    saveButton.on("click", function (event) {
        event.preventDefault();
        var task = timeBlock.val();
        localStorage.setItem("task", task);
        console.log(task)
        showTask();
    })

    // showTask();

    $("#9")
});
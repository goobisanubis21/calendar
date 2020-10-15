// start function when document is ready
$(document).ready(function () {

    // setting date variable equal to the current date and time
    var date = moment().format('dddd, MMMM Do, YYYY')
    $("#currentDay").text(date);

    // declaring all global variables
    var currentTime = moment().hours();
    var saveButton = $(".saveBtn");
    var timeBlock = $(".time-block")


    // function to set the color according the time of day
    function setColor() {

        // loop through each time block class and for each...
        timeBlock.each(function () {

            //set hour block variable equal to the specific id number
            var hourBlock = $(this).attr("id");

            // if the current time of day is less than the id number then add the past class to the hour block textarea
            if (currentTime > hourBlock) {
                $(this).addClass("past");
            }

            // if the current time of day is equal to the id number then remove past and add the present class to the hour block textarea
            else if (currentTime == hourBlock) {
                $(this).removeClass("past");
                $(this).addClass("present")

            }

            // if the current time of day is less than the id number then remove present and past and add the future class to the hour block textarea
            else if (currentTime < hourBlock) {
                $(this).removeClass("present")
                $(this).removeClass("past");
                $(this).addClass("future")
            }
        })
    }
    setColor();

    showTask();

    saveButton.on("click", function (event) {
        event.preventDefault();

        var saveButtonId = $(this).attr("id");
        var timeBlockId = $(this).attr("id");
        var task = timeBlock.val();
        if (saveButtonId = timeBlockId) {
            localStorage.setItem("task", task);
        }


        showTask();
        console.log(timeBlockId)
        console.log("savebtn", saveButtonId)
    })

    function showTask() {
        var task = localStorage.getItem("task");
        timeBlock.text(task);
        
    }
});
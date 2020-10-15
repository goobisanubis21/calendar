// start function when document is ready
$(document).ready(function () {

    // setting date variable equal to the current date and time
    var date = moment().format('dddd, MMMM Do, YYYY')
    $("#currentDay").text(date);

    // declaring all global variables
    var currentTime = moment().hours();
    var saveButton = $(".saveBtn");
    var timeBlock = $(".time-block")

    setColor();

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

    // running the show task function to see current tasks upon refresh
    showTask();

    // when clicking on the save button, the text value within the text area will be saved to local storage using the id of the time block as the key and the task itself as the value. after it has been saved accordingly the show task function will be called
    saveButton.on("click", function (event) {
        event.preventDefault();
        var timeBlockId = $(this).attr("id");
        var task = $(this).siblings(".time-block").val();
        localStorage.setItem(timeBlockId, task);
        showTask()
    })

    // in show task it will loop through local storage, get whats in there and print it out to the text block according the its matching id
    function showTask() {
        for (var i = 9; i < 18; i++) {
            var task = localStorage.getItem(i)
            console.log(task);
            $("#"+i+"").text(task);
        }
    }

});
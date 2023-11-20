// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // Add event listener
  $(".saveBtn") // Select element "saveBtn"
    .on( //Event to listen for click, Function to execute when event occurs
      // Add event listener with two arguments
      "click", 
      function () {
        // "id" of parent time block
        var hourId = 
          $(this) // Reference to the DOM element "saveBtn"
            .parent() // jQuery method to travers the DOM, selecting immediate parent of the button, the time block element
              .attr("id"); // Retrieves the value of the "id" attribute
        // User input from "textarea" element
        var descriptionText = $(this)
          .siblings(".description") // Select sibling element with class "description", which is the textarea containing the event description
            .val(); // Retrieves the value entered in textarea

        localStorage.setItem(hourId,descriptionText); // Save input to local storage using id as a key
      }
    );

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

    // Get the current hour in 24-hour format
    var currentHour = // Countain current hour as an integer, used to determine relationship between each time block and current hour
      dayjs() // Create day.js object representing current date and time
        .hour(); // Method called to retrieve hour of current date and time
    
    // Select time blocks with jQuery
    $(".time-block").each(function () { // jQuery method to iterate through each "time-block" element.
      var blockHour = parseInt( // Converts the string "x" to an integer
        $(this) // Current time block
          .attr("id") // Get the id of the current block; string "hour-x"
            .split("-") // Method to split id into an array of substrings with "-" as the argument
              [1]); // Index used to access the substrings("hour" and "x") second element of the array, the hour

      // Compare with the current hour
      if (blockHour < currentHour) { // If the block hour is less than the current hour ("hour-9" < 11AM)
        $(this).addClass("past"); // Apply class "past" to time-block
      } else if (blockHour === currentHour) { // If "hour-11" === 11AM
        $(this).addClass("present");  // Apply class "present"
      } else { // Otherwise 
        $(this).addClass("future"); // Apply class "future"
      }
    });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  //

  // TODO: Add code to display the current date in the header of the page.
});

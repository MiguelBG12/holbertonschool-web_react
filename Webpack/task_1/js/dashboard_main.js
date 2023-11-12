// Import necessary libraries
import $ from 'jquery';  // Import jQuery library
import _ from 'lodash';  // Import lodash library

// Initialize a counter variable to keep track of button clicks
let count = 0;

// Function to update the counter and display the count on the HTML page
function updateCounter() {
  count += 1;  // Increment the counter
  $('#count').text(`${count} clicks on the button`);  // Update the count in the HTML
}

// Execute the following code when the document is ready
$(function() {
  // Append different HTML elements to the body using jQuery
  $('body').append('<p>Holberton Dashboard</p>');  // Paragraph element
  $('body').append('<p>Dashboard data for the students</p>');  // Paragraph element
  $('body').append('<button id="startBtn">Click here to get started</button>');  // Button element
  $('body').append('<p id="count"></p>');  // Paragraph element with id 'count'
  $('body').append('<p>Copyright - Holberton School</p>');  // Another paragraph element

  // Bind the debounce function from lodash to the click event on the button
  $('#startBtn').click(_.debounce(updateCounter, 1000));
  // The above line ensures that the updateCounter function is not called more than once per second
});

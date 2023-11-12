import $ from 'jquery';
import _ from 'lodash';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Initialize a variable 'count' with an initial value of 0.
let conunt = 0;

// Define a function 'updateCounter' to increment the 'count' variable
function updateCounter() {
  count++;
  // updates the text content of the paragraph with the id 'count'.
  $("#count").html(`${count} clicks on the button`);
};

// Attach a debounced click event handler to the button element using jQuery.
// The 'updateCounter' function is invoked with a debounce of 500 milliseconds.
$('button').on('click', _.debounce(updateCounter, 500));
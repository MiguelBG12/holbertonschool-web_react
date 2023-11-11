import $ from 'jquery';

// Add elements to the body using jQuery
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="startBtn">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Counter variable
let count = 0;

// Function to update the counter and display it
const updateCounter = () => {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
};

// Debounce function from lodash
const debouncedUpdateCounter = _.debounce(updateCounter, 1000);

// Bind the debounced function to the click event of the button
$('#startBtn').on('click', debouncedUpdateCounter);

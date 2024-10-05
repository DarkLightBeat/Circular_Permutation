// Get the tables and groups elements
const tables = document.querySelectorAll('.table1, .table2, .table3, .table4, .table5');
const groups = document.querySelectorAll('.group1, .group2, .group3, .group4, .group5');

// Get the start rotation button
const startRotationButton = document.getElementById('start-rotation');

// Define the rotation interval (in seconds)
const rotationInterval = 10;

// Define the current group index
let currentGroupIndex = 0;

// Store the left values of the groups
const groupLeftValues = [];
groups.forEach((group, index) => {
  const styles = window.getComputedStyle(group);
  groupLeftValues.push(styles.left);
});

// Function to rotate the groups
function rotateGroups() {
  // Get the current group index
  const currentIndex = currentGroupIndex % groups.length;

  // Update the left values of the groups
  groups.forEach((group, index) => {
    const newIndex = (currentIndex + index) % groups.length;
    group.style.left = groupLeftValues[newIndex];
  });

  // Update the current group index
  currentGroupIndex++;
}

// Function to start the rotation
function startRotation() {
  // Set the rotation interval
  setInterval(rotateGroups, rotationInterval * 1000);
}

// Add an event listener to the start rotation button
startRotationButton.addEventListener('click', startRotation);
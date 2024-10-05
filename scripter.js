const tables = document.querySelectorAll('.table1, .table2, .table3, .table4, .table5');
const groups = document.querySelectorAll('.group1, .group2, .group3, .group4, .group5');

const startRotationButton = document.getElementById('start-rotation');

const rotationInterval = 10;

let currentGroupIndex = 0;

const groupLeftValues = [];
const originalGroupLeftValues = [];
groups.forEach((group, index) => {
  const styles = window.getComputedStyle(group);
  groupLeftValues.push(styles.left);
  originalGroupLeftValues.push(styles.left);
});

function rotateGroups() {
  const currentIndex = currentGroupIndex % groups.length;

  groups.forEach((group, index) => {
    const newIndex = (currentIndex + index) % groups.length;
    group.style.left = groupLeftValues[newIndex];
  });

  currentGroupIndex++;

  let allGroupsAtOriginalPositions = true;
  groups.forEach((group, index) => {
    const styles = window.getComputedStyle(group);
    if (styles.left !== originalGroupLeftValues[index]) {
      allGroupsAtOriginalPositions = false;
    }
  });

  if (allGroupsAtOriginalPositions) {
    clearInterval(rotationIntervalId);
    alert('Rotation has stopped');
  }
}

function startRotation() {
  alert('Rotation has started');
  rotationIntervalId = setInterval(rotateGroups, rotationInterval * 1000);
}

startRotationButton.addEventListener('click', startRotation);

let rotationIntervalId;

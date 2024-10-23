const categorySelect = document.getElementById('categorySelect');
const nameInput = document.getElementById('nameInput');

// Add an event listener to the select element
categorySelect.addEventListener('change', function() {
  const selectedOption = categorySelect.value.toLowerCase(); // Convert value to lowercase

  // Check if the selected option is 'home', hide/show the input field accordingly
  if (selectedOption === 'home') {
    nameInput.style.display = 'none';
  } else {
    nameInput.style.display = 'block';
  }
});
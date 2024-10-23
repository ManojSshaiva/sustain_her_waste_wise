function myFunction() {
    let text;
    let person = prompt("Please enter your name:", "Harry Potter");
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "Hello " + person + "! How are you today?";
    }
    document.getElementById("start").innerHTML = text;
  }



  document.addEventListener('DOMContentLoaded', function () {
    const showFormButton = document.getElementById('showFormButton');
  
    showFormButton.addEventListener('click', function () {
      showRegistrationForm();
    });
  
    function showRegistrationForm() {
      const firstName = prompt('Enter your First Name:');
      const lastName = prompt('Enter your Last Name:');
      
      
  
      if (firstName !== null && lastName !== null ) {
        alert(`Rent Successful!\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\n `);
      } else {
        alert('Rent canceled.');
      }
    }
  });

  
  function redirectElement() {
    // Get the search input value
    var searchText = document.getElementById('searchInput').value.toLowerCase();

    // Check if the search text matches a predefined value
    if (searchText === 'yourdesiredtext') {
      // Redirect to a new page or update the content of the existing element
      // For demonstration purposes, we're changing the text content here
      document.getElementById('redirectedElement').textContent = 'Element redirected!';
    } else {
      // Handle the case when the search text doesn't match
      alert('Search text does not match.');
    }
  }
  <script>
  function searchResources() {
      // Get the search input value
      var searchText = document.getElementById('searchInput').value.toLowerCase();

      // Get all the feature cards
      var featureCards = document.querySelectorAll('.feature-card');

      // Loop through each card to check if it contains the search text
      featureCards.forEach(function(card) {
          var cardText = card.innerText.toLowerCase();
          if (cardText.includes(searchText)) {
              // If the card contains the search text, display it
              card.style.display = 'block';
          } else {
              // If the card does not contain the search text, hide it
              card.style.display = 'none';
          }
      });
  }
</script>

  
  
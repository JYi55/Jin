// Smooth scrolling for "Scroll" button
function scrollToWork() {
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
}

// Event listener for the "Expand" button 
document.addEventListener('DOMContentLoaded', function() {
  const aboutSection2 = document.getElementById('about2');
  const moreButton = document.getElementById('About2');

  aboutSection2.style.display = 'none'; // Initially hide the about2 section

  moreButton.addEventListener('click', function() { 
      // Toggle the display state of the about2 section
      if (aboutSection2.style.display === 'none') {
          aboutSection2.style.display = 'flex';
          moreButton.textContent = 'Close';
      } else {
          aboutSection2.style.display = 'none';
          moreButton.textContent = 'Expand More';
      }
  });
});

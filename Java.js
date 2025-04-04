// Function to scroll smoothly to the "work" section
function scrollToWork() {
  const workSection = document.getElementById('work');
  workSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

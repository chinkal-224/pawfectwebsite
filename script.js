// Add page transition animations for navigation links
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  body.classList.add('fade-in');

  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');

      body.classList.remove('fade-in');
      body.classList.add('fade-out');

      body.addEventListener('animationend', () => {
        window.location.href = href;
      }, { once: true });
    });
  });

  // Add donation form submission alert
  const donationForm = document.getElementById('donationForm');
  if (donationForm) {
    donationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your donation!');
      donationForm.reset();
    });
  }
});

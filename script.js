// ==========================
// Toast Notification
// ==========================
function showToast(message) {
  // Create toast element
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i>✔</i> ${message}`;
  document.body.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 100);

  // Remove after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}

// ==========================
// Rent Now Buttons
// ==========================
const rentButtons = document.querySelectorAll('.btn-rent');

rentButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const carCard = btn.closest('.car-card');
    const carName = carCard.querySelector('.car-name').textContent;
    showToast(`You have selected "${carName}" for rent!`);
  });
});

// ==========================
// Booking Form Submission
// ==========================
const bookingForm = document.querySelector('.booking-form');

if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Collect form data (optional)
    const formData = new FormData(bookingForm);
    const name = formData.get('name') || 'Guest';
    const car = formData.get('car') || 'selected car';
    const date = formData.get('date') || 'any date';

    showToast(`Booking confirmed for ${name} on ${date} for ${car}!`);

    // Reset form
    bookingForm.reset();
  });
}

// ==========================
// Optional: Animate car images on hover
// ==========================
const carImages = document.querySelectorAll('.car-img-wrap img');

carImages.forEach(img => {
  img.addEventListener('mouseover', () => img.style.transform = 'scale(1.08)');
  img.addEventListener('mouseout', () => img.style.transform = 'scale(1)');
});
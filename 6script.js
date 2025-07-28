const toggleBtn = document.getElementById("mobile-menu");
const navbar = document.getElementById("navbar");

toggleBtn.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// Close mobile nav on link click
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("show");
  });
});

// ===== Page Load Animation =====
window.addEventListener("DOMContentLoaded", () => {
  // Animate hero section
  const hero = document.querySelector(".hero");
  const heroContent = document.querySelector(".hero-content");

  hero.style.opacity = 0;
  heroContent.style.transform = "translateY(40px)";
  heroContent.style.opacity = 0;

  setTimeout(() => {
    hero.style.transition = "opacity 0.5s ease-in-out";
    hero.style.opacity = 1;

    heroContent.style.transition = "all 0.5s ease";
    heroContent.style.transform = "translateY(0)";
    heroContent.style.opacity = 1;
  }, 100); // Delay to make it smooth
});

// ===== Scroll Animation Example (Optional) =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, {
  threshold: 0.2
});

// Observe elements you want to animate on scroll
document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
document.querySelector(".play-btn").addEventListener("click", function () {
    window.open("https://youtu.be/9TNM4S6JT_A?si=dRlmstLoEWhOthZt", "_blank");
  });

  // Optional form submission handler (to prevent actual form submission)
  document.querySelector(".reservation-form form").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    // Get values (optional, for custom validation or processing)
    const name = this.querySelector('input[placeholder="Your Name"]').value;
    const email = this.querySelector('input[placeholder="Your Email"]').value;
    const datetime = this.querySelector('input[type="datetime-local"]').value;
    const people = this.querySelector("select").value;
    const message = this.querySelector("textarea").value;

    // Example confirmation (replace with real backend integration if needed)
    alert("Thank you " + name + "! Your reservation has been submitted.");

    // Optionally clear form
    this.reset();
  });
  scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Newsletter form
document.querySelector('.newsletter').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thank you for subscribing!");
});
function toggleDropdown() {
    const content = document.getElementById("dropdownContent");
    content.style.display = content.style.display === "block" ? "none" : "block";
  }

  // Close dropdown if clicked outside
  document.addEventListener("click", function(event) {
    const dropdown = document.getElementById("dropdown");
    const content = document.getElementById("dropdownContent");
    if (!dropdown.contains(event.target)) {
      content.style.display = "none";
    }
  });
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
const aboutSection = document.querySelector('.about');
const stats = document.querySelectorAll('.number');

// Renamed observer to sectionObserver
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      aboutSection.classList.add('visible');
      stats.forEach(stat => animateCount(stat));
    }
  });
}, { threshold: 0.3 });

sectionObserver.observe(aboutSection);

// Count up animation
function animateCount(element) {
  const target = +element.getAttribute('data-target');
  const duration = 2000;
  const stepTime = 30;
  let count = 0;
  const increment = target / (duration / stepTime);

  const counter = setInterval(() => {
    count += increment;
    if (count >= target) {
      element.innerText = target;
      clearInterval(counter);
    } else {
      element.innerText = Math.floor(count);
    }
  }, stepTime);
}
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000, // animation duration in milliseconds
    once: true     // only animate once when scrolled into view
  });
});
const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.fade-in').forEach(el => {
  fadeInObserver.observe(el);
});
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-show');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-fade').forEach(el => {
  fadeObserver.observe(el);
});
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

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
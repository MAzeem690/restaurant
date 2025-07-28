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
const cards = document.querySelectorAll('.feature-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => {
  observer.observe(card);
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
const menuSection = document.querySelector('.menu');
const menuItemsContainer = document.getElementById('menu-items');
const tabs = document.querySelectorAll('.tab');

const menuData = {
  breakfast: [
        { title: "Chicken Burger", desc: "Ipsum ipsum clita erat amet dolor justo diam", price: "$115", img: "data:image/jpeg;base64,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 " },

    { title: "Egg & Fish", desc: "Ipsum ipsum clita erat amet dolor justo diam", price: "$115", img: "https://themewagon.github.io/restoran/img/menu-2.jpg" },
    { title: "Chicken Pizza", desc: "Ipsum ipsum clita erat amet dolor justo diam", price: "$115", img: "https://themewagon.github.io/restoran/img/menu-3.jpg" },
    { title: "Chicken kabab", desc: "Ipsum ipsum clita erat amet dolor justo diam", price: "$115", img: "https://themewagon.github.io/restoran/img/menu-4.jpg" },
    { title: "Chicken Burger", desc: "Ipsum ipsum clita erat amet dolor justo diam", price: "$115", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Z7uvK5fm2fOdR3mVMRxuru203fHSP7-xJQ&s" },
    { title: "potato fries", desc: "Ipsum ipsum clita erat amet dolor justo diam", price: "$115", img: "https://themewagon.github.io/restoran/img/menu-6.jpg" },
   { title: "Pizza", desc: "Ipsum ipsum clita erat amet dolor justo diam", price: "$115", img: "https://themewagon.github.io/restoran/img/menu-7.jpg" },
     { title: "Fish", desc: "Ipsum ipsum clita erat amet dolor justo diam", price: "$115", img: "https://themewagon.github.io/restoran/img/menu-8.jpg" } 


  ],
  lunch: [
    { title: "Beef Steak", desc: "Juicy beef steak with pepper sauce", price: "$145", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCBLMiNLCaunzTYj0M8ZIM39cSR8nSquSig&s" },
    { title: "Roast Chicken", desc: "Roasted chicken with herbs", price: "$125", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaKGUmlm_xQgk7Pt5RPyivq4WspIpiDYxEQ&s" },
    { title: "Vegetable Platter", desc: "Mixed vegetables and tofu", price: "$95", img: "https://media.istockphoto.com/id/174992587/photo/a-vegetable-tray-with-broccoli-cauliflower-and-pepper.jpg?s=612x612&w=0&k=20&c=1OvPOmFmavD8TS7k8JEmPDd5Ap1HEB6PMYrT47LRVT8=" },
    { title: "Lamb Chops", desc: "Grilled lamb with sauce", price: "$160", img: "https://media.istockphoto.com/id/1434515922/photo/roasted-lamb-chop.jpg?s=612x612&w=0&k=20&c=B15t3MC0O9QowPr2tTHU5nmHXkJ6uZE0t8FjRbt8Mak=" }
  ],
  dinner: [
    { title: "Pasta Alfredo", desc: "Creamy white sauce pasta", price: "$105", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkizskhSC12QYI3ApvmQdJ-ddmGyKXSUWxCw&s" },
    { title: "Tandoori Chicken", desc: "Spicy grilled chicken", price: "$130", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrGgX6mvjz7--Db8fVKQydb9blHAzc3FQZQ&s" },
    { title: "Seafood Bowl", desc: "Shrimp, mussels and fish", price: "$155", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEoa9wwcMquCp2pYMkxgmwyVb-9BGhKW16w&s" },
    { title: "Grilled Sandwich", desc: "Toasted sandwich with cheese", price: "$80", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI2g_bLIRyDwRm-6zxGfHV5itp5t87H2mATg&s" }
  ]
};

function renderMenu(category) {
  menuItemsContainer.innerHTML = '';
  menuData[category].forEach(item => {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <div class="text">
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>
      <span class="price">${item.price}</span>
    `;
    menuItemsContainer.appendChild(div);
  });
}

// Load default
renderMenu('breakfast');

// Tab switching
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderMenu(tab.dataset.tab);
  });
});

// ✅ Renamed observer to menuObserver
const menuObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      menuSection.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

menuObserver.observe(menuSection);
document.getElementById("reservationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const datetime = document.getElementById("datetime").value;
  const people = document.getElementById("people").value;
  const request = document.getElementById("request").value.trim();

  if (name && email && datetime && people) {
    alert(`Thank you ${name}, your reservation for ${people} on ${datetime} has been submitted!`);
    this.reset();
  } else {
    alert("Please fill out all required fields.");
  }
});
  const teamObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.team-member').forEach(member => {
    teamObserver.observe(member);
  });
  const testimonials = document.querySelectorAll('.testimonial');
  const dots = document.querySelectorAll('.dot');

  function goToSlide(index) {
    testimonials.forEach((item, i) => {
      item.classList.remove('active');
      dots[i].classList.remove('active');
    });
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
  }
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
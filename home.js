//home.js


// Smooth Scrolling for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Navbar Animation on Scroll
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Dynamic Alert for Summer Deals
  document.querySelector('.containerDeals h1').addEventListener('click', () => {
    alert('Enjoy the summer vibes at Krusty Krab with special discounts!');
  });

// Adjust navbar behavior based on screen size
function adjustNavbar() {
    const navbar = document.getElementById('navbar');
    if (window.innerWidth <= 767) {
      navbar.classList.add('navbar-mobile');
    } else {
      navbar.classList.remove('navbar-mobile');
    }
  }
  
  // Call function on load and resize
  window.addEventListener('load', adjustNavbar);
  window.addEventListener('resize', adjustNavbar);
  
  // Example: Dynamically hide or show content based on device type
  function hideContentOnMobile() {
    const mobileOnlyElement = document.getElementById('mobile-hide');
    if (window.innerWidth <= 767) {
      mobileOnlyElement.style.display = 'none';
    } else {
      mobileOnlyElement.style.display = 'block';
    }
  }
  
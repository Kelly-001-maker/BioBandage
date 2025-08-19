
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  // Toggle menu when hamburger clicked
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Hide menu when any link is clicked
  const menuLinks = menu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });

const toggleNavBtn = document.getElementById('toggle-nav');

toggleNavBtn.addEventListener('click', toggleNav);

function toggleNav() {
  let nav = document.querySelector(".top_header nav");
  nav.classList.toggle('visible');
}
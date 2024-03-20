const toggleNavBtn = document.getElementById('toggle-nav');

toggleNavBtn.addEventListener('click', toggleNav);

function toggleNav() {
  let nav = document.querySelector("#header nav");
  nav.classList.toggle('visible');
}
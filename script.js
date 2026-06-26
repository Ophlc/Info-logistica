// Menu mobile
function toggleMenu(){
  document.getElementById('mobMenu').classList.toggle('open');
}
function closeMenu(){
  document.getElementById('mobMenu').classList.remove('open');
}
document.addEventListener('click', function(e){
  var m = document.getElementById('mobMenu');
  var h = document.querySelector('.hamburger');
  if (!m.contains(e.target) && !h.contains(e.target)) m.classList.remove('open');
});

// Scroll reveal (mesma técnica do Site 1.0)
var reveals = document.querySelectorAll('.reveal');
var obs = new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
reveals.forEach(function(r){ obs.observe(r); });

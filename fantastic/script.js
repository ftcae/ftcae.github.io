
function toggleMenu(){
  document.querySelector('.nav-links').classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function(){
  const backTop = document.getElementById('backToTop');
  if(backTop){
    window.addEventListener('scroll', function(){
      backTop.classList.toggle('show', window.scrollY > 350);
    });
    backTop.addEventListener('click', function(){
      window.scrollTo({top:0, behavior:'smooth'});
    });
  }
});

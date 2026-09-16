
document.addEventListener('DOMContentLoaded',()=>{
 const m=document.querySelector('.menu'),n=document.querySelector('.navlinks');
 if(m&&n){m.setAttribute('aria-expanded','false');m.onclick=()=>{const open=n.classList.toggle('open');m.setAttribute('aria-expanded',String(open));m.setAttribute('aria-label',open?'Close menu':'Open menu');m.textContent=open?'×':'☰'}}
 document.querySelectorAll('.dropdown .dropbtn').forEach(btn=>btn.addEventListener('click',e=>{if(window.matchMedia('(max-width:980px)').matches){e.preventDefault();btn.closest('.dropdown').classList.toggle('open')}}));
 document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>{if(window.matchMedia('(max-width:980px)').matches&&n){n.classList.remove('open');if(m){m.setAttribute('aria-expanded','false');m.setAttribute('aria-label','Open menu');m.textContent='☰'}}}));
 const t=document.querySelector('.top');if(t){addEventListener('scroll',()=>t.classList.toggle('show',scrollY>500));t.onclick=()=>scrollTo({top:0,behavior:'smooth'})}
 const modal=document.querySelector('#quoteModal');const close=()=>{if(modal){modal.classList.remove('open');document.body.style.overflow=''}};
 document.querySelectorAll('[data-quote]').forEach(x=>x.onclick=e=>{e.preventDefault();modal.classList.add('open');document.body.style.overflow='hidden'});
 document.querySelectorAll('[data-close]').forEach(x=>x.onclick=close);if(modal)modal.onclick=e=>{if(e.target===modal)close()};addEventListener('keydown',e=>{if(e.key==='Escape')close()});
 const f=document.querySelector('#quoteForm');if(f)f.onsubmit=e=>{e.preventDefault();let d=new FormData(f);let s=encodeURIComponent('Website Enquiry - Fantastic Transport & Contracting');let b=encodeURIComponent(`Name: ${d.get('name')}
Company: ${d.get('company')}
Phone: ${d.get('phone')}
Email: ${d.get('email')}
Service: ${d.get('service')}
Project Location: ${d.get('location')}
Message:
${d.get('message')}`);location.href=`mailto:info@fantasticae.com?subject=${s}&body=${b}`};
 document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
});

document.addEventListener('DOMContentLoaded',()=>{
 const cf=document.querySelector('#contactEnquiry');
 if(cf) cf.addEventListener('submit',e=>{
   e.preventDefault();
   const d=new FormData(cf);
   const subject=encodeURIComponent('Website Service Enquiry - Fantastic Transport');
   const body=encodeURIComponent(
`Name: ${d.get('name')}
Company: ${d.get('company')}
Phone: ${d.get('phone')}
Email: ${d.get('email')}
Service: ${d.get('service')}

Project Details:
${d.get('message')}`);
   window.location.href=`mailto:info@fantasticae.com?subject=${subject}&body=${body}`;
 });
});

/* V4 floating controls */
document.addEventListener('DOMContentLoaded',()=>{
  const topBtn=document.getElementById('backToTop');
  if(topBtn){
    const toggle=()=>topBtn.classList.toggle('show',window.scrollY>420);
    window.addEventListener('scroll',toggle,{passive:true});
    toggle();
    topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  }
});

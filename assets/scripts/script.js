const header=document.querySelector('.site-header');
const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
const reveals=document.querySelectorAll('.reveal');

function updateHeader(){
  header.classList.toggle('scrolled',window.scrollY>40);
}
updateHeader();
window.addEventListener('scroll',updateHeader,{passive:true});

menu?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menu.setAttribute('aria-expanded',String(open));
});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('open');
  menu?.setAttribute('aria-expanded','false');
}));

const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
reveals.forEach(el=>observer.observe(el));

const lightbox=document.getElementById('lightbox');
const lightboxTitle=document.getElementById('lightboxTitle');
const lightboxLabel=document.getElementById('lightboxLabel');
const closeLightbox=()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');document.body.style.overflow='';};

document.querySelectorAll('.gallery-item').forEach(item=>{
  item.addEventListener('click',()=>{
    lightboxTitle.textContent=item.dataset.title||'Spaço Sales';
    lightboxLabel.textContent=item.dataset.title||'FOTO';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  });
});
document.querySelector('.lightbox-close')?.addEventListener('click',closeLightbox);
lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();});

document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});

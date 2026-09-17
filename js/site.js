(function(){
  // mobile drawer
  var openBtn=document.querySelector('[data-mm-open]');
  var menu=document.querySelector('.mobile-menu');
  var back=document.querySelector('.mm-back');
  function open(){menu&&menu.classList.add('open');back&&back.classList.add('open');document.body.style.overflow='hidden';}
  function close(){menu&&menu.classList.remove('open');back&&back.classList.remove('open');document.body.style.overflow='';}
  openBtn&&openBtn.addEventListener('click',open);
  document.querySelectorAll('[data-mm-close]').forEach(function(el){el.addEventListener('click',close);});
  menu&&menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',close);});

  // reveal on scroll
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);} });
  },{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('[data-reveal]').forEach(function(el){io.observe(el);});

  // ensure hero video plays (muted autoplay)
  var v=document.querySelector('.hero-media video');
  if(v){v.muted=true;var p=v.play();if(p&&p.catch){p.catch(function(){});}}
})();

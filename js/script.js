document.getElementById('f').addEventListener('submit',function(e){e.preventDefault();document.getElementById('msg').style.display='block';});
(function(){
var d=document,h=d.documentElement;
if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
h.classList.add('js');
var groups=['.trust .wrap>div','.svc article','.steps li','.info>div','details','.cgrid>*'];
d.querySelectorAll('section h2, section .kicker, section .intro').forEach(function(e){e.classList.add('reveal')});
groups.forEach(function(s){d.querySelectorAll(s).forEach(function(e,i){e.classList.add('reveal');e.style.transitionDelay=(i%4)*90+'ms'})});
var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.15,rootMargin:'0px 0px -40px 0px'});
d.querySelectorAll('.reveal').forEach(function(e){io.observe(e)});
var nav=d.querySelector('header.nav');
function sc(){nav.classList.toggle('scrolled',scrollY>8)}
addEventListener('scroll',sc,{passive:true});sc();
var links=[].slice.call(d.querySelectorAll('.menu a'));
var so=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+x.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
links.forEach(function(a){var t=d.querySelector(a.getAttribute('href'));if(t)so.observe(t)});
})();

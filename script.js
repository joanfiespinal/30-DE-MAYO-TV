(function(){
  document.getElementById('y').textContent=new Date().getFullYear();
  if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
  var l=document.getElementById('logo'),s=document.getElementById('stage');
  window.addEventListener('pointermove',function(e){
    var x=(e.clientX/innerWidth-.5),y=(e.clientY/innerHeight-.5);
    l.style.transform='rotateY('+(x*14)+'deg) rotateX('+(-y*10)+'deg)';
  },{passive:true});
})();
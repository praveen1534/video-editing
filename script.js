let typed=new Typed('.speedtyping',{
    strings:["Freelance Video Editor"],
    typeSpeed:150,
    backSpeed:150,
    backDelay:1000,
    loop:true
}) ; 

// scrolling smoothly-------------------------------->
  window.addEventListener("scroll",reveals);
  function reveals(){
    var reveals =document.querySelectorAll('.reveals')
    for(var i=0;i<reveals.length;i++){
        var windowhight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint=150;

        if(revealtop <windowhight-revealpoint){
            reveals[i].classList.add('active')
        }
        else{
            reveals[i].classList.remove('active')

        }
    }
  }

window.addEventListener('scroll', function() {
    let navbar = document.querySelector(".navbar");
    let mnu = document.querySelector(".navbar ul");
    if(window.pageYOffset > 60){
        navbar.style.backgroundColor = '#c7c40c';
        mnu.style.backgroundColor = '#c7c40c';
        document.querySelector('.logo span').style.color = 'white';
    }else{
        navbar.style.backgroundColor = 'transparent';
        mnu.style.backgroundColor = 'transparent';
        document.querySelector('.logo span').style.color = '#c7c40c';
    }
  });

var typed = new Typed("#tpd",{
    strings: ["Mobile App Developer", "Web Developer", "Web Desiner", "Freelancer"],
    typedSpeed: 100,
    backSpeed: 60,
    loop: true
});

$(function(){
    $("#btn").click(function(){
        $(this).toggleClass("active")
        $(".navbar ul").toggleClass("active");
        
    })
})
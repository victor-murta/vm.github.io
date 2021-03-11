// $(window).on("load" , function(){
//     $(".loader").fadeOut("slow");
// })

document.addEventListener('DOMContentLoaded', () =>{
    let tl = new TimelineMax();

    tl.fromTo('.loader', 1.35,
    {width: '100%'},
    {width: '0%',delay: 5, ease: Expo.easeInOut})


})


//usando jquery
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    
    //slide up
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0 });
    });


    //navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //Typing
    var typed = new Typed(".typing", {
        strings: ["Student", "Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2" , {
        strings: ["Estudante", "Desenvolvedor", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    

    
    //carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoPlayTime: 2000,
        autoPlayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

});










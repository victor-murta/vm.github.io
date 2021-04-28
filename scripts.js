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
        strings: ["Student", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2" , {
        strings: ["Interested in learning", "Problem solving", "Communication", "Criativity", "Initiative", "Facility in learning"],
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



var data = {
    "english":{
        "nav1": "Home",
        "nav2": "About",
        "nav3": "Services",
        "nav4": "Projects",
        "nav5": "Contact",
        "txt1": "Hello, my name is",
        "txt3": "And I'm a ",
        "bt1": "Contact",
        "text_about": "Testing",
        "bt2": "See CV",
        "cv": "./english.pdf"
    },
    "portuguese":{
        "nav1": "Inicio",
        "nav2": "Sobre",
        "nav3": "Serviços",
        "nav4": "Projetos",
        "nav5": "Contato",
        "txt1": "Olá, meu nome é ",
        "txt3": "e eu sou ",
        "bt1": "Contatar",
        "text_about": "Quando eu conheci a programação de fato, na faculdade, percebi que era oque eu queria trabalhar,mesmo nunca ter participado de um projeto ,ou qualquer coisa do tipo,apenas por ter aprendido a lógica de programação ,em Python, no inicio do semestre .Todas as tardes após a aula eu investia cada vez mais em programação,exercícios para melhorar a lógica,e ainda faço até hoje ,mesmo tendo férias na faculdade.Com esse conteúdo percebi que poderia ajudar os colegas ensinando-os a progamarem melhor ,ajudando como um monitor,sem mesmo ter sido escolhido para esse cargo na época,explicando as matérias para aqueles que ficaram de recuperação ou para aqueles que apenas estavam com dúvida sobre o conteúdo.Hoje eu sou monitor e posso ajudar mais pessoas tanto as do meu semestre quanto as outras dos outros semestres.O objetivo desse site é poder colocar os conteúdos aprendidos em prática.",
        "bt2": "Ver CV",
        "cv": "./portuguese.pdf",
        "text1_languages": "Languages ",
        "text2_languages": ""
    }
};


const cl = document.querySelector('.change-language');
const link = document.querySelectorAll(' a');
const nav1 = document.querySelector('.t1');
const nav2 = document.querySelector('.t2');
const nav3 = document.querySelector('.t3');
const nav4 = document.querySelector('.t4');
const nav5 = document.querySelector('.t5');
const t1 = document.querySelector('.text-1');
const t3 = document.querySelector('.text-3');
const plustext = '<span class= "typing"></span>';
const typ2 = document.querySelector('.typing');
const b1 = document.querySelector('.button1');
const text_about = document.querySelector('.column p');
const b2 = document.querySelector('.column a');

const text1_languages = document.querySelector('.show-text .txt1');
const text2_languages = document.querySelector('.show-text .txt2');


link.forEach(el => {
    el.addEventListener('click', () => {
        cl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');
        nav1.textContent = data[attr].nav1;
        nav2.textContent = data[attr].nav2;
        nav3.textContent = data[attr].nav3;
        nav4.textContent = data[attr].nav4;
        nav5.textContent = data[attr].nav5;
        t1.textContent = data[attr].txt1;
        b1.textContent = data[attr].bt1;
        text_about.textContent = data[attr].text_about;
        b2.textContent = data[attr].bt2;
        b2.setAttribute("href", data[attr].cv);
        
    })
})

















$(document).ready(function(){
    $('.header__burger').click(function(){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
    $(".header__link").click(function(){
        if ($(window).width() < 992){
        $('.header__menu').hide();
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').removeClass('lock');
    }
    }); 
    $(".header__logo").click(function(){
        if ($(window).width() < 992){
        $('.header__menu').hide();
        $('.header__burger, .header__menu').removeClass('active');
        $('body').removeClass('lock');
    }
    });
    $(".header__burger, .header__link, .header__logo").click(function(){
        $('.header__menu').show(); 
    });
}); 


$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }
    });
});

// slider for menu and beverages

function saladsPage() {
    document.getElementById("salads").style.display = "grid";
    document.getElementById("meat").style.display = "none";
    document.getElementById("seafood").style.display = "none";
}
function meatPage() {
    document.getElementById("meat").style.display = "grid";
    document.getElementById("salads").style.display = "none";
    document.getElementById("seafood").style.display = "none";
}
function seafoodPage() {
    document.getElementById("seafood").style.display = "grid";
    document.getElementById("salads").style.display = "none";
    document.getElementById("meat").style.display = "none";
}
function coffeePage() {
    document.getElementById("coffee").style.display = "grid";
    document.getElementById("juice").style.display = "none";
}
function juicePage() {
    document.getElementById("juice").style.display = "grid";
    document.getElementById("coffee").style.display = "none";
}

// popup

function openOrderPopup() {
    document.getElementById("order__popup").style.display = "flex";
}
function closeOrderPopup() {
    document.getElementById("order__popup").style.display = "none";
}
function openDonePopup() {
    document.getElementById("done__popup").style.display = "flex";
}
function closeDonePopup() {
    document.getElementById("done__popup").style.display = "none";
}

// lock body on scroll when popup is active

$(document).ready(function(){
    $('.order').click(function(){
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
    $('.btn__cancel, .btn2').click(function(){
        $('body').removeClass('lock');
    });
});
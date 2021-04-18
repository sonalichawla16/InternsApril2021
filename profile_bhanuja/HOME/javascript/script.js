$(function() {
    $(document).scroll(function() {
        var $nav = $("#navbar");
        var $navLink = $(".nav-link");
        var $hero = $(".hero");
        $nav.toggleClass('sticky', $(this).scrollTop() > 1);
        $navLink.toggleClass('shrink', $(this).scrollTop() > 1);
        // $hero.toggleClass('hero-height', $(this).scrollTop() > 1);
    });
});


function menuopen() {
    var menu = document.querySelector('.nav-links');
    menu.classList.toggle("menu-open");
}
function instagram(){
    window.open("https://www.instagram.com/bhanuja_aggarwal_28/")
}
function linkedin(){
    window.open("https://www.linkedin.com/in/bhanuja-aggarwal");
}
function github(){
    window.open("https://www.github.com/Bhanuja-Aggarwal28");
}
function email()
{
    window.location.href = "mailto:bhanuja.aggarwal@cygrp.com";
}
function phone ()
{
    window.open('tel:9915988804');
}

var education ={
    school : "http://www.gmtpublicschoolludhiana.com/",
    college : "https://www.chitkara.edu.in/"
    
};
function clg(){
    window.open(education.college) ;
}
function scl(){
    window.open(education.school);
}


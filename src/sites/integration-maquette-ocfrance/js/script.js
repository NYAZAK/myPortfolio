

var content = document.querySelector('#hamburger-content');
var sidebar = document.querySelector('#hamburger-sidebar');
var button = document.querySelector('#hamburger-button');
var overlay = document.querySelector('#hamburger-overlay');
var links = document.querySelector('#header-menu');
var activeClass = 'hamburger-active';
console.log(links);
sidebar.innerHTML = content.innerHTML;



button.addEventListener('click', function(e){
    e.preventDefault();

    this.parentNode.classList.add(activeClass);

});



overlay.addEventListener('click', function(e){
   e.preventDefault();
   this.parentNode.classList.remove(activeClass);
});




links.addEventListener('click', function(e){
    e.preventDefault();
    overlay.classList.remove(activeClass);
});

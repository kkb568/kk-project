window.addEventListener('scroll',revealElement)

function revealElement(){
    var reveal=document.querySelectorAll('.reveal');
    for(var i=0; i<reveal.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveal[i].getBoundingClientRect().top;
        var revealPoint = 200;

        if(revealTop < windowHeight-revealPoint){
            reveal[i].classList.add('active');
        }
        else {
            reveal[i].classList.remove('active');
        }
    }
}

function openMenu() {
    document.getElementById('myDropdown').style.width = "50%";
}

function closeMenu() {
    document.getElementById('myDropdown').style.width = "0%";
}
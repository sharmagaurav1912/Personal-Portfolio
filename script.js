let img = document.getElementById('theme-img');
let navbar = document.getElementById('navbar');
let body = document.querySelector('body');
let btn = document.getElementById('theme-btn');

let lightTheme = true;

function changeTheme(){

    if (lightTheme) {

        img.src="img/dark theme icon/sun.png";
        img.style.backgroundColor = "black"
    
        navbar.className = "navbar navbar-expand-lg navbar-dark bg-black text-white";
    
        body.style.backgroundColor = "black";
        body.style.color = "white";
    
        btn.style.backgroundColor = "black";

        lightTheme = false;
        
        
    }
    
    else{
        
        img.src="img/dark theme icon/moon.png";
        img.style.backgroundColor = "white";
        
        navbar.className = "navbar navbar-expand-lg navbar-light bg-white ";
        
        body.style.backgroundColor = "white";
        body.style.color = "black";

        btn.style.backgroundColor = "white";

        lightTheme = true;
    
    }

}

//worked

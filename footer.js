let mode=document.getElementById("mode");
let theme=document.getElementById("theme");

let nav=document.getElementsByTagName("nav");
let navItems=document.getElementsByTagName("a");
let footer=document.getElementsByTagName("footer"); 
let cont=document.getElementsByClassName("cont");

function nightMode(){
    nav[0].style.cssText=`background-color:rgb(0,0,0,0.7);`
    for(let i=0;i<3;i++){
        navItems[i].style.cssText=`color:#fff;border-bottom:1px solid #fff`
        navItems[i].addEventListener("mouseover",()=>{
            navItems[i].style.cssText=`color:#00f;border-bottom:1px solid #00f`
        })
        navItems[i].addEventListener("mouseout",()=>{
            navItems[i].style.cssText=`color:#fff;border-bottom:1px solid #fff`
        })
    }

    for(let i=0;i<3;i++){
        cont[i].style.cssText=`background-color:rgb(0,0,0,0.7)`
    }

    navItems[3].style.borderBottomColor="#fff"
    // navItems[3].style.cssText=`color:#fff`
    footer[0].style.backgroundColor="rgb(0,0,0,0.8)"
    footer[0].style.color="#fff"
    mode.style.color="#fff"
    theme.style.color="#fff"
}

function dayMode(){
    nav[0].style.cssText=`background-color:rgb(255,255,255); `
    for(let i=0;i<3;i++){
        navItems[i].style.cssText=`color:#000;border-bottom:1px solid #000`
        navItems[i].addEventListener("mouseover",()=>{
            navItems[i].style.cssText=`color:#00f;border-bottom:1px solid #00f`
        })
        navItems[i].addEventListener("mouseout",()=>{
            navItems[i].style.cssText=`color:#000;border-bottom:1px solid #000`
        })
    }

    for(let i=0;i<3;i++){
        cont[i].style.cssText=`background-color:rgb(255,255,255,0.7)`
    }

    navItems[3].style.borderBottomColor="#000"
    footer[0].style.backgroundColor="rgb(0, 0, 0,0.1)"
    footer[0].style.color="#000"
    mode.style.color="#000"
    theme.style.color="#000"
}

let night=localStorage.getItem("night");
console.log(typeof night);

if(night!=null){
    if(night=="true"){
        console.log("true");
        nightMode();
        mode.classList.add("mode");
    }else{
        // console.log("false");
        dayMode();
        mode.classList.remove("mode")
    }
}

mode.addEventListener("click",(e)=>{
    e.preventDefault();
    let night_mode=mode.classList.toggle("mode");
    localStorage.setItem("night",night_mode); 
           
    if(night_mode){
        nightMode();
    }else{
       dayMode();
    }
    
})

theme.addEventListener("click",(e)=>{
    e.preventDefault();

    let colors=document.getElementById("colors");
    let themes=theme.classList.toggle("themes");

    if(themes){
       colors.style.cssText=`position:absolute;right:0%;top:15%;`
    }
    else{
        colors.style.cssText=`position:absolute;right:-30%`
    }

})

let col1=document.getElementById("col1")
let col2=document.getElementById("col2")
let col3=document.getElementById("col3")
let col4=document.getElementById("col4")

// let navItems=document.getElementsByTagName("a");
let h1=document.getElementsByTagName("h1")
let h3=document.getElementsByTagName("h3")

function color1(){
    for(let i=0;i<2;i++){
        navItems[i+3].style.color="rgb(255,0,0)"
        h1[i].style.color="rgb(255,0,0)"
    }
     h3[0].style.color="rgb(255,0,0)"
      h3[2].style.color="rgb(255,0,0)"
}

function color2(){
    for(let i=0;i<2;i++){
        navItems[i+3].style.color="rgb(30, 151, 46)"
        h1[i].style.color="rgb(30,151,46)"
    }
    h3[0].style.color="rgb(30,151,46)"
    h3[2].style.color="rgb(30,151,46)"

}

function color3(){
    for(let i=0;i<2;i++){
        navItems[i+3].style.color="rgb(9, 151, 132)"
        h1[i].style.color="rgb(9, 151, 132)"
        
    }

    h3[0].style.color="rgb(9, 151, 132)"
    h3[2].style.color="rgb(9, 151, 132)"
}

function color4(){
    for(let i=0;i<2;i++){
        navItems[i+3].style.color="rgb(190, 20, 134)"
       h1[i].style.color="rgb(190, 20, 134)"
    }

    h3[0].style.color="rgb(190, 20, 134)"
    h3[2].style.color="rgb(190, 20, 134)"
}

let colorTheme=localStorage.getItem("colorTheme");
if(colorTheme!=null){
    if(colorTheme=="col1"){
        color1();
    }else if(colorTheme=="col2"){
        color2();
    }else if(colorTheme=="col3"){
        color3();
    }else if(colorTheme=="col4"){
        color4();
    }
}

col1.addEventListener("click",(e)=>{
    e.preventDefault();
    color1();
    localStorage.setItem("colorTheme","col1");
})

col2.addEventListener("click",(e)=>{
    e.preventDefault();
    color2();
    localStorage.setItem("colorTheme","col2");
})

col3.addEventListener("click",(e)=>{
    e.preventDefault();
    color3();
    localStorage.setItem("colorTheme","col3");
})

col4.addEventListener("click",(e)=>{
    e.preventDefault();    
    color4();
    localStorage.setItem("colorTheme","col4");
})

let navbar=document.getElementById("navbar");
navbar.addEventListener("click",(e)=>{
    e.preventDefault();
    e.stopPropagation();

    let navitems=navbar.classList.toggle("navitems")

    if(navitems){
        nav[0].style.cssText=`position:absolute;top:0%;right:30%`
        footer[0].style.cssText=`position:absolute;top:0%;left:70%`
    }else{
        nav[0].style.cssText=`position:absolute;top:0%;right:100%`
        footer[0].style.cssText=`position:absolute;top:0%;left:0%`
    }

    let night_mode=mode.classList.contains("mode");
    console.log(night_mode);
    
    if(night_mode){
        nav[0].style.backgroundColor="rgb(0,0,0,0.7)"
        footer[0].style.backgroundColor="rgb(0,0,0,0.8)"
        footer[0].style.color="#fff"
    }
})
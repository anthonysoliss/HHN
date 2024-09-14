let container
let spiritContainer;

let posX, posY;

let width = window.innerWidth;
let height = window.innerHeight;

let div;

let span;

let timer;

let delayTimer = getDelayTimerValue();

let backgroundDelayTimer = getDelayTimerValue();

let backgroundClassName;

let currentBackgroundClassName = "bg-start";

let batsClassName;

let currentBatsClassName = "swirl";

let spiritClassName = "spirit1";

window.onload = (event) => {
    container = document.getElementById("bats");
    createBats();
    
    // Remove bats after 3 seconds
    setTimeout(() => {
        removeBats();
    }, 3000);
};

function createBats() {
    let numBats = 20;
    
    for(let i = 0; i < 10; i++) {
        let div = document.createElement("div");
        div.classList.add("row");
        
        if(i > 0) {
            let top = Math.random() * 10 + 1 + "%";
            div.style.top = top;
        }
        
        for(let j = 0; j < numBats; j++) {
            let span = document.createElement("span");
            span.classList.add("bat");
            span.setAttribute("id", "span" + j);
            span.style.width = (Math.random() * (100-30) + 30) + "px";
            span.style.height = (Math.random() * (100-30) + 30) + "px";
            span.style.marginTop = (Math.random() * (10-1) + 1) + "%";
            div.appendChild(span);
        }
        
        div.classList.add("flying");
        container.appendChild(div);
        
        if(numBats > 3) {
            numBats = numBats - 2;
        }
    }
}

function removeBats() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
function createBats2(){

    let numBats = 20; 

    let rot = 25;

    let divArray = [];
               
    for(let i = 0; i < 10; i++)
    {
       
        div = document.createElement("div");
      
        div.setAttribute("id", "span" + i); 

        div.style.top = "-" + rot + "px";

        div.style.transform = "rotateX(" + rot + "deg) rotateY(" + rot + "deg)";

        rot += 25;
                            
        for(let j = numBats; j > 0; j--){                      

            span = document.createElement("span")
               
            span.classList.add("bats-upside-down");    
                     
            span.setAttribute("id", "span" + j); 
            
            span.style.width = "50px";

            span.style.height = "25px";    
            
            let z = Math.random() * 500;

            span.style.transform = "translateZ(" + z + "px)";    
                              
            div.appendChild(span);          

        }

        numBats = numBats - 2;
             
        if(numBats <=2 ){

            numBats = 2;

        }
        
        divArray.push(div);
      
    }

    for(let k = 0; k < divArray.length; k++){

        divArray[k].classList.add("row-version2");

        container2.appendChild(divArray[k]);

    }
      
}


function getBackgroundTimerValue(){

    let timerValue = Math.floor((Math.random() * (12000 - 10000)) + 10000);
   
    return timerValue;

}

function getDelayTimerValue(){

    let timerValue= Math.floor((Math.random() * 8000) + 5000);    
   
    return timerValue;

}

function startAnimation(){
   
    setTimeout(() => {
       
        showFigure();      
      
    }, delayTimer);    

}

function backgroundAnimation(){

    setTimeout(() => {
       
        showBatsAnimation();      
      
    }, backgroundDelayTimer);    


}

function batsFlying(){

    container.classList.remove("flyBy");

    container.classList.add("swirl");

    setTimeout(() => {

        showBatsAnimation();

    }, 15000);

}

function showBatsAnimation(){
 
    container.classList.remove(currentBatsClassName);   
      
    container2.classList.add("hidden");

    let numImage = Math.floor(Math.random() * 6);  
              
    if(numImage === 0 || numImage === 1){
    
        batsClassName = "background-flyby";
                
    }

    if(numImage === 2 || numImage === 4 || numImage === 6){

        let rand = Math.floor(Math.random() * 3);
      
        // rand = 0;
               
        if(rand === 0 || rand === 1)
        {

            container2.classList.remove("foreground-flyby");

            container2.classList.remove("hidden");
           
            addSpiral();

        }

        if(rand === 2){                    

            batsClassName = "swirl";
                              
        }

    }

    if(numImage === 3 || numImage === 5){

        batsClassName = "background-flyover";

    }
        
    container.classList.add(batsClassName);

    currentBatsClassName = batsClassName;  
    
    backgroundDelayTimer = getBackgroundTimerValue();

    backgroundAnimation();

}

function showFigure(){
    
    let numImage = Math.floor(Math.random() * 6);
    
    spiritContainer.classList.remove(spiritClassName);    
    
    switch(numImage){

        case 1:
        case 6:

            spiritClassName = "spirit1";                       
            break;  

        case 2:

            spiritClassName = "spirit2";            
           
            break; 

        case 3:

            spiritClassName = "spirit3";            
           
            break;  

        case 4:
        case 5:

            spiritClassName = "spirit4";            
           
            break;
    }
    
    spiritContainer.classList.add(spiritClassName);
    
    delayTimer = getDelayTimerValue();

    startAnimation();

}


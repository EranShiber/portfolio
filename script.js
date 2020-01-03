const text = document.querySelector('.main-container .main-text h2');
const strings = text.innerHTML;
const splitStrings = strings.split(``);
text.innerHTML = ""

for (let i = 0; i < splitStrings.length; i++){
text.innerHTML += `<span>${splitStrings[i]}<span/>`
}


let counter = 0;
let runner = setInterval(timer, 5);

function timer() {
    let spans = text.querySelectorAll('span')[counter];
    spans.classList.add('fade');
    counter++
    if(counter === 123){
        stop();
    }
}
function stop() {
    clearInterval(runner);
  
}







// mobile nav:
const mainUl = document.querySelector(".main-text .toggle")
const mobileView = document.querySelector(".mobile-view");
let isOpen = false;
mobileView.addEventListener("click", () => {
    if(!isOpen){
        mainUl.style.display = "block";
        
        document.querySelector(".mobile-view span:nth-child(1)").style = "transform: rotateY( -770deg);"
        document.querySelector(".mobile-view span:nth-child(2)").style = "transform: rotateX( -770deg);"
        document.querySelector(".mobile-view span:nth-child(3)").style = "transform: rotateY(-770deg);"
        isOpen = true;
    } else {
        mainUl.style.display = "none";
        document.querySelector(".mobile-view span:nth-child(1)").style = "transform: rotateY(0deg);"
        document.querySelector(".mobile-view span:nth-child(2)").style = "transform: rotateX(0deg);"
        document.querySelector(".mobile-view span:nth-child(3)").style = "transform: rotateY(0deg);"
        isOpen = false;
    }
})

    window.onscroll = function(x) {
if(window.pageYOffset > 900) {
    document.querySelector('.side-fixed-nav').classList.remove('off');
    }    else {
        document.querySelector('.side-fixed-nav').classList.add('off');
    }
}

// adding card to the show-case
const next = document.querySelector('.next')
const backGround = document.querySelector('.case-1')

let photos = ["./case-1/‏‏לכידה.png","./case-1/2.PNG", "./case-1/‏‏לכידה-1.PNG", "./case-1/3.PNG"]
let photoView = 0;



next.addEventListener("click", (x)=> {
    if(photoView > 3) {
        photoView = 0
        backGround.style.background = `url(${photos[photoView]}) 100% 100%` // fix the 100%
    } else {
        backGround.style.background = `url(${photos[photoView]}) 100% 100%` // fix the 100%
        console.log(photos[photoView]);   
        photoView++
    }
})






// end

    
    const boxAera = document.querySelector('.box-area');
    boxAera.addEventListener("mouseover", (x) => {
        document.querySelector(".v").style = `
        animation: vMove ease-in-out 1s infinite;
        `
    let newInterval = setInterval(() => {

        if(boxAera.childElementCount < 500){ 
            let randomValues = Math.random(Math.floor()) * 15;
            let newBox = document.createElement('li');
            newBox.className = "newBox";
             newBox.style = `
             left: ${Math.round(Math.random(Math.floor()) * 98)}%;
             animation: boxMove ${randomValues}s ease-in-out infinite reverse;
             width: ${Math.random(Math.floor()) * 7}px;
             height: ${Math.random(Math.floor()) * 7}px;
         
             `
             boxAera.appendChild(newBox)
            
        } else {

            clearInterval(newInterval)
                
            }
         })

}, 2000)




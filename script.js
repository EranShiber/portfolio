    const boxAera = document.querySelector('.box-aera');
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

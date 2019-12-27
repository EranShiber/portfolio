    const boxAera = document.querySelector('.box-aera');
    boxAera.addEventListener("mouseover", (x) => {
    let newInterval = setInterval(() => {
        if(boxAera.childElementCount < 500){ 
            let randomValues = Math.random(Math.floor()) * 10;
            let newBox = document.createElement('li');
            newBox.className = "newBox";
             newBox.style = `
             left: ${Math.round(Math.random(Math.floor()) * 95)}%;
             animation: boxMove ${randomValues} ease-in infinite reverse;
             width: 5px;
             height: ${randomValues * Math.round(Math.random(Math.floor()) )}px;
             `
             boxAera.appendChild(newBox)
    

            
        } else {

            clearInterval(newInterval)
                
            }
         })

 
}, 2000)

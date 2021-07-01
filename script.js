const body =document.querySelector("body");
const leftInput=document.querySelector(".left-input");
const rightInput=document.querySelector(".right-input");
const cssoutput=document.querySelector(".css-output");

//getting colors

let leftcolor = leftInput.value;

let rightcolor = rightInput.value;

const changebackground = () => {
    const cssString = `linear-gradient( to right, ${leftcolor}, ${rightcolor})`;
    body.style.background = cssString;
    cssoutput.textContent = `background: ${cssString}`;
};

leftInput.addEventListener("change" , (event) =>{
    leftcolor = event.target.value;
    changebackground();
});

rightInput.addEventListener("change" , (event) =>{
    rightcolor = event.target.value;
    changebackground();
});

//geenrating random vlaues
//select button 

const button=document.querySelector("button");

const randomcolor = () => {
    const values = "0123456789abcdef";
    
    let color="#";

    for(let i=0; i<6; i++){
        const randomIndex=Math.floor(Math.random() * 100 % 16);
        color+=values[randomIndex];
    }
    return color;
};

button.addEventListener("click" , () => {
    leftcolor = randomcolor();
    rightcolor = randomcolor();
    
    //also showing color in input tag
    leftInput.value=leftcolor;
    rightInput.value=rightcolor;
    changebackground();

});
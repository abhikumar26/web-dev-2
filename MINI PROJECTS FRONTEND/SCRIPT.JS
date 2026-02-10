let Randombutton = document.querySelector(".Randombutton");
let colorinput = document.querySelector("#colorinput");
let Applybutton = document.querySelector(".Applybutton");
let currentColorvalue= document.querySelector(".currentColorvalue");
let container = document.querySelector(".container")

console.log(Randombutton,colorinput,Applybutton,currentColorvalue,container);

let RandomArrayColor = ["red","yellow","green","pink","acqua","purple","blue","white","black"];
const generateRandomcolor = () =>{
    const RandomNum = Math.floor(Math.random()* RandomArrayColor.length)
    return(RandomArrayColor[RandomNum])
}

const changecolor =(color) =>{
    container.style.backgroundColor = color
}
const handleRandombuttonClick = () =>{
    let color = generateRandomcolor();
    changecolor(color);
}
const handleApplybuttonClick = () =>{
const color = colorinput.value;
changecolor(color)
}    
Randombutton.addEventListener("click",handleRandombuttonClick);

Applybutton.addEventListener("click",handleApplybuttonClick);



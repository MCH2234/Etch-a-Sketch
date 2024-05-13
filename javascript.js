const mainContainer=document.getElementById("container");
const askButton=document.getElementById("ask");
for(i=0; i<16; i++){
    let columnGrid= document.createElement("div");
    columnGrid.setAttribute("id", `${i} column`);
    columnGrid.style.display="flex";
    columnGrid.style.flexDirection="row";
    columnGrid.style.flexBasis="50px";
    columnGrid.style.flexGrow="1";
    columnGrid.style.border="3px black";
    mainContainer.appendChild(columnGrid);

    for(k=0; k<16; k++){
    let rowGrid= document.createElement("div");
    rowGrid.setAttribute("id", `${k} + row`);
    rowGrid.style.flexBasis="50px";
    rowGrid.style.flexGrow="1";
    rowGrid.style.border="1px black";
    columnGrid.appendChild(rowGrid);
    rowGrid.addEventListener("mouseenter", ()=>{
        rowGrid.style.backgroundColor = "black";
    });
};
};
askButton.addEventListener("click", () => {
let gridSize=prompt("How big do you want the new Grid to be?");
if(gridSize<=100 && gridSize>0){
    while(mainContainer.firstChild){
        mainContainer.removeChild(mainContainer.lastChild);
        };
for(i=0; i<gridSize; i++){
    let columnGrid= document.createElement("div");
    columnGrid.setAttribute("id", `${i} + column`);
    columnGrid.style.display="flex";
    columnGrid.style.flexDirection="row";
    columnGrid.style.flexBasis="50px";
    columnGrid.style.flexGrow="1";
    columnGrid.style.border="3px black";
    mainContainer.appendChild(columnGrid);

    for(k=0; k<gridSize; k++){
    let rowGrid= document.createElement("div");
    rowGrid.setAttribute("id", `${k} + row`);
    rowGrid.style.flexBasis="50px";
    rowGrid.style.flexGrow="1";
    rowGrid.style.border="1px black";
    columnGrid.appendChild(rowGrid);
    rowGrid.addEventListener("mouseenter", ()=>{
        rowGrid.style.backgroundColor = "black";
    });
};
};
}
else if(gridSize>100){
alert('The max is 100, try other value.');
};
});


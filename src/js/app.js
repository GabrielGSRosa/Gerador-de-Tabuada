//Seleção dos elementos
const multiplicationForm = document.getElementById("multiplication-form");
const numberInput = document.getElementById("number");
const multiplicationInput = document.getElementById("multiplicator");
const multiplicationTable = document.querySelector("#multiplication-operations");
const multiplicationTitle = document.querySelector("#multiplication-title span")

// Funções
const multiplicar = (multiplicationNumber, multiplicatorNumber) => {

    multiplicationTable.innerHTML = "";

    for(let i = multiplicatorNumber; i > 0; i--){
        let result = multiplicationNumber * i;

        const template = `<div class="row">
            <div class="operation">${multiplicationNumber} x ${multiplicatorNumber} = </div>
            <div class="result">${result}</div>
            </div>`;

            const parser = new DOMParser();

            const htmlTemplate = parser.parseFromString(template, "text/html");

            const row = htmlTemplate.querySelector(".row");

            multiplicationTable.appendChild(row);

        console.log("Valor de " + multiplicationNumber + "x" + multiplicatorNumber + " = " + result);
    }
    multiplicationTitle.innerText = multiplicationNumber;
}

//Eventos
multiplicationForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicatorNumber) {
        alert("Selecione valores validos!")
    }
    multiplicar(multiplicationNumber, multiplicatorNumber);
})
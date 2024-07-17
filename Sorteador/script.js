function generateNumber() {
    let min = Math.ceil(document.querySelector("#min").value);
    let max = Math.floor(document.querySelector("#max").value);


    if (min == max) {
        alert("Os números não podem ser iguais")

    } else if (min >= max) {
        alert("O valor máximo não pode ser maior que o valor minímo")

    } else {
        let result = Math.floor(Math.random() * (max - min + 1)) + min;
        alert(result);
    }


};


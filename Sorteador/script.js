function generateNumber() {
    let min = Math.ceil(document.querySelector("#min").value);
    let max = Math.floor(document.querySelector("#max").value);

    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result);
};


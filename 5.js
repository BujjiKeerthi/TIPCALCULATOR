function calc() {
    let a = parseFloat(document.getElementById("amount").value)
    let b = parseFloat(document.getElementById("tip").value)


    const d = a * (b / 100)
    const c = a + d;

    document.getElementById("t").textContent = '$' + d;
    document.getElementById("T").textContent = '$' + c;



}
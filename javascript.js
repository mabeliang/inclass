function CheckAnswer() {
    var myInp = document.querySelector("#answer").nodeValue;
    console.log(myInp);
    if(myInp ==="B"){
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
}
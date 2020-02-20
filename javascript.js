function CheckAnswer(){
    var myInp = document.querySelector("#answer").value;
    console.log(myInp);
    if(myInp==="B"){
        // alert("Correct!");
        document.querySelector("#h_r").innerHTML="<h1>Correct!</h1>"
    
    }else{
        // alert("WRONG");
    }
}
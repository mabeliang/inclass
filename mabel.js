var data = {
    qnum:0,
    questions :[
        {
            title:"What comes after A?",
            answer:"b",
            bgcolor:"pink",
            img:"https://placekitten.com/100/100"
        },
        {
            title: "Is 9 + 10 =19?",
            answer: "yes",
            bgcolor:"orange",
            img:"https://placekitten.com/200/200"
        },
        {
            title: "What is the color of a banana?",
            answer:"yellow",
            bgcolor: "yellow",
            img:"https://placekitten.com/300/300"
        
        }
    ]
}

console.log(data)

function Start(){
    document.querySelector("#h3").innerText = data.questions[data.qnum].title;
    document.body.style.backgroundColor = data.questions[data.num].bgcolor;
    document.querySelector("#h_r").innerHTML = "<img src=' "+ data.questions[data.qnum].img + "'/>";
    
}

function CheckAnswer(){
    var myInp = document.querySelector("#answer").value;
    console.log(myInp);
    console.log(data.questions[data.qnum].answer)
    if(myInp===data.questions[data.qnum].answer){
        document.querySelector("#h_r").innerHTML="<h1>Correct!</h1>";

        data.qnum++;
        document.querySelector("h3").innerText = data.questions[data.qnum].title;
        document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
        document.querySelector("h_r").innerHTML = "<img src=' "+ data.questions[data.qnum].img + "' / >";
       
        } else {
        document.querySelector("#h_r").innerHTML="<h1>Wrong!</h1>"
    }
}

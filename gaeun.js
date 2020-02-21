var data = {
    qnum: 0,
    questions: [
        {   
            title:"What comes after A?",
            answer: "B",
            bgcolor: "purple",
            img: "https://placekitten.com/100/100"
        },
        {
            title: "Is 5 bigger than 4?",
            answer: "Yes",
            bgcolor: "red",
            img: "https://placekitten.com/200/200"
        },
        {
            title: "What is the color of a banana?",
            answer: "Yellow",
            bgcolor: "yellow",
            img: "https://placekitten.com/300/300"
        }
    ]
};

// console.log(data.questions[1].title);
// console.log(data);
console.log(data, window);


function Start(){
    document.querySelector("#h_q").innerText = data.questions[data.qnum].title;
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
    document.querySelector("#h_r").innerHTML = "<img src='"+ data.quesitons[data.qnum].img+"'>";
}

function CheckAnswer(){
    var myInp = document.querySelector("#answer").value;
    console.log(myInp);
    console.log(data.questions[data.qnum].answer)
    if(myInp=== data.questions[data.qnum].answer){
        // alert("Correct!");
        document.querySelector("#h_r").innerHTML="<h1>Correct!</h1>";

        data.qnum++;
        document.querySelector("#h_q").innerText = data.questions[data.qnum].title;
        document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
        document.querySelector("#h_r").innerHTML = "<img src='"+data.quesitons[data.qnum].img+"'>";


        // if(qnum === 1) {
        //     qnum++;
        //     document.querySelector("#h_q").innerText = "Is 5 bigger than 4?";
        //     answer = "Yes";
        // } else if(qnum === 2) {
        //     qnum++;
        //     document.querySelector("#h_q").innerText = "What is the color of Banana?";
        //     answer = "Yellow";
        // }
    

    }else{
        // alert("WRONG!");
        document.querySelector("#h_r").innerText = "<h1>Wrong!</h1>";
    }
}

Start();



// var answer ="B";
var qnum = 0;

var questions = [
    "What comes after A?",
    "Is 5 bigger than  4?",
    "What is the color of a banana?",
    "what day is today?",
    "What is the color of an apple?"
];

var answers = [
    "B",
    "Yes",
    "Yellow",
    "Thursday",
    "Red"
]

var bgcolor = [
    "purple",
    "#DAD",
    "rgb(1,152,254)"
]

var imgs = [
    "https://placekitten.com/100/100",
    "https://placekitten.com/200/200",
    "https://placekitten.com/300/300"

]


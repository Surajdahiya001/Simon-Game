let gamesq = [];
let usersq = [];

let btns = ["yellow", "purple", "red", "blue"];

let level = 0;

let start = false;

p = document.querySelector("p");

document.addEventListener("click", function () {


    if (start == false) {

        // console.log("click");

        start = true;

        levelup();

    }

})

function flashup(btn) {

    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

function levelup() {
    usersq = [];
    level++;
    p.innerText = `Level ${level}`;
    let random = Math.floor(Math.random() * 3);
    let randomcolor = btns[random];

    
    let randombtn = document.querySelector(`.${randomcolor}`);
    gamesq.push(randomcolor);
    flashup(randombtn);

}

function checkAns(Idx) {

    // let Idx = level - 1;

    if (usersq[Idx] === gamesq[Idx]) {
        if(usersq.length === gamesq.length){
            setTimeout(levelup, 1000);
        }
    } else {
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            
            p.innerHTML = `Game over ! Your score is <b>${level}</b> <br> Click on window to restart`;
            document.querySelector("body").style.backgroundColor = "white";
            reset();
        }, 150);
        
    }
}

function btnpress() {
    let btn = this;

    flashup(btn);
    userbtn = btn.getAttribute("id");
    usersq.push(userbtn);
    checkAns(usersq.length-1);
}

let allbtns = document.querySelectorAll(".btn");

for (btn of allbtns) {

    btn.addEventListener("click", btnpress);
}

function reset() {
    start = false;
    gamesq = [];
    usersq = [];
    level = 0;
}
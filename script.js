let gamesq = [];
let usersq = [];

let btns = ["yellow", "purple", "red", "blue"];

let level = 0;

let start = false;

p = document.querySelector("p");

document.addEventListener("keypress", function () {
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

    console.log(randomcolor);
    let randombtn = document.querySelector(`.${randomcolor}`);
    gamesq.push(randomcolor);
    console.log(gamesq);
    flashup(randombtn);

}

function checkAns(Idx) {

    // let Idx = level - 1;

    if (usersq[Idx] === gamesq[Idx]) {
        if(usersq.length === gamesq.length){
            setTimeout(levelup, 1000);
        console.log("matched");
        }
    } else {
        p.innerHTML = `Game over ! Your score is <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
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
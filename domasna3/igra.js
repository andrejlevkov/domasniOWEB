let zborovi = ["Remark", "Juggle", "Blossom", "Whisper", "Mystery", "Capture", "Glitter", "Exciting", "Lively", "Harmony", "Freedom",
"Content", "Enchant", "Grateful", "Serene", "Venture", "Delight", "Vibrant", "Twilight", "Whistle"];
//zborovite se random generirani

let ind;
let izbranZbor;
var masked;
var guessed;
var obidi;

function start(){
    var genbutton = document.getElementById("generateButton");
    genbutton.addEventListener("click", generate, false);
    var guessbutton = document.getElementById("guessbutton");
    guessbutton.addEventListener("click", guess, false);

}

//generira nov zbor i gi sokriva site bukvi osven 3 
function generate(){
    obidi = 5;
    ind = Math.floor((Math.random() * 20));
    izbranZbor = zborovi[ind];
    masked = izbranZbor.split('');
    var ix;
    var ammount = izbranZbor.length - 3;
    var count = 0;

    while(count < ammount) {
        ix = Math.floor(Math.random()*izbranZbor.length);
        if(masked[ix] !== ' _ ') {
            masked[ix] = ' _ ';
            count++;
        } 
    }
    masked = masked.join("");
    
    var div = document.getElementById("divWord");
    div.innerHTML = "<p>" + masked + "</p>";
    var div1 = document.getElementById("result");
    div1.innerHTML = "";
}
//proveruva dali e tocen zborot i soodvetno generira poraka za dali e tocen ili ne
function guess(){
    var div = document.getElementById("result");
    var val = document.getElementById("guess");

    guessed = val.value;
    if(guessed == "")
        return;
    else if(guessed == izbranZbor){
        window.alert("Go pogodivte zborot");
        val.value = "";
        gameover();
    }
    else{
        --obidi;
        if(obidi>0){
            div.innerHTML = "Netocno. Ostanati obidi: " + obidi;
            val.value = "";
        }
        else{
            window.alert("Zborot ne e pogoden");
            div.innerHTML = "Tocniot zbor e " + izbranZbor;
            val.value = "";
            gameover();
        }
        }

}
//generira kopce za nova igra otkako tekovnata ke zavrsi
function gameover(){
    var frm = document.forms[0];
    var newgamediv = document.createElement("div");
    newgamediv.id = "ngdid"
    var newgamebutton = document.createElement("input");
    frm.appendChild(newgamediv);
    newgamediv.appendChild(newgamebutton);
    newgamebutton.type = "button";
    newgamebutton.value = "New Game";
    newgamebutton.id = "ngbid";
    newgamebutton.addEventListener("click", gamereset, false);
}
//ja resetira stranata vo nejzinata prvicna sostojba i generira nov zbor
function gamereset(){
    var resetdiv = document.getElementById("ngdid");
    var worddiv = document.getElementById("divWord");
    var resultdiv = document.getElementById("result");
    resultdiv.innerHTML = "";
    worddiv.innerHTML = "";
    resetdiv.remove();
    generate();
}

window.addEventListener("load", start, false);
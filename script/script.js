var pl1 = 0,
    pl2 = 0,
    stage;

function show_menu(){
    var l = document.getElementById('logo');
    l.style.top = "0";
    var s = document.getElementById('start');
    s.style.display = "block";
    var e = document.getElementById('exit');
    e.style.display = "block";
}

var l = document.getElementById("logo");
l.addEventListener('click', show_menu);

function disable_menu(){
    var l = document.getElementById('logo');
    l.style.top = "30%";
    var s = document.getElementById('start');
    s.style.display = "none";
    var e = document.getElementById('exit');
    e.style.display = "none";
}

var e = document.getElementById("exit");
e.addEventListener('click', disable_menu);

function show_select_player(){
    var l = document.getElementById('menu');
    l.style.display = "none";
    var sp = document.getElementById('select_player');
    sp.style.display = "block";
}

var s = document.getElementById("start");
s.addEventListener('click', show_select_player);

function p_select(nb_perso){
    mp = document.getElementById('message_player');
    if (mp.textContent == "Player 1 select your perso"){
        console.log("toto");
        mp.textContent = "Player 2 select your perso";
    }else{
        console.log("titi"); 
        var sp = document.getElementById('select_player');
        sp.style.display = 'none';
        var ss = document.getElementById('select_stage');
        ss.style.display = 'block';
    }
    console.log(pl1 + ' ' + pl2);
}

var p1 = document.getElementById("Ryu");
p1.addEventListener('click', p_select);
var p2 = document.getElementById("ChunLi");
p2.addEventListener('click', p_select);
var p3 = document.getElementById('Ken');
p3.addEventListener('click', p_select);
var p4 = document.getElementById('Guile');
p4.addEventListener('click', p_select);
var p5 = document.getElementById('Akuma');
p5.addEventListener('click', p_select);
var p6 = document.getElementById('DeeJay');
p6.addEventListener('click', p_select);
var pl1,
    pl2,
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

function p_select(){
    mp = document.getElementById('message_player');
    if (mp.textContent == "Player 1 select your perso")
        mp.textContent = "Player 2 select your perso";
    else{
        var sp = document.getElementById('select_player');
        sp.style.display = 'none';
        var ss = document.getElementById('select_stage');
        ss.style.display = 'block';
    }
}

var p1 = document.getElementById("perso1");
p1.addEventListener('click', p_select);
var p2 = document.getElementById("perso2");
p2.addEventListener('click', p_select);
var p3 = document.getElementById('perso3');
p3.addEventListener('click', p_select);
var p4 = document.getElementById('perso4');
p4.addEventListener('click', p_select);
var p5 = document.getElementById('perso5');
p5.addEventListener('click', p_select);
var p6 = document.getElementById('perso6');
p6.addEventListener('click', p_select);
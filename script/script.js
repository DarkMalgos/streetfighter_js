/*============================================================
#title            : Exercise 5: STREET FIGHTER VI
#description      : Game created with passion with HTML/CSS/JAVASCRIPT
#author           : CAILLOT Brieuc & SAUMUROT Florian
#date             : 20161124
#version          : Constantly on progress
#usage            : JAVASCRIPT
#notes            : Only working on search engine
=============================================================*/

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

function get_off_top( el ) {
    var _y = 0;
    while( el && !isNaN( el.offsetTop ) ) {
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return (_y);
} 

function get_off_left( el ) {
    var _x = 0;
    while( el && !isNaN( el.offsetLeft ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        el = el.offsetParent;
    }
    return (_x);
}

/*function down(){
    var _s = document.getElementById("selection");
    var _s_top = get_off_top(document.getElementById("selection"));
    console.log(_s_top);
    if (_s_top == 232)
        _s.style.top = "58%";
}*/

function right(){
    var _s = document.getElementById("selection");
    var _s_left = get_off_left(document.getElementById("selection"));
    console.log(_s_left);
    if (_s_left < 471)
        _s.style.left = _s_left + 123 + "px";
    else if (_s_left == 471)
        _s.style.left = _s_left + 300 + "px";
    else if (_s_left < 1011)
        _s.style.left = _s_left + 120 + "px";
}

function left(){
    var _s = document.getElementById("selection");
    var _s_left = get_off_left(document.getElementById("selection"));
    console.log(_s_left);
    if (_s_left > 771)
        _s.style.left = _s_left - 120 + "px";
    else if (_s_left == 771)
        _s.style.left = _s_left - 300 + "px";
    else if (_s_left > 225)
        _s.style.left = _s_left - 123 + "px";
}

function p_select(nb_perso){
    mp = document.getElementById('message_player');
    if (mp.textContent == "Player 1 select your perso"){
        pl1 = nb_perso;
        mp.textContent = "Player 2 select your perso";
    }else{
        pl2 = nb_perso;
        var sp = document.getElementById('select_player');
        sp.style.display = 'none';
        var ss = document.getElementById('select_stage');
        ss.style.display = 'block';
    }
    console.log(pl1 + ' ' + pl2);
}

function enter(){
    var _s = document.getElementById("selection");
    var _s_left = get_off_left(document.getElementById("selection"));
    console.log(_s_left);
    if (_s_left == 225)
        p_select(1);
    else if (_s_left == 348)
        p_select(2);
    else if (_s_left == 471)
        p_select(3);
    else if (_s_left == 771)
        p_select(4);
    else if (_s_left == 891)
        p_select(5);
    else if (_s_left == 1011)
        p_select(6);
}

function move_selector(e){
    console.log(e.keyCode);
    /*if (e.keyCode == 40)
        down();*/
    if (e.keyCode == 39)
        right();
    else if (e.keyCode == 38)
        up();
    else if (e.keyCode == 37)
        left();
    else if (e.keyCode == 13)
        enter();
}

var sp = document.getElementById("select_player");
addEventListener('keydown', move_selector);
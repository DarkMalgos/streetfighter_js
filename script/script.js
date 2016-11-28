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

console.log(document.getElementById('logo').offsetTop);
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

function right()
{
    var _class_selection = document.getElementsByClassName("selection")[0],
        _id = _class_selection.getAttribute('id'),
        _id_perso = document.getElementById(_id);
    _id_perso_next = parseInt(_class_selection.getAttribute('id').charAt(1)) + 1;
    console.log(_id_perso);
    if (_id_perso_next <= 6){
        var _perso_next = document.getElementById('p' + _id_perso_next);
        _id_perso.classList.remove("selection");
        _id_perso.classList.add("noselection");
        _perso_next.classList.remove("noselection");
        _perso_next.classList.add("selection");
    }
    
    
}

function left(){
      var _class_selection = document.getElementsByClassName("selection")[0],
        _id = _class_selection.getAttribute('id'),
        _id_perso = document.getElementById(_id);
    _id_perso_next = parseInt(_class_selection.getAttribute('id').charAt(1)) - 1;
    console.log(_id_perso);
    if (_id_perso_next >= 1){
        var _perso_next = document.getElementById('p' + _id_perso_next);
        _id_perso.classList.remove("selection");
        _id_perso.classList.add("noselection");
        _perso_next.classList.remove("noselection");
        _perso_next.classList.add("selection");
    }
    
    
}

function enter(){
    var _class_selection = document.getElementsByClassName("selection")[0],
    _id_perso_next = parseInt(_class_selection.getAttribute('id').charAt(1)),
        _message_player = document.getElementById('message_player'),
        _sp = document.getElementById("select_player"),
        _ss = document.getElementById("select_stage");
    
    if (_message_player.innerHTML == "Player 1 select your perso"){
        pl1 = _id_perso_next;
        _message_player.innerHTML = "Player 2 select your perso";
    } else {
        pl2 = _id_perso_next;
        _sp.style.display = "none";
        _ss.style.display = "block";
    }
}

function move_selector(e){
    console.log(e.keyCode);
    /*if (e.keyCode == 40) 
        down();*/
    if (e.keyCode == 39)
        right();
    /*else if (e.keyCode == 38)
        up();*/
    else if (e.keyCode == 37)
        left();
    else if (e.keyCode == 13)
        enter();
}

addEventListener('keydown', move_selector);
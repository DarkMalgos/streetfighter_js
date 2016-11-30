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
    lock = false;

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

function player_right()
{
    var _class_selection = document.getElementsByClassName("selection")[0],
        _id = _class_selection.getAttribute('id'),
        _id_perso = document.getElementById(_id);
    _id_perso_next = parseInt(_class_selection.getAttribute('id').charAt(1)) + 1;
    console.log(_id);
    if (_id_perso_next <= 6){
        var _perso_next = document.getElementById('p' + _id_perso_next);
        _id_perso.classList.remove("selection");
        _id_perso.classList.add("noselection");
        _perso_next.classList.remove("noselection");
        _perso_next.classList.add("selection");
    } 
}

function player_left(){
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

function player_enter(){
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
        lock = true;
    }
}

function stage_down(){
        var _class_selection = document.getElementsByClassName("selection")[1],
        _id = _class_selection.getAttribute('id'),
        _id_stage = document.getElementById(_id),
    _id_stage_next = parseInt(_class_selection.getAttribute('id').charAt(5)) + 3;
    console.log(_id_stage_next);
    if (_id_stage_next <= 6){
        var _stage_next = document.getElementById('Stage' + _id_stage_next);
        _id_stage.classList.remove("selection");
        _id_stage.classList.add("noselection");
        _stage_next.classList.remove("noselection");
        _stage_next.classList.add("selection");
    }
}

function stage_up(){
        var _class_selection = document.getElementsByClassName("selection")[1],
        _id = _class_selection.getAttribute('id'),
        _id_stage = document.getElementById(_id),
    _id_stage_next = parseInt(_class_selection.getAttribute('id').charAt(5)) - 3;
    console.log(_id_stage_next);
    if (_id_stage_next >= 1){
        var _stage_next = document.getElementById('Stage' + _id_stage_next);
        _id_stage.classList.remove("selection");
        _id_stage.classList.add("noselection");
        _stage_next.classList.remove("noselection");
        _stage_next.classList.add("selection");
    }
}

function stage_right(){
        var _class_selection = document.getElementsByClassName("selection")[1],
        _id = _class_selection.getAttribute('id'),
        _id_stage = document.getElementById(_id),
    _id_stage_next = parseInt(_class_selection.getAttribute('id').charAt(5)) + 1;
    console.log(_id_stage_next);
    if (_id_stage_next <= 3){
        var _stage_next = document.getElementById('Stage' + _id_stage_next);
        _id_stage.classList.remove("selection");
        _id_stage.classList.add("noselection");
        _stage_next.classList.remove("noselection");
        _stage_next.classList.add("selection");
    }
    
    else if (_id_stage_next > 4 && _id_stage_next <= 6){
        var _stage_next = document.getElementById('Stage' + _id_stage_next);
        _id_stage.classList.remove("selection");
        _id_stage.classList.add("noselection");
        _stage_next.classList.remove("noselection");
        _stage_next.classList.add("selection");
    }
}

function stage_left(){
        var _class_selection = document.getElementsByClassName("selection")[1],
        _id = _class_selection.getAttribute('id'),
        _id_stage = document.getElementById(_id),
    _id_stage_next = parseInt(_class_selection.getAttribute('id').charAt(5)) - 1;
    console.log(_id_stage_next);
    if (_id_stage_next >= 4){
        var _stage_next = document.getElementById('Stage' + _id_stage_next);
        _id_stage.classList.remove("selection");
        _id_stage.classList.add("noselection");
        _stage_next.classList.remove("noselection");
        _stage_next.classList.add("selection");
    }
    
    else if (_id_stage_next >= 1 && _id_stage_next < 3){
        var _stage_next = document.getElementById('Stage' + _id_stage_next);
        _id_stage.classList.remove("selection");
        _id_stage.classList.add("noselection");
        _stage_next.classList.remove("noselection");
        _stage_next.classList.add("selection");
    }
}

function stage_enter(){
    var _class_selection = document.getElementsByClassName("selection")[1],
    _id_stage_next = parseInt(_class_selection.getAttribute('id').charAt(5)),
    _ss = document.getElementById("select_stage"),
    _f = document.getElementById("fight"),
    _p1 = document.getElementById("pl1"),
    _p2 = document.getElementById("pl2");
    
    stage = _id_stage_next;
    _ss.style.display = "none";
    _f.style.background = "url(images/selectstages/stage" + _id_stage_next + ".jpg) no-repeat";
    _f.style.backgroundSize = "100% 100%";
    _f.style.display = "block";
    _p1.classList.add("left-" + pl1);
    _p2.classList.add("right-" + pl2);
}

function move_selector(e){
    console.log(e.keyCode);
    if (lock == false){
        console.log("false");
        /*if (e.keyCode == 40) 
            down();*/
        if (e.keyCode == 39)
            player_right();
        /*else if (e.keyCode == 38)
            up();*/
        else if (e.keyCode == 37)
            player_left();
        else if (e.keyCode == 13)
            player_enter();
    } else {
         if (e.keyCode == 40) 
            stage_down();
        if (e.keyCode == 39)
            stage_right();
        else if (e.keyCode == 38)
            stage_up();
        else if (e.keyCode == 37)
            stage_left();
        else if (e.keyCode == 13)
            stage_enter();
    }
}

addEventListener('keydown', move_selector);
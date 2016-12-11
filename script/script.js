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
    pl1_life = 0,
    pl2 = 0,
    pl2_life = 0,
    stage,
    t = 4,
    interval;
    nb_po = 0,
    lock = 0;

function show_menu(){
    var _l = document.getElementById('logo'),
        _s = document.getElementById('start'),
        _e = document.getElementById('exit');
    
    _l.style.top = "0";
    _s.style.display = "block";
    _e.style.display = "block";
}

var l = document.getElementById("logo");
l.addEventListener('click', show_menu);

function disable_menu(){
    var _l = document.getElementById('logo'),
        _s = document.getElementById('start'),
        _e = document.getElementById('exit');
    
    _l.style.top = "30%";
    _s.style.display = "none";
    _e.style.display = "none";
}

var e = document.getElementById("exit");
e.addEventListener('click', disable_menu);

function show_select_player(){
    var _l = document.getElementById('menu'),
        _sp = document.getElementById('select_player');
    
    _l.style.display = "none";
    _sp.style.display = "block";
}

var s = document.getElementById("start");
s.addEventListener('click', show_select_player);

function back_select_player(){
    var _mp = document.getElementById("message_player"),
        _sp = document.getElementById("select_player"),
        _m = document.getElementById("menu"),
        _s = document.getElementById("start"),
        _e = document.getElementById("exit"),
        _l = document.getElementById("logo");
    
    if (_mp.innerHTML == "Player 2 select your perso"){
        _mp.innerHTML = "Player 1 select your perso";
    } else {
        _sp.style.display = "none";
        _m.style.display = "block";
        _l.style.top = "30%";
        _s.style.display = "none";
        _e.style.display = "none";
    }
}

var back_player = document.getElementsByClassName("fleche")[0];
back_player.addEventListener('click', back_select_player);

function back_select_stage (){
    var _ss = document.getElementById("select_stage"),
        _sp = document.getElementById("select_player");

        lock = 0;
        _ss.style.display = "none";
        _sp.style.display = "block";
}

var back_stage = document.getElementsByClassName("fleche")[1];
back_stage.addEventListener('click', back_select_stage);

function player_right()
{
    var _class_selection = document.getElementsByClassName("selection")[0],
        _id = _class_selection.getAttribute('id'),
        _id_perso = document.getElementById(_id),
    _id_perso_next = parseInt(_class_selection.getAttribute('id').charAt(1)) + 1;

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
        _id_perso = document.getElementById(_id),
    _id_perso_next = parseInt(_class_selection.getAttribute('id').charAt(1)) - 1;

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
        console.log("toto");
        pl2 = _id_perso_next;
        _sp.style.display = "none";
        _ss.style.display = "block";
        lock = 1;
    }
}

function stage_down(){
        var _class_selection = document.getElementsByClassName("selection")[1],
        _id = _class_selection.getAttribute('id'),
        _id_stage = document.getElementById(_id),
    _id_stage_next = parseInt(_class_selection.getAttribute('id').charAt(5)) + 3;

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

function start_fight(){
    var _timer = document.getElementById("Timer");
    
    --t;
    if (t <= -1){
        lock = 3;
        clearInterval(interval);
        _timer.style.display = "none";
    } else if (t > 0) {
        _timer.style.display = "block";
        _timer.style.background = "url(images/Sources/" + t + ".png) no-repeat center";
    } else {
        _timer.style.background = "url(images/Sources/fight.png) no-repeat center";
    }
}

function stage_enter(){
    var _class_selection = document.getElementsByClassName("selection")[1],
        _id_stage_next = parseInt(_class_selection.getAttribute('id').charAt(5)),
        _ss = document.getElementById("select_stage"),
        _f = document.getElementById("fight"),
        _p1 = document.getElementById("po1"),
        _p2 = document.getElementById("po6"),
        _timer = document.getElementById("Timer");
        
        
    _ss.style.display = "none";
    _f.style.display = "block";
    console.log(pl1);
    _p1.classList.add("left-" + pl1);
    _p2.classList.add("right-" + pl2);
    lock = 2;

    if (_id_stage_next == 2 || _id_stage_next == 3) {
        _f.style.background = "url(images/selectstages/stage" + _id_stage_next + ".png) no-repeat";
        _f.style.backgroundSize = "100% 100%";
    } else {
        _f.style.background = "url(images/selectstages/stage" + _id_stage_next + ".jpg) no-repeat";
        _f.style.backgroundSize = "100% 100%";
    }
    interval = setInterval(start_fight, 1000);
}

function pl1_right(){
    var _pl1 = document.getElementsByClassName("left-" + pl1)[0],
        _po = _pl1.getAttribute('id'),
        _po_bis = document.getElementById(_po),
        _nb_po2 = parseInt(_po.charAt(2)) + 1;
    
    if (_nb_po2 < 7){
        var _po_next = document.getElementById("po" + _nb_po2),
            _check_class = _po_next.getAttribute("class");
        if (_check_class != ("right-" + pl2)) {
            _po_bis.classList.remove("left-" + pl1);
            _po_next.classList.add("left-" + pl1);
        }
    }
}

function pl1_left(){
    var _pl1 = document.getElementsByClassName("left-" + pl1)[0],
        _po = _pl1.getAttribute('id'),
        _po_bis = document.getElementById(_po),
        _nb_po2 = parseInt(_po.charAt(2)) - 1;
    
    if (_nb_po2 > 0){
        var _po_next = document.getElementById("po" + _nb_po2),
            _check_class = _po_next.getAttribute("class");
        if (_check_class != ("right-" + pl2)) {
            _po_bis.classList.remove("left-" + pl1);
            _po_next.classList.add("left-" + pl1);
        }
    }
}

function pl1_punch(){
    console.log("titi");
    var _pl1 = document.getElementsByClassName("left-punch-" + pl1)[0],
        _po = _pl1.getAttribute('id'),
        _po_bis = document.getElementById(_po),
        _left = _po_bis.offsetLeft;
    
    _pl1.classList.remove("left-punch-" + pl1);
    _pl1.classList.add("left-" + pl1);
    _po_bis.style.left = _left - 80 + "px";
}

function pl1_kick(){
    console.log("titi");
    var _pl1 = document.getElementsByClassName("left-kick-" + pl1)[0],
        _po = _pl1.getAttribute('id'),
        _po_bis = document.getElementById(_po),
        _left = _po_bis.offsetLeft;
    
    _pl1.classList.remove("left-kick-" + pl1);
    _pl1.classList.add("left-" + pl1);
    _po_bis.style.left = _left - 80 + "px";
}

function pl1_t(){
    console.log("toto");
    var _pl1 = document.getElementsByClassName("left-" + pl1)[0],
        _po = _pl1.getAttribute('id'),
        _po_bis = document.getElementById(_po),
        _left = _po_bis.offsetLeft,
        _ko = document.getElementById("Timer"),
        _re = document.getElementById("restart"),
        _e2 = document.getElementById("exit2"),
        _pl2 = document.getElementsByClassName("right-" + pl2)[0],
        _pl2_life = document.getElementById("pl2-life");
    
    _pl1.classList.remove("left-" + pl1);
    _pl1.classList.add("left-punch-" + pl1);
    _po_bis.style.left = _left + 80 + "px";
    if ((_pl1.offsetLeft + 220) >= _pl2.offsetLeft){
        ++pl2_life;
        if (pl2_life == 1){
            _pl2_life.style.display = "inline-block";
        } else if (pl2_life == 13){
            _pl2_life.style.background = "url(images/Sources/right-life" + pl2_life + ".png)";
            _pl2_life.style.backgroundSize = "100% 100%";
            _ko.style.display = "block";
            _ko.style.top = "35%";
            _ko.style.background = "url(images/Sources/ko.png) no-repeat center";
            _re.style.display = "block";
            _e2.style.display = "block";
            lock = 4;  
        } else {
            _pl2_life.style.background = "url(images/Sources/right-life" + pl2_life + ".png)";
            _pl2_life.style.backgroundSize = "100% 100%";
        }
    }
    setTimeout(pl1_punch, 500);
}

function pl1_y(){
    var _pl1 = document.getElementsByClassName("left-" + pl1)[0],
        _po = _pl1.getAttribute('id'),
        _po_bis = document.getElementById(_po),
        _left = _po_bis.offsetLeft,
        _ko = document.getElementById("Timer"),
        _re = document.getElementById("restart"),
        _e2 = document.getElementById("exit2"),
        _pl2_life = document.getElementById("pl2-life"),
        _pl2 = document.getElementsByClassName("right-" + pl2)[0];
    
    _pl1.classList.remove("left-" + pl1);
    _pl1.classList.add("left-kick-" + pl1);
    _po_bis.style.left = _left + 80 + "px";
    if ((_pl1.offsetLeft + 220) >= _pl2.offsetLeft){
        ++pl2_life;
        if (pl2_life == 1){
            _pl2_life.style.display = "inline-block";
        } else if (pl2_life == 13){
            _pl2_life.style.background = "url(images/Sources/right-life" + pl2_life + ".png)";
            _pl2_life.style.backgroundSize = "100% 100%";
            _ko.style.display = "block";
            _ko.style.top = "35%";
            _ko.style.background = "url(images/Sources/ko.png) no-repeat center";
            _re.style.display = "block";
            _e2.style.display = "block";
            lock = 4;  
        } else {
            _pl2_life.style.background = "url(images/Sources/right-life" + pl2_life + ".png)";
            _pl2_life.style.backgroundSize = "100% 100%";
        }
    }
    setTimeout(pl1_kick, 500);
}

function pl2_punch(){
    var _pl2 = document.getElementsByClassName("right-punch-" + pl2)[0],
        _po = _pl2.getAttribute('id'),
        _po_bis = document.getElementById(_po),
        _left = _po_bis.offsetLeft;
    
    _pl2.classList.remove("right-punch-" + pl2);
    _pl2.classList.add("right-" + pl2);
    _po_bis.style.left = _left + 100 + "px";
}

function pl2_kick(){
    console.log("titi");
    var _pl2 = document.getElementsByClassName("right-kick-" + pl2)[0],
        _po = _pl2.getAttribute('id'),
        _po_bis = document.getElementById(_po),
        _left = _po_bis.offsetLeft;
    
    _pl2.classList.remove("right-kick-" + pl2);
    _pl2.classList.add("right-" + pl2);
    _po_bis.style.left = _left + 100 + "px";
}

function pl2_t(){
    console.log("toto");
    var _pl2 = document.getElementsByClassName("right-" + pl2)[0],
        _po = _pl2.getAttribute('id'),
        _po_bis = document.getElementById(_po),
        _left = _po_bis.offsetLeft,
        _ko = document.getElementById("Timer"),
        _re = document.getElementById("restart"),
        _e2 = document.getElementById("exit2"),
        _pl1_life = document.getElementById("pl1-life"),
        _pl1 = document.getElementsByClassName("left-" + pl1)[0];
    
    _pl2.classList.remove("right-" + pl2);
    _pl2.classList.add("right-punch-" + pl2);
    _po_bis.style.left = _left - 100 + "px";
    if (_pl2.offsetLeft <= (_pl1.offsetLeft + 220)){
        ++pl1_life;
        if (pl1_life == 1){
            _pl1_life.style.display = "inline-block";
        } else if (pl1_life == 13){
            _pl1_life.style.background = "url(images/Sources/left-life" + pl1_life + ".png)";
            _pl1_life.style.backgroundSize = "100% 100%";
            _ko.style.display = "block";
            _ko.style.top = "35%";
            _ko.style.background = "url(images/Sources/ko.png) no-repeat center";
            _re.style.display = "block";
            _e2.style.display = "block";
            lock = 4;  
        } else {
            _pl1_life.style.background = "url(images/Sources/left-life" + pl1_life + ".png)";
            _pl1_life.style.backgroundSize = "100% 100%";
        }
    }
    setTimeout(pl2_punch, 500);
}

function pl2_y(){
    console.log("toto");
    var _pl2 = document.getElementsByClassName("right-" + pl2)[0],
        _po = _pl2.getAttribute('id'),
        _po_bis = document.getElementById(_po),
        _left = _po_bis.offsetLeft,
        _ko = document.getElementById("Timer"),
        _re = document.getElementById("restart"),
        _e2 = document.getElementById("exit2"),
        _pl1_life = document.getElementById("pl1-life"),
        _pl1 = document.getElementsByClassName("left-" + pl1)[0];
    
    _pl2.classList.remove("right-" + pl2);
    _pl2.classList.add("right-kick-" + pl2);
    _po_bis.style.left = _left - 100 + "px";
    if (_pl2.offsetLeft <= (_pl1.offsetLeft + 220)){
        ++pl1_life;
        if (pl1_life == 1){
            _pl2_life.style.display = "inline-block";
        } else if (pl1_life == 13){
            _pl1_life.style.background = "url(/images/Sources/left-life" + pl1_life + ".png)";
            _pl1_life.style.backgroundSize = "100% 100%";
            _ko.style.display = "block";
            _ko.style.top = "35%";
            _ko.style.background = "url(images/Sources/ko.png) no-repeat center";
            _ko.style.display = "block";
            _re.style.display = "block";
            _e2.style.display = "block";
            lock = 4;  
        } else {
            _pl1_life.style.background = "url(images/Sources/left-life" + pl1_life + ".png)";
            _pl1_life.style.backgroundSize = "100% 100%";
        }
    }
    setTimeout(pl2_kick, 500);
}

function pl2_right(){
    var _pl2 = document.getElementsByClassName("right-" + pl2)[0],
        _po = _pl2.getAttribute('id'),
        _po_bis = document.getElementById(_po),
        _nb_po = parseInt(_po.charAt(2)) + 1;  
    if (_nb_po < 7){
        var _po_next = document.getElementById("po" + _nb_po),
            _check_class = _po_next.getAttribute("class");
        if (_check_class != ("left-" + pl1)) {
            _po_bis.classList.remove("right-" + pl2);
            _po_next.classList.add("right-" + pl2);
        }
    }
}

function pl2_left(){
    var _pl2 = document.getElementsByClassName("right-" + pl2)[0],
        _po = _pl2.getAttribute('id'),
        _po_bis = document.getElementById(_po),
        _nb_po = parseInt(_po.charAt(2)) - 1;
    if (_nb_po > 0){
        var _po_next = document.getElementById("po" + _nb_po),
            _check_class = _po_next.getAttribute("class");

        if (_check_class != ("left-" + pl1)) {
            _po_bis.classList.remove("right-" + pl2);
            _po_next.classList.add("right-" + pl2);
        }
    }
}


function move_selector(e){
    console.log(e.keyCode);
    if (lock == 0){
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
    } else if (lock == 1) {
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
    } else if (lock == 3){
        /*if (e.keyCode == 40) 
            pl2_down();
        else*/ if (e.keyCode == 39){
            pl2_right();
        }/*else if (e.keyCode == 38)
            pl2_up();*/
        else if (e.keyCode == 37)
            pl2_left();
        /*else if (e.keyCode == 83) 
            pl1_down();*/
        else if (e.keyCode == 68){
            pl1_right();
        }/*else if (e.keyCode == 90)
            pl1_up();*/
        else if (e.keyCode == 81){
            pl1_left();
        }
        else if (e.keyCode == 84){
            pl1_t();
        }
        else if (e.keyCode == 89){
            pl1_y();
        }
        else if (e.keyCode == 18){
            pl2_t();
        }
        else if (e.keyCode == 16){
            pl2_y();
        }
    }
}

addEventListener('keydown', move_selector);

function restart(){
    var _f = document.getElementById('fight'),
        _ko = document.getElementById("Timer"),
        _re = document.getElementById("restart"),
        _e2 = document.getElementById("exit2"),
        _pl1_life = document.getElementById("pl1-life"),
        _pl2_life = document.getElementById("pl2-life"),
        _pl1 = document.getElementsByClassName("left-" + pl1)[0],
        _pl2 = document.getElementsByClassName("right-" + pl2)[0],
        _mp = document.getElementById('message_player'),
        _sp = document.getElementById('select_player');
    
    lock = 0;
    t = 4;
    pl1_life = 0;
    pl2_life = 0;
    _ko.style.display = "none";
    _re.style.display = "none";
    _e2.style.display = "none";
    _pl1_life.style.display = "none";
    _pl2_life.style.display = "none";
    _pl1.classList.remove("left-" + pl1);
    _pl2.classList.remove("right-" + pl2);
    _f.style.display = "none";
    _mp.innerHTML = "Player 1 select your perso";
    _sp.style.display = "block";
    
}

var r = document.getElementById("restart");
r.addEventListener('click', restart);

function exit(){
    var _l = document.getElementById('menu'),
        _ko = document.getElementById("Timer"),
        _re = document.getElementById("restart"),
        _e2 = document.getElementById("exit2"),
        _pl1_life = document.getElementById("pl1-life"),
        _pl2_life = document.getElementById("pl2-life"),
        _pl1 = document.getElementsByClassName("left-" + pl1)[0],
        _pl2 = document.getElementsByClassName("right-" + pl2)[0],
        _mp = document.getElementById('message_player'),
        _f = document.getElementById('fight');
    
    lock = 0;
    t = 4;
    pl1_life = 0;
    pl2_life = 0;
    _ko.style.display = "none";
    _re.style.display = "none";
    _e2.style.display = "none";
    _pl1_life.style.background = "url(images/Sources/left-life1.png)"
    _pl1_life.style.backgroundSize = "100% 100%";
    _pl1_life.style.display = "none";
    _pl2_life.style.background = "url(images/Sources/right-life1.png)"
    _pl2_life.style.backgroundSize = "100% 100%";
    _pl2_life.style.display = "none";
    _pl1.classList.remove("left-" + pl1);
    _pl2.classList.remove("right-" + pl2);
    _f.style.display = "none";
    _mp.innerHTML = "Player 1 select your perso";
    _l.style.display = "block";
    disable_menu();
}

var e2 = document.getElementById("exit2");
e2.addEventListener('click', exit);
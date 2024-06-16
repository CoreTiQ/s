//============================================================================
var button = {} , buttonconst = { id : 0 } ;
//============================================================================
function ButtonStats (xp , yp , rd , nam , mar) {
    
    var obj = {
        
        x : xp ,
        y : yp ,
        r : rd ,
        
        act : 0 ,
        mark : mar ,
        name : nam ,
        id : buttonconst.id ,
    } ;
    
    button[buttonconst.id] = obj ;
    buttonconst.id += 1 ;
}
//============================================================================
function MakeButtons () {
    
    var rd = 50 ;
    
    ButtonStats (650  , 500 , rd , "Auto " , "P") ;
    ButtonStats (800  , 560 , rd , " New " , ">") ;
    ButtonStats (500  , 560 , rd , " Old " , "<") ;
    ButtonStats (100  , 650 , rd , "Sound" , "S") ; button[buttonconst.id - 1].act = 1 ;
    ButtonStats (1400 , 650 , rd , "Fast " , "+") ;
    ButtonStats (1150 , 650 , rd , "Slow " , "-") ;
    ButtonStats (210  , 690 , rd - 15 , " Key " , "K") ; button[buttonconst.id - 1].act = 1 ;
    ButtonStats (1430 , 110 , rd - 15 , " ESC " , "^") ;
    ButtonStats (90 , 110 , rd - 8 , "Save " , "@") ;
}
//============================================================================
function DrawButtons () {
    
    for (var key in button) {
        
        if (button[key].act == 0)
            DrawFullArc (button[key].x , button[key].y , button[key].r , "#bababa" , "#484848") ;
        else
            DrawFullArc (button[key].x , button[key].y , button[key].r , "#4dff54" , "#00800f") ;
        
        if (button[key].name == " New " || button[key].name == " Old " || button[key].name == "Fast " || button[key].name == "Slow " || button[key].name == " ESC " || button[key].name == "Save ")
            button[key].act = 0 ;
        
        DrawFullText (button[key].mark , button[key].x - 7 , button[key].y + 10 , "Black" , "Black" , "30px Ariel") ;
    }
    
    DrawFullRect (1245 , 620 , 60 , 60 , "rgba(245, 255, 0, 0.5)" , "rgba(190, 0, 0, 0.5)") ;
    DrawFullText (google.wait , 1245 + 14 , 620 + 40 , "black" , "black") ;
}
//============================================================================
function ButtonCollisions () {
    
    for (var key in button) {
        
        var collision = CheckMouseButtonCollisions (button[key]) ;
        
        if (collision == 1) {
            
            DoButtonJob (button[key]) ;
            break ;
        }
    }
}
//============================================================================
function CheckMouseButtonCollisions (obj) {
    
    var xd = obj.x - mouse.x ;
    var yd = obj.y - mouse.y ;
    var dis = Math.sqrt((xd * xd) + (yd * yd)) ;
    
    if (dis <= obj.r)
        return 1 ;
    else
        return 0 ;
}
//============================================================================
function DoButtonJob (obj , name) {
    
    if (obj.name == "Auto ") {
        
        if (google.auto == 0) { google.auto = 1 ; obj.act = 1 ; MakeSound (mouse.numbers[google.ind]) ; }
        else                  { google.auto = 0 ; obj.act = 0 ; ClearAllSounds () ; }
        
        google.count = 0 ;
    }
    else if (obj.name == " New ") {
        
        SkipRight () ;
        ClearAllSounds () ;
        obj.act = 1 ;
    }
    else if (obj.name == " Old ") {
        
        SkipLeft () ;
        ClearAllSounds () ;
        obj.act = 1 ;
    }
    else if (obj.name == "Sound") {
        
        if (google.sound == 0) { google.sound = 1 ; obj.act = 1 ; }
        else                   { google.sound = 0 ; obj.act = 0 ; ClearAllSounds () ; }
    }
    else if (obj.name == "Fast ") {  // opposite than name but who care :P
        
        google.wait += 1 ;
        if (google.wait > 99) google.wait = 99 ;
        obj.act = 1 ;
        
        google.count = 0 ;
    }
    else if (obj.name == "Slow ") {  // opposite than name but who care :P
        
        google.wait -= 1 ;
        if (google.wait < 2) google.wait = 2 ;
        obj.act = 1 ;
        
        google.count = 0 ;
    }
    else if (obj.name == " Key ") {
        
        if (game.keys == 0) { game.keys = 1 ; obj.act = 1 ; }
        else                { game.keys = 0 ; obj.act = 0 ; }
    }
    else if (obj.name == " ESC ") {
        
        TakeInput () ;
        obj.act = 1 ;
    }
    else if (obj.name == "Save ") {
        
        SaveData () ;
        obj.act = 1 ;
    }
}
//============================================================================
function SaveData () {
    
    localStorage.setItem ("SoundButton" , google.sound) ;
    localStorage.setItem ("KeyButton" , game.keys) ;
    localStorage.setItem ("WaitTime" , google.wait) ;
    localStorage.setItem ("Code" , mouse.numbers) ;
    localStorage.setItem ("Indx" , google.ind) ;
    localStorage.setItem ("Box" , mouse.ind) ;
}
//============================================================================
function ReloadData () {
    
    var sond = false , key = false , wait = false , code = false , indx = false , box = false ;
    if (localStorage.getItem ("SoundButton")) sond = localStorage.getItem ("SoundButton") ;
    if (localStorage.getItem ("KeyButton"))   key = localStorage.getItem ("KeyButton") ;
    if (localStorage.getItem ("WaitTime"))    wait = localStorage.getItem ("WaitTime") ;
    if (localStorage.getItem ("Code"))        code = localStorage.getItem ("Code") ;
    if (localStorage.getItem ("Indx"))        indx = localStorage.getItem ("Indx") ;
    if (localStorage.getItem ("Box"))         box = localStorage.getItem ("Box") ;
    
    if (sond && sond == "0") { google.sound = 0 ; button[3].act = 0 ; }
    if (key && key == "0") { google.key = 0 ; button[6].act = 0 ; }
    if (wait) { google.wait = parseInt(wait) ; }
    if (code) { mouse.txts = code ; mouse.numbers = mouse.txts.split (',').map(Number) ; }
    if (indx) { google.ind = parseInt(indx) ; google.count = 0 ; }
    if (box) { mouse.ind = parseInt(box) ; }
}
//============================================================================

//============================================================================

//============================================================================

//============================================================================

//============================================================================

//============================================================================








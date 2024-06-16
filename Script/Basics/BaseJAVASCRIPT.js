//##############################################################################################################################
//                                                   Main vars area
//##############################################################################################################################
var ctc = document.getElementById("canvas") ;
var ctx = ctc.getContext("2d") ;
var Width = ctc.width , Height = ctc.height , Intervaling = 0 ;
//##############################################################################################################################
//                                                  Global vars area
//##############################################################################################################################
var canvas = { x : 0 , y : 0 } ;
//##############################################################################################################################
//                                                   Main loop area
//##############################################################################################################################
function MainGame () {
    
    InitialValue () ;
    
    DrawButtons () ;
    DrawTheArray () ;
    DoGoogleSound () ;
    CheckAndPlaySounds () ;
}
//##############################################################################################################################
//                                            Run Once and clear frames area
//############################################################################################################################## 
function InitialValue () {
    
    ctx.clearRect (canvas.x , canvas.y , Width , Height) ;
	
}
//=========================================================================
function MakeOnce () {
    
	ctx.lineWidth = 3 ;
	ctx.font = "30px Serif" ;  // "30px Arial"
	
    MakeButtons () ;
    ReloadData () ;
    Intervaling = setInterval (MainGame , game.fps) ;
}
//##############################################################################################################################
//                                                User's functions area
//############################################################################################################################## 
// 1) MoveObjectToPointObject () ;
// 2) TranslateCanvas () ;
// 3) RandomN () ;
// 4) DrawFullRect () ;
// 5) DrawFullArc () ;
// 6) DrawFullText () ;
//=============================================================================================================================
//=============================================================================================================================
function MoveObjectToPointObject (obj , dest , dis) { // input ###
    
	// how to use :
	// pass obj which will move towards dest , obj must have x , y , spd while dest must have x , y .
    // dis is when the obj will stop moveing towards target since it is close enough (based on dis) .
	
    var lengDis = 1 ;
    if (dis)
        lengDis = dis ;
    
    var xsign = (dest.x > obj.x)? 1 : -1 ;
    var ysign = (dest.y > obj.y)? 1 : -1 ;
    
    var X = dest.x - obj.x ;
    var Y = dest.y - obj.y ;
    
    if (X == 0) X = 0.1 ;
    var ang = Math.abs (Math.atan (Y/X)) ;
    var dist = Math.sqrt ((X * X) + (Y * Y)) ;
    
    if (dist > lengDis) {
        
        obj.x += obj.spd * Math.cos (ang) * xsign ;
        obj.y += obj.spd * Math.sin (ang) * ysign ;
    }
}
//=============================================================================================================================
//=============================================================================================================================
function TranslateCanvas (obj) { // input ###

    // how to use :
	// Pass object and the camera will be locked on it , obj must have x , y .
    
    var tx = canvas.x - (obj.x - (Width / 2)) ;
    var ty = canvas.y - (obj.y - (Height / 2)) ;
    
    ctx.translate (tx , ty) ;
    
    canvas.x = obj.x - (Width / 2) ;
    canvas.y = obj.y - (Height / 2) ;
	
}
//=============================================================================================================================
//=============================================================================================================================
function RandomN (min , max , exc , typ) { // input ###
    
	// how to use :
    // min and max r the range (they're included) , exc is a number won't be included , typ is either 1 for odd or 2 for even .
    // no -ve values tho .
    
    var rand = 0 ;
    var xx = true ;
    
    while (xx == true) {
    
        if (min >= 0)
            rand = Math.floor (Math.random () * (max - min + 1)) + min ;
        else 
            rand = Math.floor (Math.random () * (max + (max + min - 2))) + min ;
        
        xx = false ;
        
        if (rand == exc) xx = true ;
        if (typ == 1) { if (rand % 2 != 0) ; else xx = true ; }
        else if (typ == 2) { if (rand % 2 == 0) ; else xx = true ; }
    }
    
    return rand ;
}
//=============================================================================================================================
//=============================================================================================================================
function DrawFullRect (x , y , w , h , col , bor) { // input ###
    
    // how to use :
    // Draw a rectangle with border , if u dont pass colors its uses the defualt .
    
    ctx.fillStyle = "orange" ;
    ctx.strokeStyle = "black" ;
    
    if (col)
        ctx.fillStyle = col ;
    if (bor)
        ctx.strokeStyle = bor ;
    
    ctx.fillRect (x , y , w , h) ;
    ctx.strokeRect (x , y , w , h) ;
    
    ctx.strokeStyle = "black" ;
}
//=============================================================================================================================
//=============================================================================================================================
function DrawFullArc (x , y , r , col , bor) { // input ###
    
    // how to use :
    // Draw a circle with border , if u dont pass colors its uses the defualt .
    
    ctx.fillStyle = "orange" ;
    ctx.strokeStyle = "black" ;
    
    if (col)
        ctx.fillStyle = col ;
    if (bor)
        ctx.strokeStyle = bor ;
    
    ctx.beginPath () ;
    
    ctx.arc (x , y , r , 0 , 360) ;
    
    ctx.fill () ;
    ctx.stroke () ;
    
    ctx.closePath () ;
    
    ctx.strokeStyle = "black" ;
}
//=============================================================================================================================
//=============================================================================================================================
function DrawFullText (txt , x , y , col , bor , font) { // input ###
    
    // how to use :
    // Draw a Text with border , if u dont pass colors/font its uses the defualt .
    
    ctx.save () ;
    
    ctx.lineWidth += 1 ;
    ctx.fillStyle = "yellow" ;
    ctx.strokeStyle = "red" ;
    
    if (col)
        ctx.fillStyle = col ;
    if (bor)
        ctx.strokeStyle = bor ;
    if (font)
        ctx.font = font ;
    
    ctx.strokeText (txt , x , y) ;
    ctx.fillText (txt , x , y) ;
    
    ctx.restore () ;
}
//##############################################################################################################################
//                                                      Empty area
//##############################################################################################################################
















//##############################################################################################################################
//                                                          End
//##############################################################################################################################
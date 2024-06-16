//==========================================================================
var google = { ind : 0 , auto : 0 , wait : 3 , count : 0 , sound : 1 } ;
var probar = { x : 43 , y : 20 , w : 1200 , h : 20 } ;
var lights = { x : 300 , y : 360 , w : 120 , h : 20 , no : 4 , dis : 230 } ;
//==========================================================================
// var x = "1" , y = 2 ; for (var i = 0 ; i < 400 ; i++) { x += "," + y ; y++ } console.log (x) ;
function DrawTheArray () {
    
    var coa = "#00e2ff" , cob = "#0a00ff" ;
    var fontt = "120px Ariel" ;
    var miss = "##" ;
    var spc = " - " ;
    var start = "=>  " ;
    
    var xx = 90 ;
    var yy = 300 ;
    
    
    if (mouse.ind <= mouse.numbers.length - 4)
        DrawFullText (start + mouse.numbers[mouse.ind] + spc + mouse.numbers[mouse.ind + 1] + spc + mouse.numbers[mouse.ind + 2] + spc + mouse.numbers[mouse.ind + 3] , xx , yy , coa , cob , fontt) ;
    
    else if (mouse.ind == mouse.numbers.length - 3)
        DrawFullText (start + mouse.numbers[mouse.ind] + spc + mouse.numbers[mouse.ind + 1] + spc + mouse.numbers[mouse.ind + 2] + spc + miss , xx , yy , coa , cob , fontt) ;
    
    else if (mouse.ind == mouse.numbers.length - 2)
        DrawFullText (start + mouse.numbers[mouse.ind] + spc + mouse.numbers[mouse.ind + 1]+ spc + miss + spc + miss , xx , yy , coa , cob , fontt) ;
    
    else if (mouse.ind == mouse.numbers.length - 1)
        DrawFullText (start + mouse.numbers[mouse.ind] + spc + miss + spc + miss + spc + miss , xx , yy , coa , cob , fontt) ;
    
    
    if (mouse.ind >= 4)
        DrawFullText (start + mouse.numbers[mouse.ind - 4] + spc + mouse.numbers[mouse.ind - 3] + spc + mouse.numbers[mouse.ind -2] + spc + mouse.numbers[mouse.ind - 1] , 200 , 130 , "rgba(160, 160, 160, 0.5)" , "rgba(83, 83, 83, 0.5)" , "70px Ariel") ;
    else
        DrawFullText (start + miss + spc + miss + spc + miss + spc + miss , 200 , 130 , "rgba(160, 160, 160, 0.5)" , "rgba(83, 83, 83, 0.5)" , "70px Ariel") ;
    
    DrawFullRect (xx - 40 , yy - 120 , 1320 , 164 , "rgba(0, 255, 39, 0.05)" , "rgba(5, 132, 0, 0.8)") ;
    
    for (var i = 0 ; i < lights.no ; i++) {
        
        if (google.ind % 4 == i)
            DrawFullRect (lights.x + (lights.dis*i) , lights.y , lights.w , lights.h , "#27ff00") ;
        else
            DrawFullRect (lights.x + (lights.dis*i) , lights.y , lights.w , lights.h , "#838383") ;
    }
    
    var ratio = (google.ind / (mouse.numbers.length - 1)) ;
    if (ratio < 0) ratio = 0 ; if (ratio > 1) ratio = 1 ;
        
    DrawFullRect (probar.x , probar.y , probar.w * ratio , probar.h , "#00ff00") ;
    ctx.strokeRect (probar.x , probar.y , probar.w , probar.h) ;
    DrawFullText ("[ " + google.ind + " / " + mouse.numbers.length + " ]" , probar.x + probar.w + 34 , probar.y + 20 , "#00ed00" , "black") ;
    
}
//==========================================================================
function DoGoogleSound () {
    
    if (google.auto == 1) {
        
        if (google.count >= google.wait * 20 && google.ind < mouse.numbers.length - 1) {
            
            google.ind += 1 ;
            google.count = 0 ;
            MakeSound (mouse.numbers[google.ind]) ;
            
            if (google.ind > mouse.ind + 3)
                mouse.ind = google.ind ;
        }
        else
            google.count += 1 ;
    }
}
//==========================================================================

//==========================================================================

//==========================================================================

//==========================================================================

//==========================================================================

//==========================================================================

//==========================================================================

//==========================================================================

//==========================================================================

//==========================================================================












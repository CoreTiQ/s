//==================================================================
var game = { fps : 60 , keys : 1 , gg : "" } ;
//==================================================================
function ClearInputText () {                  // console.log(game.gg) ;
    
    game.gg = game.gg.toString () ;           // console.log(game.gg) ;
    game.gg = game.gg.split('') ;             // console.log(game.gg) ;
    game.gg = game.gg.toString () ;           // console.log(game.gg) ;
    game.gg = game.gg.split(',') ;            // console.log(game.gg) ;
    game.gg = game.gg.filter(RemoveExtra) ;   // console.log(game.gg) ;
    
    for (var i = 0 ; i < game.gg.length ; i++) {
        
        if (game.gg[i] == '_') {
            for (var j = i + 1 ; j < game.gg.length ; j++) {
                
                if (game.gg[j] == "\r" || game.gg[j] == "\n") {
                    game.gg.splice(j , 1) ;
                    break ;
                }
                else
                    i++ ;
            }
        }
        else {
            game.gg.splice(i , 1) ;
            i-- ;
        }
    }                                 // console.log(game.gg) ;
    game.gg.splice(0 , 1) ;           // console.log(game.gg) ;
    game.gg = game.gg.join ('') ;     // console.log(game.gg) ;
    game.gg = game.gg.split('_') ;    // console.log(game.gg) ;
    game.gg = game.gg.toString () ;   // console.log(game.gg) ;
    
    
    function RemoveExtra (elm) {
        
        if (elm == "0" || elm == "1" || elm == "2" || elm == "3" || elm == "4" || elm == "5" || elm == "6" || elm == "7" || elm == "8" || elm == "9" || elm == "_" || elm == "\r" || elm == "\n")
            return elm ;
    }
}
//==================================================================
MakeOnce () ;
//==================================================================



// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);
// 
// function checkAdult(age) {
//   return age >= 18;
// }




// const ages = [32, 33, 16, 40]; h-f3,_dl324kfl3,,k2  "fj33 3,3"  ;





















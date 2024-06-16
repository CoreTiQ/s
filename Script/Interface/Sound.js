//=====================================================================================
var sounds = {} ;
var soundsconst = { id : 0 } ;
//=====================================================================================
function MakeSound(typ, dly) {
    if (google.sound == 1) {
        var ddd = dly || 0;
        sounds[soundsconst.id] = {
            sound: 0,
            type: 0,
            wait: ddd,
            done: 0
        };

        var audioSrc = "Audios/" + typ + ".mp3";
        sounds[soundsconst.id].sound = new Audio(audioSrc);
        sounds[soundsconst.id].type = typ;

        if (typ >= 1 && typ <= 211) {
            sounds[soundsconst.id].sound.src = audioSrc;
            sounds[soundsconst.id].sound.playbackRate = 5.0; // زيادة سرعة التشغيل إلى الضعف (x2)
        } else {
            console.log("Invalid sound type: " + typ);
        }

        sounds[soundsconst.id].sound.play();
    }
}

//=====================================================================================  MakeSound (21) ;
function CheckAndPlaySounds () { if (google.sound == 1) {
    
    var del = 13 , def = 1 , typ = 0 , ext = 15 , tim = 0 ;
    
    for (var key in sounds) {
        
        if (sounds[key].sound.currentTime == 0) {
            
            sounds[key].sound.playbackRate = 1.2 ;
            sounds[key].sound.currentTime = 0 ;
            sounds[key].sound.volume = 1 ;
            typ = sounds[key].type ;
            tim = sounds[key].wait ;
            
            
            
            if (sounds[key].type == 0) {
                if (sounds[key].wait == 0) {
                    sounds[key].sound.currentTime = 0.5 ;
                    sounds[key].sound.volume = 0.7 ;
                }
            }
            
            
            
            if ((typ >= 1 && typ < 21) || typ == 30 || typ == 40 || typ == 50 || typ == 60 || typ == 70 || typ == 80 || typ == 90 || typ == 100 || typ == 200 || typ == 300) { 
                ; 
            }
            
            if (sounds[key].wait <= 0)
                sounds[key].sound.play () ;
            else
                sounds[key].wait -= 1 ;
        }
        
        
        
        if (sounds[key].sound.ended == 1) {
            
            sounds[key].sound.pause () ;
            delete sounds[key] ;
        }
    }
}}
//=====================================================================================
function ClearAllSounds () {
    
    for (var key in sounds) {
        
        sounds[key].sound.pause () ;
        delete sounds[key] ;
    }
}
//=====================================================================================

//=====================================================================================

//=====================================================================================

//=====================================================================================

//=====================================================================================

//=====================================================================================


















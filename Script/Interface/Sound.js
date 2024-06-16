//=====================================================================================
var sounds = {} ;
var soundsconst = { id : 0 } ;
//=====================================================================================
function MakeSound (typ , dly) { if (google.sound == 1) {
    
    var ddd = 0 ;
    if (dly) ddd = dly ;
    
    sounds[soundsconst.id] = { sound : 0 , type : 0 , wait : ddd , done : 0 } ;
    
    sounds[soundsconst.id].sound = new Audio () ;
    sounds[soundsconst.id].type = typ ;
    
         if (typ == 300)
             sounds[soundsconst.id].sound.src = "Audios/And.mp3" ;
    else if (typ == 1)
             sounds[soundsconst.id].sound.src = "Audios/1.mp3" ;
    else if (typ == 2)
             sounds[soundsconst.id].sound.src = "Audios/2.mp3" ;
    else if (typ == 3)
             sounds[soundsconst.id].sound.src = "Audios/3.mp3" ;
    else if (typ == 4)
             sounds[soundsconst.id].sound.src = "Audios/4.mp3" ;
    else if (typ == 5)
             sounds[soundsconst.id].sound.src = "Audios/5.mp3" ;
    else if (typ == 6)
             sounds[soundsconst.id].sound.src = "Audios/6.mp3" ;
    else if (typ == 7)
             sounds[soundsconst.id].sound.src = "Audios/7.mp3" ;
    else if (typ == 8)
             sounds[soundsconst.id].sound.src = "Audios/8.mp3" ;
    else if (typ == 9)
             sounds[soundsconst.id].sound.src = "Audios/9.mp3" ;
    else if (typ == 10)
             sounds[soundsconst.id].sound.src = "Audios/10.mp3" ;
    else if (typ == 11)
             sounds[soundsconst.id].sound.src = "Audios/11.mp3" ;
    else if (typ == 12)
             sounds[soundsconst.id].sound.src = "Audios/12.mp3" ;
    else if (typ == 13)
             sounds[soundsconst.id].sound.src = "Audios/13.mp3" ;
    else if (typ == 14)
             sounds[soundsconst.id].sound.src = "Audios/14.mp3" ;
    else if (typ == 15)
             sounds[soundsconst.id].sound.src = "Audios/15.mp3" ;
    else if (typ == 16)
             sounds[soundsconst.id].sound.src = "Audios/16.mp3" ;
    else if (typ == 17)
             sounds[soundsconst.id].sound.src = "Audios/17.mp3" ;
    else if (typ == 18)
             sounds[soundsconst.id].sound.src = "Audios/18.mp3" ;
    else if (typ == 19)
             sounds[soundsconst.id].sound.src = "Audios/19.mp3" ;
    else if (typ == 20)
             sounds[soundsconst.id].sound.src = "Audios/20.mp3" ;    
    else if (typ == 21)
             sounds[soundsconst.id].sound.src = "Audios/21.mp3" ;    
    else if (typ == 22)
             sounds[soundsconst.id].sound.src = "Audios/22.mp3" ;    
            else if (typ == 23)
             sounds[soundsconst.id].sound.src = "Audios/23.mp3" ;    
            else if (typ == 24)
             sounds[soundsconst.id].sound.src = "Audios/24.mp3" ;    
            else if (typ == 25)
             sounds[soundsconst.id].sound.src = "Audios/25.mp3" ;    
            else if (typ == 26)
             sounds[soundsconst.id].sound.src = "Audios/26.mp3" ;    
            else if (typ == 27)
             sounds[soundsconst.id].sound.src = "Audios/27.mp3" ;    
            else if (typ == 28)
             sounds[soundsconst.id].sound.src = "Audios/28.mp3" ;    
            else if (typ == 29)
             sounds[soundsconst.id].sound.src = "Audios/29.mp3" ;
            else if (typ == 30)
             sounds[soundsconst.id].sound.src = "Audios/30.mp3" ;
             else if (typ == 31)
             sounds[soundsconst.id].sound.src = "Audios/31.mp3" ;
             else if (typ == 32)
             sounds[soundsconst.id].sound.src = "Audios/32.mp3" ;
             else if (typ == 33)
             sounds[soundsconst.id].sound.src = "Audios/33.mp3" ;
             else if (typ == 34)
             sounds[soundsconst.id].sound.src = "Audios/34.mp3" ;
             else if (typ == 35)
             sounds[soundsconst.id].sound.src = "Audios/35.mp3" ;
             else if (typ == 36)
             sounds[soundsconst.id].sound.src = "Audios/36.mp3" ;
             else if (typ == 37)
             sounds[soundsconst.id].sound.src = "Audios/37.mp3" ;
             else if (typ == 38)
             sounds[soundsconst.id].sound.src = "Audios/38.mp3" ;
             else if (typ == 39)
             sounds[soundsconst.id].sound.src = "Audios/39.mp3" ;
             else if (typ == 40)
             sounds[soundsconst.id].sound.src = "Audios/40.mp3" ;
             else if (typ == 41)
             sounds[soundsconst.id].sound.src = "Audios/41.mp3" ;
             else if (typ == 42)
             sounds[soundsconst.id].sound.src = "Audios/42.mp3" ;
             else if (typ == 43)
             sounds[soundsconst.id].sound.src = "Audios/43.mp3" ;
             else if (typ == 44)
             sounds[soundsconst.id].sound.src = "Audios/44.mp3" ;
             else if (typ == 45)
             sounds[soundsconst.id].sound.src = "Audios/45.mp3" ;
             else if (typ == 46)
             sounds[soundsconst.id].sound.src = "Audios/46.mp3" ;
             else if (typ == 47)
             sounds[soundsconst.id].sound.src = "Audios/47.mp3" ;
             else if (typ == 48)
             sounds[soundsconst.id].sound.src = "Audios/48.mp3" ;
             else if (typ == 49)
             sounds[soundsconst.id].sound.src = "Audios/49.mp3" ;
             else if (typ == 50)
             sounds[soundsconst.id].sound.src = "Audios/50.mp3" ;
             else if (typ == 51)
             sounds[soundsconst.id].sound.src = "Audios/51.mp3" ;
             else if (typ == 52)
             sounds[soundsconst.id].sound.src = "Audios/52.mp3" ;
             else if (typ == 53)
             sounds[soundsconst.id].sound.src = "Audios/53.mp3" ;
             else if (typ == 54)
             sounds[soundsconst.id].sound.src = "Audios/54.mp3" ;
             else if (typ == 55)
             sounds[soundsconst.id].sound.src = "Audios/55.mp3" ;
             else if (typ == 56)
             sounds[soundsconst.id].sound.src = "Audios/56.mp3" ;
             else if (typ == 57)
             sounds[soundsconst.id].sound.src = "Audios/57.mp3" ;
             else if (typ == 58)
             sounds[soundsconst.id].sound.src = "Audios/58.mp3" ;
             else if (typ == 59)
             sounds[soundsconst.id].sound.src = "Audios/59.mp3" ;
             else if (typ == 60)
             sounds[soundsconst.id].sound.src = "Audios/60.mp3" ;
             else if (typ == 61)
             sounds[soundsconst.id].sound.src = "Audios/61.mp3" ;
             else if (typ == 62)
             sounds[soundsconst.id].sound.src = "Audios/62.mp3" ;
             else if (typ == 63)
             sounds[soundsconst.id].sound.src = "Audios/63.mp3" ;
             else if (typ == 64)
             sounds[soundsconst.id].sound.src = "Audios/64.mp3" ;
             else if (typ == 65)
             sounds[soundsconst.id].sound.src = "Audios/65.mp3" ;
             else if (typ == 66)
             sounds[soundsconst.id].sound.src = "Audios/66.mp3" ;
             else if (typ == 67)
             sounds[soundsconst.id].sound.src = "Audios/67.mp3" ;
             else if (typ == 68)
             sounds[soundsconst.id].sound.src = "Audios/68.mp3" ;
             else if (typ == 69)
             sounds[soundsconst.id].sound.src = "Audios/69.mp3" ;
             else if (typ == 70)
             sounds[soundsconst.id].sound.src = "Audios/70.mp3" ;
             else if (typ == 71)
             sounds[soundsconst.id].sound.src = "Audios/71.mp3" ;
             else if (typ == 72)
             sounds[soundsconst.id].sound.src = "Audios/72.mp3" ;
             else if (typ == 73)
             sounds[soundsconst.id].sound.src = "Audios/73.mp3" ;
             else if (typ == 74)
             sounds[soundsconst.id].sound.src = "Audios/74.mp3" ;
             else if (typ == 75)
             sounds[soundsconst.id].sound.src = "Audios/75.mp3" ;
             else if (typ == 76)
             sounds[soundsconst.id].sound.src = "Audios/76.mp3" ;
             else if (typ == 77)
             sounds[soundsconst.id].sound.src = "Audios/77.mp3" ;
             else if (typ == 78)
             sounds[soundsconst.id].sound.src = "Audios/78.mp3" ;
             else if (typ == 79)
             sounds[soundsconst.id].sound.src = "Audios/79.mp3" ;
             else if (typ == 80)
             sounds[soundsconst.id].sound.src = "Audios/80.mp3" ;
             else if (typ == 81)
             sounds[soundsconst.id].sound.src = "Audios/81.mp3" ;
             else if (typ == 82)
             sounds[soundsconst.id].sound.src = "Audios/82.mp3" ;
             else if (typ == 83)
             sounds[soundsconst.id].sound.src = "Audios/83.mp3" ;
             else if (typ == 84)
             sounds[soundsconst.id].sound.src = "Audios/84.mp3" ;
             else if (typ == 85)
             sounds[soundsconst.id].sound.src = "Audios/85.mp3" ;
             else if (typ == 86)
             sounds[soundsconst.id].sound.src = "Audios/86.mp3" ;
             else if (typ == 87)
             sounds[soundsconst.id].sound.src = "Audios/87.mp3" ;
             else if (typ == 88)
             sounds[soundsconst.id].sound.src = "Audios/88.mp3" ;
             else if (typ == 89)
             sounds[soundsconst.id].sound.src = "Audios/89.mp3" ;
             else if (typ == 90)
             sounds[soundsconst.id].sound.src = "Audios/90.mp3" ;
             else if (typ == 91)
             sounds[soundsconst.id].sound.src = "Audios/91.mp3" ;
             else if (typ == 92)
             sounds[soundsconst.id].sound.src = "Audios/92.mp3" ;
             else if (typ == 93)
             sounds[soundsconst.id].sound.src = "Audios/93.mp3" ;
             else if (typ == 94)
             sounds[soundsconst.id].sound.src = "Audios/94.mp3" ;
             else if (typ == 95)
             sounds[soundsconst.id].sound.src = "Audios/95.mp3" ;
             else if (typ == 96)
             sounds[soundsconst.id].sound.src = "Audios/96.mp3" ;
             else if (typ == 97)
             sounds[soundsconst.id].sound.src = "Audios/97.mp3" ;
             else if (typ == 98)
             sounds[soundsconst.id].sound.src = "Audios/98.mp3" ;
             else if (typ == 99)
             sounds[soundsconst.id].sound.src = "Audios/99.mp3" ;
             else if (typ == 100)
             sounds[soundsconst.id].sound.src = "Audios/100.mp3" ;
             else if (typ == 101)
             sounds[soundsconst.id].sound.src = "Audios/101.mp3" ;
             else if (typ == 102)
             sounds[soundsconst.id].sound.src = "Audios/102.mp3" ;
             else if (typ == 103)
             sounds[soundsconst.id].sound.src = "Audios/103.mp3" ;
             else if (typ == 104)
             sounds[soundsconst.id].sound.src = "Audios/104.mp3" ;
             else if (typ == 105)
             sounds[soundsconst.id].sound.src = "Audios/105.mp3" ;
             else if (typ == 106)
             sounds[soundsconst.id].sound.src = "Audios/106.mp3" ;
             else if (typ == 107)
             sounds[soundsconst.id].sound.src = "Audios/107.mp3" ;
             else if (typ == 108)
             sounds[soundsconst.id].sound.src = "Audios/108.mp3" ;
             else if (typ == 109)
             sounds[soundsconst.id].sound.src = "Audios/109.mp3" ;
             else if (typ == 110)
             sounds[soundsconst.id].sound.src = "Audios/110.mp3" ;
             else if (typ == 111)
             sounds[soundsconst.id].sound.src = "Audios/111.mp3" ;
             else if (typ == 112)
             sounds[soundsconst.id].sound.src = "Audios/112.mp3" ;
             else if (typ == 113)
             sounds[soundsconst.id].sound.src = "Audios/113.mp3" ;
             else if (typ == 114)
             sounds[soundsconst.id].sound.src = "Audios/114.mp3" ;
             else if (typ == 115)
             sounds[soundsconst.id].sound.src = "Audios/115.mp3" ;
             else if (typ == 116)
             sounds[soundsconst.id].sound.src = "Audios/116.mp3" ;
             else if (typ == 117)
             sounds[soundsconst.id].sound.src = "Audios/117.mp3" ;
             else if (typ == 118)
             sounds[soundsconst.id].sound.src = "Audios/118.mp3" ;
             else if (typ == 119)
             sounds[soundsconst.id].sound.src = "Audios/119.mp3" ;
             else if (typ == 120)
             sounds[soundsconst.id].sound.src = "Audios/120.mp3" ;
             else if (typ == 121)
             sounds[soundsconst.id].sound.src = "Audios/121.mp3" ;
             else if (typ == 122)
             sounds[soundsconst.id].sound.src = "Audios/122.mp3" ;
             else if (typ == 123)
             sounds[soundsconst.id].sound.src = "Audios/123.mp3" ;
             else if (typ == 124)
             sounds[soundsconst.id].sound.src = "Audios/124.mp3" ;
             else if (typ == 125)
             sounds[soundsconst.id].sound.src = "Audios/125.mp3" ;
             else if (typ == 126)
             sounds[soundsconst.id].sound.src = "Audios/126.mp3" ;
             else if (typ == 127)
             sounds[soundsconst.id].sound.src = "Audios/127.mp3" ;
             else if (typ == 128)
             sounds[soundsconst.id].sound.src = "Audios/128.mp3" ;
             else if (typ == 129)
             sounds[soundsconst.id].sound.src = "Audios/129.mp3" ;
             else if (typ == 130)
             sounds[soundsconst.id].sound.src = "Audios/130.mp3" ;
             else if (typ == 131)
             sounds[soundsconst.id].sound.src = "Audios/131.mp3" ;
             else if (typ == 132)
             sounds[soundsconst.id].sound.src = "Audios/132.mp3" ;
             else if (typ == 133)
             sounds[soundsconst.id].sound.src = "Audios/133.mp3" ;
             else if (typ == 134)
             sounds[soundsconst.id].sound.src = "Audios/134.mp3" ;
             else if (typ == 135)
             sounds[soundsconst.id].sound.src = "Audios/135.mp3" ;
             else if (typ == 136)
             sounds[soundsconst.id].sound.src = "Audios/136.mp3" ;
             else if (typ == 137)
             sounds[soundsconst.id].sound.src = "Audios/137.mp3" ;
             else if (typ == 138)
             sounds[soundsconst.id].sound.src = "Audios/138.mp3" ;
             else if (typ == 139)
             sounds[soundsconst.id].sound.src = "Audios/139.mp3" ;
             else if (typ == 140)
             sounds[soundsconst.id].sound.src = "Audios/140.mp3" ;
             else if (typ == 141)
             sounds[soundsconst.id].sound.src = "Audios/141.mp3" ;
             else if (typ == 142)
             sounds[soundsconst.id].sound.src = "Audios/142.mp3" ;
             else if (typ == 143)
             sounds[soundsconst.id].sound.src = "Audios/143.mp3" ;
             else if (typ == 144)
             sounds[soundsconst.id].sound.src = "Audios/144.mp3" ;
             else if (typ == 145)
             sounds[soundsconst.id].sound.src = "Audios/145.mp3" ;
             else if (typ == 146)
             sounds[soundsconst.id].sound.src = "Audios/146.mp3" ;
             else if (typ == 147)
             sounds[soundsconst.id].sound.src = "Audios/147.mp3" ;
             else if (typ == 148)
             sounds[soundsconst.id].sound.src = "Audios/148.mp3" ;
             else if (typ == 149)
             sounds[soundsconst.id].sound.src = "Audios/149.mp3" ;
             else if (typ == 150)
             sounds[soundsconst.id].sound.src = "Audios/150.mp3" ;
             else if (typ == 151)
             sounds[soundsconst.id].sound.src = "Audios/151.mp3" ;
             else if (typ == 152)
             sounds[soundsconst.id].sound.src = "Audios/152.mp3" ;
             else if (typ == 153)
             sounds[soundsconst.id].sound.src = "Audios/153.mp3" ;
             else if (typ == 154)
             sounds[soundsconst.id].sound.src = "Audios/154.mp3" ;
             else if (typ == 155)
             sounds[soundsconst.id].sound.src = "Audios/155.mp3" ;
             else if (typ == 156)
             sounds[soundsconst.id].sound.src = "Audios/156.mp3" ;
             else if (typ == 157)
             sounds[soundsconst.id].sound.src = "Audios/157.mp3" ;
             else if (typ == 158)
             sounds[soundsconst.id].sound.src = "Audios/158.mp3" ;
             else if (typ == 159)
             sounds[soundsconst.id].sound.src = "Audios/159.mp3" ;
             else if (typ == 160)
             sounds[soundsconst.id].sound.src = "Audios/160.mp3" ;
             else if (typ == 161)
             sounds[soundsconst.id].sound.src = "Audios/161.mp3" ;
             else if (typ == 162)
             sounds[soundsconst.id].sound.src = "Audios/162.mp3" ;
             else if (typ == 163)
             sounds[soundsconst.id].sound.src = "Audios/163.mp3" ;
             else if (typ == 164)
             sounds[soundsconst.id].sound.src = "Audios/164.mp3" ;
             else if (typ == 165)
             sounds[soundsconst.id].sound.src = "Audios/165.mp3" ;
             else if (typ == 166)
             sounds[soundsconst.id].sound.src = "Audios/166.mp3" ;
             else if (typ == 167)
             sounds[soundsconst.id].sound.src = "Audios/167.mp3" ;
             else if (typ == 168)
             sounds[soundsconst.id].sound.src = "Audios/168.mp3" ;
             else if (typ == 169)
             sounds[soundsconst.id].sound.src = "Audios/169.mp3" ;
             else if (typ == 170)
             sounds[soundsconst.id].sound.src = "Audios/170.mp3" ;
             else if (typ == 171)
             sounds[soundsconst.id].sound.src = "Audios/171.mp3" ;
             else if (typ == 172)
             sounds[soundsconst.id].sound.src = "Audios/172.mp3" ;
             else if (typ == 173)
             sounds[soundsconst.id].sound.src = "Audios/173.mp3" ;
             else if (typ == 174)
             sounds[soundsconst.id].sound.src = "Audios/174.mp3" ;
             else if (typ == 175)
             sounds[soundsconst.id].sound.src = "Audios/175.mp3" ;
             else if (typ == 176)
             sounds[soundsconst.id].sound.src = "Audios/176.mp3" ;
             else if (typ == 177)
             sounds[soundsconst.id].sound.src = "Audios/177.mp3" ;
             else if (typ == 178)
             sounds[soundsconst.id].sound.src = "Audios/178.mp3" ;
             else if (typ == 179)
             sounds[soundsconst.id].sound.src = "Audios/179.mp3" ;
             else if (typ == 180)
             sounds[soundsconst.id].sound.src = "Audios/180.mp3" ;
             else if (typ == 181)
             sounds[soundsconst.id].sound.src = "Audios/181.mp3" ;
             else if (typ == 182)
             sounds[soundsconst.id].sound.src = "Audios/182.mp3" ;
             else if (typ == 183)
             sounds[soundsconst.id].sound.src = "Audios/183.mp3" ;
             else if (typ == 184)
             sounds[soundsconst.id].sound.src = "Audios/184.mp3" ;
             else if (typ == 185)
             sounds[soundsconst.id].sound.src = "Audios/185.mp3" ;
             else if (typ == 186)
             sounds[soundsconst.id].sound.src = "Audios/186.mp3" ;
             else if (typ == 187)
             sounds[soundsconst.id].sound.src = "Audios/187.mp3" ;
             else if (typ == 188)
             sounds[soundsconst.id].sound.src = "Audios/188.mp3" ;
             else if (typ == 189)
             sounds[soundsconst.id].sound.src = "Audios/189.mp3" ;
             else if (typ == 190)
             sounds[soundsconst.id].sound.src = "Audios/190.mp3" ;
             else if (typ == 191)
             sounds[soundsconst.id].sound.src = "Audios/191.mp3" ;
             else if (typ == 192)
             sounds[soundsconst.id].sound.src = "Audios/192.mp3" ;
             else if (typ == 193)
             sounds[soundsconst.id].sound.src = "Audios/193.mp3" ;
             else if (typ == 194)
             sounds[soundsconst.id].sound.src = "Audios/194.mp3" ;
             else if (typ == 195)
             sounds[soundsconst.id].sound.src = "Audios/195.mp3" ;
             else if (typ == 196)
             sounds[soundsconst.id].sound.src = "Audios/196.mp3" ;
             else if (typ == 197)
             sounds[soundsconst.id].sound.src = "Audios/197.mp3" ;
             else if (typ == 198)
             sounds[soundsconst.id].sound.src = "Audios/198.mp3" ;
             else if (typ == 199)
             sounds[soundsconst.id].sound.src = "Audios/199.mp3" ;
             else if (typ == 200)
             sounds[soundsconst.id].sound.src = "Audios/200.mp3" ;
             else if (typ == 201)
             sounds[soundsconst.id].sound.src = "Audios/201.mp3" ;
             else if (typ == 202)
             sounds[soundsconst.id].sound.src = "Audios/202.mp3" ;
             else if (typ == 203)
             sounds[soundsconst.id].sound.src = "Audios/203.mp3" ;
             else if (typ == 204)
             sounds[soundsconst.id].sound.src = "Audios/204.mp3" ;
             else if (typ == 205)
             sounds[soundsconst.id].sound.src = "Audios/205.mp3" ;
             else if (typ == 206)
             sounds[soundsconst.id].sound.src = "Audios/206.mp3" ;
             else if (typ == 207)
             sounds[soundsconst.id].sound.src = "Audios/207.mp3" ;
             else if (typ == 208)
             sounds[soundsconst.id].sound.src = "Audios/208.mp3" ;
             else if (typ == 209)
             sounds[soundsconst.id].sound.src = "Audios/209.mp3" ;
             else if (typ == 210)
             sounds[soundsconst.id].sound.src = "Audios/210.mp3" ;
             else if (typ == 211)
             sounds[soundsconst.id].sound.src = "Audios/211.mp3" ;
             else if (typ == 212)
             sounds[soundsconst.id].sound.src = "Audios/212.mp3" ;
             else if (typ == 213)
             sounds[soundsconst.id].sound.src = "Audios/213.mp3" ;
             else if (typ == 214)
             sounds[soundsconst.id].sound.src = "Audios/214.mp3" ;
             else if (typ == 215)
             sounds[soundsconst.id].sound.src = "Audios/215.mp3" ;
             else if (typ == 216)
             sounds[soundsconst.id].sound.src = "Audios/216.mp3" ;
             else if (typ == 217)
             sounds[soundsconst.id].sound.src = "Audios/217.mp3" ;
             else if (typ == 218)
             sounds[soundsconst.id].sound.src = "Audios/218.mp3" ;
             else if (typ == 219)
             sounds[soundsconst.id].sound.src = "Audios/219.mp3" ;
             else if (typ == 220)
             sounds[soundsconst.id].sound.src = "Audios/220.mp3" ;
             else if (typ == 221)
             sounds[soundsconst.id].sound.src = "Audios/221.mp3" ;
             else if (typ == 222)
             sounds[soundsconst.id].sound.src = "Audios/222.mp3" ;
             else if (typ == 223)
             sounds[soundsconst.id].sound.src = "Audios/223.mp3" ;
             else if (typ == 224)
             sounds[soundsconst.id].sound.src = "Audios/224.mp3" ;
             else if (typ == 225)
             sounds[soundsconst.id].sound.src = "Audios/225.mp3" ;
             else if (typ == 226)
             sounds[soundsconst.id].sound.src = "Audios/226.mp3" ;
             else if (typ == 227)
             sounds[soundsconst.id].sound.src = "Audios/227.mp3" ;
             else if (typ == 228)
             sounds[soundsconst.id].sound.src = "Audios/228.mp3" ;
             else if (typ == 229)
             sounds[soundsconst.id].sound.src = "Audios/229.mp3" ;
             else if (typ == 230)
             sounds[soundsconst.id].sound.src = "Audios/230.mp3" ;
             else if (typ == 231)
             sounds[soundsconst.id].sound.src = "Audios/231.mp3" ;
             else if (typ == 232)
             sounds[soundsconst.id].sound.src = "Audios/232.mp3" ;
             else if (typ == 233)
             sounds[soundsconst.id].sound.src = "Audios/233.mp3" ;
             else if (typ == 234)
             sounds[soundsconst.id].sound.src = "Audios/234.mp3" ;
             else if (typ == 235)
             sounds[soundsconst.id].sound.src = "Audios/235.mp3" ;
             else if (typ == 236)
             sounds[soundsconst.id].sound.src = "Audios/236.mp3" ;
             else if (typ == 237)
             sounds[soundsconst.id].sound.src = "Audios/237.mp3" ;
             else if (typ == 238)
             sounds[soundsconst.id].sound.src = "Audios/238.mp3" ;
             else if (typ == 239)
             sounds[soundsconst.id].sound.src = "Audios/239.mp3" ;
             else if (typ == 240)
             sounds[soundsconst.id].sound.src = "Audios/240.mp3" ;
             else if (typ == 241)
             sounds[soundsconst.id].sound.src = "Audios/241.mp3" ;
             else if (typ == 242)
             sounds[soundsconst.id].sound.src = "Audios/242.mp3" ;
             else if (typ == 243)
             sounds[soundsconst.id].sound.src = "Audios/243.mp3" ;
             else if (typ == 244)
             sounds[soundsconst.id].sound.src = "Audios/244.mp3" ;
             else if (typ == 245)
             sounds[soundsconst.id].sound.src = "Audios/245.mp3" ;
             else if (typ == 246)
             sounds[soundsconst.id].sound.src = "Audios/246.mp3" ;
             else if (typ == 247)
             sounds[soundsconst.id].sound.src = "Audios/247.mp3" ;
             else if (typ == 248)
             sounds[soundsconst.id].sound.src = "Audios/248.mp3" ;
             else if (typ == 249)
             sounds[soundsconst.id].sound.src = "Audios/249.mp3" ;
             else if (typ == 250)
             sounds[soundsconst.id].sound.src = "Audios/250.mp3" ;

             
             
    soundsconst.id += 1 ;
}}
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


















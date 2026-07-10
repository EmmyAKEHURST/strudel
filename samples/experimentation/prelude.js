setcpm(30)

const guitar = note("<[d3@4][f4] [d3@4][f4] [c3@4][fb4] [c3@4][fb4]>").sound("gm_electric_guitar_clean")
    .fast(2)
    .room(1)
    .roomsize(3)
    .delay("0 0.5")
    .delaytime(0.4)
    .delayfeedback(0.75)

const fret = note("<[-]!3 [f4]>").sound("gm_guitar_fret_noise")
    .room(1)
    .roomsize(3)
    .delay("0.2")
    .delaytime(0.4)
    .delayfeedback(0.75)

const drums = sound("bd sd, hh*4")
    .bank("RolandTR909")
    .room(0.8)
    .roomsize(3)
    .lpf(slider(200,200,5000))

const melody =note("<D5@2 D5 E5@2 D5 E5 F5> <D5@2 D5 E5@2 D5 E5 F5> <D5@2 D5 E5@2 D5 E5 F5> <D5@2 D5 E5@2 D5 E5 E5>").sound("triangle")
    .gain("0.8 0.6 0.8 0.7")
    .delay("<0.75 0 0 0 0 0> <0 0 0.6 0 0 0.5> <0.4 0 0 0.6 0 0> <0 0.5 0 0 0.4 0>")
    .delaytime(0.375)
    .delayfeedback(0.75)
    .fast(slider(2,1,2))

//have fun with melody, guitar, fret and drums

stack(guitar, fret, drums, melody)

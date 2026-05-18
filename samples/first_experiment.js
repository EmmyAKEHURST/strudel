setcpm(60/4)

const triangle = note("c e g b").s("triangle").scale("<C:major C:minor >")
  .delay(0.5)
  .delaytime(0.25)
  .delayfeedback(0.7)
  .pan(sine.slow(2))
  .gain(0.8)
  ._punchcard()

const bass = sound("bd*8").cutoff(sine.range(200, 2000)
  .slow(4))
  .decay(0.1)
  ._spectrum()

const melody = note("<[c3,e3,g3] [a2,c3,e3] [f2,a2,c3] [g2,b2,d3]>*2").s("gm_recorder!2")
  .hpf(sine.range(200,1000))
  .room(0.5)
  .roomsize(5)

const notes = note("<[c4 e4 g4 b4] [a3 c4 e4 g4] [f3 a3 c4 e4] [g3 b3 d4 f4]>".fast(2))
  .s("triangle")
  .delay(0.4).delaytime(0.375).delayfeedback(0.5)
  .room(0.6).roomsize(0.4)
  .pan(sine.slow(3))
  .gain(0.65)
  .shape(0.2)
  .spiral({ steady: .96 }).color("magenta")

// PLAY WITH triangle, bass, melody or notes
// made by Sunyah as a first full experimentation

stack()
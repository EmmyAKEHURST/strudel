setcpm(30)

$: sound("bd!4").bank("RolandTR909").lpf(slider(500,500,2000)).color("white").gain(0.5)

$: note("c4 [f4 g4] -@4")
  .sound("triangle")
  .lpf(500)
  .room(1)
  .roomsize(4)
  ._scope()
  .color("white")

$: note("[A4 B4] <C5 E5>")
  .sound("triangle")
  .slow(4) //ralenti le changement de note 
  .room(1)
  .roomsize(4)
  .delay(0.3)
  .delayfeedback(0.8)
  .pan(sine.slow(8)) // effet orbitale, sine permet de faire monter la note et la faire descendre
  .lpf(perlin.range(500, 2500))
  .gain(0.5)
  ._scope()
  .color("white")

$: note("<[c5 c5 d5 [e5 f5]]>").s("wt_digital_basique").gain(slider(0.305,0,1)).delay(slider(0.815,0,1))

class Edge
  constructor : (@a, @b) ->
    @h1 = 0
    @h2 = 0

  show : ->
    stroke 255, 2
    line @a.x, @a.y, @b.x, @b.y
    @h1.show()
    @h2.show()

  hankin : ->
    mid = p5.Vector.add @a, @b
    mid.mult 0.5

    v1 = p5.Vector.sub @a, mid
    v2 = p5.Vector.sub @b, mid
    offset1 = mid
    offset2 = mid
    if delta > 0
      v1.setMag delta
      v2.setMag delta
      offset1 = p5.Vector.add mid, v2
      offset2 = p5.Vector.add mid, v1
    v1.normalize()
    v2.normalize()

    v1.rotate radians -angle
    v2.rotate radians angle

    @h1 = new Hankin offset1, v1
    @h2 = new Hankin offset2, v2

  findEnds : (edge) ->
    @h1.findEnd edge.h1
    @h1.findEnd edge.h2
    @h2.findEnd edge.h1
    @h2.findEnd edge.h2
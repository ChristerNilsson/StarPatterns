class Hankin
  constructor : (@a, @v) ->
    @b = p5.Vector.add @a, @v
    @end = null
    @prevD = null

  show : ->
    stroke 255, 0, 255
    line @a.x, @a.y, @end.x, @end.y

  findEnd : (other) ->
    den =  other.v.y * @v.x - other.v.x * @v.y
    if !den
      return
    numa = other.v.x * (@a.y - other.a.y) - other.v.y * (@a.x - other.a.x)
    numb = @v.x * (@a.y - other.a.y) - @v.y * (@a.x - other.a.x)
    ua = numa / den
    ub = numb / den
    x = @a.x + ua * @v.x
    y = @a.y + ua * @v.y

    if ua > 0 and ub > 0
      candidate = createVector x, y
      d1 = p5.Vector.dist candidate, @a
      d2 = p5.Vector.dist candidate, other.a
      d = d1 + d2
      diff = abs d1 - d2
      if diff < 0.001
        if !@end 
          @end = candidate
          @prevD = d
        else if d < @prevD
          @prevD = d
          @end = candidate
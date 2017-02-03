class HexagonalTiling
  constructor : (@r) -> @polys = []

  BuildCell : (x, y) ->
    p = new Polygon()

    inc = 2 * Math.PI / 6
    for index in range 6
      # angular to cartesian
      θ = index * inc - inc / 2
      vX = x + @r * Math.cos θ
      vY = y + @r * Math.sin θ
      p.addVertex vX, vY
    p.close()
    @polys.push p

  BuildGrid : ->
    height = @r*2
    width = Math.sqrt(3)/2 * height
    heightInc = 3 * height / 4
    row = 0
    for y in range height/2, 400, heightInc
      startX = if row % 2 == 0 then width else width/2
      for x in range startX, 400, width
        @BuildCell x, y
      row++
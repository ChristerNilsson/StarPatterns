polys = []

angle = 75
delta = 10

deltaSlider = null
angleSlider = null
tilingTypeSelect = null

setup = ->
  createCanvas 400, 400
  background 51
  deltaSlider = createSlider 0, 25, 10
  angleSlider = createSlider 0, 90, 75
  tilingTypeSelect = createSelect()
  tilingTypeSelect.option 'square'
  tilingTypeSelect.option 'hexagonal'
  tilingTypeSelect.changed chooseTiling
  chooseTiling()

draw = ->
  background 51
  angle = angleSlider.value()
  delta = deltaSlider.value()
  for poly in polys
    poly.hankin()
    poly.show()

hexTiling = ->
  hexTiles = new HexagonalTiling 50
  hexTiles.BuildGrid()
  polys = hexTiles.polys

squareTiling = ->
  polys = []
  inc = 100
  for x in range 0,width,inc
    for y in range 0,height,inc
      poly = new Polygon()
      poly.addVertex x, y
      poly.addVertex x + inc, y
      poly.addVertex x + inc, y + inc
      poly.addVertex x, y + inc
      poly.close()
      polys.push poly

chooseTiling = -> if tilingTypeSelect.value() == 'hexagonal' then hexTiling() else squareTiling()
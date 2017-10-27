class Polygon
  constructor : ->
    @vertices = []
    @edges = []

  addVertex : (x, y) ->
    a = createVector x, y
    total = @vertices.length
    if total > 0
      prev = @vertices[total - 1]
      edge = new Edge prev, a
      @edges.push edge
    @vertices.push a

  close : ->
    total = this.vertices.length
    last = this.vertices[total - 1]
    first = this.vertices[0]
    edge = new Edge last, first
    @edges.push edge

  hankin : ->
    for edge in @edges
      edge.hankin()

    for a in @edges
      for b in @edges
        if a!=b
          a.findEnds b
  show : ->
    for edge in @edges
      edge.show()
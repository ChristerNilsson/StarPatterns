// Generated by CoffeeScript 1.11.1
var HexagonalTiling;

HexagonalTiling = (function() {
  function HexagonalTiling(r) {
    this.r = r;
    this.polys = [];
  }

  HexagonalTiling.prototype.BuildCell = function(x, y) {
    var i, inc, index, len, p, ref, vX, vY, θ;
    p = new Polygon();
    inc = 2 * Math.PI / 6;
    ref = range(6);
    for (i = 0, len = ref.length; i < len; i++) {
      index = ref[i];
      θ = index * inc - inc / 2;
      vX = x + this.r * Math.cos(θ);
      vY = y + this.r * Math.sin(θ);
      p.addVertex(vX, vY);
    }
    p.close();
    return this.polys.push(p);
  };

  HexagonalTiling.prototype.BuildGrid = function() {
    var height, heightInc, i, j, len, len1, ref, ref1, results, row, startX, width, x, y;
    height = this.r * 2;
    width = Math.sqrt(3) / 2 * height;
    heightInc = 3 * height / 4;
    row = 0;
    ref = range(height / 2, 400, heightInc);
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      y = ref[i];
      startX = row % 2 === 0 ? width : width / 2;
      ref1 = range(startX, 400, width);
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        x = ref1[j];
        this.BuildCell(x, y);
      }
      results.push(row++);
    }
    return results;
  };

  return HexagonalTiling;

})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGV4YWdvbmFsVGlsaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSGV4YWdvbmFsVGlsaW5nLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBQTs7QUFBTTtFQUNVLHlCQUFDLENBQUQ7SUFBQyxJQUFDLENBQUEsSUFBRDtJQUFPLElBQUMsQ0FBQSxLQUFELEdBQVM7RUFBakI7OzRCQUVkLFNBQUEsR0FBWSxTQUFDLENBQUQsRUFBSSxDQUFKO0FBQ1YsUUFBQTtJQUFBLENBQUEsR0FBUSxJQUFBLE9BQUEsQ0FBQTtJQUVSLEdBQUEsR0FBTSxDQUFBLEdBQUksSUFBSSxDQUFDLEVBQVQsR0FBYztBQUNwQjtBQUFBLFNBQUEscUNBQUE7O01BRUUsQ0FBQSxHQUFJLEtBQUEsR0FBUSxHQUFSLEdBQWMsR0FBQSxHQUFNO01BQ3hCLEVBQUEsR0FBSyxDQUFBLEdBQUksSUFBQyxDQUFBLENBQUQsR0FBSyxJQUFJLENBQUMsR0FBTCxDQUFTLENBQVQ7TUFDZCxFQUFBLEdBQUssQ0FBQSxHQUFJLElBQUMsQ0FBQSxDQUFELEdBQUssSUFBSSxDQUFDLEdBQUwsQ0FBUyxDQUFUO01BQ2QsQ0FBQyxDQUFDLFNBQUYsQ0FBWSxFQUFaLEVBQWdCLEVBQWhCO0FBTEY7SUFNQSxDQUFDLENBQUMsS0FBRixDQUFBO1dBQ0EsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksQ0FBWjtFQVhVOzs0QkFhWixTQUFBLEdBQVksU0FBQTtBQUNWLFFBQUE7SUFBQSxNQUFBLEdBQVMsSUFBQyxDQUFBLENBQUQsR0FBRztJQUNaLEtBQUEsR0FBUSxJQUFJLENBQUMsSUFBTCxDQUFVLENBQVYsQ0FBQSxHQUFhLENBQWIsR0FBaUI7SUFDekIsU0FBQSxHQUFZLENBQUEsR0FBSSxNQUFKLEdBQWE7SUFDekIsR0FBQSxHQUFNO0FBQ047QUFBQTtTQUFBLHFDQUFBOztNQUNFLE1BQUEsR0FBWSxHQUFBLEdBQU0sQ0FBTixLQUFXLENBQWQsR0FBcUIsS0FBckIsR0FBZ0MsS0FBQSxHQUFNO0FBQy9DO0FBQUEsV0FBQSx3Q0FBQTs7UUFDRSxJQUFDLENBQUEsU0FBRCxDQUFXLENBQVgsRUFBYyxDQUFkO0FBREY7bUJBRUEsR0FBQTtBQUpGOztFQUxVIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSGV4YWdvbmFsVGlsaW5nXHJcbiAgY29uc3RydWN0b3IgOiAoQHIpIC0+IEBwb2x5cyA9IFtdXHJcblxyXG4gIEJ1aWxkQ2VsbCA6ICh4LCB5KSAtPlxyXG4gICAgcCA9IG5ldyBQb2x5Z29uKClcclxuXHJcbiAgICBpbmMgPSAyICogTWF0aC5QSSAvIDZcclxuICAgIGZvciBpbmRleCBpbiByYW5nZSA2XHJcbiAgICAgICMgYW5ndWxhciB0byBjYXJ0ZXNpYW5cclxuICAgICAgzrggPSBpbmRleCAqIGluYyAtIGluYyAvIDJcclxuICAgICAgdlggPSB4ICsgQHIgKiBNYXRoLmNvcyDOuFxyXG4gICAgICB2WSA9IHkgKyBAciAqIE1hdGguc2luIM64XHJcbiAgICAgIHAuYWRkVmVydGV4IHZYLCB2WVxyXG4gICAgcC5jbG9zZSgpXHJcbiAgICBAcG9seXMucHVzaCBwXHJcblxyXG4gIEJ1aWxkR3JpZCA6IC0+XHJcbiAgICBoZWlnaHQgPSBAcioyXHJcbiAgICB3aWR0aCA9IE1hdGguc3FydCgzKS8yICogaGVpZ2h0XHJcbiAgICBoZWlnaHRJbmMgPSAzICogaGVpZ2h0IC8gNFxyXG4gICAgcm93ID0gMFxyXG4gICAgZm9yIHkgaW4gcmFuZ2UgaGVpZ2h0LzIsIDQwMCwgaGVpZ2h0SW5jXHJcbiAgICAgIHN0YXJ0WCA9IGlmIHJvdyAlIDIgPT0gMCB0aGVuIHdpZHRoIGVsc2Ugd2lkdGgvMlxyXG4gICAgICBmb3IgeCBpbiByYW5nZSBzdGFydFgsIDQwMCwgd2lkdGhcclxuICAgICAgICBAQnVpbGRDZWxsIHgsIHlcclxuICAgICAgcm93KysiXX0=
//# sourceURL=C:\github\StarPatterns\HexagonalTiling.coffee
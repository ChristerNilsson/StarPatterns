// Generated by CoffeeScript 1.12.7
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGV4YWdvbmFsVGlsaW5nLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXEhleGFnb25hbFRpbGluZy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQU07RUFDVSx5QkFBQyxDQUFEO0lBQUMsSUFBQyxDQUFBLElBQUQ7SUFBTyxJQUFDLENBQUEsS0FBRCxHQUFTO0VBQWpCOzs0QkFFZCxTQUFBLEdBQVksU0FBQyxDQUFELEVBQUksQ0FBSjtBQUNWLFFBQUE7SUFBQSxDQUFBLEdBQUksSUFBSSxPQUFKLENBQUE7SUFFSixHQUFBLEdBQU0sQ0FBQSxHQUFJLElBQUksQ0FBQyxFQUFULEdBQWM7QUFDcEI7QUFBQSxTQUFBLHFDQUFBOztNQUVFLENBQUEsR0FBSSxLQUFBLEdBQVEsR0FBUixHQUFjLEdBQUEsR0FBTTtNQUN4QixFQUFBLEdBQUssQ0FBQSxHQUFJLElBQUMsQ0FBQSxDQUFELEdBQUssSUFBSSxDQUFDLEdBQUwsQ0FBUyxDQUFUO01BQ2QsRUFBQSxHQUFLLENBQUEsR0FBSSxJQUFDLENBQUEsQ0FBRCxHQUFLLElBQUksQ0FBQyxHQUFMLENBQVMsQ0FBVDtNQUNkLENBQUMsQ0FBQyxTQUFGLENBQVksRUFBWixFQUFnQixFQUFoQjtBQUxGO0lBTUEsQ0FBQyxDQUFDLEtBQUYsQ0FBQTtXQUNBLElBQUMsQ0FBQSxLQUFLLENBQUMsSUFBUCxDQUFZLENBQVo7RUFYVTs7NEJBYVosU0FBQSxHQUFZLFNBQUE7QUFDVixRQUFBO0lBQUEsTUFBQSxHQUFTLElBQUMsQ0FBQSxDQUFELEdBQUc7SUFDWixLQUFBLEdBQVEsSUFBSSxDQUFDLElBQUwsQ0FBVSxDQUFWLENBQUEsR0FBYSxDQUFiLEdBQWlCO0lBQ3pCLFNBQUEsR0FBWSxDQUFBLEdBQUksTUFBSixHQUFhO0lBQ3pCLEdBQUEsR0FBTTtBQUNOO0FBQUE7U0FBQSxxQ0FBQTs7TUFDRSxNQUFBLEdBQVksR0FBQSxHQUFNLENBQU4sS0FBVyxDQUFkLEdBQXFCLEtBQXJCLEdBQWdDLEtBQUEsR0FBTTtBQUMvQztBQUFBLFdBQUEsd0NBQUE7O1FBQ0UsSUFBQyxDQUFBLFNBQUQsQ0FBVyxDQUFYLEVBQWMsQ0FBZDtBQURGO21CQUVBLEdBQUE7QUFKRjs7RUFMVSIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEhleGFnb25hbFRpbGluZ1xyXG4gIGNvbnN0cnVjdG9yIDogKEByKSAtPiBAcG9seXMgPSBbXVxyXG5cclxuICBCdWlsZENlbGwgOiAoeCwgeSkgLT5cclxuICAgIHAgPSBuZXcgUG9seWdvbigpXHJcblxyXG4gICAgaW5jID0gMiAqIE1hdGguUEkgLyA2XHJcbiAgICBmb3IgaW5kZXggaW4gcmFuZ2UgNlxyXG4gICAgICAjIGFuZ3VsYXIgdG8gY2FydGVzaWFuXHJcbiAgICAgIM64ID0gaW5kZXggKiBpbmMgLSBpbmMgLyAyXHJcbiAgICAgIHZYID0geCArIEByICogTWF0aC5jb3MgzrhcclxuICAgICAgdlkgPSB5ICsgQHIgKiBNYXRoLnNpbiDOuFxyXG4gICAgICBwLmFkZFZlcnRleCB2WCwgdllcclxuICAgIHAuY2xvc2UoKVxyXG4gICAgQHBvbHlzLnB1c2ggcFxyXG5cclxuICBCdWlsZEdyaWQgOiAtPlxyXG4gICAgaGVpZ2h0ID0gQHIqMlxyXG4gICAgd2lkdGggPSBNYXRoLnNxcnQoMykvMiAqIGhlaWdodFxyXG4gICAgaGVpZ2h0SW5jID0gMyAqIGhlaWdodCAvIDRcclxuICAgIHJvdyA9IDBcclxuICAgIGZvciB5IGluIHJhbmdlIGhlaWdodC8yLCA0MDAsIGhlaWdodEluY1xyXG4gICAgICBzdGFydFggPSBpZiByb3cgJSAyID09IDAgdGhlbiB3aWR0aCBlbHNlIHdpZHRoLzJcclxuICAgICAgZm9yIHggaW4gcmFuZ2Ugc3RhcnRYLCA0MDAsIHdpZHRoXHJcbiAgICAgICAgQEJ1aWxkQ2VsbCB4LCB5XHJcbiAgICAgIHJvdysrIl19
//# sourceURL=C:\github\StarPatterns\coffee\HexagonalTiling.coffee
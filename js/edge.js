// Generated by CoffeeScript 1.12.7
var Edge;

Edge = (function() {
  function Edge(a, b) {
    this.a = a;
    this.b = b;
    this.h1 = 0;
    this.h2 = 0;
  }

  Edge.prototype.show = function() {
    stroke(255, 2);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
    this.h1.show();
    return this.h2.show();
  };

  Edge.prototype.hankin = function() {
    var mid, offset1, offset2, v1, v2;
    mid = p5.Vector.add(this.a, this.b);
    mid.mult(0.5);
    v1 = p5.Vector.sub(this.a, mid);
    v2 = p5.Vector.sub(this.b, mid);
    offset1 = mid;
    offset2 = mid;
    if (delta > 0) {
      v1.setMag(delta);
      v2.setMag(delta);
      offset1 = p5.Vector.add(mid, v2);
      offset2 = p5.Vector.add(mid, v1);
    }
    v1.normalize();
    v2.normalize();
    v1.rotate(radians(-angle));
    v2.rotate(radians(angle));
    this.h1 = new Hankin(offset1, v1);
    return this.h2 = new Hankin(offset2, v2);
  };

  Edge.prototype.findEnds = function(edge) {
    this.h1.findEnd(edge.h1);
    this.h1.findEnd(edge.h2);
    this.h2.findEnd(edge.h1);
    return this.h2.findEnd(edge.h2);
  };

  return Edge;

})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRnZS5qcyIsInNvdXJjZVJvb3QiOiIuLiIsInNvdXJjZXMiOlsiY29mZmVlXFxlZGdlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBQTs7QUFBTTtFQUNVLGNBQUMsQ0FBRCxFQUFLLENBQUw7SUFBQyxJQUFDLENBQUEsSUFBRDtJQUFJLElBQUMsQ0FBQSxJQUFEO0lBQ2pCLElBQUMsQ0FBQSxFQUFELEdBQU07SUFDTixJQUFDLENBQUEsRUFBRCxHQUFNO0VBRk07O2lCQUlkLElBQUEsR0FBTyxTQUFBO0lBQ0wsTUFBQSxDQUFPLEdBQVAsRUFBWSxDQUFaO0lBQ0EsSUFBQSxDQUFLLElBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBUixFQUFXLElBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBZCxFQUFpQixJQUFDLENBQUEsQ0FBQyxDQUFDLENBQXBCLEVBQXVCLElBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBMUI7SUFDQSxJQUFDLENBQUEsRUFBRSxDQUFDLElBQUosQ0FBQTtXQUNBLElBQUMsQ0FBQSxFQUFFLENBQUMsSUFBSixDQUFBO0VBSks7O2lCQU1QLE1BQUEsR0FBUyxTQUFBO0FBQ1AsUUFBQTtJQUFBLEdBQUEsR0FBTSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQVYsQ0FBYyxJQUFDLENBQUEsQ0FBZixFQUFrQixJQUFDLENBQUEsQ0FBbkI7SUFDTixHQUFHLENBQUMsSUFBSixDQUFTLEdBQVQ7SUFFQSxFQUFBLEdBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFWLENBQWMsSUFBQyxDQUFBLENBQWYsRUFBa0IsR0FBbEI7SUFDTCxFQUFBLEdBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFWLENBQWMsSUFBQyxDQUFBLENBQWYsRUFBa0IsR0FBbEI7SUFDTCxPQUFBLEdBQVU7SUFDVixPQUFBLEdBQVU7SUFDVixJQUFHLEtBQUEsR0FBUSxDQUFYO01BQ0UsRUFBRSxDQUFDLE1BQUgsQ0FBVSxLQUFWO01BQ0EsRUFBRSxDQUFDLE1BQUgsQ0FBVSxLQUFWO01BQ0EsT0FBQSxHQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBVixDQUFjLEdBQWQsRUFBbUIsRUFBbkI7TUFDVixPQUFBLEdBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFWLENBQWMsR0FBZCxFQUFtQixFQUFuQixFQUpaOztJQUtBLEVBQUUsQ0FBQyxTQUFILENBQUE7SUFDQSxFQUFFLENBQUMsU0FBSCxDQUFBO0lBRUEsRUFBRSxDQUFDLE1BQUgsQ0FBVSxPQUFBLENBQVEsQ0FBQyxLQUFULENBQVY7SUFDQSxFQUFFLENBQUMsTUFBSCxDQUFVLE9BQUEsQ0FBUSxLQUFSLENBQVY7SUFFQSxJQUFDLENBQUEsRUFBRCxHQUFNLElBQUksTUFBSixDQUFXLE9BQVgsRUFBb0IsRUFBcEI7V0FDTixJQUFDLENBQUEsRUFBRCxHQUFNLElBQUksTUFBSixDQUFXLE9BQVgsRUFBb0IsRUFBcEI7RUFwQkM7O2lCQXNCVCxRQUFBLEdBQVcsU0FBQyxJQUFEO0lBQ1QsSUFBQyxDQUFBLEVBQUUsQ0FBQyxPQUFKLENBQVksSUFBSSxDQUFDLEVBQWpCO0lBQ0EsSUFBQyxDQUFBLEVBQUUsQ0FBQyxPQUFKLENBQVksSUFBSSxDQUFDLEVBQWpCO0lBQ0EsSUFBQyxDQUFBLEVBQUUsQ0FBQyxPQUFKLENBQVksSUFBSSxDQUFDLEVBQWpCO1dBQ0EsSUFBQyxDQUFBLEVBQUUsQ0FBQyxPQUFKLENBQVksSUFBSSxDQUFDLEVBQWpCO0VBSlMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFZGdlXHJcbiAgY29uc3RydWN0b3IgOiAoQGEsIEBiKSAtPlxyXG4gICAgQGgxID0gMFxyXG4gICAgQGgyID0gMFxyXG5cclxuICBzaG93IDogLT5cclxuICAgIHN0cm9rZSAyNTUsIDJcclxuICAgIGxpbmUgQGEueCwgQGEueSwgQGIueCwgQGIueVxyXG4gICAgQGgxLnNob3coKVxyXG4gICAgQGgyLnNob3coKVxyXG5cclxuICBoYW5raW4gOiAtPlxyXG4gICAgbWlkID0gcDUuVmVjdG9yLmFkZCBAYSwgQGJcclxuICAgIG1pZC5tdWx0IDAuNVxyXG5cclxuICAgIHYxID0gcDUuVmVjdG9yLnN1YiBAYSwgbWlkXHJcbiAgICB2MiA9IHA1LlZlY3Rvci5zdWIgQGIsIG1pZFxyXG4gICAgb2Zmc2V0MSA9IG1pZFxyXG4gICAgb2Zmc2V0MiA9IG1pZFxyXG4gICAgaWYgZGVsdGEgPiAwXHJcbiAgICAgIHYxLnNldE1hZyBkZWx0YVxyXG4gICAgICB2Mi5zZXRNYWcgZGVsdGFcclxuICAgICAgb2Zmc2V0MSA9IHA1LlZlY3Rvci5hZGQgbWlkLCB2MlxyXG4gICAgICBvZmZzZXQyID0gcDUuVmVjdG9yLmFkZCBtaWQsIHYxXHJcbiAgICB2MS5ub3JtYWxpemUoKVxyXG4gICAgdjIubm9ybWFsaXplKClcclxuXHJcbiAgICB2MS5yb3RhdGUgcmFkaWFucyAtYW5nbGVcclxuICAgIHYyLnJvdGF0ZSByYWRpYW5zIGFuZ2xlXHJcblxyXG4gICAgQGgxID0gbmV3IEhhbmtpbiBvZmZzZXQxLCB2MVxyXG4gICAgQGgyID0gbmV3IEhhbmtpbiBvZmZzZXQyLCB2MlxyXG5cclxuICBmaW5kRW5kcyA6IChlZGdlKSAtPlxyXG4gICAgQGgxLmZpbmRFbmQgZWRnZS5oMVxyXG4gICAgQGgxLmZpbmRFbmQgZWRnZS5oMlxyXG4gICAgQGgyLmZpbmRFbmQgZWRnZS5oMVxyXG4gICAgQGgyLmZpbmRFbmQgZWRnZS5oMiJdfQ==
//# sourceURL=C:\github\StarPatterns\coffee\edge.coffee
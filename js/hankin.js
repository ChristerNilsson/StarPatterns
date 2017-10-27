// Generated by CoffeeScript 1.12.7
var Hankin;

Hankin = (function() {
  function Hankin(a, v) {
    this.a = a;
    this.v = v;
    this.b = p5.Vector.add(this.a, this.v);
    this.end = null;
    this.prevD = null;
  }

  Hankin.prototype.show = function() {
    stroke(255, 0, 255);
    return line(this.a.x, this.a.y, this.end.x, this.end.y);
  };

  Hankin.prototype.findEnd = function(other) {
    var candidate, d, d1, d2, den, diff, numa, numb, ua, ub, x, y;
    den = other.v.y * this.v.x - other.v.x * this.v.y;
    if (!den) {
      return;
    }
    numa = other.v.x * (this.a.y - other.a.y) - other.v.y * (this.a.x - other.a.x);
    numb = this.v.x * (this.a.y - other.a.y) - this.v.y * (this.a.x - other.a.x);
    ua = numa / den;
    ub = numb / den;
    x = this.a.x + ua * this.v.x;
    y = this.a.y + ua * this.v.y;
    if (ua > 0 && ub > 0) {
      candidate = createVector(x, y);
      d1 = p5.Vector.dist(candidate, this.a);
      d2 = p5.Vector.dist(candidate, other.a);
      d = d1 + d2;
      diff = abs(d1 - d2);
      if (diff < 0.001) {
        if (!this.end) {
          this.end = candidate;
          return this.prevD = d;
        } else if (d < this.prevD) {
          this.prevD = d;
          return this.end = candidate;
        }
      }
    }
  };

  return Hankin;

})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFua2luLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXGhhbmtpbi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQU07RUFDVSxnQkFBQyxDQUFELEVBQUssQ0FBTDtJQUFDLElBQUMsQ0FBQSxJQUFEO0lBQUksSUFBQyxDQUFBLElBQUQ7SUFDakIsSUFBQyxDQUFBLENBQUQsR0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQVYsQ0FBYyxJQUFDLENBQUEsQ0FBZixFQUFrQixJQUFDLENBQUEsQ0FBbkI7SUFDTCxJQUFDLENBQUEsR0FBRCxHQUFPO0lBQ1AsSUFBQyxDQUFBLEtBQUQsR0FBUztFQUhHOzttQkFLZCxJQUFBLEdBQU8sU0FBQTtJQUNMLE1BQUEsQ0FBTyxHQUFQLEVBQVksQ0FBWixFQUFlLEdBQWY7V0FDQSxJQUFBLENBQUssSUFBQyxDQUFBLENBQUMsQ0FBQyxDQUFSLEVBQVcsSUFBQyxDQUFBLENBQUMsQ0FBQyxDQUFkLEVBQWlCLElBQUMsQ0FBQSxHQUFHLENBQUMsQ0FBdEIsRUFBeUIsSUFBQyxDQUFBLEdBQUcsQ0FBQyxDQUE5QjtFQUZLOzttQkFJUCxPQUFBLEdBQVUsU0FBQyxLQUFEO0FBQ1IsUUFBQTtJQUFBLEdBQUEsR0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQVIsR0FBWSxJQUFDLENBQUEsQ0FBQyxDQUFDLENBQWYsR0FBbUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFSLEdBQVksSUFBQyxDQUFBLENBQUMsQ0FBQztJQUN6QyxJQUFHLENBQUMsR0FBSjtBQUNFLGFBREY7O0lBRUEsSUFBQSxHQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBUixHQUFZLENBQUMsSUFBQyxDQUFBLENBQUMsQ0FBQyxDQUFILEdBQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFoQixDQUFaLEdBQWlDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBUixHQUFZLENBQUMsSUFBQyxDQUFBLENBQUMsQ0FBQyxDQUFILEdBQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFoQjtJQUNwRCxJQUFBLEdBQU8sSUFBQyxDQUFBLENBQUMsQ0FBQyxDQUFILEdBQU8sQ0FBQyxJQUFDLENBQUEsQ0FBQyxDQUFDLENBQUgsR0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQWhCLENBQVAsR0FBNEIsSUFBQyxDQUFBLENBQUMsQ0FBQyxDQUFILEdBQU8sQ0FBQyxJQUFDLENBQUEsQ0FBQyxDQUFDLENBQUgsR0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQWhCO0lBQzFDLEVBQUEsR0FBSyxJQUFBLEdBQU87SUFDWixFQUFBLEdBQUssSUFBQSxHQUFPO0lBQ1osQ0FBQSxHQUFJLElBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBSCxHQUFPLEVBQUEsR0FBSyxJQUFDLENBQUEsQ0FBQyxDQUFDO0lBQ25CLENBQUEsR0FBSSxJQUFDLENBQUEsQ0FBQyxDQUFDLENBQUgsR0FBTyxFQUFBLEdBQUssSUFBQyxDQUFBLENBQUMsQ0FBQztJQUVuQixJQUFHLEVBQUEsR0FBSyxDQUFMLElBQVcsRUFBQSxHQUFLLENBQW5CO01BQ0UsU0FBQSxHQUFZLFlBQUEsQ0FBYSxDQUFiLEVBQWdCLENBQWhCO01BQ1osRUFBQSxHQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBVixDQUFlLFNBQWYsRUFBMEIsSUFBQyxDQUFBLENBQTNCO01BQ0wsRUFBQSxHQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBVixDQUFlLFNBQWYsRUFBMEIsS0FBSyxDQUFDLENBQWhDO01BQ0wsQ0FBQSxHQUFJLEVBQUEsR0FBSztNQUNULElBQUEsR0FBTyxHQUFBLENBQUksRUFBQSxHQUFLLEVBQVQ7TUFDUCxJQUFHLElBQUEsR0FBTyxLQUFWO1FBQ0UsSUFBRyxDQUFDLElBQUMsQ0FBQSxHQUFMO1VBQ0UsSUFBQyxDQUFBLEdBQUQsR0FBTztpQkFDUCxJQUFDLENBQUEsS0FBRCxHQUFTLEVBRlg7U0FBQSxNQUdLLElBQUcsQ0FBQSxHQUFJLElBQUMsQ0FBQSxLQUFSO1VBQ0gsSUFBQyxDQUFBLEtBQUQsR0FBUztpQkFDVCxJQUFDLENBQUEsR0FBRCxHQUFPLFVBRko7U0FKUDtPQU5GOztFQVhRIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSGFua2luXHJcbiAgY29uc3RydWN0b3IgOiAoQGEsIEB2KSAtPlxyXG4gICAgQGIgPSBwNS5WZWN0b3IuYWRkIEBhLCBAdlxyXG4gICAgQGVuZCA9IG51bGxcclxuICAgIEBwcmV2RCA9IG51bGxcclxuXHJcbiAgc2hvdyA6IC0+XHJcbiAgICBzdHJva2UgMjU1LCAwLCAyNTVcclxuICAgIGxpbmUgQGEueCwgQGEueSwgQGVuZC54LCBAZW5kLnlcclxuXHJcbiAgZmluZEVuZCA6IChvdGhlcikgLT5cclxuICAgIGRlbiA9ICBvdGhlci52LnkgKiBAdi54IC0gb3RoZXIudi54ICogQHYueVxyXG4gICAgaWYgIWRlblxyXG4gICAgICByZXR1cm5cclxuICAgIG51bWEgPSBvdGhlci52LnggKiAoQGEueSAtIG90aGVyLmEueSkgLSBvdGhlci52LnkgKiAoQGEueCAtIG90aGVyLmEueClcclxuICAgIG51bWIgPSBAdi54ICogKEBhLnkgLSBvdGhlci5hLnkpIC0gQHYueSAqIChAYS54IC0gb3RoZXIuYS54KVxyXG4gICAgdWEgPSBudW1hIC8gZGVuXHJcbiAgICB1YiA9IG51bWIgLyBkZW5cclxuICAgIHggPSBAYS54ICsgdWEgKiBAdi54XHJcbiAgICB5ID0gQGEueSArIHVhICogQHYueVxyXG5cclxuICAgIGlmIHVhID4gMCBhbmQgdWIgPiAwXHJcbiAgICAgIGNhbmRpZGF0ZSA9IGNyZWF0ZVZlY3RvciB4LCB5XHJcbiAgICAgIGQxID0gcDUuVmVjdG9yLmRpc3QgY2FuZGlkYXRlLCBAYVxyXG4gICAgICBkMiA9IHA1LlZlY3Rvci5kaXN0IGNhbmRpZGF0ZSwgb3RoZXIuYVxyXG4gICAgICBkID0gZDEgKyBkMlxyXG4gICAgICBkaWZmID0gYWJzIGQxIC0gZDJcclxuICAgICAgaWYgZGlmZiA8IDAuMDAxXHJcbiAgICAgICAgaWYgIUBlbmQgXHJcbiAgICAgICAgICBAZW5kID0gY2FuZGlkYXRlXHJcbiAgICAgICAgICBAcHJldkQgPSBkXHJcbiAgICAgICAgZWxzZSBpZiBkIDwgQHByZXZEXHJcbiAgICAgICAgICBAcHJldkQgPSBkXHJcbiAgICAgICAgICBAZW5kID0gY2FuZGlkYXRlIl19
//# sourceURL=C:\github\StarPatterns\coffee\hankin.coffee
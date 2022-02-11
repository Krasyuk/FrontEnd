var Vector = function (components) {
    if ( components === undefined || typeof components !== "object") {
      throw "Improper argument; need an array object"
    }
    
    const l = components.length;
    const _sorted = components.sort();
    
    return {
      array: _sorted,
  
      add: function (v) {
        v = validateVector(v, l);
        var sum = [];
        for ( var i = 0; i < l; i++ ) {
          sum[i] = v[i] + this.array[i];
        }
        return new Vector(sum);
      },
  
      subtract: function (v) {
        v = validateVector(v, l);
        var sum = [];
        for ( var i = 0; i < l; i++ ) {
          sum[i] = this.array[i] - v[i];
        }
        return new Vector(sum);
      },
  
      dot: function (v) {
        v = validateVector(v, l);
        var sum = 0;
        for ( var i = 0; i < l; i++ ) {
          sum += this.array[i] * v[i];
        }
        return sum;
      },
  
      norm: function () {
        var norm = 0;
        for ( var i = 0; i < l; i++ ) {
          norm += Math.pow(this.array[i], 2);
        }
        return Math.pow(norm, 0.5)
      },
  
      toString: function () {
        return "(" + components.toString() + ")";
      },
  
      equals: function (v) {
        for ( var i = 0; i < l; i++ ) {
          if (v.array[i] !== this.array[i]) {
            return false;
          } else {
            return true;
          }
        }
      }
    }
  };
  
  function validateVector(v, l) {
    if ( v === undefined || v.array === undefined ) {
      throw "v or v.array undefined";
    } 

    if ( v.array.length === l ) {
      return v.array.sort();
    } else {
      throw "Error: Not the same size vector."
    }
  }

var	a =	new	Vector([1, 2, 3]);
var	b =	new	Vector([3, 4, 5]);
var	c =	new	Vector([5, 6, 7, 8]);

console.log(a.add(b))
console.log(a.subtract(b))
console.log(a.dot(b))
console.log(a.norm())
console.log(a.add(c))


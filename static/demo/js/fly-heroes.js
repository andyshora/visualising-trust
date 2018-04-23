/*
FloraJS-Flocking
Copyright (c) 2013 Vince Allen
vince@vinceallen.com
http://www.vinceallen.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
/* Version: 1.0.0 */
/* Build time: August 18, 2013 02:34:32 */

/*global exports, Flora, Burner */
(function(exports) {

  var plShipTop = new Flora.ColorPalette();

  plShipTop.addColor({
    min: 12,
    max: 24,
    startColor: [243, 76, 7],
    endColor: [203, 36, 0]
  });

  var totalHeroes = 4;

  var minWidth = 20,
      maxWidth = 40;

  var Heroes = {
    beforeStepHero: function() {

      var satellite = Burner.System.getAllItemsByAttribute('type', 'satellite')[0],
          inside = Flora.Utils.isInside(this, satellite);

      // Check to create or destroy a connector.
      if (inside && !this.connector) {
        this.connector = Burner.System.add('Connector', {
          parentA: this,
          parentB: satellite,
          zIndex: 10,
          borderColor: [255, 255, 255]
        });
      } else if (!inside && this.connector) {
        Burner.System.destroyItem(this.connector);
        this.connector = null;
      }
    },
    createHero: function(size, location, controlCamera) {

      var map = Flora.Utils.map;

      var hero = this.add('Agent', {
        controlCamera: controlCamera,
        flocking: true,
        followMouse: true,
        width: size,
        height: size,
        mass: map(size, minWidth, maxWidth, minWidth * 2, maxWidth * 2),
        color: plShipTop.getColor(),
        borderRadius: 100,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: [200, 255, 237],
        connector: null,
        zIndex: 100,
        location: location,
        beforeStep: Heroes.beforeStepHero
      });

      this.add('Mover', { // ship middle
        parent: hero,
        isStatic: true,
        color: [255, 255, 80],
        borderRadius: 100,
        width: map(size, minWidth, maxWidth, minWidth * 0.35, maxWidth * 0.35),
        height: map(size, minWidth, maxWidth, minWidth * 0.35, maxWidth * 0.35),
        offsetDistance: 0,
        zIndex: 101
      });

      var plShipBottom = new Flora.ColorPalette();

      plShipBottom.addColor({
        min: 12,
        max: 24,
        startColor: [4, 199, 100],
        endColor: [0, 159, 60]
      });

      var width = map(size, 10, 30, minWidth * 0.5, maxWidth * 0.5);
      this.add('Mover', {
        parent: hero,
        pointToParentDirection: true,
        isStatic: true,
        color: plShipBottom.getColor(),
        borderRadius: 100,
        width: width,
        height: width * 2,
        offsetDistance: width / 2,
        zIndex: 101
      });

      /*this.add('ParticleSystem', {
        parent: hero,
        burst: 1,
        burstRate: 30,
        emitRadius: 0,
        acceleration: new Burner.Vector(10, 10),
        beforeStep: function () {

        }
      });*/

      return hero;
    },
    createControlHero: function() {
      var location = function() {
        return new Burner.Vector(this.world.width / 2, this.world.height / 2);
      };
      return Heroes.createHero.call(this, 30, location, true);
    },
    createAllHeroes: function() {
      var randomNumber = Flora.Utils.getRandomNumber;
      var location = function() {
        var loc = new Burner.Vector(this.world.width / 2, this.world.height / 2),
            offset = new Burner.Vector(this.world.width / 2, this.world.height / 2);

        offset.normalize();
        offset.rotate(randomNumber(0, 360));
        offset.mult(randomNumber(0, this.world.width / 4));
        return loc.add(offset);
      };
      for (var i = 0; i < totalHeroes; i++) {
        var size = randomNumber(minWidth, maxWidth);
        Heroes.createHero.call(this, size, location, false);
      }
    }
  };

  exports.Heroes = Heroes;

}(exports));

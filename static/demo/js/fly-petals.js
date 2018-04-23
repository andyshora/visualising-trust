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

/*global exports, window, Burner, Flora */
(function(exports) {

  var totalPetals = 8,
      petalSize = window.innerWidth / 4;

  var Petals = {

    createPetalCenter: function(world) {

      return this.add('Point', {
        isStatic: true,
        colorMode: 'hsl',
        color: [9, 69, 100],
        opacity: 0.5,
        borderRadius: 100,
        borderWidth: petalSize / 4,
        borderStyle: 'solid',
        borderColor: [63, 100, 50],
        width: petalSize,
        height: petalSize,
        location: new Burner.Vector(world.width / 2, world.height / 2)
      });
    },
    createAllPetals: function(world) {

      for (var i = 0; i < totalPetals; i++) {

        var loc = new Burner.Vector(world.width / 2, world.height / 2),
            offset = new Burner.Vector(world.width / 2, world.height / 2);

        offset.normalize();
        offset.rotate(Flora.Utils.degreesToRadians(i * (360 / totalPetals)));
        offset.mult(petalSize / 1.5);
        loc.add(offset);

        this.add('Point', {
          isStatic: true,
          colorMode: 'hsl',
          color: [9, 69, 71 + i], // rgb [232, 146, 130]
          opacity: 0.25,
          borderRadius: 100,
          width: petalSize,
          height: petalSize,
          borderWidth: 0,
          location: loc
        });
      }
    }
  };

  exports.Petals = Petals;

}(exports));

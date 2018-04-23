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

  var satelliteSize = window.innerWidth / 4;

  var Satellite = {

    createSatellite: function() {

      var satellite = this.add('Agent', {
        type: 'satellite',
        pointToDirection: true,
        opacity: 1,
        width: satelliteSize,
        height: satelliteSize,
        mass: 500,
        colorMode: 'rgb',
        color: [232, 146, 130], // hsl [9, 69, 71]
        borderRadius: 100,
        borderWidth: satelliteSize / 2,
        borderStyle: 'double',
        borderColor: [48, 16, 16], // hsl [0, 67, 19]
        boxShadowOffset: new Burner.Vector(2, 1),
        boxShadowSpread: 2,
        boxShadowColor: [232, 146, 130], // hsl [9, 69, 71]
        zIndex: 10,
        followMouse: true
      });

      var frontArm = this.add('Mover', {
        parent: satellite,
        pointToDirection: false,
        pointToParentDirection: true,
        checkWorldEdges: false,
        angle: 45,
        isStatic: true,
        color: [48, 16, 16],
        borderRadius: 0,
        width: 2,
        height: satelliteSize * 2,
        offsetDistance: 0,
        zIndex: 1,
        dir: 1,
        beforeStep: Satellite.beforeStepSatArms
      });

      var frontHandA = this.add('Mover', {
        parent: frontArm,
        pointToDirection: false,
        pointToParentDirection: false,
        checkWorldEdges: false,
        angle: 0,
        isStatic: false,
        color: [255, 255, 255],
        borderRadius: 100,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: [48, 16, 16],
        width: satelliteSize * 0.5,
        height: satelliteSize * 0.5,
        offsetDistance: satelliteSize,
        offsetAngle: 90,
        zIndex: 20
      });

      // frontFingerA
      this.add('Mover', {
        parent: frontHandA,
        pointToDirection: false,
        pointToParentDirection: false,
        checkWorldEdges: false,
        angle: 0,
        isStatic: false,
        color: [48, 16, 16],
        borderRadius: 0,
        width: 2,
        height: satelliteSize * 0.25,
        offsetDistance: 0,
        offsetAngle: 0,
        zIndex: 20,
        beforeStep: function() {
          var vel = this.parent.parent.parent.velocity.mag() * 10;
          this.angle += vel;
        }
      });

      var backFootA = this.add('Mover', {
        parent: frontArm,
        pointToDirection: false,
        pointToParentDirection: false,
        checkWorldEdges: false,
        angle: 0,
        isStatic: false,
        color: [255, 255, 80],
        borderRadius: 100,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: [48, 16, 16],
        width: 20,
        height: 20,
        offsetDistance: -satelliteSize,
        offsetAngle: 90,
        zIndex: 20
      });

      // backToeA
      this.add('Mover', {
        parent: backFootA,
        pointToDirection: false,
        pointToParentDirection: false,
        checkWorldEdges: false,
        angle: 0,
        isStatic: false,
        color: [48, 16, 16],
        borderRadius: 0,
        width: 2,
        height: satelliteSize * 0.5,
        offsetDistance: 0,
        offsetAngle: 0,
        zIndex: 20,
        beforeStep: function() {
          var vel = this.parent.parent.parent.velocity.mag();
          this.angle += vel;
        }
      });

      //

      var backArm = this.add('Mover', {
        parent: satellite,
        pointToDirection: false,
        pointToParentDirection: true,
        checkWorldEdges: false,
        angle: -45,
        isStatic: true,
        color: [48, 16, 16],
        borderRadius: 0,
        width: 2,
        height: satelliteSize * 2,
        offsetDistance: 0,
        zIndex: 1,
        dir: -1,
        beforeStep: Satellite.beforeStepSatArms
      });

      var frontHandB = this.add('Mover', {
        parent: backArm,
        pointToDirection: false,
        pointToParentDirection: false,
        checkWorldEdges: false,
        angle: 0,
        isStatic: false,
        color: [255, 255, 255],
        borderRadius: 100,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: [48, 16, 16],
        width: satelliteSize * 0.15,
        height: satelliteSize * 0.15,
        offsetDistance: -satelliteSize,
        offsetAngle: 90,
        zIndex: 20,
        beforeStep: function() {

        }
      });

      // frontFingerB
      this.add('Mover', {
        parent: frontHandB,
        pointToDirection: false,
        pointToParentDirection: false,
        checkWorldEdges: false,
        angle: 0,
        isStatic: false,
        color: [48, 16, 16],
        borderRadius: 0,
        width: 2,
        height: satelliteSize * 0.06,
        offsetDistance: 0,
        offsetAngle: 0,
        zIndex: 20,
        beforeStep: function() {
          var vel = this.parent.parent.parent.velocity.mag() * 10;
          this.angle += vel;
        }
      });

      var backFootB = this.add('Mover', {
        parent: backArm,
        pointToDirection: false,
        pointToParentDirection: false,
        checkWorldEdges: false,
        angle: 0,
        isStatic: false,
        color: [255, 255, 80],
        borderRadius: 100,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: [48, 16, 16],
        width: 20,
        height: 20,
        offsetDistance: satelliteSize,
        offsetAngle: 90,
        zIndex: 20,
        beforeStep: function() {

        }
      });

      // backToeB
      this.add('Mover', {
        parent: backFootB,
        pointToDirection: false,
        pointToParentDirection: false,
        checkWorldEdges: false,
        angle: 0,
        isStatic: false,
        color: [48, 16, 16],
        borderRadius: 0,
        width: 2,
        height: satelliteSize * 0.5,
        offsetDistance: 0,
        offsetAngle: 0,
        zIndex: 20,
        beforeStep: function() {
          var vel = -this.parent.parent.parent.velocity.mag();
          this.angle += vel;
        }
      });
      return satellite;
    },
    beforeStepSatArms: function() {
      var parentAngle = Flora.Utils.radiansToDegrees(Math.atan2(this.parent.velocity.y, this.parent.velocity.x));
      this.angle = Flora.Utils.map(this.parent.velocity.mag(), 0, 1, 45, 0) * this.dir;
      this.angle += parentAngle;
    }
  };

  exports.Satellite = Satellite;

}(exports));

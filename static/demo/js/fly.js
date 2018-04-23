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

/*global exports, Flora, Burner, document */
var windowSize = Flora.Utils.getWindowSize();

Burner.System.init(function() {

  var world = Burner.System.firstWorld();

  /**
   * Create petals.
   */
  var petalCenter = exports.Petals.createPetalCenter.call(this, world);
  exports.Petals.createAllPetals.call(this, world);

  /**
   * Create Satellite and connector.
   */
  var satellite = exports.Satellite.createSatellite.call(this, world);
  this.add('Connector', {
    parentA: petalCenter,
    parentB: satellite,
    zIndex: 1,
    opacity: 0.5,
    borderColor: [232, 146, 130]
  });

  /**
   * Create Heroes.
   */
  exports.Heroes.createControlHero.call(this);
  exports.Heroes.createAllHeroes.call(this);

  /**
   * Create Walkers.
   */
  exports.Walkers.createWalkers.call(this);

}, {
  gravity: new Burner.Vector(0, 0),
  c: 0,
  color: [220, 210, 200],
  boundToWindow: false,
  width: windowSize.width * 3,
  height: windowSize.height * 3
},
  document.getElementById('worldA')
);

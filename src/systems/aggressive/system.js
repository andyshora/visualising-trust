class AggressiveSystem {
  constructor({ container, width = 500, height = 500 }) {
    this._container = container;
    this._width = width;
    this._height = height;
  }
  init() {
    const world = new Burner.World(this._container, {
      c: 0.01,
      gravity: new Burner.Vector(),
      width: this._width,
      height: this._height,
      borderWidth: 1,
      borderStyle: 'dashed',
      borderColor: [100, 100, 100],
      color: [0, 0, 0],
      boundToWindow: false
    });

    Burner.System.init(function() {
      let i;
      let max;
      const maxVehicles = 3;
      const { getRandomNumber } = Flora.Utils;
      const world1 = Burner.System.firstWorld();

      const _self = this;

      // create vehicles
      for (i = 0; i < maxVehicles; i += 1) {
        const obj = new Brait.Vehicle({
          system: _self,
          color: !i ? [255, 255, 255] : [255, 100, 0],
          borderColor: !i ? [255, 100, 0] : [255, 150, 50],
          viewArgs: [i],
          sensors: [
            new Brait.Sensor({
              type: 'light',
              behavior: 'AGGRESSIVE'
            })
          ],
          collisions: {
            light: Brait.Light.collide
          }
        });
        const eye = document.createElement('div');
        eye.id = 'eye' + obj.id;
        eye.className = 'eye';
        eye.style.background = !i ? 'rgb(100, 100, 100)' : 'rgb(255, 255, 255)',
        eye.style.opacity = 1;
        obj.el.appendChild(eye);
      }

      // create stimulants
      for (i = 0, max = (0.01 * world1.bounds[1]); i < max; i += 1) {
        Brait.Stimulus.create(
          null,
          new Burner.Vector(
            getRandomNumber(0, world1.width),
            getRandomNumber(0, world1.height)
          ),
          [Brait.Light]
        );
      }

      // add event listener to create random stimulant on mouseup
      Flora.Utils.addEvent(document, 'mouseup', Brait.Stimulus.createLight);

    }, world, null, true);
  }
  start() {
    Burner.System.start();
  }
}

export default AggressiveSystem;

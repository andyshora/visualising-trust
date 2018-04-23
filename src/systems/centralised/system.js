import _ from 'lodash';

class CentralisedSystem {
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

      const people = _.times(20).map(i => {
        const walker = this.add('Walker');
        walker.init({
          color: [240, 240, 240],
          borderWidth: 0,
          height: 10,
          width: 10,
          maxSpeed: 0.5,
          perlinAccelHigh: 0.050,
          perlinAccelLow: -0.050,
        });
        return walker;
      })

      
      // this.add('Agent', {
      //   seekTarget: walker,
      //   flocking: true
      // });

    }, world, null, true);
  }
  start() {
    Burner.System.start();
  }
}

export default CentralisedSystem;

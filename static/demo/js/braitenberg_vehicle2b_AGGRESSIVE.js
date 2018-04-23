const world = new window.Burner.World(document.getElementById('world'), {
  c: 0.01,
  gravity: new window.Burner.Vector(),
  width: window.Flora.Utils.getWindowSize().width / 0.75,
  height: window.Flora.Utils.getWindowSize().height / 0.75,
  borderWidth: 1,
  borderStyle: 'dashed',
  borderColor: [100, 100, 100],
  color: [0, 0, 0],
  boundToWindow: false
});

window.Burner.System.init(() => {
  let i;
  let max;
  const maxVehicles = 6;
  const { getRandomNumber } = window.Flora.Utils;
  const world1 = window.Burner.System.firstWorld();
  const _self = this;

  // create vehicles
  for (i = 0; i < maxVehicles; i += 1) {

    const obj = new window.Brait.Vehicle({
      system: _self,
      controlCamera: !i,
      color: !i ? [255, 255, 255] : [255, 100, 0],
      borderColor: !i ? [255, 100, 0] : [255, 150, 50],
      viewArgs: [i],
      sensors: [
        new window.Brait.Sensor({
          type: 'light',
          behavior: 'AGGRESSIVE'
        })
      ],
      collisions: {
        'light': window.Brait.Light.collide
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
  for (i = 0, max = (0.02 * world1.bounds[1]); i < max; i += 1) {
    window.Brait.Stimulus.create(null, new window.Burner.Vector(getRandomNumber(0, world1.width),
        getRandomNumber(0, world1.height)), [window.Brait.Light]);
  }

  // add event listener to create random stimulant on mouseup
  window.Flora.Utils.addEvent(document, 'mouseup', window.Brait.Stimulus.createLight);

}, world, null, true);

console.warn('Starting');
window.Burner.System.start();

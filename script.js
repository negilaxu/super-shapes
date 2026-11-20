const { animate, svg } = anime;

// Tunnel animation
animate('#tunnel circle', {
  scale: [{ to: 1.1, ease: 'inOutSine', duration: 250 }],
  alternate: true,
  loop: true,
  delay: (el, index) => index * 50,
});

// Conveyor animation
animate('.conveyor', {
  translateX: '-50%',
  duration: 1500,
  loop: true,
  ease: 'linear',
});

// ZigZag animation
const zigZagPath = document.querySelector('#zigzag path');
const drawable = svg.createDrawable(zigZagPath)[0];

animate(drawable, {
  draw: '0 1',
  duration: 3000,
  loop: true,
  alternate: true,
  ease: 'inOutSine',
});

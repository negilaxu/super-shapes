const { animate, svg, utils } = anime;

// Duplicating Elements
const duplicateHtml = (element, quantity) => {
  const newContent = new Array(quantity).fill(element.innerHTML).join('');

  element.innerHTML = newContent;
};

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

// Wave animation
const wavePath = document.querySelector('#wave path');
const waveDrawable = svg.createDrawable(wavePath)[0];

animate(waveDrawable, {
  draw: '0 1',
  duration: 2000,
  loop: true,
  alternate: true,
  ease: 'inOutSine',
});

// Cross element
const crosses = document.querySelector('#crosses');
duplicateHtml(crosses, 10);

// Cross animation
animate('#crosses path', {
  rotate: {
    to: 360,
    duration: 1200,
  },
  delay: (el, i, l) => i * 100,
  loop: true,
  alternate: true,
  ease: 'inOutSine',
});

// dots element
duplicateHtml(document.querySelector('#dots'), 40);
const dots = document.querySelectorAll('#dots .dot');
dots.forEach(dot => {
  animate(dot, {
    rotate: (el, i) => utils.random(90, 360),
    duration: (el, i) => utils.random(250, 750),
    loop: true,
    alternate: true,
    ease: 'inOutSine',
  });
});

// Circles element
duplicateHtml(document.querySelector('#circles'), 20);

// Circles animation
animate('#circles .dot', {
  scale: [{ from: 0, to: 1.2, ease: 'inOutSine', duration: 250 }],
  delay: (el, i) => i * 100,
  loop: true,
  alternate: true,
});

// Flash animation
animate('#flashes .flash', {
  backgroundColor: (el, i) => ['#fff636', '#cb89fc', '#fc3035', '#77ebfd'][i],
  delay: (el, i) => utils.random(50, 100),
  duration: 500,
  loop: true,
  alternate: true,
  ease: 'inOutSine',
});

// Squares animation
animate('#squares rect', {
  rotate: [45, 0, -45],
  delay: (el, i) => i * 100,
  duration: 750,
  loop: true,
  alternate: true,
  ease: 'inOutSine',
});

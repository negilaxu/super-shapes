const { animate, svg, utils } = anime;

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

// Duplicating Elements
const duplicateHtml = (element, quantity) => {
  if (!element) return;

  const newContent = new Array(quantity).fill(element.innerHTML).join('');
  element.innerHTML = newContent;
};

const crosses = document.querySelector('#crosses');
duplicateHtml(crosses, 10);

const dotsContainer = document.querySelector('#dots');
duplicateHtml(dotsContainer, 40);

const circlesContainer = document.querySelector('#circles');
duplicateHtml(circlesContainer, 20);

if (!prefersReducedMotion) {
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
  if (zigZagPath) {
    const drawable = svg.createDrawable(zigZagPath)[0];

    animate(drawable, {
      draw: '0 1',
      duration: 3000,
      loop: true,
      alternate: true,
      ease: 'inOutSine',
    });
  }

  // Wave animation
  const wavePath = document.querySelector('#wave path');

  if (wavePath) {
    const waveDrawable = svg.createDrawable(wavePath)[0];

    animate(waveDrawable, {
      draw: '0 1',
      duration: 2000,
      loop: true,
      alternate: true,
      ease: 'inOutSine',
    });
  }

  // Cross animation
  animate('#crosses path', {
    rotate: {
      to: 360,
      duration: 1200,
    },
    delay: (el, i) => i * 100,
    loop: true,
    alternate: true,
    ease: 'inOutSine',
  });

  // Dot animation
  const dots = document.querySelectorAll('#dots .dot');
  dots.forEach(dot => {
    animate(dot, {
      rotate: () => utils.random(90, 360),
      duration: () => utils.random(250, 750),
      loop: true,
      alternate: true,
      ease: 'inOutSine',
    });
  });

  // Circles animation
  animate('#circles .dot', {
    scale: [{ from: 0, to: 1.2, ease: 'inOutSine', duration: 250 }],
    delay: (el, i) => i * 100,
    loop: true,
    alternate: true,
  });

  // Flash animation
  const rootStyles = getComputedStyle(document.documentElement);

  const colors = ['--yellow', '--purple', '--red', '--blue'].map(name =>
    rootStyles.getPropertyValue(name).trim()
  );

  animate('#flashes .flash', {
    backgroundColor: (el, i) => colors[i],
    delay: () => utils.random(50, 100),
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
}

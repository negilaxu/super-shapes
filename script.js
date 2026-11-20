anime.animate('#tunnel circle', {
  scale: [{ to: 1.1, ease: 'InOutSine', duration: 250 }],
  direction: 'alternate',
  loop: true,
  delay: (el, index) => index * 50,
});

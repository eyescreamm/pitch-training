const NOTES = [
  'c3', 'df3', 'd3', 'ef3', 'e3', 'f3', 'gf3', 'g3', 'af3', 'a3', 'bf3', 'b3'
];

const KEY_TO_NOTE = {
  z: 'c3',
  s: 'df3',
  x: 'd3',
  d: 'ef3',
  c: 'e3',
  v: 'f3',
  g: 'gf3',
  b: 'g3',
  h: 'af3',
  n: 'a3',
  j: 'bf3',
  m: 'b3',
};

const NOTE_TO_KEY = {
  c3 : 'z',
  df3: 's',
  d3 : 'x',
  ef3: 'd',
  e3 : 'c',
  f3 : 'v',
  gf3: 'g',
  g3 : 'b',
  af3: 'h',
  a3 : 'n',
  bf3: 'j',
  b3 : 'm',
};

const VALID_KEYS = [
  'z',
  's',
  'x',
  'd',
  'c',
  'v',
  'g',
  'b',
  'h',
  'n',
  'j',
  'm'
];

export {NOTES};
export {NOTE_TO_KEY};
export {KEY_TO_NOTE};
export {VALID_KEYS};

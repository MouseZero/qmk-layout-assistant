const {flowRight} = require('lodash')

const keyBindings = {
  f: {
    label: 'find',
    command: 'LGUI(KC_F)'
  },
  r: {
    label: 'replace',
    command: 'LGUI(LALT(KC_F))'
  },
  g: {
    label: 'find in file',
    command: 'LGUI(LCTL(LSFT(KC_F)))'
  },
  t: {
    label: 'replace in file',
    command: 'LGUI(LCTL(LSFT(KC_R)))'
  },
  p: {
    label: 'file search',
    command: 'LGUI(KC_P)'
  },
  s: {
    label: 'Find Function',
    command: 'LGUI(LSFT(KC_F))'
  },
  e: {
    label: 'Side Explorer',
    command: 'LGUI(LSFT(KC_E))'
  },
  w: {
    label: 'Side Git',
    command: 'LGUI(LSFT(KC_E))'
  },
  q: {
    label: 'Toggle Side',
    command: 'LGUI(LALT(LSFT(KC_1)))'
  },
  l: {
    label: 'Next Tab',
    command: 'LCTL(KC_TAB)'
  },
  h: {
    label: 'Previous Tab',
    command: 'LCTL(LSFT(KC_TAB))'
  },
  a: {
    label: 'Add Bookmark',
    command: 'LGUI(LALT(KC_K))'
  },
  b: {
    label: 'View Bookmarks',
    command: 'LGUI(LALT(KC_B))'
  },
  esc: {
    label: 'To Main Layer',
    command: 'TO(_MAIN_MAC)'
  }
}

const keyboardLayout = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
  ['esc', 'tab', 'super', 'shift', 'backspace', 'ctl', 'alt', 'space', 'fn', '-', '\'', 'enter']
]

const addKeyboarLayout = (obj) => ({keyboardLayout, ...obj})

const utils = {
  getShortcut: bindings => key => {
    if (bindings[key]) return bindings[key]['command']
    return 'KC_TRNS'
  },
  map2D: func => array2D => array2D.map(array => array.map(func)),
  convertArrayToText: array => array.reduce((prev, current) => {
    return prev + current + ', '
  }, ''),
  combinedStrings: array => array.reduce((prev, current) => {
    return prev + '\n' + current
  }),
  pipe: fnArray => startValue => fnArray.reduce((prev, currentFunc) => {
    return currentFunc(prev)
  }, startValue),
  removeLastComma: string => {
    const lastIndex = string.lastIndexOf(',')
    return string.slice(0, lastIndex)
  }
}

const convertToShortcut = utils.getShortcut(keyBindings)
const make2DShortcutList = utils.map2D(convertToShortcut)
const convertLinesToText = shortcuts => shortcuts.map(shortcuts => utils.convertArrayToText(shortcuts))
const addFirstLine = array => ['[_VSCODE] = LAYOUT(', ...array]
const addLastLine = array => [...array, '),']
const indentLines = array => array.map(x => '  ' + x)
const removeLastShortcutComma = a => {
  a[a.length-1] = utils.removeLastComma(a[a.length-1])
  return a
}

const result = utils.pipe([
  make2DShortcutList,
  convertLinesToText,
  removeLastShortcutComma,
  indentLines,
  addFirstLine,
  addLastLine,
  utils.combinedStrings
])(keyboardLayout)

console.log(result)

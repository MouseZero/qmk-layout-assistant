const {flowRight} = require('lodash')

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

function getShortcuts (keyBindings) {
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

  return utils.pipe([
    make2DShortcutList,
    convertLinesToText,
    removeLastShortcutComma,
    indentLines,
    addFirstLine,
    addLastLine,
    utils.combinedStrings
  ])(keyboardLayout)
}

module.exports = {
  getShortcuts
}
const {getShortcuts} = require('./utils')
const vscodeBindings = require('./shortcuts/vscode')
const keyboardBindings = require('./shortcuts/keyboardSettings')
const htmlVisual = require('./html-utils')

const vsC = getShortcuts(vscodeBindings, '_VSCODE')
const kb = getShortcuts(keyboardBindings, '_KEYBOARD_SETTINGS')

const html = htmlVisual(vscodeBindings)

console.log(vsC, '\n', kb)
console.log(html)

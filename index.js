const {getShortcuts} = require('./utils')
const vscodeBindings = require('./shortcuts/vscode')
const keyboardBindings = require('./shortcuts/keyboardSettings')

const vsC = getShortcuts(vscodeBindings, '_VSCODE')
const kb = getShortcuts(keyboardBindings, '_KEYBOARD_SETTINGS')

console.log(vsC, '\n', kb)

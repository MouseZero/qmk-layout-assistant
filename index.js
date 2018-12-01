const {getShortcuts} = require('./utils')
const vscodeBindings = require('./shortcuts/vscode')

const vsC = getShortcuts(vscodeBindings)

console.log(vsC)

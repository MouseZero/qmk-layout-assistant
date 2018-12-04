function createHtmlVisual (keyBindings) {
  const keyboardLayout = [
    ['q', 'w', 'e', 'r', 't', null, null, 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', null, null,  'h', 'j', 'k', 'l', ';'],
    ['z', 'x', 'c', 'v', 'b', null, null,  'n', 'm', ',', '.', '/'],
    ['esc', 'tab', 'super', 'shift', 'backspace', 'ctl', 'alt', 'space', 'fn', '-', '\'', 'enter']
  ]

  const tableContent = keyboardLayout.reduce((prev, currentRow) => {
    const rowHtml = currentRow.reduce((prev, key) => {
      if(key === null || !keyBindings[key]) return prev + '\n<td></td>\n'
        return prev + `\n<td>${keyBindings[key]['label']}</td>\n`
    }, '')
    return prev + `\n<tr>${rowHtml}</tr>\n`
  }, '')

  return `<table>\n${tableContent}\n</table>`
}

module.exports = createHtmlVisual


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
  }
}

const getShortcut = bindings => key => {
  if (bindings[key]) return bindings[key]['command']
  return 'KC_TRNS'
}

const getLabel = bindings => key => {
  if (bindings[key]) return bindings[key]['label']
  return 'N/A'
}

const getVSShortcut = getShortcut(keyBindings)
const getShortcutsFromKeys = keys => keys.map(key => getVSShortcut(key))
const topRowKeys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
const middleRowKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';']
const bottomRowKeys = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
const controlKeys = ['esc', 'tab', 'super', 'shift', 'backspace', 'ctl', 'alt', 'space', 'fn', '-', '\'', 'enter']

const printNormalRow = getShortcutsFromKeys(topRowKeys).reduce((prev, shortcut) => {
  return prev + shortcut + ', '
}, '')

console.log(printNormalRow)

const firstLine = '[_VSCODE] = LAYOUT('
const lastLine = '),'

  // [_RS] = LAYOUT( /* [> RAISE <] */
  //   KC_EXLM, KC_AT,   KC_UP,   KC_LCBR, KC_RCBR,                   KC_PGUP, KC_7,    KC_8,   KC_9, KC_ASTR ,
  //   KC_HASH, KC_LEFT, KC_DOWN, KC_RGHT, KC_DLR,                    KC_PGDN, KC_4,    KC_5,   KC_6, KC_PLUS ,
  //   KC_LBRC, KC_RBRC, KC_LPRN, KC_RPRN, KC_AMPR,                   KC_GRV,  KC_1,    KC_2,   KC_3, KC_BSLS ,
  //   TG(_LW), KC_NO,  KC_LGUI, KC_LSFT, KC_BSPC, KC_LCTL, KC_LALT, KC_SPC,  KC_TRNS, KC_DOT, KC_0, KC_EQL  ),

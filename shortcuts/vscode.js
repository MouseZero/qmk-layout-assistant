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
  },
  backspace: {
    label: 'CTL',
    command: 'KC_LCTL'
  },
  space: {
    label: 'Tab',
    command: 'KC_TAB'
  }
}

module.exports = keyBindings
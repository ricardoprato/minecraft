import { useEffect, useState } from 'react'
const ACTIONS_KEYBOARD_MAP = {
  KeyW: 'moveFoward',
  KeyS: 'moveBackward',
  KeyA: 'moveLeft',
  KeyD: 'moveRight',
  Space: 'jump',
  Digit1: 'dirt',
  Digit2: 'glass',
  Digit3: 'grass',
  Digit4: 'log',
  Digit5: 'wood'
}
export function useKeyboard () {
  const [actions, setActions] = useState({
    moveFoward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    dirt: false,
    grass: false,
    glass: false,
    wood: false,
    log: false
  })
  useEffect(() => {
    const handleKeyDown = (event) => {
      const { code } = event
      const action = ACTIONS_KEYBOARD_MAP[code]
      if (action) {
        setActions((prev) => ({ ...prev, [action]: true }))
      }
    }
    const handleKeyUp = (event) => {
      const { code } = event
      const action = ACTIONS_KEYBOARD_MAP[code]
      if (action) {
        setActions((prev) => ({ ...prev, [action]: false }))
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])
  return actions
}

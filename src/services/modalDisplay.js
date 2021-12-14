/*eslint no-unused-vars: off */
import React, { useEffect, useState } from 'react'


export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false)

  function toggle() {
    setIsShowing(!isShowing)
  }

  return {
    isShowing,
    toggle,
  }
}


import React, { FC, ReactNode, useEffect, useCallback } from 'react'
import styles from './styles.module.scss'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { useCloseOnEscape } from '../../../constants/hooks'

interface IProps {
  children: ReactNode
  onClose: () => void
}

/*
  Adds Escape hotkey for component
*/

const Modal: FC<IProps> = ({ children, onClose }) => {
  const onEscape = useCallback(
    event => {
      if (event.key !== 'Escape') return

      onClose()
    },
    [onClose]
  )

  useEffect(() => {
    window.addEventListener('keyup', onEscape)

    return () => {
      window.removeEventListener('keyup', onEscape)
    }
  }, [onEscape])

  useEffect(() => {
    disableBodyScroll(document.body, { reserveScrollBarGap: true })
    return () => enableBodyScroll(document.body)
  }, [])

  return <div className={styles.wrap}>{children}</div>
}

export { Modal }

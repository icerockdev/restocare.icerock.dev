/* Copyright (c) 2020 IceRock MAG Inc. Use of this source code is governed by the Apache 2.0 license. */

import React, { FC, ReactNode } from 'react'
import styles from './styles.module.scss'

interface IProps {
  children: ReactNode
}

const SubmitButton: FC<IProps> = ({ children }) => {
  return (
    <button className={styles.wrap} type="submit">
      {children}
    </button>
  )
}

export { SubmitButton }

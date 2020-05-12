/* Copyright (c) 2020 IceRock MAG Inc. Use of this source code is governed by the Apache 2.0 license. */

import React, { FC } from 'react'
import styles from './styles.module.scss'
import { t } from '../../../i18n'

interface IProps {}

const Footer: FC<IProps> = ({}) => {
  return <div className={styles.wrap}>{t('copyright')}</div>
}

export { Footer }

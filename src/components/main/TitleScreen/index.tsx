/* Copyright (c) 2020 IceRock MAG Inc. Use of this source code is governed by the Apache 2.0 license. */

import React, { FC } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'
import { t } from '../../../i18n'
import { usePathPrefix } from '../../../constants/hooks'

interface IProps {}

const TitleScreen: FC<IProps> = ({}) => {
  const prefix = usePathPrefix()

  return (
    <div
      id="title"
      className={classNames('screen', styles.wrap)}
      style={{ backgroundImage: `url('${prefix}/images/splash.jpg')` }}
    >
      <div className={styles.title}>
        <div className={styles.title__left}>
          <div className={styles.text}>
            <img src={`${prefix}/images/line.svg`} alt="-- -" />

            <img
              src={`${prefix}/images/logo.svg`}
              alt="IceRock"
              className={styles.title__logo}
            />

            <h1>{t('title.title')}</h1>

            <div className={styles.links}>
              <span>{t('title.fast')}</span>
              <span>{t('title.free_launch')}</span>
              <span>{t('title.ios_android')}</span>
            </div>
          </div>
        </div>

        <div className={styles.title__right}>
          <div className={styles.title__apps}>
            <img src={`${prefix}/images/app_1.png`} className={styles.app} />
            <img src={`${prefix}/images/app_2.png`} className={styles.app} />
          </div>
        </div>
      </div>
    </div>
  )
}

export { TitleScreen }

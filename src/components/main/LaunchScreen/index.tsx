/* Copyright (c) 2020 IceRock MAG Inc. Use of this source code is governed by the Apache 2.0 license. */

import React, { FC } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { t } from '../../../i18n'
import { usePathPrefix } from '../../../constants/hooks'

interface IProps {}

const LaunchScreen: FC<IProps> = ({}) => {
  const prefix = usePathPrefix()

  return (
    <div className={styles.wrap} id="launch">
      <div className={classNames(styles.image, styles.image_desktop)}>
        <img
          src={`${prefix}/images/launch_desktop.svg`}
          alt="launch"
        />
      </div>

      <div className={styles.content}>
        <h1>{t('launch.title')}</h1>

        <div className={styles.terms}>
          <div className={styles.terms__term}>
            <img src={`${prefix}/images/check.svg`} alt="v" />
            <div>{t('launch.term_1')}</div>
          </div>

          <div className={styles.terms__term}>
            <img src={`${prefix}/images/check.svg`} alt="v" />
            <div>{t('launch.term_2')}</div>
          </div>

          <div className={styles.terms__term}>
            <img src={`${prefix}/images/check.svg`} alt="v" />
            <div>{t('launch.term_3')}</div>
          </div>
        </div>
      </div>

      <div className={classNames(styles.image, styles.image_mobile)}>
        <img src={`${prefix}/images/launch_mobile.svg`} alt="launch" />
      </div>
    </div>
  )
}

export { LaunchScreen }

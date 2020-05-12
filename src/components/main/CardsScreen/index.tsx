/* Copyright (c) 2020 IceRock MAG Inc. Use of this source code is governed by the Apache 2.0 license. */

import React, { FC } from 'react'
import styles from './styles.module.scss'
import { t } from '../../../i18n'
import classnames from 'classnames'
import { usePathPrefix } from '../../../constants/hooks'

interface IProps {}

const CardsScreen: FC<IProps> = ({}) => {
  const prefix = usePathPrefix()

  return (
    <div className={classnames(styles.wrap)} id="cards">
      <div className={classnames('container', styles.container)}>
        <h1>{t('cards.title')}</h1>
        <h4>{t('cards.subtitle')}</h4>

        <img
          src={`${prefix}/images/line.svg`}
          alt="-- -"
          className={styles.line}
        />

        <div className={styles.cards}>
          <div className={styles.cards__card}>
            <img src={`${prefix}/images/truck.svg`} alt="truck" />

            <h5>{t('cards.card_title_1')}</h5>

            <p>{t('cards.card_text_1')}</p>
          </div>
          <div className={styles.cards__card}>
            <img src={`${prefix}/images/cashbox.svg`} alt="cashbox" />

            <h5>{t('cards.card_title_2')}</h5>

            <p>{t('cards.card_text_2')}</p>
          </div>
          <div className={styles.cards__card}>
            <img src={`${prefix}/images/address.svg`} alt="address" />

            <h5>{t('cards.card_title_3')}</h5>

            <p>{t('cards.card_text_3')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { CardsScreen }

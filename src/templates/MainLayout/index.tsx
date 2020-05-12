/* Copyright (c) 2020 IceRock MAG Inc. Use of this source code is governed by the Apache 2.0 license. */

import React, { FC, ReactNode } from 'react'
import styles from './styles.module.scss'
import { Trans } from '../../i18n'
import { PageTitle } from '../../i18n/PageTitle'
import { Metrics } from '../../components/main/Metrics'
import { Preloader } from '../../components/main/Preloader'

interface IProps {
  locale: string
  location: Location
  title: string
  children?: ReactNode
}

const MainLayout: FC<IProps> = ({ locale, title = '', children }) => {
  return (
    <Trans locale={locale}>
      <PageTitle>{title}</PageTitle>
      <Metrics />

      <div className={styles.wrap}>{children}</div>
    </Trans>
  )
}

export { MainLayout }

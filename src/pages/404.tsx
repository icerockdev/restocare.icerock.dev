/* Copyright (c) 2020 IceRock MAG Inc. Use of this source code is governed by the Apache 2.0 license. */

import React, { FC } from 'react'
import { MainLayout } from '../templates/MainLayout'
import { PageProps } from 'gatsby'
import { t } from '../i18n'

type IProps = PageProps<{}, { locale: string }>

const NotFoundPage: FC<IProps> = ({
  pageContext: { locale = 'en' },
  location,
}) => {
  return (
    <MainLayout title="title.not_found" locale={locale} location={location}>
      <div>{t('main.not_found')}</div>
      <div>{locale}</div>
    </MainLayout>
  )
}

export default NotFoundPage

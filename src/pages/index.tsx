/* Copyright (c) 2020 IceRock MAG Inc. Use of this source code is governed by the Apache 2.0 license. */

import React, { FC } from 'react'
import { MainLayout } from '../templates/MainLayout'
import { PageProps } from 'gatsby'
import { DEFAULT_LOCALE } from '../i18n'
import { TitleScreen } from '../components/main/TitleScreen'
import { CardsScreen } from '../components/main/CardsScreen'
import { LaunchScreen } from '../components/main/LaunchScreen'
import { ContactFormScreen } from '../components/main/ContactFormScreen'
import { Footer } from '../components/main/Footer'

type IProps = PageProps<{}, { locale: string }>

const AboutPage: FC<IProps> = ({
  location,
  pageContext: { locale = DEFAULT_LOCALE },
}) => {
  return (
    <MainLayout locale={locale} location={location} title="title.title">
      <TitleScreen />
      <CardsScreen />
      <LaunchScreen />
      <ContactFormScreen />
      <Footer />
    </MainLayout>
  )
}

export default AboutPage

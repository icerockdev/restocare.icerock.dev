/* Copyright (c) 2020 IceRock MAG Inc. Use of this source code is governed by the Apache 2.0 license. */

import React, { FC, ReactNode } from 'react'
import {
  IntlProvider,
  IntlShape,
  injectIntl,
} from 'react-intl'
import flatten from 'flat'
import locales from '../constants/locales'

import en from './locales/en.json'
import ru from './locales/ru.json'

const messages = {
  en: flatten(en) as Record<string, string>,
  ru: flatten(ru) as Record<string, string>,
}

export type Locale = keyof typeof messages
export const DEFAULT_LOCALE =
  Object.keys(locales).find(locale => locales[locale].default) || 'en'

type IProps = ReactNode & {
  locale: string
}

const Trans: FC<IProps> = ({ locale, children }) => {
  return (
    <IntlProvider locale={locale} messages={messages[locale as Locale]}>
      {children}
    </IntlProvider>
  )
}

const trans: FC<{ id: string; intl: IntlShape }> = ({ id, intl }) => {
  const placeholder = intl.formatMessage({ id })
  return <span dangerouslySetInnerHTML={{ __html: placeholder }} />
}

const t: FC<string> = (id: string) => {
  return injectIntl(trans)({ id })
}

export { Trans, t }

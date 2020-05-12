/* Copyright (c) 2020 IceRock MAG Inc. Use of this source code is governed by the Apache 2.0 license. */

import React, { FC, HTMLAttributes } from 'react'
import { useIntl } from 'react-intl'
import { Link } from 'gatsby'
import { DEFAULT_LOCALE } from '../'

type IProps = HTMLAttributes<HTMLAnchorElement> & {
  to: string
  locale?: string
}

const TLink: FC<IProps> = ({
  to,
  children,
  locale: forcedLocale,
  ...props
}) => {
  const intl = useIntl()
  const locale = forcedLocale || intl.locale

  return (
    <Link to={locale === DEFAULT_LOCALE ? to : `/${locale}${to}`} {...props}>
      {children}
    </Link>
  )
}

export { TLink }

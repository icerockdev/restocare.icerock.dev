/* Copyright (c) 2020 IceRock MAG Inc. Use of this source code is governed by the Apache 2.0 license. */

import React, { FC, useMemo } from 'react'
import { Helmet } from 'react-helmet'
import { useIntl } from 'react-intl'

interface IProps {
  children: string
}

const PageTitle: FC<IProps> = ({ children }) => {
  const { messages } = useIntl()

  const title = useMemo(
    () => (children && messages[children]) || children || '',
    [children, messages]
  )

  return (
    <Helmet>
      <title>IceRock{title ? ` - ${title}` : ''}</title>
    </Helmet>
  )
}

export { PageTitle }

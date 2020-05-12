/* Copyright (c) 2020 IceRock MAG Inc. Use of this source code is governed by the Apache 2.0 license. */

import { useStaticQuery, graphql } from 'gatsby'
import { useCallback, useEffect } from 'react';
/*
  usePathPrefix - used for sites, that not in /, returns pathPrefix for gatsby
*/
export const usePathPrefix = (): string => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        pathPrefix
      }
    }
  `)

  return process.env.NODE_ENV === 'development' ? '' : data.site.pathPrefix
}

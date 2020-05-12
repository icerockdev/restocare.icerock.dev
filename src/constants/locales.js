/* Copyright (c) 2020 IceRock MAG Inc. Use of this source code is governed by the Apache 2.0 license. */

const ru = require('date-fns/locale/ru')
const enGb = require('date-fns/locale/en-GB')

module.exports = {
  en: {
    path: 'en',
    locale: 'English',
    date: enGb.default,
  },
  ru: {
    path: 'ru',
    locale: 'Russian',
    default: true,
    date: ru.default,
  },
}

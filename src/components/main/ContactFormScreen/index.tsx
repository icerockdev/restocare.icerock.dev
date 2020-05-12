/* Copyright (c) 2020 IceRock MAG Inc. Use of this source code is governed by the Apache 2.0 license. */

import React, { FC, useState, useCallback, useEffect } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { TextInput } from '../../inputs/TextInput'
import { SubmitButton } from '../../inputs/SubmitButton'
import { t } from '../../../i18n'
import axios from 'axios'
import { usePathPrefix } from '../../../constants/hooks'
import { Modal } from '../Modal'

interface IProps {}

const STATES = {
  SUCCESS: 'success',
  LOADING: 'loading',
}

function getCookie(name: string) {
  var matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)'
    )
  )
  return matches ? decodeURIComponent(matches[1]) : undefined
}

const getGa = () => {
  if (window.ga && window.ga.getAll && window.ga.getAll().length) {
    return window.ga.getAll()[0].get('clientId')
  }

  const cookie = getCookie('_ga')
  return cookie ? cookie.replace(/^[^\.]+\.[^\.]+\./, '') : ''
}

const ContactFormScreen: FC<IProps> = ({}) => {
  const prefix = usePathPrefix()

  const [state, setState] = useState('')
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const validateFields = useCallback(() => {
    const errors = {
      name: !name || name.length <= 2,
      company: !company || company.length <= 2,
      phone: !phone || phone.length <= 2,
    }

    setErrors(errors)

    return !Object.values(errors).some(val => val)
  }, [name, company, phone, email, setErrors])

  const onSubmit = useCallback(
    async event => {
      event.preventDefault()

      try {
        if (!validateFields()) throw new Error()

        setState(STATES.LOADING)

        const referrer = document?.referrer || ''
        const googleId = getGa()

        const result = await axios.post(process.env.GATSBY_API_URL || '', {
          email,
          phone,
          company,
          name,
          referrer,
          googleId,
        })

        if ((window as any).gtag) {
          ;(window as any).gtag('event', 'Сообщение отправлено', {
            event_category: 'contact',
            event_action: 'sent',
          })
        }

        if ((window as any).ym) {
          ;(window as any).ym(62732482, 'reachGoal', 'form-submitted')
        }

        setState(STATES.SUCCESS)
      } catch (e) {
        setState('')
      }
    },
    [validateFields, setState]
  )

  const onSuccessClose = useCallback(() => {
    setState('')
  }, [setState])

  useEffect(() => setErrors({ ...errors, name: false }), [name])
  useEffect(() => setErrors({ ...errors, company: false }), [company])
  useEffect(() => setErrors({ ...errors, phone: false }), [phone])
  useEffect(() => setErrors({ ...errors, email: false }), [email])

  return (
    <div className={styles.wrap} id="contact">
      <div
        className={classNames('container', styles.content, {
          [styles.loading]: state === STATES.LOADING,
          [styles.success]: state === STATES.SUCCESS,
        })}
      >
        <h1>{t('contact.title')}</h1>
        <form className={styles.form} onSubmit={onSubmit}>
          <TextInput
            name="name"
            value={name}
            handler={setName}
            label={'contact.your_name'}
            icon={`${prefix}/images/contact_name.svg`}
            hasError={errors.name}
          />

          <TextInput
            name="company"
            value={company}
            handler={setCompany}
            label={'contact.company_name'}
            icon={`${prefix}/images/contact_company.svg`}
            hasError={errors.company}
          />

          <TextInput
            name="phone"
            value={phone}
            handler={setPhone}
            icon={`${prefix}/images/contact_phone.svg`}
            placeholder="+7 (000) 000 00 00"
            hasError={errors.phone}
            mask="+9 (999) 999 99 99"
          />

          <TextInput
            name="email"
            value={email}
            handler={setEmail}
            label="contact.email"
            icon={`${prefix}/images/contact_email.svg`}
            hasError={errors.email}
          />

          <SubmitButton>{t('contact.send')}</SubmitButton>
        </form>

        <div className={styles.terms}>
          {t('contact.terms')}
          <a href="CHANGE_ME" target="_blank" rel="nofollow">
            {t('contact.personal_data')}
          </a>
        </div>

        {state === STATES.SUCCESS && (
          <Modal onClose={onSuccessClose}>
            <div className={styles.result} onClick={onSuccessClose}>
              <h1>{t('contact.success_title')}</h1>
              <div>{t('contact.success_subtitle')}</div>

              <SubmitButton>OK</SubmitButton>
            </div>
          </Modal>
        )}
      </div>
    </div>
  )
}

export { ContactFormScreen }

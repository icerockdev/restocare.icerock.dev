/* Copyright (c) 2020 IceRock MAG Inc. Use of this source code is governed by the Apache 2.0 license. */

import React, { FC, useCallback, useState } from 'react'
import styles from './styles.module.scss'
import { t } from '../../../i18n'
import classNames from 'classnames'
import InputMask from 'react-input-mask'

interface IProps {
  value: string
  label?: string
  placeholder?: string
  name: string
  icon: string
  hasError?: boolean
  mask?: string
  handler: (val: string) => void
}

const TextInput: FC<IProps> = ({
  value,
  label,
  name,
  icon,
  hasError,
  placeholder,
  handler,
  mask,
}) => {
  const [focused, setFocused] = useState(false)
  const onChange = useCallback(event => handler(event.target.value), [handler])

  const onFocus = useCallback(() => setFocused(true), [setFocused])
  const onBlur = useCallback(() => setFocused(false), [setFocused])

  return (
    <div className={classNames(styles.wrap, { [styles.has_error]: hasError })}>
      <div className={styles.icon}>
        <img src={icon} alt={label} />
      </div>

      <div
        className={classNames(styles.input, {
          [styles.focused]: focused || value,
          [styles.without_label]: !label,
        })}
      >
        {label && (
          <div className={styles.input__label}>
            {t(label)} {mask}
          </div>
        )}

        <div className={styles.input__error}>
          {t('contact.fill_this_field')}
        </div>

        {mask ? (
          <InputMask
            type="text"
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            mask={mask}
            formatChars={{ '9': '[0-9]', t: '[0-9-]', '?': '[0-9 ]' }}
            maskChar={null}
          />
        ) : (
          <input
            type="text"
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        )}
      </div>
    </div>
  )
}

export { TextInput }

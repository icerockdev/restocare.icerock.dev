import React, { FC, useState, useCallback } from 'react'
import styles from './styles.module.scss'
import { t } from '../../../i18n'
import { useIntl } from 'react-intl'

interface IProps {}

const haveSeenTerms = () => {
  try {
    return localStorage.getItem('have_read_terms') === '1' || false
  } catch (e) {
    return false
  }
}

const TermsModal: FC<IProps> = ({}) => {
  const { messages } = useIntl()

  const [shown, setShown] = useState(haveSeenTerms())

  const setSeenTerms = useCallback(() => {
    localStorage.setItem('have_read_terms', '1')
    setShown(true)
  }, [setShown])

  if (shown) return null

  return (
    <div className={styles.wrap}>
      <div className={styles.text}>
        {t('terms.text')}{' '}
        <a href={messages['terms.link_url'] as string} target="_blank">
          {t('terms.link_text')}
        </a>
      </div>

      <div className={styles.button}>
        <button onClick={setSeenTerms}>{t('terms.button')}</button>
      </div>
    </div>
  )
}

export { TermsModal }

import React, { FC, useState, useCallback, useEffect } from 'react'
import styles from './styles.module.scss'
import { t } from '../../../i18n'
import { useIntl } from 'react-intl'
import { Modal } from '../Modal'

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

  const [shown, setShown] = useState(true)
  const [show_modal, setShowModal] = useState(false)

  const setSeenTerms = useCallback(() => {
    localStorage.setItem('have_read_terms', '1')
    setShown(true)
  }, [setShown])

  const showModal = useCallback(() => setShowModal(true), [setShowModal])
  const hideModal = useCallback(() => setShowModal(false), [setShowModal])

  useEffect(() => {
    setTimeout(() => setShown(haveSeenTerms()), 500)
  }, [])

  if (shown) return <div className={styles.nope} />

  return (
    <div className={styles.wrap}>
      {show_modal && (
        <Modal onClose={hideModal}>
          <div className={styles.modal}>
            {t('terms.text')}{' '}
            <a href={messages['terms.link_url'] as string} target="_blank">
              {t('terms.link_text_short')}
            </a>
            <div className={styles.button}>
              <button onClick={hideModal}>{t('terms.button')}</button>
            </div>
          </div>
        </Modal>
      )}

      {!show_modal && (
        <div className={styles.content}>
          <div className={styles.text}>
            {t('terms.text')}{' '}
            <a href={messages['terms.link_url'] as string} target="_blank">
              {t('terms.link_text')}
            </a>
          </div>

          <div className={styles.text_short}>
            {t('terms.text_short')}
            <br />
            <a onClick={showModal}>{t('terms.link_text_more')}</a>
          </div>

          <div className={styles.button}>
            <button onClick={setSeenTerms}>{t('terms.button')}</button>
          </div>
        </div>
      )}
    </div>
  )
}

export { TermsModal }

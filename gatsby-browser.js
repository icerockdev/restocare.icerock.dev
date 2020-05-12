import './src/styles/reset.scss'
import './src/styles/global.scss'

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

disableBodyScroll(document.body)

window.onload = function () {
  if (!document || !document?.body) return

  enableBodyScroll(document.body)
  const preloader = document.getElementById('preloader')
  if (!preloader) return
  preloader.classList.add('preloader_inactive')
  window.setTimeout(() => {
    preloader.style.display = 'none'
  }, 500)
}

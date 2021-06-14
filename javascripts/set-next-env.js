export default function setNextEnv () {
  window.IS_NEXTJS_PAGE = !!document.querySelector('#__next')
}

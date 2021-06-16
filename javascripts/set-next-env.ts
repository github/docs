export default function setNextEnv() {
  // @ts-ignore
  window.IS_NEXTJS_PAGE = !!document.querySelector('#__next')
}

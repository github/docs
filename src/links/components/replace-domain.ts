import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { useVersion } from 'src/versions/components/useVersion'
import { useEditableDomainName } from './useEditableDomainContext'
import { createPenSVG } from './pen-icon'

// We only want to activate the replace-domain feature for these versions.
// This means that if you're on a version we don't want it activated on,
// even though you have a your-domain cookie, it *won't* replace the
// word HOSTNAME.
const REPLACEDOMAIN_VERSION_PREFIXES = ['enterprise-server@']

function replaceDomains(domain: string | null) {
  document.querySelectorAll<HTMLElement>('pre code[data-replacedomain]').forEach((codeBlock) => {
    const replaceDomain = codeBlock.dataset.replacedomain
    if (!replaceDomain) return
    const replaceDomains = replaceDomain.split(/\s/)
    const spans = codeBlock.querySelectorAll<HTMLSpanElement>('span[class*="-string"]')
    if (spans.length) {
      spans.forEach((span) => {
        replaceInTextContent(span, replaceDomains, domain)
      })
    } else {
      replaceInTextContent(codeBlock, replaceDomains, domain)
    }
    replaceInClipboard(codeBlock, replaceDomains, domain)
  })
}

function replaceInClipboard(element: HTMLElement, replaceDomains: string[], domain: string | null) {
  if (
    element.parentElement &&
    element.parentElement.parentElement &&
    element.parentElement.parentElement.classList.contains('code-example')
  ) {
    const pre =
      element.parentElement.parentElement.querySelector<HTMLPreElement>('pre[data-clipboard]')
    const regex = new RegExp(`(${replaceDomains.join('|')})`)
    if (pre && pre.textContent) {
      if (!pre.dataset.originalText) {
        pre.dataset.originalText = pre.textContent
      }
      if (domain) {
        pre.textContent = pre.dataset.originalText.replace(regex, domain)
      } else {
        pre.textContent = pre.dataset.originalText
      }
    }
  }
}

function replaceInTextContent(
  element: HTMLElement,
  replaceDomains: string[],
  domain: string | null,
) {
  if (!element.textContent) return

  if (!element.querySelector('.replacedomain-text')) {
    splitElementText(element, replaceDomains)
  }

  if (domain !== null) {
    element.querySelectorAll('.replacedomain-text').forEach((textSpan) => {
      textSpan.textContent = domain
      textSpan.classList.add('editable-domain')
    })
    element.querySelectorAll('.replacedomain-edit').forEach((toggleElement) => {
      toggleElement.classList.remove('visually-hidden')
    })
  } else {
    element.querySelectorAll('.replacedomain-text').forEach((textSpan) => {
      if (element.dataset.replacedomain) {
        textSpan.textContent = element.dataset.replacedomain
      }
      textSpan.classList.remove('editable-domain')
    })
    element.querySelectorAll('.replacedomain-edit').forEach((toggleElement) => {
      toggleElement.classList.remove('visually-hidden')
    })
  }
}

function splitElementText(element: HTMLElement, replaceDomains: string[]) {
  const splitText = element.textContent!.split(new RegExp(`(${replaceDomains.join('|')})`))
  element.textContent = ''
  for (const text of splitText) {
    if (replaceDomains.includes(text)) {
      element.appendChild(createEditWrapper(text))
    } else {
      const span = document.createElement('span')
      span.textContent = text
      element.appendChild(span)
    }
  }
}

function createEditWrapper(text: string): HTMLSpanElement {
  const element = document.createElement('span')
  element.classList.add('replacedomain-edit')
  const span = document.createElement('span')
  span.classList.add('replacedomain-text')
  span.textContent = text
  element.appendChild(span)
  element.appendChild(createPenSVG())

  return element
}

export function ReplaceDomain() {
  const { asPath } = useRouter()
  const { domainName } = useEditableDomainName()
  const { currentVersion } = useVersion()

  const enable = REPLACEDOMAIN_VERSION_PREFIXES.some((prefix) => currentVersion.startsWith(prefix))

  useEffect(() => {
    if (domainName) {
      if (enable) {
        replaceDomains(domainName.split(',')[0])
      } else {
        replaceDomains(null)
      }
    } else if (enable) {
      replaceDomains(null)
    }
  }, [asPath, enable, domainName])

  return null
}

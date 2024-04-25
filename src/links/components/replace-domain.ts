import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { useVersion } from 'src/versions/components/useVersion'
import Cookies from 'src/frame/components/lib/cookies'

const COOKIE_KEY = 'github_domains'

// We only want to activate the replace-domain feature for these versions.
// This means that if you're on a version we don't want it activated on,
// even though you have a your-domain cookie, it *won't* replace the
// word HOSTNAME.
const REPLACEDOMAIN_VERSION_PREFIXES = ['enterprise-server@']

// This list needs to match what's in `unified/replace-domain.js`
const regexes = {
  HOSTNAME: /\bHOSTNAME\b/g,
} as const

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
  })
}

function replaceInTextContent(
  codeBlock: HTMLElement,
  replaceDomains: string[],
  domain: string | null,
) {
  if (!codeBlock.textContent) return
  for (const replaceDomain of replaceDomains) {
    if (replaceDomain in regexes) {
      // If the domain is falsy, it means we're reverting the replacement.
      // This happens when you used to be on a version where we want to
      // activate this functionality. Then, when you switch to a version
      // where you don't want it, we need to revert the replacement to
      // to what it was before we did the first replacement.
      if (domain) {
        const match = codeBlock.textContent.match(regexes[replaceDomain as keyof typeof regexes])
        for (const matched of match || []) {
          codeBlock.dataset.replacedomainOriginal = matched
          codeBlock.dataset.replacedomainReplace = domain
        }
        codeBlock.textContent = codeBlock.textContent.replace(
          regexes[replaceDomain as keyof typeof regexes],
          domain,
        )
      } else {
        if (codeBlock.dataset.replacedomainOriginal && codeBlock.dataset.replacedomainReplace) {
          // Reverse it
          codeBlock.textContent = codeBlock.textContent.replace(
            codeBlock.dataset.replacedomainReplace,
            codeBlock.dataset.replacedomainOriginal,
          )
        }
      }
    }
  }
}

export function ReplaceDomain() {
  const { asPath } = useRouter()
  const { currentVersion } = useVersion()

  const bother = REPLACEDOMAIN_VERSION_PREFIXES.some((prefix) => currentVersion.startsWith(prefix))

  useEffect(() => {
    const cookieValue = Cookies.get(COOKIE_KEY)
    if (cookieValue) {
      if (bother) {
        replaceDomains(cookieValue.split(',')[0])
      } else {
        replaceDomains(null)
      }
    }
  }, [asPath, bother])
  return null
}

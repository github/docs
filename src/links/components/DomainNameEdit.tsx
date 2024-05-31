import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { BeakerIcon } from '@primer/octicons-react'

import { useTranslation } from 'src/languages/components/useTranslation'
import { Box, Flash, FormControl, Spinner, Text, TextInput } from '@primer/react'
import { Dialog } from '@primer/react/experimental'
import { useEditableDomainName } from './useEditableDomainContext'
import { sendEvent, EventType } from 'src/events/components/events'

type Props = {
  xs?: boolean
}

const EXPERIMENT_NAME = 'domain_edit'

const QUERY_STRING_KEY = 'ghdomain' // Must match the middleware

const TRANSLATION_NAMESPACE = 'domain_edit'

export default function DomainNameEdit({ xs }: Props) {
  const { t } = useTranslation(TRANSLATION_NAMESPACE)

  const { asPath } = useRouter()

  const { domainName, setDomainName } = useEditableDomainName()
  const [localName, setLocalName] = useState('')
  useEffect(() => {
    setLocalName(domainName)
  }, [domainName])

  const [open, setOpen] = useState(false)
  useEffect(() => {
    function handler(event: MouseEvent) {
      if (event.target) {
        const target = event.target as HTMLElement | SVGSVGElement
        if (
          (target.tagName === 'BUTTON' && target.classList.contains('replacedomain-edit')) ||
          (target.tagName === 'SPAN' && target.classList.contains('replacedomain-text')) ||
          (target.tagName === 'svg' &&
            target.parentElement &&
            target.parentElement.classList.contains('replacedomain-edit')) ||
          (target.tagName === 'path' &&
            target.parentElement &&
            target.parentElement.parentElement &&
            target.parentElement.parentElement.classList.contains('replacedomain-edit'))
        ) {
          setOpen(true)

          sendEvent({
            type: EventType.experiment,
            experiment_name: EXPERIMENT_NAME,
            experiment_variation: 'opened',
            experiment_success: true,
          })
        }
      }
    }
    const main = document.querySelector<HTMLDivElement>('#main-content')
    if (main) {
      main.addEventListener('click', handler)
    }

    return () => {
      if (main) {
        main.removeEventListener('click', handler)
      }
    }
  }, [asPath])

  useEffect(() => {
    if (document.querySelectorAll('code[data-replacedomain]').length > 0) {
      sendEvent({
        type: EventType.experiment,
        experiment_name: EXPERIMENT_NAME,
        experiment_variation: 'available',
        experiment_success: true,
      })
    }
  }, [asPath])

  const nameInputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (open) {
      if (nameInputRef.current) {
        nameInputRef.current.focus()
      }
    }
  }, [open])

  const [submissionFailed, setSubmissionFailed] = useState(false)
  const [loading, setLoading] = useState(false)

  function handlSubmit(name: string) {
    const searchParams = new URLSearchParams({ [QUERY_STRING_KEY]: name })
    setLoading(true)
    fetch(`/__tracking__?${searchParams.toString()}`)
      .then((response) => {
        if (response.ok) {
          setOpen(false)
          setSubmissionFailed(false)
          setDomainName(localName.trim().toLowerCase())
        } else {
          setSubmissionFailed(true)
        }

        sendEvent({
          type: EventType.experiment,
          experiment_name: EXPERIMENT_NAME,
          experiment_variation: 'saved',
          experiment_success: true,
        })
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const validationError = getValidationError(localName)

  return (
    <div data-testid="domain-name-edit" className={xs ? 'd-flex' : ''}>
      {open && (
        <Dialog
          title={
            <>
              {t('edit_your')}{' '}
              <span style={{ marginLeft: 15 }}>
                <BeakerIcon size={18} /> {t('experimental')}
              </span>
            </>
          }
          width="large"
          footerButtons={[
            { buttonType: 'default', content: t('cancel'), onClick: () => setOpen(false) },
            {
              buttonType: 'primary',
              type: 'button',
              onClick: () => {
                handlSubmit(localName.trim())
              },
              content: loading ? (
                <>
                  <Spinner size="small" /> {t('save')}
                </>
              ) : (
                t('save')
              ),
              disabled: !!validationError || loading,
            },
          ]}
          onClose={() => {
            setOpen(false)

            sendEvent({
              type: EventType.experiment,
              experiment_name: EXPERIMENT_NAME,
              experiment_variation: 'closed',
              experiment_success: true,
            })
          }}
          aria-labelledby="header"
        >
          <form
            data-testid="domain-name-edit-form"
            onSubmit={(event) => {
              event.preventDefault()
              if (!validationError) {
                handlSubmit(localName.trim())
              }
            }}
          >
            <Box sx={{ p: 3 }}>
              <FormControl>
                <FormControl.Label>{t('name')}</FormControl.Label>
                <TextInput
                  value={localName}
                  ref={nameInputRef}
                  aria-label={t('your_name')}
                  placeholder="github.fabrikam.com"
                  onChange={(event) => setLocalName(event.target.value)}
                  validationStatus={localName.trim() && validationError ? 'error' : undefined}
                  sx={{ width: '100%' }}
                />
                {localName.trim() && validationError && (
                  <FormControl.Validation variant="error">{validationError}</FormControl.Validation>
                )}
              </FormControl>
            </Box>

            <SubmissionError error={submissionFailed} />

            <LearnMoreSnippet />
          </form>
        </Dialog>
      )}

      {/* Deliberately commented out until we decide to include this on all pages */}
      {/* <DisplayAndToggle
        xs={xs}
        domainNames={domainNames}
        trigger={() => setOpen(true)}
        returnFocusRef={returnFocusRef}
      /> */}
    </div>
  )
}

function getValidationError(domainName: string) {
  const clean = domainName.trim().toLowerCase()
  if (/\s/.test(clean)) {
    return 'Whitespace'
  }
  // if (clean === 'hostname' || !clean) {
  //   return 'Empty'
  // }
  if (clean === 'github.com' || clean === 'api.github.com') {
    return "Can't be github.com"
  }
  return null
}

function SubmissionError({ error }: { error: boolean }) {
  const { t } = useTranslation(TRANSLATION_NAMESPACE)
  if (error) {
    return (
      <Flash variant="danger">
        <Text>{t('submission_failed')}</Text>
      </Flash>
    )
  }
  return null
}

/* Deliberately commented out until we decide to include this on all pages */
// function DisplayAndToggle({
//   xs,
//   domainNames,
//   trigger,
//   returnFocusRef,
// }: {
//   xs?: boolean
//   domainNames: string[]
//   trigger: () => void
//   returnFocusRef: React.RefObject<HTMLButtonElement>
// }) {
//   const { t } = useTranslation(TRANSLATION_NAMESPACE)
//   return (
//     <Box
//       sx={{
//         display: !xs ? ['none', null, 'flex'] : undefined,
//         gap: '2',
//         alignItems: 'center',
//         ml: 2,
//         position: 'relative',
//       }}
//     >
//       <Text
//         sx={{
//           fontSize: '1',
//           color: 'fg.muted',
//           fontWeight: 'semibold',
//         }}
//       >
//         <Text
//           sx={{
//             color: 'fg.default',
//           }}
//         >
//           {t('name')}:
//         </Text>{' '}
//         <code>{domainNames.length ? domainNames[0] : DEFAULT}</code>
//       </Text>
//       <Button
//         variant="invisible"
//         size="small"
//         sx={{
//           display: 'absolute',
//           right: 0,
//         }}
//         ref={returnFocusRef}
//         onClick={() => {
//           trigger()
//         }}
//       >
//         {t('edit')}
//       </Button>
//     </Box>
//   )
// }

function LearnMoreSnippet() {
  const { t } = useTranslation(TRANSLATION_NAMESPACE)
  return (
    <Box sx={{ p: 3 }}>
      <Text>
        {t('snippet_about')}{' '}
        <a href="/enterprise-server@latest/early-access/admin/articles/editing-host-names-in-github-docs">
          {t('learn_more')}
        </a>
      </Text>
    </Box>
  )
}

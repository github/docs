import { useState, useEffect, useRef, FormEvent } from 'react'
import { FormControl, Select, Tooltip, TabNav } from '@primer/react'
import { CheckIcon, CopyIcon } from '@primer/octicons-react'
import Cookies from 'components/lib/cookies'
import cx from 'classnames'

import hljs from 'highlight.js/lib/core'
import json from 'highlight.js/lib/languages/json'
import javascript from 'highlight.js/lib/languages/javascript'
import hljsCurl from 'highlightjs-curl'

import { useTranslation } from 'src/languages/components/useTranslation'
import useClipboard from 'src/rest/components/useClipboard'
import {
  getShellExample,
  getGHExample,
  getJSExample,
} from 'src/rest/components/get-rest-code-samples'
import styles from './RestCodeSamples.module.scss'
import { RestMethod } from './RestMethod'
import type { Operation, ExampleT } from './types'
import { ResponseKeys, CodeSampleKeys } from './types'
import { useVersion } from 'src/versions/components/useVersion'

type Props = {
  slug: string
  operation: Operation
  heading: string
}

const responseSelectOptions = Object.values(ResponseKeys)

// Add as needed. It's pretty cheap to add but please don't use
// highlight.js import that loads all and everything.
hljs.registerLanguage('json', json)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('curl', hljsCurl)

function getLanguageHighlight(selectedLanguage: string) {
  return selectedLanguage === CodeSampleKeys.javascript ? 'javascript' : 'curl'
}

export function RestCodeSamples({ operation, slug, heading }: Props) {
  const { t } = useTranslation('products')
  const { isEnterpriseServer } = useVersion()

  // Refs to track the request example, response example
  // and the first render
  const requestCodeExample = useRef<HTMLSpanElement>(null)
  const responseCodeExample = useRef<HTMLSpanElement>(null)
  const firstRender = useRef(true)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Get format examples for each language
  const languageExamples = operation.codeExamples.map((sample) => ({
    description: sample.request.description,
    curl: getShellExample(operation, sample),
    javascript: getJSExample(operation, sample),
    ghcli: getGHExample(operation, sample),
    response: sample.response,
  }))

  // Menu options for the language selector
  const languageSelectOptions: CodeSampleKeys[] = [CodeSampleKeys.curl]

  // Management Console and GHES Manage API operations are not supported by Octokit
  if (operation.subcategory !== 'management-console' && operation.subcategory !== 'manage-ghes') {
    languageSelectOptions.push(CodeSampleKeys.javascript)

    // Not all examples support the GH CLI language option. If any of
    // the examples don't support it, we don't show GH CLI as an option.
    if (!languageExamples.some((example) => example.ghcli === undefined)) {
      languageSelectOptions.push(CodeSampleKeys.ghcli)
    }
  }

  // Menu options for the example selector

  // We show the media type in the examples menu items for each example if
  // there's more than one example and if the media types aren't all the same
  // for the examples (e.g. if all examples have content type `application/json`,
  // we won't show that information in the menu items).
  const showExampleOptionMediaType =
    languageExamples.length > 1 &&
    !languageExamples.every(
      (example) => example.response.contentType === languageExamples[0].response.contentType,
    )
  const exampleSelectOptions = languageExamples.map((example, index) => ({
    text: showExampleOptionMediaType
      ? `${example.description} (${example.response.contentType})`
      : example.description,
    // maps to the index of the example in the languageExamples array
    languageIndex: index,
  }))

  const [selectedLanguage, setSelectedLanguage] = useState(languageSelectOptions[0])
  const [selectedExample, setSelectedExample] = useState(exampleSelectOptions[0])
  const [selectedResponse, setSelectedResponse] = useState(responseSelectOptions[0])
  const [responseMaxHeight, setResponseMaxHeight] = useState(0)

  const isSingleExample = languageExamples.length === 1
  const displayedExample: ExampleT = languageExamples[selectedExample.languageIndex]

  const handleExampleSelection = (event: FormEvent<HTMLSelectElement>) => {
    setSelectedExample(exampleSelectOptions[Number(event.currentTarget.value)])
  }

  const handleResponseSelection = (responseKey: ResponseKeys) => {
    setSelectedResponse(responseKey)
  }

  const handleLanguageSelection = (languageKey: CodeSampleKeys) => {
    setSelectedLanguage(languageKey)
    Cookies.set('codeSampleLanguagePreferred', languageKey)
  }

  const handleResponseResize = () => {
    if (requestCodeExample.current) {
      const requestCodeHeight = requestCodeExample.current.clientHeight || 0
      const { innerHeight: height } = window
      if (responseCodeExample) {
        // 520 pixels roughly accounts for the space taken up by the
        // nav bar, headers, language picker, method section, and response
        // picker
        setResponseMaxHeight(height - requestCodeHeight - 520)
      }
    }
  }

  // Change the language based on cookies
  useEffect(() => {
    // If the user previously selected a language preference and the language
    // is available in this component set it as the selected language
    const cookieValue = Cookies.get('codeSampleLanguagePreferred')
    const preferredCodeLanguage = languageSelectOptions.find((item) => item === cookieValue)
    if (cookieValue && preferredCodeLanguage) {
      setSelectedLanguage(cookieValue as CodeSampleKeys)
    }
  }, [])

  // Handle syntax higlighting when the language changes or
  // a cookie is set
  useEffect(() => {
    const reqElem = requestCodeExample.current

    // Do not highlight on the first render because the
    // intersection observer syntax highlighting
    // (ClientSideHighlightJS) will have already handled highlighting
    if (reqElem && !firstRender.current) {
      reqElem.className = 'hljs'
      hljs.highlightElement(reqElem)
      handleResponseResize()
    }
  }, [selectedLanguage])

  // Handle syntax highlighting and scroll position when the language changes or
  // a cookie is set, changing the default language
  useEffect(() => {
    const reqElem = responseCodeExample.current
    const scrollElem = scrollRef.current

    // Reset scroll position to the top when switching between example response and
    // response schema
    if (scrollElem) {
      scrollElem.scrollTop = 0
    }
    // Do not highlight on the first render because the
    // intersection observer syntax highlighting
    // (ClientSideHighlightJS) will have already handled highlighting
    if (reqElem && !firstRender.current) {
      reqElem.className = 'hljs'
      hljs.highlightElement(reqElem)
    }
  }, [selectedResponse])

  // Handle highlighting when there is more than one example and
  // the example changes.
  useEffect(() => {
    const reqElem = requestCodeExample.current
    if (reqElem) {
      reqElem.className = 'hljs'
      hljs.highlightElement(reqElem)
    }

    const resElem = responseCodeExample.current
    if (resElem) {
      resElem.className = 'hljs'
      hljs.highlightElement(resElem)
    }
  }, [selectedExample])

  // Keep track of the first render so we can skip highlighting
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
    }
  }, [])

  // Handle the resizing of the response section when the window is resized
  useEffect(() => {
    handleResponseResize()
    window.addEventListener('resize', handleResponseResize)
    return () => {
      window.removeEventListener('resize', handleResponseResize)
    }
  })

  const [isCopied, setCopied] = useClipboard(displayedExample[selectedLanguage] as string, {
    successDuration: 1400,
  })

  let displayedExampleResponse = JSON.stringify(displayedExample.response.example, null, 2)
  let displayedExampleSchema = JSON.stringify(displayedExample.response.schema, null, 2)

  if (isEnterpriseServer) {
    displayedExampleResponse =
      displayedExampleResponse && displayedExampleResponse.replaceAll('api.github.com', 'HOSTNAME')
    displayedExampleSchema =
      displayedExampleSchema && displayedExampleSchema.replaceAll('api.github.com', 'HOSTNAME')
  }

  return (
    <>
      <h3 className="mt-0 pt-0 h4" id={`${slug}--code-samples`}>
        <a href={`#${slug}--code-samples`}>{heading}</a>
      </h3>

      {/* Display an example selector if more than one example */}
      {!isSingleExample && (
        <div className="pb-5 pt-2">
          <FormControl id="example-type-picker">
            <FormControl.Label visuallyHidden>Select the example type</FormControl.Label>
            <Select onChange={handleExampleSelection}>
              {exampleSelectOptions.map((option) => (
                <Select.Option key={option.languageIndex} value={option.languageIndex.toString()}>
                  {option.text}
                </Select.Option>
              ))}
            </Select>
          </FormControl>
        </div>
      )}

      {/* Request example section */}
      <div className="rounded-1 border">
        <div className="my-0 p-3">
          <RestMethod verb={operation.verb} requestPath={operation.requestPath} />
        </div>
        <div className="border-top d-inline-flex flex-justify-between width-full flex-items-center pt-2">
          <div className="d-inline-flex ml-2">
            <TabNav aria-label={`Example language selector for ${operation.title}`}>
              {languageSelectOptions.map((optionKey) => (
                <TabNav.Link
                  key={optionKey}
                  selected={optionKey === selectedLanguage}
                  onClick={(e) => {
                    e.preventDefault()
                    handleLanguageSelection(optionKey)
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleLanguageSelection(optionKey)
                    }
                  }}
                  href="#"
                >
                  {t(`rest.reference.code_sample_options.${optionKey}`)}
                </TabNav.Link>
              ))}
            </TabNav>
          </div>
          <div className="mr-2">
            <Tooltip
              className="mr-2"
              direction="w"
              aria-label={isCopied ? t('button_text.copied') : t('button_text.copy_to_clipboard')}
            >
              <button
                className="js-btn-copy btn-octicon"
                aria-label={
                  isCopied
                    ? t('button_text.copied')
                    : `${t('button_text.copy_to_clipboard')} ${selectedLanguage} request example`
                }
                aria-live="polite"
                aria-atomic="true"
                onClick={() => setCopied()}
              >
                {isCopied ? <CheckIcon /> : <CopyIcon />}
              </button>
            </Tooltip>
          </div>
        </div>

        {/* Example requests */}
        <div
          className={cx(
            styles.codeBlock,
            styles.requestCodeBlock,
            `border-top rounded-1 my-0 ${getLanguageHighlight(selectedLanguage)}`,
          )}
          data-highlight={getLanguageHighlight(selectedLanguage)}
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={0}
        >
          <code ref={requestCodeExample}>{displayedExample[selectedLanguage]}</code>
        </div>
      </div>

      {/* Response section */}
      <h4
        className="mt-5 mb-2 h5"
        dangerouslySetInnerHTML={{
          __html: displayedExample.response.description || t('rest.reference.response'),
        }}
      ></h4>
      <div className="border rounded-1">
        {displayedExample.response.schema ? (
          <TabNav
            className="pt-2 mx-2"
            aria-label={`Example response format selector for ${operation.title}`}
          >
            {responseSelectOptions.map((optionKey) => (
              <TabNav.Link
                key={optionKey}
                selected={optionKey === selectedResponse}
                onClick={(e) => {
                  e.preventDefault()
                  handleResponseSelection(optionKey)
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    handleResponseSelection(optionKey)
                  }
                }}
                href="#"
              >
                {t(`rest.reference.response_options.${optionKey}`)}
              </TabNav.Link>
            ))}
          </TabNav>
        ) : null}
        <div className="">
          {/* Status code */}
          {displayedExample.response.statusCode && (
            <div className={cx(styles.codeBlock, 'rounded-1 p-3 my-0 color-bg-default')}>
              <code>{`Status: ${displayedExample.response.statusCode}`}</code>
            </div>
          )}
          {/* Example response */}
          {displayedExample.response.example && (
            <div
              ref={scrollRef}
              className={cx(
                styles.codeBlock,
                styles.responseCodeBlock,
                'border-top rounded-1 my-0',
              )}
              data-highlight={'json'}
              style={{ maxHeight: responseMaxHeight }}
              // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
              tabIndex={0}
            >
              <code ref={responseCodeExample}>
                {selectedResponse === ResponseKeys.example
                  ? displayedExampleResponse
                  : displayedExampleSchema}
              </code>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

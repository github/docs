import React, { useState, useEffect, useRef, FormEvent } from 'react'
import { FormControl, IconButton, Select, SegmentedControl } from '@primer/react'
import { CheckIcon, CopyIcon, InfoIcon } from '@primer/octicons-react'
import { announce } from '@primer/live-region-element'
import Cookies from '@/frame/components/lib/cookies'
import cx from 'classnames'

import { generateExampleOptions } from '@/rest/lib/code-example-utils'

import { useTranslation } from '@/languages/components/useTranslation'
import useClipboard from '@/rest/components/useClipboard'
import { CODE_SAMPLE_LANGUAGE_COOKIE_NAME } from '@/frame/lib/constants'
import {
  getShellExample,
  getGHExample,
  getJSExample,
} from '@/rest/components/get-rest-code-samples'
import { HighlightedCode } from '@/frame/components/HighlightedCode'
import styles from './RestCodeSamples.module.scss'
import { RestMethod } from './RestMethod'
import type { Operation, ExampleT } from './types'
import { ResponseKeys, CodeSampleKeys } from './types'
import { useVersion } from '@/versions/components/useVersion'
import { useMainContext } from '@/frame/components/context/MainContext'

type Props = {
  slug: string
  operation: Operation
  heading: string
}

const responseSelectOptions = Object.values(ResponseKeys)

// Map a REST code-sample language to the highlight language name passed to
// <HighlightedCode>. Add cases as needed.
function getLanguageHighlight(selectedLanguage: string) {
  return selectedLanguage === CodeSampleKeys.javascript ? 'javascript' : 'curl'
}

export function RestCodeSamples({ operation, slug, heading }: Props) {
  const { t } = useTranslation(['rest_reference'])
  const { isEnterpriseServer, isEnterpriseCloud } = useVersion()

  // Ref for resetting scroll position when switching response views.
  const scrollRef = useRef<HTMLDivElement>(null)

  const { currentVersion } = useVersion()
  const { allVersions } = useMainContext()

  // Get format examples for each language
  const languageExamples = operation.codeExamples.map((sample) => ({
    description: sample.request.description,
    curl: getShellExample(operation, sample, currentVersion, allVersions),
    javascript: getJSExample(operation, sample, currentVersion, allVersions),
    ghcli: getGHExample(operation, sample, currentVersion, allVersions),
    response: sample.response,
    request: sample.request,
  }))

  // Menu options for the language selector
  const languageSelectOptions: CodeSampleKeys[] = [CodeSampleKeys.curl]

  // Management Console, GHES Manage API, and GitHub Models
  // operations are not supported by Octokit
  if (
    operation.category !== 'models' &&
    operation.subcategory !== 'management-console' &&
    operation.subcategory !== 'manage-ghes'
  ) {
    languageSelectOptions.push(CodeSampleKeys.javascript)

    // Not all examples support the GH CLI language option. If any of
    // the examples don't support it, we don't show GH CLI as an option.
    if (!languageExamples.some((example) => example.ghcli === undefined)) {
      languageSelectOptions.push(CodeSampleKeys.ghcli)
    }
  }

  // Menu options for the example selector
  const exampleSelectOptions = generateExampleOptions(languageExamples)

  const [selectedLanguage, setSelectedLanguage] = useState(languageSelectOptions[0])
  const [selectedExample, setSelectedExample] = useState(exampleSelectOptions[0])
  const [selectedResponse, setSelectedResponse] = useState(responseSelectOptions[0])

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
    Cookies.set(CODE_SAMPLE_LANGUAGE_COOKIE_NAME, languageKey)
  }

  // Change the language based on cookies
  useEffect(() => {
    // If the user previously selected a language preference and the language
    // is available in this component set it as the selected language
    const cookieValue = Cookies.get(CODE_SAMPLE_LANGUAGE_COOKIE_NAME)
    const preferredCodeLanguage = languageSelectOptions.find((item) => item === cookieValue)
    if (cookieValue && preferredCodeLanguage) {
      setSelectedLanguage(cookieValue as CodeSampleKeys)
    }
  }, [])

  // Reset scroll position to the top when switching between example response and
  // response schema. Highlighting is handled React-natively by <HighlightedCode>.
  useEffect(() => {
    const scrollElem = scrollRef.current
    if (scrollElem) {
      scrollElem.scrollTop = 0
    }
  }, [selectedResponse])

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
      {isEnterpriseCloud && selectedLanguage === CodeSampleKeys.curl ? (
        <span className="f5">
          <InfoIcon className="d-inline mx-1" />
          <p
            className="d-inline"
            dangerouslySetInnerHTML={{ __html: t('data_residency_notice') }}
          />
        </span>
      ) : null}

      <h4 className="mt-3 mb-3 h5">
        {isSingleExample ? t('request_example') : t('request_examples')}
      </h4>
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
            <SegmentedControl
              className={styles.segmentedControl}
              aria-label={`Example language selector for ${operation.title}`}
            >
              {languageSelectOptions.map((optionKey) => (
                <SegmentedControl.Button
                  key={optionKey}
                  selected={optionKey === selectedLanguage}
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                    handleLanguageSelection(optionKey)
                  }}
                  onKeyDown={(event: React.KeyboardEvent) => {
                    if (event.key === 'Enter') {
                      handleLanguageSelection(optionKey)
                    }
                  }}
                >
                  {t(`code_sample_options.${optionKey}`)}
                </SegmentedControl.Button>
              ))}
            </SegmentedControl>
          </div>
          <div className="mr-2">
            <IconButton
              icon={isCopied ? CheckIcon : CopyIcon}
              className="js-btn-copy btn-octicon"
              aria-label={`${t('button_text.copy_to_clipboard')} ${selectedLanguage} request example`}
              onClick={() => {
                setCopied()
                announce('Copied!')
              }}
            ></IconButton>
          </div>
        </div>

        {/* Example requests */}
        <div
          className={cx(
            styles.codeBlock,
            styles.requestCodeBlock,
            `border-top rounded-1 my-0 ${getLanguageHighlight(selectedLanguage)}`,
          )}
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={0}
        >
          <HighlightedCode
            language={getLanguageHighlight(selectedLanguage)}
            code={String(displayedExample[selectedLanguage] ?? '')}
          />
        </div>
      </div>

      {/* Response section */}
      <h4
        className="mt-5 mb-2 h5"
        dangerouslySetInnerHTML={{
          __html: displayedExample.response.description || t('response'),
        }}
      ></h4>
      <div className="border rounded-1 pt-2">
        {displayedExample.response.schema ? (
          <SegmentedControl
            className={cx(styles.segmentedControl, 'mx-2')}
            aria-label={`Example response format selector for ${operation.title}`}
          >
            {responseSelectOptions.map((optionKey) => (
              <SegmentedControl.Button
                key={optionKey}
                selected={optionKey === selectedResponse}
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault()
                  handleResponseSelection(optionKey)
                }}
                onKeyDown={(event: React.KeyboardEvent) => {
                  if (event.key === 'Enter') {
                    handleResponseSelection(optionKey)
                  }
                }}
              >
                {t(`response_options.${optionKey}`)}
              </SegmentedControl.Button>
            ))}
          </SegmentedControl>
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
              // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
              tabIndex={0}
            >
              <HighlightedCode
                language="json"
                code={String(
                  (selectedResponse === ResponseKeys.example
                    ? displayedExampleResponse
                    : displayedExampleSchema) ?? '',
                )}
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

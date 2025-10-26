// @ts-ignore - markdownlint-rule-helpers doesn't have TypeScript declarations
import { addError } from 'markdownlint-rule-helpers'
import Ajv from 'ajv'

import { convertOldCTAUrl } from '@/content-render/scripts/cta-builder'
import ctaSchemaDefinition from '@/data-directory/lib/data-schemas/ctas'
import type { RuleParams, RuleErrorCallback, Rule } from '../../types'

const ajv = new Ajv({ strict: false, allErrors: true })
const validateCTASchema = ajv.compile(ctaSchemaDefinition)

export const ctasSchema: Rule = {
  names: ['GHD057', 'ctas-schema'],
  description: 'CTA URLs must conform to the schema',
  tags: ['ctas', 'schema', 'urls'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    // Find all URLs in the content that might be CTAs
    // Updated regex to properly handle URLs in quotes and other contexts
    const urlRegex = /https?:\/\/[^\s)\]{}'">]+/g
    const content = params.lines.join('\n')

    let match
    while ((match = urlRegex.exec(content)) !== null) {
      const url = match[0]

      // Check if this URL has ref_ parameters and is on a GitHub domain (indicating it's a CTA URL)
      if (!url.includes('ref_')) continue

      // Only validate CTA URLs on GitHub domains
      let hostname: string
      try {
        hostname = new URL(url).hostname
      } catch {
        // Invalid URL, skip validation
        continue
      }
      const allowedHosts = ['github.com', 'desktop.github.com']
      if (!allowedHosts.includes(hostname)) continue

      // Skip placeholder/documentation example URLs
      const isPlaceholderUrl =
        /[A-Z_]+/.test(url) &&
        (url.includes('DESTINATION') ||
          url.includes('CTA+NAME') ||
          url.includes('LOCATION') ||
          url.includes('PRODUCT'))

      if (isPlaceholderUrl) continue

      try {
        const urlObj = new URL(url)
        const searchParams = urlObj.searchParams

        // Extract ref_ parameters
        const refParams: Record<string, string> = {}
        const hasRefParams = Array.from(searchParams.keys()).some((key) => key.startsWith('ref_'))

        if (!hasRefParams) continue

        // Collect all ref_ parameters
        for (const [key, value] of searchParams.entries()) {
          if (key.startsWith('ref_')) {
            refParams[key] = value
          }
        }

        // Check if this has old CTA parameters that can be auto-fixed
        const hasOldParams =
          'ref_cta' in refParams || 'ref_loc' in refParams || 'ref_page' in refParams

        if (hasOldParams) {
          const result = convertOldCTAUrl(url)
          if (result && result.newUrl !== url) {
            // Find the line and create fix info
            const lineIndex = params.lines.findIndex((line) => line.includes(url))
            const lineNumber = lineIndex >= 0 ? lineIndex + 1 : 1
            const line = lineIndex >= 0 ? params.lines[lineIndex] : ''
            const urlStartInLine = line.indexOf(url)

            const fixInfo = {
              editColumn: urlStartInLine + 1,
              deleteCount: url.length,
              insertText: result.newUrl,
            }

            addError(
              onError,
              lineNumber,
              'CTA URL uses old parameter format (ref_cta, ref_loc, ref_page). Use new schema format (ref_product, ref_type, ref_style, ref_plan).',
              line,
              [urlStartInLine + 1, url.length],
              fixInfo,
            )
          }
        } else {
          // Validate new format URLs against schema
          const isValid = validateCTASchema(refParams)

          if (!isValid) {
            const lineIndex = params.lines.findIndex((line) => line.includes(url))
            const lineNumber = lineIndex >= 0 ? lineIndex + 1 : 1
            const line = lineIndex >= 0 ? params.lines[lineIndex] : ''

            // Process AJV errors manually for CTA URLs
            const errors = validateCTASchema.errors || []
            for (const error of errors) {
              let message = ''
              if (error.keyword === 'required') {
                message = `Missing required parameter: ${(error.params as any)?.missingProperty}`
              } else if (error.keyword === 'enum') {
                const paramName = error.instancePath.substring(1)
                // Get the actual invalid value from refParams and allowed values from params
                const invalidValue = refParams[paramName]
                const allowedValues = (error.params as any)?.allowedValues || []
                message = `Invalid value for ${paramName}: "${invalidValue}". Valid values are: ${allowedValues.join(', ')}`
              } else if (error.keyword === 'additionalProperties') {
                message = `Unexpected parameter: ${(error.params as any)?.additionalProperty}`
              } else {
                message = `CTA URL validation error: ${error.message}`
              }

              addError(
                onError,
                lineNumber,
                message,
                line,
                null,
                null, // No fix for these types of schema violations
              )
            }
          }
        }
      } catch {
        // Invalid URL, skip validation
        continue
      }
    }
  },
}

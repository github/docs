// @purpose Writer tool
// @description Create a properly formatted Call-to-Action URL with tracking parameters
import { Command } from 'commander'
import readline from 'readline'
import chalk from 'chalk'
import Ajv from 'ajv'
import ctaSchema from '@/data-directory/lib/data-schemas/ctas'

const ajv = new Ajv({ strict: false, allErrors: true })
const validateCTASchema = ajv.compile(ctaSchema)

interface CTAParams {
  ref_product?: string
  ref_plan?: string
  ref_type?: string
  ref_style?: string
}

const CTA_PARAM_KEYS: (keyof CTAParams)[] = ['ref_product', 'ref_plan', 'ref_type', 'ref_style']

interface CTASchemaProperty {
  type: string
  name: string
  description: string
  enum: string[]
}

type CTASchemaProperties = {
  [K in keyof CTAParams]-?: CTASchemaProperty
}

const ctaToTypeMapping: Record<string, string> = {
  'GHEC trial': 'trial',
  'Copilot trial': 'trial',
  'Copilot Enterprise trial': 'trial',
  'Copilot Business trial': 'trial',
  'Copilot Pro+': 'purchase',
  'Copilot plans signup': 'engagement',
  'download desktop': 'engagement',
  'Copilot free': 'engagement',
}

const ctaToPlanMapping: Record<string, string> = {
  'Copilot Enterprise trial': 'enterprise',
  'Copilot Business trial': 'business',
  'Copilot Pro+': 'pro',
  'Copilot free': 'free',
  'GHEC trial': 'enterprise',
}

const buttonKeywords = ['landing', 'signup', 'download', 'trial']

const program = new Command()

program
  .name('cta-builder')
  .description('Create a properly formatted Call-to-Action URL with tracking parameters.')
  .version('1.0.0')

program
  .command('convert')
  .description('Convert old CTA URLs to new schema format')
  .option('-u, --url <url>', 'Convert a single URL')
  .option('-q, --quiet', 'Only output the new URL (no other messages)')
  .action((options) => {
    convertUrls(options)
  })

program
  .command('validate')
  .description('Validate a CTA URL against the schema')
  .option('-u, --url <url>', 'URL to validate')
  .action((options) => {
    validateUrl(options)
  })

program
  .command('build')
  .description('Build a CTA URL programmatically with flags (outputs URL only)')
  .requiredOption('--url <url>', 'Base URL for the CTA')
  .requiredOption('--product <product>', 'Product reference (copilot, ghec, desktop)')
  .requiredOption('--type <type>', 'CTA type (trial, purchase, engagement)')
  .requiredOption('--style <style>', 'CTA style (button, text)')
  .option('--plan <plan>', 'Plan reference (free, pro, business, enterprise)')
  .action((options) => {
    buildProgrammaticCTA(options)
  })

program.action(() => {
  interactiveBuilder()
})

// Avoid parsing CLI arguments when tests import this module.
if (import.meta.url === `file://${process.argv[1]}`) {
  program.parse()
}

async function selectFromOptions(
  paramName: string,
  message: string,
  options: string[],
  promptFn: (question: string) => Promise<string>,
): Promise<string> {
  console.log(chalk.yellow(`\n${message} (${paramName}):`))
  for (let index = 0; index < options.length; index++) {
    const option = options[index]
    const letter = String.fromCharCode(97 + index) // 97 is the ASCII code for a.
    console.log(chalk.white(`  ${letter}. ${option}`))
  }

  let attempts = 0
  while (true) {
    const answer = await promptFn('Enter the letter of your choice: ')
    if (!answer) continue

    const letterIndex = answer.toLowerCase().charCodeAt(0) - 97

    if (letterIndex >= 0 && letterIndex < options.length && answer.length === 1) {
      return options[letterIndex]
    }

    const validLetters = options.map((_, index) => String.fromCharCode(97 + index)).join(', ')
    console.log(chalk.red(`Invalid choice. Please enter one of: ${validLetters}`))

    // Cap invalid answers for automated runs; empty answers reprompt without counting.
    if (++attempts > 50) {
      throw new Error('Too many invalid attempts. Please restart the tool.')
    }
  }
}

async function confirmChoice(
  message: string,
  promptFn: (question: string) => Promise<string>,
): Promise<boolean> {
  let attempts = 0
  while (true) {
    const answer = await promptFn(`${message} (y/n): `)
    if (!answer) continue

    const lower = answer.toLowerCase()
    if (lower === 'y' || lower === 'yes') return true
    if (lower === 'n' || lower === 'no') return false
    console.log(chalk.red('Please enter y or n'))

    // Cap invalid answers for automated runs; empty answers reprompt without counting.
    if (++attempts > 50) {
      throw new Error('Too many invalid attempts. Please restart the tool.')
    }
  }
}

function extractCTAParams(url: string): CTAParams {
  const urlObj = new URL(url)
  const ctaParams: CTAParams = {}
  for (const [key, value] of urlObj.searchParams.entries()) {
    if (key.startsWith('ref_') && CTA_PARAM_KEYS.includes(key as keyof CTAParams)) {
      ctaParams[key as keyof CTAParams] = value
    }
  }
  return ctaParams
}

interface AjvErrorParams {
  missingProperty?: string
  allowedValues?: string[]
  additionalProperty?: string
}

interface AjvError {
  keyword: string
  instancePath: string
  message?: string
  params: AjvErrorParams
}

function formatValidationErrors(ctaParams: CTAParams, errors: AjvError[]): string[] {
  const errorMessages: string[] = []
  for (const error of errors) {
    let message = ''
    if (error.keyword === 'required') {
      message = `Missing required parameter: ${error.params.missingProperty}`
    } else if (error.keyword === 'enum') {
      const paramName = error.instancePath.substring(1)
      const invalidValue = ctaParams[paramName as keyof CTAParams]
      const allowedValues = error.params.allowedValues || []
      message = `Invalid value for ${paramName}: "${invalidValue}". Valid values are: ${allowedValues.join(', ')}`
    } else if (error.keyword === 'additionalProperties') {
      message = `Unexpected parameter: ${error.params.additionalProperty}`
    } else {
      message = `Validation error: ${error.message}`
    }
    errorMessages.push(message)
  }
  return errorMessages
}

function validateCTAParams(params: CTAParams): { isValid: boolean; errors: string[] } {
  const isValid = validateCTASchema(params)
  const ajvErrors = validateCTASchema.errors || []

  if (isValid) {
    return { isValid: true, errors: [] }
  }

  const errors = formatValidationErrors(params, ajvErrors as unknown as AjvError[])
  return {
    isValid: false,
    errors,
  }
}

function buildCTAUrl(baseUrl: string, params: CTAParams): string {
  const url = new URL(baseUrl)

  for (const [key, value] of Object.entries(params)) {
    if (value) {
      url.searchParams.set(key, value)
    }
  }

  return url.toString()
}

export function convertOldCTAUrl(oldUrl: string): { newUrl: string; notes: string[] } {
  const notes: string[] = []

  try {
    const url = new URL(oldUrl)

    const newParams: CTAParams = {}

    // Keep CTA params that already pass the schema.
    for (const [key, value] of url.searchParams.entries()) {
      for (const param of Object.keys(ctaSchema.properties)) {
        if (key === param && key in ctaSchema.properties) {
          if (
            ctaSchema.properties[key as keyof typeof ctaSchema.properties].enum.includes(
              value.toLowerCase(),
            )
          ) {
            newParams[key as keyof CTAParams] = value.toLowerCase()
          } else {
            notes.push(`-  Found ${key} but "${value}" is not an allowed value, removing it`)
          }
        }
      }
    }

    const refCta = url.searchParams.get('ref_cta') || ''
    const refLoc = url.searchParams.get('ref_loc') || ''

    if (!newParams.ref_product) {
      newParams.ref_product = inferProductFromUrl(oldUrl, refCta)
      notes.push(`-  Missing ref_product - made an inference, manually update if needed`)
    }

    if (!newParams.ref_type) {
      newParams.ref_type = ctaToTypeMapping[refCta] || 'engagement'
      if (!ctaToTypeMapping[refCta]) {
        notes.push(`-  Missing ref_type - defaulted to "engagement", manually update if needed`)
      }
    }

    if (!newParams.ref_style) {
      newParams.ref_style = inferStyleFromContext(refLoc)
      notes.push(`-  Missing ref_style - made an inference, manually update if needed`)
    }

    if (!newParams.ref_plan) {
      if (ctaToPlanMapping[refCta]) {
        newParams.ref_plan = ctaToPlanMapping[refCta]
      }
    }

    // Keep existing query parameters except ref_cta, ref_loc, and ref_page.
    const newUrl = new URL(url.toString())

    newUrl.searchParams.delete('ref_cta')
    newUrl.searchParams.delete('ref_loc')
    newUrl.searchParams.delete('ref_page')

    for (const [key, value] of Object.entries(newParams)) {
      if (value) {
        newUrl.searchParams.set(key, value)
      }
    }

    // URL serializes github.com?foo as github.com/?foo; preserve the original slash shape.
    const urlBeforeQuery = oldUrl.split('?')[0]
    const hadTrailingSlash = urlBeforeQuery.endsWith('/')

    let finalUrl = newUrl.toString()

    if (!hadTrailingSlash && finalUrl.includes('/?')) {
      finalUrl = finalUrl.replace('/?', '?')
    }

    if (oldUrl === finalUrl) {
      notes.push(`-  Original URL is valid, no changes made!`)
    }

    return { newUrl: finalUrl, notes }
  } catch (error) {
    return {
      newUrl: oldUrl,
      notes: [`❌ Failed to parse URL: ${error}`],
    }
  }
}

function inferProductFromUrl(url: string, refCta: string): string {
  let hostname = ''
  try {
    hostname = new URL(url).hostname.toLowerCase()
  } catch {
    // Invalid URLs fall back to ref_cta or the default product.
  }
  if (hostname === 'desktop.github.com' || refCta.includes('desktop')) {
    return 'desktop'
  }
  // GitHub subdomains containing copilot and ref_cta values containing copilot map to copilot.
  if (
    (hostname.includes('copilot') && hostname.endsWith('.github.com')) ||
    refCta.toLowerCase().includes('copilot')
  ) {
    return 'copilot'
  }
  // GitHub subdomains containing enterprise and ref_cta values containing GHEC map to ghec.
  if (
    (hostname.includes('enterprise') && hostname.endsWith('.github.com')) ||
    refCta.includes('GHEC')
  ) {
    return 'ghec'
  }
  return 'copilot'
}

function inferStyleFromContext(refLoc: string): string {
  // Button-like ref_loc values map to button; everything else defaults to text.
  const isButton = buttonKeywords.some((keyword) => refLoc.toLowerCase().includes(keyword))
  return isButton ? 'button' : 'text'
}

async function interactiveBuilder(): Promise<void> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  function prompt(question: string): Promise<string> {
    return new Promise((resolve) => {
      rl.question(question, (answer) => {
        resolve(answer.trim())
      })
    })
  }

  try {
    console.log(chalk.blue.bold('🚀 Guided CTA URL builder\n'))

    let baseUrl = ''
    while (!baseUrl) {
      const input = await prompt('Enter the base URL (e.g., https://github.com/features/copilot): ')
      try {
        new URL(input)
        baseUrl = input
      } catch {
        console.log(chalk.red('Please enter a valid URL'))
      }
    }

    const params: CTAParams = {}

    console.log(chalk.white(`\nRequired parameters:`))
    const schemaProps = ctaSchema.properties as CTASchemaProperties

    for (const requiredParam of ctaSchema.required) {
      const paramKey = requiredParam as keyof CTAParams
      params[paramKey] = await selectFromOptions(
        requiredParam,
        schemaProps[paramKey].description,
        schemaProps[paramKey].enum,
        prompt,
      )
    }

    console.log(chalk.white(`\nOptional parameters:\n`))

    const allProperties = Object.keys(ctaSchema.properties)
    const optionalProperties = allProperties.filter((prop) => !ctaSchema.required.includes(prop))

    for (const optionalParam of optionalProperties) {
      const paramKey = optionalParam as keyof CTAParams
      const includeParam = await confirmChoice(
        `Include ${schemaProps[paramKey].name.toLowerCase()}?`,
        prompt,
      )
      if (includeParam) {
        params[paramKey] = await selectFromOptions(
          optionalParam,
          schemaProps[paramKey].description,
          schemaProps[paramKey].enum,
          prompt,
        )
      }
    }

    const validation = validateCTAParams(params)

    if (!validation.isValid) {
      console.log(chalk.red('\n❌ Validation Errors:'))
      for (const error of validation.errors) {
        console.log(chalk.red(`  • ${error}`))
      }
      rl.close()
      return
    }

    const ctaUrl = buildCTAUrl(baseUrl, params)

    console.log(chalk.green('\n✅ CTA URL generated successfully!'))

    console.log(chalk.white.bold('\nParameters summary:'))
    for (const [key, value] of Object.entries(params)) {
      if (value) {
        console.log(chalk.white(`  ${key}: ${value}`))
      }
    }

    console.log(chalk.white.bold('\nYour CTA URL:'))
    console.log(chalk.cyan(ctaUrl))

    console.log(chalk.yellow('\nCopy the URL above and use it in your documentation!'))
  } catch (error) {
    console.error(chalk.red('\n❌ An error occurred:'), error)
  } finally {
    rl.close()
  }
}

async function convertUrls(options: { url?: string; quiet?: boolean }): Promise<void> {
  try {
    if (!options.quiet) {
      console.log(chalk.blue.bold('CTA URL converter'))
    }

    if (options.url) {
      const result = convertOldCTAUrl(options.url)

      if (options.quiet) {
        console.log(result.newUrl)
        return
      }

      console.log(chalk.white('\nOriginal URL:'))
      console.log(chalk.gray(options.url))

      console.log(chalk.white('\nNew URL:'))
      console.log(chalk.cyan(result.newUrl))

      try {
        const newParams = extractCTAParams(result.newUrl)
        const validation = validateCTAParams(newParams)

        if (!validation.isValid) {
          console.log(chalk.red('\n❌ Validation errors in converted URL:'))
          for (const message of validation.errors) {
            console.log(chalk.red(`  • ${message}`))
          }
        }
      } catch (validationError) {
        console.log(chalk.red(`\n❌ Failed to validate new URL: ${validationError}`))
      }

      if (result.notes.length) {
        console.log(chalk.white('\n👉 Notes:'))
        for (const note of result.notes) {
          console.log(`  ${note}`)
        }
      }
    } else {
      if (!options.quiet) {
        console.log(chalk.yellow('Please specify the --url option'))
        console.log(chalk.white('\nExample:'))
        console.log(
          chalk.gray(
            '  tsx cta-builder.ts convert --url "https://github.com/copilot?ref_cta=Copilot+free&ref_loc=getting+started&ref_page=docs"',
          ),
        )
      }
    }
  } catch (error) {
    if (!options.quiet) {
      console.error(chalk.red('❌ An error occurred:'), error)
    }
  }

  // The convert command opens no readline handle, so Node exits after logging.
}

async function validateUrl(options: { url?: string }): Promise<void> {
  try {
    console.log(chalk.blue.bold('CTA URL validator'))

    if (options.url) {
      console.log(chalk.white('\nValidating URL:'))
      console.log(chalk.gray(options.url))

      let ctaParams: CTAParams
      try {
        ctaParams = extractCTAParams(options.url)
      } catch (error) {
        console.log(chalk.red(`\n❌ Invalid URL: ${error}`))
        return
      }

      if (Object.keys(ctaParams).length === 0) {
        console.log(chalk.yellow('\nℹ️ No CTA parameters found in URL'))
        return
      }

      const validation = validateCTAParams(ctaParams)

      if (validation.isValid) {
        console.log(chalk.green('\n✅ URL is valid'))
        console.log(chalk.white('\nCTA parameters found:'))
        for (const [key, value] of Object.entries(ctaParams)) {
          console.log(chalk.white(`  ${key}: ${value}`))
        }
      } else {
        console.log(chalk.red('\n❌ Validation errors:'))
        for (const message of validation.errors) {
          console.log(chalk.red(`  • ${message}`))
        }
        console.log(
          chalk.yellow(
            '\n💡 Try: npm run cta-builder -- convert --url "your-url" to auto-fix old format URLs',
          ),
        )
      }
    } else {
      console.log(chalk.yellow('Please specify the --url option'))
      console.log(chalk.white('\nExample:'))
      console.log(
        chalk.gray(
          '  tsx cta-builder.ts validate --url "https://github.com/copilot?ref_product=copilot&ref_type=trial&ref_style=button"',
        ),
      )
    }
  } catch (error) {
    console.error(chalk.red('❌ An error occurred:'), error)
  }
}

async function buildProgrammaticCTA(options: {
  url: string
  product: string
  type: string
  style: string
  plan?: string
}): Promise<void> {
  try {
    let baseUrl: string
    try {
      baseUrl = new URL(options.url).toString()
    } catch (error) {
      console.error(
        `Invalid base URL: ${options.url} - ${error instanceof Error ? error.message : error}`,
      )
      process.exit(1)
    }

    const params: CTAParams = {
      ref_product: options.product,
      ref_type: options.type,
      ref_style: options.style,
    }

    if (options.plan) {
      params.ref_plan = options.plan
    }

    const validation = validateCTAParams(params)
    if (!validation.isValid) {
      for (const error of validation.errors) {
        console.error(`Validation error: ${error}`)
      }
      process.exit(1)
    }

    const ctaUrl = buildCTAUrl(baseUrl, params)
    console.log(ctaUrl)
  } catch (error) {
    console.error(`Build failed: ${error}`)
    process.exit(1)
  }
}

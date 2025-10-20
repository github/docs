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

// Conversion mappings from old CTA format to new schema
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

// Keywords that suggest a button context vs inline text link
const buttonKeywords = ['landing', 'signup', 'download', 'trial']

const program = new Command()

// CLI setup
program
  .name('cta-builder')
  .description('Create a properly formatted Call-to-Action URL with tracking parameters.')
  .version('1.0.0')

// Add conversion command
program
  .command('convert')
  .description('Convert old CTA URLs to new schema format')
  .option('-u, --url <url>', 'Convert a single URL')
  .option('-q, --quiet', 'Only output the new URL (no other messages)')
  .action((options) => {
    convertUrls(options)
  })

// Add validation command
program
  .command('validate')
  .description('Validate a CTA URL against the schema')
  .option('-u, --url <url>', 'URL to validate')
  .action((options) => {
    validateUrl(options)
  })

// Add programmatic build command
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

// Default to interactive mode
program.action(() => {
  interactiveBuilder()
})

// Only run CLI when script is executed directly, not when imported
if (import.meta.url === `file://${process.argv[1]}`) {
  program.parse()
}

// Helper function to select from lettered options
async function selectFromOptions(
  paramName: string,
  message: string,
  options: string[],
  promptFn: (question: string) => Promise<string>,
): Promise<string> {
  console.log(chalk.yellow(`\n${message} (${paramName}):`))
  options.forEach((option, index) => {
    const letter = String.fromCharCode(97 + index) // 97 is 'a' in ASCII
    console.log(chalk.white(`  ${letter}. ${option}`))
  })

  let attempts = 0
  while (true) {
    const answer = await promptFn('Enter the letter of your choice: ')
    if (!answer) continue

    const letterIndex = answer.toLowerCase().charCodeAt(0) - 97 // Convert letter to index

    if (letterIndex >= 0 && letterIndex < options.length && answer.length === 1) {
      return options[letterIndex]
    }

    const validLetters = options.map((_, index) => String.fromCharCode(97 + index)).join(', ')
    console.log(chalk.red(`Invalid choice. Please enter one of: ${validLetters}`))

    // Safety: prevent infinite loops in automated scenarios
    if (++attempts > 50) {
      throw new Error('Too many invalid attempts. Please restart the tool.')
    }
  }
}

// Helper function to confirm yes/no
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

    // Safety: prevent infinite loops in automated scenarios
    if (++attempts > 50) {
      throw new Error('Too many invalid attempts. Please restart the tool.')
    }
  }
}

// Extract CTA parameters from a URL
function extractCTAParams(url: string): CTAParams {
  const urlObj = new URL(url)
  const ctaParams: CTAParams = {}
  for (const [key, value] of urlObj.searchParams.entries()) {
    if (key.startsWith('ref_')) {
      ;(ctaParams as any)[key] = value
    }
  }
  return ctaParams
}

// Process AJV validation errors into readable messages
function formatValidationErrors(ctaParams: CTAParams, errors: any[]): string[] {
  const errorMessages: string[] = []
  for (const error of errors) {
    let message = ''
    if (error.keyword === 'required') {
      message = `Missing required parameter: ${(error.params as any)?.missingProperty}`
    } else if (error.keyword === 'enum') {
      const paramName = error.instancePath.substring(1)
      const invalidValue = ctaParams[paramName as keyof CTAParams]
      const allowedValues = (error.params as any)?.allowedValues || []
      message = `Invalid value for ${paramName}: "${invalidValue}". Valid values are: ${allowedValues.join(', ')}`
    } else if (error.keyword === 'additionalProperties') {
      message = `Unexpected parameter: ${(error.params as any)?.additionalProperty}`
    } else {
      message = `Validation error: ${error.message}`
    }
    errorMessages.push(message)
  }
  return errorMessages
}

// Full validation using AJV schema (consistent across all commands)
function validateCTAParams(params: CTAParams): { isValid: boolean; errors: string[] } {
  const isValid = validateCTASchema(params)
  const ajvErrors = validateCTASchema.errors || []

  if (isValid) {
    return { isValid: true, errors: [] }
  }

  const errors = formatValidationErrors(params, ajvErrors)
  return {
    isValid: false,
    errors,
  }
}

// Build URL with CTA parameters
function buildCTAUrl(baseUrl: string, params: CTAParams): string {
  const url = new URL(baseUrl)

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      url.searchParams.set(key, value)
    }
  })

  return url.toString()
}

// Convert old CTA URL to new schema format
export function convertOldCTAUrl(oldUrl: string): { newUrl: string; notes: string[] } {
  const notes: string[] = []

  try {
    const url = new URL(oldUrl)

    // Build new parameters
    const newParams: CTAParams = {}

    // First, check if any of the new params already exist, and preserve those if so
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

    // Try to convert old params to new params
    const refCta = url.searchParams.get('ref_cta') || ''
    const refLoc = url.searchParams.get('ref_loc') || ''

    // Map ref_product
    if (!newParams.ref_product) {
      newParams.ref_product = inferProductFromUrl(oldUrl, refCta)
      notes.push(`-  Missing ref_product - made an inference, manually update if needed`)
    }

    // Map ref_type
    if (!newParams.ref_type) {
      newParams.ref_type = ctaToTypeMapping[refCta] || 'engagement'
      if (!ctaToTypeMapping[refCta]) {
        notes.push(`-  Missing ref_type - defaulted to "engagement", manually update if needed`)
      }
    }

    // Map ref_style
    if (!newParams.ref_style) {
      newParams.ref_style = inferStyleFromContext(refLoc)
      notes.push(`-  Missing ref_style - made an inference, manually update if needed`)
    }

    // Map ref_plan (optional)
    if (!newParams.ref_plan) {
      if (ctaToPlanMapping[refCta]) {
        newParams.ref_plan = ctaToPlanMapping[refCta]
      }
    }

    // Build new URL - preserve all existing parameters except old ref_ parameters
    const newUrl = new URL(url.toString())

    // Remove old CTA parameters
    newUrl.searchParams.delete('ref_cta')
    newUrl.searchParams.delete('ref_loc')
    newUrl.searchParams.delete('ref_page')

    // Add new CTA parameters
    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        newUrl.searchParams.set(key, value)
      }
    })

    // The URL constructor may add a slash before the question mark in
    // "github.com?foo", but we don't want that. First, check if original
    // URL had trailing slash before query params.
    const urlBeforeQuery = oldUrl.split('?')[0]
    const hadTrailingSlash = urlBeforeQuery.endsWith('/')

    let finalUrl = newUrl.toString()

    // Remove unwanted trailing slash if original didn't have one.
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
    // Fallback if url isn't valid: leave hostname empty
  }
  // Strict hostname check for desktop.github.com
  if (hostname === 'desktop.github.com' || refCta.includes('desktop')) {
    return 'desktop'
  }
  // Hostname contains 'copilot' (e.g., copilot.github.com), or refCta mentions copilot
  if (
    (hostname.includes('copilot') && hostname.endsWith('.github.com')) ||
    refCta.toLowerCase().includes('copilot')
  ) {
    return 'copilot'
  }
  // Hostname contains 'enterprise' (e.g. enterprise.github.com), or refCta mentions GHEC
  if (
    (hostname.includes('enterprise') && hostname.endsWith('.github.com')) ||
    refCta.includes('GHEC')
  ) {
    return 'ghec'
  }
  // Default fallback
  return 'copilot'
}

function inferStyleFromContext(refLoc: string): string {
  // If location suggests it's in a button context, return button
  // Otherwise default to text for inline links
  const isButton = buttonKeywords.some((keyword) => refLoc.toLowerCase().includes(keyword))
  return isButton ? 'button' : 'text'
}

// Interactive CTA builder
async function interactiveBuilder(): Promise<void> {
  // Create readline interface for interactive mode
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  // Helper function to prompt user (scoped to this function)
  function prompt(question: string): Promise<string> {
    return new Promise((resolve) => {
      rl.question(question, (answer) => {
        resolve(answer.trim())
      })
    })
  }

  try {
    console.log(chalk.blue.bold('🚀 Guided CTA URL builder\n'))

    // Get base URL with validation
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

    // Required parameters
    console.log(chalk.white(`\nRequired parameters:`))

    for (const requiredParam of ctaSchema.required) {
      ;(params as any)[requiredParam] = await selectFromOptions(
        requiredParam,
        (ctaSchema.properties as any)[requiredParam].description,
        (ctaSchema.properties as any)[requiredParam].enum,
        prompt,
      )
    }

    // Optional parameters (properties not in required array)
    console.log(chalk.white(`\nOptional parameters:\n`))

    const allProperties = Object.keys(ctaSchema.properties)
    const optionalProperties = allProperties.filter((prop) => !ctaSchema.required.includes(prop))

    for (const optionalParam of optionalProperties) {
      const includeParam = await confirmChoice(
        `Include ${(ctaSchema.properties as any)[optionalParam].name.toLowerCase()}?`,
        prompt,
      )
      if (includeParam) {
        ;(params as any)[optionalParam] = await selectFromOptions(
          optionalParam,
          (ctaSchema.properties as any)[optionalParam].description,
          (ctaSchema.properties as any)[optionalParam].enum,
          prompt,
        )
      }
    }

    // Validate parameters
    const validation = validateCTAParams(params)

    if (!validation.isValid) {
      console.log(chalk.red('\n❌ Validation Errors:'))
      validation.errors.forEach((error) => console.log(chalk.red(`  • ${error}`)))
      rl.close()
      return
    }

    // Build and display URL
    const ctaUrl = buildCTAUrl(baseUrl, params)

    console.log(chalk.green('\n✅ CTA URL generated successfully!'))

    console.log(chalk.white.bold('\nParameters summary:'))
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        console.log(chalk.white(`  ${key}: ${value}`))
      }
    })

    console.log(chalk.white.bold('\nYour CTA URL:'))
    console.log(chalk.cyan(ctaUrl))

    console.log(chalk.yellow('\nCopy the URL above and use it in your documentation!'))
  } catch (error) {
    console.error(chalk.red('\n❌ An error occurred:'), error)
  } finally {
    rl.close()
  }
}

// Convert URLs command handler
async function convertUrls(options: { url?: string; quiet?: boolean }): Promise<void> {
  try {
    if (!options.quiet) {
      console.log(chalk.blue.bold('CTA URL converter'))
    }

    if (options.url) {
      const result = convertOldCTAUrl(options.url)

      if (options.quiet) {
        // In quiet mode, only output the new URL
        console.log(result.newUrl)
        return
      }

      console.log(chalk.white('\nOriginal URL:'))
      console.log(chalk.gray(options.url))

      console.log(chalk.white('\nNew URL:'))
      console.log(chalk.cyan(result.newUrl))

      // Validate the converted URL using shared validation function
      try {
        const newParams = extractCTAParams(result.newUrl)
        const validation = validateCTAParams(newParams)

        if (!validation.isValid) {
          console.log(chalk.red('\n❌ Validation errors in converted URL:'))
          validation.errors.forEach((message) => console.log(chalk.red(`  • ${message}`)))
        }
      } catch (validationError) {
        console.log(chalk.red(`\n❌ Failed to validate new URL: ${validationError}`))
      }

      if (result.notes.length) {
        console.log(chalk.white('\n👉 Notes:'))
        result.notes.forEach((note) => console.log(`  ${note}`))
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

  // The convert command doesn't use readline, so script should exit naturally
}

// Validate URLs command handler
async function validateUrl(options: { url?: string }): Promise<void> {
  try {
    console.log(chalk.blue.bold('CTA URL validator'))

    if (options.url) {
      console.log(chalk.white('\nValidating URL:'))
      console.log(chalk.gray(options.url))

      // Extract CTA parameters from URL
      let ctaParams: CTAParams
      try {
        ctaParams = extractCTAParams(options.url)
      } catch (error) {
        console.log(chalk.red(`\n❌ Invalid URL: ${error}`))
        return
      }

      // Check if URL has any CTA parameters
      if (Object.keys(ctaParams).length === 0) {
        console.log(chalk.yellow('\nℹ️ No CTA parameters found in URL'))
        return
      }

      // Validate against schema using shared validation function
      const validation = validateCTAParams(ctaParams)

      if (validation.isValid) {
        console.log(chalk.green('\n✅ URL is valid'))
        console.log(chalk.white('\nCTA parameters found:'))
        Object.entries(ctaParams).forEach(([key, value]) => {
          console.log(chalk.white(`  ${key}: ${value}`))
        })
      } else {
        console.log(chalk.red('\n❌ Validation errors:'))
        validation.errors.forEach((message) => console.log(chalk.red(`  • ${message}`)))
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

// Programmatic build command handler
async function buildProgrammaticCTA(options: {
  url: string
  product: string
  type: string
  style: string
  plan?: string
}): Promise<void> {
  try {
    // Validate base URL
    let baseUrl: string
    try {
      baseUrl = new URL(options.url).toString()
    } catch (error) {
      console.error(
        `Invalid base URL: ${options.url} - ${error instanceof Error ? error.message : error}`,
      )
      process.exit(1)
    }

    // Build CTA parameters object
    const params: CTAParams = {
      ref_product: options.product,
      ref_type: options.type,
      ref_style: options.style,
    }

    // Add optional parameters
    if (options.plan) {
      params.ref_plan = options.plan
    }

    // Validate parameters against schema
    const validation = validateCTAParams(params)
    if (!validation.isValid) {
      // Output validation errors to stderr and exit with error code
      validation.errors.forEach((error) => {
        console.error(`Validation error: ${error}`)
      })
      process.exit(1)
    }

    // Build and output the URL (stdout only)
    const ctaUrl = buildCTAUrl(baseUrl, params)
    console.log(ctaUrl)
  } catch (error) {
    console.error(`Build failed: ${error}`)
    process.exit(1)
  }
}

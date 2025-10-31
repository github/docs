import { convertContentToDocs } from '../scripts/convert-markdown-for-docs'

// Test content that simulates a circular link scenario
const testContent = `
# bqrs interpret

[Plumbing] Interpret data in a single BQRS.

## Description

A command that interprets a single BQRS file according to the provided
metadata and generates output in the specified format.

## Options

### Primary Options

This option has no effect when passed to \`codeql bqrs interpret<bqrs-interpret>\`{.interpreted-text role="doc"}.

For more information, see \`codeql database analyze<database-analyze>\`{.interpreted-text role="doc"}.
`

async function testCircularLinkFix(): Promise<boolean> {
  console.log('Testing circular link fix...')

  try {
    // Test with circular link (should convert to plain text)
    const result1 = await convertContentToDocs(testContent, {}, 'bqrs-interpret.md')
    console.log('✅ Conversion completed successfully')

    // Check if circular link was converted to plain text
    const hasCircularLink = result1.content.includes(
      '[codeql bqrs interpret](/code-security/codeql-cli/codeql-cli-manual/bqrs-interpret)',
    )
    const hasPlainText = result1.content.includes('codeql bqrs interpret')

    if (hasCircularLink) {
      console.log('❌ FAIL: Circular link still present in output')
      console.log('Content:', result1.content)
      return false
    } else if (hasPlainText) {
      console.log('✅ PASS: Circular link converted to plain text')
    } else {
      console.log('⚠️  WARNING: Could not find expected text in output')
    }

    // Check if non-circular link is preserved
    const hasValidLink = result1.content.includes(
      '[codeql database analyze](/code-security/codeql-cli/codeql-cli-manual/database-analyze)',
    )

    if (hasValidLink) {
      console.log('✅ PASS: Non-circular link preserved correctly')
    } else {
      console.log('❌ FAIL: Valid cross-reference link was incorrectly removed')
    }

    console.log('\n--- Generated content preview ---')
    console.log(`${result1.content.substring(0, 800)}...`)

    return !hasCircularLink && hasValidLink
  } catch (error) {
    console.error('❌ Test failed with error:', error)
    return false
  }
}

async function testEdgeCases(): Promise<boolean> {
  console.log('\nTesting edge cases...')

  // Test with no filename (should not crash)
  const result1 = await convertContentToDocs(testContent, {}, '')
  const hasLink1 = result1.content.includes(
    '[codeql bqrs interpret](/code-security/codeql-cli/codeql-cli-manual/bqrs-interpret)',
  )
  if (hasLink1) {
    console.log('✅ PASS: No filename provided - link preserved as expected')
  } else {
    console.log('❌ FAIL: Link incorrectly removed when no filename provided')
    return false
  }

  // Test with different filename (should preserve link)
  const result2 = await convertContentToDocs(testContent, {}, 'different-file.md')
  const hasLink2 = result2.content.includes(
    '[codeql bqrs interpret](/code-security/codeql-cli/codeql-cli-manual/bqrs-interpret)',
  )
  if (hasLink2) {
    console.log('✅ PASS: Different filename - link preserved correctly')
  } else {
    console.log('❌ FAIL: Link incorrectly removed for different filename')
    return false
  }

  return true
}

// Run all tests
async function runAllTests(): Promise<void> {
  const test1 = await testCircularLinkFix()
  const test2 = await testEdgeCases()

  if (test1 && test2) {
    console.log('\n🎉 All tests passed!')
    process.exit(0)
  } else {
    console.log('\n💥 Tests failed!')
    process.exit(1)
  }
}

runAllTests()

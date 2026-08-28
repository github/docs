import { describe, it } from 'vitest'
import { RuleTester, Rule } from 'eslint'
import ruleModule from '../no-dangerously-set-inner-html'

const rule = ruleModule as Rule.RuleModule

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    parserOptions: {
      ecmaFeatures: { jsx: true },
    },
  },
})

describe('no-dangerously-set-inner-html', () => {
  it('allows code that does not use dangerouslySetInnerHTML', () => {
    ruleTester.run('no-dangerously-set-inner-html', rule, {
      valid: [
        { code: `const el = <RenderedHTML as="div" html={html} />` },
        { code: `const el = <MarkdownContent hast={hast} />` },
        { code: `const props = { className: 'x', children: nodes }` },
        // Destructuring that strips the prop is safe and must not be flagged.
        { code: `const { dangerouslySetInnerHTML, ...safeProps } = props` },
      ],
      invalid: [],
    })
  })

  it('flags the JSX attribute form', () => {
    ruleTester.run('no-dangerously-set-inner-html', rule, {
      valid: [],
      invalid: [
        {
          code: `const el = <div dangerouslySetInnerHTML={{ __html: html }} />`,
          errors: [{ messageId: 'noDanger' }],
        },
      ],
    })
  })

  it('flags the object-property form used when spreading props', () => {
    ruleTester.run('no-dangerously-set-inner-html', rule, {
      valid: [],
      invalid: [
        {
          code: `const childProps = { dangerouslySetInnerHTML: { __html: children } }`,
          errors: [{ messageId: 'noDanger' }],
        },
        // String-literal key form must also be flagged.
        {
          code: `const childProps = { 'dangerouslySetInnerHTML': { __html: children } }`,
          errors: [{ messageId: 'noDanger' }],
        },
      ],
    })
  })

  it('flags the assignment form', () => {
    ruleTester.run('no-dangerously-set-inner-html', rule, {
      valid: [],
      invalid: [
        {
          code: `props.dangerouslySetInnerHTML = { __html: html }`,
          errors: [{ messageId: 'noDanger' }],
        },
        // Computed string-key assignment is a trivial bypass and must be flagged.
        {
          code: `props['dangerouslySetInnerHTML'] = { __html: html }`,
          errors: [{ messageId: 'noDanger' }],
        },
      ],
    })
  })
})

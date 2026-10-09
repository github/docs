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
        // Destructuring strips the prop, so the rule leaves it alone.
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
        // Computed string-key assignment bypasses JSX-attribute checks, so the rule flags it.
        {
          code: `props['dangerouslySetInnerHTML'] = { __html: html }`,
          errors: [{ messageId: 'noDanger' }],
        },
      ],
    })
  })
})

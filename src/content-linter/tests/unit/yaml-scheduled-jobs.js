import { runRule } from '../../lib/init-test.js'
import { yamlScheduledJobs } from '../../lib/linting-rules/yaml-scheduled-jobs.js'

describe(yamlScheduledJobs.names.join(' - '), () => {
  test('yaml scheduled jobs in markdown do not start on the hour', async () => {
    const markdown = ['```yaml', 'on:', '  schedule:', "    - cron: '0 5,17 * * *'", '```'].join(
      '\n',
    )
    const result = await runRule(yamlScheduledJobs, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(4)
    expect(errors[0].errorContext).toEqual('0 5,17 * * *')
    expect(errors[0].fixInfo).toBeNull()
  })

  test('yaml scheduled job in markdown does not start on the hour', async () => {
    const markdown = ['```yaml', 'on:', '  schedule:', "    - cron: '30 5,17 * * *'", '```'].join(
      '\n',
    )
    const result = await runRule(yamlScheduledJobs, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('yaml scheduled jobs in markdown are all unique', async () => {
    const markdown = [
      '```yaml',
      'on:',
      '  schedule:',
      "    - cron: '30 5,20 * * *'",
      "    - cron: '30 5,20 * * *'",
      '```',
    ].join('\n')
    const result = await runRule(yamlScheduledJobs, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].lineNumber).toBe(4)
    expect(errors[0].errorContext).toEqual('30 5,20 * * *')
    expect(errors[0].fixInfo).toBeNull()
  })

  test('yaml scheduled jobs in markdown are not repeated', async () => {
    const markdown = [
      '```yaml',
      'on:',
      '  schedule:',
      "    - cron: '30 4,20 * * *'",
      '```',
      '```yaml',
      'on:',
      '  schedule:',
      "    - cron: '30 3,20 * * 3'",
      '```',
    ].join('\n')
    const result = await runRule(yamlScheduledJobs, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('yaml scheduled jobs with liquid', async () => {
    const markdown = [
      '```yaml',
      'on:',
      '  schedule:',
      "    - cron: '30 1,20 * * *'",
      'jobs:',
      '  upload_tool_cache:',
      '    runs-on: ubuntu-22.04',
      '    steps:',
      '      - name: Clear any existing tool cache',
      '        uses: {% data reusables.actions.action-codeql-action-init %}',
      '        with:',
      '          languages: {% raw %}languages{% endraw %}',
      '```',
    ].join('\n')
    const result = await runRule(yamlScheduledJobs, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('yaml scheduled jobs without on:', async () => {
    const markdown = [
      '```yaml',
      'schedule:',
      "    - cron: '30 1,20 * * *'",
      'jobs:',
      '  upload_tool_cache:',
      '    runs-on: ubuntu-22.04',
      '    steps:',
      '      - name: Clear any existing tool cache',
      '        uses: {% data reusables.actions.action-codeql-action-init %}',
      '        with:',
      '          languages: {% raw %}languages{% endraw %}',
      '```',
    ].join('\n')
    const result = await runRule(yamlScheduledJobs, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })
})

You can use the `jobs.<job_id>.if` conditional to prevent a job from running unless a condition is met. 条件文を作成するには、サポートされている任意のコンテキストや式が使えます。

{% data reusables.github-actions.expression-syntax-if %} For more information, see "[Expressions](/actions/learn-github-actions/expressions)."

### Example: Only run job for specific repository

This example uses `if` to control when the `production-deploy` job can run. It will only run if the repository is named `octo-repo-prod` and is within the `octo-org` organization. Otherwise, the job will be marked as _skipped_.

```yaml{:copy}
name: example-workflow
on: [push]
jobs:
  production-deploy:
    if: github.repository == 'octo-org/octo-repo-prod'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '14'
      - run: npm install -g bats
```

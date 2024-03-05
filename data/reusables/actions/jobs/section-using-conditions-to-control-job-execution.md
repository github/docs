You can use the `jobs.<job_id>.if` conditional to prevent a job from running unless a condition is met. {% data reusables.actions.if-supported-contexts %}

{% note %}

**Note:** The `jobs.<job_id>.if` condition is evaluated before [`jobs.<job_id>.strategy.matrix`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix) is applied.

{% endnote %}

{% data reusables.actions.expression-syntax-if %} For more information, see "[AUTOTITLE](/actions/learn-github-actions/expressions)."

### Example: Only run job for specific repository

This example uses `if` to control when the `production-deploy` job can run. It will only run if the repository is named `octo-repo-prod` and is within the `octo-org` organization. Otherwise, the job will be marked as _skipped_.

```yaml copy
name: example-workflow
on: [push]
jobs:
  production-deploy:
    if: github.repository == 'octo-org/octo-repo-prod'
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
```

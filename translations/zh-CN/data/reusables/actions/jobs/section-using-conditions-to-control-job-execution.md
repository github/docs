您可以使用 `jobs.<job_id>.if` 条件阻止作业在条件得到满足之前运行。 您可以使用任何支持上下文和表达式来创建条件。

{% data reusables.actions.expression-syntax-if %} 更多信息请参阅“[表达式](/actions/learn-github-actions/expressions)”。

### 示例：仅运行特定存储库的作业

此示例使用 `if` 来控制 `production-deploy` 作业何时可以运行。 仅当存储库名为 `octo-repo-prod` 并且位于 `octo-org` 组织内时，它才会运行。 否则，作业将标记为_跳过_。

```yaml{:copy}
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

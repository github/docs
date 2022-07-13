以下のワークフローの例では[labeler action](https://github.com/actions/labeler)を使用しています。これには、`repo-token`入力パラメータの値として`GITHUB_TOKEN`を渡すことが必要です。

```yaml{:copy}
name: Pull request labeler
on: [ pull_request_target ]

permissions:
  contents: read
  pull-requests: write

jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-labeler %}
        with:
          repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

此示例工作流程使用[贴标器操作](https://github.com/actions/labeler)，需要 `GITHUB_TOKEN` 作为 `repo-token` 输入参数的值：

```yaml{:copy}
name: Pull request labeler
on: [ pull_request_target ]

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}permissions:
  contents: read
  pull-requests: write

{% endif %}
jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/labeler@v2
        with:
          repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

Este exemplo de fluxo de trabalho usa a [ação etiquetadora](https://github.com/actions/labeler), que exige o `GITHUB_TOKEN` como o valor para o parâmetro de entrada do `token`:

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

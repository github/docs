Este flujo de trabajo de ejemplo usa la acción de etiquetadora [](https://github.com/actions/labeler), que requiere el `GITHUB_TOKEN` como el valor para el parámetro de entrada `repo-token`:

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

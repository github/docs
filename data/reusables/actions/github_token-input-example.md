This example workflow uses the [labeler action](https://github.com/actions/labeler), which requires the `GITHUB_TOKEN` as the value for the `repo-token` input parameter:

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
      - uses: {% data reusables.actions.action-labeler %}
        with:
          repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

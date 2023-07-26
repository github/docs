This example workflow uses the [labeler action](https://github.com/actions/labeler), which requires the `GITHUB_TOKEN` as the value for the `repo-token` input parameter:

```yaml copy
name: Pull request labeler
on: [ pull_request_target ]

jobs:
  triage:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
    steps:
      - uses: {% data reusables.actions.action-labeler %}
        with:
          repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

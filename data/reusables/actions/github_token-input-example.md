This example workflow uses the [GitHub CLI](/actions/using-workflows/using-github-cli-in-workflows), which requires the `GITHUB_TOKEN` as the value for the `GH_TOKEN` input parameter:

```yaml copy
name: Open new issue
on: workflow_dispatch

jobs:
  open-issue:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      issues: write
    steps:
      - run: |
          gh issue --repo {% raw %}${{ github.repository }}{% endraw %} \
            create --title "Issue title" --body "Issue body"
        env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

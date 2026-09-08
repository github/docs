This example workflow uses the [GitHub CLI](/actions/how-tos/write-workflows/choose-what-workflows-do/use-github-cli), which requires the `GITHUB_TOKEN` as the value for the `GH_TOKEN` input parameter:

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

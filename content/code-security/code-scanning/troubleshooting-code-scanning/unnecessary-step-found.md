---
title: 'Warning: "1 issue was detected with this workflow: git checkout HEAD^2 is no longer necessary"'
shortTitle: 'Unnecessary step found'
intro: 'If you see this warning, you should update your workflow to follow current best practice.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

## About this warning

```text
Warning: 1 issue was detected with this workflow: git checkout HEAD^2 is no longer
necessary. Please remove this step as Code Scanning recommends analyzing the merge
commit for best results.
```

If you're using an old {% data variables.product.prodname_codeql %} workflow you may receive this warning from the "Initialize {% data variables.product.prodname_codeql %}" action.

## Confirm the cause of the problem

Check for the following lines from the {% data variables.product.prodname_codeql %} workflow. These lines were included in the `steps` section of the `Analyze` job in initial versions of the {% data variables.product.prodname_codeql %} workflow.

```yaml
        with:
          # We must fetch at least the immediate parents so that if this is
          # a pull request then we can checkout the head.
          fetch-depth: 2

      # If this run was triggered by a pull request event, then checkout
      # the head of the pull request instead of the merge commit.
      - run: git checkout HEAD^2
        if: {% raw %}${{ github.event_name == 'pull_request' }}{% endraw %}
```

## Fixing the problem

Remove the lines from the {% data variables.product.prodname_codeql %} workflow. The revised `steps` section of the workflow should now look like this:

```yaml
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}

      # Initializes the {% data variables.product.prodname_codeql %} tools for scanning.
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: {% data reusables.actions.action-codeql-action-init %}

      ...
```

For more information about editing the {% data variables.product.prodname_codeql %} workflow file, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#editing-a-code-scanning-workflow)."

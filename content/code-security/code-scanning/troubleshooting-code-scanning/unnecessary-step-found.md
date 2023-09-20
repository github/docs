---
title: 'Warning: "1 issue was detected with this workflow: git checkout HEAD^2 is no longer necessary"'
shortTitle: 'Unnecessary step found'
intro: 'If you see this warning, you should update your workflow to follow current best practice.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.code-scanning.beta %}

If you're using an old {% data variables.product.prodname_codeql %} workflow you may get the following warning in the output from the "Initialize {% data variables.product.prodname_codeql %}" action:

```shell
Warning: 1 issue was detected with this workflow: git checkout HEAD^2 is no longer
necessary. Please remove this step as Code Scanning recommends analyzing the merge
commit for best results.
```

Fix this by removing the following lines from the {% data variables.product.prodname_codeql %} workflow. These lines were included in the `steps` section of the `Analyze` job in initial versions of the {% data variables.product.prodname_codeql %} workflow.

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

The revised `steps` section of the workflow will look like this:

```yaml
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}

      # Initializes the {% data variables.product.prodname_codeql %} tools for scanning.
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: {% data reusables.actions.action-codeql-action-init %}

      ...
```

For more information about editing the {% data variables.product.prodname_codeql %} workflow file, see  "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#editing-a-code-scanning-workflow)."

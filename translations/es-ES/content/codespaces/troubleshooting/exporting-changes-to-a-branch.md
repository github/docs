---
title: Exporting changes to a branch
intro: This article provides steps for exporting your codespace changes to a branch.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Exporting changes
---

## Exporting changes to a branch

While using {% data variables.product.prodname_github_codespaces %}, you may want to export your changes to a branch without launching your codespace.

This can be useful when you have hit a [spending limit](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces) or have a general issue accessing your codespace.

To export your changes:

{% data reusables.codespaces.your-codespaces-procedure-step %} Or, for an individual repository, click the **{% octicon "code" aria-label="The code icon" %} Code** menu.
1. Click the ellipsis (**...**) to the right of the codespace you want to export from.
1. Select **{% octicon "git-branch" aria-label="The git branch icon" %} Export changes to branch**.

  ![Export changes to a branch](/assets/images/help/codespaces/export-changes-to-a-branch.png)

1. From the popover, select **Create branch**.

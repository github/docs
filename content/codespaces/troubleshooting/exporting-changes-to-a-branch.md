---
title: Exporting changes to a branch
intro: This article provides steps for exporting your codespace changes to a branch.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Exporting changes
---

## Exporting changes to a branch

While using {% data variables.product.prodname_github_codespaces %}, you may want to export your changes to a branch without launching your codespace. This can be useful when you have hit a [spending limit](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces) or have a general issue accessing your codespace.

If your codespace is unpublished (created from a template and not associated with a repository on {% data variables.product.product_name %}), then you won't be able to export changes to a branch, but you can publish the codespace to a new repository without launching the codespace. For more information, see "[Creating a codespace from a template](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-from-githubcom)."

To export your changes to a branch:

{% data reusables.codespaces.your-codespaces-procedure-step %} Or, for an individual repository, click the **{% octicon "code" aria-label="The code icon" %} Code** menu.
1. Click the ellipsis (**...**) to the right of the codespace you want to export from.
2. Select **{% octicon "git-branch" aria-label="The git branch icon" %} Export changes to branch**.

  ![Export changes to a branch](/assets/images/help/codespaces/export-changes-to-a-branch.png)

1. From the popover, select **Create branch**.

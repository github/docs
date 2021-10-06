---
title: Prebuilding Codespaces for your project
intro: You can configure your project to prebuild a codespace automatically each time you push a change to your repository.
versions:
  fpt: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Prebuilding Codespaces
---

{% note %}

**Note:** This feature is currently in private preview.

{% endnote %}

## About prebuilding a Codespace

Prebuilding your codespaces allows you to be more productive and access your codespace faster. This is because any source code, editor extensions, project dependencies, commands, or configurations have already been downloaded, installed, and applied before you begin your coding session. Once you push changes to your repository, {% data variables.product.prodname_codespaces %} automatically handles configuring the builds.

The ability to prebuild Codespaces is currently in private preview. To get access to this feature, contact codespaces@github.com.

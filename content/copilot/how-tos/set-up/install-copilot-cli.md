---
title: Installing GitHub Copilot CLI
shortTitle: Install Copilot CLI
intro: 'Learn how to install {% data variables.copilot.copilot_cli_short %} so that you can use {% data variables.product.prodname_copilot_short %} directly from the command line.'
versions:
  feature: copilot
topics:
  - Copilot
  - CLI
redirect_from:
  - /copilot/how-tos/set-up/install-copilot-in-the-cli
  - /copilot/github-copilot-in-the-cli/enabling-github-copilot-in-the-cli
  - /copilot/github-copilot-in-the-cli/setting-up-github-copilot-in-the-cli
  - /copilot/github-copilot-in-the-cli/installing-github-copilot-in-the-cli
  - /copilot/managing-copilot/configure-personal-settings/installing-github-copilot-in-the-cli
  - /copilot/how-tos/personal-settings/installing-github-copilot-in-the-cli
  - /copilot/how-tos/set-up/installing-github-copilot-in-the-cli
contentType: how-tos
category: 
  - Configure Copilot
---

{% data reusables.cli.preview-note-cli %}

To find out about {% data variables.copilot.copilot_cli_short %} before you install it, see [AUTOTITLE](/copilot/concepts/agents/about-copilot-cli).

## Prerequisites

* **A {% data variables.product.prodname_copilot %} subscription**. See [Copilot plans](https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=text).
* **Node.js** version 22 or later
* **npm** version 10 or later

If you have access to {% data variables.product.prodname_copilot %} via your organization or enterprise, you cannot use {% data variables.copilot.copilot_cli_short %} if your organization owner or enterprise administrator has disabled it in the organization or enterprise settings. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/managing-policies-for-copilot-in-your-organization).

## Installing or updating {% data variables.copilot.copilot_cli_short %}

Run the following command to install or update {% data variables.copilot.copilot_cli_short %}.

```shell copy
npm install -g @github/copilot
```

## Next steps

You can now use {% data variables.product.prodname_copilot_short %} from the command line. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/use-copilot-cli).

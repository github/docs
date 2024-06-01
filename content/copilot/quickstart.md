---
title: Quickstart for GitHub Copilot
intro: 'Quickly learn how to use {% data variables.product.prodname_copilot_short %} to suggest code as you type.'
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
shortTitle: Quickstart
topics:
  - Copilot
---

## Introduction

This guide demonstrates how to set up a {% data variables.product.prodname_copilot_for_individuals %} subscription for your personal account, set up {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}, and get your first code suggestion.

To learn more about everything that {% data variables.product.prodname_copilot_short %} can do, see "[AUTOTITLE](/copilot/about-github-copilot)."

To get started using {% data variables.product.prodname_copilot_short %} in other coding environments, see "[AUTOTITLE](/copilot/using-github-copilot/using-github-copilot-code-suggestions-in-your-editor)."

## Sign up for {% data variables.product.prodname_copilot %}

<a href="https://github.com/github-copilot/signup?ref_cta=Copilot+trial&ref_loc=quickstart+for+github+copilot&ref_page=docs" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Start a free trial</span> {% octicon "link-external" height:16 %}</a>

Before you can start using {% data variables.product.prodname_copilot %} through your personal account, you will need to set up a free trial or subscription for {% data variables.product.prodname_copilot_for_individuals %}. For more information, see "[AUTOTITLE](/copilot/copilot-individual/about-github-copilot-individual)."

## Install {% data variables.product.prodname_vscode %} and the {% data variables.product.prodname_copilot %} extension

1. If you don't already have {% data variables.product.prodname_vscode %} installed, install it from the [{% data variables.product.prodname_vscode %} download page](https://code.visualstudio.com/Download).

1. Install the {% data variables.product.prodname_copilot %} extension from the [{% data variables.product.prodname_vs %} Marketplace](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot). For more information, see "[Set up {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/docs/copilot/setup)" in the Microsoft documentation.

## Get your first suggestion

Now that you've installed the {% data variables.product.prodname_copilot %} extension, follow these steps to create a new file and get a code suggestion from {% data variables.product.prodname_copilot_short %}.

This example uses JavaScript, however other languages will work similarly. {% data reusables.copilot.supported-languages %}

1. Open {% data variables.product.prodname_vscode %}.
{% data reusables.copilot.create-js-file %}
{% data reusables.copilot.type-function-header %}
   {% data variables.product.prodname_copilot %} will automatically suggest an entire function body in grayed text. The exact suggestion may vary.
1. {% data reusables.copilot.accept-suggestion %}

## Next steps

You successfully installed {% data variables.product.prodname_copilot %} and received your first suggestion, but that's just the beginning! Here are some helpful resources for taking your next steps with {% data variables.product.prodname_copilot %}.

- **Configure {% data variables.product.prodname_copilot_short %} in your editor** - You can enable or disable {% data variables.product.prodname_copilot %} from within your editor, and create your own preferred keyboard shortcuts for {% data variables.product.prodname_copilot_short %}. For more information, see "[AUTOTITLE](/copilot/configuring-github-copilot/configuring-github-copilot-in-your-environment)."
- **Get started with {% data variables.product.prodname_copilot_chat %}** - Learn how to ask {% data variables.product.prodname_copilot_short %} for information and assistance, using {% data variables.product.prodname_copilot_chat %}. For more information, see "[AUTOTITLE](/copilot/github-copilot-chat/using-github-copilot-chat-in-your-ide)"{% ifversion ghec %} and "[AUTOTITLE](/copilot/github-copilot-enterprise/copilot-chat-in-github/using-github-copilot-chat-in-githubcom)"{% endif %}.
- **Use {% data variables.product.prodname_copilot_short %} like a pro** - Learn how to write effective prompts for {% data variables.product.prodname_copilot %}. For more information, see "[Best practices for using {% data variables.product.prodname_copilot %} in VS Code](https://code.visualstudio.com/docs/copilot/prompt-crafting)" in the {% data variables.product.prodname_vscode %} documentation.
- **Troubleshoot issues** - Learn more about how to troubleshoot common issues with {% data variables.product.prodname_copilot %}. For more information, see "[AUTOTITLE](/copilot/troubleshooting-github-copilot)."

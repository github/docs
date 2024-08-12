---
title: Troubleshooting issues with GitHub Copilot Chat in IDEs
intro: Troubleshooting help for common issues with {% data variables.product.prodname_copilot_chat %} in your IDE.
product: '{% data reusables.gated-features.copilot-chat-callout %}'
defaultTool: vscode
topics:
  - Copilot
  - Troubleshooting
versions:
  feature: copilot
shortTitle: Copilot Chat
redirect_from:
  - /copilot/troubleshooting-github-copilot/troubleshooting-issues-with-github-copilot-chat
  - /copilot/troubleshooting-github-copilot/troubleshooting-authentication-issues-with-github-copilot-chat
---

If you need help with {% data variables.product.prodname_copilot_chat %} and can't find the answer here, you can report a bug or ask for help. For more information, see "[Sharing feedback about {% data variables.product.prodname_copilot_chat %}](/copilot/github-copilot-chat/copilot-chat-in-ides/using-github-copilot-chat-in-your-ide#sharing-feedback-about-github-copilot-chat)."

If you can't find {% data variables.product.prodname_copilot_chat %} in your editor, make sure you have checked the "[Prerequisites](/copilot/github-copilot-chat/copilot-chat-in-ides/using-github-copilot-chat-in-your-ide#prerequisites)" section.

{% vscode %}

## Troubleshooting issues caused by version incompatibility

{% data reusables.copilot.vscode-version-compatibility %}

To use {% data variables.product.prodname_copilot_chat %}, make sure you are using the [latest version of {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/updates).

{% endvscode %}

## Troubleshooting authentication issues in your editor

You can use {% data variables.product.prodname_copilot_chat %} in {% data variables.product.prodname_vscode %} and {% data variables.product.prodname_vs %}. You can use the tabs at the top of this article for troubleshooting information relevant to the editor you're using.

{% vscode %}

### Troubleshooting authentication issues in {% data variables.product.prodname_vscode %}

If you are experiencing authentication issues after installing the {% data variables.product.prodname_copilot_chat %} extension in {% data variables.product.prodname_vscode %}, you can try the following steps to resolve the issue.

1. In the bottom left corner of the {% data variables.product.prodname_vscode %} window, click the **Accounts** icon, hover over your {% data variables.product.prodname_dotcom %} username, and click the **Sign out** button.
1. To reload {% data variables.product.prodname_vscode %}, press <kbd>F1</kbd> to open the command palette, and select **Developer: Reload Window**.
1. After {% data variables.product.prodname_vscode %} reloads, sign back in to your {% data variables.product.prodname_dotcom %} account.

{% endvscode %}

{% visualstudio %}

### Troubleshooting authentication issues in {% data variables.product.prodname_vs %}

If you are experiencing authentication issues after installing the {% data variables.product.prodname_copilot_chat %} extension in {% data variables.product.prodname_vs %}, you can try the following steps to resolve the issue.

1. Check that the {% data variables.product.prodname_dotcom %} ID you are signed into {% data variables.product.prodname_vs %} with is the same as the one you have been granted access to {% data variables.product.prodname_copilot_chat %} with.
1. Check whether your {% data variables.product.prodname_dotcom %} ID/credentials need refreshing in {% data variables.product.prodname_vs %}. For more information, see "[Work with {% data variables.product.prodname_dotcom %} accounts in {% data variables.product.prodname_vs %}](https://learn.microsoft.com/en-us/visualstudio/ide/work-with-github-accounts?view=vs-2022)" in the {% data variables.product.prodname_vs %} documentation.
1. Try removing and re-adding your {% data variables.product.prodname_dotcom %} ID to {% data variables.product.prodname_vs %} and restarting {% data variables.product.prodname_vs %}.
1. If the above steps don't work, click the **Share feedback** button and select **Report a problem** to report the issue to the {% data variables.product.prodname_vs %} team.

    ![Screenshot of the share feedback button in {% data variables.product.prodname_vs %}.](/assets/images/help/copilot/vs-share-feedback-button.png)

{% endvisualstudio %}

## Error: "Oops, your response got filtered"

You may encounter this error unexpectedly while using {% data variables.product.prodname_copilot_chat %}. {% data variables.product.company_short %} is aware of this issue and working to fix it. You can report the error in this [{% data variables.product.prodname_github_community %} discussion](https://github.com/orgs/community/discussions/56134).

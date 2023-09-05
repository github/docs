---
title: Troubleshooting authentication issues with GitHub Copilot Chat
intro: Troubleshooting help for authentication issues with {% data variables.product.prodname_copilot_chat %}.
product: '{% data reusables.gated-features.copilot-chat %}'
defaultTool: vscode
topics:
  - Copilot
  - Troubleshooting
versions:
  feature: copilot
shortTitle: Authentication issues with Copilot Chat
---


{% vscode %}

## Troubleshooting authentication issues with {% data variables.product.prodname_copilot_chat %} in {% data variables.product.prodname_vscode %}

If you are experiencing authentication issues after installing the {% data variables.product.prodname_copilot_chat %} extension in {% data variables.product.prodname_vscode %}, you can try the following steps to resolve the issue.

1. In the bottom left corner of the {% data variables.product.prodname_vscode %} window, click the **Accounts** icon, hover over your {% data variables.product.prodname_dotcom %} username, and click the **Sign out** button.
1. To reload {% data variables.product.prodname_vscode %}, press <kbd>F1</kbd> to open the command palette, and select **Developer: Reload Window**. 
1. After {% data variables.product.prodname_vscode %} reloads, sign back in to your {% data variables.product.prodname_dotcom %} account.

{% endvscode %}



{% visualstudio %}

## Troubleshooting authentication issues with {% data variables.product.prodname_copilot_chat %} in {% data variables.product.prodname_vs %}

If you are experiencing authentication issues after installing the {% data variables.product.prodname_copilot_chat %} extension in {% data variables.product.prodname_vs %}, you can try the following steps to resolve the issue.

1. Check that the {% data variables.product.prodname_dotcom %} ID you are signed into {% data variables.product.prodname_vs %} with is the same as the one that you have been granted acess to the {% data variables.product.prodname_copilot_chat %} beta with.
1. Check whether your {% data variables.product.prodname_dotcom %} ID/credentials need refreshing in {% data variables.product.prodname_vs %}. For more information, see ["Work with {% data variables.product.prodname_dotcom %} accounts in {% data variables.product.prodname_vs %}](https://learn.microsoft.com/en-us/visualstudio/ide/work-with-github-accounts?view=vs-2022)" in the {% data variables.product.prodname_vs %} documentation.
1. Try removing and re-adding your {% data variables.product.prodname_dotcom %} ID to {% data variables.product.prodname_vs %} and restarting {% data variables.product.prodname_vs %}.
1. If the above steps don't work, click the **Share feedback** button and select ** Report a problem** to report the issue to the {% data variables.product.prodname_vs %} team.
    
    ![Screenshot of the share feedback button in {% data variables.product.prodname_vs %}.](/assets/images/help/copilot/vs-share-feedback-button.png)


{% endvisualstudio %}
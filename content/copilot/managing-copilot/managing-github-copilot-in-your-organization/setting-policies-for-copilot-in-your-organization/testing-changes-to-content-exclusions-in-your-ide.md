---
title: Testing changes to content exclusions in your IDE
intro: 'You can confirm your changes to content exclusions work as expected using your IDE.'
permissions: '{% data reusables.copilot.content-exclusion-permissions %}'
product: '{% data reusables.gated-features.copilot-business-and-enterprise %}'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: Test content exclusions
redirect_from:
  - /copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/testing-changes-to-content-exclusions-in-your-ide
---

{% data reusables.copilot.content-exclusions-availability-and-beta-note %}

{% vscode %}

## Propagating content exclusion changes to {% data variables.product.prodname_vscode %}

In {% data variables.product.prodname_vscode_shortname %}, you can wait up to 30 minutes to see the effect of a settings change, or you can manually reload content exclusion settings as follows:

1. Access the Command Palette. For example, by pressing <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).
1. Type: `reload`.
1. Select **Developer: Reload Window**.

## Testing changes to content exclusions in {% data variables.product.prodname_vscode %}

After content exclusion changes propagate to {% data variables.product.prodname_vscode_shortname %}, the {% data variables.product.prodname_copilot_short %} icon indicates when {% data variables.product.prodname_copilot_short %} has been disabled by a content exclusion.

1. Open a file that you expect to be affected by your content exclusions.

   If a {% data variables.product.prodname_copilot_short %} content exclusion applies to this file, the {% data variables.product.prodname_copilot_short %} icon in the status bar has a diagonal line through it.

1. Hover over the {% data variables.product.prodname_copilot_short %} icon. A popup message tells you whether an organization or the parent repository disabled {% data variables.product.prodname_copilot_short %} for this file.

   ![Screenshot of the {% data variables.product.prodname_copilot_short %} disabled popup in the {% data variables.product.prodname_vscode_shortname %} toolbar.](/assets/images/help/copilot/copilot-disabled-for-repo.png)

1. Optionally, you can also test content exclusions in {% data variables.product.prodname_copilot_chat_short %}. Open the {% data variables.product.prodname_copilot_chat_short %} window by clicking the {% data variables.product.prodname_copilot_chat_short %} icon in the activity bar.

   ![Screenshot of the {% data variables.product.prodname_copilot_chat_short %} icon in the Activity Bar.](/assets/images/help/copilot/vsc-copilot-chat-icon.png)

{% data reusables.copilot.test-content-exclusions-chat %}

{% endvscode %}

{% visualstudio %}

## Propagating content exclusion changes to {% data variables.product.prodname_vs %}

In {% data variables.product.prodname_vs %}, you can wait up to 30 minutes to see the effect of a settings change, or you can manually reload the content exclusion settings by closing and reopening the application.

## Testing changes to content exclusions in {% data variables.product.prodname_vs %}

In {% data variables.product.prodname_vs %}, the {% data variables.product.prodname_copilot_short %} icon indicates when {% data variables.product.prodname_copilot_short %} has been disabled by a content exclusion.

1. Open a file that you expect to be affected by your content exclusions.

   If a {% data variables.product.prodname_copilot_short %} content exclusion applies to this file, the {% data variables.product.prodname_copilot_short %} icon in the status bar has a diagonal line through it.

1. Hover over the {% data variables.product.prodname_copilot_short %} icon. A popup message tells you whether an organization or the parent repository disabled {% data variables.product.prodname_copilot_short %} for this file.

   ![Screenshot of the {% data variables.product.prodname_copilot_short %} disabled popup in the {% data variables.product.prodname_vscode_shortname %} toolbar.](/assets/images/help/copilot/copilot-disabled-for-repo.png)

{% endvisualstudio %}

{% jetbrains %}

## Propagating content exclusion changes to JetBrains IDEs

In supported JetBrains IDEs, you can wait up to 30 minutes to see the effect of a settings change, or you can manually reload the content exclusion settings by closing and reopening the application.

## Testing changes to content exclusions in JetBrains IDEs

In supported JetBrains IDEs, the {% data variables.product.prodname_copilot_short %} icon indicates when {% data variables.product.prodname_copilot_short %} has been disabled by a content exclusion.

1. Open a file that you expect to be affected by your content exclusions.

   If a {% data variables.product.prodname_copilot_short %} content exclusion applies to this file, the {% data variables.product.prodname_copilot_short %} icon in the status bar has a diagonal line through it.

1. Hover over the {% data variables.product.prodname_copilot_short %} icon. A popup message tells you whether an organization or the parent repository disabled {% data variables.product.prodname_copilot_short %} for this file.

   ![Screenshot of the {% data variables.product.prodname_copilot_short %} disabled popup in the {% data variables.product.prodname_vscode_shortname %} toolbar.](/assets/images/help/copilot/copilot-disabled-for-repo.png)

1. Optionally, you can also test content exclusions in {% data variables.product.prodname_copilot_chat_short %}. Open the {% data variables.product.prodname_copilot_chat_short %} window by clicking the **{% data variables.product.prodname_copilot_chat_short %}** icon at the right side of the JetBrains IDE window.

   ![Screenshot of the {% data variables.product.prodname_copilot_chat_short %} icon in the Activity Bar.](/assets/images/help/copilot/jetbrains-copilot-chat-icon.png)

{% data reusables.copilot.test-content-exclusions-chat %}

{% endjetbrains %}

{% vimneovim %}

## Propagating content exclusion changes to Vim/Neovim

If you are working in Vim/Neovim, content exclusions are automatically fetched from {% data variables.product.prodname_dotcom %} each time you open a file.

## Testing changes to content exclusions in Vim/Neovim

1. Open a file that you expect to be affected by your content exclusions.
1. Begin typing. If {% data variables.product.prodname_copilot %} no longer provides inline suggestions as you type, the file is excluded.

{% endvimneovim %}

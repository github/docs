---
title: Working with support for GitHub Codespaces
intro: 'Tips on getting the best help from support for {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Working with support
redirect_from:
  - /codespaces/troubleshooting/working-with-support-for-codespaces
---

Before support can help you with problems with codespaces, you need to know the permanent name of the codespace and its codespaces ID (identifier). In addition, support may ask you to share some logs with them. For more information, see "[AUTOTITLE](/codespaces/troubleshooting/github-codespaces-logs)" and "[AUTOTITLE](/support/learning-about-github-support/about-github-support)."

## Codespace names

Each codespace has two names: a display name, that you can change, and a unique, permanent name, that you cannot change. Unless you create a codespace with the {% data variables.product.prodname_cli %} and specify a display name of your choice, the display name is automatically generated when you create a codespace, consisting of two or three random words - for example, `literate space parakeet`. The permanent name is a combination of the initial display name, followed by some random characters - for example, `literate-space-parakeet-w5vg5ww5p793g7g9`. If you change the display name the permanent name remains unaffected. For more information, see "[AUTOTITLE](/codespaces/customizing-your-codespace/renaming-a-codespace)."

{% data reusables.codespaces.permanent-codespace-names %}

## Codespaces IDs

Every codespace also has an ID (identifier). This is not shown by default in {% data variables.product.prodname_vscode %} so you may need to update the settings for the {% data variables.product.prodname_github_codespaces %} extension before you can access the ID.

1. In {% data variables.product.prodname_vscode %}, browser or desktop, in the Activity Bar on the left, click **Remote Explorer** to show details for the codespace.
{% indented_data_reference reusables.codespaces.remote-explorer spaces=3 %}
1. If the side bar includes a "Codespace Performance" section, hover over the **Codespace ID** and click the clipboard icon to copy the ID.
1. If the information is not shown, click {% octicon "gear" aria-label="Manage" %}, in the bottom-left corner of the Activity Bar, and click **Settings**.
1. In the **Settings** tab, search for "performance" then, under "{% data variables.product.prodname_dotcom %} > {% data variables.product.prodname_codespaces %}: Show Performance Explorer", select the checkbox labeled "Display the Codespace Performance window in the Remote Explorer."

   ![Screenshot of "Show Performance Explorer" selected in {% data variables.product.prodname_vscode_shortname %}'s "Settings" tab and a codespace ID highlighted in the "Remote Explorer" side bar.](/assets/images/help/codespaces/find-codespace-id.png)

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

Each codespace has a unique name that is a combination of your {% data variables.product.company_short %} handle, two or three automatically generated words, and some random characters. For example: `octocat-literate-space-parakeet-mld5`. The two or three automatically generated words also form the initial display name of your codespace, in this case, `literate-space-parakeet`. You can change the display name for a codespace, but this will not affect the permanent name. For more information, see "[AUTOTITLE](/codespaces/customizing-your-codespace/renaming-a-codespace)."

To find the name of a codespace:

- Open the codespace in the browser. The subdomain of the URL is the name of the codespace. For example: `https://octocat-literate-space-parakeet-mld5.github.dev` is the URL for the `octocat-literate-space-parakeet-mld5` codespace.
- If you cannot open a codespace, you can access the name in {% data variables.product.product_name %} on https://github.com/codespaces. The name is shown in a pop-up when you hover over the display name of a codespace on https://github.com/codespaces.

  ![Screenshot of the mouse pointer positioned over a display name and the related codespace name shown at the bottom of the browser page.](/assets/images/help/codespaces/find-codespace-name-github.png)

The name the codespace is also included in many of the log files. For example, in the codespace logs as the value of `friendlyName`, in the {% data variables.product.prodname_github_codespaces %} extension log after `making GET request for`, and in the browser console log after `clientUrl`. For more information, see "[AUTOTITLE](/codespaces/troubleshooting/github-codespaces-logs)."

## Codespaces IDs

Every codespace also has an ID (identifier). This is not shown by default in {% data variables.product.prodname_vscode %} so you may need to update the settings for the {% data variables.product.prodname_github_codespaces %} extension before you can access the ID.

1. In {% data variables.product.prodname_vscode %}, browser or desktop, in the Activity Bar on the left, click **Remote Explorer** to show details for the codespace.
{% indented_data_reference reusables.codespaces.remote-explorer spaces=3 %}
1. If the side bar includes a "Codespace Performance" section, hover over the "Codespace ID" and click the clipboard icon to copy the ID.
1. If the information is not shown, click {% octicon "gear" aria-label="Manage" %}, in the bottom-left corner of the Activity Bar, to display the "Settings" tab.
1. Expand **Extensions** and click **{% data variables.product.prodname_github_codespaces %}** to display the settings for the extension. Then enable **Show Performance Explorer** to display the "Codespace Performance" section in the side bar.

   ![Screenshot of "Show Performance Explorer" selected in {% data variables.product.prodname_vscode_shortname %}'s "Settings" tab and a codespace ID highlighted in the "Remote Explorer" side bar.](/assets/images/help/codespaces/find-codespace-id.png)

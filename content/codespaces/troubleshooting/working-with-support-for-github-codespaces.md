---
title: Working with support for GitHub Codespaces
intro: 'Tips on getting the best help from support for {% data variables.product.prodname_github_codespaces %}.'
product: '{% data reusables.gated-features.codespaces %}'
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

Before support can help you with problems with codespaces, you need to know the name of the codespace and its codespaces ID (identifier). In addition, support may ask you to share some logs with them. For more information, see "[{% data variables.product.prodname_github_codespaces %} logs](/codespaces/troubleshooting/github-codespaces-logs)" and "[About GitHub Support](/github/working-with-github-support/about-github-support)."

### Codespace names

Each codespace has a unique name that is a combination of your {% data variables.product.company_short %} handle, the repository name, and some random characters. The additional characters allow you to have codespaces for different branches in the same repository. For example: `octocat-myrepo-gmc7`.

To find the name of a codespace:

- Open the codespace in the browser. The subdomain of the URL is the name of the codespace. For example: `https://octocat-myrepo-gmc7.github.dev` is the URL for the `octocat-myrepo-gmc7` codespace.
- If you cannot open a codespace, you can access the name in {% data variables.product.product_name %} on https://github.com/codespaces. The name is shown in a pop-up when you hover over the **Open in browser** option on https://github.com/codespaces. 
  ![Codespace name shown on hover over](/assets/images/help/codespaces/find-codespace-name-github.png)

The name the codespace is also included in many of the log files. For example, in the codespace logs as the value of `friendlyName`, in the {% data variables.product.prodname_github_codespaces %} extension log after `making GET request for`, and in the browser console log after `clientUrl`. For more information, see "[{% data variables.product.prodname_github_codespaces %} logs](/codespaces/troubleshooting/github-codespaces-logs)."

### Codespaces IDs

Every codespace also has an ID (identifier). This is not shown by default in {% data variables.product.prodname_vscode %} so you may need to update the settings for the {% data variables.product.prodname_github_codespaces %} extension before you can access the ID.

1. In {% data variables.product.prodname_vscode %}, browser or desktop, in the Activity Bar on the left, click **Remote Explorer** to show details for the codespace.
2. If the sidebar includes a "Codespace Performance" section, hover over the "Codespace ID" and click the clipboard icon to copy the ID.
3. If the information is not shown, click {% octicon "gear" aria-label="The gear icon" %}, in the bottom-left corner of the Activity Bar, to display the "Settings" tab.
4. Expand **Extensions** and click **{% data variables.product.prodname_github_codespaces %}** to display the settings for the extension. Then enable **Show Performance Explorer** to display the "Codespace Performance" section in the sidebar.
  ![Codespace ID and settings required to display performance information](/assets/images/help/codespaces/find-codespace-id.png)

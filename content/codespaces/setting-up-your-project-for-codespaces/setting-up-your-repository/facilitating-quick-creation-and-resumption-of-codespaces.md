---
title: Facilitating quick creation and resumption of codespaces
shortTitle: Facilitating codespace creation
intro: You can add a link to take people straight to a page for creating a codespace, with your choice of options preconfigured. Alternatively you can link to the "Resume codespace" page.
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
redirect_from:
  - /codespaces/setting-up-your-project-for-codespaces/adding-a-codespaces-badge
  - /codespaces/setting-up-your-project-for-codespaces/setting-up-your-repository/adding-a-codespaces-badge
---

## Overview

You can make it easy for people to work on your repository in a codespace by providing a link to the codespace creation page. One place you might want to do this is in the README file for your repository. For example, you can add the link to an "Open in {% data variables.product.prodname_github_codespaces %}" badge.

![Screenshot of an "Open in {% data variables.product.prodname_github_codespaces %}" badge on a README page.](/assets/images/help/codespaces/codespaces-badge-on-readme.png)

The link to the codespace creation page can include specific configuration options to help people create an appropriate codespace. People who use the link will be able to choose different options, if they want, before creating the codespace. For information about the available options, see "[AUTOTITLE](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)."

Alternatively, you can link to the "Resume codespace" page, which provides a quick way for people to open a codespace they were working on recently.

## Creating a link to the codespace creation page for your repository

You can use these URLs to link to the codespace creation page for your repository. Replace the text in uppercase letters.

- Create a codespace for the default branch of the repository:
  `https://codespaces.new/OWNER/REPO-NAME`
- Create a codespace for a specific branch of the repository:
  `https://codespaces.new/OWNER/REPO-NAME/tree/BRANCH-NAME`
- Create a codespace for the topic branch of a pull request:
  `https://codespaces.new/OWNER/REPO-NAME/pull/PR-SHA`

### Configuring more options

You can use the "Share a deep link" option to configure more options for the codespace and build a custom URL, then copy a Markdown or HTML snippet for an "Open in {% data variables.product.prodname_github_codespaces %}" badge.

{% data reusables.repositories.navigate-to-repo %}
1. If you want to create a link for a branch other than the repository's default branch, under the repository name, click the button labeled with the name of the current branch. In the dropdown menu, select the branch for which you want to create a link.

   ![Screenshot of the expanded branch dropdown menu, listing various branches. The dropdown menu, labeled with a branch icon and "trunk," is highlighted with a dark orange outline.](/assets/images/help/codespaces/branch-drop-down.png)

1. Click the **{% octicon "code" aria-hidden="true" %} Code** button, then click the **Codespaces** tab.
1. To open the "Share codespace configuration" window, at the top right of the **Codespaces** tab, select {% octicon "kebab-horizontal" aria-label="Codespace repository configuration" %}, then click **Share a deep link**.

   ![Screenshot of the options dropdown in the "{% data variables.product.prodname_codespaces %}" tab. The "Share a deep link" option is highlighted with an orange outline.](/assets/images/help/codespaces/share-deep-link.png)

1. Optionally, to take users to a page where they can quickly resume a recent codespace or create a new one, select **Quick start**. For more information, see "[Creating a link to resume a codespace](#creating-a-link-to-resume-a-codespace)."
1. Optionally, to specify a dev container configuration, select **Configuration file**, then use the dropdown menu to choose a configuration. If you don't specify a configuration, the default configuration for your repository is used. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)."
1. Under "Snippets," you can copy the URL you have built, or copy a Markdown or HTML snippet including an "Open in {% data variables.product.prodname_github_codespaces %}" badge. To copy the URL or snippet, select between the **URL**, **HTML**, and **Markdown** tabs, then click {% octicon "copy" aria-label="Copy text to the system clipboard" %}.

   ![Screenshot of the "Share codespace configuration" window. Next to the "new codespace" URL, an icon of two overlapping squares is outlined in orange.](/assets/images/help/codespaces/copy-codespace-url.png)

## Creating a link to resume a codespace

You can create a link to a page for resuming your most recent codespace that matches the repository, branch, and other options specified in the URL.

Add `?quickstart=1` to a `codespaces.new` URL, such as the URLs listed in the previous section of this article. This produces a URL that displays a "Resume codespace" page.

For example, the URL `https://codespaces.new/octo-org/octo-repo?quickstart=1` opens a page to allow you to resume your most recent codespace for the default branch of the `octo-org/octo-repo` repository.

![Screenshot of the "Resume codespace" page showing the "Resume this codespace" and "Create a new one" buttons.](/assets/images/help/codespaces/resume-codespace.png)

{% note %}

**Notes**:

- If the `codespaces.new` URL already contains a query string, add `&quickstart=1` at the end of the query string.
- This type of URL will always open a codespace in the {% data variables.product.prodname_vscode_shortname %} web client, even if this is not set as your default editor for {% data variables.product.prodname_github_codespaces %}.

{% endnote %}

If no matching codespaces are found, the page is titled "Create codespace" and a button is displayed for creating a new codespace with matching parameters.

This type of URL is useful, for instance, in a README for your repository as it gives people a way of either creating a codespace, or resuming their codespace, in just a couple of clicks.

## Creating an "Open in {% data variables.product.prodname_github_codespaces %}" badge

{% tip %}

**Tip:** You can use the "Share a deep link" option to create a Markdown or HTML snippet that includes an "Open in {% data variables.product.prodname_github_codespaces %}" badge with a custom URL. For more information, see "[Configuring more options](#configuring-more-options)."

{% endtip %}

1. Get the URL to the codespace creation page, or the "Resume codespace" page, as described in the previous sections.
1. Add the following Markdown to, for example, the `README.md` file of your repository:

   ```markdown copy
   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](URL)
   ```

   For example:

   ```markdown
   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/github/docs)
   ```

   The example Markdown is rendered like this:

   [![Open in GitHub Codespaces.](https://github.com/codespaces/badge.svg)](https://codespaces.new/github/docs)

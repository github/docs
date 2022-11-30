---
title: Adding an "Open in GitHub Codespaces" badge
shortTitle: Add a Codespaces badge
intro: You can add a badge to a Markdown file in your repository which people can click to create a codespace.
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
---

## Overview

Adding an "Open in {% data variables.product.prodname_github_codespaces %}" badge to a Markdown file gives people an easy way to create a codespace for your repository.

![Screenshot of a Codespaces badge on a README page](/assets/images/help/codespaces/codespaces-badge-on-readme.png)

When you create a badge you can choose specific configuration options for the codespace that the badge will create.

When people click the badge they'll be taken to the advanced options page for codespace creation, with the options you chose preselected. For more information about the advanced options page, see "[Creating a codespace for a repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)."

From the advanced options page, users can change the preselected settings if required, then click **Create codespace**.

## Creating an "Open in {% data variables.product.prodname_github_codespaces %}" badge

{% data reusables.repositories.navigate-to-repo %}
1. Under the repository name, use the "Branch" dropdown menu, and select the branch you want to create the badge for.

   ![Screenshot of the Branch dropdown menu](/assets/images/help/codespaces/branch-drop-down.png)

1. Click the **{% octicon "code" aria-label="The code icon" %} Code** button, then click the **Codespaces** tab.

   ![Screenshot of the New codespace button](/assets/images/help/codespaces/new-codespace-button.png)

1. Click the ellipsis (**...**) at the top right of the **Codespaces** tab, then click **New with options**.

   ![Screenshot of the "Configure and create codespace" option](/assets/images/help/codespaces/default-machine-type.png)

1. On the advanced options page for codespace creation, select the values you want to be preselected in each field.

   ![Screenshot of the advanced options page](/assets/images/help/codespaces/advanced-options.png)

1. Copy the URL from the browser's address bar.
1. Add the following Markdown to, for example, the `README.md` file of your repository:

   ```Markdown{:copy}
   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](COPIED-URL)
   ```

   For example:

   ```Markdown
   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=0000000&machine=premiumLinux&devcontainer_path=.devcontainer%2Fdevcontainer.json&location=WestUs2)
   ```

   In the above example, `0000000` will be the reference number of your repository. The other details in the URL are determined by the values you selected in the fields on the advanced options page.

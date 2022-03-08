---
title: The github.dev web-based editor
intro: 'Use the github.dev {% data variables.product.prodname_serverless %} from your repository or pull request to create and commit changes.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
shortTitle: Web-based editor
redirect_from:
  - /codespaces/developing-in-codespaces/web-based-editor
---

{% note %}

**Note:** The github.dev {% data variables.product.prodname_serverless %} is currently in beta preview. You can provide feedback [in our Discussions](https://github.co/browser-editor-feedback).

{% endnote %}

## 关于 {% data variables.product.prodname_serverless %}

The {% data variables.product.prodname_serverless %} introduces a lightweight editing experience that runs entirely in your browser. With the {% data variables.product.prodname_serverless %}, you can navigate files and source code repositories from {% data variables.product.prodname_dotcom %}, and make and commit code changes. You can open any repository, fork, or pull request in the editor.

The {% data variables.product.prodname_serverless %} is available to everyone for free on {% data variables.product.prodname_dotcom_the_website %}.

The {% data variables.product.prodname_serverless %} provides many of the benefits of {% data variables.product.prodname_vscode %}, such as search, syntax highlighting, and a source control view. You can also use Settings Sync to share your own {% data variables.product.prodname_vscode %} settings with the editor. For more information, see "[Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync)" in the {% data variables.product.prodname_vscode %} documentation.

The {% data variables.product.prodname_serverless %} runs entirely in your browser’s sandbox. The editor doesn’t clone the repository, but instead uses the [GitHub Repositories extension](https://code.visualstudio.com/docs/editor/github#_github-repositories-extension) to carry out most of the functionality that you will use. Your work is saved in the browser’s local storage until you commit it. You should commit your changes regularly to ensure that they're always accessible.

## Opening the {% data variables.product.prodname_serverless %}

You can open any {% data variables.product.prodname_dotcom %} repository in the {% data variables.product.prodname_serverless %} in either of the following ways:

- Press `.` while browsing any repository or pull request on {% data variables.product.prodname_dotcom %}.
- Change the URL from "github.com" to "github.dev".

## {% data variables.product.prodname_codespaces %} and the {% data variables.product.prodname_serverless %}

Both the {% data variables.product.prodname_serverless %} and {% data variables.product.prodname_codespaces %} allow you to edit your code straight from your repository. However, both have slightly different benefits, depending on your use case.

|                     | {% data variables.product.prodname_serverless %}                                                                                                                                                  | {% data variables.product.prodname_codespaces %}
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **费用**              | 免费.                                                                                                                                                                                               | Costs for compute and storage. For information on pricing, see "[Codespaces pricing](/en/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)."                                                                                                                                              |
| **可用性**             | Available to everyone on GitHub.com.                                                                                                                                                              | Available for organizations using GitHub Team or GitHub Enterprise Cloud.                                                                                                                                                                                                                                                               |
| **Start up**        | The {% data variables.product.prodname_serverless %} opens instantly with a key-press and you can start using it right away, without having to wait for additional configuration or installation. | When you create or resume a codespace, the codespace is assigned a VM and the container is configured based on the contents of a `devcontainer.json` file. This set up may take a few minutes to create the environment. For more information, see "[Creating a Codespace](/codespaces/developing-in-codespaces/creating-a-codespace)." |
| **Compute**         | There is no associated compute, so you won’t be able to build and run your code or use the integrated terminal.                                                                                   | With  {%  data   variables.product.prodname_codespaces %}, you get the power of dedicated VM on which you can run and debug your application.                                                                                                                                                                                           |
| **Terminal access** | 无.                                                                                                                                                                                                | {% data variables.product.prodname_codespaces %} provides a common set of tools by default, meaning that you can use the Terminal exactly as you would in your local environment.                                                                                                                                                       |
| **Extensions**      | Only a subset of extensions that can run in the web will appear in the Extensions View and can be installed. For more information, see "[Using extensions](#using-extensions)."                   | With Codespaces, you can use most extensions from the Visual Studio Code Marketplace.                                                                                                                                                                                                                                                   |

### Continue working on {%  data   variables.product.prodname_codespaces %}

You can start your workflow in the {% data variables.product.prodname_serverless %} and continue working on a codespace, provided you have [access to {% data variables.product.prodname_codespaces %}](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces). If you try to access the Run and Debug View or the Terminal, you'll be notified that they are not available in the {% data variables.product.prodname_serverless %}.

To continue your work in a codespace, click **Continue Working on…** and select **Create New Codespace** to create a codespace on your current branch. Before you choose this option, you must commit any changes.

![A screenshot that shows the "Continue Working on" button in the UI](/assets/images/help/codespaces/codespaces-continue-working.png)

## Using source control

When you use the {% data variables.product.prodname_serverless %}, all actions are managed through the Source Control View, which is located in the Activity Bar on the left hand side. For more information on the Source Control View, see "[Version Control](https://code.visualstudio.com/docs/editor/versioncontrol)" in the {% data variables.product.prodname_vscode %} documentation.

Because the web-based editor uses the GitHub Repositories extension to power its functionality, you can switch branches without needing to stash changes. For more information, see "[GitHub Repositories](https://code.visualstudio.com/docs/editor/github#_github-repositories-extension)" in the {% data variables.product.prodname_vscode %} documentation.

### 创建新分支

{% data reusables.codespaces.create-or-switch-branch %}
  Any uncommitted changes you have made in your old branch will be available on your new branch.

### Commit your changes

{% data reusables.codespaces.source-control-commit-changes %}
5. Once you have committed your changes, they will automatically be pushed to your branch on {% data variables.product.prodname_dotcom %}.
### 创建拉取请求

{% data reusables.codespaces.source-control-pull-request %}

### Working with an existing pull request

You can use the {% data variables.product.prodname_serverless %} to work with an existing pull request.

1. Browse to the pull request you'd like to open in the {% data variables.product.prodname_serverless %}.
2. Press `.` to open the pull request in the {% data variables.product.prodname_serverless %}.
3. Once you have made any changes, commit them using the steps in [Commit your changes](#commit-your-changes). Your changes will be committed directly to the branch, it's not necessary to push the changes.

## 使用扩展

The {% data variables.product.prodname_serverless %} supports {% data variables.product.prodname_vscode %} extensions that have been specifically created or updated to run in the web. These extensions are known as "web extensions". To learn how you can create a web extension or update your existing extension to work for the web, see "[Web extensions](https://code.visualstudio.com/api/extension-guides/web-extensions)" in the {% data variables.product.prodname_vscode %} documentation.

Extensions that can run in the {% data variables.product.prodname_serverless %} will appear in the Extensions View and can be installed. If you use Settings Sync, any compatible extensions are also installed automatically. For information, see "[Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync)" in the {% data variables.product.prodname_vscode %} documentation.


## 疑难解答

If you have issues opening the {% data variables.product.prodname_serverless %}, try the following:

- Make sure you are signed in to {% data variables.product.prodname_dotcom %}.
- Disable any ad blockers.
- Use a non-incognito window in your browser to open the {% data variables.product.prodname_serverless %}.

### Known limitations

- The {% data variables.product.prodname_serverless %} is currently supported in Chrome (and various other Chromium-based browsers), Edge, Firefox, and Safari. We recommend that you use the latest versions of these browsers.
- Some keybindings may not work, depending on the browser you are using. These keybinding limitations are documented in the "[Known limitations and adaptations](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations)" section of the {% data variables.product.prodname_vscode %} documentation.
- `.` may not work to open the {% data variables.product.prodname_serverless %} according to your local keyboard layout. In that case, you can open any {% data variables.product.prodname_dotcom %} repository in the {% data variables.product.prodname_serverless %} by changing the URL from `github.com` to `github.dev`.

---
title: The github.dev web-based editor
shortTitle: github.dev editor
intro: 'You can use the {% data variables.codespaces.serverless %} web-based editor to edit files and commit your changes.'
versions:
  feature: githubdev-editor
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/web-based-editor
---

{% note %}

**Note:** The {% data variables.codespaces.serverless %} editor is currently in beta preview. You can provide feedback [in our Discussions](https://github.com/community/community/discussions/categories/codespaces).

{% endnote %}

## About the {% data variables.codespaces.serverless %} editor

The {% data variables.codespaces.serverless %} editor introduces a lightweight editing experience that runs entirely in your browser. With the {% data variables.codespaces.serverless %} editor, you can navigate files and source code repositories from {% data variables.product.prodname_dotcom %}, and make and commit code changes. You can open any repository, fork, or pull request in the editor.

The {% data variables.codespaces.serverless %} editor is available to everyone for free on {% data variables.product.prodname_dotcom_the_website %}.

The {% data variables.codespaces.serverless %} editor provides many of the benefits of {% data variables.product.prodname_vscode %}, such as search, syntax highlighting, and a source control view. You can also use Settings Sync to share your own {% data variables.product.prodname_vscode_shortname %} settings with the editor. For more information, see "[Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync)" in the {% data variables.product.prodname_vscode_shortname %} documentation.

The {% data variables.codespaces.serverless %} editor runs entirely in your browser’s sandbox. The editor doesn’t clone the repository, but instead uses the [GitHub Repositories extension](https://code.visualstudio.com/docs/editor/github#_github-repositories-extension) to carry out most of the functionality that you will use. Your work is saved in the browser’s local storage until you commit it. You should commit your changes regularly to ensure that they're always accessible.

You must be signed in to {% data variables.product.prodname_dotcom_the_website %} to use the {% data variables.codespaces.serverless %} editor.

## Opening the {% data variables.codespaces.serverless %} editor

You can open any {% data variables.product.prodname_dotcom %} repository in {% data variables.codespaces.serverless %} in either of the following ways:

* To open the repository in the same browser tab, press <kbd>.</kbd> while browsing any repository or pull request on {% data variables.product.prodname_dotcom %}.

  To open the repository in a new browser tab, press <kbd>></kbd>.

* Change the URL from "github.com" to "github.dev".
* When viewing a file, select the {% octicon "triangle-down" aria-label="More edit options" %} dropdown menu and click **github.dev**.

  ![Screenshot of the dropdown menu for the edit icon. The option "github.dev" is highlighted with a dark orange outline.](/assets/images/help/codespaces/github-dev-dropdown-option.png)

## {% data variables.product.prodname_codespaces %} and {% data variables.codespaces.serverless %}

Both {% data variables.codespaces.serverless %} and {% data variables.product.prodname_github_codespaces %} allow you to edit your code straight from your repository. However, both have slightly different benefits, depending on your use case.

{% rowheaders %}

|| {% data variables.codespaces.serverless %} | {% data variables.product.prodname_github_codespaces %}|
|-|----------------|---------|
| **Cost** | Free.      | Free monthly quota of usage for personal accounts. For information on pricing, see "[AUTOTITLE](/free-pro-team@latest/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#about-github-codespaces-pricing)."|
| **Availability** | Available to everyone on GitHub.com. | Available to everyone on GitHub.com. |
| **Start up** | {% data variables.codespaces.serverless %} opens instantly with a key-press and you can start using it right away, without having to wait for additional configuration or installation. | When you create or resume a codespace, the codespace is assigned a VM and the container is configured based on the contents of a `devcontainer.json` file. This set up may take a few minutes to create the environment. For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository)." |
| **Compute**  | There is no associated compute, so you won’t be able to build and run your code or use the integrated terminal. | With  {%  data variables.product.prodname_github_codespaces %}, you get the power of a dedicated VM on which you can run and debug your application.|
| **Terminal access** | None. | {% data variables.product.prodname_github_codespaces %} provides a common set of tools by default, meaning that you can use the Terminal exactly as you would in your local environment.|
| **Extensions**  | Only a subset of extensions that can run in the web will appear in the Extensions View and can be installed. For more information, see "[Using extensions](#using-extensions)."| With {% data variables.product.prodname_github_codespaces %}, you can use most extensions from the {% data variables.product.prodname_vscode_marketplace %}.|

{% endrowheaders %}

### Continue working on {% data variables.product.prodname_codespaces %}

You can start your workflow in {% data variables.codespaces.serverless %} and continue working on a codespace. If you try to access the Run and Debug View or the Terminal, you'll be notified that they are not available in {% data variables.codespaces.serverless %}.

To continue your work in a codespace, click **Continue Working on…** and select **Create New Codespace** to create a codespace on your current branch. Before you choose this option, you must commit any changes.

<img src="/assets/images/help/codespaces/codespaces-continue-working.png" width="400rem" alt='Screenshot of the "Run and Debug" side bar with a message saying that this feature is not available, and a "Continue Working On" button.' />

## Using source control

When you use {% data variables.codespaces.serverless %}, all actions are managed through the "Source Control" view, which is located in the Activity Bar on the left hand side. For more information on the "Source Control" view, see "[Version Control](https://code.visualstudio.com/docs/editor/versioncontrol)" in the {% data variables.product.prodname_vscode_shortname %} documentation.

Because {% data variables.codespaces.serverless %} uses the GitHub Repositories extension to power its functionality, you can switch branches without needing to stash changes. For more information, see "[GitHub Repositories](https://code.visualstudio.com/docs/editor/github#_github-repositories-extension)" in the {% data variables.product.prodname_vscode_shortname %} documentation.

### Create a new branch

{% data reusables.codespaces.create-or-switch-branch %}
  Any uncommitted changes you have made in your old branch will be available on your new branch.

### Commit your changes

1. In the Activity Bar, click the **Source Control** view.

   ![Screenshot of the {% data variables.product.prodname_vscode_shortname %} Activity Bar with the source control button, labeled with a branch icon, highlighted with an orange outline.](/assets/images/help/codespaces/githubdotdev-source-control-activity-bar-button.png)

1. To stage your changes, click  {% octicon "plus" aria-label="Stage changes" %} next to the file you've changed, or next to **Changes** if you've changed multiple files and you want to stage them all.

   ![Screenshot of the "Source control" side bar with the staging button (a plus sign), to the right of "Changes," highlighted with a dark orange outline.](/assets/images/help/codespaces/githubdotdev-codespaces-commit-stage.png)

1. In the text box, type a commit message describing the change you've made.

   ![Screenshot of the "Source control" side bar with a commit message entered into the text box above the "Commit" button.](/assets/images/help/codespaces/githubdotdev-codespaces-commit-message.png)

1. Click **Commit & Push**.

   Your changes are automatically be pushed to your branch on {% data variables.product.prodname_dotcom %}.

### Create a pull request

{% data reusables.codespaces.source-control-pull-request %}

### Working with an existing pull request

You can use {% data variables.codespaces.serverless %} to work with an existing pull request.

1. Browse to the pull request you'd like to open in {% data variables.codespaces.serverless %}.
1. Press `.` to open the pull request in {% data variables.codespaces.serverless %}.
1. Once you have made any changes, commit them using the steps in [Commit your changes](#commit-your-changes). Your changes will be committed directly to the branch, it's not necessary to push the changes.

## Using extensions

The {% data variables.codespaces.serverless %} editor supports {% data variables.product.prodname_vscode_shortname %} extensions that have been specifically created or updated to run in the web. These extensions are known as "web extensions". To learn how you can create a web extension or update your existing extension to work for the web, see "[Web extensions](https://code.visualstudio.com/api/extension-guides/web-extensions)" in the {% data variables.product.prodname_vscode_shortname %} documentation.

Extensions that can run in {% data variables.codespaces.serverless %} will appear in the Extensions View and can be installed. If you use Settings Sync, any compatible extensions are also installed automatically. For information, see "[Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync)" in the {% data variables.product.prodname_vscode_shortname %} documentation.

## Using {% data variables.codespaces.serverless %} behind a firewall

If you are working behind a firewall you will need to add the following URLs to your firewall's allow list.

| URL | Use |
| --- | --- |
| `https://*.vscode-cdn.net` | {% data variables.codespaces.serverless %} runs entirely in the browser. To do so it needs to download {% data variables.product.prodname_vscode_shortname %} assets from endpoints at this URL. |
| `https://update.code.visualstudio.com` | {% data variables.codespaces.serverless %} runs entirely in the browser. To do so it needs to download {% data variables.product.prodname_vscode_shortname %} assets from endpoints at this URL. |
| `https://api.github.com` | Used to retrieve source files from {% data variables.product.prodname_dotcom %} |
| `https://vscode-sync-insiders.trafficmanager.net` | _Optional._ To allow settings to be synchronized via Settings Sync. |

Every extension installed in {% data variables.codespaces.serverless %} is run under an independent web worker. This adds a layer of security between multiple extensions running in the same browser. As a result, request URLs coming from extensions are similar to this: `https://v--151hfiju3s93ktt2rqh65902gukb27osot905m4g52k40kaea3h6.vscode-cdn.net`.

Data is retrieved from the repository at runtime using the [GitHub Repositories](https://marketplace.visualstudio.com/items?itemName=GitHub.remotehub) extension. This data is not stored on the local computer between {% data variables.codespaces.serverless %} sessions, with the exception of the browser storage of unsaved files and currently displayed files (to allow for page reloads). The only non-repository data that's stored locally between sessions are some user settings and the credentials sent by {% data variables.product.prodname_dotcom %}'s authentication flow.

## Troubleshooting

If you have issues opening {% data variables.codespaces.serverless %}, try the following:

* Make sure you are signed in to {% data variables.product.prodname_dotcom %}.
* Disable any ad blockers.
* Use a non-incognito window in your browser to open {% data variables.codespaces.serverless %}.

### Known limitations

* The {% data variables.codespaces.serverless %} editor is currently supported in Chrome (and various other Chromium-based browsers), Edge, Firefox, and Safari. We recommend that you use the latest versions of these browsers.
* Some keybindings may not work, depending on the browser you are using. These keybinding limitations are documented in the "[Known limitations and adaptations](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations)" section of the {% data variables.product.prodname_vscode_shortname %} documentation.
* `.` may not work to open {% data variables.codespaces.serverless %} according to your local keyboard layout. In that case, you can open any {% data variables.product.prodname_dotcom %} repository in {% data variables.codespaces.serverless %} by changing the URL from `github.com` to `github.dev`.
* When intensively writing documentation or code in the web editor, you might encounter issues with pushing some commits. To resolve this, wait a few minutes for the API rate limit to reset.

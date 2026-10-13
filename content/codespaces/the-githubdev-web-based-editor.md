---
title: Using VS Code for the Web from GitHub
shortTitle: '{% data variables.product.prodname_vscode_web %}'
allowTitleToDifferFromFilename: true
intro: You can open a repository or pull request in {% data variables.product.prodname_vscode_web %} directly from {% data variables.product.github %} to browse code, edit files, and commit your changes.
versions:
  feature: githubdev-editor
redirect_from:
  - /codespaces/developing-in-codespaces/web-based-editor
contentType: how-tos
category:
  - Get started
---

>[!NOTE] Opening a repository at `{% data variables.codespaces.serverless %}` opens it in {% data variables.product.prodname_vscode_web %}, the browser-based version of {% data variables.product.prodname_vscode_shortname %}. For more information, see [{% data variables.product.prodname_vscode_web %}](https://code.visualstudio.com/docs/remote/vscode-web) in the {% data variables.product.prodname_vscode_shortname %} documentation.{% ifversion ghec %} {% data variables.product.prodname_vscode_web %} is not available on subdomains of {% data variables.enterprise.data_residency_site %}, such as `octocorp.ghe.com`.{% endif %}

## About {% data variables.product.prodname_vscode_web %}

{% data variables.product.prodname_vscode_web %} is a lightweight editing experience that runs entirely in your browser. With {% data variables.product.prodname_vscode_web %}, you can navigate files and source code repositories from {% data variables.product.prodname_dotcom %}, and make and commit code changes. You can open any repository, fork, or pull request in the editor.

{% data variables.product.prodname_vscode_web %} is available to everyone for free on {% data variables.product.prodname_dotcom_the_website %}.

{% data variables.product.prodname_vscode_web %} provides many of the benefits of {% data variables.product.prodname_vscode %}, such as search, syntax highlighting, and a source control view. You can also use Settings Sync to share your own {% data variables.product.prodname_vscode_shortname %} settings with the editor. See [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync) in the {% data variables.product.prodname_vscode_shortname %} documentation.

{% data variables.product.prodname_vscode_web %} runs entirely in your browser’s sandbox. The editor doesn’t clone the repository, but instead uses the [GitHub Repositories extension](https://code.visualstudio.com/docs/editor/github#_github-repositories-extension) to carry out most of the functionality that you will use. Your work is saved in the browser’s local storage until you commit it. You should commit your changes regularly to ensure that they're always accessible.

You must be signed in to {% data variables.product.github %} to use {% data variables.product.prodname_vscode_web %}.

## Opening {% data variables.product.prodname_vscode_web %} from {% data variables.product.github %}

You can open any {% data variables.product.prodname_dotcom %} repository in {% data variables.product.prodname_vscode_web %} in any of the following ways:

* To open the repository in the same browser tab, press <kbd>.</kbd> while browsing any repository or pull request on {% data variables.product.prodname_dotcom %}.

  To open the repository in a new browser tab, press <kbd>></kbd>.

* Change the URL from "github.com" to "github.dev".
* When viewing a file, select the {% octicon "triangle-down" aria-label="More edit options" %} dropdown menu and click **github.dev**.

  ![Screenshot of the dropdown menu for the edit icon. The option "github.dev" is highlighted with a dark orange outline.](/assets/images/help/codespaces/github-dev-dropdown-option.png)

## {% data variables.product.prodname_codespaces %} and {% data variables.product.prodname_vscode_web %}

Both {% data variables.product.prodname_vscode_web %} and {% data variables.product.prodname_github_codespaces %} allow you to edit your code straight from your repository. However, both have slightly different benefits, depending on your use case.

{% rowheaders %}

|| {% data variables.product.prodname_vscode_web %} | {% data variables.product.prodname_github_codespaces %}|
|-|----------------|---------|
| **Cost** | Free.      | Free monthly quota of usage for personal accounts, see [AUTOTITLE](/billing/concepts/product-billing/github-codespaces#free-and-billed-use-by-personal-accounts).|
| **Availability** | Available to everyone on {% data variables.product.prodname_dotcom_the_website %}. | Available to everyone on {% data variables.product.prodname_dotcom_the_website %}. |
| **Start up** | {% data variables.product.prodname_vscode_web %} opens instantly with a key press and you can start using it right away, without having to wait for additional configuration or installation. | When you create or resume a codespace, the codespace is assigned a VM and the container is configured based on the contents of a `devcontainer.json` file. This set up may take a few minutes to create the environment. See [AUTOTITLE](/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository). |
| **Compute**  | There is no associated compute, so you won’t be able to build and run your code or use an integrated terminal. | With {% data variables.product.prodname_github_codespaces %}, you get the power of a dedicated VM on which you can run and debug your application, and you can use the terminal exactly as you would in your local environment.|
| **Extensions**  | Only a subset of extensions that can run in the web will appear in the Extensions View and can be installed. See [Using extensions](#using-extensions).| With {% data variables.product.prodname_github_codespaces %}, you can use most extensions from the {% data variables.product.prodname_vscode_marketplace %}.|

{% endrowheaders %}

## Using source control

When you use {% data variables.product.prodname_vscode_web %}, all actions are managed through the "Source Control" view, which is located in the Activity Bar on the left hand side. For more information on the "Source Control" view, see [Version Control](https://code.visualstudio.com/docs/editor/versioncontrol) in the {% data variables.product.prodname_vscode_shortname %} documentation.

Because {% data variables.product.prodname_vscode_web %} uses the GitHub Repositories extension to power its functionality, you can switch branches without needing to stash changes. See [GitHub Repositories](https://code.visualstudio.com/docs/editor/github#_github-repositories-extension) in the {% data variables.product.prodname_vscode_shortname %} documentation.

### Create a new branch

{% data reusables.codespaces.create-or-switch-branch %}
  Any uncommitted changes you have made in your old branch will be available on your new branch.

### Commit your changes

1. In the Activity Bar, click the **Source Control** view.

   ![Screenshot of the {% data variables.product.prodname_vscode_shortname %} Activity Bar with the source control button, labeled with a branch icon, highlighted with an orange outline.](/assets/images/help/codespaces/githubdotdev-source-control-activity-bar-button.png)

1. To stage your changes, click {% octicon "plus" aria-label="Stage changes" %} next to the file you've changed, or next to **Changes** if you've changed multiple files and you want to stage them all.

   ![Screenshot of the "Source control" side bar with the staging button (a plus sign), to the right of "Changes," highlighted with a dark orange outline.](/assets/images/help/codespaces/githubdotdev-codespaces-commit-stage.png)

1. In the text box, type a commit message describing the change you've made.

   ![Screenshot of the "Source control" side bar with a commit message entered into the text box above the "Commit" button.](/assets/images/help/codespaces/githubdotdev-codespaces-commit-message.png)

1. Click **Commit & Push**.

   Your changes are automatically be pushed to your branch on {% data variables.product.prodname_dotcom %}.

### Create a pull request

{% data reusables.codespaces.source-control-pull-request %}

### Working with an existing pull request

You can use {% data variables.product.prodname_vscode_web %} to work with an existing pull request.

1. Browse to the pull request you'd like to open in {% data variables.product.prodname_vscode_web %}.
1. Press `.` to open the pull request in {% data variables.product.prodname_vscode_web %}.
1. Once you have made any changes, commit them using the steps in [Commit your changes](#commit-your-changes). Your changes will be committed directly to the branch, it's not necessary to push the changes.

## Using extensions

{% data variables.product.prodname_vscode_web %} supports {% data variables.product.prodname_vscode_shortname %} extensions that have been specifically created or updated to run in the web. These extensions are known as "web extensions". To learn how you can create a web extension or update your existing extension to work for the web, see [Web extensions](https://code.visualstudio.com/api/extension-guides/web-extensions) in the {% data variables.product.prodname_vscode_shortname %} documentation.

Extensions that can run in {% data variables.product.prodname_vscode_web %} will appear in the Extensions View and can be installed. If you use Settings Sync, any compatible extensions are also installed automatically. For information, see [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync) in the {% data variables.product.prodname_vscode_shortname %} documentation.

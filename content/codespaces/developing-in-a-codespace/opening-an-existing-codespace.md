---
title: Opening an existing codespace
intro: You can reopen a codespace that you have closed or stopped and return to your work.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Open an existing codespace
redirect_from:
  - /codespaces/developing-in-codespaces/opening-an-existing-codespace
---

{% jetbrains_beta %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains_beta %}

You can reopen any of your active or stopped codespaces on {% data variables.product.prodname_dotcom_the_website %}, in a JetBrains IDE, in {% data variables.product.prodname_vscode %}, or by using {% data variables.product.prodname_cli %}. You can't reopen a codespace that has been deleted. For more information, see "[AUTOTITLE](/codespaces/getting-started/understanding-the-codespace-lifecycle)."

You can view all your codespaces on the "Your codespaces" page at [github.com/codespaces](https://github.com/codespaces). From this page, you can:

* Open, stop, or delete your codespaces.
* See who owns (and may be billed for) your codespaces: your personal account, or organizations you belong to. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)."
* See the machine type, size, and status of your codespaces.
* Create a new codespace, either by choosing one of {% data variables.product.company_short %}'s templates or by clicking **New codespace**. For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/creating-a-codespace-from-a-template)" and "[AUTOTITLE](/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository)."
* Prevent automatic deletion of a codespace. For more information, see "[AUTOTITLE](/codespaces/setting-your-user-preferences/configuring-automatic-deletion-of-your-codespaces?tool=webui#avoiding-automatic-deletion-of-codespaces)."

{% webui %}

## Resuming a codespace from a repository page

You can quickly resume a codespace when you're viewing a repository on {% data variables.product.prodname_dotcom_the_website %}.

1. With the {% octicon "code" aria-hidden="true" %} **Code** tab of your repository displayed on {% data variables.product.prodname_dotcom_the_website %}, press <kbd>,</kbd> (the comma key).

   The "Resume codespace" page is displayed. This allows you to resume your most recently used codespace for the currently selected branch of the repository or, if you were viewing a pull request, for the topic branch of the pull request.

   ![Screenshot of the "Resume codespace" page showing the "Resume this codespace" and "Create a new one" buttons.](/assets/images/help/codespaces/resume-codespace.png)

1. Click **Resume this codespace**.

   Alternatively, if you want to create a new codespace for this branch of the repository, click **Create a new one**.

   {% note %}

   **Note**: If you don't have an existing codespace for this branch, the page is titled "Create codespace" and a button labeled **Create a new codespace** is displayed.

   {% endnote %}

You can bookmark the address of this page if you want to get back to it quickly to resume your codespace. Alternatively you can use the address in a link to provide other people with a quick way of creating and resuming their own codespaces for this repository.

## Opening an existing codespace from the "Your codespaces" page

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. To open a codespace in your default editor, click the name of the codespace. {% data reusables.codespaces.about-changing-default-editor %} For more information, see "[AUTOTITLE](/codespaces/setting-your-user-preferences/setting-your-default-editor-for-github-codespaces)."

   To open the codespace in an editor other than your default:

   1. Click the ellipsis (**...**) to the right of the codespace you want to open.
   1. Click **Open in**.
   1. Click **Open in APPLICATION**.

   ![Screenshot of the "Open in" dialog, with "Open in {% data variables.product.prodname_vscode %}" highlighted.](/assets/images/help/codespaces/open-codespace-in-another-editor.png)

   You can open the codespace in:
   * Your browser
   * {% data variables.product.prodname_vscode %}
   * JetBrains Gateway
   * JupyterLab

   {% data reusables.codespaces.application-installed-locally %}

   If you choose **JupyterLab**, the JupyterLab application must be installed in the codespace. {% data reusables.codespaces.jupyterlab-in-default-image %}

{% data reusables.codespaces.linking-to-an-existing-codespace %}

{% endwebui %}

{% vscode %}

## Reopening an existing codespace

{% note %}

**Note:** {% data reusables.codespaces.using-codespaces-in-vscode %} For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/using-github-codespaces-in-visual-studio-code)."

{% endnote %}

1. In the {% data variables.product.prodname_vscode_shortname %} desktop application, open the Command Palette with <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).
1. Type "Codespaces" and select one of the following commands.
   * To open a codespace in a new window of {% data variables.product.prodname_vscode_shortname %}, select **Codespaces: Open Codespace in New Window**
   * To open a codespace in the web editor, select **Codespaces: Open in Browser**
1. Click the codespace that you want to open.

   ![Screenshot of the {% data variables.product.prodname_vscode_shortname %} Command Palette showing a list of codespaces available to connect to.](/assets/images/help/codespaces/open-codespace-from-vscode.png)

You can also access the commands listed above by navigating to the Remote Explorer view in {% data variables.product.prodname_vscode_shortname %} and right-clicking the codespace that you want to open.

![Screenshot of a codespace selected in the Remote Explorer, with "Open in Browser" highlighted in the right-click menu.](/assets/images/help/codespaces/open-codespace-remote-explorer.png)

{% data reusables.codespaces.remote-explorer %}

{% data reusables.codespaces.linking-to-an-existing-codespace %}

{% endvscode %}

{% cli %}

## Reopening an existing codespace

{% data reusables.codespaces.using-github-cli %}

1. In a terminal, enter one of the following {% data variables.product.prodname_cli %} commands.
   * To open a codespace in {% data variables.product.prodname_vscode_shortname %}, enter:

     ```shell copy
     gh codespace code
     ```

     {% note %}

     **Note**: You must have {% data variables.product.prodname_vscode_shortname %} installed on your local machine. For more information, see "[Setting up {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/docs/setup/setup-overview)" in the {% data variables.product.prodname_vscode_shortname %} documentation.

     {% endnote %}

   * To open a codespace in the browser, enter:

     ```shell copy
     gh codespace code --web
     ```

   * To open a codespace in JupyterLab, enter:

     ```shell copy
     gh codespace jupyter
     ```

     {% note %}

     **Note**: {% data reusables.codespaces.jupyterlab-installed-in-codespace %}

     {% endnote %}

   * To access a codespace from the command line, over SSH, enter:

     ```shell copy
     gh codespace ssh
     ```

1. Using the arrow keys, navigate to the codespace that you want to open.
1. To open the codespace, press <kbd>Enter</kbd>.

For more information, see [`gh codespace code`](https://cli.github.com/manual/gh_codespace_code) in the {% data variables.product.prodname_cli %} manual.

{% endcli %}

{% jetbrains_beta %}

## Reopening an existing codespace

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

{% endjetbrains_beta %}

## Further reading

* "[AUTOTITLE](/rest/codespaces/organizations)"

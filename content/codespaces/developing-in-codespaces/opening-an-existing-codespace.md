---
title: Opening an existing codespace
intro: 'You can reopen a codespace that you have closed or stopped and return to your work.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Open an existing codespace
---

{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

You can reopen any of your active or stopped codespaces on {% data variables.product.prodname_dotcom_the_website %}, in a JetBrains IDE, in {% data variables.product.prodname_vscode %}, or by using {% data variables.product.prodname_cli %}. You can't reopen a codespace that has been deleted. For more information, see "[The codespace lifecycle](/codespaces/developing-in-codespaces/the-codespace-lifecycle)."

You can view all your codespaces on the "Your codespaces" page at [github.com/codespaces](https://github.com/codespaces). From this page, you can:

- Open, stop, or delete your codespaces.
- See who owns (and may be billed for) your codespaces: your personal account, or organizations you belong to. For more information, see "[About billing for {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)."
- Create a new codespace, either by choosing one of {% data variables.product.company_short %}'s templates or by clicking **New codespace**. For more information, see "[Creating a codespace from a template](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)" and "[Creating a codespace for a repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)."

## Opening an existing codespace

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. To open a codespace in your default editor, click the name of the codespace. {% data reusables.codespaces.about-changing-default-editor %} For more information, see "[Setting your default editor for {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)."
   
   To open the codespace in an editor other than your default:
   
   1. Click the ellipsis (**...**) to the right of the codespace you want to open.
   1. Click **Open in**.
   1. Click **Open in APPLICATION**.

   ![Screenshot of the "Open in" dialog box, with "Open in Visual Studio Code" highlighted](/assets/images/help/codespaces/open-codespace-in-another-editor.png)

   You can open the codespace in:
   * Your browser
   * {% data variables.product.prodname_vscode %}
   * JetBrains Gateway
   * JupyterLab

   {% data reusables.codespaces.application-installed-locally %}

   If you choose **JupyterLab**, the JupyterLab application must be installed in the codespace. {% data reusables.codespaces.jupyterlab-in-default-image %}

{% endwebui %}

{% vscode %}

{% note %}

**Note:** {% data reusables.codespaces.using-codespaces-in-vscode %} For more information, see "[Using {% data variables.product.prodname_github_codespaces %} in {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)."

{% endnote %}

1. In the {% data variables.product.prodname_vscode_shortname %} desktop application, open the Command Palette with <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).
1. Type "Codespaces" and select one of the following commands.
   - To open a codespace in a new window of {% data variables.product.prodname_vscode_shortname %}, select **Codespaces: Open Codespace in New Window**
   - To open a codespace in the web editor, select **Codespaces: Open in Browser**
1. Click the codespace that you want to open.
   
   ![Screenshot of a list of codespaces in Visual Studio Code](/assets/images/help/codespaces/open-codespace-from-vscode.png)

You can also access the commands listed above by navigating to the Remote Explorer view in {% data variables.product.prodname_vscode_shortname %} and right-clicking the codespace that you want to open.

![Screenshot of a codespace selected in the Remote Explorer, with "Open in Browser" highlighted](/assets/images/help/codespaces/open-codespace-remote-explorer.png)

{% data reusables.codespaces.remote-explorer %}
{% endvscode %}

{% cli %}

1. In a terminal, enter one of the following {% data variables.product.prodname_cli %} commands.
   - To open a codespace in {% data variables.product.prodname_vscode_shortname %}, enter:

     ```shell{:copy}
     gh codespace code
     ```
     
     {% note %}

     **Note**: You must have {% data variables.product.prodname_vscode_shortname %} installed on your local machine. For more information, see "[Setting up Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview)" in the {% data variables.product.prodname_vscode_shortname %} documentation.

     {% endnote %}
     
   - To open a codespace in the browser, enter:
  
     ```shell{:copy}
     gh codespace code --web
     ```

   - To open a codespace in JupyterLab, enter:
  
     ```shell{:copy}
     gh codespace code --jupyter
     ```
     
     {% note %}

     **Note**: {% data reusables.codespaces.jupyterlab-installed-in-codespace %}

     {% endnote %}
     
1. Using the arrow keys, navigate to the codespace that you want to open.
1. To open the codespace, press <kbd>Enter</kbd>.

For more information, see [`gh codespace code`](https://cli.github.com/manual/gh_codespace_code) in the {% data variables.product.prodname_cli %} manual.

{% endcli %}

{% jetbrains %}

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

{% endjetbrains %}
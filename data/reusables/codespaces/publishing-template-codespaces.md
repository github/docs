If you're working in a codespace, you can publish it from the {% data variables.product.prodname_vscode_shortname %} web client or desktop application.

{% data reusables.codespaces.source-control-display-dark %}
1. To stage your changes, click  **+** next to the file you've added or changed, or next to **Changes** if you've changed multiple files and you want to stage them all.

   ![Source control side bar with staging button highlighted](/assets/images/help/codespaces/codespaces-commit-stage.png)

   {% note %}

   **Note:** If you start from {% data variables.product.company_short %}'s blank template, you will not see a list of changes unless you have already initialized your directory as a Git repository. To publish codespaces created from the blank template, click **Publish to {% data variables.product.company_short %}** in the Source Control view, then skip to step 5.

   {% endnote %}
2. To commit your staged changes, type a commit message describing the change you've made, then click **Commit**.

   ![Source control side bar with a commit message](/assets/images/help/codespaces/vscode-commit-button.png) 
3. Click **Publish Branch**.
   
   ![Screenshot of the "Publish branch" button in VS Code](/assets/images/help/codespaces/vscode-publish-branch-button.png)
4. In the "Repository Name" dropdown, type a name for your new repository, then select **Publish to {% data variables.product.company_short %} private repository** or **Publish to {% data variables.product.company_short %} public repository**.
   
   ![Screenshot of the "Repository Name" dropdown in VS Code](/assets/images/help/codespaces/choose-new-repository.png)

   The owner of the new repository will be the {% data variables.product.prodname_dotcom %} account with which you created the codespace.
5. Optionally, in the pop-up that appears in the lower right corner of the editor, click **Open on {% data variables.product.company_short %}** to view the new repository on {% data variables.product.prodname_dotcom_the_website %}.
   
   ![Screenshot of the "Open in GitHub" pop-up in VS Code](/assets/images/help/codespaces/open-on-github.png)
After you connect your account on {% data variables.product.prodname_dotcom_the_website %} to the {% data variables.product.prodname_github_codespaces %} extension, you can create a new codespace. For more information about the {% data variables.product.prodname_github_codespaces %} extension, see the [{% data variables.product.prodname_vs_marketplace_shortname %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Click the Add icon: {% octicon "plus" aria-label="The plus icon" %}.

   ![The Create new Codespace option in {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/create-codespace-vscode.png)

3. Type the name of the repository you want to develop in, then select it.

   ![Searching for repository to create a new codespace](/assets/images/help/codespaces/choose-repository-vscode.png)

   If the repository you choose is owned by an organization, and the organization has configured codespaces for this repository to be billable to the organization, or its parent enterprise, a message will be displayed in subsequent prompts telling you who will pay for the codespace.

4. Click the branch you want to develop on.

   ![Searching for a branch to create a new codespace](/assets/images/help/codespaces/choose-branch-vscode.png)

5. If prompted to choose a dev container configuration file, choose a file from the list.

   ![Choosing a dev container configuration file for {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/choose-dev-container-vscode.png)

6. Click the machine type you want to use.

   ![Instance types for a new codespace](/assets/images/help/codespaces/choose-sku-vscode.png)

   {% note %}

   **Note**: {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}

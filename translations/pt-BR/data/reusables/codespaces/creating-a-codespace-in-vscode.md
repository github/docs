After you connect your account on {% data variables.product.product_location %} to the {% data variables.product.prodname_github_codespaces %} extension, you can create a new codespace. For more information about the {% data variables.product.prodname_github_codespaces %} extension, see the [{% data variables.product.prodname_vscode %} marketplace](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

{% note %}

**Note**: Currently, {% data variables.product.prodname_vscode %} doesn't allow you to choose a dev container configuration when you create a codespace. Se você quiser escolher uma configuração de contêiner de desenvolvimento específica, use a interface web do {% data variables.product.prodname_dotcom %} para criar o seu codespace. For more information, click the **Web browser** tab at the top of this page.

{% endnote %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Click the Add icon: {% octicon "plus" aria-label="The plus icon" %}.

   ![A opção "Criar novo codespace" em {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/create-codespace-vscode.png)

3. Type the name of the repository you want to develop in, then select it.

   ![Pesquisar um repositório para criar um novo {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-repository-vscode.png)

4. Clique no branch que você deseja desenvolver.

   ![Pesquisar um branch para criar um novo {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-branch-vscode.png)

5. Click the machine type you want to use.

   ![Tipos de instância para um novo {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-sku-vscode.png)

   {% note %}

   **Observação**: {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}

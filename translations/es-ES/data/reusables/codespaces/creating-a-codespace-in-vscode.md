Después de que conectes tu cuenta de {% data variables.product.product_location %} a la extensión de {% data variables.product.prodname_github_codespaces %}, puedes crear un codespace nuevo. For more information about the {% data variables.product.prodname_github_codespaces %} extension, see the [{% data variables.product.prodname_vscode %} marketplace](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

{% note %}

**Note**: Currently, {% data variables.product.prodname_vscode %} doesn't allow you to choose a dev container configuration when you create a codespace. Si quieres elegir una configuración de contenedor dev específica, utiliza la interfaz web de {% data variables.product.prodname_dotcom %} para crear tu codespace. For more information, click the **Web browser** tab at the top of this page.

{% endnote %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Click the Add icon: {% octicon "plus" aria-label="The plus icon" %}.

   ![La opciòn de crear un codespace nuevo en {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/create-codespace-vscode.png)

3. Type the name of the repository you want to develop in, then select it.

   ![Buscar un repositorio para crear un {% data variables.product.prodname_codespaces %} nuevo](/assets/images/help/codespaces/choose-repository-vscode.png)

4. Da clic en la rama en la que quieras desarrollar.

   ![Buscar una rama para crear un {% data variables.product.prodname_codespaces %} nuevo](/assets/images/help/codespaces/choose-branch-vscode.png)

5. Click the machine type you want to use.

   ![Tipos de instancia para un {% data variables.product.prodname_codespaces %} nuevo](/assets/images/help/codespaces/choose-sku-vscode.png)

   {% note %}

   **Nota**: {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}

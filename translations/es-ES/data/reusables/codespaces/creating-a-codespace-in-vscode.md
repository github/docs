Después de que conectes tu cuenta de {% data variables.product.product_location %} a la extensión de {% data variables.product.prodname_github_codespaces %}, puedes crear un codespace nuevo. Para obtener más información sobre la extensión de {% data variables.product.prodname_github_codespaces %}, consulta el [{% data variables.product.prodname_vs_marketplace_shortname %} marketplace](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

{% note %}

**Nota**: Actualmente, {% data variables.product.prodname_vscode_shortname %} no te permite elegir una configuración de contenedor dev cuando creas un codespace. Si quieres elegir una configuración de contenedor dev específica, utiliza la interfaz web de {% data variables.product.prodname_dotcom %} para crear tu codespace. Para obtener más información, haz clic en la pestaña de **Buscador web** en la parte superior de esta página.

{% endnote %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Haz clic en el icono de agregar: {% octicon "plus" aria-label="The plus icon" %}.

   ![La opciòn de crear un codespace nuevo en {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/create-codespace-vscode.png)

3. Escribe el nombre del repositorio en el cual quieras desarrollar y luego selecciónalo.

   ![Buscar un repositorio para crear un {% data variables.product.prodname_codespaces %} nuevo](/assets/images/help/codespaces/choose-repository-vscode.png)

4. Da clic en la rama en la que quieras desarrollar.

   ![Buscar una rama para crear un {% data variables.product.prodname_codespaces %} nuevo](/assets/images/help/codespaces/choose-branch-vscode.png)

5. Haz clic en el tipo de máquina que quieras utilizar.

   ![Tipos de instancia para un {% data variables.product.prodname_codespaces %} nuevo](/assets/images/help/codespaces/choose-sku-vscode.png)

   {% note %}

   **Nota**: {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}

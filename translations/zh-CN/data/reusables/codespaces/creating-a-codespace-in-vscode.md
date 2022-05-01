After you connect your account on {% data variables.product.product_location %} to the {% data variables.product.prodname_github_codespaces %} extension, you can create a new codespace. For more information about the {% data variables.product.prodname_github_codespaces %} extension, see the [{% data variables.product.prodname_vscode %} marketplace](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

{% note %}

**Note**: Currently, {% data variables.product.prodname_vscode %} doesn't allow you to choose a dev container configuration when you create a codespace. 如果要选择特定的开发容器配置，请使用 {% data variables.product.prodname_dotcom %} Web 界面创建代码空间。 For more information, click the **Web browser** tab at the top of this page.

{% endnote %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. Click the Add icon: {% octicon "plus" aria-label="The plus icon" %}.

   ![{% data variables.product.prodname_codespaces %} 中的 Create new Codespace（创建新代码空间）选项](/assets/images/help/codespaces/create-codespace-vscode.png)

3. Type the name of the repository you want to develop in, then select it.

   ![搜索仓库以创建新的 {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-repository-vscode.png)

4. 单击要在其中开发的分支。

   ![搜索分支以创建新的 {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-branch-vscode.png)

5. Click the machine type you want to use.

   ![新 {% data variables.product.prodname_codespaces %} 的实例类型](/assets/images/help/codespaces/choose-sku-vscode.png)

   {% note %}

   **注**：{% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}

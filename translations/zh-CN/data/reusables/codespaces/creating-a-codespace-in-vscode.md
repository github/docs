将 {% data variables.product.product_location %} 上的帐户连接到 {% data variables.product.prodname_github_codespaces %} 扩展后，可以创建新的代码空间。 有关 {% data variables.product.prodname_github_codespaces %} 扩展的详细信息，请参阅 [{% data variables.product.prodname_vs_marketplace_shortname %} Marketplace](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces)。

{% note %}

**注意**：目前，{% data variables.product.prodname_vscode_shortname %} 不允许在创建代码空间时选择开发容器配置。 如果要选择特定的开发容器配置，请使用 {% data variables.product.prodname_dotcom %} Web 界面创建代码空间。 有关详细信息，请单击此页顶部的 **Web browser（Web 浏览器）**选项卡。

{% endnote %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
2. 单击 Add（添加）图标：{% octicon "plus" aria-label="The plus icon" %}。

   ![{% data variables.product.prodname_codespaces %} 中的 Create new Codespace（创建新代码空间）选项](/assets/images/help/codespaces/create-codespace-vscode.png)

3. 键入要在其中开发的存储库的名称，然后选择它。

   ![搜索仓库以创建新的 {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-repository-vscode.png)

4. 单击要在其中开发的分支。

   ![搜索分支以创建新的 {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/choose-branch-vscode.png)

5. 单击您要使用的机器类型。

   ![新 {% data variables.product.prodname_codespaces %} 的实例类型](/assets/images/help/codespaces/choose-sku-vscode.png)

   {% note %}

   **注**：{% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}

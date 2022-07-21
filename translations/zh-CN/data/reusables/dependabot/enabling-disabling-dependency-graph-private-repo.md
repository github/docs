仓库管理员可以启用或禁用私有仓库的依赖关系图。

您也可以为用户帐户或组织拥有的所有仓库启用或禁用依赖项图。 更多信息请参阅“[配置依赖关系图](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph)”。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. 阅读有关授予 {% data variables.product.product_name %} 只读访问仓库数据的消息，以启用依赖关系图，然后在“Dependency Graph（依赖关系图）”旁边单击 **Enable（启用）**。 !["Enable" button for the dependency graph](/assets/images/help/repository/dependency-graph-enable-button.png) 您可以随时禁用依赖关系图，方法是单击{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}“代码安全性和分析”{% else %}“安全性和分析”{% endif %}设置页面上“依赖关系图”旁边的 **禁用**。

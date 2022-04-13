Repository administrators can enable or disable the dependency graph for private repositories.

You can also enable or disable the dependency graph for all repositories owned by your user account or organization. For more information, see "[Configuring the dependency graph](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Read the message about granting {% data variables.product.product_name %} read-only access to the repository data to enable the dependency graph, then next to "Dependency Graph", click **Enable**.
   !["Enable" button for the dependency graph](/assets/images/help/repository/dependency-graph-enable-button.png)
   You can disable the dependency graph at any time by clicking **Disable** next to "Dependency Graph" on the settings page for {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}"Code security and analysis."{% else %}"Security & analysis."{% endif %}

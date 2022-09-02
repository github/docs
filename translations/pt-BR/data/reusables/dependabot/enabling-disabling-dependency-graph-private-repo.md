Os administradores de repositórios podem habilitar ou desabilitar o gráfico de dependências em repositórios privados.

Você também pode habilitar ou desabilitar o gráfico de dependências para todos os repositórios pertencentes à sua conta de usuário ou organização. For more information, see "[Configuring the dependency graph](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Leia a mensagem sobre a concessão de acesso somente leitura pelo {% data variables.product.product_name %} aos dados do repositório para habilitar o gráfico de dependências e, em seguida, ao lado de "Gráfico de Dependência", clique em **Habilitar**. !["Enable" button for the dependency graph](/assets/images/help/repository/dependency-graph-enable-button.png) You can disable the dependency graph at any time by clicking **Disable** next to "Dependency Graph" on the settings page for {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}"Code security and analysis."{% else %}"Security & analysis."{% endif %}

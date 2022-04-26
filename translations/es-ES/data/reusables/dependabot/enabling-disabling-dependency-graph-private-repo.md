Los administradores del repositorio pueden habilitar o inhabilitar la gráfica de dependencias para los repositorios privados.

También puedes habilitar o inhabilitar la gráfica de dependencias para todos los repositorios que pertenecen a tu cuenta de usuario u organización. For more information, see "[Configuring the dependency graph](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Lee los mensajes sobre el otorgar acceso de solo lectura a {% data variables.product.product_name %} para los datos del repositorio para así habilitar la gráfica de dependencias, posteriormente, da clic en **Habilitar** junto a "Gráfica de Dependencias". !["Enable" button for the dependency graph](/assets/images/help/repository/dependency-graph-enable-button.png) Puedes inhabilitar la gráfica de dependencias en cualquier momento si haces clic en **Inhabilitar** junto a "Gráfica de dependencias" en la página de ajustes de {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}"Análisis y seguridad de código."{% else %}"Seguridad & análisis."{% endif %}

---
title: Habilitar alertas para dependências vulneráveis no GitHub Enterprise Server
intro: 'Você pode conectar {% data variables.product.product_location %} a {% data variables.product.prodname_ghe_cloud %} e habilitar o gráfico de dependências e {% ifversion ghes %}{% data variables.product.prodname_dependabot %}{% else %}alertas de segurança{% endif %} em repositórios na sua instância.'
shortTitle: Habilitar alertas para dependências
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
permissions: 'Site administrators for {% data variables.product.prodname_ghe_server %} who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable the dependency graph and {% data variables.product.prodname_dependabot %} alerts on {% data variables.product.prodname_ghe_server %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
  - Dependabot
---

## Sobre alertas para dependências vulneráveis no {% data variables.product.prodname_ghe_server %}

Para identificar dependências vulneráveis no seu repositório e receber alertas sobre vulnerabilidades, você deverá habilitar duas funcionalidades de segurança:
- O gráfico de dependências
- Alertas de {% data variables.product.prodname_dependabot %}

Para obter mais informações, consulte "[Sobre o gráfico de dependências](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)" e "[Sobre alertas para dependências vulneráveis](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".

{% data reusables.repositories.tracks-vulnerabilities %}

Você pode conectar {% data variables.product.product_location %} a {% data variables.product.prodname_dotcom_the_website %} e, em seguida, sincronizar os dados de vulnerabilidade na sua instância e gerar {% data variables.product.prodname_dependabot_alerts %} em repositórios com uma dependência vulnerável.

Depois de conectar {% data variables.product.product_location %} a {% data variables.product.prodname_dotcom_the_website %} e habilitar o gráfico de dependências e {% data variables.product.prodname_dependabot_alerts %} para dependências vulneráveis, os dados de vulnerabilidade são sincronizados de {% data variables.product.prodname_dotcom_the_website %} para sua instância uma vez a cada hora. Também é possível sincronizar os dados de vulnerabilidade manualmente a qualquer momento. Nenhum código ou informações sobre o código da {% data variables.product.product_location %} são carregados para o {% data variables.product.prodname_dotcom_the_website %}.

Quando {% data variables.product.product_location %} recebe informações sobre uma vulnerabilidade, ele identificará repositórios na sua instância que usam a versão afetada da dependência e gerará {% data variables.product.prodname_dependabot_alerts %}. Você pode personalizar como você recebe {% data variables.product.prodname_dependabot_alerts %}. Para obter mais informações, consulte "[Configurar notificações para dependências vulneráveis](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies/#configuring-notifications-for-dependabot-alerts)".

Antes de ativar o gráfico de dependências e {% ifversion ghes > 2.21 %}{% data variables.product.prodname_dependabot %}{% else %}alertas de segurança{% endif %} para dependências vulneráveis em {% data variables.product.product_location %}, você deve conectar {% data variables.product.product_location %} a {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, consulte "[Conectando sua conta corporativa a {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)".

## Habilitar o gráfico de dependências e {% data variables.product.prodname_dependabot_alerts %} no GitHub Enterprise Server

Para {% data variables.product.product_location %} gerar {% data variables.product.prodname_dependabot_alerts %} sempre que forem detectadas vulnerabilidades nos seus repositórios:
-  Você deve conectar {% data variables.product.product_location %} a {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, consulte "[Conectar o {% data variables.product.prodname_ghe_server %} ao {% data variables.product.prodname_ghe_cloud %}](/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)".
-  Você deve habilitar o gráfico de dependências.

{% ifversion ghes > 3.1 %}
Você pode habilitar o gráfico de dependências por meio do {% data variables.enterprise.management_console %} ou do shell administrativo. Recomendamos que você siga o encaminhamento de {% data variables.enterprise.management_console %} a menos que {% data variables.product.product_location %} use clustering.

### Habilitando o gráfico de dependências por meio do {% data variables.enterprise.management_console %}
{% endif %}{% ifversion ghes > 3.1 %}
{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Em "Segurança", clique em **Gráfico de dependência**. ![Caixa de seleção para habilitar ou desabilitar o gráfico de dependências](/assets/images/enterprise/3.2/management-console/enable-dependency-graph-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
1. Clique **Visit your instance** (Visite sua instância).

### Habilitando o gráfico de dependências por meio do shell administrativo
{% else %}
### Habilitar o gráfico de dependências
{% endif %}
{% data reusables.enterprise_site_admin_settings.sign-in %}
1. No shell administrativo, habilite o gráfico de dependências em {% data variables.product.product_location %}:
    ``` shell
    $ {% ifversion ghes > 3.1 %}ghe-config app.dependency-graph.enabled true{% else %}ghe-config app.github.dependency-graph-enabled true{% endif %}
    ```
   {% note %}

   **Observação**: Para obter mais informações sobre como habilitar o acesso ao shell administrativo via SSH, veja "[Acessar o shell administrativo (SSH)](/enterprise/{{ currentVersion }}/admin/configuration/accessing-the-administrative-shell-ssh)".

   {% endnote %}
1. Aplique a configuração.
    ```shell
    $ ghe-config-apply
    ```
1. Volte para o {% data variables.product.prodname_ghe_server %}.

### Habilitar o {% data variables.product.prodname_dependabot_alerts %}

Antes de habilitar {% data variables.product.prodname_dependabot_alerts %} para sua instância, você deverá habilitar o gráfico de dependências. Para obter mais informações, consulte acima.

{% data reusables.enterprise-accounts.access-enterprise %}{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}
1. Em "Repositories can be scanned for vulnerabilities" (Os repositórios podem ser examinados para vulnerabilidades), use o menu suspenso e clique em **Enabled without notifications** (Habilitado sem notificações). Opcionalmente, para habilitar alertas com notificações, selecione **Enabled with notifications**(Habilitado com notificações). ![Menu suspenso para habilitar a verificação vulnerabilidades nos repositórios](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png)
   {% note %}

   Recomendamos configurar {% data variables.product.prodname_dependabot_alerts %} sem notificações nos primeiros dias para evitar uma sobrecarga de e-mails. Após alguns dias, você poderá habilitar as notificações para receber {% data variables.product.prodname_dependabot_alerts %}, como de costume.

   {% endnote %}
## Exibir dependências vulneráveis no {% data variables.product.prodname_ghe_server %}

Você pode exibir todas as vulnerabilidades na {% data variables.product.product_location %} e sincronizar manualmente os dados de vulnerabilidade do {% data variables.product.prodname_dotcom_the_website %} para atualizar a lista.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Na barra lateral esquerda, clique em **Vulnerabilities** (Vulnerabilidades). ![Guia Vulnerabilities (Vulnerabilidades) na barra lateral de administração do site](/assets/images/enterprise/business-accounts/vulnerabilities-tab.png)
3. Para sincronizar os dados de vulnerabilidade, clique em **Sync Vulnerabilities now** (Sincronizar vulnerabilidades agora). ![Botão Sync Vulnerabilities now (Sincronizar vulnerabilidades agora)](/assets/images/enterprise/site-admin-settings/sync-vulnerabilities-button.png)

---
title: Habilitar alertas para dependências vulneráveis no GitHub Enterprise Server
intro: 'You can connect {% data variables.product.product_location %} to {% data variables.product.prodname_ghe_cloud %} and enable the dependency graph and {% ifversion ghes %}{% data variables.product.prodname_dependabot %}{% else %}security{% endif %} alerts in repositories in your instance.'
shortTitle: Habilitar alertas para dependências
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
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

To identify vulnerable dependencies in your repository and receive alerts about vulnerabilities, you need to enable two security features:
- The dependency graph
- Alertas de {% data variables.product.prodname_dependabot %}

For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)" and "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."

{% data reusables.repositories.tracks-vulnerabilities %}

You can connect {% data variables.product.product_location %} to {% data variables.product.prodname_dotcom_the_website %}, then sync vulnerability data to your instance and generate {% data variables.product.prodname_dependabot_alerts %} in repositories with a vulnerable dependency.

After connecting {% data variables.product.product_location %} to {% data variables.product.prodname_dotcom_the_website %} and enabling the dependency graph and {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies, vulnerability data is synced from {% data variables.product.prodname_dotcom_the_website %} to your instance once every hour. Também é possível sincronizar os dados de vulnerabilidade manualmente a qualquer momento. Nenhum código ou informações sobre o código da {% data variables.product.product_location %} são carregados para o {% data variables.product.prodname_dotcom_the_website %}.

When {% data variables.product.product_location %} receives information about a vulnerability, it will identify repositories in your instance that use the affected version of the dependency and generate {% data variables.product.prodname_dependabot_alerts %}. Você pode personalizar como você recebe {% data variables.product.prodname_dependabot_alerts %}. Para obter mais informações, consulte "[Configurar notificações para dependências vulneráveis](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies/#configuring-notifications-for-dependabot-alerts)".

## Enabling the dependency graph and {% data variables.product.prodname_dependabot_alerts %} on GitHub Enterprise Server

For {% data variables.product.product_location %} to generate {% data variables.product.prodname_dependabot_alerts %} whenever vulnerabilities are detected on your repositories:
-  You must connect {% data variables.product.product_location %} to {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, consulte "[Conectar o {% data variables.product.prodname_ghe_server %} ao {% data variables.product.prodname_ghe_cloud %}](/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)".
-  You must enable the dependency graph.

{% ifversion ghes > 3.1 %}
You can enable the dependency graph via the {% data variables.enterprise.management_console %} or the administrative shell. We recommend you follow the {% data variables.enterprise.management_console %} route unless {% data variables.product.product_location %} uses clustering.

### Enabling the dependency graph via the {% data variables.enterprise.management_console %}
{% endif %}{% ifversion ghes > 3.1 %}
{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Under "Security," click **Dependency graph**. ![Checkbox to enable or disable the dependency graph](/assets/images/enterprise/3.2/management-console/enable-dependency-graph-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
1. Clique **Visit your instance** (Visite sua instância).

### Enabling the dependency graph via the administrative shell
{% else %}
### Habilitar o gráfico de dependências
{% endif %}
{% data reusables.enterprise_site_admin_settings.sign-in %}
1. In the administrative shell, enable the dependency graph on {% data variables.product.product_location %}:
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

Before enabling {% data variables.product.prodname_dependabot_alerts %} for your instance, you need to enable the dependency graph. For more information, see above.

{% data reusables.enterprise-accounts.access-enterprise %}{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}
1. Em "Repositories can be scanned for vulnerabilities" (Os repositórios podem ser examinados para vulnerabilidades), use o menu suspenso e clique em **Enabled without notifications** (Habilitado sem notificações). Opcionalmente, para habilitar alertas com notificações, selecione **Enabled with notifications**(Habilitado com notificações). ![Menu suspenso para habilitar a verificação vulnerabilidades nos repositórios](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png)
   {% note %}

   We recommend configuring {% data variables.product.prodname_dependabot_alerts %} without notifications for the first few days to avoid an overload of emails. Após alguns dias, você poderá habilitar as notificações para receber {% data variables.product.prodname_dependabot_alerts %}, como de costume.

   {% endnote %}
## Exibir dependências vulneráveis no {% data variables.product.prodname_ghe_server %}

Você pode exibir todas as vulnerabilidades na {% data variables.product.product_location %} e sincronizar manualmente os dados de vulnerabilidade do {% data variables.product.prodname_dotcom_the_website %} para atualizar a lista.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Na barra lateral esquerda, clique em **Vulnerabilities** (Vulnerabilidades). ![Guia Vulnerabilities (Vulnerabilidades) na barra lateral de administração do site](/assets/images/enterprise/business-accounts/vulnerabilities-tab.png)
3. Para sincronizar os dados de vulnerabilidade, clique em **Sync Vulnerabilities now** (Sincronizar vulnerabilidades agora). ![Botão Sync Vulnerabilities now (Sincronizar vulnerabilidades agora)](/assets/images/enterprise/site-admin-settings/sync-vulnerabilities-button.png)

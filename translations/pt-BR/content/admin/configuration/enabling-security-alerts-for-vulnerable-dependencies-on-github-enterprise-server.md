---
title: Habilitar alertas de segurança para dependências vulneráveis no GitHub Enterprise Server
intro: 'Você pode conectar a {% data variables.product.product_location_enterprise %} ao {% data variables.product.prodname_ghe_cloud %} e habilitar os alertas de segurança para dependências vulneráveis nos repositórios na sua instância.'
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
permissions: 'Os administradores de sites para {% data variables.product.prodname_ghe_server %} que também são proprietários de uma conta corporativa ou organização conectada do {% data variables.product.prodname_ghe_cloud %} podem ativar alertas de segurança para dependências vulneráveis em {% data variables.product.prodname_ghe_server %}.'
versions:
  enterprise-server: '*'
---

### Sobre alertas para dependências vulneráveis no {% data variables.product.prodname_ghe_server %}

{% data reusables.repositories.tracks-vulnerabilities %} Para obter mais informações, consulte "[Sobre alertas de dependências vulneráveis](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".

Você pode conectar a {% data variables.product.product_location_enterprise %} ao {% data variables.product.prodname_dotcom_the_website %}, sincronizar os dados de vulnerabilidade com a sua instância e gerar alertas de segurança em repositórios com dependência vulnerável.

Depois de conectar o {% data variables.product.product_location_enterprise %} ao {% data variables.product.prodname_dotcom_the_website %} e habilitar os alertas de segurança para dependências vulneráveis, os dados de vulnerabilidade serão sincronizados do {% data variables.product.prodname_dotcom_the_website %} para a sua instância a cada hora. Também é possível sincronizar os dados de vulnerabilidade manualmente a qualquer momento. Nenhum código ou informações sobre o código da {% data variables.product.product_location_enterprise %} são carregados para o {% data variables.product.prodname_dotcom_the_website %}.

Ao receber informações sobre vulnerabilidades, a {% data variables.product.product_location_enterprise %} identificará os repositórios da sua instância que usam a versão afetada da dependência e enviará alertas de segurança para os proprietários e usuários com acesso administrativo nos repositórios em questão. É possível personalizar o recebimento dos alertas de segurança. Para obter mais informações, consulte "[Sobre alertas para dependências vulneráveis](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies/#configuring-notifications-for-security-alerts)"

### Habilitar alertas de segurança para dependências vulneráveis no {% data variables.product.prodname_ghe_server %}

Antes de habilitar os alertas de segurança para as dependências de vulnerabilidade na {% data variables.product.product_location_enterprise %}, conecte a {% data variables.product.product_location_enterprise %} ao {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, consulte "[Conectar o {% data variables.product.prodname_ghe_server %} ao {% data variables.product.prodname_ghe_cloud %}](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)".

{% if currentVersion ver_gt "enterprise-server@2.20" %} Recomendamos configurar alertas de segurança sem notificações nos primeiros dias para evitar uma sobrecarga de e-mails. Após alguns dias, você pode habilitar notificações para receber alertas de segurança como de costume.{% endif %}

{% data reusables.enterprise_site_admin_settings.sign-in %}
2. No shell administrativo, habilite os alertas de segurança para dependências de vulnerabilidade na {% data variables.product.product_location_enterprise %}:
 ``` shell
$ ghe-dep-graph-enable
```
3. Volte para o {% data variables.product.prodname_ghe_server %}.
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}{% if currentVersion ver_gt "enterprise-server@2.20" %}
5. Em "Repositories can be scanned for vulnerabilities" (Os repositórios podem ser examinados para vulnerabilidades), use o menu suspenso e clique em **Enabled without notifications** (Habilitado sem notificações). Opcionalmente, para habilitar alertas com notificações, selecione **Enabled with notifications**(Habilitado com notificações).{% else %}
5. Em "Repositories can be scanned for vulnerabilities" (Verificar vulnerabilidades nos repositórios), use o menu suspenso e clique em **Enabled** (Habilitado).
{% endif %}
   ![Menu suspenso para habilitar a verificação vulnerabilidades nos repositórios](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png)

### Exibir dependências vulneráveis no {% data variables.product.prodname_ghe_server %}

Você pode exibir todas as vulnerabilidades na {% data variables.product.product_location_enterprise %} e sincronizar manualmente os dados de vulnerabilidade do {% data variables.product.prodname_dotcom_the_website %} para atualizar a lista.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Na barra lateral esquerda, clique em **Vulnerabilities** (Vulnerabilidades). ![Guia Vulnerabilities (Vulnerabilidades) na barra lateral de administração do site](/assets/images/enterprise/business-accounts/vulnerabilities-tab.png)
3. Para sincronizar os dados de vulnerabilidade, clique em **Sync Vulnerabilities now** (Sincronizar vulnerabilidades agora). ![Botão Sync Vulnerabilities now (Sincronizar vulnerabilidades agora)](/assets/images/enterprise/site-admin-settings/sync-vulnerabilities-button.png)

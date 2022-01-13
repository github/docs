---
title: Habilitando o gráfico de dependências e os alertas de dependências na sua conta corporativa
intro: 'Você pode conectar {% data variables.product.product_location %} a {% data variables.product.prodname_ghe_cloud %} e habilitar o gráfico de dependências e  {% data variables.product.prodname_dependabot_alerts %} nos repositórios da sua instância.'
miniTocMaxHeadingLevel: 3
shortTitle: Habilitar a análise de dependências
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
permissions: 'Enterprise owners who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable the dependency graph and  {% data variables.product.prodname_dependabot_alerts %} on {% data variables.product.product_location %}.'
versions:
  ghes: '*'
  ghae: issue-4864
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
  - Dependabot
---

## Sobre alertas para dependências vulneráveis no {% data variables.product.product_location %}

{% data reusables.dependabot.dependabot-alerts-beta %}

{% data variables.product.prodname_dotcom %} identifica dependências vulneráveis nos repositórios e cria {% data variables.product.prodname_dependabot_alerts %} em {% data variables.product.product_location %}, usando:

- Dados do {% data variables.product.prodname_advisory_database %}
- O serviço gráfico de dependências

Para obter mais informações sobre essas funcionalidades, consulte "[Sobre o gráfico de dependências](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)" e "[Sobre alertas para dependências vulneráveis](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".

### Sobre a sincronização de dados de {% data variables.product.prodname_advisory_database %}

{% data reusables.repositories.tracks-vulnerabilities %}

Você pode conectar-se {% data variables.product.product_location %} a {% data variables.product.prodname_dotcom_the_website %} com {% data variables.product.prodname_github_connect %}. Uma vez conectados, os dados de vulnerabilidade são sincronizados de {% data variables.product.prodname_advisory_database %} para sua instância uma vez a cada hora. Também é possível sincronizar os dados de vulnerabilidade manualmente a qualquer momento. Nenhum código ou informações sobre o código da {% data variables.product.product_location %} são carregados para o {% data variables.product.prodname_dotcom_the_website %}.

Apenas as consultorias revisadas por {% data variables.product.company_short %} estão sincronizados. {% data reusables.security-advisory.link-browsing-advisory-db %}

### Sobre a digitalização de repositórios com dados sincronizados do {% data variables.product.prodname_advisory_database %}

Para repositórios com {% data variables.product.prodname_dependabot_alerts %} habilitado, a digitalização é acionada em qualquer push para o branch padrão que contém um arquivo de manifesto ou arquivo de bloqueio. Além disso, quando um novo registro de vulnerabilidade é adicionado à instância, {% data variables.product.prodname_ghe_server %} irá digitalizar todos os repositórios existentes nessa instância e gerará alertas para qualquer repositório que seja vulnerável. Para obter mais informações, consulte "[Detecção de dependências vulneráveis](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies#detection-of-vulnerable-dependencies)".


### Sobre a geração de {% data variables.product.prodname_dependabot_alerts %}

Se você habilitar a detecção de vulnerabilidade, quando {% data variables.product.product_location %} recebe informações sobre uma vulnerabilidade, ela irá identificar os repositórios na sua instância que usam a versão afetada da dependência e irá gerar {% data variables.product.prodname_dependabot_alerts %}. Você pode escolher se quer ou não notificar os usuários automaticamente sobre o novo {% data variables.product.prodname_dependabot_alerts %}.

## Habilitando o gráfico de dependências e {% data variables.product.prodname_dependabot_alerts %} para dependências vulneráveis em {% data variables.product.product_location %}

### Pré-requisitos

Para {% data variables.product.product_location %} detectar dependências vulneráveis e gerar {% data variables.product.prodname_dependabot_alerts %}:
- Você deve conectar {% data variables.product.product_location %} a {% data variables.product.prodname_dotcom_the_website %}. {% ifversion ghae %}Isso também habilita o serviço do gráfico de dependências. {% endif %}{% ifversion ghes or ghae %}Para obter mais informações, consulte "[Conectando a conta corporativa ao {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)".{% endif %}
{% ifversion ghes %}- Você deve habilitar o serviço do gráfico de dependências.{% endif %}
- Você deve habilitar a digitalização de vulnerabilidade.

{% ifversion ghes %}
{% ifversion ghes > 3.1 %}
Você pode habilitar o gráfico de dependências por meio do {% data variables.enterprise.management_console %} ou do shell administrativo. Recomendamos que você siga o encaminhamento de {% data variables.enterprise.management_console %} a menos que {% data variables.product.product_location %} use clustering.

### Habilitando o gráfico de dependências por meio do {% data variables.enterprise.management_console %}
{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Em "Segurança", clique em **Gráfico de dependência**. ![Caixa de seleção para habilitar ou desabilitar o gráfico de dependências](/assets/images/enterprise/3.2/management-console/enable-dependency-graph-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
1. Clique **Visit your instance** (Visite sua instância).

### Habilitando o gráfico de dependências por meio do shell administrativo
{% endif %}{% ifversion ghes < 3.2 %}
### Habilitar o gráfico de dependências
{% endif %}
{% data reusables.enterprise_site_admin_settings.sign-in %}
1. No shell administrativo, habilite o gráfico de dependências em {% data variables.product.product_location %}:
    {% ifversion ghes > 3.1 %}```shell
    ghe-config app.dependency-graph.enabled true
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled true
  ghe-config app.github.vulnerability-alerting-and-settings-enabled true
    ```{% endif %}
   {% note %}

   **Note**: For more information about enabling access to the administrative shell via SSH, see "[Accessing the administrative shell (SSH)](/enterprise/{{ currentVersion }}/admin/configuration/accessing-the-administrative-shell-ssh)."

   {% endnote %}
2. Aplique a configuração.
    ```shell
    $ ghe-config-apply
    ```
3. Volte para o {% data variables.product.prodname_ghe_server %}.
{% endif %}

### Habilitar o {% data variables.product.prodname_dependabot_alerts %}

{% ifversion ghes %}
Antes de habilitar {% data variables.product.prodname_dependabot_alerts %} para sua instância, você deverá habilitar o gráfico de dependências. Para obter mais informações, consulte acima.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{%- ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. Em "Repositórios podem ser digitalizados com relação a vulnerabilidades", selecione o menu suspenso e clique em **Habilitado sem notificações**. Opcionalmente, para habilitar alertas com notificações, clique em **Habilitado com as notificações**. ![Menu suspenso para habilitar a verificação vulnerabilidades nos repositórios](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png)

   {% tip %}

   **Dica**: Recomendamos configurar {% data variables.product.prodname_dependabot_alerts %} sem notificações para os primeiros dias para evitar uma sobrecarga de e-mails. Após alguns dias, você poderá habilitar as notificações para receber {% data variables.product.prodname_dependabot_alerts %}, como de costume.

   {% endtip %}

{% ifversion fpt or ghec or ghes > 3.2 %}
Ao habilitar {% data variables.product.prodname_dependabot_alerts %}, você também deve considerar configurar {% data variables.product.prodname_actions %} para {% data variables.product.prodname_dependabot_security_updates %}. Este recurso permite aos desenvolvedores corrigir a vulnerabilidades nas suas dependências. Para obter mais informações, consulte "[Configurando a segurança de {% data variables.product.prodname_dependabot %} e as atualizações de versão na sua empresa](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/setting-up-dependabot-updates)".
{% endif %}

## Exibir dependências vulneráveis no {% data variables.product.product_location %}

Você pode exibir todas as vulnerabilidades na {% data variables.product.product_location %} e sincronizar manualmente os dados de vulnerabilidade do {% data variables.product.prodname_dotcom_the_website %} para atualizar a lista.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Na barra lateral esquerda, clique em **Vulnerabilities** (Vulnerabilidades). ![Guia Vulnerabilities (Vulnerabilidades) na barra lateral de administração do site](/assets/images/enterprise/business-accounts/vulnerabilities-tab.png)
3. Para sincronizar os dados de vulnerabilidade, clique em **Sync Vulnerabilities now** (Sincronizar vulnerabilidades agora). ![Botão Sync Vulnerabilities now (Sincronizar vulnerabilidades agora)](/assets/images/enterprise/site-admin-settings/sync-vulnerabilities-button.png)

---
title: Habilitando o Dependabot para sua empresa
intro: 'Você pode permitir que os usuários de {% data variables.product.product_location %} encontrem e corrijam vulnerabilidades em dependências de código, habilitando {% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes > 3.2 %} e {% data variables.product.prodname_dependabot_updates %}{% endif %}.'
miniTocMaxHeadingLevel: 3
shortTitle: Dependabot
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-the-dependency-graph-and-dependabot-alerts-on-your-enterprise-account
  - /admin/configuration/configuring-github-connect/enabling-the-dependency-graph-and-dependabot-alerts-for-your-enterprise
permissions: 'Enterprise owners can enable {% data variables.product.prodname_dependabot %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
  - Dependabot
---

## Sobre {% data variables.product.prodname_dependabot %} para {% data variables.product.product_name %}

{% data variables.product.prodname_dependabot %} ajuda os usuários do {% data variables.product.product_location %} a encontrar e corrigir vulnerabilidades em suas dependências.{% ifversion ghes > 3.2 %} Você pode habilitar {% data variables.product.prodname_dependabot_alerts %} para notificar os usuários sobre dependências vulneráveis e {% data variables.product.prodname_dependabot_updates %} para corrigir as vulnerabilidades e manter as dependências atualizadas para a última versão.

### Sobre {% data variables.product.prodname_dependabot_alerts %}
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %}

Com {% data variables.product.prodname_dependabot_alerts %}, {% data variables.product.prodname_dotcom %} identifica dependências inseguras nos repositórios e cria alertas em {% data variables.product.product_location %}, usando dados do {% data variables.product.prodname_advisory_database %} e o serviço gráfico de dependências.

{% data reusables.repositories.tracks-vulnerabilities %}

Após habilitar o recurso {% data variables.product.prodname_dependabot_alerts %} para a sua empresa, os dados de vulnerabilidade serão sincronizados entre o {% data variables.product.prodname_advisory_database %} e a sua instância uma vez a cada hora. Apenas as consultorias revisadas por {% data variables.product.company_short %} estão sincronizados. {% data reusables.security-advisory.link-browsing-advisory-db %}

Também é possível sincronizar os dados de vulnerabilidade manualmente a qualquer momento. Para obter mais informações, consulte[Visualizando os dados de vulnerabilidade da sua empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise)".

{% note %}

**Observação:** Ao habilitar {% data variables.product.prodname_dependabot_alerts %}, nenhum código ou informação sobre o código de {% data variables.product.product_location %} será enviado para {% data variables.product.prodname_dotcom_the_website %}.

{% endnote %}

Quando {% data variables.product.product_location %} recebe informações sobre uma vulnerabilidade, ele identifica repositórios em {% data variables.product.product_location %} que usam a versão afetada da dependência e gera {% data variables.product.prodname_dependabot_alerts %}. Você pode escolher se quer ou não notificar os usuários automaticamente sobre o novo {% data variables.product.prodname_dependabot_alerts %}.

Para repositórios com {% data variables.product.prodname_dependabot_alerts %} habilitado, a digitalização é acionada em qualquer push para o branch padrão que contém um arquivo de manifesto ou arquivo de bloqueio. Além disso, quando um novo registro de vulnerabilidade é adicionado a {% data variables.product.product_location %}, {% data variables.product.product_name %} digitaliza todos os repositórios existentes em {% data variables.product.product_location %} e gera alertas para qualquer repositório que seja vulnerável. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".

{% ifversion ghes > 3.2 %}
### Sobre {% data variables.product.prodname_dependabot_updates %}

{% data reusables.dependabot.beta-security-and-version-updates %}

Após habilitar {% data variables.product.prodname_dependabot_alerts %}, você poderá optar por habilitar {% data variables.product.prodname_dependabot_updates %}. Quando {% data variables.product.prodname_dependabot_updates %} está habilitado para {% data variables.product.product_location %}, os usuários podem configurar repositórios para que suas dependências sejam atualizadas e mantidas seguras automaticamente.

{% note %}

**Nota:** {% data variables.product.prodname_dependabot_updates %} em {% data variables.product.product_name %} exige {% data variables.product.prodname_actions %} com executores auto-hospedados.

{% endnote %}

Por padrão, os executores de {% data variables.product.prodname_actions %} usados por {% data variables.product.prodname_dependabot %} precisam de acesso à internet para fazer o download dos pacotes atualizados de gerentes de pacotes upstream. Para {% data variables.product.prodname_dependabot_updates %} alimentado por {% data variables.product.prodname_github_connect %}, o acesso à internet fornece aos seus executores um token que permite acesso a dependências e consultorias hospedadas em {% data variables.product.prodname_dotcom_the_website %}.

Com {% data variables.product.prodname_dependabot_updates %}, {% data variables.product.company_short %} cria automaticamente pull requests para atualizar dependências de duas maneiras.

- **{% data variables.product.prodname_dependabot_version_updates %}**: Os usuários adicionam um arquivo de configuração de {% data variables.product.prodname_dependabot %} ao repositório para habilitar {% data variables.product.prodname_dependabot %} e criar pull requests quando uma nova versão de uma dependência monitorada for lançada. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates)".
- **{% data variables.product.prodname_dependabot_security_updates %}**: Os usuários alternam uma configuração de repositório para habilitar {% data variables.product.prodname_dependabot %} para criar pull requests quando {% data variables.product.prodname_dotcom %} detecta uma vulnerabilidade em uma das dependências do gráfico de dependências para o repositório. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)" e "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)".
{% endif %}

## Habilitando {% data variables.product.prodname_dependabot_alerts %}

Antes de poder habilitar {% data variables.product.prodname_dependabot_alerts %}:
- Você deve habilitar {% data variables.product.prodname_github_connect %}. Para obter mais informações, consulte "[Gerenciando {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)".{% ifversion ghes %}
- Você deve habilitar o gráfico de dependências. Para obter mais informações, consulte "[Habilitando o gráfico de dependências para sua empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)."{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}
{%- ifversion dependabot-updates-github-connect %}
1. Em "{% data variables.product.prodname_dependabot %}", à direita de "Os usuários podem receber alertas de vulnerabilidade de dependências de código aberto", selecione o menu suspenso e clique em **Habilitado sem notificações**. Opcionalmente, para habilitar alertas com notificações, clique em **Habilitado com as notificações**.

   ![Captura de tela do menu suspenso para habilitar a digitalização de repositórios com relação a vulnerabilidades](/assets/images/enterprise/site-admin-settings/dependabot-alerts-dropdown.png)

{%- else %}
1. Em "Repositórios podem ser digitalizados com relação a vulnerabilidades", selecione o menu suspenso e clique em **Habilitado sem notificações**. Opcionalmente, para habilitar alertas com notificações, clique em **Habilitado com as notificações**. ![Menu suspenso para habilitar a verificação vulnerabilidades nos repositórios](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png)
{%- endif %}
   {% tip %}

   **Dica**: Recomendamos configurar {% data variables.product.prodname_dependabot_alerts %} sem notificações para os primeiros dias para evitar uma sobrecarga de e-mails. Após alguns dias, você poderá habilitar as notificações para receber {% data variables.product.prodname_dependabot_alerts %}, como de costume.

   {% endtip %}

{% ifversion dependabot-updates-github-connect %}
## Habilitar o {% data variables.product.prodname_dependabot_updates %}

Após habilitar {% data variables.product.prodname_dependabot_alerts %} para a sua empresa, você poderá habilitar {% data variables.product.prodname_dependabot_updates %}.

{% ifversion ghes %}
Antes de habilitar {% data variables.product.prodname_dependabot_updates %}, você deverá configurar {% data variables.product.product_location %} para usar {% data variables.product.prodname_actions %} com executores auto-hospedados. Para obter mais informações, consulte "[Primeiros passos com {% data variables.product.prodname_actions %} para o GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)."

{% data variables.product.prodname_dependabot_updates %} não são compatíveis em {% data variables.product.product_name %} se sua empresa usar clustering.
{% endif %}

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Em "Segurança", selecione **{% data variables.product.prodname_dependabot_security_updates %}**.

   ![Captura de tela da caixa de seleção para habilitar ou desabilitar {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/enterprise/management-console/enable-dependabot-updates.png)

{% data reusables.enterprise_management_console.save-settings %}
1. Clique **Visit your instance** (Visite sua instância).
1. Configure os executores auto-hospedados para criar os pull requests que atualizarão as dependências. Para obter mais informações, consulte "[Gerenciar executores auto-hospedados para {% data variables.product.prodname_dependabot_updates %} na sua empresa](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates). "
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. Em "{% data variables.product.prodname_dependabot %}", à direita de "Usuários podem facilmente atualizar para dependências não vulneráveis de código aberto", clique em **Habilitar**.

   ![Captura de tela do menu suspenso para habilitar a atualização de dependências vulneráveis](/assets/images/enterprise/site-admin-settings/dependabot-updates-button.png)

{% endif %}
{% ifversion ghes > 3.2 %}

Ao habilitar {% data variables.product.prodname_dependabot_alerts %}, você também deve considerar configurar {% data variables.product.prodname_actions %} para {% data variables.product.prodname_dependabot_security_updates %}. Este recurso permite aos desenvolvedores corrigir a vulnerabilidades nas suas dependências. Para obter mais informações, consulte "[Gerenciar executores auto-hospedados para {% data variables.product.prodname_dependabot_updates %} na sua empresa](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates). "

Se você precisar de segurança reforçada, recomendamos configurar {% data variables.product.prodname_dependabot %} para usar registros privados. Para obter mais informações, consulte "[Gerenciando segredos criptografados para {% data variables.product.prodname_dependabot %}](/code-security/dependabot/working-with-dependabot/managing-encrypted-secrets-for-dependabot)".

{% endif %}

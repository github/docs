---
title: Configurando alertas do Dependabot
intro: 'Habilite o {% data variables.product.prodname_dependabot_alerts %} para ser gerado quando uma nova dependência vulnerável {% ifversion GH-advisory-db-supports-malware %} ou malware {% endif %} for encontrada em um dos seus repositórios.'
shortTitle: Configurar alertas Dependabot
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
---

## Sobre {% data variables.product.prodname_dependabot_alerts %} para dependências vulneráveis {% ifversion GH-advisory-db-supports-malware %} e malware{% endif %}

{% data reusables.repositories.a-vulnerability-is %}

{% data variables.product.prodname_dependabot %} verifica o código quando uma nova consultoria é adicionada ao {% data variables.product.prodname_advisory_database %} ou ao gráfico de dependências para alterar o repositório. Quando dependências vulneráveis {% ifversion GH-advisory-db-supports-malware %} ou malware{% endif %} forem detectados, são gerados {% data variables.product.prodname_dependabot_alerts %}. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)".

Você pode habilitar ou desabilitar {% data variables.product.prodname_dependabot_alerts %} para:
* Sua conta pessoal
* Seu repositório
* Sua organização

## Gerenciando {% data variables.product.prodname_dependabot_alerts %} para sua conta pessoal

{% ifversion fpt or ghec %}

Você pode habilitar ou desabilitar {% data variables.product.prodname_dependabot_alerts %} para todos os repositórios pertencentes à sua conta pessoal.

### Habilitando ou desabilitando {% data variables.product.prodname_dependabot_alerts %} para repositórios existentes

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
3. Em "Código de segurança e análise" à direita de {% data variables.product.prodname_dependabot_alerts %}, clique em **Desabilitar todos** ou **Habilitar todos**. ![Captura de tela das funcionalidades "Configurar segurança e análise" com os botões "Habilitar todos" ou "Desabilitar todos" destacados](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-all.png)
4. Opcionalmente, habilite {% data variables.product.prodname_dependabot_alerts %} por padrão para novos repositórios que você criar. ![Captura de tela de "Habilitar alertas do Dependabot" com a caixa de seleção "Habilitar por padrão para novos repositórios privados" destacada](/assets/images/help/dependabot/dependabot-alerts-enable-by-default.png)
5. Clique em **Desabilitar {% data variables.product.prodname_dependabot_alerts %}** ou **Habilitar {% data variables.product.prodname_dependabot_alerts %}** para desabilitar ou habilitar {% data variables.product.prodname_dependabot_alerts %} para todos os repositórios que você possui. ![Captura de tela de "Habilitar alertas do Dependabot" com o botão "Habilitar alertas do Dependabot" destacado](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts.png)

Ao habilitar {% data variables.product.prodname_dependabot_alerts %} para repositórios existentes, você verá todos os resultados exibidos no GitHub em minutos.

### Habilitando ou desabilitando {% data variables.product.prodname_dependabot_alerts %} para novos repositórios

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
3. Em "Código de segurança e análise", à direita de {% data variables.product.prodname_dependabot_alerts %}, habilite ou desabilite{% data variables.product.prodname_dependabot_alerts %} por padrão para novos repositórios que você criar. ![Captura de tela de "Configurar segurança e análise" com a caixa de seleção "Habilitar para todos os novos repositórios privados" destacada](/assets/images/help/dependabot/dependabot-alerts-enable-for-all-new-repositories.png)

{% else %}
{% data variables.product.prodname_dependabot_alerts %} para seus repositórios podem ser habilitados ou desabilitados pelo proprietário da empresa. Para obter mais informações, consulte "[Habilitando o Dependabot para a sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".

{% endif %}

## Gerenciar {% data variables.product.prodname_dependabot_alerts %} para o seu repositório

{% ifversion fpt or ghec %}Você pode gerenciar {% data variables.product.prodname_dependabot_alerts %} para o seu repositório público, privado ou interno.

Por padrão, notificamos as pessoas com permissões de administrador nos repositórios afetados sobre os novos {% data variables.product.prodname_dependabot_alerts %}. {% data variables.product.product_name %} nunca divulga publicamente dependências inseguras para qualquer repositório. Você também pode tornar o {% data variables.product.prodname_dependabot_alerts %} visível para pessoas ou repositórios de trabalho de equipes adicionais que você possui ou para os quais tem permissões de administrador.

{% data reusables.security.security-and-analysis-features-enable-read-only %}

### Habilitando ou desabilitando {% data variables.product.prodname_dependabot_alerts %} para um repositório

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Em "Código de segurança e análise" à direita de {% data variables.product.prodname_dependabot_alerts %}, clique em **Habilitar** para habilitar alertas ou **Desabilitar** para desabilitar os alertas. ![Captura de tela da seção "Código de segurança e análise" com o botão para habilitar {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png)
{% endif %}{% ifversion ghes or ghae %}

{% data variables.product.prodname_dependabot_alerts %} para o seu repositório podem ser habilitados ou desabilitados pelo proprietário da empresa. Para obter mais informações, consulte "[Habilitando o Dependabot para a sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".
{% endif %}

## Gerenciando {% data variables.product.prodname_dependabot_alerts %} para a sua organização
{% ifversion fpt or ghec %}Você pode habilitar ou desabilitar {% data variables.product.prodname_dependabot_alerts %} para todos os repositórios pertencentes à sua organização. Suas alterações afetam todos os repositórios.

### Habilitando ou desabilitando {% data variables.product.prodname_dependabot_alerts %} para todos os repositórios existentes

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
2. Em "Código de segurança e análise" à direita de {% data variables.product.prodname_dependabot_alerts %}, clique em **Desabilitar todos** ou **Habilitar todos**.
   {% ifversion fpt or ghec %}
   ![Captura de tela das funcionalidades "Configurar segurança e análise" com o botão "Habilitar todos" ou "Desabilitar tudode" destacado para os alertas do Dependabot](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-fpt.png)
   {% endif %}
   {% ifversion ghae %}
   ![Botão "Habilitar tudo" ou "Desabilitar tudo" para os recursos de "Configurar segurança e análise"](/assets/images/enterprise/github-ae/organizations/security-and-analysis-disable-or-enable-all-ghae.png)
   {% endif %}
   {% ifversion fpt or ghec %}
3. Opcionalmente, habilite {% data variables.product.prodname_dependabot_alerts %} por padrão para novos repositórios na sua organização.
   {% ifversion fpt or ghec %}
   ![Captura de tela da opção "Habilitar por padrão" para novos repositórios](/assets/images/help/dependabot/dependabot-alerts-enable-by-default-organizations.png)
   {% endif %}

   {% endif %}
   {% ifversion fpt or ghec %}
4. Clique em **Desabilitar {% data variables.product.prodname_dependabot_alerts %}** ou **Habilitar {% data variables.product.prodname_dependabot_alerts %}** para desabilitar ou habilitar {% data variables.product.prodname_dependabot_alerts %} para todos os repositórios da sua organização.
   {% ifversion fpt or ghec %}
   ![Captura de tela do modo "Habilitar alertas do Dependabot" com botão para desabilitar ou habilitar destacado](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts-organizations.png)
   {% endif %}{% endif %}{% endif %}{% ifversion ghes or ghae %}
{% data variables.product.prodname_dependabot_alerts %} para sua organização pode ser habilitado ou desabilitado pelo proprietário da empresa. Para obter mais informações, consulte[Sobre o Dependabot para o GitHub Enterprise Server](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".
{% endif %}

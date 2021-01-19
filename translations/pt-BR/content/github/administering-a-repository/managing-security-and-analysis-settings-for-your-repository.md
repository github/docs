---
title: Gerenciando as configurações de segurança e análise do seu repositório
intro: 'Você pode controlar recursos que protegem e analisam o código em seu projeto no {% data variables.product.prodname_dotcom %}.'
permissions: Pessoas com permissões de administrador em um repositório podem gerenciar configurações de segurança e análise do repositório.
redirect_from:
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organizations-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/managing-security-vulnerabilities/managing-alerts-for-vulnerable-dependencies-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
---

{% if currentVersion == "free-pro-team@latest" %}
### Enabling or disabling security and analysis features for public repositories

You can manage a subset of security and analysis features for public repositories. Other features are permanently enabled, including dependency graph and secret scanning.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Em "Configurar recursos de segurança e análise", à direita do recurso, clique em **Desabilitar** ou **Habilitar**. !["Enable" or "Disable" button for "Configure security and analysis" features in a public repository](/assets/images/help/repository/security-and-analysis-disable-or-enable-dotcom-public.png)
{% endif %}

### Enabling or disabling security and analysis features{% if currentVersion == "free-pro-team@latest" %} for private repositories{% endif %}

You can manage the security and analysis features for your {% if currentVersion == "free-pro-team@latest" %}private or internal {% endif %}repository. If your organization or enterprise has a license for {% data variables.product.prodname_GH_advanced_security %} then extra options are available. {% data reusables.advanced-security.more-info-ghas %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Em "Configurar recursos de segurança e análise", à direita do recurso, clique em **Desabilitar** ou **Habilitar**.
{% if currentVersion == "free-pro-team@latest" %}If "{% data variables.product.prodname_secret_scanning_caps %}" is not displayed, you may need to enable {% data variables.product.prodname_GH_advanced_security %} first.
  ![Botão "Habilitar" ou "Desabilitar" para "Configurar recursos de segurança e análise" ](/assets/images/help/repository/security-and-analysis-disable-or-enable-dotcom-private.png)
  {% endif %}
  {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
  ![Botão "Habilitar" ou "Desabilitar" para "Configurar recursos de segurança e análise" ](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghe.png)
  {% endif %}

### Conceder acesso aos alertas de segurança

Depois de habilitar alertas de {% data variables.product.prodname_dependabot %} ou {% data variables.product.prodname_secret_scanning %} para um repositório em uma organização, os proprietários da organização e os administradores de repositório podem visualizar os alertas por padrão. Você pode dar acesso a outras equipes e pessoas aos alertas de um repositório.

{% note %}

Os proprietários e administradores da organização só podem conceder acesso para ver os alertas de segurança, como os alertas de {% data variables.product.prodname_dependabot %} e {% data variables.product.prodname_secret_scanning %} para pessoas ou equipes que têm acesso de gravação ao repositório.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Em "Acesso aos alertas", no campo de pesquisa, comece a digitar o nome da pessoa ou equipe que você gostaria de encontrar e, em seguida, clique em um nome na lista de correspondências.
   {% if currentVersion == "free-pro-team@latest" %}
   ![Campo de busca para conceder acesso de pessoas ou equipes aos alertas de segurança](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![Campo de busca para conceder acesso de pessoas ou equipes aos alertas de segurança](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search-ghe.png)
   {% endif %}
5. Clique em **Save changes** (Salvar alterações). ![Botão de "Salvar as alterações" para alterações nas configurações do alerta de segurança](/assets/images/help/repository/security-and-analysis-security-alerts-save-changes.png)

### Remover o acesso aos alertas de segurança

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Under "Access to alerts", to the right of the person or team whose access you'd like to remove, click
{% octicon "x" aria-label="X symbol" %}.
   {% if currentVersion == "free-pro-team@latest" %}
   ![Botãi "x" para remover o acesso de alguém aos alertas de segurança do seu repositório](/assets/images/help/repository/security-and-analysis-security-alerts-username-x.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![Botãi "x" para remover o acesso de alguém aos alertas de segurança do seu repositório](/assets/images/help/repository/security-and-analysis-security-alerts-username-x-ghe.png)
   {% endif %}

### Leia mais

- "[Sobre proteger seu repositório](/github/administering-a-repository/about-securing-your-repository)"
- "[Gerenciando configurações de segurança e análise para sua organização](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)"

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
### Habilitar ou desabilitar recursos de segurança e análise para repositórios públicos

É possível gerenciar um subconjunto de recursos de segurança e análise para repositórios públicos. Outros recursos são habilitados permanentemente, incluindo gráfico de dependências e varredura de segredo.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Em "Configurar recursos de segurança e análise", à direita do recurso, clique em **Desabilitar** ou **Habilitar**. ![Botão "Habilitar" ou "Desabilitar" para "Configurar recursos de segurança e análise" em um repositório público](/assets/images/help/repository/security-and-analysis-disable-or-enable-dotcom-public.png)
{% endif %}

### Habilitar ou desabilitar os recursos de segurança e análise{% if currentVersion == "free-pro-team@latest" %} para repositórios privados{% endif %}

Você pode gerenciar os recursos de segurança e análise do repositório {% if currentVersion == "free-pro-team@latest" %}privado ou interno {% endif %}. Se sua organização ou empresa tiver uma licença para {% data variables.product.prodname_GH_advanced_security %}, haverá opções adicionais disponíveis. {% data reusables.advanced-security.more-info-ghas %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Em "Configurar recursos de segurança e análise", à direita do recurso, clique em **Desabilitar** ou **Habilitar**.
{% if currentVersion == "free-pro-team@latest" %}Se "{% data variables.product.prodname_secret_scanning_caps %}" não for exibido, talvez seja necessário habilitar {% data variables.product.prodname_GH_advanced_security %} primeiro.
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
4. Em "Acesso aos alertas", à direita da pessoa ou da equipe cujo acesso você deseja remover, clique em
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

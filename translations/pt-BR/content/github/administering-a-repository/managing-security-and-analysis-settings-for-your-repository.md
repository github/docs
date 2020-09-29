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
---

### Habilitar ou desabilitar recursos de segurança e análise

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Em "Configurar recursos de segurança e análise", à direita do recurso, clique em **Desabilitar** ou **Habilitar**. ![Botão "Habilitar" ou "Desabilitar" para "Configurar recursos de segurança e análise" ](/assets/images/help/repository/security-and-analysis-disable-or-enable.png)

### Concessão de acesso a {% data variables.product.prodname_dependabot_alerts %}

Depois que você habilitar o {% data variables.product.prodname_dependabot_alerts %} para um repositório em uma organização, proprietários da organização e administradores de repositórios poderão ver os alertas por padrão. Você pode dar acesso a outras equipes e pessoas aos alertas de um repositório.

{% note %}

Os proprietários e administradores de repositórios da organização só podem conceder acesso para visualizar {% data variables.product.prodname_dependabot_alerts %} a pessoas ou equipes que tenham acesso de gravação no repositório.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Em "Alertas dependabot", no campo de busca, comece a digitar o nome da pessoa ou equipe que você gostaria de encontrar, em seguida, clique em um nome na lista de correspondências. ![Campo de busca para conceder acesso de pessoas ou equipes aos alertas do Dependabot](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search.png)
5. Clique em **Save changes** (Salvar alterações). ![Botão "salvar alterações" para alterações nas configurações de alerta do Dependabot](/assets/images/help/repository/security-and-analysis-security-alerts-save-changes.png)

### Revogar acesso à {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Em "Alertas dependabot", à direita da pessoa ou da equipe cujo acesso você deseja remover, clique em {% octicon "x" aria-label="X symbol" %}. ![Botão "X" para remover o acesso de alguém aos alertas do Dependabot para o seu repositório](/assets/images/help/repository/security-and-analysis-security-alerts-username-x.png)

### Leia mais

- "[Sobre proteger seu repositório](/github/administering-a-repository/about-securing-your-repository)"
- "[Gerenciando configurações de segurança e análise para sua organização](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)"

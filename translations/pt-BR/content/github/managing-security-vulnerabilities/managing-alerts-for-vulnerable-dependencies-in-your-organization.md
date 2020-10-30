---
title: Gerenciar alertas para dependências vulneráveis na organização
intro: 'Os proprietários e administradores de repositórios da organização recebem {% data variables.product.prodname_dependabot_alerts %} quando detectamos uma dependência vulnerável no repositório de uma organização. Você pode especificar outros membros ou equipes com acesso de gravação para também receber alertas de dependências vulneráveis.'
redirect_from:
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organizations-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization
versions:
  free-pro-team: '*'
---

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.repositories.you-can-manage-access-to-security-alerts %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Na barra lateral esquerda, clique em **alertas do Dependabot**. ![Aba de alertas do Dependabot na barra lateral de configurações](/assets/images/help/settings/settings-sidebar-dependabot-alerts.png)
4. Digite o nome da pessoa ou equipe que você gostaria de receber {% data variables.product.prodname_dependabot_alerts %} quando {% data variables.product.product_name %} detectar uma dependência vulnerável e, em seguida, clique no nome do usuário ou equipe para selecioná-lo.
5. Após selecionar todas as pessoas ou equipes que deseja receber {% data variables.product.prodname_dependabot_alerts %}, clique em **Salvar alterações**.

### Further reading

- "[Sobre alertas para dependências vulneráveis](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)"
- "[Exibir e atualizar dependências vulneráveis no repositório](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[Gerenciando configurações de segurança e análise para sua organização](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)"

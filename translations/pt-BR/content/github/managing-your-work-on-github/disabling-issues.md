---
title: Desabilitar problemas
intro: 'Se você não aceita contribuições ou relatórios de erros, convém desativar problemas do seu repositório.'
redirect_from:
  - /articles/disabling-issues
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Em Features (Recursos), desmarque a caixa de seleção **Issues** (Problemas). ![Caixa de seleção Remove Issues (Remover problemas)](/assets/images/help/issues/issues_settings_remove_from_repo.png)

Se você decidir habilitar problemas novamente no futuro, qualquer problema que tenha sido adicionado anteriormente ficará disponível.

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}

Entre em contato com {% data variables.contact.contact_support %} caso queira desativar problemas por causa de abuso de estranhos.
{% data reusables.policies.abuse %}

{% endtip %}

{% endif %}

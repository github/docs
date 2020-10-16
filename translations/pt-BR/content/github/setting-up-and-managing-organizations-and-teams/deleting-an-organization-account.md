---
title: Excluir uma conta de organização
intro: 'Quando você exclui uma organização, todos os repositórios, bifurcações de repositórios privados, wikis, problemas, pull requests e páginas de projeto ou de organização são excluídos também. {% if currentVersion == "free-pro-team@latest" %}O nome da organização fica disponível para uso em uma nova conta de usuário ou organização, e a cobrança será encerrada{% endif %}'
redirect_from:
  - /articles/deleting-an-organization-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% if currentVersion == "free-pro-team@latest" %}
{% tip %}

**Dica**: caso queira cancelar sua assinatura paga, [faça downgrade da sua organização para {% data variables.product.prodname_free_team %}](/articles/downgrading-your-github-subscription) em vez de excluir a organização e o conteúdo dela.

{% endtip %}

{% endif %}

### 1. Fazer backup do conteúdo da organização

Depois que você exclui uma organização, o GitHub **não pode restaurar o conteúdo que você tem lá**. Portanto, antes de excluir sua organização, verifique se que você tem na conta uma cópia de todos os repositórios, wikis e problemas.

### 2. Excluir a organização

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. Próximo à parte inferior da página de configurações da organização, clique em **Delete this Organization** (Excluir esta organização). ![Botão Delete this organization (Excluir esta organização)](/assets/images/help/settings/settings-organization-delete.png)

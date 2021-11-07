---
title: Excluir uma conta de organização
intro: 'Quando você exclui uma organização, todos os repositórios, bifurcações de repositórios privados, wikis, problemas, pull requests e páginas de projeto ou de organização são excluídos também. {% ifversion fpt or ghec %}Your billing will end, and after 90 days the organization name becomes available for use on a new user or organization account.{% endif %}'
redirect_from:
  - /articles/deleting-an-organization-account
  - /github/setting-up-and-managing-organizations-and-teams/deleting-an-organization-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Excluir conta da organização
---

{% ifversion fpt or ghec %}
{% tip %}

**Dica**: caso queira cancelar sua assinatura paga, [faça downgrade da sua organização para {% data variables.product.prodname_free_team %}](/articles/downgrading-your-github-subscription) em vez de excluir a organização e o conteúdo dela.

{% endtip %}

{% endif %}

## 1. Fazer backup do conteúdo da organização

Depois que você exclui uma organização, o GitHub **não pode restaurar o conteúdo que você tem lá**. Portanto, antes de excluir sua organização, certifique-se de ter uma cópia de todos os repositórios, wikis, problemas e quadros de projetos da conta.

## 2. Excluir a organização

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
4. Próximo à parte inferior da página de configurações da organização, clique em **Delete this Organization** (Excluir esta organização). ![Botão Delete this organization (Excluir esta organização)](/assets/images/help/settings/settings-organization-delete.png)

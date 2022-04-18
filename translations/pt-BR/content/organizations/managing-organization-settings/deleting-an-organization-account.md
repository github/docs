---
title: Excluir uma conta de organização
intro: 'Quando você exclui uma organização, todos os repositórios, bifurcações de repositórios privados, wikis, problemas, pull requests e páginas de projeto ou de organização são excluídos também. {% ifversion fpt or ghec %}Sua cobrança terminará e, após 90 dias o nome da organização estará disponível para uso em uma nova conta de usuário ou da organização.{% endif %}'
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
shortTitle: Excluir organização
---

{% ifversion fpt or ghec %}
{% tip %}

**Dica**: caso queira cancelar sua assinatura paga, [faça downgrade da sua organização para {% data variables.product.prodname_free_team %}](/articles/downgrading-your-github-subscription) em vez de excluir a organização e o conteúdo dela.

{% endtip %}

{% endif %}

## 1. Fazer backup do conteúdo da organização

{% ifversion not ghes %} Após excluir uma organização, {% data variables.product.company_short %} **não pode restaurar o seu conteúdo**. Portanto, antes de{% else %}antes de{% endif %} você excluir sua organização, certifique-se de ter uma cópia de todos os repositórios, wikis, problemas e quadros de projetos da conta.

{% ifversion ghes %}
{% note %}

**Observação:** Se necessário, um administrador do site para {% data variables.product.product_location %} poderá restaurar parcialmente uma organização excluída. Para obter mais informações, consulte "[Restaurar uma organização excluída](/admin/user-management/managing-organizations-in-your-enterprise/restoring-a-deleted-organization)".

{% endnote %}
{% endif %}

## 2. Excluir a organização

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
4. Próximo à parte inferior da página de configurações da organização, clique em **Delete this Organization** (Excluir esta organização). ![Botão Delete this organization (Excluir esta organização)](/assets/images/help/settings/settings-organization-delete.png)

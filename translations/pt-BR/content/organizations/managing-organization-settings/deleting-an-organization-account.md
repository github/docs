---
title: Como excluir uma conta da organização
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
shortTitle: Delete organization
ms.openlocfilehash: e923dcf7fb9135243c5bfe0e68a310719e87ef2e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145093234'
---
{% ifversion fpt or ghec %} {% tip %}

**Dica**: caso deseje cancelar sua assinatura paga, [faça o downgrade da sua organização para o {% data variables.product.prodname_free_team %}](/articles/downgrading-your-github-subscription) em vez de excluir a organização e o conteúdo.

{% endtip %}

{% endif %}

## 1. Fazer backup do conteúdo da sua organização

{% ifversion not ghes %} Depois que você excluir uma organização, o {% data variables.product.company_short %} **não poderá restaurar seu conteúdo**. Portanto, antes de{% else %}antes de{% endif %} você excluir sua organização, certifique-se de ter uma cópia de todos os repositórios, wikis, problemas e quadros de projetos da conta.

{% ifversion ghes %} {% note %}

**Observação:** se necessário, um administrador do site do {% data variables.product.product_location %} poderá restaurar parcialmente uma organização excluída. Para obter mais informações, confira "[Como restaurar uma organização excluída](/admin/user-management/managing-organizations-in-your-enterprise/restoring-a-deleted-organization)".

{% endnote %} {% endif %}

## 2. Excluir a organização

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
4. Na parte inferior da página de configurações da organização, clique em **Excluir esta Organização**.
   ![Botão Excluir esta Organização](/assets/images/help/settings/settings-organization-delete.png)

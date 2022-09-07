---
title: Remover um integrante da organização
intro: 'Se integrantes não precisarem mais acessar os repositórios pertencentes à organização, você poderá removê-los da organização.'
redirect_from:
  - /articles/removing-a-member-from-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/removing-a-member-from-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Remove a member
permissions: Organization owners can remove members from an organization.
ms.openlocfilehash: 4266172bc2bae6fb95506b98309533919309ccfc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064695'
---
{% ifversion fpt or ghec %}

{% warning %}

**Aviso:** quando você remove membros de uma organização:
- O número de licenças pagas não faz o downgrade automaticamente. Para pagar menos licenças depois de remover usuários da sua organização, siga as etapas descritas em "[Como fazer downgrade das estações pagas da sua organização](/articles/downgrading-your-organization-s-paid-seats)".
- Os integrantes removidos perderão o acesso às bifurcações privadas dos repositórios privados da sua organização, mas ainda poderão ter cópias locais. No entanto, eles não conseguem sincronizar as cópias locais com os repositórios da organização. Os forks privados poderão ser restaurados se o usuário for [reintegrado como membro da organização](/articles/reinstating-a-former-member-of-your-organization) no prazo de três meses depois de ele ser removido da organização. Em última análise, você é responsável por garantir que as pessoas que perderam o acesso a um repositório excluam qualquer informação confidencial ou de propriedade intelectual.
- Quando repositórios privados são bifurcados para outras organizações, elas são capazes de controlar o acesso à rede de bifurcação. Isso significa que os usuários podem reter o acesso às bifurcações mesmo depois de perderem o acesso à organização original porque ainda terão acesso explícito por meio de uma bifurcação. {%- ifversion ghec %}
-  Os integrantes removidos também perderão acesso a bifurcações privadas dos repositórios internos da sua organização, se o integrante removido não for integrante de qualquer outra organização pertencente à mesma conta corporativa. Para obter mais informações, confira "[Sobre as contas corporativas](/admin/overview/about-enterprise-accounts)".
{%- endif %}
- Quaisquer convites para organizações enviados por um integrante removido que não foram aceitos, serão cancelados e não serão acessíveis.

{% endwarning %}

{% else %}

{% warning %}

**Aviso:** quando você remove membros de uma organização:
 - Os integrantes removidos perderão o acesso às bifurcações privadas dos repositórios privados da sua organização, mas ainda poderão ter cópias locais. No entanto, eles não conseguem sincronizar as cópias locais com os repositórios da organização. Os forks privados poderão ser restaurados se o usuário for [reintegrado como membro da organização](/articles/reinstating-a-former-member-of-your-organization) no prazo de três meses depois de ele ser removido da organização. Em última análise, você é responsável por garantir que as pessoas que perderam o acesso a um repositório excluam qualquer informação confidencial ou de propriedade intelectual.
- Os integrantes removidos também perderão acesso a bifurcações privadas dos repositórios internos da sua organização, se o integrante removido não for um integrante de outra organização na sua empresa.
 - Quaisquer convites para organizações enviados pelo usuário removido, que não foram aceitos, serão cancelados e não serão acessíveis.

{% endwarning %}

{% endif %}

{% ifversion fpt or ghec %}

Para auxiliar a transição e garantir a exclusão das informações confidenciais ou de propriedade intelectual, recomendamos o compartilhamento de uma lista de práticas recomendadas ao sair da organização com o usuário que está sendo removido. Para ver um exemplo, confira "[Melhores práticas para sair da sua empresa](/articles/best-practices-for-leaving-your-company/)".

{% endif %}

{% data reusables.organizations.data_saved_for_reinstating_a_former_org_member %}

## Revogar a associação do usuário

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Selecione um ou mais integrantes que deseja remover da organização.
  ![Lista de membros com dois membros selecionados](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. Acima da lista de membros, use o menu suspenso e clique em **Remover da organização**.
  ![Menu suspenso com a opção para remover membros](/assets/images/help/teams/user-bulk-management-options.png)
6. Revise os membros que serão removidos da organização e clique em **Remover membros**.
  ![Lista de membros que serão removidos e botão Remover membros](/assets/images/help/teams/confirm-remove-members-bulk.png)

## Leitura adicional

- "[Como remover membros da organização de uma equipe](/articles/removing-organization-members-from-a-team)"{% ifversion remove-enterprise-members %}
- "[Como remover um membro da sua empresa](/admin/user-management/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise)"{% endif %}

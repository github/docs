---
title: Gerenciar a política de bifurcação da sua organização
intro: 'Você pode permitir ou impedir a bifurcação de qualquer repositório privado{% ifversion ghes or ghae or ghec %} e interno{% endif %} pertencente à sua organização.'
redirect_from:
  - /articles/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-forking-policy-for-your-organization
permissions: Organization owners can manage the forking policy for an organization.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage forking policy
ms.openlocfilehash: 11aad8ee3c08b62f6bc352f91b6d804f35eee6e6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145095623'
---
Por padrão, as novas organizações são configuradas para não permitirem a criação de forks de repositórios privados{% ifversion ghes or ghec or ghae %} e internos{% endif %}.

Se você permitir a criação de forks de repositórios privados{% ifversion ghes or ghec or ghae %} e internos{% endif %} no nível da organização, também poderá configurar a capacidade de criar forks de um repositório privado{% ifversion ghes or ghec or ghae %} ou interno{% endif %} específico. Para obter mais informações, confira "[Como gerenciar a política de criação de forks para seu repositório](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)".

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.profile.org_member_privileges %}
1. Em "Criação de forks do repositório", selecione **Permitir a criação de forks de repositórios privados {% ifversion ghec or ghes or ghae %}e internos{% endif %}** .

   {%- ifversion fpt %} ![Caixa de seleção usada para permitir ou não a criação de forks na organização](/assets/images/help/repository/allow-disable-forking-fpt.png) {%- elsif ghes or ghec or ghae %} ![Caixa de seleção usada para permitir ou não a criação de forks na organização](/assets/images/help/repository/allow-disable-forking-organization.png) {%- endif %}
6. Clique em **Salvar**.

## Leitura adicional

- "[Sobre os forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)"
- "[Funções de repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"

---
title: Convidar pessoas para gerenciar sua empresa
intro: 'Você pode {% ifversion ghec %}convidar pessoas para se tornarem proprietários corporativos ou gerentes de cobrança para{% elsif ghes %}adicionar proprietários corporativos à conta corporativa{% endif %}. Você também pode remover proprietários corporativos {% ifversion ghec %}ou gerentes de cobrança {% endif %}que não precisam mais de acesso à conta corporativa.'
permissions: 'Enterprise owners can {% ifversion ghec %}invite other people to become{% elsif ghes %}add{% endif %} additional enterprise administrators.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/inviting-people-to-manage-your-enterprise-account
  - /articles/inviting-people-to-collaborate-in-your-business-account
  - /articles/inviting-people-to-manage-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - User account
shortTitle: Invite people to manage
ms.openlocfilehash: 7cdbee6f1b37a8300f3523712c6e0dda4293af74
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180444'
---
## Sobre os usuários que podem gerenciar a sua conta corporativa

{% data reusables.enterprise-accounts.enterprise-administrators %} Para obter mais informações, confira "[Funções em uma empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)".

{% ifversion ghes %}

Se você quiser gerenciar proprietários e gerentes de cobrança de uma conta corporativa no {% data variables.product.prodname_dotcom_the_website %}, confira "[Convidando pessoas para gerenciar sua empresa](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)" na documentação do {% data variables.product.prodname_ghe_cloud %}.

{% endif %}

{% ifversion ghec %}

Se sua empresa usa {% data variables.product.prodname_emus %}, os proprietários da empresa só poderão ser adicionados ou removidos por meio do seu provedor de identidade. Para obter mais informações, confira "[Sobre as {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)".

{% endif %}

{% tip %}

**Dica:** para obter mais informações sobre como gerenciar usuários em uma organização de propriedade da sua conta corporativa, veja "[Como gerenciar a associação em sua organização](/articles/managing-membership-in-your-organization)" e "[Como gerenciar o acesso das pessoas à sua organização com funções](/articles/managing-peoples-access-to-your-organization-with-roles)".

{% endtip %}

## {% ifversion ghec %}Convidando{% elsif ghes %}adicionando{% endif %} um administrador corporativo à sua conta corporativa

{% ifversion ghec %}Depois de convidar alguém para ingressar na conta corporativa, a pessoa deverá aceitar o convite por email para acessar a conta corporativa. Convites pendentes vencem após 7 dias.{% endif %}

{% ifversion enterprise-membership-view-improvements %} Você pode ver todos os convites pendentes para se tornar um administrador da sua conta corporativa. Para obter mais informações, confira "[Como ver os funcionários da sua empresa](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-pending-invitations)".
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
1. Acima da lista de administradores, clique em {% ifversion ghec %}**Convidar administrador**{% elsif ghes %}**Adicionar proprietário**{% endif %}.
  {% ifversion ghec %} ![Botão "Convidar administrador" acima da lista de proprietários da empresa](/assets/images/help/business-accounts/invite-admin-button.png) {% elsif ghes %} ![Botão "Adicionar proprietário" acima da lista de proprietários da empresa](/assets/images/help/business-accounts/add-owner-button.png) {% endif %}
1. Digite o nome de usuário, nome completo ou endereço de e-mail da pessoa que você quer convidar para ser um administrador corporativo e depois selecione a pessoa adequada a partir dos resultados.
  ![Caixa de diálogo modal com campo para digitar o nome de usuário, nome completo ou endereço de email da pessoa e o botão Convidar](/assets/images/help/business-accounts/invite-admins-modal-button.png){% ifversion ghec %}
1. Selecione **Proprietário** ou **Gerente de Cobrança**.
  ![Caixa de diálogo modal com opções de funções](/assets/images/help/business-accounts/invite-admins-roles.png)
1. Clique em **Enviar Convite**.
  ![Botão Enviar convite](/assets/images/help/business-accounts/invite-admins-send-invitation.png){% endif %}{% ifversion ghes %}
1. Clique em **Adicionar**.
  ![Botão "Adicionar"](/assets/images/help/business-accounts/add-administrator-add-button.png){% endif %}

## Remover um administrador de sua conta corporativa

Somente proprietários corporativos podem remover outros administradores corporativos da conta corporativa.

{% ifversion ghec %} Se o administrador que você deseja remover for um membro de qualquer organização pertencente à empresa, você poderá escolher **Converter em membro**, o que removerá a função administrativa, mas manterá suas associações da organização ou **Remover da empresa**, o que removerá suas associações administrativas e organizacionais.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
1. Ao lado do nome de usuário da pessoa que você deseja remover, clique em {% octicon "gear" aria-label="The Settings gear" %} e, em seguida, clique em {% ifversion ghes %}**Remover proprietário**{% elsif ghec %}**Converter em membro** ou **Remover da empresa**. {% endif %}.
  {% ifversion ghec %} ![Engrenagem de configurações com a opção de menu para remover um administrador da empresa](/assets/images/help/business-accounts/remove-admin.png) {% elsif ghes %} ![Engrenagem de configurações com a opção de menu para remover um administrador da empresa](/assets/images/help/business-accounts/ghes-remove-owner.png) {% endif %}
1. Leia a confirmação e clique em {% ifversion ghes %}**Remover proprietário**{% elsif ghec %}**Sim, converter NOME DE USUÁRIO em membro**{% endif %}.

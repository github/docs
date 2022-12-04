---
title: Gerenciando associações de equipes com grupos de provedores de identidade
shortTitle: Manage teams with your IdP
intro: 'Você pode gerenciar a associação à equipe e à organização no {% data variables.product.product_name %} por meio do IdP (provedor de identidade) conectando os grupos de IdP às equipes no {% data variables.enterprise.prodname_emu_enterprise %}.'
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/managing-team-memberships-with-identity-provider-groups
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - SSO
  - Teams
ms.openlocfilehash: 179835d6642cd5718a565869337b5420b29407a5
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160821'
---
## Sobre o gerenciamento da equipe com {% data variables.product.prodname_emus %}

Com o {% data variables.product.prodname_emus %}, você pode gerenciar a associação à equipe e à organização na sua empresa por meio do IdP conectando as equipes do {% data variables.product.prodname_dotcom %} aos grupos de IdP. Quando conectar uma equipe de uma das organizações da sua empresa a um grupo do IdP as alterações nos integrantes do grupo do IdP serão refletidas na sua empresa automaticamente, reduzindo a necessidade de atualizações manuais e scripts personalizados. 

Quando uma alteração em um grupo de IdP ou uma nova conexão de equipe fizer com que o {% data variables.enterprise.prodname_managed_user %} ingresse em uma equipe de uma organização da qual já não faz parte, o {% data variables.enterprise.prodname_managed_user %} será adicionado à organização automaticamente. Ao desconectar um grupo de uma equipe, usuários que se tornaram integrantes da organização por da associação da equipe são removidos da organização se uma associação não lhes for atribuída na organização por outros meios.

{% note %}

**Observação:** os proprietários da organização também podem adicionar {% data variables.enterprise.prodname_managed_users %} às organizações manualmente, desde que as contas já tenham sido provisionadas por meio do SCIM.

{% endnote %}

Quando o integrante do grupo mudar no seu IdP, este enviará uma solicitação de SCIM com alterações para {% data variables.product.prodname_dotcom_the_website %} de acordo com o cronograma determinado pelo seu IdP. Portanto, é possível que a alteração não seja imediata. Qualquer solicitação que altere a equipe de equipe ou associação da organização será registrada no log de auditoria como alterações feitas pela conta usada para configurar provisionamento do usuário.

As quipes conectadas a grupos de IdP não podem ser equipes principais de outras equipes nem uma equipe secundária de outra equipe. Se a equipe que você deseja conectar a um grupo de IdP for uma equipe principal ou secundária recmendamos criar uma nova equipe ou remover a relação aninhada que faças da sua equipe uma equipe principal.

Para gerenciar o acesso ao repositório para qualquer equipe do seu negócio, incluindo equipes conectadas a um grupo de IdP, você deverá fazer alterações em {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, confira "[Como gerenciar o acesso da equipe a um repositório da organização](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)".

## Requisitos para conectar grupos de IdP às equipes

Para conectar um grupo de IdP a uma equipe no {% data variables.product.prodname_dotcom %}, você precisa atribuir o grupo ao aplicativo {% data variables.product.prodname_emu_idp_application %} no IdP. Para obter mais informações, confira "[Sobre o provisionamento do SCIM para o {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-scim-provisioning-for-enterprise-managed-users)".

É possível conectar uma equipe da sua empresa a um grupo de IdP. Você pode atribuir o mesmo grupo do IdP a várias equipes na sua empresa.

Se você estiver conectando uma equipe existente a um grupo de IdP, primeiro você deverá remover todos os integrantes que foram adicionados manualmente. Depois de conectar uma equipe da sua empresa a um grupo do IdP, o administrador do IdP deverá realizar as alterações na associação da equipe por meio do provedor de identidade. Você não pode gerenciar a associação da equipe em {% data variables.product.prodname_dotcom_the_website %}.

## Criando uma nova equipe conectada a um grupo de IdP

Qualquer integrante de uma organização pode criar uma nova equipe e conectar a equipe a um grupo de IdP. 

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %} {% data reusables.organizations.team_description %}
1. Para conectar uma equipe, selecione o menu suspenso "Grupos de Fornecedores de Identidade" e clique na equipe que você deseja se conectar.
    ![Menu suspenso usado para escolher grupos de provedores de identidade](/assets/images/help/teams/choose-an-idp-group.png) {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create_team %}

## Gerenciando a conexão entre uma equipe existente e um grupo de IdP

Os proprietários da organização e mantenedores de equipe podem gerenciar a conexão existente entre um grupo de IdP e uma equipe.

{% note %}

**Observação**: para conectar uma equipe existente no {% data variables.product.prodname_dotcom_the_website %} a um grupo de IdP pela primeira vez, todos os membros da equipe no {% data variables.product.prodname_dotcom_the_website %} devem primeiro ser removidos. Para obter mais informações, confira "[Como remover membros da organização de uma equipe](/github/setting-up-and-managing-organizations-and-teams/removing-organization-members-from-a-team)".

{% endnote %}

{% data reusables.profile.access_profile %}

{% data reusables.profile.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %}
1. Opcionalmente, em "Grupo de Provedores de Identidade", à direita do grupo do IdP que deseja desconectar, clique em {% octicon "x" aria-label="X symbol" %}. 
    ![Cancelar a seleção de um grupo de IdP conectado da equipe do GitHub](/assets/images/enterprise/github-ae/teams/unselect-idp-group.png)
1. Para conectar um grupo de IdP, em "Grupo de Fornecedores de Identidade", selecione o menu suspenso e clique em um grupo de provedores de identidade da lista.
    ![Menu suspenso usado para escolher o grupo de provedores de identidade](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png)
1. Clique em **Salvar alterações**.

## Visualizando grupos de IdP, associações de grupo e equipes conectadas

Você pode revisar uma lista de grupos de IdP, ver todas as equipes conectadas a um grupo de IdP, e ver a associação de cada grupo IdP no {% data variables.product.product_name %}. Você deve editar a associação de um grupo no seu IdP.

{% data reusables.enterprise-accounts.access-enterprise %}
1. Para revisar uma lista de grupos de IdP, na barra lateral esquerda, clique em {% octicon "key" aria-label="The key icon" %} **Provedor de Identidade**.
    ![Captura de tela mostrando a guia "Provedor de identidade" na barra lateral da empresa](/assets/images/help/enterprises/enterprise-account-identity-provider-tab.png)
2. Para ver os integrantes e equipes conectados a um grupo do IdP, clique no nome do grupo.
    ![Captura de tela que mostra a lista de grupos de IdP; o nome do grupo está destacado](/assets/images/help/enterprises/select-idp-group.png)
4. Para ver as equipes conectadas ao grupo de IdP, clique em **Equipes**. 
    ![Captura de tela mostrando o botão "Equipes"](/assets/images/help/enterprises/idp-groups-team-switcher.png)

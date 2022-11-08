---
title: Sincronizar uma equipe com um grupo de provedor de identidade
intro: 'Você pode sincronizar uma equipe do {% data variables.product.product_name %} com um grupo de IdPs (provedores de identidade) com suporte para adicionar e remover automaticamente os membros da equipe.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/synchronizing-a-team-with-an-identity-provider-group
permissions: 'Organization owners and team maintainers can synchronize a {% data variables.product.prodname_dotcom %} team with an IdP group.'
versions:
  ghae: '*'
  ghec: '*'
  feature: scim-for-ghes
topics:
  - Organizations
  - Teams
shortTitle: Synchronize with an IdP
ms.openlocfilehash: c4ea8dc13eee674b962108ba52c71e67e8462b87
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106978'
---
{% data reusables.enterprise-accounts.emu-scim-note %}

## Sobre a sincronização de equipes

{% data reusables.identity-and-permissions.about-team-sync %}

{% ifversion ghec %}Você pode conectar até cinco grupos de IdP a uma equipe de {% data variables.product.product_name %}.{% elsif ghae %}Você pode conectar uma equipe em {% data variables.product.product_name %} a um grupo de IdP. Todos os usuários do grupo são automaticamente adicionados à equipe e também adicionados à organização principal como integrantes. Ao desconectar um grupo de uma equipe, os usuários que se tornaram integrantes da organização por meio da associação da equipe serão removidos da organização.{% endif %} Você pode atribuir um grupo de IdP a várias equipes de {% data variables.product.product_name %}.

{% ifversion ghec %}A sincronização de equipes não é compatível com grupos de IdP com mais de 5000 integrantes.{% endif %}

Uma vez que uma equipe do {% data variables.product.prodname_dotcom %} está conectada a um grupo de IdP, o administrador do IdP deve efetuar as alterações da associação da equipe por meio do provedor de identidade. Você não pode gerenciar a associação da equipe em {% data variables.product.product_name %}{% ifversion ghec %} ou usando a API{% endif %}.

{% ifversion ghec %}{% data reusables.enterprise-accounts.team-sync-override %}{% endif %}

{% ifversion ghec %} Todas as alterações de associação a uma equipe feitas por meio do IdP serão exibidas no log de auditoria do {% data variables.product.product_name %} como alterações feitas pelo bot de sincronização da equipe. Seu IdP enviará dados de membros da equipe para {% data variables.product.prodname_dotcom %} uma vez a cada hora.
A conexão de uma equipe a um grupo de IdP pode remover alguns integrantes da equipe. Para obter mais informações, confira "[Requisitos para membros de equipes sincronizadas](#requirements-for-members-of-synchronized-teams)".
{% endif %}

{% ifversion ghae %} Quando a associação a um grupo for alterada no IdP, ele enviará uma solicitação do SCIM com as alterações para o {% data variables.product.product_name %} de acordo com o agendamento determinado pelo IdP. Qualquer solicitação que altere a equipe de {% data variables.product.prodname_dotcom %} equipe ou associação da organização será registrada no log de auditoria como alterações feitas pela conta usada para configurar provisionamento do usuário. Para obter mais informações sobre essa conta, confira "[Como configurar o provisionamento de usuário para sua empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise)". Para obter mais informações sobre agendamentos de solicitação do SCIM, confira "[Verificar o status do provisionamento de usuário](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/application-provisioning-when-will-provisioning-finish-specific-user)" no Microsoft Docs.{% endif %}

As equipes principais não podem sincronizar com grupos de IdP. Se a equipe que você deseja conectar a um grupo IdP for uma equipe principal, recomendamos criar uma equipe nova ou remover as relações aninhadas que fazem da sua equipe uma equipe principal. Para obter mais informações, confira "[Sobre as equipes](/articles/about-teams#nested-teams)", "[Como criar uma equipe](/organizations/organizing-members-into-teams/creating-a-team)" e "[Como mover uma equipe na hierarquia da sua organização](/articles/moving-a-team-in-your-organizations-hierarchy)".

Para gerenciar o acesso ao repositório de qualquer equipe do {% data variables.product.prodname_dotcom %} incluindo equipes conectadas a um grupo de IdP, você deve fazer alterações com o {% data variables.product.product_name %}. Para obter mais informações, confira "[Sobre as equipes](/articles/about-teams)" e "[Como gerenciar o acesso da equipe a um repositório da organização](/articles/managing-team-access-to-an-organization-repository)". 

{% ifversion ghec %}Você também pode gerenciar a sincronização de equipes com a API. Para obter mais informações, confira "[Sincronização da equipe](/rest/reference/teams#team-sync)".{% endif %}

{% ifversion ghec %}
## Requisitos para integrantes de equipes sincronizadas

Depois que você conectar uma equipe a um grupo de IdPs, a sincronização da equipe adicionará cada membro do grupo de IdPs à equipe correspondente no {% data variables.product.product_name %} somente se:
- A pessoa for membro da organização no {% data variables.product.product_name %}.
- A pessoa já tiver feito logon com a conta pessoal no {% data variables.product.product_name %} e se autenticado na organização ou na conta corporativa por meio do logon único do SAML, pelo menos uma vez.
- A identidade SSO da pessoa é um integrante do grupo IdP.  

As equipes ou os membros de grupos existentes que não atenderem a esses critérios serão removidos automaticamente da equipe no {% data variables.product.product_name %} e perderão o acesso aos repositórios. Revogar a identidade vinculada a um usuário também removerá o usuário de quaisquer equipes mapeadas com os grupos de IdP. Para obter mais informações, confira "[Como ver e gerenciar o acesso do SAML de um membro à sua organização](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)" e "[Como ver e gerenciar o acesso do SAML de um usuário à sua empresa](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-a-linked-identity)".

Um integrante removido da equipe pode ser adicionado de volta a uma equipe automaticamente após efetuar a autenticação na conta da organização ou na conta corporativa usando SSO e será movidos para o grupo de IdP conectado.

Para evitar a remoção involuntária dos integrantes da equipe, recomendamos a aplicar SSO SAML na conta da organização ou da empresa. criar novas equipes para sincronizar dados da associação e verificar a associação de grupo de IdP antes de sincronizar as equipes existentes. Para obter mais informações, confira "[Como impor o logon único do SAML para sua organização](/articles/enforcing-saml-single-sign-on-for-your-organization)" e "[Como configurar o logon único do SAML para sua empresa](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

{% endif %}

## Pré-requisitos

{% ifversion ghec %} Para você conectar uma equipe do {% data variables.product.product_name %} a um grupo do provedor de identidade, o proprietário de uma organização ou de uma empresa precisará habilitar a sincronização da equipe na sua organização ou conta corporativa. Para obter mais informações, confira "[Como gerenciar a sincronização da equipe para sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)" e "[Como gerenciar a sincronização da equipe para organizações na sua conta corporativa](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)".

Para evitar a remoção involuntária dos integrantes da equipe, visite o portal administrativo do seu IdP e confirme se cada integrante atual da equipe está também nos grupos de IdP aos quais você deseja conectar a esta equipe. Se você não tiver acesso ao provedor de identidade, entre em contato com o administrador do IdP.

Você deve efetuar a autenticação usando SAML SSO. Para obter mais informações, confira "[Autenticação com o logon único do SAML](/articles/authenticating-with-saml-single-sign-on)".

{% elsif ghae %} Para conectar uma equipe do {% data variables.product.product_name %} a um grupo do IdP, primeiro, você precisa configurar o provisionamento de usuários para {% data variables.location.product_location %} usando um SCIM (Sistema de Gerenciamento de Usuários entre Domínios) compatível. Para obter mais informações, confira "[Como configurar o provisionamento de usuário para sua empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise)".

Quando o provisionamento de {% data variables.product.product_name %} for configurado usando o SCIM, você poderá atribuir o aplicativo de {% data variables.product.product_name %} a cada grupo de IdP que você deseja usar em {% data variables.product.product_name %}. Para obter mais informações, confira [Configurar o provisionamento automático de usuários para o GitHub AE](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-ae-provisioning-tutorial#step-5-configure-automatic-user-provisioning-to-github-ae) no Microsoft Docs.

{% elsif scim-for-ghes %} Você precisa configurar o provisionamento de usuários com o SCIM para {% data variables.location.product_location %}. Para obter mais informações, confira "[Como configurar o provisionamento de usuários com o SCIM na empresa](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise)".

{% data reusables.scim.ghes-beta-note %} {% endif %}

## Conectar um grupo de IdP a uma equipe

Ao conectar um grupo de IdP a uma equipe de {% data variables.product.product_name %}, todos os usuários do grupo serão automaticamente adicionados à equipe. {% ifversion ghae %}Todos os usuários que não eram integrantes dos da organização principal também serão adicionados à organização.{% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %} {% ifversion ghec %}
6. Em "Grupos de provedores de identidade", use o menu suspenso e selecione até 5 grupos de provedores de identidade.
    ![Menu suspenso usado para escolher grupos de provedores de identidade](/assets/images/help/teams/choose-an-idp-group.png){% elsif ghae %}
6. No "Grupo de Provedores de Identidade", use o menu suspenso e selecione um grupo de provedores de identidade na lista.
    ![Menu suspenso usado para escolher um grupo de provedores de identidade](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png){% endif %}
7. Clique em **Salvar alterações**.

## Desconectar um grupo de IdP de uma equipe

Se desconectar um grupo de IdP de uma equipe do {% data variables.product.prodname_dotcom %}, os integrantes da equipe atribuídos à equipe do {% data variables.product.prodname_dotcom %} por meio do grupo de IdP serão removidos da equipe. {% ifversion ghae %} Todos os usuários que eram integrantes da organização principal apenas por causa da conexão com a equipe também serão removidos da organização.{% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %} {% ifversion ghec %}
6. Em "Grupos de Provedores de Identidade", à direita do grupo de IdPs que deseja desconectar, clique em {% octicon "x" aria-label="X symbol" %}. 
    ![Cancelar a seleção de um grupo de IdPs conectado por meio da equipe do GitHub](/assets/images/help/teams/unselect-idp-group.png){% elsif ghae %}
6. Em "Grupo de Provedores de Identidade", à direita do grupo de IdP que você deseja desconectar, clique em {% octicon "x" aria-label="X symbol" %}. 
    ![Cancelar a seleção de um grupo de IdPs conectado por meio da equipe do GitHub](/assets/images/enterprise/github-ae/teams/unselect-idp-group.png){% endif %}
7. Clique em **Salvar alterações**.

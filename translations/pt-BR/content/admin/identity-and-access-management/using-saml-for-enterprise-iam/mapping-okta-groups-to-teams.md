---
title: Mapeando grupos do Okta com as equipes
shortTitle: Map Okta groups to teams
intro: 'Você pode mapear os seus grupos do Okta com as equipes em {% data variables.product.prodname_ghe_managed %} para adicionar e remover automaticamente os integrantes da equipe.'
permissions: 'Enterprise owners can configure authentication and provisioning for {% data variables.product.prodname_ghe_managed %}.'
versions:
  ghae: '*'
redirect_from:
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 43185a1593892086064588ceb593a72b9d93ea3f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145094933'
---
{% data reusables.saml.okta-ae-sso-beta %}

## Sobre o mapeamento de equipe

Se você usar o Okta como seu IdP, você poderá mapear seu grupo do Okta com uma equipe em {% data variables.product.prodname_ghe_managed %}. Os integrantes do grupo do Okta irão tornar-se automaticamente integrantes da equipe de {% data variables.product.prodname_ghe_managed %} mapeada. Para configurar este mapeamento, você pode configurar o aplicativo do Okta "GitHub AE" para fazer envio por push do grupo e dos seus integrantes para {% data variables.product.prodname_ghe_managed %}. Em seguida, você pode escolher qual equipe em {% data variables.product.prodname_ghe_managed %} será mapeada com o grupo do Okta.

## Pré-requisitos

Você ou o administrador do Okta deve ser um administrador global ou um administrador de Função Privilegiada no Okta.
 
Você deve habilitar o logon único SAML com o Okta. Para obter mais informações, confira "[Como configurar o logon único do SAML para sua empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

Você deve efetuar a autenticação na sua conta corporativa usando SAML SSO e o Okta. Para obter mais informações, confira "[Autenticação com o logon único do SAML](/github/authenticating-to-github/authenticating-with-saml-single-sign-on)".

## Atribuindo o seu grupo Okta ao aplicativo "GitHub AE"

1. No painel do Okta, abra as configurações do seu grupo.
1. Clique em **Gerenciar Aplicativos**.
  ![Adicionar grupo ao aplicativo](/assets/images/help/saml/okta-ae-group-add-app.png)

1. À direita de "GitHub AE", clique em **Atribuir**.

  ![Atribuir aplicativo](/assets/images/help/saml/okta-ae-assign-group-to-app.png)

1. Clique em **Concluído**.

## Fazendo envio por push do grupo do Okta para {% data variables.product.prodname_ghe_managed %}

Ao fazer envio por push de um grupo do Okta e mapear o grupo com uma equipe, todos os integrantes do grupo poderão efetuar o login em {% data variables.product.prodname_ghe_managed %}.

{% data reusables.saml.okta-ae-applications-menu %} {% data reusables.saml.okta-ae-configure-app %}

1. Clique em **Efetuar Push de Grupos**.

  ![Aba de Grupos Push](/assets/images/help/saml/okta-ae-push-groups-tab.png)

1. Selecione o menu suspenso Efetuar Push de Grupos e clique em **Localizar grupos por nome**.

  ![Adicionar botão do grupo](/assets/images/help/saml/okta-ae-push-groups-add.png)

1. Digite o nome do grupo para efetuar push dele para o {% data variables.product.prodname_ghe_managed %} e clique em **Salvar**.

  ![Adicionar nome do grupo](/assets/images/help/saml/okta-ae-push-groups-by-name.png)

## Mapeando uma equipe para o grupo do Okta

Você pode mapear uma equipe na sua empresa com um grupo do Okta que você enviou por push anteriormente para {% data variables.product.prodname_ghe_managed %}. Os integrantes do grupo doOkta irão tornar-se automaticamente integrantes da equipe de {% data variables.product.prodname_ghe_managed %}. Todas as alterações subsequentes na associação do grupo do Okta serão automaticamente sincronizadas com a equipe de {% data variables.product.prodname_ghe_managed %}.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %}
6. Em "Grupo de Provedores de identidade", selecione o menu suspenso e clique em um grupo de provedores de identidade.
    ![Menu suspenso usado para escolher o grupo de provedores de identidade](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png)
7. Clique em **Salvar alterações**.

## Verificando o status das suas equipes mapeadas

Os proprietários de empresas podem usar o painel de administração do site para verificar como os grupos do Okta são mapeados com as equipes em {% data variables.product.prodname_ghe_managed %}.

1. Para acessar o painel, no canto superior direito de qualquer página, clique em {% octicon "rocket" aria-label="The rocket ship" %}.
  ![Ícone de foguete usado para acessar as configurações de administrador do site](/assets/images/enterprise/site-admin-settings/access-new-settings.png)

1. No painel esquerdo, clique em **Grupos externos**.

  ![Adicionar nome do grupo](/assets/images/help/saml/okta-ae-site-admin-external-groups.png)

1. Para visualizar mais informações sobre um grupo, na lista de grupos externos, clique em um grupo.

  ![Lista de grupos externos](/assets/images/help/saml/okta-ae-site-admin-list-groups.png)

1. Os detalhes do grupo incluem o nome do grupo do Okta, uma lista dos usuários do Okta que são integrantes do grupo, e a equipe correspondente mapeada em {% data variables.product.prodname_ghe_managed %}. 

  ![Lista de grupos externos](/assets/images/help/saml/okta-ae-site-admin-group-details.png)

## Visualizando eventos de log de auditoria para grupos mapeados

 Para monitorar a atividade de SSO para grupos mapeados, você pode revisar os seguintes eventos no log de auditoria de {% data variables.product.prodname_ghe_managed %}.

{% data reusables.saml.external-group-audit-events %}

{% data reusables.saml.external-identity-audit-events %}

Para obter mais informações, confira "[Como revisar o log de auditoria para sua organização](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization)".

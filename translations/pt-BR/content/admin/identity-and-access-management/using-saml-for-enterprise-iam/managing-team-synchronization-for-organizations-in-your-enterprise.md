---
title: Gerenciando a sincronização de equipes para organizações da sua empresa
intro: 'É possível habilitar a sincronização de equipes entre o Azure AD e o {% data variables.product.product_name %} para permitir que organizações pertencentes à sua conta corporativa gerenciem a associação de equipes por meio de grupos IdP.'
permissions: Enterprise owners can manage team synchronization for an enterprise account.
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - SSO
  - Teams
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/managing-team-synchronization-for-organizations-in-your-enterprise-account
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise
shortTitle: Manage team synchronization
ms.openlocfilehash: 1e29d70b0b8fcf78a8b03834e9436112634c636f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147076932'
---
{% data reusables.enterprise-accounts.emu-scim-note %}

## Sobre a sincronização de equipes para contas corporativas

Se você usar o SAML no nível empresarial com o Azure AD como seu IdP, poderá habilitar a sincronização de equipes para sua conta corporativa para permitir que os proprietários da organização e mantenedores de equipe sincronizem as equipes nas organizações pertencentes às contas corporativas com os grupos de IdP.

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

{% data reusables.identity-and-permissions.team-sync-disable %}

Você também pode configurar e gerenciar a sincronização da equipe para uma organização individual. Para obter mais informações, confira "[Como gerenciar a sincronização da equipe para sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)".

{% data reusables.identity-and-permissions.team-sync-usage-limits %}

## Pré-requisitos

Você ou o administrador do Azure AD deve ser um administrador global ou um administrador com função privilegiada no Azure AD.
 
Você deve aplicar o logon único SAML para organizações na sua conta corporativa com o IdP compatível. Para obter mais informações, confira "[Como configurar o logon único do SAML para sua empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

Você deve efetuar a autenticação na sua conta corporativa usando o SAML SSO e o IdP compatível. Para obter mais informações, confira "[Autenticação com o logon único do SAML](/articles/authenticating-with-saml-single-sign-on)".

## Gerenciar a sincronização de equipe para o Azure AD

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.team-sync-confirm-saml %} {% data reusables.identity-and-permissions.enable-team-sync-azure %} {% data reusables.identity-and-permissions.team-sync-confirm %}
7. Revise os detalhes do organismo de IdP que você deseja conectar à conta corporativa e, em seguida, clique em **Aprovar**.
  ![Solicitação pendente para habilitar a sincronização da equipe para um locatário específico do IdP com a opção para aprovar ou cancelar a solicitação](/assets/images/help/teams/approve-team-synchronization.png)
8. àra desativar a sincronização da equipe, clique em **Desabilitar sincronização da equipe**.
  ![Desabilitar a sincronização de equipe](/assets/images/help/teams/disable-team-synchronization.png)

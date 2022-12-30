---
title: Revisar e revogar tokens de acesso pessoal na organização
intro: 'Os proprietários da organização podem revisar os {% data variables.product.pat_v2 %}s que podem acessar a organização. Eles também podem revogar o acesso de {% data variables.product.pat_v2 %}s específicos.'
versions:
  feature: pat-v2
shortTitle: Review token access
ms.openlocfilehash: b45401441473f892ba61cf199852588e2a3b3d67
ms.sourcegitcommit: d309541e8f0e28bc1ec333a85b00218627e54fe1
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/03/2022
ms.locfileid: '148131374'
---
{% data reusables.user-settings.pat-v2-org-opt-in %}

## Sobre a revisão e revogação de {% data variables.product.pat_v2 %}s

Os proprietários da organização podem ver todos os {% data variables.product.pat_v2 %}s que podem acessar os recursos pertencentes à organização. Os proprietários da organização também podem revogar o acesso de {% data variables.product.pat_v2 %}s. Quando um {% data variables.product.pat_v2 %} for revogado, as chaves SSH criadas pelo token continuarão funcionando e o token ainda poderá ler os recursos públicos da organização.

Quando um token for revogado, o usuário que criou o token receberá uma notificação por email.

Os proprietários da organização só podem ver e revogar {% data variables.product.pat_v2 %}s, não {% data variables.product.pat_v1_plural %}. A menos que a organização {% ifversion ghec or ghes or ghae %}ou a empresa {% endif %}tenha acesso restrito de {% data variables.product.pat_v1_plural %}, qualquer {% data variables.product.pat_v1 %} pode acessar recursos da organização até que o token vença. Para obter mais informações de como restringir o acesso de {% data variables.product.pat_v1_plural %}, confira "[Como definir uma política de {% data variables.product.pat_generic %} na organização](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)"{% ifversion ghec or ghes or ghae %} e "[Como impor políticas para {% data variables.product.pat_generic %}s na empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-personal-access-tokens-in-your-enterprise)"{% endif %}.

{% ifversion ghec %} Os proprietários da organização também podem ver e revogar {% data variables.product.pat_v1_plural %} quando a organização exige o logon único de SAML. Para obter mais informações, confira "[Como ver e gerenciar o acesso SAML de um usuário à empresa](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-authorized-credentials)". Para obter mais informações de como usar a API REST para fazer isso, confira "[Listar autorizações do SSO de SAML de uma organização](/rest/orgs/orgs#list-saml-sso-authorizations-for-an-organization)" e "[Remover uma autorização do SSO de SAML de uma organização](/rest/orgs/orgs#remove-a-saml-sso-authorization-for-an-organization)".{% endif %}

## Como revisar e revogar {% data variables.product.pat_v2 %}s

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Na barra lateral esquerda, em **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s**, clique em **Ativar tokens**. Todos os {% data variables.product.pat_v2 %}s que podem acessar a organização serão exibidos.
1. Clique no nome do token que você deseja revisar ou revogar.
1. Revise o acesso e as permissões que o token tem.
1. Para revogar o acesso do token à organização, clique em **Revogar**.

Como alternativa, você pode revogar vários tokens ao mesmo tempo:

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Na barra lateral esquerda, em **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}s**, clique em **Ativar tokens**. Todos os {% data variables.product.pat_v2 %}s que podem acessar a organização serão exibidos.
{% data reusables.user-settings.patv2-filters %}
1. Selecione cada token que deseja revogar.
1. Clique no menu suspenso **tokens selecionados...** e depois em **Revogar...** .

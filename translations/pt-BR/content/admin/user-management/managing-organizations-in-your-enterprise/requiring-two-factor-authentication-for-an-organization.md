---
title: Exigir autenticação de dois fatores na organização
intro: Você pode exigir que integrantes da organização e colaboradores externos habilitem a autenticação de dois fatores em suas contas pessoais para dificultar o acesso de elementos mal-intencionados a repositórios e configurações da organização.
redirect_from:
  - /enterprise/admin/user-management/requiring-two-factor-authentication-for-an-organization
  - /admin/user-management/requiring-two-factor-authentication-for-an-organization
versions:
  ghes: '*'
type: how_to
topics:
  - 2FA
  - Enterprise
  - Organizations
  - Policies
  - Security
shortTitle: Require 2FA
ms.openlocfilehash: 2f7fe986cf3b13a171f85da9d5fdb74eeed0d648
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331637'
---
Ao usar o LDAP ou autenticação integrada, a autenticação de dois fatores será compatível em {% data variables.product.product_location %}. Os administradores da organização podem exigir que os integrantes habilitem a autenticação de dois fatores.

{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

Para obter mais informações, confira "[Sobre a autenticação de dois fatores](/github/authenticating-to-github/about-two-factor-authentication)".

## Requisitos para exigir a autenticação de dois fatores

Para exigir que os membros da organização e os colaboradores externos usem a 2FA, você precisa [habilitar a autenticação de dois fatores](/enterprise/user/articles/securing-your-account-with-two-factor-authentication-2fa/) na sua conta pessoal.

{% warning %}

**Avisos:**

- Se você exigir autenticação de dois fatores, os integrantes e colaboradores externos (incluindo contas bot) que não utilizem 2FA serão removidos da organização e perderão acesso aos repositórios dela, inclusive às bifurcações de repositórios privados. Se eles habilitarem a 2FA na conta pessoal em até três meses após terem sido removidos da organização, você poderá [restabelecer os privilégios e as configurações de acesso deles](/enterprise/user/articles/reinstating-a-former-member-of-your-organization).
- Se a 2FA for obrigatória, integrantes da organização ou colaboradores externos que a desabilitarem serão automaticamente removidos da organização.
- Se você for o único proprietário de uma organização que exige autenticação de dois fatores, não poderá desabilitar a 2FA na sua conta pessoal sem desabilitar a autenticação de dois fatores obrigatória na organização.

{% endwarning %}

Antes de exigir o uso da autenticação de dois fatores, é recomendável notificar os integrantes da organização e os colaboradores externos, pedindo que eles configurem 2FA nas contas deles. Você pode [ver se os membros e os colaboradores externos já usam a 2FA](/enterprise/user/articles/viewing-whether-users-in-your-organization-have-2fa-enabled) na guia Pessoas de uma organização.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.require_two_factor_authentication %} {% data reusables.organizations.removed_outside_collaborators %}

## Exibir pessoas removidas da organização

Para ver as pessoas que foram removidas automaticamente da sua organização devido a não conformidade quando você exigiu a autenticação de dois fatores, [pesquise o log de auditoria](/enterprise/admin/guides/installation/searching-the-audit-log/) usando `reason:two_factor_requirement_non_compliance` no campo de pesquisa.

{% data reusables.audit_log.octicon_icon %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.audit_log.audit_log_sidebar_for_site_admins %}
4. Insira a consulta de pesquisa usando `reason:two_factor_requirement_non_compliance`.
 ![Evento de log de auditoria das ferramentas de equipe que mostra um usuário removido devido a não conformidade com a 2FA](/assets/images/help/2fa/2fa_noncompliance_stafftools_audit_log_search.png) Para restringir a pesquisa a:
    - Membros das organizações removidos, insira `action:org.remove_member AND reason:two_factor_requirement_non_compliance`
    - Colaboradores externos removidos, insira `action:org.remove_outside_collaborator AND reason:two_factor_requirement_non_compliance`

  Também é possível ver as pessoas removidas de determinada organização usando o nome da organização na pesquisa:
    - `org:octo-org AND reason:two_factor_requirement_non_compliance`
5. Clique em **Pesquisar**.  

## Ajudar integrantes e colaboradores externos removidos a voltarem à organização

Se algum integrante ou colaborador externo for removido da organização quando você habilitar o uso obrigatório da autenticação de dois fatores, o integrante/colaborador receberá um e-mail informando que foi removido. Para solicitar acesso à sua organização, o integrante/colaborador deverá ativar a 2FA na conta pessoal e entrar em contato com o proprietário de uma organização.

## Leitura adicional

- "[Como ver se os usuários na sua organização têm a 2FA habilitada](/enterprise/user/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)"
- "[Como proteger sua conta com a 2FA (autenticação de dois fatores)](/enterprise/user/articles/securing-your-account-with-two-factor-authentication-2fa)"
- "[Como restabelecer um ex-membro da sua organização](/enterprise/user/articles/reinstating-a-former-member-of-your-organization)"
- "[Como restabelecer o acesso de um ex-colaborador externo à sua organização](/enterprise/user/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization)"

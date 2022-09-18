---
title: Exigindo a autenticação de dois fatores na sua organização
intro: 'Os proprietários da organização podem exigir que {% ifversion fpt or ghec %}membros da organização, colaboradores externos e gerentes de cobrança{% else %}membros da organização e colaboradores externos{% endif %} habilitem a autenticação de dois fatores para suas contas pessoais, dificultando que agentes mal-intencionados acessem os repositórios e configurações de uma organização.'
redirect_from:
  - /articles/requiring-two-factor-authentication-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/requiring-two-factor-authentication-in-your-organization
  - /organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Require 2FA
ms.openlocfilehash: 1a6ea397b010855917f9304db9a5c51cb5440a22
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147872300'
---
## Sobre a autenticação de dois fatores para organizações

{% data reusables.two_fa.about-2fa %} Você pode exigir que todos os {% ifversion fpt or ghec %}membros, colaboradores externos e gerentes de cobrança{% else %}membros e colaboradores externos{% endif %} em sua organização habilitem a autenticação de dois fatores no {% data variables.product.product_name %}. Para obter informações sobre a autenticação de dois fatores, confira "[Como proteger sua conta com a 2FA (autenticação de dois fatores)](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)".

{% ifversion fpt or ghec %}

Você também pode exigir autenticação de dois fatores para as organizações de uma empresa. Para obter mais informações, confira "[Como impor políticas para configurações de segurança na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise)".

{% endif %}

{% warning %}

**Avisos:**

- Se você exigir o uso da autenticação de dois fatores na organização, os {% ifversion fpt or ghec %}membros, colaboradores externos e gerentes de cobrança{% else %}integrantes e colaboradores externos{% endif %} da sua organização (incluindo contas bot) que não usam a 2FA serão removidos da organização e perderão acesso aos repositórios dela. Eles também perderão acesso às bifurcações dos repositórios privados da organização. Você poderá [restabelecer as configurações e os privilégios de acesso deles](/articles/reinstating-a-former-member-of-your-organization) se a autenticação de dois fatores for habilitada na conta pessoal deles em até três meses após a remoção da organização.
- Se um proprietário, membro,{% ifversion fpt or ghec %} gerente de cobrança{% endif %} ou colaborador externo da organização desabilitar a 2FA na respectiva conta pessoal depois que você tiver habilitado a autenticação de dois fatores obrigatória, ele será automaticamente removido da organização.
- Se você for o único proprietário de uma organização que exige autenticação de dois fatores, não poderá desabilitar a 2FA na sua conta pessoal sem desabilitar a autenticação de dois fatores obrigatória na organização.

{% endwarning %}

{% data reusables.two_fa.auth_methods_2fa %}

## Pré-requisitos

Para exigir que {% ifversion fpt or ghec %}os membros da organização, colaboradores externos e gerentes de cobrança{% else %}membros da organização e colaboradores externos{% endif %} usem a autenticação de dois fatores, você deve habilitá-la em sua conta no {% data variables.product.product_name %}. Para obter informações, confira "[Como proteger sua conta com a 2FA (autenticação de dois fatores)](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)".

Para exigir o uso da autenticação de dois fatores, recomendamos que você notifique os {% ifversion fpt or ghec %}membros, colaboradores externos e gerentes de cobrança da organização{% else %}membros e colaboradores externos da organização{% endif %} e peça para eles configurarem a 2FA nas contas deles. Você pode ver se os integrantes e colaboradores externos já estão usando a 2FA. Para obter mais informações, confira "[Como ver se os usuários da sua organização têm a 2FA habilitada](/organizations/keeping-your-organization-secure/viewing-whether-users-in-your-organization-have-2fa-enabled)".

## Exigindo a autenticação de dois fatores na sua organização

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.require_two_factor_authentication %} {% data reusables.organizations.removed_outside_collaborators %} {% ifversion fpt or ghec %}
8. Se algum integrante ou colaborador externo for removido da organização, recomendamos o envio de um convite para restabelecer os privilégios e o acesso à organização que ele tinha anteriormente. O usuário precisa habilitar a autenticação de dois fatores para poder aceitar o convite.
{% endif %}

## Exibir pessoas removidas da organização

Para ver as pessoas que foram removidas automaticamente da sua organização por não conformidade quando você exigiu a autenticação de dois fatores, você pode [pesquisar no log de auditoria da sua organização](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#accessing-the-audit-log) pessoas removidas da sua organização. O evento do log de auditoria mostrará se uma pessoa foi removida por motivo de não conformidade com a 2FA.

![Evento do log de auditoria mostrando um usuário removido por motivo de não conformidade com a 2FA](/assets/images/help/2fa/2fa_noncompliance_audit_log_search.png)

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.audit_log.audit_log_sidebar_for_org_admins %}
4. Faça a pesquisa. Para pesquisar:
    - Membros da organização removidos, use `action:org.remove_member` na consulta da pesquisa
    - Colaboradores externos removidos, use `action:org.remove_outside_collaborator` na consulta da pesquisa{% ifversion fpt or ghec %}
    - Gerenciadores de cobrança removidos, use `action:org.remove_billing_manager` na consulta da pesquisa{% endif %}

 Você também pode ver as pessoas que foram removidas de sua organização usando um [período](/articles/reviewing-the-audit-log-for-your-organization/#search-based-on-time-of-action) em sua pesquisa.

## Ajudar integrantes e colaboradores externos removidos a voltarem à organização

Se algum integrante ou colaborador externo for removido da organização quando você habilitar o uso obrigatório da autenticação de dois fatores, o integrante/colaborador receberá um e-mail informando que foi removido. Para solicitar acesso à sua organização, o integrante/colaborador deverá ativar a 2FA na conta pessoal e entrar em contato com o proprietário de uma organização.

## Leitura adicional

- "[Como ver se os usuários na sua organização têm a 2FA habilitada](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)"
- "[Como proteger sua conta com a 2FA (autenticação de dois fatores)](/articles/securing-your-account-with-two-factor-authentication-2fa)"
- "[Como restabelecer um ex-membro da sua organização](/articles/reinstating-a-former-member-of-your-organization)"
- "[Como restabelecer o acesso de um ex-colaborador externo à sua organização](/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization)"

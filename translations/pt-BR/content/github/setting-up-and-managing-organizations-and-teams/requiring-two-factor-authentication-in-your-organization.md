---
title: Exigir autenticação de dois fatores em sua organização
intro: 'Os proprietários da organização podem exigir que os {% if currentVersion == "free-pro-team@latest" %}integrantes, colaboradores externos e gerentes de cobrança da organização{% else %}integrantes e colaboradores externos da organização{% endif %} habilitem a autenticação de dois fatores em suas contas pessoais para dificultar o acesso aos repositórios e às configurações da organização.'
redirect_from:
  - /articles/requiring-two-factor-authentication-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.two_fa.auth_methods_2fa %}

### Requisitos para exigir a autenticação de dois fatores

Antes de poder exigir que os {% if currentVersion == "free-pro-team@latest" %}integrantes, colaboradores externos e gerentes de cobrança da organização{% else %}integrantes e colaboradores externos da organização{% endif %} usem 2FA, você deve [habilitar a autenticação de dois fatores](/articles/securing-your-account-with-two-factor-authentication-2fa/) na sua própria conta pessoal.

{% warning %}

**Avisos:**

- Se você exigir o uso da autenticação de dois fatores na organização, os {% if currentVersion == "free-pro-team@latest" %}integrantes, colaboradores externos e gerentes de cobrança{% else %}integrantes e colaboradores externos{% endif %} da sua organização (incluindo contas bot) que não usam a 2FA serão removidos da organização e perderão acesso aos repositórios dela. Eles também perderão acesso às bifurcações dos repositórios privados da organização. Se eles habilitarem a autenticação de dois fatores for habilitada na conta pessoal em até três meses após a remoção da organização, você poderá [restabelecer as configurações e os privilégios de acesso deles](/articles/reinstating-a-former-member-of-your-organization).
- Se um proprietário, integrante,{% if currentVersion == "free-pro-team@latest" %} gerente de cobrança{% endif %} ou colaborador externo da organização desabilitar a 2FA em sua conta pessoal depois que você tiver habilitado a autenticação de dois fatores obrigatória, ele será automaticamente removido da organização.
- Se você for o único proprietário de uma organização que exige autenticação de dois fatores, não poderá desabilitar a 2FA na sua conta pessoal sem desabilitar a autenticação de dois fatores obrigatória na organização.

{% endwarning %}

Antes de exigir o uso da autenticação de dois fatores, recomendamos que você notifique os {% if currentVersion == "free-pro-team@latest" %}integrantes, colaboradores externos e gerentes de cobrança da organização{% else %}integrantes e colaboradores externos da organização{% endif %} e peça para eles configurarem a 2FA nas contas deles. Você pode [ver se os integrantes e colaboradores externos já usam a 2FA](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled) na página People (Pessoas) da organização.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.require_two_factor_authentication %}
{% data reusables.organizations.removed_outside_collaborators %}
{% if currentVersion == "free-pro-team@latest" %}
8. Se algum integrante ou colaborador externo for removido da organização, recomendamos o envio de um convite para restabelecer os privilégios e o acesso à organização que ele tinha anteriormente. O usuário precisa habilitar a autenticação de dois fatores para poder aceitar o convite.
{% endif %}

### Exibir pessoas removidas da organização

Para exibir as pessoas que foram removidas automaticamente da organização por motivo de não conformidade quando você passou a exibir a autenticação de dois fatores, você pode [pesquisar o log de auditoria da organização](/articles/reviewing-the-audit-log-for-your-organization/#accessing-the-audit-log) para consultar as pessoas removidas da organização. O evento do log de auditoria mostrará se uma pessoa foi removida por motivo de não conformidade com a 2FA.

![Evento do log de auditoria mostrando um usuário removido por motivo de não conformidade com a 2FA](/assets/images/help/2fa/2fa_noncompliance_audit_log_search.png)

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.audit_log.audit_log_sidebar_for_org_admins %}
4. Faça a pesquisa. Para pesquisar:
    - Integrantes da organização removidos, use `action:org.remove_member` na pesquisa
    - Colaboradores externos removidos, use `action:org.remove_outside_collaborator` na pesquisa{% if currentVersion == "free-pro-team@latest" %}
    - Gerentes de cobrança removidos, use `action:org.remove_billing_manager`na pesquisa{% endif %}

 Você também pode exibir as pessoas que foram removidas da organização usando um [intervalo de tempo](/articles/reviewing-the-audit-log-for-your-organization/#search-based-on-time-of-action) na pesquisa.

### Ajudar integrantes e colaboradores externos removidos a voltarem à organização

Se algum integrante ou colaborador externo for removido da organização quando você habilitar o uso obrigatório da autenticação de dois fatores, o integrante/colaborador receberá um e-mail informando que foi removido. Para solicitar acesso à sua organização, o integrante/colaborador deverá ativar a 2FA na conta pessoal e entrar em contato com o proprietário da organização.

### Leia mais

- "[Ver se os usuários na organização têm a 2FA habilitada](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)"
- "[Proteger sua conta com autenticação de dois fatores (2FA)](/articles/securing-your-account-with-two-factor-authentication-2fa)"
- "[Restabelecer ex-integrantes da organização](/articles/reinstating-a-former-member-of-your-organization)"
- "[Restabelecer o acesso de um ex-colaborador externo à organização](/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization)"

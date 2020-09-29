---
title: Exigir autenticação de dois fatores na organização
intro: Você pode exigir que integrantes da organização e colaboradores externos habilitem a autenticação de dois fatores em suas contas pessoais para dificultar o acesso de elementos mal-intencionados a repositórios e configurações da organização.
redirect_from:
  - /enterprise/admin/user-management/requiring-two-factor-authentication-for-an-organization
versions:
  enterprise-server: '*'
---

Ao usar LDAP ou autenticação integrada, a autenticação de dois fatores é compatível no appliance do {% data variables.product.prodname_ghe_server %}. Os administradores da organização podem exigir que os integrantes habilitem a autenticação de dois fatores.

{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

Para obter mais informações, consulte [este gráfico sobre métodos de autenticação compatíveis com 2FA](/enterprise/{{ currentVersion }}/user/articles/about-two-factor-authentication/#authentication-methods-that-support-2fa).

### Requisitos para exigir a autenticação de dois fatores

Antes de poder exigir que os integrantes da organização e colaboradores externos usem 2FA, você deve [habilitar a autenticação de dois fatores](/enterprise/{{ currentVersion }}/user/articles/securing-your-account-with-two-factor-authentication-2fa/) na sua própria conta pessoal.

{% warning %}

**Avisos:**

- Se você exigir autenticação de dois fatores, os integrantes e colaboradores externos (incluindo contas bot) que não utilizem 2FA serão removidos da organização e perderão acesso aos repositórios dela, inclusive às bifurcações de repositórios privados. Se esses integrantes/colaboradores habilitarem a 2FA em suas contas pessoais dentro de três meses após serem removidos da organização, você poderá [restabelecer suas configurações e privilégios de acesso](/enterprise/{{ currentVersion }}/user/articles/reinstating-a-former-member-of-your-organization).
- Se a 2FA for obrigatória, integrantes da organização ou colaboradores externos que a desabilitarem serão automaticamente removidos da organização.
- Se você for o único proprietário de uma organização que exige autenticação de dois fatores, não poderá desabilitar a 2FA na sua conta pessoal sem desabilitar a autenticação de dois fatores obrigatória na organização.

{% endwarning %}

Antes de exigir o uso da autenticação de dois fatores, é recomendável notificar os integrantes da organização e os colaboradores externos, pedindo que eles configurem 2FA nas contas deles. Na guia People (Pessoas) da organização, é possível [ver se os integrantes e colaboradores externos já usam 2FA](/enterprise/{{ currentVersion }}/user/articles/viewing-whether-users-in-your-organization-have-2fa-enabled).

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.require_two_factor_authentication %}
{% data reusables.organizations.removed_outside_collaborators %}

### Exibir pessoas removidas da organização

Para ver as pessoas que foram removidas automaticamente da organização por motivo de não conformidade à sua solicitação da autenticação de dois fatores, você pode [pesquisar o log de auditoria](/enterprise/{{ currentVersion }}/admin/guides/installation/searching-the-audit-log/) usando `reason:two_factor_requirement_non_compliance` no campo de pesquisa.

{% data reusables.audit_log.octicon_icon %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.audit_log.audit_log_sidebar_for_site_admins %}
4. Faça a consulta da pesquisa usando `reason:two_factor_requirement_non_compliance`. ![Evento de log de auditoria de ferramentas de equipe mostrando usuário removido por motivo de não conformidade com 2FA](/assets/images/help/2fa/2fa_noncompliance_stafftools_audit_log_search.png) Para limitar sua pesquisa por:
    - Integrantes da organização removidos, insira `action:org.remove_member AND reason:two_factor_requirement_non_compliance`
    - Colaboradores externos removidos, insira `action:org.remove_outside_collaborator AND reason:two_factor_requirement_non_compliance`

  Também é possível ver as pessoas removidas de determinada organização usando o nome da organização na pesquisa:
    - `org:octo-org AND reason:two_factor_requirement_non_compliance`
5. Clique em **Pesquisar**.

### Ajudar integrantes e colaboradores externos removidos a voltarem à organização

Se algum integrante ou colaborador externo for removido da organização quando você habilitar o uso obrigatório da autenticação de dois fatores, o integrante/colaborador receberá um e-mail informando que foi removido. Para solicitar acesso à sua organização, o integrante/colaborador deverá ativar a 2FA na conta pessoal e entrar em contato com o proprietário da organização.

### Leia mais

- [Ver se os usuários na organização têm a 2FA habilitada](/enterprise/{{ currentVersion }}/user/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)
- [Proteger sua conta com autenticação de dois fatores (2FA)](/enterprise/{{ currentVersion }}/user/articles/securing-your-account-with-two-factor-authentication-2fa)
- [Restabelecer ex-integrantes da organização](/enterprise/{{ currentVersion }}/user/articles/reinstating-a-former-member-of-your-organization)
- [Restabelecer o acesso de ex-colaboradores externos da organização](/enterprise/{{ currentVersion }}/user/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization)

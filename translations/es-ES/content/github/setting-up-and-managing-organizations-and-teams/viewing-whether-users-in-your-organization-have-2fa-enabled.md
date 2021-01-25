---
title: Ver si los usuarios en tu organización han habilitado 2FA
intro: 'Puedes ver los propietarios de la organización, miembros y colaboradores externos que han habilitado la autenticación de dos factores.'
redirect_from:
  - /articles/viewing-whether-users-in-your-organization-have-2fa-enabled
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% note %}

**Nota:** Puedes requerir que todos los miembros{% if currentVersion == "free-pro-team@latest" %}, incluyendo a los propietarios, gerentes de facturación y{% else %} y{% endif %} colaboradores externos en tu organización, deban habilitar la autenticación bifactorial. Para obtener más información, consulta "[Solicitar la autenticación de dos factores en tu organización](/articles/requiring-two-factor-authentication-in-your-organization)".

{% endnote %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. Para ver los miembros de la organización, incluidos los propietarios de la organización, que han habilitado o inhabilitado la autenticación de dos factores, a la derecha, haz clic en **2FA** y selecciona **Enabled** (Habilitado) o **Disabled** (Inhabilitado). ![filter-org-members-by-2fa](/assets/images/help/2fa/filter-org-members-by-2fa.png)
5. Para ver los colaboradores externos en tu organización, dentro de la pestaña "People" (Personas), haz clic en **Outside collaborators (Colaboradores externos)**. ![select-outside-collaborators](/assets/images/help/organizations/select-outside-collaborators.png)
6. Para ver qué colaboradores externos han habilitado o inhabilitado la autenticación de dos factores, a la derecha, haz clic en **2FA** y selecciona **Enabled** (Habilitado) o **Disabled** (Inhabilitado). ![filter-outside-collaborators-by-2fa](/assets/images/help/2fa/filter-outside-collaborators-by-2fa.png)

### Further reading

- "[Ver los roles de las personas en un organización](/articles/viewing-people-s-roles-in-an-organization)"

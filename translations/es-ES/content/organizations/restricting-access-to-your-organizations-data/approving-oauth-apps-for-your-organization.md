---
title: Aprobar aplicaciones OAuth para tu organización
intro: 'Cuando un miembro de la organización solicita a {% data variables.product.prodname_oauth_app %} que acceda a los recursos de la organización, los propietarios de la organización pueden aprobar o rechazar la solicitud.'
redirect_from:
  - /articles/approving-third-party-applications-for-your-organization/
  - /articles/approving-oauth-apps-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/approving-oauth-apps-for-your-organization
versions:
  free-pro-team: '*'
topics:
  - organizations
  - equipos
---

Cuando las restricciones de acceso a {% data variables.product.prodname_oauth_app %} están habilitadas, los miembros de la organización deben [solicitar la aprobación](/articles/requesting-organization-approval-for-oauth-apps) de un propietario de la organización antes de que puedan autorizar una {% data variables.product.prodname_oauth_app %} que tiene acceso a los recursos de la organización.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.oauth_app_access %}
5. Junto a la aplicación que quieres aprobar, haz clic en **Review** (Revisar). ![Enlace de revisión de solicitud](/assets/images/help/settings/settings-third-party-approve-review.png)
6. Una vez que revises la información sobre la aplicación solicitada, haz clic en **Grant access** (Otorgar acceso). ![Botón para otorgar acceso](/assets/images/help/settings/settings-third-party-approve-grant.png)

### Leer más

- "[Acerca de las restricciones de acceso a {% data variables.product.prodname_oauth_app %}](/articles/about-oauth-app-access-restrictions)"

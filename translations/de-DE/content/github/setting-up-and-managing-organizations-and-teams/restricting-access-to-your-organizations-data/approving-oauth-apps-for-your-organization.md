---
title: OAuth-Apps für Deine Organisation genehmigen
intro: 'Wenn ein Organisationsmitglied {% data variables.product.prodname_oauth_app %}-Zugriff auf Organisationsressourcen anfordert, können Organisationsinhaber die Anforderung genehmigen oder ablehnen.'
redirect_from:
  - /articles/approving-third-party-applications-for-your-organization/
  - /articles/approving-oauth-apps-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/approving-oauth-apps-for-your-organization
versions:
  free-pro-team: '*'
topics:
  - organisationen
  - teams
---
Wenn Einschränkungen für den {% data variables.product.prodname_oauth_app %}-Zugriff aktiviert sind, müssen Organisationsmitglieder [die Genehmigung von einem Organisationsinhaber anfordern](/articles/requesting-organization-approval-for-oauth-apps), bevor sie eine {% data variables.product.prodname_oauth_app %} autorisieren können, die Zugriff auf die Ressourcen der Organisation hat.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.oauth_app_access %}
5. Klicke neben der Anwendung, die Du genehmigen möchtest, auf **Review** (Review). ![Link zum Anfordern eines Reviews](/assets/images/help/settings/settings-third-party-approve-review.png)
6. Wenn Du die Informationen zur angeforderten Anwendung überprüft hast, klicke auf **Grant access** (Zugriff gewähren). ![Schaltfläche „Grant access“ (Zugriff gewähren)](/assets/images/help/settings/settings-third-party-approve-grant.png)

### Weiterführende Informationen

- „[Informationen zu Einschränkungen für den {% data variables.product.prodname_oauth_app %}-Zugriff](/articles/about-oauth-app-access-restrictions)“

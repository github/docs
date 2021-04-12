---
title: E-Mail-Benachrichtigungen auf eine genehmigte Domäne beschränken
intro: 'Um zu verhindern, dass Organisationsinformationen an persönliche Konten weitergegeben werden, können Organisationsinhaber E-Mail-Benachrichtigungen zur Organisationsaktivität auf eine verifizierte Domäne beschränken.'
product: '{% data reusables.gated-features.restrict-email-domain %}'
redirect_from:
  - /articles/restricting-email-notifications-about-organization-activity-to-an-approved-email-domain/
  - /articles/restricting-email-notifications-to-an-approved-domain
versions:
  free-pro-team: '*'
topics:
  - organisationen
  - teams
---

### About email restrictions

When restricted email notifications are enabled in an organization, members can only use an email address associated with the organization's verified domains to receive email notifications about organization activity. Weitere Informationen findest Du unter „[Domäne Deiner Organisation verifizieren](/articles/verifying-your-organization-s-domain).“

Externe Mitarbeiter unterliegen nicht den Einschränkungen für E-Mail-Benachrichtigungen für verifizierte Domänen. Weitere Informationen zu externen Mitarbeitern findest Du unter „[Berechtigungsebenen für eine Organisation](/github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization#outside-collaborators)."

If your organization is owned by an enterprise account, organization members will be able to receive notifications from any domains verified for the enterprise account, in addition to any domains verified for the organization. For more information, see "[Verifying your enterprise account's domain](/github/setting-up-and-managing-your-enterprise/verifying-your-enterprise-accounts-domain)."

### E-Mail-Benachrichtigungen auf eine genehmigte Domäne beschränken

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.restrict-email-notifications %}
6. Klicke auf **Save** (Speichern).

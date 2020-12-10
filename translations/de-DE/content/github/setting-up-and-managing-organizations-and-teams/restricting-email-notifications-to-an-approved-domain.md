---
title: E-Mail-Benachrichtigungen auf eine genehmigte Domäne beschränken
intro: 'Um zu verhindern, dass Organisationsinformationen an persönliche Konten weitergegeben werden, können Organisationsinhaber E-Mail-Benachrichtigungen zur Organisationsaktivität auf eine verifizierte Domäne beschränken.'
product: '{% data reusables.gated-features.restrict-email-domain %}'
redirect_from:
  - /articles/restricting-email-notifications-about-organization-activity-to-an-approved-email-domain/
  - /articles/restricting-email-notifications-to-an-approved-domain
versions:
  free-pro-team: '*'
---

Wenn in einer Organisation beschränkte E-Mail-Benachrichtigungen aktiviert sind, können die Mitglieder der Organisation E-Mail-Benachrichtigungen zu den Aktivitäten der Organisation nur an E-Mail-Adressen innerhalb der hierfür verifizierten Domäne der Organisation erhalten. Weitere Informationen findest Du unter „[Domäne Deiner Organisation verifizieren](/articles/verifying-your-organization-s-domain).“

Externe Mitarbeiter unterliegen nicht den Einschränkungen für E-Mail-Benachrichtigungen für verifizierte Domänen. Weitere Informationen zu externen Mitarbeitern findest Du unter „[Berechtigungsebenen für eine Organisation](/github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization#outside-collaborators)."

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.verified-domains %}
5. Aktiviere unter „Enforcement preferences“ (Durchsetzungspräferenzen) das Kontrollkästchen **Restrict email notifications to domain email** (E-Mail-Benachrichtigungen auf eine genehmigte E-Mail-Domäne beschränken) aus. ![Kontrollkästchen zur Beschränkung von E-Mail-Benachrichtigungen auf eine genehmigte E-Mail-Domäne](/assets/images/help/organizations/restrict-email-notifications-to-domain.png)
6. Klicke auf **Save** (Speichern).

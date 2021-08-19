---
title: Domänen Deiner Organisation überprüfen
intro: 'Sie können die von Ihrer Organisation gesteuerten Domains überprüfen, um die Identität Ihrer Organisation auf {% data variables.product.product_name %} zu bestätigen.'
redirect_from:
  - /articles/verifying-your-organization-s-domain
  - /articles/verifying-your-organizations-domain
  - /github/setting-up-and-managing-organizations-and-teams/verifying-your-organizations-domain
versions:
  free-pro-team: '*'
topics:
  - organisationen
  - teams
---
### About domain verification

Um Domänen auf {% data variables.product.product_name %} zu verifizieren, musst Du in der Organisation über Inhaberberechtigungen verfügen. Weitere Informationen finden Sie unter „[Berechtigungsebenen für eine Organisation](/articles/permission-levels-for-an-organization)". Darüber hinaus benötigst Du Zugriff, um die Domänen-Einträge mit Deinem Domänen-Hosting-Dienst zu ändern.

Nachdem Du die Inhaberschaft der Domains Deiner Organisation verifiziert hast, wird im Profil der Organisation der Badge „Verified“ (Verifiziert) angezeigt. Wenn Ihre Organisation in {% data variables.product.prodname_ghe_cloud %} vorhanden ist und den Unternehmensnutzungsbedingungen zugestimmt hat, können Organisationsinhaber die Identität der Organisationsmitglieder verifizieren, indem sie die E-Mail-Adresse der jeweiligen Mitglieder in der verifizierten Domain anzeigen. Weitere Informationen findest Du unter „[Informationen zum Profil Deiner Organisation](/articles/about-your-organization-s-profile/)“ und „[Auf Unternehmensnutzungsbedingungen umsteigen](/articles/upgrading-to-the-corporate-terms-of-service).“

If your organization is owned by an enterprise account, a "Verified" badge will display on your organization's profile for any domains verified for the enterprise account, in addition to any domains verified for the organization. For more information, see "[Verifying your enterprise account's domain](/github/setting-up-and-managing-your-enterprise/verifying-your-enterprise-accounts-domain)."

{% data reusables.organizations.verified-domains-details %}

Auf {% data variables.product.prodname_ghe_cloud %} können Sie nach dem Verifizieren der Inhaberschaft der Domain Ihrer Organisation E-Mail-Benachrichtigungen für die Organisation auf diese Domain beschränken. Weitere Informationen findest Du unter „[E-Mail-Benachrichtigungen auf eine genehmigte Domäne beschränken](/articles/restricting-email-notifications-to-an-approved-domain).“

### Domänen Deiner Organisation überprüfen

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.verified-domains %}
5. Klicke auf **Add a domain** (Domäne hinzufügen). ![Schaltfläche „Add a domain“ (Domäne hinzufügen)](/assets/images/help/organizations/add-a-domain-button.png)
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.add-dns-txt-record %}
1. Wait for your DNS configuration to change, which may take up to 72 hours. You can confirm your DNS configuration has changed by running the `dig` command on the command line, replacing `ORGANIZATION` with the name of your organization and `example.com` with the domain you'd like to verify. In der Befehlsausgabe sollte Ihr neuer TXT-Eintrag aufgelistet werden.
   ```shell
   $ dig _github-challenge-<em>ORGANIZATION</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
8. Nachdem Sie bestätigt haben, dass Ihrem DNS-Eintrag der TXT-Eintrag hinzugefügt wurde, sollten Sie in den Einstellungen Ihrer Organisation zur Registerkarte „Verified domains“ (Verifizierte Domains) navigieren. Sie können die Schritte eins bis vier durchführen, um nach der Registerkarte für verifizierte Domains zu suchen. ![Seite mit Einstellungen zu verifizierten Domains mit ausstehender Domain](/assets/images/help/organizations/pending-domain-verification.png)
{% data reusables.organizations.continue-verifying-domain %}
11. Sobald der Badge „Verified“ (Verifiziert) auf der Profilseite Ihrer Organisation sichtbar ist, können Sie den TXT-Eintrag im Domain-Hosting-Dienst optional aus dem DNS-Eintrag löschen.![Badge „Verified“ (Verifiziert)](/assets/images/help/organizations/verified-badge.png)

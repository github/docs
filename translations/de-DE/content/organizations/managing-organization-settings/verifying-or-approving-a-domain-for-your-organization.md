---
title: Verifying or approving a domain for your organization
intro: 'You can verify your ownership of domains with {% data variables.product.company_short %} to confirm your organization''s identity. You can also approve domains that {% data variables.product.company_short %} can send email notifications to for members of your organization.'
redirect_from:
  - /articles/verifying-your-organization-s-domain
  - /articles/verifying-your-organizations-domain
  - /github/setting-up-and-managing-organizations-and-teams/verifying-your-organizations-domain
  - /organizations/managing-organization-settings/verifying-your-organizations-domain
permissions: Organization owners can verify or approve a domain for an organization.
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.2'
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
---

### About domain verification

Nachdem Du die Inhaberschaft der Domains Deiner Organisation verifiziert hast, wird im Profil der Organisation der Badge „Verified“ (Verifiziert) angezeigt. Wenn Ihre Organisation in {% data variables.product.prodname_ghe_cloud %} vorhanden ist und den Unternehmensnutzungsbedingungen zugestimmt hat, können Organisationsinhaber die Identität der Organisationsmitglieder verifizieren, indem sie die E-Mail-Adresse der jeweiligen Mitglieder in der verifizierten Domain anzeigen. Weitere Informationen findest Du unter „[Informationen zum Profil Deiner Organisation](/articles/about-your-organization-s-profile/)“ und „[Auf Unternehmensnutzungsbedingungen umsteigen](/articles/upgrading-to-the-corporate-terms-of-service).“

If your organization is owned by an enterprise account, a "Verified" badge will display on your organization's profile for any domains verified for the enterprise account, in addition to any domains verified for the organization. Organization owners can view any domains that an enterprise owner has verified or approved, and edit the domains if the organization owner is also an enterprise owners. For more information, see "[Verifying or approving a domain for your enterprise account](/github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account)."

{% data reusables.organizations.verified-domains-details %}

Auf {% data variables.product.prodname_ghe_cloud %} können Sie nach dem Verifizieren der Inhaberschaft der Domain Ihrer Organisation E-Mail-Benachrichtigungen für die Organisation auf diese Domain beschränken. For more information, see "[Restricting email notifications for your organization](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)."

### About domain approval

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

After you approve domains for your organization, you can restrict email notifications for activity within the organization to users with verified email addresses within verified or approved domains. For more information, see "[Restricting email notifications for your organization](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)."

Enterprise owners cannot see which organization members or email addresses receive notifications within approved domains.

Enterprise owners can also approve additional domains for organizations owned by the enterprise. For more information, see "[Verifying or approving a domain for your enterprise account](/github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account)."

### Verifying a domain for your organization

To verify a domain, you must have access to modify domain records with your domain hosting service.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.add-dns-txt-record %}
1. Wait for your DNS configuration to change, which may take up to 72 hours. You can confirm your DNS configuration has changed by running the `dig` command on the command line, replacing `ORGANIZATION` with the name of your organization and `example.com` with the domain you'd like to verify. In der Befehlsausgabe sollte Ihr neuer TXT-Eintrag aufgelistet werden.
   ```shell
   $ dig _github-challenge-<em>ORGANIZATION</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
1. After confirming your TXT record is added to your DNS, follow steps one through three above to navigate to your organization's approved and verified domains.
{% data reusables.organizations.continue-verifying-domain %}
11. Sobald der Badge „Verified“ (Verifiziert) auf der Profilseite Ihrer Organisation sichtbar ist, können Sie den TXT-Eintrag im Domain-Hosting-Dienst optional aus dem DNS-Eintrag löschen.![Badge „Verified“ (Verifiziert)](/assets/images/help/organizations/verified-badge.png)

### Approving a domain for your organization

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.domains-approve-it-instead %}
{% data reusables.organizations.domains-approve-domain %}

### Removing an approved or verified domain

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
1. To the right of the domain to remove, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Delete**. !["Delete" for a domain](/assets/images/help/organizations/domains-delete.png)

---
title: Verifying your organization's domain
intro: 'You can verify the domains controlled by your organization to confirm your organization''s identity on {% data variables.product.product_name %}.'
redirect_from:
  - /articles/verifying-your-organization-s-domain
  - /articles/verifying-your-organizations-domain
versions:
  free-pro-team: '*'
---

To verify domains on {% data variables.product.product_name %}, you must have owner permissions in the organization. For more information, see "[Permission levels for an organization](/articles/permission-levels-for-an-organization)." You will also need access to modify domain records with your domain hosting service.

After verifying ownership of your organization's domains, a "Verified" badge will display on the organization's profile. If your organization is on {% data variables.product.prodname_ghe_cloud %} and has agreed to the Corporate Terms of Service, organization owners will be able to verify the identity of organization members by viewing each member's email address within the verified domain. For more information, see "[About your organization's profile page](/articles/about-your-organization-s-profile/)" and "[Upgrading to the Corporate Terms of Service](/articles/upgrading-to-the-corporate-terms-of-service)."

To display a "Verified" badge, the website and email information shown on your organization's profile must match the verified domain or domains. If the website and email address shown on your organization's profile are hosted on different domains, you must verify both domains.

{% note %}

**Note:** If the email address and website shown on your organization's profile use variants of the same domain, you must verify both variants. For example, if your organization's profile shows the website `www.example.com` and the email address `info@example.com`, you would need to verify both `www.example.com` and `example.com`.

{% endnote %}

On {% data variables.product.prodname_ghe_cloud %}, after verifying ownership of your organization's domain, you can restrict email notifications for the organization to that domain. For more information, see "[Restricting email notifications to an approved domain](/articles/restricting-email-notifications-to-an-approved-domain)."

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.verified-domains %}
5. Click **Add a domain**.
![Add a domain button](/assets/images/help/organizations/add-a-domain-button.png)
6. In the domain field, type the domain you'd like to verify, then click **Add domain**.
![Add a domain field](/assets/images/help/organizations/add-domain-field.png)
7. Follow the instructions under **Add a DNS TXT record** to create a DNS TXT record with your domain hosting service. It may take up to 72 hours for your DNS configuration to change. Once your DNS configuration has changed, continue to the next step.
![Instructions to create a DNS txt record](/assets/images/help/organizations/create-dns-txt-record-instructions.png)

   {% tip %}

   **Tip:** You can confirm your DNS configuration has changed by running the `dig` command on the command line. In the example command, replace `ORGANIZATION` with the name of your organization, and `example.com` with the domain you'd like to verify. You should see your new TXT record listed in the command output.

   ```shell
   $ dig _github-challenge-<em>ORGANIZATION</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```

   {% endtip %}

8. After confirming your TXT record is added to your DNS, navigate to the Verified domains tab in your organization's settings. You can follow steps one through four above to locate the Verified domains tab.
![Verified domains settings page with pending domain](/assets/images/help/organizations/pending-domain-verification.png)
9. Next to the domain that's pending verification, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, then click **Continue verifying**.
![Continue verifying domain button](/assets/images/help/organizations/continue-verifying-domain.png)
10. Click **Verify domain**.
![Verify domain button](/assets/images/help/organizations/verify-domain-final-button.png)
11. Optionally, once the "Verified" badge is visible on your organization's profile page, you can delete the TXT entry from the DNS record at your domain hosting service.
![Verified badge](/assets/images/help/organizations/verified-badge.png)

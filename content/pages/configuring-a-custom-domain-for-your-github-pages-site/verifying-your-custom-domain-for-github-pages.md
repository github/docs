---
title: Verifying your custom domain for GitHub Pages
intro: You can increase the security of your custom domain and avoid takeover attacks by verifying your domain.
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Verify a custom domain
---

## About domain verification for GitHub Pages

When you verify your custom domain for your personal account or organization, only repositories owned by your personal account or organization may be used to publish a {% data variables.product.prodname_pages %} site to the verified custom domain or the domain's immediate subdomains.

Verifying your domain stops other GitHub users from taking over your custom domain and using it to publish their own {% data variables.product.prodname_pages %} site. Domain takeovers can happen when you delete your repository, when your billing plan is downgraded, or after any other change which unlinks the custom domain or disables {% data variables.product.prodname_pages %} while the domain remains configured for {% data variables.product.prodname_pages %} and is not verified.

When you verify a domain, any immediate subdomains are also included in the verification. For example, if the `github.com` custom domain is verified, `docs.github.com`, `support.github.com`, and any other immediate subdomains will also be protected from takeovers.

{% data reusables.pages.wildcard-dns-warning %}

It's also possible to verify a domain for your organization{% ifversion ghec %} or enterprise{% endif %}, which displays a "Verified" badge on the organization {% ifversion ghec %}or enterprise{% endif %} profile{% ifversion ghec %} and, on {% data variables.product.prodname_ghe_cloud %},  allows you to restrict notifications to email addresses using the verified domain{% endif %}. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization){% ifversion ghec %}" and "[AUTOTITLE](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise){% endif %}."

### Verifying a domain that is already taken

If you are verifying a domain you own, which is currently in use by another user or organization, to make it available for your {% data variables.product.prodname_pages %} website; note that the process to release the domain from its current location will take 7 days to complete. If you are attempting to verify an already verified domain (verified by another user or organization), the release process will not be successful.

## Verifying a domain for your user site

{% data reusables.user-settings.access_settings %}
1. In the "Code, planning, and automation" section of the sidebar, click **{% octicon "browser" aria-hidden="true" %} Pages**.
{% data reusables.pages.settings-verify-domain-setup %}
1. Wait for your DNS configuration to change, this may be immediate or take up to 24 hours. You can confirm the change to your DNS configuration by running the `dig` command on the command line. In the command below, replace `USERNAME` with your username and `example.com` with the domain you're verifying. If your DNS configuration has updated, you should see your new TXT record in the output.

   ```text
   dig _github-pages-challenge-USERNAME.example.com +nostats +nocomments +nocmd TXT
   ```

{% data reusables.pages.settings-verify-domain-confirm %}

## Verifying a domain for your organization site

Organization owners can verify custom domains for their organization.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Code, planning, and automation" section of the sidebar, click **{% octicon "browser" aria-hidden="true" %} Pages**.
{% data reusables.pages.settings-verify-domain-setup %}
1. Wait for your DNS configuration to change. This may be immediate or take up to 24 hours. You can confirm the change to your DNS configuration by running the `dig` command on the command line. In the command below, replace `ORGANIZATION` with the name of your organization and `example.com` with the domain you're verifying. If your DNS configuration has updated, you should see your new TXT record in the output.

   ```text
   dig _github-pages-challenge-ORGANIZATION.example.com +nostats +nocomments +nocmd TXT
   ```

{% data reusables.pages.settings-verify-domain-confirm %}

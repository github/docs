---
title: Changing the URL for your enterprise
intro: 'If you want to change the URL where your enterprise is accessed, you can change your enterprise slug.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
permissions: Enterprise owners can change the URL for the enterprise.
shortTitle: Change enterprise URL
---

## About changes to enterprise slugs

When you create an enterprise, you choose a "slug" for the enterprise, which is a string used in the URL for your enterprise. For example, if you chose `octo-enterprise` as the slug, the URL for your enterprise would be `https://github.com/enterprises/octo-enterprise`.

If your company pays for {% data variables.product.prodname_ghe_cloud %} by credit card or PayPal, you can change the slug in the settings for your enterprise. When you change the slug, {% data variables.product.company_short %} does not set up any redirects from the old URL. Your old enterprise slug will immediately become available for another customer to use.

{% note %}

**Note:** If you pay for {% data variables.product.prodname_ghe_cloud %} via invoice, or if your enterprise uses {% data variables.product.prodname_emus %}, you must contact {% data variables.contact.contact_enterprise_sales %} to change your enterprise slug.

{% endnote %}

## Considerations when changing your enterprise slug

Before changing the slug for an enterprise, ensure you have considered any parts of your enterprise's configuration, automations, or processes that may depend on the old enterprise slug. To minimize disruption, you should address these points either immediately before or immediately after changing the slug.

Parts of your system that may be affected by changing the slug include, but are not limited to, the following.

### SAML single sign-on (SSO)

If you have enabled SAML single sign-on (SSO) at the enterprise level, you will need to reconfigure the settings in your identity provider (IdP) to use the new enterprise slug. When you change your slug, existing IdP sessions are not revoked, but your members won't be able to use SSO to access resources in your enterprise until you update the IdP settings. If you have enabled SAML or SCIM at the organization level, changing the slug will not affect SSO. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)."

Before changing the slug, to ensure you will have access to your enterprise even if SSO is not working, we recommend you download the recovery codes for your enterprise. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes)."

### API endpoints

Many {% data variables.product.company_short %} API endpoints for managing an enterprise take the enterprise slug as a parameter. If you use these endpoints in automations, you will need to update the API calls to use the new slug. API calls that use the old slug will stop working immediately. The enterprise ID, which can be used as an alternative to the slug in many cases, is not affected by a slug change.

### OpenID Connect  with {% data variables.product.prodname_actions %} workflows

If you use OpenID Connect (OIDC) in {% data variables.product.prodname_actions %} workflows, and have configured your cloud provider to only accept tokens from a unique URL that includes your enterprise slug, you will need to update the settings in your cloud provider. To prevent workflows from failing, the most robust option is to configure your provider to accept tokens from both the old and new slug just before you change the slug. For more information, see "[AUTOTITLE](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#customizing-the-issuer-value-for-an-enterprise)."

### {% data variables.product.prodname_github_connect %}

If your enterprise is linked to one or more {% data variables.product.prodname_ghe_server %} instances via {% data variables.product.prodname_github_connect %}, after changing the slug, you'll need to reset the connection by disabling and then reenabling {% data variables.product.prodname_github_connect %}. For more information, see "[AUTOTITLE](/enterprise-server@latest/admin/configuration/configuring-github-connect/managing-github-connect)" in the {% data variables.product.prodname_ghe_server %} documentation.

## Changing the enterprise slug

{% note %}

**Note:** Before changing the slug for an enterprise, make sure you have understood the potential consequences. For more information, see "[Considerations when changing your enterprise slug](#considerations-when-changing-your-enterprise-slug)."

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}

1. At the bottom of the page, in the "Danger zone" section, click **Change enterprise URL slug**.
1. In the "Change enterprise URL slug" dialog, follow the instructions, then click **Change enterprise slug URL**.

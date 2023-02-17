---
title: About GitHub Enterprise Cloud
intro: '{% data reusables.enterprise.about-ghec %}'
versions:
  ghec: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
---

## About {% data variables.product.product_name %}

{% data variables.product.product_name %} adds advanced functionality to {% data variables.product.prodname_dotcom_the_website %}, such as SAML authentication, additional {% data variables.product.prodname_actions %} minutes, the ability to restrict email notifications to verified domains, and privately published {% data variables.product.prodname_pages %} sites. For a full list of features included with {% data variables.product.product_name %}, see our [Pricing](https://github.com/pricing) page.

One of the main differences between {% data variables.product.product_name %} and other plans for {% data variables.product.prodname_dotcom_the_website %} is access to an enterprise account. Enterprise accounts provide administrators with a single point of visibility and management across multiple organizations. For more information, see "[AUTOTITLE](/admin/overview/about-enterprise-accounts)."

{% data reusables.enterprise.ghe-includes-ghec-and-ghes %} For more information about {% data variables.product.prodname_ghe_server %} and how it differs from {% data variables.product.prodname_ghe_cloud %}, see "[AUTOTITLE](/admin/overview/about-github-for-enterprises#about-deployment-options)."

## About identity and access management

Before you start using {% data variables.product.product_name %}, you must decide whether you want to allow your developers to create and manage their own personal accounts, or whether you want to use {% data variables.product.prodname_emus %}, which allows you to create and manage the user accounts for your developers through your IdP.

If you choose {% data variables.product.prodname_emus %}, all user accounts must be provisioned by a supported IdP via SCIM, and you can manage team and organization membership via your IdP, too. {% data variables.enterprise.prodname_managed_users_caps %} are strongly restricted in their ability to contribute outside of your enterprise.

If you choose not to use {% data variables.product.prodname_emus %}, your developers will create their own personal accounts on {% data variables.product.prodname_dotcom_the_website %}, but you can optionally require SAML authentication before those personal accounts can access your enterprise's resources.

To help you decide which choice is best for your enterprise, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)."

## About documentation

Documentation for both administrators and users of {% data variables.product.product_name %} is available on this site, {% data variables.product.prodname_docs %}.

- [Enterprise administrator documentation](/admin)
- [User documentation](/)

{% data reusables.docs.ghec-docs %}

## Trying {% data variables.product.product_name %}

You can sign up for a free, 30-day trial of {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud)."

## Further reading

- "[AUTOTITLE](/get-started/onboarding/getting-started-with-github-enterprise-cloud)"
- [ {% data variables.product.prodname_roadmap %} ]( {% data variables.product.prodname_roadmap_link %} ) in the  `github/roadmap` repository

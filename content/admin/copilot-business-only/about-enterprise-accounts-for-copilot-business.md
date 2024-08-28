---
title: About enterprise accounts for Copilot Business
intro: 'Learn about the options for creating an enterprise account to manage {% data variables.product.prodname_copilot_business_short %} licenses, without adopting {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
topics:
  - Accounts
  - Enterprise
  - Fundamentals
shortTitle: About the account
redirect_from:
  - /early-access/copilot/managing-copilot-business-licenses-with-an-enterprise-account
---

You can use an enterprise account to manage licenses for {% data variables.product.prodname_copilot_for_business %}, without adopting {% data variables.product.prodname_enterprise %}.

>[!NOTE] Access to this feature is currently managed by {% data variables.contact.contact_enterprise_sales %}.

## What is an enterprise account for {% data variables.product.prodname_copilot_business_short %}?

To use {% data variables.product.prodname_copilot %}, a user must authenticate to an account on {% data variables.product.prodname_dotcom %} that has a license for {% data variables.product.prodname_copilot_short %}. Organizations and enterprises on {% data variables.product.prodname_dotcom %} can manage members' access to {% data variables.product.prodname_copilot_short %} through a {% data variables.product.prodname_copilot_business_short %} subscription.

If you don't already manage users through an organization or enterprise, you can create an enterprise account specifically for allocating {% data variables.product.prodname_copilot_business_short %} licenses.

* You'll only pay for the {% data variables.product.prodname_copilot_short %} licenses you assign. For pricing, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#pricing-for-github-copilot-business)."
* You won't pay for {% data variables.product.prodname_enterprise %} seats.
* You won't be able to create organizations or repositories in the enterprise, or use features that require repositories or organizations, such as {% data variables.product.prodname_actions %}.

When you create the account, you can choose whether your enterprise members will authenticate using their personal {% data variables.product.company_short %} accounts, or using new accounts that you will create and manage from an external identity management system. For a comparison, see "[AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/choosing-an-enterprise-type-for-github-enterprise-cloud)."

## How will I manage access for users?

How you will add users to your enterprise and manage license assignment depends on whether you choose an enterprise with personal accounts or with {% data variables.product.prodname_emus %}.

### Personal accounts

If you request an enterprise with personal accounts:

* You'll **add users** to the enterprise by sending an invitation to their personal {% data variables.product.prodname_dotcom %} account.
* You'll **create teams** in the enterprise to manage which users receive {% data variables.product.prodname_copilot_business_short %} licenses. You can manage membership of the teams on {% data variables.product.prodname_dotcom %} or with the REST API.
* When users receive a license, they can authenticate to {% data variables.product.prodname_dotcom %} from their development environment and **gain access** to {% data variables.product.prodname_copilot_short %}.
* Optionally, you can configure **SAML single sign-on** (SSO), so that users must authenticate to an external identity system in addition to their personal account.

### {% data variables.product.prodname_emus %}

If you request an {% data variables.enterprise.prodname_emu_enterprise %}:

* You'll **add users** to the enterprise by provisioning {% data variables.enterprise.prodname_managed_users %} from an identity provider (IdP), using SCIM.
* You'll **create teams** in the enterprise to manage which users receive {% data variables.product.prodname_copilot_business_short %} licenses. You can manage membership of the teams from your IdP, on {% data variables.product.prodname_dotcom %}, or with the REST API.
* When users receive a license, they can use single sign-on to authenticate to their {% data variables.product.prodname_dotcom %} account from their development environment and **gain access** to {% data variables.product.prodname_copilot_short %}.

## Limitations

* You will not be able to use REST API endpoints that require an organization. In particular, these include:
  * "[List enterprise consumed licenses](/rest/enterprise-admin/license#list-enterprise-consumed-licenses)"
  * "[AUTOTITLE](/rest/orgs/members)"
  * "[AUTOTITLE](/rest/copilot/copilot-user-management)"
* Documentation on {% data variables.product.prodname_docs %} may not apply to your enterprise.
* With an enterprise for personal accounts, you cannot use team synchronization to manage membership of enterprise teams.

## Getting started

To get started, you will work with {% data variables.contact.contact_enterprise_sales %} to create an enterprise account, then add users to your enterprise and assign {% data variables.product.prodname_copilot_business_short %} licenses.

See the setup guide for your chosen type of enterprise.

* "[AUTOTITLE](/admin/copilot-business-only/setting-up-a-dedicated-enterprise-for-copilot-business-personal-accounts)
* "[AUTOTITLE](/admin/copilot-business-only/setting-up-a-dedicated-enterprise-for-copilot-business-managed-users)

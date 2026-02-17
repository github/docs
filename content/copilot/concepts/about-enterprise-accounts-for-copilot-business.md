---
title: About enterprise accounts for Copilot Business
intro: 'Learn about the option to create an enterprise account to manage only {% data variables.copilot.copilot_business_short %} licenses without adopting {% data variables.product.prodname_enterprise %}.'
versions:
  feature: copilot
topics:
  - Accounts
  - Enterprise
  - Fundamentals
shortTitle: Copilot-only enterprises
redirect_from:
  - /admin/copilot-business-only
  - /admin/copilot-business-only/about-enterprise-accounts-for-copilot-business
  - /early-access/copilot/managing-copilot-business-licenses-with-an-enterprise-account
  - /early-access/copilot/managing-copilot-business-licenses-with-an-enterprise-account
contentType: concepts
category:
  - Learn about Copilot
---

## How can my enterprise use {% data variables.product.prodname_copilot %} only?

To use {% data variables.product.prodname_copilot %}, a user must authenticate to an account on {% data variables.product.prodname_dotcom %} that has a license for {% data variables.product.prodname_copilot_short %}. You can assign a license to a user through a {% data variables.copilot.copilot_business_short %} subscription if they're a member of an organization or enterprise that you administer.

If you don't already manage users through an organization or enterprise, you can create an enterprise account specifically for allocating {% data variables.copilot.copilot_business_short %} licenses. This gives you access to enterprise-grade integrations with identity providers for authentication and provisioning, without needing to pay for {% data variables.product.prodname_enterprise %} licenses.

## How will I manage access for users?

When you create your enterprise account, you will choose whether your enterprise members will authenticate using their personal {% data variables.product.company_short %} accounts, or using new accounts that you will create and manage from an external identity management system. The way that you add users to your enterprise and manage license assignment will depend on which you choose.

### Personal accounts

* You'll add users to the enterprise by sending an **invitation** to their personal {% data variables.product.prodname_dotcom %} account.
* Optionally, you'll **create teams** in the enterprise to scale license management. You can manage membership of the teams on {% data variables.product.prodname_dotcom %} or with the REST API.
* You'll **assign licenses** to users and teams.
* When users receive a license, they can **authenticate** to {% data variables.product.prodname_dotcom %} **from their development environment** and gain access to {% data variables.product.prodname_copilot_short %}.
* Optionally, you can configure **SAML single sign-on** (SSO), so that users must authenticate to an external identity system in addition to their personal account.

### {% data variables.product.prodname_emus %}

* You'll add users to the enterprise by **provisioning {% data variables.enterprise.prodname_managed_users %}** from an identity provider (IdP) using SCIM.
* You'll **create teams** in the enterprise to manage which users receive {% data variables.copilot.copilot_business_short %} licenses. You can manage membership of the teams from your IdP, on {% data variables.product.prodname_dotcom %}, or with the REST API.
* When users receive a license, they can use **single sign-on** to authenticate to their {% data variables.product.prodname_dotcom %} account from **their development environment** and gain access to {% data variables.product.prodname_copilot_short %}.

## Getting started

To get started, see [AUTOTITLE](/copilot/how-tos/set-up/set-up-a-dedicated-enterprise-for-copilot-business).

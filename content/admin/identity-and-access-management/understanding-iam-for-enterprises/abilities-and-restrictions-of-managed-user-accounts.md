---
title: Abilities and restrictions of managed user accounts
shortTitle: Restrictions for managed users
intro: "If you centrally manage identity and access for your enterprise members on {% data variables.product.prodname_dotcom %} from your identity provider (IdP), some abilities and restrictions apply for your users' experience on {% data variables.product.prodname_dotcom %}."
versions:
  ghec: '*'
type: reference
topics:
  - Accounts
  - Enterprise
  - Fundamentals
redirect_from:
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/abilities-and-restrictions-of-managed-user-accounts
---

## About {% data variables.product.prodname_emus %}

With {% data variables.product.prodname_emus %}, you can control the user accounts of your enterprise members through your identity provider (IdP). For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)."

## Abilities and restrictions of {% data variables.enterprise.prodname_managed_users %}

{% data variables.enterprise.prodname_managed_users_caps %} can only contribute to private and internal repositories within their enterprise and private repositories owned by their user account. {% data variables.enterprise.prodname_managed_users_caps %} have read-only access to the wider {% data variables.product.prodname_dotcom %} community. These visibility and access restrictions for users and content apply to all requests, including API requests.

- {% data variables.enterprise.prodname_managed_users_caps %} authenticate using only your identity provider, and have no password or two-factor authentication methods stored on {% data variables.product.prodname_dotcom %}. As a result, they do not see the sudo prompt when taking sensitive actions. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/sudo-mode)."
- {% data variables.enterprise.prodname_managed_users_caps %} cannot be invited to organizations or repositories outside of the enterprise, nor can the {% data variables.enterprise.prodname_managed_users %} be invited to other enterprises.
- {% data variables.enterprise.prodname_managed_users_caps %} and the content they create is only visible to other members of the enterprise.
- Other {% data variables.product.prodname_dotcom %} users cannot see, mention, or invite a {% data variables.enterprise.prodname_managed_user %} to collaborate.
- {% data variables.enterprise.prodname_managed_users_caps %} can view all public repositories on {% data variables.product.prodname_dotcom_the_website %}, but cannot interact with repositories outside of the enterprise in any of the following ways:
  - Push code to the repository
  - Create issues or pull requests within the repository
  - Create or comment on discussions within the repository
  - Comment on issues or pull requests, or add reactions to comments
  - Star, watch, or fork the repository
- {% data variables.enterprise.prodname_managed_users_caps %} can be added to organization-owned repositories as repository collaborators, which gives them access to repositories in organizations where they are not members. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators-or-repository-collaborators)."
- {% data variables.enterprise.prodname_managed_users_caps %} can be assigned the guest collaborator role, which prevents them from accessing internal repositories in the enterprise except in organizations where they are added as members. For more information, see "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/roles-in-an-enterprise#guest-collaborators)."

- {% data variables.enterprise.prodname_managed_users_caps %} cannot create gists or comment on gists.
- {% data variables.enterprise.prodname_managed_users_caps %} cannot create personalised profiles.
- {% data variables.enterprise.prodname_managed_users_caps %} cannot follow users outside of the enterprise.
- {% data variables.enterprise.prodname_managed_users_caps %} cannot create starter workflows for {% data variables.product.prodname_actions %}.
- {% data variables.enterprise.prodname_managed_users_caps %} cannot install {% data variables.product.prodname_github_apps %} on their user accounts.
- {% data variables.enterprise.prodname_managed_users_caps %} can install {% data variables.product.prodname_github_app %} on a repository if the app does not request organization permissions and if the {% data variables.enterprise.prodname_managed_user %} has admin access to the repositories that they are granting the app access to.
- {% data variables.enterprise.prodname_managed_users_caps %} can install {% data variables.product.prodname_github_app %} on an organization if the {% data variables.enterprise.prodname_managed_user %} is an organization owner.
- You can choose whether {% data variables.enterprise.prodname_managed_users %} are able to create repositories owned by their user accounts. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)."
- If you allow {% data variables.enterprise.prodname_managed_users %} to create repositories owned by their user accounts, they can only own private repositories and can only invite other enterprise members to collaborate on their user-owned repositories.
- {% data reusables.enterprise-accounts.emu-forks %}
- Only private and internal repositories can be created in organizations owned by an {% data variables.enterprise.prodname_emu_enterprise %}, depending on organization and enterprise repository visibility settings.
- {% data variables.enterprise.prodname_managed_users_caps %} are limited in their use of {% data variables.product.prodname_pages %}. For more information, see "[AUTOTITLE](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users)."
- {% data variables.enterprise.prodname_managed_users_caps %} cannot sign up for {% data variables.product.prodname_copilot_for_individuals %}. To allow a managed user to use {% data variables.product.prodname_copilot_short %}, you must grant the user access to a {% data variables.product.prodname_copilot_business_short %} or {% data variables.product.prodname_copilot_enterprise_short %} subscription. For more information, see "[AUTOTITLE](/copilot/about-github-copilot#getting-access-to-github-copilot)."
- {% data variables.enterprise.prodname_managed_users_caps %} can only create and use codespaces that are owned and paid for by their organization or enterprise. This means that {% data variables.enterprise.prodname_managed_users %}:
  - Can create codespaces for repositories owned by their organization, or forks of these repositories, provided that the organization can pay for {% data variables.product.prodname_github_codespaces %}. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization)."
  - Cannot create codespaces for their personal repositories, other than forks of repositories owned by their organization; for any other repositories outside their organization; or from {% data variables.product.company_short %}'s public templates for {% data variables.product.prodname_github_codespaces %}.
  - Cannot publish a codespace created from a template to a new repository.
- {% data reusables.actions.entitlement-minutes-emus %}
- {% data variables.enterprise.prodname_managed_users_caps %} can create {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %}.

  {% data reusables.emus.oauth-app-note %}
- {% data reusables.secret-scanning.secret-scanning-user-owned-enablement %}
- {% data variables.enterprise.prodname_managed_users_caps %} do not have access to the {% data variables.product.prodname_certifications %} program.

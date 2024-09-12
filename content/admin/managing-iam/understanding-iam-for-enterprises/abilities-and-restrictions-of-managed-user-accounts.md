---
title: Abilities and restrictions of managed user accounts
shortTitle: Restrictions for managed users
intro: 'Learn what users can and cannot do if you manage accounts from an identity provider (IdP).'
versions:
  ghec: '*'
type: reference
topics:
  - Accounts
  - Enterprise
  - Fundamentals
redirect_from:
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/abilities-and-restrictions-of-managed-user-accounts
  - /admin/identity-and-access-management/understanding-iam-for-enterprises/abilities-and-restrictions-of-managed-user-accounts
---

With {% data variables.product.prodname_emus %}, you can control the user accounts of your enterprise members through your identity provider (IdP). See "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)."

{% data variables.enterprise.prodname_managed_users_caps %} can contribute only to private and internal repositories within their enterprise and their own private repositories. They have read-only access to the wider {% data variables.product.prodname_dotcom %} community. These visibility and access restrictions apply to all requests, including API requests.

## Authentication

* {% data variables.enterprise.prodname_managed_users_caps %} authenticate using only your identity provider, and have no password or two-factor authentication methods stored on {% data variables.product.prodname_dotcom %}. As a result, they do not see the sudo prompt when taking sensitive actions.

## {% data variables.product.prodname_actions %}

* {% data variables.enterprise.prodname_managed_users_caps %} cannot create workflow templates for {% data variables.product.prodname_actions %}.
* Entitlement minutes for {% data variables.product.company_short %}-hosted runners are not available for {% data variables.enterprise.prodname_managed_users %}.
* {% data variables.product.prodname_emus %} can trigger workflows in organizations where they are not members by forking the organization repository, then creating a pull request targeting the organization repository.

## {% data variables.product.prodname_github_apps %}

{% data variables.enterprise.prodname_managed_users_caps %}:

* Cannot install {% data variables.product.prodname_github_apps %} on their user accounts.
* Can install {% data variables.product.prodname_github_apps %} on a repository if the app doesn't request organization permissions and if the {% data variables.enterprise.prodname_managed_user %} has admin access to the repository.
* Can install {% data variables.product.prodname_github_apps %} on an organization if the {% data variables.enterprise.prodname_managed_user %} is an organization owner.
* Can purchase and install paid {% data variables.product.prodname_github_apps %} only if the {% data variables.enterprise.prodname_managed_user %} is an enterprise owner.
* Can create {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %}.

  {% data reusables.emus.oauth-app-note %}

## {% data variables.product.prodname_github_codespaces %}

* {% data variables.enterprise.prodname_managed_users_caps %} can only create codespaces that are owned by the enterprise. This means that {% data variables.enterprise.prodname_managed_users %}:
  * Can create codespaces for repositories owned by their organization, or forks of these repositories, provided that the organization can pay for {% data variables.product.prodname_github_codespaces %}. See "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization)."
  * Cannot create codespaces for their personal repositories, any repositories outside their organizations, or {% data variables.product.company_short %}'s public templates for {% data variables.product.prodname_github_codespaces %}.
  * Cannot publish a codespace created from a template to a new repository.

## {% data variables.product.prodname_copilot %}

* {% data variables.enterprise.prodname_managed_users_caps %} cannot sign up for {% data variables.product.prodname_copilot_for_individuals %}. To allow a managed user to use {% data variables.product.prodname_copilot_short %}, you must grant the user access to a {% data variables.product.prodname_copilot_business_short %} or {% data variables.product.prodname_copilot_enterprise_short %} subscription. See "[AUTOTITLE](/copilot/about-github-copilot#getting-access-to-github-copilot)."

## {% data variables.product.prodname_pages %}

* {% data variables.enterprise.prodname_managed_users_caps %} are limited in their use of {% data variables.product.prodname_pages %}. See "[AUTOTITLE](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users)."

## Interactions

* {% data variables.enterprise.prodname_managed_users_caps %} can view all public repositories, but cannot interact with repositories outside of the enterprise in any of the following ways:
  * Push code to the repository
  * Create issues or pull requests within the repository
  * Create or comment on discussions within the repository
  * Comment on issues or pull requests, or add reactions to comments
  * Star, watch, or fork the repository
* {% data variables.enterprise.prodname_managed_users_caps %} cannot follow users outside of the enterprise.

## Repository management

* You can choose whether {% data variables.enterprise.prodname_managed_users %} are able to create repositories owned by their user accounts. See "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)."
* If you allow {% data variables.enterprise.prodname_managed_users %} to create repositories owned by their user accounts, they can only own private repositories and can only invite other enterprise members to collaborate on their user-owned repositories.
* {% data reusables.enterprise-accounts.emu-forks %}
* Only private and internal repositories can be created in organizations owned by an {% data variables.enterprise.prodname_emu_enterprise %}, depending on organization and enterprise repository visibility settings.

## Visibility and invitations

{% data variables.enterprise.prodname_managed_users_caps %}:

* Cannot be invited to organizations or repositories outside of the enterprise, or to other enterprises.
* Are only visible, along with the content they create, to other members of the enterprise.
* Cannot be seen, mentioned, or invited to collaborate by other {% data variables.product.prodname_dotcom %} users.
* Can be added to organization-owned repositories as repository collaborators, giving them access to repositories in organizations where they are not members
* Can be assigned the guest collaborator role, preventing them from accessing internal repositories in the enterprise except in organizations where they are added as members

## Other restrictions

{% data variables.enterprise.prodname_managed_users_caps %}:

* Cannot create gists or comment on gists.
* Cannot create personalized profiles.
* Do not have access to the {% data variables.product.prodname_certifications %} program.

---
title: People who consume a license in an organization
intro: 'Learn how consumption of {% data variables.product.github %} licenses is determined for paid organizations and enterprises.'
shortTitle: GitHub license users
allowTitleToDifferFromFilename: true
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-per-user-pricing
  - /articles/about-per-user-pricing
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/about-per-user-pricing
  - /github/billing/managing-billing-for-your-github-account/about-per-user-pricing
  - /billing/managing-the-plan-for-your-github-account/about-per-user-pricing
  - /billing/concepts/license-consumption
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Downgrades
  - Enterprise
  - Licensing
  - Organizations
  - Billing
contentType: reference
---

{% data reusables.billing.about-billing %} For organizations and enterprises, the "plan" component of the bill is based on the number of licensed seats you use.

## Organizations on {% data variables.product.prodname_team %}

{% data variables.product.github %} bills for the following people:

* Organization members, including owners
* Outside collaborators on private repositories owned by your organization, excluding forks
  * {% data variables.product.company_short %} counts each outside collaborator once, even if the user account has access to multiple repositories in your organization.
* Anyone with a pending invitation to become an outside collaborator on private repositories owned by your organization, excluding forks
  * Inviting an outside collaborator to a repository using their email address temporarily uses an available seat, even if they already have access to other repositories. After they accept the invite, the seat will be freed up again. Inviting them using their username does not temporarily use a seat.
* Dormant users

### People who don't consume a license

* Billing managers
* Anyone with a pending invitation to become a billing manager
* Anyone with a pending invitation to become an outside collaborator on a public repository owned by your organization

## Organizations on {% data variables.product.prodname_ghe_cloud %}

{% data reusables.enterprise-managed.repo-collaborators-note %}

{% data variables.product.company_short %} bills for each of the following accounts on {% data variables.product.prodname_ghe_cloud %}:

* Enterprise owners who are a member or owner of at least one organization in the enterprise
* Organization members, including owners
* Outside collaborators on private or internal repositories owned by your organization, excluding forks
  * {% data variables.product.company_short %} counts each outside collaborator once, even if the user account has access to multiple repositories in your organization.
* Dormant users who are a member or owner of at least one organization in the enterprise

If your enterprise does not use {% data variables.product.prodname_emus %}, you will also be billed for each of the following accounts:

* Anyone with a pending invitation to become an organization owner or member
* Anyone with a pending invitation to become an outside collaborator on private or internal repositories owned by your organization, excluding forks
  * {% data reusables.organizations.org-invite-scim %}
  * Inviting an outside collaborator to a repository using their email address temporarily uses an available seat, even if they already have access to other repositories. After they accept the invite, the seat will be freed up again. Inviting them using their username does not temporarily use a seat.

### People who don't consume licenses

* {% data variables.enterprise.prodname_managed_users_caps %} that are suspended
* Enterprise owners who are not a member or owner of at least one organization in the enterprise, except for the user who set up the enterprise
* Enterprise billing managers
* Billing managers for individual organizations
* Anyone with a pending invitation to become a billing manager
* Anyone with a pending invitation to become an outside collaborator on a public repository owned by your organization
* Guest collaborators who are not organization members or repository collaborators (see [AUTOTITLE](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#guest-collaborators))
* Users of {% data variables.visual_studio.prodname_vss_ghe %} whose accounts on {% data variables.product.prodname_dotcom %} are not linked, and who do not meet any of the other criteria for per-user pricing
* Users who have been provisioned with a {% data variables.enterprise.prodname_managed_user %}, but are not members of any organizations in the enterprise

## Organizations on {% data variables.product.prodname_ghe_server %}

* Any active user who has successfully authenticated to your {% data variables.product.prodname_ghe_server %} instance
* Dormant users (administrators can suspend dormant users to free licenses, see [Managing dormant users]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users){% ifversion not ghes %} in the {% data variables.product.prodname_ghe_server %} documentation{% endif %})

### People who don't consume a license

* Suspended users (see [Suspending and unsuspending users]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/suspending-and-unsuspending-users){% ifversion not ghes %} in the {% data variables.product.prodname_ghe_server %} documentation{% else %}.{% endif %})
* If you have enabled SCIM on your {% data variables.product.prodname_ghe_server %} instance, the built-in setup user you create, provided you use the `scim-admin` username.
* Users who already consume a license on {% data variables.product.prodname_ghe_cloud %}, provided you sync license usage between environments. See [AUTOTITLE](/billing/concepts/enterprise-billing/combined-enterprise-use).

## Further reading

{%- ifversion not fpt %}
* [AUTOTITLE](/admin/overview/about-enterprise-accounts)
* [AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)
{%- endif %}
* [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)
* [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization)

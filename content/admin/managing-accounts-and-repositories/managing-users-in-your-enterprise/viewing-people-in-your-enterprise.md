---
title: Viewing people in your enterprise
intro: 'To audit access to enterprise-owned resources or user license usage, enterprise owners can view every administrator and member of the enterprise.'
permissions: Enterprise owners can view the people in an enterprise.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-people-in-your-enterprise-account
  - /articles/viewing-people-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/viewing-people-in-your-enterprise
  - /admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
topics:
  - Enterprise
shortTitle: View people in your enterprise
---

{% data reusables.enterprise-managed.repo-collaborators-note %}

## About the list of people in your enterprise

To audit access to your enterprise's resources and manage license usage, you can see a list of all the people who have access to your enterprise.

You can see all current enterprise members and enterprise administrators{% ifversion ghec %}, as well as pending invitations to become members and administrators{% endif %}. To make it easier to consume this information, you can search and filter the lists. You can also view an overview of the number of members in your enterprise, grouped by role{% ifversion ghec %}, type of license, or type of deployment{% endif %}.

{% ifversion ghec %}

If {% data variables.product.prodname_github_connect %} is configured for your enterprise, when you filter a list of people in your enterprise, the following limitations apply.

* The filter for two-factor authentication (2FA) status does not show people who only have an account on a {% data variables.product.prodname_ghe_server %} instance.
* If you combine the filter for accounts on {% data variables.product.prodname_ghe_server %} instances with either the filter for organizations or 2FA status, you will not see any results.

For more information about {% data variables.product.prodname_github_connect %}, see "[AUTOTITLE](/enterprise-server@latest/admin/configuration/configuring-github-connect/about-github-connect)" in the {% data variables.product.prodname_ghe_server %} documentation.

{% endif %}

{% ifversion enterprise-member-csv %}
You can also export membership information for your enterprise. For more information, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/exporting-membership-information-for-your-enterprise)."
{% endif %}

## Viewing enterprise administrators

You can view all the current enterprise owners{% ifversion ghec %} and billing managers{% endif %} for your enterprise.{% ifversion enterprise-membership-view-improvements %} You can see useful information about each administrator{% ifversion ghec %} and filter the list by role{% endif %}.{% endif %} You can find a specific person by searching for their username or display name.

{% ifversion ghes %}
Enterprise owners whose accounts are suspended are included in the list of enterprise administrators, and are identified as suspended. You should consider demoting any suspended owners you see. For more information, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator#demoting-a-site-administrator-from-the-enterprise-settings)."
{% endif %}

You can also remove an administrator. For more information. see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#removing-an-enterprise-administrator-from-your-enterprise-account)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}

## Viewing members {% ifversion enterprise-membership-view-improvements %}{% else %}and outside collaborators{% endif %}

You can see all the current members {% ifversion enterprise-membership-view-improvements %}{% else %}or outside collaborators{% endif %} for your enterprise. You can see useful information about each account and filter the list in useful ways, such as by role. In addition to the list of members, you will see an overview of the number of members in your enterprise, grouped by role{% ifversion ghec %}, type of license, and type of deployment{% endif %}.

You can find a specific person by searching for the person's username or display name. To view more information about the person's access to your enterprise, such as the organizations the person belongs to, you can click the person's name.

{% ifversion remove-enterprise-members %}
You can also remove any enterprise member from all organizations owned by the enterprise. For more information, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise)."
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}{% ifversion enterprise-membership-view-improvements %}
{% else %}
1. Optionally, to view a list of outside collaborators rather than the list of members, under "Members", click **Outside collaborators**.{% endif %}
{% ifversion enterprise-member-csv %}
1. Optionally, to export the list of members as a CSV report, click **CSV report**. For more information about the information included in the report, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/exporting-membership-information-for-your-enterprise)."{% endif %}

{% ifversion enterprise-members-breakdown %}

### About the membership overview

On the "Members" page, you will find an overview of the number of members in your enterprise, grouped by role{% ifversion ghec %}, type of license consumed, and the type of deployment the member is on. The following sections explain how the numbers in this overview are calculated.

If your enterprise uses both {% data variables.product.prodname_ghe_cloud %} and {% data variables.product.prodname_ghe_server %}, to get accurate data about your members and licenses across your deployments, you will need to enable {% data variables.product.prodname_github_connect %} and synchronize license usage. For more information, see "[AUTOTITLE](/enterprise-server@latest/admin/configuration/configuring-github-connect/about-github-connect)" in the {% data variables.product.prodname_ghe_server %} documentation.

#### Roles

The "Roles" column groups members by their role in the enterprise{% endif %}. For more information, see "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/roles-in-an-enterprise)."

If a user has multiple roles in an enterprise, the user is counted once for each role. For example, if the same user is a member of three organizations and an owner of two organizations, the user counts once towards "Organization member" and once towards "Organization owner."

An "outside collaborator" is a user who has access to a repository in an organization, but is not a member of the organization. The user might be an outside collaborator in one organization in your enterprise and a member of another organization. In this case, the user counts towards each total. For more information, see "[AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization)."

If your enterprise uses {% ifversion ghec %}{% data variables.enterprise.prodname_managed_users %}{% else %}SCIM provisioning{% endif %}, an "unaffiliated" user is someone who been provisioned with a user account, but is not a member of any of your organizations.

{% ifversion ghec %}

#### User licenses consumed

The "User licenses consumed" column shows you how licenses are consumed in your enterprise. For more information, see "[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)."

If there are outside collaborators in your enterprise, the "total consumed" number of licenses may be larger than the number of people listed for your enterprise. An outside collaborator consumes a license, but is not counted in the total member count displayed next to "people in YOUR-ENTERPRISE". A pending invitation to an outside collaborator also consumes a license, but is not counted in the "By invitations" count in the overview.

For more information about how license usage is calculated across deployments, see "[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise#about-the-calculation-of-consumed-licenses)."

#### Deployment

The "Deployment" column groups users by the type of deployment they are using. For more information, see "[AUTOTITLE](/admin/overview/about-github-for-enterprises#about-deployment-options)."

"Cloud members" are a member or owner of any organization in your enterprise on {% data variables.product.prodname_ghe_cloud %}. "Server members" have an account on a {% data variables.product.prodname_ghe_server %} instance owned by your enterprise. "Members on cloud and server" are users who match both these criteria.
{% endif %}

{% endif %}

{% ifversion ghec %}

## Viewing members' email addresses

You may be able to view the email addresses for members of your enterprise on either {% data variables.location.product_location %} or an external identity system. The visibility of the email addresses depends on your enterprise's authentication method, domains, and potentially the member's user profile configuration.

* If you use {% data variables.product.prodname_emus %} and the `NameID` for your SAML configuration is an email address, you can view the `NameID` for each of your enterprise members.

* If you verify a domain for your enterprise, you can view members' email addresses for the verified domain. For more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)."

* If you don't use {% data variables.product.prodname_emus %}, and you also don't configure SAML single sign-on (SSO), members access your enterprise's resources on {% data variables.location.product_location %} solely using a personal account. {% data reusables.saml.personal-accounts-determine-email-visibility %}

If you use {% data variables.product.prodname_emus %}, verify a domain, or configure SAML SSO for your enterprise, you may be able to view the email addresses in one or more of the following ways.

1. On your SAML Identity Provider (IdP), review the email addresses of users with access to {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)."
1. Export the membership report for your enterprise on {% data variables.product.prodname_dotcom %}. The report may contain the user's email address, stored as the following values.

   * `GitHub com saml name`: The `NameID` from the user's linked SAML identity, which is typically the user's email address (for more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)")
   * `GitHub com verified domain emails`: Email addresses for any verified domains (for more information, see "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)")

   For more information, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/exporting-membership-information-for-your-enterprise)."
{% data reusables.saml.use-api-to-get-externalidentity %}

{% endif %}

{% ifversion enterprise-membership-view-improvements %}

## Viewing outside collaborators

You can see all the current outside collaborators for your enterprise. You can see useful information about each collaborator and filter the list in useful ways, such as by organization. You can find a specific collaborator by searching for their username or display name.

You can view more information about the person's access to your enterprise, such as a list of all the repositories the collaborator has access to, by clicking on the person's name.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Under "People", click **Outside collaborators**.
{% endif %}

{% ifversion ghec %}

## Viewing pending invitations

You can see all the pending invitations to become members, administrators, or outside collaborators in your enterprise. You can filter the list in useful ways, such as by license, by organization, or by source. You can find a specific person by searching for their username or display name.

In the list of pending members, for any individual account, you can cancel all invitations to join organizations owned by your enterprise. This does not cancel any invitations for that same person to become an enterprise administrator or outside collaborator.

{% note %}

**Note:** If an invitation was provisioned via SCIM, you must cancel the invitation via your identity provider (IdP) instead of on {% data variables.product.prodname_dotcom %}.

{% endnote %}

If you use {% data variables.visual_studio.prodname_vss_ghe %}, the list of pending invitations includes all {% data variables.product.prodname_vs %} subscribers that haven't joined any of your organizations on {% data variables.product.prodname_dotcom %}, even if the subscriber does not have a pending invitation to join an organization. For more information about how to get {% data variables.product.prodname_vs %} subscribers access to {% data variables.product.prodname_enterprise %}, see "[AUTOTITLE](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/setting-up-visual-studio-subscriptions-with-github-enterprise)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Under "People", click **Invitations**.
1. Optionally, you can cancel all invitations for an account to join organizations owned by your enterprise. To the right of the account, click {% octicon "kebab-horizontal" aria-label="Show actions" %}, then click **Cancel invitation**.

   ![Screenshot of a single invitation on the "Invitations" page. A button, titled "Cancel invitation", is highlighted with an orange outline.](/assets/images/help/enterprises/cancel-enterprise-member-invitation.png)
1. Optionally, you can view pending invitations for enterprise administrators or outside collaborators. Under "Invitations", click **Administrators** or **Outside collaborators**.
1. Optionally, to filter the list of pending invitations by license, by organization, or by source, use the dropdown menus at the top of the list.

   ![Screenshot of the "Invitations" page. Three dropdown menus, titled "License", "Organizations", and "Source" are highlighted with an orange outline.](/assets/images/help/enterprises/enterprise-filter-pending-invitations.png)

{% endif %}

## Viewing suspended members

If your enterprise uses {% ifversion ghec %}{% data variables.product.prodname_emus %}{% else %}SCIM provisioning{% endif %}, you can view suspended users. Suspended users are members who have been deprovisioned after being unassigned from the application or deleted on the identity provider.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Under "People", click **Suspended**.

## Viewing dormant users

You can view a list of all dormant users {% ifversion ghes %} who have not been suspended and {% endif %}who are not site administrators. {% data reusables.enterprise-accounts.dormant-user-activity-threshold %} For more information, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users)."

{% ifversion filter-by-enterprise-member-type %}

## Filtering by member type{% ifversion ghec %} in an {% data variables.enterprise.prodname_emu_enterprise %}{% endif %}

{% ifversion ghec %}If your enterprise uses {% data variables.product.prodname_emus %}, you{% elsif ghes %}You{% endif %} can filter the member list of an organization by type to determine if memberships are managed through an IdP or managed directly. Memberships managed through an IdP were added through an IdP group, and the IdP group was connected to a team within the organization. Memberships managed directly were added to the organization manually. The way a membership is managed in an organization determines how it must be removed. You can use this filter to determine how members were added to an organization, so you know how to remove them.{% ifversion ghec %} For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#about-organization-membership-management)."{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
1. Under "Organizations", in the search bar, begin typing the organization's name until it appears in the search results.
1. Click the name of the organization.
1. Above the organization name, click {% octicon "person" aria-hidden="true" %} **People**.

   ![Screenshot of the tabs above an organization name. The "People" tab is highlighted with an orange outline.](/assets/images/help/enterprises/emu-organization-people-tab.png)
1. Above the list of members, click **Type**, then select the type of members you want to view.
   ![Screenshot of the list of members. A dropdown menu labeled "Type" is outlined in orange, and an expanded dropdown shows options for "All members," "Managed by IdP groups," and "Managed directly."](/assets/images/help/enterprises/filter-by-member-type.png)

{% endif %}

{% ifversion scim-for-ghes-public-beta %}

## Filtering by account type (SAML and SCIM)

If you use SAML authentication and SCIM provisioning, you can filter members based on how they authenticate and how their account was created.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Select **Account Type**, then choose from the following options.

   * **Built-in**: Users with local accounts on {% data variables.location.product_location %} who authenticate with a username and password.
   * **SAML linked**: Users who authenticate with SAML via an identity provider, but were not provisioned by SCIM.
   * **SAML and SCIM linked**: Users who authenticate with SAML via an identity provider, and were provisioned by SCIM.

{% endif %}

{% ifversion ghec or ghes %}

## Viewing members without an email address from a verified domain

You can view a list of members in your enterprise who don't have an email address from a verified domain associated with their user account.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
1. Under "Notification preferences", click the {% octicon "eye" aria-hidden="true" %} **View enterprise members without an approved or verified domain email** link.
{% endif %}

## Viewing whether members in your enterprise have 2FA enabled

You can see which people in your enterprise have enabled two-factor authentication{% ifversion mandatory-2fa-required-overview %} or are required to do so{% endif %}.

{% ifversion mandatory-2fa-required-overview %}
{% data reusables.two_fa.mandatory-2fa-contributors-2023 %}
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. To view enterprise members who have enabled or disabled two-factor authentication, on the right, select **2FA**, then click **Enabled** or **Disabled**. {% ifversion mandatory-2fa-required-overview %}Additionally, you can view which members are required to enable two-factor authentication by clicking **Required**.

   ![Screenshot of the list of organization members. A dropdown menu, labeled "2FA", is expanded and outlined in orange.](/assets/images/help/2fa/filter-org-members-by-2fa-required.png){% endif %}

## Further reading

* "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)"

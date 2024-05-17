---
title: Exporting member information for your organization
intro: "You can export information about all of your organization's members from {% data variables.product.prodname_dotcom %}'s web UI."
permissions: Organization owners can export member information for an organization.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Export member information
---

## About export of membership information

You can export aggregated information about your organization's members as a report. For example, you may want to perform an audit of your organization's current members. You can generate a file containing the report from {% data variables.product.prodname_dotcom %}'s web UI.

The membership information report includes the following information.

- Username and display name details
- Whether the user has two-factor authentication enabled
- Whether the membership is public or private
- Whether the user is an organization owner or member
- Datetime of the user's last activity (for a full list of relevant activity, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users)")
{%- ifversion ghec %}
- Optionally, additional information that depends on the organization's configuration:
  - The user's SAML `NameID`
  - Username and primary email addresses on any {% data variables.product.prodname_ghe_server %} instances where {% data variables.product.prodname_github_connect %} is configured
  - User, subscription email address, and license status for {% data variables.visual_studio.prodname_vss_ghe %}
{%- endif %}

You can also use {% data variables.product.prodname_dotcom %}'s APIs to retrieve information about your organization's members. For more information, see the [GraphQL API](/graphql/reference/objects#user) and [REST API](/rest/users) documentation.

{% ifversion ghec %}

Enterprise owners can also export membership information for an enterprise. For more information, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/exporting-membership-information-for-your-enterprise)."

{% endif %}

## Exporting a membership information report

You can download a CSV or JSON file containing the membership information report for your organization.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.people-export %}

{% ifversion ghec %}

## Viewing members' email addresses

You may be able to view the email addresses for members of your organization on either {% data variables.location.product_location %} or an external identity system. The visibility of the email addresses depends on the organization's authentication configuration, domains, and potentially the member's user profile configuration.

- If SAML single sign-on (SSO) is configured for your organization and the `NameID` for your SAML configuration is an email address, you can view the `NameID` for each of your organization members.

- If you verify a domain for your organization, you can view members' email addresses for the verified domain.

- If you don't configure SAML SSO, members access your organization's resources on {% data variables.location.product_location %} solely using a personal account. {% data reusables.saml.personal-accounts-determine-email-visibility %}

If SAML SSO is configured for your organization, or if you have verified a domain, you may be able to view the email addresses in one or more of the following ways.

1. On your SAML Identity Provider (IdP), review the email addresses of users with access to {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)."
1. Export the membership report for your organization. The report may contain the user's email address, stored as the following values.

   - `saml_name_id`: The `NameID` from the user's linked SAML identity, which is typically the user's email address (for more information, see "[AUTOTITLE](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)")
   - `GitHub com verified domain emails`: Email addresses for any verified domains (for more information, see "[AUTOTITLE](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)")

   For more information, see "[Exporting membership information](#exporting-a-membership-information-report)."

{% data reusables.saml.use-api-to-get-externalidentity %}

{% endif %}

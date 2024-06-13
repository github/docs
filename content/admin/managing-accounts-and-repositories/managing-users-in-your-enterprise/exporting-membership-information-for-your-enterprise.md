---
title: Exporting membership information for your enterprise
intro: "You can export information about all of your enterprise's members from {% data variables.product.prodname_dotcom %}'s web UI."
versions:
  feature: enterprise-member-csv
topics:
  - Enterprise
shortTitle: Export membership information
permissions: Enterprise owners can export membership information for an enterprise.
redirect_from:
  - /admin/user-management/managing-users-in-your-enterprise/exporting-membership-information-for-your-enterprise
---

## About export of membership information

You can export aggregated information about your enterprise's members as a membership information report. For example, you may want to perform an audit of your enterprise's current members. You can generate a file containing the report from {% data variables.product.prodname_dotcom %}'s web UI.

The membership information report includes the following information.

{% note %}

**Note:** You can only export the datetime of the user's last activity at the organization level. For more information, see "[AUTOTITLE](/organizations/managing-membership-in-your-organization/exporting-member-information-for-your-organization#about-export-of-membership-information)."

{% endnote %}

* Username and display name details
* Whether the user has two-factor authentication enabled {% ifversion mandatory-2fa-required-overview %}or is required to enable it{% endif %}
* Whether the user is an organization owner or member
* Organizations with pending invitations
* Optionally, additional information that depends on the enterprise's configuration:
  * The user's email addresses for a verified domain
  * The user's SAML `NameID`
  * Username and primary email addresses on any {% data variables.product.prodname_ghe_server %} instances where {% data variables.product.prodname_github_connect %} is configured
  * User, subscription email address, and license status for {% data variables.visual_studio.prodname_vss_ghe %}

You can also use {% data variables.product.prodname_dotcom %}'s APIs to retrieve information about your enterprise's members. For more information, see the [GraphQL API](/graphql/reference/objects#user) and [REST API](/rest/users) documentation.

Organization owners can also export membership information for an organization. For more information, see "[AUTOTITLE](/organizations/managing-membership-in-your-organization/exporting-member-information-for-your-organization)."

## Exporting a membership information report

You can download a CSV file containing the membership information report for your enterprise.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. To the right of "Members", click **{% octicon "download" aria-hidden="true" %} CSV Report**.

   * If your enterprise has less than 1,000 members, the report will download immediately.
   * If your enterprise has 1,000 or more members, you'll soon receive an email with a link to download the report.

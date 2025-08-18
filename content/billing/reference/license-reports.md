---
title: License reports reference
shortTitle: License reports
intro: 'License reports show details of the users consuming licenses that you pay for.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Billing
  - Enterprise
  - Team
permissions: '{% data reusables.permissions.enhanced-billing-enterprise %}'
contentType: reference
---

Each license report shows information about license users in your enterprise account, for {% data variables.product.prodname_copilot_short %}, or for {% data variables.product.prodname_AS %}.

**Cloud users** can download license reports from the {% octicon "law" aria-hidden="true" aria-label="law" %} **Licensing** page under {% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} **Billing & licensing** or using the REST API.

{% ifversion fpt or ghec %}

* Enterprise and {% data variables.product.prodname_AS %} license users, see [AUTOTITLE](/billing/how-tos/products/download-ghas-license-use)
* {% data variables.product.prodname_copilot %} license users, see [AUTOTITLE](/copilot/how-tos/administer-copilot/download-activity-report)
* Report using the REST API, see [AUTOTITLE](/billing/tutorials/automate-usage-reporting)

If you want to generate a more detailed usage report, see [AUTOTITLE](/billing/tutorials/gather-insights).

{% endif %}

**{% data variables.product.prodname_ghe_server %} users** can download license reports for {% data variables.product.prodname_AS %} from the **License** page under enterprise settings, see [AUTOTITLE](/billing/how-tos/products/download-ghas-license-use).

## {% data variables.product.prodname_AS %} license report

The CSV file contains information about each user who is currently consuming a license. The most recent commit by each of these users to repositories with paid security features enabled is reported.

| Field                     | Description                |
|---------------------------|----------------------------|
| User login                | The {% data variables.product.github %} handle of the user. |
| Organization / repository | A repository with paid security features that the user contributed to within the last 90 days. |
| Last pushed date          | The most recent author date of a commit pushed by the user to the repository. |
| Last pushed email         | The email address associated with that commit. |

Data in the "Organization / repository" field will also include `USERNAME/REPOSITORY` data in some situations:

* Your {% data variables.product.prodname_ghe_cloud %} has {% data variables.product.prodname_emus %}
* Your report is for {% data variables.product.prodname_ghe_server %}

{% ifversion copilot %}

## {% data variables.product.prodname_copilot_short %} license report

See [AUTOTITLE](/copilot/reference/metrics-data)

{% endif %}

## {% data variables.product.prodname_ghe_cloud %} license report

The license usage report for your enterprise is a CSV file that contains the following information about members of your enterprise. Some fields are specific to your {% data variables.product.prodname_ghe_cloud %} (GHEC) deployment, {% data variables.product.prodname_ghe_server %} (GHES) connected environments, or your {% data variables.product.prodname_vs %} subscriptions (VSS) with GitHub Enterprise.

Reports generated on instances of {% data variables.enterprise.data_residency %} will see `GitHub` in place of `GitHub com`. The `Ghe license active` field will be marked true.

| Field | Description |
|-------|-------------|
| GitHub com login | The username for the user's GHEC account |
| GitHub com name | The display name for the user's GHEC account |
| Enterprise server user ids | For each of the user's GHES accounts, the account's user ID |
| GitHub com user | Whether or not the user has an account on GHEC |
| Enterprise server user | Whether or not the user has at least one account on GHES |
| Visual studio subscription user | Whether or not the user is a {% data variables.visual_studio.prodname_vs_subscriber %} |
| License type | Can be one of: `Visual Studio subscription` or `Enterprise` |
| GitHub com profile | The URL for the user's profile page on GHEC |
| GitHub com member roles | For each of the organizations the user belongs to on GHEC, the organization name and the user's role in that organization (`Owner` or `Member`) separated by a colon<br><br>Organizations delimited by commas |
| GitHub com enterprise roles | Can be one of: `Owner`, `Member`, `Outside collaborator` (for an enterprise with personal accounts on {% data variables.product.prodname_dotcom_the_website %}), or `Repository collaborator` (for an enterprise that uses {% data variables.enterprise.prodname_managed_users %}) |
| GitHub com verified domain emails | All email addresses associated with the user's GHEC account that match your enterprise's verified domains |
| GitHub com saml name | The SAML username |
| GitHub com orgs with pending invites | All pending invitations for the user's GHEC account to join organizations within your enterprise |
| GitHub com two factor auth | Whether the user has two-factor authentication enabled (true/false) |
| GitHub com two factor auth required by date | The date by which the user is required to enable two-factor authentication |
| GitHub com cost center | The cost center associated with the user for billing purposes |
| GitHub com code security license user | Whether the user consumes a code security license (true/false) |
| GitHub com secret protection license user | Whether the user consumes a secret protection license (true/false) |
| Ghe license active | Whether the user has an active license on {% data variables.enterprise.data_residency_site %} (true/false) |
| Ghe license start date | The start date of the user's license on {% data variables.enterprise.data_residency_site %} |
| Ghe license end date | The end date of the user's license on {% data variables.enterprise.data_residency_site %} |
| Enterprise server primary emails | The primary email addresses associated with each of the user's GHES accounts |
| Enterprise server advanced security user ids | User identifiers for advanced security features on {% data variables.product.prodname_ghe_server %} |
| Enterprise server code security user ids | User identifiers for code security features on {% data variables.product.prodname_ghe_server %} |
| Enterprise server secret protection user ids | User identifiers for secret protection features on {% data variables.product.prodname_ghe_server %} |
| Visual studio license status | Whether the Visual Studio license has been matched to a {% data variables.product.company_short %} user |
| Visual studio subscription email | The email address associated with the user's VSS |
| Total user accounts | The total number of accounts the person has across both GHEC and GHES |

## {% data variables.product.prodname_ghe_server %} exported license usage (JSON file)

Your {% data variables.product.prodname_ghe_server %} license usage is a JSON file that is typically used when performing a manual sync of user licenses between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %} deployments. The file contains the following information specific to your {% data variables.product.prodname_ghe_server %} environment.

| Field | Description
| ----- | -----------
| Features | The {% data variables.product.prodname_github_connect %} features that are enabled on your {% data variables.product.prodname_ghe_server %} instance, and the date and time of enablement.
| Host name | The hostname of your {% data variables.product.prodname_ghe_server %} instance.
| HTTP only | Whether Transport Layer Security (TLS) is enabled and configured on your {% data variables.product.prodname_ghe_server %} instance. Can be one of: `True` or `False`.
| License | A hash of your {% data variables.product.prodname_ghe_server %} license.
| Public key | The public key portion of your {% data variables.product.prodname_ghe_server %} license.
| Server ID | UUID generated for your {% data variables.product.prodname_ghe_server %} instance.
| Version | The version of your {% data variables.product.prodname_ghe_server %} instance.

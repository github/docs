---
title: About Server Statistics
intro: 'You can use {% data variables.product.prodname_server_statistics %} to analyze your own aggregate data from {% data variables.product.prodname_ghe_server %}, and help us improve {% data variables.product.company_short %} products.'
versions:
  feature: server-statistics
permissions: 'Enterprise owners can enable {% data variables.product.prodname_server_statistics %}.'
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/about-server-statistics
topics:
  - Enterprise
---

## About the benefits of {% data variables.product.prodname_server_statistics %}

{% data variables.product.prodname_server_statistics %} can help you anticipate the needs of your organization, understand how your team works, and show the value you get from {% data variables.product.prodname_ghe_server %}.

Once enabled, {% data variables.product.prodname_server_statistics %} collects aggregate data on how much certain features are used on your instance over time. Unlike other [Admin Stats API](/rest/reference/enterprise-admin#admin-stats) endpoints, which only return data for the last day, {% data variables.product.prodname_server_statistics %} provides historical data of all {% data variables.product.prodname_server_statistics %} metrics collected since the day you enabled the feature. For more information, see "[Enabling {% data variables.product.prodname_server_statistics %} for your enterprise](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)."

When you enable {% data variables.product.prodname_server_statistics %}, you're helping to build a better {% data variables.product.prodname_dotcom %}. The aggregated data you'll provide gives us insights into how {% data variables.product.prodname_dotcom %} adds value to our customers. This information allows {% data variables.product.company_short %} to make better and more informed product decisions, ultimately benefiting you.

## About data security

We respect your data. We will never transmit data from {% data variables.location.product_location %} unless you have first given us permission to do so.

We collect no personal data. We also don't collect any {% data variables.product.company_short %} content, such as code, issues, comments, or pull request content.

Only owners of the connected enterprise account or organization on {% data variables.product.prodname_ghe_cloud %} can access the data.

Only certain aggregate metrics are collected on repositories, issues, pull requests, and other features. To see the list of aggregate metrics collected, see "[{% data variables.product.prodname_server_statistics %} data collected](#server-statistics-data-collected)." 

Any updates to the collected metrics will happen in future feature releases of {% data variables.product.prodname_ghe_server %} and will be described in the [{% data variables.product.prodname_ghe_server %} release notes](/admin/release-notes). In addition, we will update this article with all metric updates.

For a better understanding of how we store and secure {% data variables.product.prodname_server_statistics %} data, see "[GitHub Security](https://github.com/security)."

### About data retention and deletion

{% data variables.product.company_short %} collects {% data variables.product.prodname_server_statistics %} data for as long as your {% data variables.product.prodname_ghe_server %} license is active and the {% data variables.product.prodname_server_statistics %} feature is enabled.

If you would like to delete your data, you may do so by contacting GitHub Support, your {% data variables.product.prodname_dotcom %} account representative, or your Customer Success Manager.  Generally, we delete data in the timeframe specified in our privacy statement. For more information, see [{% data variables.product.company_short %}'s privacy statement](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement#data-retention-and-deletion-of-data) in the {% data variables.product.prodname_dotcom_the_website %} documentation.

### About data portability

As an organization owner or enterprise owner on {% data variables.product.prodname_ghe_cloud %}, you can access {% data variables.product.prodname_server_statistics %} data by exporting the data in a CSV or JSON file or through the {% data variables.product.prodname_server_statistics %} REST API. For more information, see "[Requesting {% data variables.product.prodname_server_statistics %} using the REST API](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api)" or "[Exporting {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/exporting-server-statistics)."

## About disabling data collection

You can disable the {% data variables.product.prodname_server_statistics %} feature at any time. For more information, see "[Enabling {% data variables.product.prodname_server_statistics %} for your enterprise](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)."

## {% data variables.product.prodname_server_statistics %} data collected

After you enable {% data variables.product.prodname_server_statistics %}, metrics are collected through a daily job that runs on {% data variables.location.product_location %}. The aggregate metrics are stored on your organization or enterprise account on {% data variables.product.prodname_ghe_cloud %} and are not stored on {% data variables.location.product_location %}.

The following aggregate metrics will be collected and transmitted on a daily basis and represent the total counts for the day.

CSV column | Name | Description |
---------- | ---- | ----------- |
A	| `github_connect.features_enabled` | Array of {% data variables.product.prodname_github_connect %} features that are enabled for your instance (see "[About {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect#github-connect-features)" ) |
B	| `host_name` | The hostname for your instance |
C	| `dormant_users.dormancy_threshold` | The length of time a user must be inactive to be considered dormant |
D	| `dormant_users.total_dormant_users` | Number of dormant user accounts |
E	| `ghes_version` | The version of {% data variables.product.product_name %} that your instance is running |
F	| `server_id` | The UUID generated for your instance
G	| `collection_date` | The date the metrics were collected |
H	| `schema_version` | The version of the database schema used to store this data |
I	| `ghe_stats.comments.total_commit_comments` | Number of comments on commits |
J	| `ghe_stats.comments.total_gist_comments` | Number of comments on gists |
K	| `ghe_stats.comments.total_issue_comments` | Number of comments on issues | 
L	| `ghe_stats.comments.total_pull_request_comments` | Number of comments on pull requests |
M	| `ghe_stats.gists.total_gists` | Number of gists (both secret and public) |
N	| `ghe_stats.gists.private_gists` | Number of secret gists |
O	| `ghe_stats.gists.public_gists` | Number of public gists |
P	| `ghe_stats.hooks.total_hooks` | Number of pre-receive hooks (both active and inactive) |
Q	| `ghe_stats.hooks.active_hooks` | Number of active pre-receive hooks |
R	| `ghe_stats.hooks.inactive_hooks` | Number of inactive pre-receive hooks |
S	| `ghe_stats.issues.total_issues` | Number of issues (both open and closed) |
T	| `ghe_stats.issues.open_issues` | Number of open issues |
U	| `ghe_stats.issues.closed_issues` | Number of closed issues |
V	| `ghe_stats.milestones.total_milestones` | Number of milestones (both open and closed) |
W	| `ghe_stats.milestones.open_milestones` | Number of open milestones |
X	| `ghe_stats.milestones.closed_milestones` | Number of closed milestones |
Y	| `ghe_stats.orgs.total_orgs` | Number of organizations (both enabled and disabled) |
Z	| `ghe_stats.orgs.disabled_orgs` | Number of disabled organizations |
AA | `ghe_stats.orgs.total_teams` | Number of teams |
AB | `ghe_stats.orgs.total_team_members` | Number of team members |
AC | `ghe_stats.pages.total_pages` | Number of {% data variables.product.prodname_pages %} sites |
AD | `ghe_stats.pulls.total_pulls` | Number of pull requests |
AE | `ghe_stats.pulls.merged_pulls` | Number of merged pull requests |
AF | `ghe_stats.pulls.mergeable_pulls` | Number of pull requests that are currently mergeable |
AG | `ghe_stats.pulls.unmergeable_pulls` | Number of pull requests that are currently unmergeable |
AH | `ghe_stats.repos.total_repos` | Number of repositories (both upstream repositories and forks) |
AI | `ghe_stats.repos.root_repos` | Number of upstream repositories |
AJ | `ghe_stats.repos.fork_repos` | Number of forks |
AK | `ghe_stats.repos.org_repos` | Number of repositories owned by organizations |
AL | `ghe_stats.repos.total_pushes` | Number of pushes to repositories |
AM | `ghe_stats.repos.total_wikis` | Number of wikis |
AN | `ghe_stats.users.total_users` | Number of user accounts |
AO | `ghe_stats.users.admin_users` | Number of user accounts that are site administrators |
AP | `ghe_stats.users.suspended_users` | Number of user accounts that are suspended |

## {% data variables.product.prodname_server_statistics %} data examples

To see an example of the headings included in the CSV export for {% data variables.product.prodname_server_statistics %}, download the [{% data variables.product.prodname_server_statistics %} CSV example](/assets/server-statistics-csv-example.csv).

To see an example of the response payload for the {% data variables.product.prodname_server_statistics %} API, see "[Requesting {% data variables.product.prodname_server_statistics %} using the REST API](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api)."
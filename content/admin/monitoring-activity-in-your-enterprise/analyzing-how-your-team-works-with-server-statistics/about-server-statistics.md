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

We respect your data. We will never transmit data from {% data variables.product.product_location %} unless you have first given us permission to do so.

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

After you enable {% data variables.product.prodname_server_statistics %}, metrics are collected through a daily job that runs on {% data variables.product.product_location %}. The aggregate metrics are stored on your organization or enterprise account on {% data variables.product.prodname_ghe_cloud %} and are not stored on {% data variables.product.product_location %}.

The following aggregate metrics will be collected and transmitted on a daily basis and represent the total counts for the day:
  - `active_hooks`
  - `admin_users`
  - `closed_issues`
  - `closed_milestones`
  - `collection_date`
  - `disabled_orgs`
  - `dormancy_threshold`
  - `fork_repos`
  - `ghes_version`
  - `github_connect_features_enabled`
  - `inactive_hooks`
  - `mergeable_pulls`
  - `merged_pulls`
  - `open_issues`
  - `open_milestones`
  - `org_repos`
  - `private_gists`
  - `public_gists`
  - `root_repos`
  - `schema_version`
  - `server_id`
  - `suspended_users`
  - `total_commit_comments`
  - `total_dormant_users`
  - `total_gist_comments`
  - `total_gists`
  - `total_hooks`
  - `total_issues`
  - `total_issue_comments`
  - `total_milestones`
  - `total_repos`
  - `total_orgs`
  - `total_pages`
  - `total_pull_request_comments`
  - `total_pulls`
  - `total_pushes`
  - `total_team_members`
  - `total_teams`
  - `total_users`
  - `total_wikis`
  - `unmergeable_pulls`

## {% data variables.product.prodname_server_statistics %} payload example

To see an example of the response payload for the {% data variables.product.prodname_server_statistics %} API, see "[Requesting {% data variables.product.prodname_server_statistics %} using the REST API](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api)."

To see a list of the data collected, see "[{% data variables.product.prodname_server_statistics %} data collected](#server-statistics-data-collected)."

---
title: About GitHub Connect
intro: '{% data variables.product.prodname_github_connect %} enhances {% data variables.product.product_name %} by giving you access to additional features and workflows that rely on the power of {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - GitHub Connect
redirect_from:
  - /admin/configuration/configuring-github-connect/about-github-connect
---

## About {% data variables.product.prodname_github_connect %}

{% data variables.product.prodname_github_connect %} enhances {% data variables.product.product_name %} by allowing {% data variables.location.product_location %} to benefit from the power of {% data variables.product.prodname_dotcom_the_website %} in limited ways. After you enable {% data variables.product.prodname_github_connect %}, you can enable additional features and workflows that rely on {% data variables.product.prodname_dotcom_the_website %}, such as {% data variables.product.prodname_dependabot_alerts %} for security vulnerabilities that are tracked in the {% data variables.product.prodname_advisory_database %}.

{% data variables.product.prodname_github_connect %} does not open {% data variables.location.product_location %} to the public internet. None of your enterprise's private data is exposed to {% data variables.product.prodname_dotcom_the_website %} users. Instead, {% data variables.product.prodname_github_connect %} transmits only the limited data needed for the individual features you choose to enable. Unless you enable license sync, no personal data is transmitted by {% data variables.product.prodname_github_connect %}. For more information about what data is transmitted by {% data variables.product.prodname_github_connect %}, see "[Data transmission for {% data variables.product.prodname_github_connect %}](#data-transmission-for-github-connect)."

Enabling {% data variables.product.prodname_github_connect %} will not allow {% data variables.product.prodname_dotcom_the_website %} users to make changes to {% data variables.product.product_name %}.

To enable {% data variables.product.prodname_github_connect %}, you configure a connection between {% data variables.location.product_location %} and enterprise account on {% data variables.product.prodname_dotcom_the_website %} that uses {% data variables.product.prodname_ghe_cloud %}. {% data reusables.github-connect.connection-port-protocol %} For more information, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/managing-github-connect)."

After enabling {% data variables.product.prodname_github_connect %}, you will be able to enable features such as {% ifversion ghes %}automatic user license sync and {% endif %}{% data variables.product.prodname_dependabot_alerts %}. For more information about all of the features available, see "[{% data variables.product.prodname_github_connect %} features](#github-connect-features)."

## {% data variables.product.prodname_github_connect %} features

After you configure the connection between {% data variables.location.product_location %} and {% data variables.product.prodname_ghe_cloud %}, you can enable individual features of {% data variables.product.prodname_github_connect %} for your enterprise.

| Feature | Description | More information |
| ----------- | ----------- | ----------- |
| Automatic user license sync | Manage license usage across your {% data variables.product.prodname_enterprise %} deployments by automatically syncing user licenses from {% data variables.location.product_location %} to {% data variables.product.prodname_ghe_cloud %}. | "[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-automatic-user-license-sync-for-your-enterprise)" |
| {% data variables.product.prodname_dependabot %} | Allow users to find and fix vulnerabilities in code dependencies. | "[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)" |
| {% data variables.product.prodname_dotcom_the_website %} actions | Allow users to use actions from {% data variables.product.prodname_dotcom_the_website %} in public workflow files. | "[AUTOTITLE](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)" |
| {% ifversion server-statistics %} |
| {% data variables.product.prodname_server_statistics %} | Analyze your own aggregate data from GitHub Enterprise Server, and help us improve GitHub products. | "[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)" |
| {% endif %} |
| Unified search | Allow users to include repositories on {% data variables.product.prodname_dotcom_the_website %} in their search results when searching from {% data variables.location.product_location %}. | "[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)" |
| Unified contributions | Allow users to include anonymized contribution counts for their work on {% data variables.location.product_location %} in their contribution graphs on {% data variables.product.prodname_dotcom_the_website %}. | "[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-unified-contributions-for-your-enterprise)" |

## Data transmission for {% data variables.product.prodname_github_connect %}

When {% data variables.product.prodname_github_connect %} is enabled, a record on {% data variables.product.prodname_ghe_cloud %} stores information about the connection. If you enable individual features of {% data variables.product.prodname_github_connect %}, additional data is transmitted.

{% note %}

**Note:** No repositories, issues, or pull requests are ever transmitted from {% data variables.product.product_name %} to {% data variables.product.prodname_dotcom_the_website %} by {% data variables.product.prodname_github_connect %}.

{% endnote %}

### Data transmitted when {% data variables.product.prodname_github_connect %} is enabled

When you enable {% data variables.product.prodname_github_connect %} or specific {% data variables.product.prodname_github_connect %} features, a record on {% data variables.product.prodname_ghe_cloud %} stores the following information about the connection.
{% ifversion ghes %}
* The public key portion of your {% data variables.product.prodname_ghe_server %} license
* A hash of your {% data variables.product.prodname_ghe_server %} license
* The customer name on your {% data variables.product.prodname_ghe_server %} license
* The version of {% data variables.location.product_location_enterprise %}{% endif %}
* The hostname of {% data variables.location.product_location %}
* The enterprise account on {% data variables.product.prodname_ghe_cloud %} that's connected to {% data variables.location.product_location %}
* The authentication token that's used by {% data variables.location.product_location %} to make requests to {% data variables.product.prodname_ghe_cloud %}
* If Transport Layer Security (TLS) is enabled and configured on {% data variables.location.product_location %}{% ifversion ghes %}
* The {% data variables.product.prodname_github_connect %} features that are enabled on {% data variables.location.product_location %}, and the date and time of enablement{% endif %}
* The dormancy threshold for your enterprise
* The number of dormant users for your enterprise
* A count of license-consuming seats, which does not include suspended users

{% data variables.product.prodname_github_connect %} syncs the above connection data between {% data variables.location.product_location %} and {% data variables.product.prodname_ghe_cloud %} weekly, starting from the day and approximate time that {% data variables.product.prodname_github_connect %} was enabled.

### Data transmitted by individual features of {% data variables.product.prodname_github_connect %}

Additional data is transmitted if you enable individual features of {% data variables.product.prodname_github_connect %}.

| Feature | Data | Which way does the data flow? | Where is the data used? |
| ------- | ---- | --------- | ------ |
| {% ifversion ghes %} |
| Automatic user license sync | Each {% data variables.product.product_name %} user's user ID and email addresses{% ifversion ghas-in-license-sync %}, and whether the user consumes a license for {% data variables.product.prodname_GH_advanced_security %}{% endif %} | From {% data variables.product.product_name %} to {% data variables.product.prodname_ghe_cloud %} | {% data variables.product.prodname_ghe_cloud %} |
| {% endif %} |
| {% ifversion ghes %} |
| {% data variables.product.prodname_dependabot_alerts %} | Vulnerability alerts | From {% data variables.product.prodname_dotcom_the_website %} to {% data variables.product.product_name %} | {% data variables.product.product_name %} |
| {% endif %} |
| {% ifversion dependabot-updates-github-connect %} |
| {% data variables.product.prodname_dependabot_updates %} | Dependencies and the metadata for each dependency's repository<br><br>If a dependency is stored in a private repository on {% data variables.product.prodname_dotcom_the_website %}, data will only be transmitted if {% data variables.product.prodname_dependabot %} is configured and authorized to access that repository. | From {% data variables.product.prodname_dotcom_the_website %} to {% data variables.product.product_name %} | {% data variables.product.product_name %} |
| {% endif %} |
| {% data variables.product.prodname_dotcom_the_website %} actions | Name of action, action (YAML file from {% data variables.product.prodname_marketplace %}) | From {% data variables.product.prodname_dotcom_the_website %} to {% data variables.product.product_name %}<br><br>From {% data variables.product.product_name %} to {% data variables.product.prodname_dotcom_the_website %} | {% data variables.product.product_name %} |
| {% ifversion server-statistics %} |
| {% data variables.product.prodname_server_statistics %} | Aggregate metrics about your usage of {% data variables.product.prodname_ghe_server %}. For the complete list of metrics, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics#server-statistics-data-collected)." | From {% data variables.product.product_name %} to {% data variables.product.prodname_ghe_cloud %} | {% data variables.product.prodname_ghe_cloud %} |
| {% endif %} |
| Unified search | Search terms, search results | From {% data variables.product.prodname_dotcom_the_website %} to {% data variables.product.product_name %}<br><br>From {% data variables.product.product_name %} to {% data variables.product.prodname_dotcom_the_website %} | {% data variables.product.product_name %} |
| Unified contributions | Contribution counts | From {% data variables.product.product_name %} to {% data variables.product.prodname_dotcom_the_website %} | {% data variables.product.prodname_dotcom_the_website %} |

## Further reading

* "[AUTOTITLE](/graphql/guides/managing-enterprise-accounts)" in the GraphQL API documentation

---
title: About GitHub Connect
intro: '{% data variables.product.prodname_github_connect %} enhances {% data variables.product.prodname_ghe_server %} by giving you access to data and workflows from {% data variables.product.prodname_ghe_cloud %}.'
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - GitHub Connect
redirect_from:
  - /admin/configuration/configuring-github-connect/about-github-connect
---

{% data variables.product.prodname_github_connect %} allows {% data variables.location.product_location %} to connect to your enterprise on {% data variables.product.prodname_ghe_cloud %} in limited ways.

After you enable {% data variables.product.prodname_github_connect %}, you can choose which features to enable. For example, you can:

* Automatically sync license usage between environments
* Unify search results and user contribution data
* Enable features that rely on {% data variables.product.prodname_dotcom_the_website %}, such as {% data variables.product.prodname_dependabot_alerts %} for security vulnerabilities that are tracked in the {% data variables.product.prodname_advisory_database %}

## About the connection

To enable {% data variables.product.prodname_github_connect %}, you configure a connection between {% data variables.location.product_location %} and an enterprise account on **{% data variables.product.prodname_dotcom_the_website %}**{% ifversion ghecom-github-connect %} or **{% data variables.enterprise.data_residency_site %}**{% endif %}. {% data reusables.github-connect.connection-port-protocol %}

* {% data variables.product.prodname_github_connect %} does not open {% data variables.location.product_location %} to the public internet.
* None of your enterprise's private data is exposed to {% data variables.product.prodname_ghe_cloud %} users.
* {% data variables.product.prodname_github_connect %} transmits only the limited data needed for the features you enable. Unless you enable license sync, no personal data is transmitted. For more information, see [Data transmission](#data-transmission).
* Enabling {% data variables.product.prodname_github_connect %} will not allow {% data variables.product.prodname_ghe_cloud %} users to make changes to {% data variables.product.prodname_ghe_server %}.

## {% data variables.product.prodname_github_connect %} features

After you configure the connection between {% data variables.location.product_location %} and {% data variables.product.prodname_ghe_cloud %}, you can enable individual features of {% data variables.product.prodname_github_connect %}.

{% data reusables.github-connect.what-is-available-ghecom %}

| Feature | Description | More information |
| ----------- | ----------- | ----------- |
{% data reusables.github-connect.license-sync %}
| {% data variables.product.prodname_dependabot %} | Allow users to find and fix vulnerabilities in code dependencies. | [AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise) |
| {% data variables.product.prodname_dotcom_the_website %} actions | Allow users to use actions from {% data variables.product.prodname_dotcom_the_website %} in public workflow files. | [AUTOTITLE](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) |
| {% data variables.product.prodname_server_statistics %} | Analyze your own aggregate data from GitHub Enterprise Server, and help us improve GitHub products. | [AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise) |
{% data reusables.github-connect.unified-search %}
{% data reusables.github-connect.unified-contributions %}

## Data transmission

When {% data variables.product.prodname_github_connect %} is enabled, a record on {% data variables.product.prodname_ghe_cloud %} stores information about the connection. If you enable individual features of {% data variables.product.prodname_github_connect %}, additional data is transmitted.

> [!NOTE]
> No repositories, issues, or pull requests are ever transmitted from {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_ghe_cloud %} by {% data variables.product.prodname_github_connect %}.

### Data transmitted when {% data variables.product.prodname_github_connect %} is enabled

When you enable {% data variables.product.prodname_github_connect %} or specific {% data variables.product.prodname_github_connect %} features, a record on {% data variables.product.prodname_ghe_cloud %} stores the following information about the connection.
* The public key portion of your {% data variables.product.prodname_ghe_server %} license
* A hash of your {% data variables.product.prodname_ghe_server %} license
* The customer name on your {% data variables.product.prodname_ghe_server %} license
* The version of {% data variables.location.product_location_enterprise %}
* The hostname of {% data variables.location.product_location %}
* The enterprise account on {% data variables.product.prodname_ghe_cloud %} that's connected to {% data variables.location.product_location %}
* The authentication token that's used by {% data variables.location.product_location %} to make requests to {% data variables.product.prodname_ghe_cloud %}
* If Transport Layer Security (TLS) is enabled and configured on {% data variables.location.product_location %}
* The {% data variables.product.prodname_github_connect %} features that are enabled on {% data variables.location.product_location %}, and the date and time of enablement
* The dormancy threshold for your enterprise
* The number of dormant users for your enterprise
* A count of {% ifversion enterprise-licensing-language %}consumed licenses{% else %}license-consuming seats{% endif %}, which does not include suspended users

{% data variables.product.prodname_github_connect %} syncs the above connection data between {% data variables.location.product_location %} and {% data variables.product.prodname_ghe_cloud %} weekly, starting from the day and approximate time that {% data variables.product.prodname_github_connect %} was enabled.

### Data transmitted by individual features of {% data variables.product.prodname_github_connect %}

Additional data is transmitted if you enable individual features of {% data variables.product.prodname_github_connect %}.

| Feature | Data | Which way does the data flow? | Where is the data used? |
| ------- | ---- | --------- | ------ |
| Automatic user license sync | Each {% data variables.product.prodname_ghe_server %} user's user ID and email addresses{% ifversion ghas-in-license-sync %}, and whether the user consumes a license for {% data variables.product.prodname_GH_advanced_security %}{% endif %} | From {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_ghe_cloud %} | {% data variables.product.prodname_ghe_cloud %} |
| {% data variables.product.prodname_dependabot_alerts %} | Vulnerability alerts | From {% data variables.product.prodname_dotcom_the_website %} to {% data variables.product.prodname_ghe_server %} | {% data variables.product.prodname_ghe_server %} |
| {% data variables.product.prodname_dependabot_updates %} | Dependencies and the metadata for each dependency's repository<br><br>If a dependency is stored in a private repository on {% data variables.product.prodname_dotcom_the_website %}, data will only be transmitted if {% data variables.product.prodname_dependabot %} is configured and authorized to access that repository. | From {% data variables.product.prodname_dotcom_the_website %} to {% data variables.product.prodname_ghe_server %} | {% data variables.product.prodname_ghe_server %} |
| {% data variables.product.prodname_dotcom_the_website %} actions | Name of action, action (YAML file from {% data variables.product.prodname_marketplace %}) | From {% data variables.product.prodname_dotcom_the_website %} to {% data variables.product.prodname_ghe_server %}<br><br>From {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_dotcom_the_website %} | {% data variables.product.prodname_ghe_server %} |
| {% data variables.product.prodname_server_statistics %} | Aggregate metrics about your usage of {% data variables.product.prodname_ghe_server %}. For the complete list of metrics, see [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics#server-statistics-data-collected). | From {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_ghe_cloud %} | {% data variables.product.prodname_ghe_cloud %} |
| Unified search | Search terms, search results | From {% data variables.product.prodname_ghe_cloud %} to {% data variables.product.prodname_ghe_server %}<br><br>From {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_ghe_cloud %} | {% data variables.product.prodname_ghe_server %} |
| Unified contributions | Contribution counts | From {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_ghe_cloud %} | {% data variables.product.prodname_ghe_cloud %} |

## Enabling {% data variables.product.prodname_github_connect %}

{% ifversion ghecom-github-connect %}

To enable {% data variables.product.prodname_github_connect %}, see the article for your {% data variables.product.prodname_ghe_cloud %} environment.

* [AUTOTITLE](/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-githubcom)
* [AUTOTITLE](/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-ghecom)

{% else %}

To enable {% data variables.product.prodname_github_connect %}, see [AUTOTITLE](/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-githubcom).

{% endif %}

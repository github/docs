---
title: System overview for GitHub Insights
intro: '{% data variables.product.prodname_insights %} is a standalone application which interfaces with {% data variables.product.prodname_enterprise %}.'
redirect_from:
  - /github/installing-and-configuring-github-insights/system-overview-for-github-insights
  - /insights/installing-and-configuring-github-insights/system-overview-for-github-insights
versions:
  enterprise-server: '*'
---
### Requirements for running {% data variables.product.prodname_insights %}

{% data variables.product.prodname_insights %} requires a supported version of {% data variables.product.prodname_ghe_server %}.

{% data reusables.github-insights.requires-machine %} Standard type machines with a base OS of Debian Buster, Debian Stretch, or any LTS versions of Ubuntu 16.04+ are supported.

To provision {% data variables.product.prodname_insights %}, the application server must be able to run certain dependencies, including Docker. {% data reusables.github-insights.docker-requirements %} For more information, see "[Installing {% data variables.product.prodname_insights %}](/insights/installing-and-configuring-github-insights/installing-github-insights#prerequisites)."

The application server should meet minimum specifications.

| Specification | Minimum   |
| --------|-----------|
| vCPUs   | 16         |
| RAM     | 64GB        |
| Disk    | 250GB      |

If you'll use {% data variables.product.prodname_insights %} to import large amounts of data, we recommend greater minimum specifications. For more information, see "[Managing repositories](/github/installing-and-configuring-github-insights/managing-repositories#about-import-times)."

### Security and authentication for {% data variables.product.prodname_insights %}

{% data variables.product.prodname_insights %} runs on your infrastructure and is governed by your existing information security controls. {% data variables.product.prodname_insights %} uses existing user accounts in {% data variables.product.prodname_enterprise %} for authentication and access permissions.

#### Network Security

{% data variables.product.prodname_insights %}'s internal firewall restricts network access to the application server's services. Only services necessary for the application server to function are available over the network.

{% data variables.product.prodname_insights %} requires the following ports to be open for inbound and outbound traffic.

| Port      | Service       | Protocol        |
| ----------|--------------|-----------------|
| 22        | SSH USER   | TCP   |
| 80        | HTTP USER  | TCP   |
| 443       | HTTPS USER | TCP   |

#### Authentication and access permissions

Authentication for {% data variables.product.prodname_insights %} is handled through {% data variables.product.prodname_enterprise %}. During installation, you will create a {% data variables.product.prodname_github_app %}, which allows {% data variables.product.prodname_insights %} to authorize users. The {% data variables.product.prodname_github_app %} is also used to interact with {% data variables.product.prodname_enterprise %} within the scope of the user and app’s permissions.

{% data reusables.github-insights.permissions-levels %}

Data access in {% data variables.product.prodname_insights %} is restricted according to each user's data access in {% data variables.product.prodname_enterprise %}. A user will never see data in {% data variables.product.prodname_insights %} for repositories the user does not have access to in {% data variables.product.prodname_enterprise %}.

### Architecture of {% data variables.product.prodname_insights %}

![System architecture](/assets/images/help/insights/github-isights-system-diagram.png)

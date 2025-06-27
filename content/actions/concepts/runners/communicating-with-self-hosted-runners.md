---
title: Communicating with self-hosted runners
shortTitle: Self-hosted runner communication
intro: 'Your self-hosted runners can communicate with {% ifversion fpt or ghec %}{% data variables.product.github %}{% else %}{% data variables.location.product_location_enterprise %} and {% data variables.product.prodname_dotcom_the_website %}{% endif %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/hosting-your-own-runners/managing-self-hosted-runners/communicating-with-self-hosted-runners
---

A self-hosted runner connects to {% ifversion fpt or ghec %}{% data variables.product.github %}{% else %}{% data variables.location.product_location_enterprise %}{% endif %} to receive job assignments and to download new versions of the runner application. The self-hosted runner uses an {% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %} long poll that opens a connection to {% data variables.product.github %} for 50 seconds, and if no response is received, it then times out and creates a new long poll. The application must be running on the machine to accept and run {% data variables.product.prodname_actions %} jobs.

{% data reusables.actions.runner-app-open-source %} {% ifversion fpt or ghec %} When a new version is released, the runner application automatically updates itself when a job is assigned to the runner, or within a week of release if the runner hasn't been assigned any jobs. {% else ifversion ghes %} When a new version is released, the runner application will automatically update within 24 hours. {% endif %}
{% ifversion ghes %}

> [!NOTE]
> {% data reusables.actions.upgrade-runners-before-upgrade-ghes %}

{% endif %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

{% data reusables.actions.self-hosted-runner-ports-protocols %}

{% ifversion fpt or ghec %}
Since the self-hosted runner opens a connection to {% data variables.product.github %}, you do not need to allow {% data variables.product.prodname_dotcom %} to make inbound connections to your self-hosted runner.
{% elsif ghes %}
Only an outbound connection from the runner to {% data variables.product.prodname_ghe_server %} is required. There is no need for an inbound connection from {% data variables.product.prodname_ghe_server %} to the runner.
For caching to work, the runner must be able to communicate with the blob storage and directly download content from it.
{%- endif %}

{% ifversion ghes %}

{% data variables.product.prodname_ghe_server %} must accept inbound connections from your runners over HTTP(S) at {% data variables.location.product_location %}'s hostname and API subdomain, and your runners must allow outbound connections over HTTP(S) to {% data variables.location.product_location %}'s hostname and API subdomain.

{% endif %}

{% ifversion fpt or ghec %}

You must ensure that the machine has the appropriate network access with at least 70 kilobits per second upload and download speed to communicate with the {% data variables.product.prodname_dotcom %} hosts listed below. Some hosts are required for essential runner operations, while other hosts are only required for certain functionality.

You can use the REST API to get meta information about {% data variables.product.company_short %}, including the IP addresses and domain details for {% data variables.product.company_short %} services. The `actions_inbound` section of the API supports both fully qualified and wildcard domains. Fully qualified domains specify a complete domain name (e.g., `example.github.com`), while wildcard domains use a `*` to represent multiple possible subdomains (e.g., `*.github.com`). An example of the self-hosted runner requirements using wildcard domains has been listed below. For more information, see [AUTOTITLE](/rest/meta/meta).

```shell copy
github.com
*.github.com
*.githubusercontent.com
ghcr.io
```

{% data reusables.actions.domain-name-cname-recursive-firewall-rules %}

{% data reusables.actions.runner-essential-communications %}

In addition, your workflow may require access to other network resources.

If you use an IP address allow list for your {% data variables.product.prodname_dotcom %} organization or enterprise account, you must add your self-hosted runner's IP address to the allow list. See [Managing allowed IP addresses for your organization](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list) or [Enforcing policies for security settings in your enterprise](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise){% ifversion fpt %} in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}.{% endif %}

{% else %}

Self-hosted runners do not require any external internet access in order to function. As a result, you can use network routing to direct communication between the self-hosted runner and {% data variables.product.prodname_ghe_server %}. For example, you can assign a private IP address to your self-hosted runner and configure routing to send traffic to {% data variables.product.prodname_ghe_server %}, with no need for traffic to traverse a public network.

{% endif %}

{% ifversion ghes %}

## Communication between self-hosted runners and {% data variables.product.prodname_dotcom_the_website %}

Self-hosted runners do not need to connect to {% data variables.product.prodname_dotcom_the_website %} unless you have enabled automatic access to {% data variables.product.prodname_dotcom_the_website %} actions for {% data variables.product.prodname_ghe_server %}. For more information, see [AUTOTITLE](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise).

If you have enabled automatic access to {% data variables.product.prodname_dotcom_the_website %} actions, then the self-hosted runner will connect directly to {% data variables.product.prodname_dotcom_the_website %} to download actions. You must ensure that the machine has the appropriate network access to communicate with the {% data variables.product.prodname_dotcom %} URLs listed below.

```shell copy
github.com
api.github.com
codeload.github.com
pkg.actions.githubusercontent.com
```

You can use the REST API to get meta information about {% data variables.product.company_short %}, including the IP addresses and domain details for {% data variables.product.company_short %} services. The `actions_inbound` section of the API supports both fully qualified and wildcard domains. Fully qualified domains specify a complete domain name (e.g., `example.github.com`), while wildcard domains use a `*` to represent multiple possible subdomains (e.g., `*.github.com`). An example of the self-hosted runner requirements using wildcard domains has been listed below. For more information, see [AUTOTITLE](/rest/meta/meta).

```shell copy
github.com
*.github.com
*.githubusercontent.com
ghcr.io
```

{% data reusables.actions.domain-name-cname-recursive-firewall-rules %}

{% endif %}

## Further reading

* [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/using-a-proxy-server-with-self-hosted-runners)
* [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/monitoring-and-troubleshooting-self-hosted-runners#troubleshooting-network-connectivity)

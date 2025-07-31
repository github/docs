---
title: Self-hosted runners reference
shortTitle: Self-hosted runners
intro: Find information about setting up and using self-hosted runners.
redirect_from:
  - /actions/hosting-your-own-runners/managing-self-hosted-runners/supported-architectures-and-operating-systems-for-self-hosted-runners
  - /actions/reference/supported-architectures-and-operating-systems-for-self-hosted-runners
  - /actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners
  - /actions/hosting-your-own-runners/managing-self-hosted-runners/autoscaling-with-self-hosted-runners
  - /actions/how-tos/hosting-your-own-runners/managing-self-hosted-runners/autoscaling-with-self-hosted-runners
  - /actions/hosting-your-own-runners/managing-self-hosted-runners/communicating-with-self-hosted-runners
  - /actions/concepts/runners/communicating-with-self-hosted-runners
  - /actions/reference/self-hosted-runners-reference
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
---

## Requirements for self-hosted runner machines

You can use a machine as a self-hosted runner as long as it meets these requirements:

* You can install and run the self-hosted runner application on the machine. See [Supported operating systems](#supported-operating-systems) and [Supported processor architectures](#supported-processor-architectures).
* The machine can communicate with {% data variables.product.prodname_actions %}.
* The machine has enough hardware resources for the type of workflows you plan to run. The self-hosted runner application itself only requires minimal resources.
* If you want to run workflows that use Docker container actions or service containers, you must use a Linux machine and Docker must be installed.

### Supported operating systems

#### Linux

* Red Hat Enterprise Linux 8 or later
* CentOS 8 or later
* Oracle Linux 8 or later
* Fedora 29 or later
* Debian 10 or later
* Ubuntu 20.04 or later
* Linux Mint 20 or later
* openSUSE 15.2 or later
* SUSE Enterprise Linux (SLES) 15 SP2 or later

#### Windows

* Windows 10 64-bit
* Windows 11 64-bit
* Windows Server 2016 64-bit
* Windows Server 2019 64-bit
* Windows Server 2022 64-bit

#### macOS

* macOS 11.0 (Big Sur) or later

### Supported processor architectures

* `x64` - Linux, macOS, Windows.
* `ARM64` - Linux, macOS{% ifversion actions-windows-arm %}, Windows (currently in {% data variables.release-phases.public_preview %}){% endif %}.
* `ARM32` - Linux.

## Routing precedence for self-hosted runners

When routing a job to a self-hosted runner, {% data variables.product.prodname_dotcom %} looks for a runner that matches the job's `runs-on` labels and groups:

* If {% data variables.product.prodname_dotcom %} finds an online and idle runner that matches the job's `runs-on` labels and groups, the job is then assigned and sent to the runner.
  * If the runner doesn't pick up the assigned job within 60 seconds, the job is re-queued so that a new runner can accept it.
* If {% data variables.product.prodname_dotcom %} doesn't find an online and idle runner that matches the job's `runs-on` labels and groups, then the job will remain queued until a runner comes online.
* If the job remains queued for more than 24 hours, the job will fail.

## Autoscaling

You can automatically increase or decrease the number of self-hosted runners in your environment in response to the webhook events you receive with a particular label.

### Supported autoscaling solutions

{% ifversion fpt or ghec %}

{% data variables.product.prodname_dotcom %}-hosted runners inherently autoscale based on your needs. {% data variables.product.prodname_dotcom %}-hosted runners can be a low-maintenance and cost-effective alternative to developing or implementing autoscaling solutions. For more information, see [AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners/about-github-hosted-runners).

{% endif %}

The [actions/actions-runner-controller](https://github.com/actions/actions-runner-controller) (ARC) project is a Kubernetes-based runner autoscaler. {% data variables.product.prodname_dotcom %} recommends ARC if the team deploying it has expert Kubernetes knowledge and experience.

For more information, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/about-actions-runner-controller) and [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/about-support-for-actions-runner-controller).

### Ephemeral runners for autoscaling

{% data variables.product.prodname_dotcom %} recommends implementing autoscaling with ephemeral self-hosted runners; autoscaling with persistent self-hosted runners is not recommended. In certain cases, {% data variables.product.prodname_dotcom %} cannot guarantee that jobs are not assigned to persistent runners while they are shut down. With ephemeral runners, this can be guaranteed because {% data variables.product.prodname_dotcom %} only assigns one job to a runner.

This approach allows you to manage your runners as ephemeral systems, since you can use automation to provide a clean environment for each job. This helps limit the exposure of any sensitive resources from previous jobs, and also helps mitigate the risk of a compromised runner receiving new jobs.

>[!WARNING]The runner application log files for ephemeral runners must be forwarded to an external log storage solution for troubleshooting and diagnostic purposes. While it is not required for ephemeral runners to be deployed, {% data variables.product.prodname_dotcom %} recommends ensuring runner logs are forwarded and preserved externally before deploying an ephemeral runner autoscaling solution in a production environment. For more information, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/monitoring-and-troubleshooting-self-hosted-runners#reviewing-the-self-hosted-runner-application-log-files).

To add an ephemeral runner to your environment, include the `--ephemeral` parameter when registering your runner using `config.sh`. For example:

```shell
./config.sh --url https://github.com/octo-org --token example-token --ephemeral
```

The {% data variables.product.prodname_actions %} service will then automatically de-register the runner after it has processed one job. You can then create your own automation that wipes the runner after it has been de-registered.

> [!NOTE]
> If a job is labeled for a certain type of runner, but none matching that type are available, the job does not immediately fail at the time of queueing. Instead, the job will remain queued until the 24 hour timeout period expires.

Alternatively, you can create ephemeral, just-in-time runners using the REST API. For more information, see [AUTOTITLE](/rest/actions/self-hosted-runners).

### Runner software updates on self-hosted runners

By default, self-hosted runners will automatically perform a software update whenever a new version of the runner software is available. If you use ephemeral runners in containers then this can lead to repeated software updates when a new runner version is released. Turning off automatic updates allows you to update the runner version on the container image directly on your own schedule.

To turn off automatic software updates and install software updates yourself, specify the `--disableupdate` flag when registering your runner using `config.sh`. For example:

```shell
./config.sh --url https://github.com/YOUR-ORGANIZATION --token EXAMPLE-TOKEN --disableupdate
```

If you disable automatic updates, you must still update your runner version regularly. New functionality in {% data variables.product.prodname_actions %} requires changes in both the {% data variables.product.prodname_actions %} service _and_ the runner software. The runner may not be able to correctly process jobs that take advantage of new features in {% data variables.product.prodname_actions %} without a software update.

If you disable automatic updates, you will be required to update your runner version within 30 days of a new version being made available. You may want to subscribe to notifications for releases in the [`actions/runner` repository](https://github.com/actions/runner/releases). For more information, see [AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#about-custom-notifications).

For instructions on how to install the latest runner version, see the installation instructions for [the latest release](https://github.com/actions/runner/releases).

>[!WARNING] Any updates released for the software, including major, minor or patch releases, are considered as an available update. If you do not perform a software update within 30 days, the {% data variables.product.prodname_actions %} service will not queue jobs to your runner. In addition, if a critical security update is required, the {% data variables.product.prodname_actions %} service will not queue jobs to your runner until it has been updated.

### Webhooks for autoscaling

You can create your own autoscaling environment by using payloads received from the [`workflow_job`](/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job) webhook. This webhook is available at the repository, organization, and enterprise levels, and the payload for this event contains an `action` key that corresponds to the stages of a workflow job's life-cycle; for example when jobs are `queued`, `in_progress`, and `completed`. You must then create your own scaling automation in response to these webhook payloads.

* For more information about the `workflow_job` webhook, see [AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_job).
* To learn how to work with webhooks, see [AUTOTITLE](/webhooks).

### Authentication requirements

You can register and delete repository and organization self-hosted runners using [the API](/rest/actions/self-hosted-runners). To authenticate to the API, your autoscaling implementation can use an access token or a {% data variables.product.prodname_dotcom %} app.

Your access token will require the following scope:

* For private repositories, use an access token with the [`repo` scope](/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes).
* For public repositories, use an access token with the [`public_repo` scope](/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes).
* For organizations, use an access token with the [`admin:org` scope](/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes).

To authenticate using a {% data variables.product.prodname_dotcom %} App, it must be assigned the following permissions:

* For repositories, assign the `administration` permission.
* For organizations, assign the `organization_self_hosted_runners` permission.

You can register and delete enterprise self-hosted runners using [the API](/rest/actions/self-hosted-runners). To authenticate to the API, your autoscaling implementation can use an access token.

Your access token will require the `manage_runners:enterprise` scope.

## Communication

Self-hosted runners connect to {% ifversion fpt or ghec %}{% data variables.product.github %}{% else %}{% data variables.location.product_location_enterprise %}{% endif %} to receive job assignments and download new versions of the runner application.

{% data reusables.actions.runner-app-open-source %} {% ifversion fpt or ghec %} When a new version is released, the runner application automatically updates itself when a job is assigned to the runner, or within a week of release if the runner hasn't been assigned any jobs. {% else ifversion ghes %} When a new version is released, the runner application will automatically update within 24 hours.{% endif %}

### Requirements for communication{% ifversion fpt or ghec %} with {% data variables.product.github %}{% else %} with {% data variables.location.product_location_enterprise %}{% endif %}

* The self-hosted runner application must be running on the host machine to accept and run {% data variables.product.prodname_actions %} jobs.
{%- ifversion fpt or ghec %}
* The host machine must have appropriate network access with at least 70 kilobits per second upload and download speed.
* The host machine must be able to make outbound HTTPS connections over port 443.
* Depending on the function of the workflows assigned to your self-hosted runner, the host machine must be able to communicate with the {% data variables.product.github %} domains listed below.
{% else %}
* {% data variables.product.prodname_ghe_server %} must accept inbound connections from your runners over HTTP(S) at {% data variables.location.product_location_enterprise %}'s hostname and API subdomain, and your runners must allow outbound connections over HTTP(S) to {% data variables.location.product_location_enterprise %}'s hostname and API subdomain.
* For caching to work, the runner must be able to communicate with, and directly download content from, blob storage.
{% endif %}

{% ifversion fpt or ghec %}

### Accessible domains by function

{% data reusables.actions.domain-name-cname-recursive-firewall-rules %}

{% data reusables.actions.runner-essential-communications %}

In addition, your workflow may require access to other network resources.

If you use an IP address allow list for your {% data variables.product.prodname_dotcom %} organization or enterprise account, you must add your self-hosted runner's IP address to the allow list. See [Managing allowed IP addresses for your organization](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list) or [Enforcing policies for security settings in your enterprise](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise){% ifversion fpt %} in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}.{% endif %}

{% else %}

### Communication with {% data variables.product.prodname_dotcom_the_website %}

Self-hosted runners do not need to connect to {% data variables.product.prodname_dotcom_the_website %} unless you have enabled automatic access to {% data variables.product.prodname_dotcom_the_website %} actions for {% data variables.product.prodname_ghe_server %}. For more information, see [AUTOTITLE](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise).

If you want your runner to connect to {% data variables.product.prodname_dotcom_the_website %}, the host machine must be able to make outbound HTTP connections over port 80, or HTTPS connections over port 443. To ensure connectivity over HTTPS, configure TLS for {% data variables.product.prodname_ghe_server %}. See [AUTOTITLE](/enterprise-server@latest/admin/configuration/hardening-security-for-your-enterprise/configuring-tls).

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

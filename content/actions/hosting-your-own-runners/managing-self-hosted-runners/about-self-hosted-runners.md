---
title: About self-hosted runners
intro: 'You can host your own runners and customize the environment used to run jobs in your {% data variables.product.prodname_actions %} workflows.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/about-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/about-self-hosted-runners
  - /actions/hosting-your-own-runners/about-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## About self-hosted runners

A self-hosted runner is a system that you deploy and manage to execute jobs from {% data variables.product.prodname_actions %} on {% ifversion ghec %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}. For more information about {% data variables.product.prodname_actions %}, see "[AUTOTITLE](/actions/learn-github-actions/understanding-github-actions){% ifversion fpt %}."{% elsif ghec or ghes %}" and "[AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)."{% endif %}

{% data reusables.actions.self-hosted-runner-description %} {% data reusables.actions.self-hosted-runner-locations %}

You can add self-hosted runners at various levels in the management hierarchy:
- Repository-level runners are dedicated to a single repository.
- Organization-level runners can process jobs for multiple repositories in an organization.
- Enterprise-level runners can be assigned to multiple organizations in an enterprise account.

{% data reusables.actions.self-hosted-runner-architecture %} {% data reusables.actions.runner-app-open-source %} When a new version is released, the runner application automatically updates itself when a job is assigned to the runner, or within a week of release if the runner hasn't been assigned any jobs.

{% ifversion ghes %}
{% note %}

**Note:** {% data reusables.actions.upgrade-runners-before-upgrade-ghes %}

{% endnote %}
{% endif %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

For more information about installing and using self-hosted runners, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners)" and "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/using-self-hosted-runners-in-a-workflow)."

## Differences between {% data variables.product.prodname_dotcom %}-hosted and self-hosted runners

{% data variables.product.prodname_dotcom %}-hosted runners offer a quicker, simpler way to run your workflows, while self-hosted runners are a highly configurable way to run workflows in your own custom environment.

**{% data variables.product.prodname_dotcom %}-hosted runners:**
- Receive automatic updates for the operating system, preinstalled packages and tools, and the self-hosted runner application.
- Are managed and maintained by {% data variables.product.prodname_dotcom %}.
- Provide a clean instance for every job execution.
- Use free minutes on your {% data variables.product.prodname_dotcom %} plan, with per-minute rates applied after surpassing the free minutes.

**Self-hosted runners:**
- Receive automatic updates for the self-hosted runner application only, though you may disable automatic updates of the runner. For more information about controlling runner software updates on self-hosted runners, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/autoscaling-with-self-hosted-runners#controlling-runner-software-updates-on-self-hosted-runners)." You are responsible for updating the operating system and all other software.
- Can use cloud services or local machines that you already pay for.
- Are customizable to your hardware, operating system, software, and security requirements.
- Don't need to have a clean instance for every job execution.
- Are free to use with {% data variables.product.prodname_actions %}, but you are responsible for the cost of maintaining your runner machines.{% ifversion ghec or ghes %}
- Can be organized into groups to restrict access to specific {% ifversion restrict-groups-to-workflows %}workflows, {% endif %}organizations and repositories. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups)."{% endif %}

## Requirements for self-hosted runner machines

You can use any machine as a self-hosted runner as long at it meets these requirements:

- You can install and run the self-hosted runner application on the machine. For more information, see "[Supported architectures and operating systems for self-hosted runners](#supported-architectures-and-operating-systems-for-self-hosted-runners)."
- The machine can communicate with {% data variables.product.prodname_actions %}. For more information, see "[Communication between self-hosted runners and {% data variables.product.product_name %}](#communication-requirements)."
- The machine has enough hardware resources for the type of workflows you plan to run. The self-hosted runner application itself only requires minimal resources.
- If you want to run workflows that use Docker container actions or service containers, you must use a Linux machine and Docker must be installed.

## Autoscaling your self-hosted runners

You can automatically increase or decrease the number of self-hosted runners in your environment in response to the webhook events you receive. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/autoscaling-with-self-hosted-runners)."

## Usage limits

There are some limits on {% data variables.product.prodname_actions %} usage when using self-hosted runners. These limits are subject to change.

{% ifversion fpt or ghec or ghes > 3.12 %}- **Job execution time** - Each job in a workflow can run for up to 5 days of execution time. If a job reaches this limit, the job is terminated and fails to complete.{% endif %}
{% data reusables.actions.usage-workflow-run-time %}
- **Job queue time** - Each job for self-hosted runners that has been queued for at least 24 hours will be canceled. The actual time in queue can reach up to 48 hours before cancellation occurs. If a self-hosted runner does not start executing the job within this limit, the job is terminated and fails to complete.
{% data reusables.actions.usage-api-requests %}
- **Job matrix** - {% data reusables.actions.usage-matrix-limits %}
{% data reusables.actions.usage-workflow-queue-limits %}
- **Registering self-hosted runners** - You can have a maximum of 10,000 self-hosted runners in one runner group. If this limit is reached, adding a new runner will not be possible.

## Workflow continuity for self-hosted runners

{% data reusables.actions.runner-workflow-continuity %}

## Supported architectures and operating systems for self-hosted runners

The following operating systems are supported for the self-hosted runner application.

### Linux

- Red Hat Enterprise Linux 8 or later
- CentOS 8 or later
- Oracle Linux 8 or later
- Fedora 29 or later
- Debian 10 or later
- Ubuntu 20.04 or later
- Linux Mint 20 or later
- openSUSE 15.2 or later
- SUSE Enterprise Linux (SLES) 15 SP2 or later

### Windows

- Windows 10 64-bit
- Windows 11 64-bit
- Windows Server 2016 64-bit
- Windows Server 2019 64-bit
- Windows Server 2022 64-bit

### macOS

- macOS 11.0 (Big Sur) or later

### Architectures

The following processor architectures are supported for the self-hosted runner application.

- `x64` - Linux, macOS, Windows.
- `ARM64` - Linux{% ifversion actions-macos-arm %}, macOS{% endif %}{% ifversion actions-windows-arm %}, Windows (currently in beta){% endif %}.
- `ARM32` - Linux.

{% ifversion ghes %}

## Supported actions on self-hosted runners

Some extra configuration might be required to use actions from {% data variables.product.prodname_dotcom_the_website %} with {% data variables.product.prodname_ghe_server %}, or to use the `actions/setup-LANGUAGE` actions with self-hosted runners that do not have internet access. For more information, see "[AUTOTITLE](/admin/github-actions/managing-access-to-actions-from-githubcom)" and contact your {% data variables.product.prodname_enterprise %} site administrator.

{% endif %}

<a name="communication-requirements"></a>

## Communication between self-hosted runners and {% data variables.product.product_name %}

The self-hosted runner connects to {% data variables.product.product_name %} to receive job assignments and to download new versions of the runner application. The self-hosted runner uses an {% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %} _long poll_ that opens a connection to {% data variables.product.product_name %} for 50 seconds, and if no response is received, it then times out and creates a new long poll. The application must be running on the machine to accept and run {% data variables.product.prodname_actions %} jobs.

{% data reusables.actions.self-hosted-runner-ports-protocols %}

{% ifversion fpt or ghec %}
Since the self-hosted runner opens a connection to {% data variables.location.product_location %}, you do not need to allow {% data variables.product.prodname_dotcom %} to make inbound connections to your self-hosted runner.
{% elsif ghes %}
Only an outbound connection from the runner to {% data variables.location.product_location %} is required. There is no need for an inbound connection from {% data variables.location.product_location %} to the runner.
For caching to work, the runner must be able to communicate with the blob storage and directly download content from it.
{%- endif %}

{% ifversion ghes %}

{% data variables.product.product_name %} must accept inbound connections from your runners over {% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %} at {% data variables.location.product_location %}'s hostname and API subdomain, and your runners must allow outbound connections over {% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %} to {% data variables.location.product_location %}'s hostname and API subdomain.

{% endif %}

{% ifversion fpt or ghec %}

You must ensure that the machine has the appropriate network access with at least 70 kilobits per second upload and download speed to communicate with the {% data variables.product.prodname_dotcom %} hosts listed below. Some hosts are required for essential runner operations, while other hosts are only required for certain functionality.

You can use the REST API to get meta information about {% data variables.product.company_short %}, including the IP addresses of {% data variables.product.company_short %} services. For more information about the domains and IP addresses used, see "[AUTOTITLE](/rest/meta/meta)."

{% note %}

**Note:** Some of the domains listed below are configured using `CNAME` records. Some firewalls might require you to add rules recursively for all `CNAME` records. Note that the `CNAME` records might change in the future, and that only the domains listed below will remain constant.

{% endnote %}

**Needed for essential operations:**

```shell copy
github.com
api.github.com
*.actions.githubusercontent.com
```

**Needed for downloading actions:**

```shell copy
codeload.github.com
ghcr.io
*.actions.githubusercontent.com
```

**Needed for uploading/downloading job summaries, logs, workflow artifacts, and caches:**

```shell copy
results-receiver.actions.githubusercontent.com
*.blob.core.windows.net
```

**Needed for runner version updates:**

```shell copy
objects.githubusercontent.com
objects-origin.githubusercontent.com
github-releases.githubusercontent.com
github-registry-files.githubusercontent.com
```

**Needed for retrieving OIDC tokens:**

```shell copy
*.actions.githubusercontent.com
```

**Needed for downloading or publishing packages or containers to {% data variables.product.prodname_dotcom %} Packages:**

```shell copy
*.pkg.github.com
ghcr.io
```

**Needed for {% data variables.large_files.product_name_long %}**

```shell copy
github-cloud.githubusercontent.com
github-cloud.s3.amazonaws.com
```

In addition, your workflow may require access to other network resources.

If you use an IP address allow list for your {% data variables.product.prodname_dotcom %} organization or enterprise account, you must add your self-hosted runner's IP address to the allow list. For more information, see "[Managing allowed IP addresses for your organization](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)" or "[Enforcing policies for security settings in your enterprise](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

{% else %}

{% ifversion ghes %}Self-hosted runners do not require any external internet access in order to function. As a result, you can use network routing to direct communication between the self-hosted runner and {% data variables.location.product_location %}. For example, you can assign a private IP address to your self-hosted runner and configure routing to send traffic to {% data variables.location.product_location %}, with no need for traffic to traverse a public network.{% endif %}

{% endif %}

You can also use self-hosted runners with a proxy server. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/using-a-proxy-server-with-self-hosted-runners)."

For more information about troubleshooting common network connectivity issues, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/monitoring-and-troubleshooting-self-hosted-runners#troubleshooting-network-connectivity)."

{% ifversion ghes %}

## Communication between self-hosted runners and {% data variables.product.prodname_dotcom_the_website %}

Self-hosted runners do not need to connect to {% data variables.product.prodname_dotcom_the_website %} unless you have enabled automatic access to {% data variables.product.prodname_dotcom_the_website %} actions for {% data variables.location.product_location %}. For more information, see "[AUTOTITLE](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise)."

If you have enabled automatic access to {% data variables.product.prodname_dotcom_the_website %} actions, then the self-hosted runner will connect directly to {% data variables.product.prodname_dotcom_the_website %} to download actions. You must ensure that the machine has the appropriate network access to communicate with the {% data variables.product.prodname_dotcom %} URLs listed below.

```shell copy
github.com
api.github.com
codeload.github.com
ghcr.io
*.actions.githubusercontent.com
```

{% note %}

**Note:** Some of the domains listed above are configured using `CNAME` records. Some firewalls might require you to add rules recursively for all `CNAME` records. Note that the `CNAME` records might change in the future, and that only the domains listed above will remain constant.

{% endnote %}

{% endif %}

## Self-hosted runner security

{% ifversion fpt or ghec %}

{% data reusables.actions.self-hosted-runner-security %}

{% endif %}

{% ifversion fpt or ghec %}

This is not an issue with {% data variables.product.prodname_dotcom %}-hosted runners because each {% data variables.product.prodname_dotcom %}-hosted runner is always a clean isolated virtual machine, and it is destroyed at the end of the job execution.

{% endif %}

Untrusted workflows running on your self-hosted runner pose significant security risks for your machine and network environment, especially if your machine persists its environment between jobs. Some of the risks include:

- Malicious programs running on the machine.
- Escaping the machine's runner sandbox.
- Exposing access to the machine's network environment.
- Persisting unwanted or dangerous data on the machine.

For more information about security hardening for self-hosted runners, see "[AUTOTITLE](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)."

{% ifversion actions-disable-repo-runners %}

### Restricting the use of self-hosted runners

{% data reusables.actions.disable-selfhosted-runners-crossrefs %}

{% endif %}

{% ifversion ghec or ghes %}

## Further reading

- "[AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise)"

{% endif %}

---
title: GitHub-hosted runners reference
shortTitle: GitHub-hosted runners
intro: 'Find information about {% data variables.product.github %}-hosted runners, including their specifications and customization options.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /actions/reference/github-hosted-runners-reference
---

{% ifversion ghes %}

{% data reusables.actions.enterprise-github-hosted-runners %}

{% else %}

## Supported runners and hardware resources

{% ifversion actions-hosted-runners %}

Ranges of {% data variables.product.prodname_dotcom %}-hosted runners are available for use in public and private repositories.

For lists of available runners, see:
* [Standard runners for **public** repositories](#standard-github-hosted-runners-for-public-repositories)
* {% ifversion ghec %}[Standard runners for **private** and **internal** repositories](#standard-github-hosted-runners-for-internal-and-private-repositories){% else %}[Standard runners for **private** repositories](#standard-github-hosted-runners-for--private-repositories){% endif %}

{% data variables.product.prodname_dotcom %}-hosted Linux runners support hardware acceleration for Android SDK tools, which makes running Android tests much faster and consumes fewer minutes. For more information on Android hardware acceleration, see [Configure hardware acceleration for the Android Emulator](https://developer.android.com/studio/run/emulator-acceleration) in the Android Developers documentation.

> [!NOTE]
> The `-latest` runner images are the latest stable images that {% data variables.product.prodname_dotcom %} provides, and might not be the most recent version of the operating system available from the operating system vendor.

> [!WARNING]
> Beta and Deprecated Images are provided "as-is", "with all faults" and "as available" and are excluded from the service level agreement and warranty. Beta Images may not be covered by customer support.

{% endif %}

{% data reusables.actions.supported-github-runners %}

Workflow logs list the runner used to run a job. For more information, see [AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history).

### Limitations for arm64 macOS runners

{% data reusables.actions.macos-runner-limitations %}

### {% data variables.actions.hosted_runner_caps %}s

{% data reusables.actions.about-larger-runners %}

For more information, see [AUTOTITLE](/actions/using-github-hosted-runners/about-larger-runners).

## Administrative privileges

The Linux and macOS virtual machines both run using passwordless `sudo`. When you need to execute commands or install tools that require more privileges than the current user, you can use `sudo` without needing to provide a password. For more information, see the [Sudo Manual](https://www.sudo.ws/man/1.8.27/sudo.man.html).

Windows virtual machines are configured to run as administrators with User Account Control (UAC) disabled. For more information, see [How User Account Control works](https://docs.microsoft.com/windows/security/identity-protection/user-account-control/how-user-account-control-works) in the Windows documentation.

## IP addresses

To get a list of IP address ranges that {% data variables.product.prodname_actions %} uses for {% data variables.product.prodname_dotcom %}-hosted runners, you can use the {% data variables.product.prodname_dotcom %} REST API. For more information, see the `actions` key in the response of the `GET /meta` endpoint. For more information, see [AUTOTITLE](/rest/meta/meta#get-github-meta-information).

Windows and Ubuntu runners are hosted in Azure and subsequently have the same IP address ranges as the Azure datacenters. macOS runners are hosted in {% data variables.product.prodname_dotcom %}'s own macOS cloud.

Since there are so many IP address ranges for {% data variables.product.prodname_dotcom %}-hosted runners, we do not recommend that you use these as allowlists for your internal resources. Instead, we recommend you use {% data variables.actions.hosted_runner %}s with a static IP address range, or self-hosted runners. For more information, see [AUTOTITLE](/actions/using-github-hosted-runners/about-larger-runners) or [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners).

The list of {% data variables.product.prodname_actions %} IP addresses returned by the API is updated once a week.

## Communication requirements for {% data variables.product.prodname_dotcom %}-hosted runners

A {% data variables.product.github %}-hosted runner must establish connections to {% data variables.product.github %}-owned endpoints to perform essential communication operations. In addition, your runner may require access to additional networks that you specify or utilize within an action.

To ensure proper communications for {% data variables.product.github %}-hosted runners between networks within your configuration, ensure that the following communications are allowed.

{% data reusables.actions.domain-name-cname-recursive-firewall-rules %}

{% data reusables.actions.runner-essential-communications %}

## File systems

{% data variables.product.prodname_dotcom %} executes actions and shell commands in specific directories on the virtual machine. The file paths on virtual machines are not static. Use the environment variables {% data variables.product.prodname_dotcom %} provides to construct file paths for the `home`, `workspace`, and `workflow` directories.

| Directory | Environment variable | Description |
|-----------|----------------------|-------------|
| `home` | `HOME` | Contains user-related data. For example, this directory could contain credentials from a login attempt. |
| `workspace` | `GITHUB_WORKSPACE` | Actions and shell commands execute in this directory. An action can modify the contents of this directory, which subsequent actions can access. |
| `workflow/event.json` | `GITHUB_EVENT_PATH` | The `POST` payload of the webhook event that triggered the workflow. {% data variables.product.prodname_dotcom %} rewrites this each time an action executes to isolate file content between actions.

For a list of the environment variables {% data variables.product.prodname_dotcom %} creates for each workflow, see [AUTOTITLE](/actions/learn-github-actions/variables#default-environment-variables).

### Docker container filesystem

Actions that run in Docker containers have static directories under the `/github` path. However, we strongly recommend using the default environment variables to construct file paths in Docker containers.

{% data variables.product.prodname_dotcom %} reserves the `/github` path prefix and creates three directories for actions.

* `/github/home`
* `/github/workspace` - {% data reusables.repositories.action-root-user-required %}
* `/github/workflow`

{% endif %}

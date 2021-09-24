---
title: About GitHub-hosted runners
intro: '{% data variables.product.prodname_dotcom %} offers hosted virtual machines to run workflows. The virtual machine contains an environment of tools, packages, and settings available for {% data variables.product.prodname_actions %} to use.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/reference/virtual-environments-for-github-hosted-runners
  - /actions/reference/software-installed-on-github-hosted-runners
  - /actions/reference/specifications-for-github-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
shortTitle: GitHub-hosted runners
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About {% data variables.product.prodname_dotcom %}-hosted runners

A {% data variables.product.prodname_dotcom %}-hosted runner is a virtual machine hosted by {% data variables.product.prodname_dotcom %} with the {% data variables.product.prodname_actions %} runner application installed. {% data variables.product.prodname_dotcom %} offers runners with Linux, Windows, and macOS operating systems.

When you use a {% data variables.product.prodname_dotcom %}-hosted runner, machine maintenance and upgrades are taken care of for you. You can run workflows directly on the virtual machine or in a Docker container.

You can specify the runner type for each job in a workflow. Each job in a workflow executes in a fresh instance of the virtual machine. All steps in the job execute in the same instance of the virtual machine, allowing the actions in that job to share information using the filesystem.

{% data reusables.github-actions.runner-app-open-source %}

### Cloud hosts for {% data variables.product.prodname_dotcom %}-hosted runners

{% data variables.product.prodname_dotcom %} hosts Linux and Windows runners on Standard_DS2_v2 virtual machines in Microsoft Azure with the {% data variables.product.prodname_actions %} runner application installed. The {% data variables.product.prodname_dotcom %}-hosted runner application is a fork of the Azure Pipelines Agent. Inbound ICMP packets are blocked for all Azure virtual machines, so ping or traceroute commands might not work. For more information about the Standard_DS2_v2 machine resources, see "[Dv2 and DSv2-series](https://docs.microsoft.com/azure/virtual-machines/dv2-dsv2-series#dsv2-series)" in the Microsoft Azure documentation.

{% data variables.product.prodname_dotcom %} hosts macOS runners in {% data variables.product.prodname_dotcom %}'s own macOS Cloud.

### Workflow continuity for {% data variables.product.prodname_dotcom %}-hosted runners

{% data reusables.github-actions.runner-workflow-continuity %}

In addition, if the workflow run has been successfully queued, but has not been processed by a {% data variables.product.prodname_dotcom %}-hosted runner within 45 minutes, then the queued workflow run is discarded.

### Administrative privileges of {% data variables.product.prodname_dotcom %}-hosted runners

The Linux and macOS virtual machines both run using passwordless `sudo`. When you need to execute commands or install tools that require more privileges than the current user, you can use `sudo` without needing to provide a password. For more information, see the "[Sudo Manual](https://www.sudo.ws/man/1.8.27/sudo.man.html)."

Windows virtual machines are configured to run as administrators with User Account Control (UAC) disabled. For more information, see "[How User Account Control works](https://docs.microsoft.com/windows/security/identity-protection/user-account-control/how-user-account-control-works)" in the Windows documentation.

## Supported runners and hardware resources

Hardware specification for Windows and Linux virtual machines:
- 2-core CPU
- 7 GB of RAM memory
- 14 GB of SSD disk space

Hardware specification for macOS virtual machines:
- 3-core CPU
- 14 GB of RAM memory
- 14 GB of SSD disk space

{% data reusables.github-actions.supported-github-runners %}

Workflow logs list the runner used to run a job. For more information, see "[Viewing workflow run history](/actions/managing-workflow-runs/viewing-workflow-run-history)."

## Supported software

The software tools included in {% data variables.product.prodname_dotcom %}-hosted runners are updated weekly. The update process takes several days, and the list of preinstalled software on the `main` branch is updated after the whole deployment ends. 
### Preinstalled software

Workflow logs include a link to the preinstalled tools on the exact runner. To find this information in the workflow log, expand the `Set up job` section. Under that section, expand the `Virtual Environment` section. The link following `Included Software` will describe the preinstalled tools on the runner that ran the workflow.
![Installed software link](/assets/images/actions-runner-installed-software-link.png)
For more information, see "[Viewing workflow run history](/actions/managing-workflow-runs/viewing-workflow-run-history)."

For the overall list of included tools for each runner operating system, see the links below:

* [Ubuntu 20.04 LTS](https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu2004-README.md)
* [Ubuntu 18.04 LTS](https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu1804-README.md)
* [Windows Server 2022](https://github.com/actions/virtual-environments/blob/main/images/win/Windows2022-Readme.md)
* [Windows Server 2019](https://github.com/actions/virtual-environments/blob/main/images/win/Windows2019-Readme.md)
* [Windows Server 2016](https://github.com/actions/virtual-environments/blob/main/images/win/Windows2016-Readme.md)
* [macOS 11](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-11-Readme.md)
* [macOS 10.15](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-10.15-Readme.md)

{% data variables.product.prodname_dotcom %}-hosted runners include the operating system's default built-in tools, in addition to the packages listed in the above references. For example, Ubuntu and macOS runners include `grep`, `find`, and `which`, among other default tools. 

### Using preinstalled software

We recommend using actions to interact with the software installed on runners. This approach has several benefits:
- Usually, actions provide more flexible functionality like versions selection, ability to pass arguments, and parameters
- It ensures the tool versions used in your workflow will remain the same regardless of software updates

If there is a tool that you'd like to request, please open an issue at [actions/virtual-environments](https://github.com/actions/virtual-environments). This repository also contains announcements about all major software updates on runners.

### Installing additional software

You can install additional software on {% data variables.product.prodname_dotcom %}-hosted runners. For more information, see "[Customizing GitHub-hosted runners](/actions/using-github-hosted-runners/customizing-github-hosted-runners)".

## IP addresses

{% note %}

**Note:** If you use an IP address allow list for your {% data variables.product.prodname_dotcom %} organization or enterprise account, you cannot use {% data variables.product.prodname_dotcom %}-hosted runners and must instead use self-hosted runners. For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners)."

{% endnote %}

Windows and Ubuntu runners are hosted in Azure and subsequently have the same IP address ranges as the Azure datacenters. macOS runners are hosted in {% data variables.product.prodname_dotcom %}'s own macOS cloud.

To get a list of IP address ranges that {% data variables.product.prodname_actions %} uses for {% data variables.product.prodname_dotcom %}-hosted runners, you can use the {% data variables.product.prodname_dotcom %} REST API . For more information, see the `actions` key in the response of the "[Get GitHub meta information](/rest/reference/meta#get-github-meta-information)" endpoint. You can use this list of IP addresses if you require an allow-list to prevent unauthorized access to your internal resources.

The list of {% data variables.product.prodname_actions %} IP addresses returned by the API is updated once a week. 

## File systems

{% data variables.product.prodname_dotcom %} executes actions and shell commands in specific directories on the virtual machine. The file paths on virtual machines are not static. Use the environment variables {% data variables.product.prodname_dotcom %} provides to construct file paths for the `home`, `workspace`, and `workflow` directories.

| Directory | Environment variable | Description |
|-----------|----------------------|-------------|
| `home` | `HOME` | Contains user-related data. For example, this directory could contain credentials from a login attempt. |
| `workspace` | `GITHUB_WORKSPACE` | Actions and shell commands execute in this directory. An action can modify the contents of this directory, which subsequent actions can access. |
| `workflow/event.json` | `GITHUB_EVENT_PATH` | The `POST` payload of the webhook event that triggered the workflow. {% data variables.product.prodname_dotcom %} rewrites this each time an action executes to isolate file content between actions.

For a list of the environment variables {% data variables.product.prodname_dotcom %} creates for each workflow, see "[Using environment variables](/github/automating-your-workflow-with-github-actions/using-environment-variables)."

### Docker container filesystem

Actions that run in Docker containers have static directories under the `/github` path. However, we strongly recommend using the default environment variables to construct file paths in Docker containers.

{% data variables.product.prodname_dotcom %} reserves the `/github` path prefix and creates three directories for actions.

- `/github/home`
- `/github/workspace` - {% data reusables.repositories.action-root-user-required %}
- `/github/workflow`

{% ifversion fpt %}

## Further reading
- "[Managing billing for {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions)"

{% endif %}

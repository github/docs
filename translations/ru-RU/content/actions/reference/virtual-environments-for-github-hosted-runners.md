---
title: Virtual environments for GitHub-hosted runners
intro: '{% data variables.product.prodname_dotcom %} offers hosted virtual machines to run workflows. The virtual machine contains an environment of tools, packages, and settings available for {% data variables.product.prodname_actions %} to use.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### About {% data variables.product.prodname_dotcom %}-hosted runners

A {% data variables.product.prodname_dotcom %}-hosted runner is a virtual machine hosted by {% data variables.product.prodname_dotcom %} with the {% data variables.product.prodname_actions %} runner application installed. {% data variables.product.prodname_dotcom %} offers runners with Linux, Windows, and macOS operating systems.

When you use a {% data variables.product.prodname_dotcom %}-hosted runner, machine maintenance and upgrades are taken care of for you. You can run workflows directly on the virtual machine or in a Docker container.

You can specify the runner type for each job in a workflow. Each job in a workflow executes in a fresh instance of the virtual machine. All steps in the job execute in the same instance of the virtual machine, allowing the actions in that job to share information using the filesystem.

{% data reusables.github-actions.runner-app-open-source %}

#### Cloud hosts for {% data variables.product.prodname_dotcom %}-hosted runners

{% data variables.product.prodname_dotcom %} hosts Linux and Windows runners on Standard_DS2_v2 virtual machines in Microsoft Azure with the {% data variables.product.prodname_actions %} runner application installed. The {% data variables.product.prodname_dotcom %}-hosted runner application is a fork of the Azure Pipelines Agent. Inbound ICMP packets are blocked for all Azure virtual machines, so ping or traceroute commands might not work. For more information about the Standard_DS2_v2 machine resources, see "[Dv2 and DSv2-series](https://docs.microsoft.com/en-us/azure/virtual-machines/dv2-dsv2-series#dsv2-series)" in the Microsoft Azure documentation.

{% data variables.product.prodname_dotcom %} uses [MacStadium](https://www.macstadium.com/) to host the macOS runners.

#### Administrative privileges of {% data variables.product.prodname_dotcom %}-hosted runners

The Linux and macOS virtual machines both run using passwordless `sudo`. When you need to execute commands or install tools that require more privileges than the current user, you can use `sudo` without needing to provide a password. For more information, see the "[Sudo Manual](https://www.sudo.ws/man/1.8.27/sudo.man.html)."

Windows virtual machines are configured to run as administrators with User Account Control (UAC) disabled. For more information, see "[How User Account Control works](https://docs.microsoft.com/en-us/windows/security/identity-protection/user-account-control/how-user-account-control-works)" in the Windows documentation.

### Supported runners and hardware resources

Each virtual machine has the same hardware resources available.

- 2-core CPU
- 7 GB of RAM memory
- 14 GB of SSD disk space

{% data reusables.github-actions.supported-github-runners %}

{% data reusables.github-actions.ubuntu-runner-preview %}

For a list of supported software, tools, and packages for each runner, see "[Software installed on {% data variables.product.prodname_dotcom %}-hosted runners](/actions/reference/software-installed-on-github-hosted-runners)."

You can view the logs for a workflow run to see the exact runner environment that was used for a job, as well as a link to the preinstalled tools that were on the runner. For more information, see "[Managing a workflow run](/actions/configuring-and-managing-workflows/managing-a-workflow-run#viewing-your-workflow-history)."


#### IP addresses of {% data variables.product.prodname_dotcom %}-hosted runners

{% note %}

**Note:** If you use an IP address allow list for your {% data variables.product.prodname_dotcom %} organization or enterprise account, you cannot use {% data variables.product.prodname_dotcom %}-hosted runners and must instead use self-hosted runners. For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners)."

{% endnote %}

Windows and Ubuntu runners are hosted in Azure and have the same IP address ranges as Azure Data centers. Currently, all Windows and Ubuntu {% data variables.product.prodname_dotcom %}-hosted runners are in the following Azure regions:

- East US (`eastus`)
- East US 2 (`eastus2`)
- West US 2 (`westus2`)
- Central US (`centralus`)
- South Central US (`southcentralus`)

Microsoft updates the Azure IP address ranges weekly in a JSON file that you can download from the [Azure IP Ranges and Service Tags - Public Cloud](https://www.microsoft.com/en-us/download/details.aspx?id=56519) website. You can use this range of IP addresses if you require an allow-list to prevent unauthorized access to your internal resources.

The JSON file contains an array called `values`. Inside that array, you can find the supported IP addresses in an object with a `name` and `id` of the Azure region, for example `"AzureCloud.eastus2"`.

You can find the supported IP address ranges in the `"addressPrefixes"` object. This is a condensed example of the JSON file.

```json
{
  "changeNumber": 84,
  "cloud": "Public",
  "values": [
    {
      "name": "AzureCloud.eastus2",
      "id": "AzureCloud.eastus2",
      "properties": {
        "changeNumber": 33,
        "region": "eastus2",
        "platform": "Azure",
        "systemService": "",
        "addressPrefixes": [
          "13.68.0.0/17",
          "13.77.64.0/18",
          "13.104.147.0/25",
          ...
        ]
      }
    }
  ]
}
```

### Filesystems on {% data variables.product.prodname_dotcom %}-hosted runners

{% data variables.product.prodname_dotcom %} executes actions and shell commands in specific directories on the virtual machine. The file paths on virtual machines are not static. Use the environment variables {% data variables.product.prodname_dotcom %} provides to construct file paths for the `home`, `workspace`, and `workflow` directories.

| Directory             | Environment variable | Description                                                                                                                                                                                                |
| --------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `home`                | `HOME`               | Contains user-related data. For example, this directory could contain credentials from a login attempt.                                                                                                    |
| `workspace`           | `GITHUB_WORKSPACE`   | Actions and shell commands execute in this directory. An action can modify the contents of this directory, which subsequent actions can access.                                                            |
| `workflow/event.json` | `GITHUB_EVENT_PATH`  | The `POST` payload of the webhook event that triggered the workflow. {% data variables.product.prodname_dotcom %} rewrites this each time an action executes to isolate file content between actions. |

For a list of the environment variables {% data variables.product.prodname_dotcom %} creates for each workflow, see "[Using environment variables](/github/automating-your-workflow-with-github-actions/using-environment-variables)."

#### Docker container filesystem

Actions that run in Docker containers have static directories under the `/github` path. However, we strongly recommend using the default environment variables to construct file paths in Docker containers.

{% data variables.product.prodname_dotcom %} reserves the `/github` path prefix and creates three directories for actions.

- `/github/home`
- `/github/workspace` - {% data reusables.repositories.action-root-user-required %}
- `/github/workflow`

{% if currentVersion == "free-pro-team@latest" %}

### Дополнительная литература
- "[Managing billing for {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)"

{% endif %}

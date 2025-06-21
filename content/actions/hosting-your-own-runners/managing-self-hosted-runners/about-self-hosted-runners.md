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

## About self-hosted runners

A self-hosted runner is a system that you deploy and manage to execute jobs from {% data variables.product.prodname_actions %} on {% data variables.product.github %}.

Self-hosted runners:

{% ifversion fpt or ghec %}
* Give you more control of hardware, operating system, and software tools than {% data variables.product.prodname_dotcom %}-hosted runners provide.{% endif %}
* Are free to use with {% data variables.product.prodname_actions %}, but you are responsible for the cost of maintaining your runner machines.
* Let you create custom hardware configurations that meet your needs with processing power or memory to run larger jobs, install software available on your local network.
* Receive automatic updates for the self-hosted runner application only, though you may disable automatic updates of the runner.
* Can use cloud services or local machines that you already pay for.
* Don't need to have a clean instance for every job execution.{% ifversion ghec or ghes %}
* Can be organized into groups to restrict access to specific workflows, organizations, and repositories. See [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups).{% endif %}
* Can be physical, virtual, in a container, on-premises, or in a cloud.

You can use self-hosted runners anywhere in the management hierarchy. Repository-level runners are dedicated to a single repository, while organization-level runners can process jobs for multiple repositories in an organization. Organization owners can choose which repositories are allowed to create repository-level self-hosted runners. See [AUTOTITLE](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#limiting-the-use-of-self-hosted-runners). Finally, enterprise-level runners can be assigned to multiple organizations in an enterprise account.

### Requirements for self-hosted runner machines

You can use any machine as a self-hosted runner as long as it meets these requirements:

* You can install and run the self-hosted runner application on the machine.
* The machine can communicate with {% data variables.product.prodname_actions %}.
* The machine has enough hardware resources for the type of workflows you plan to run. The self-hosted runner application itself only requires minimal resources.
* If you want to run workflows that use Docker container actions or service containers, you must use a Linux machine and Docker must be installed.

{% ifversion ghes %}

## Supported actions on self-hosted runners

All `actions/setup-LANGUAGE` action repositories currently support three platforms: macOS, Windows, and Ubuntu.
Some extra configuration might be required to use actions from {% data variables.product.github %} with {% data variables.product.prodname_ghe_server %}, or to use the `actions/setup-LANGUAGE` actions with self-hosted runners that do not have internet access. For more information, see [AUTOTITLE](/admin/github-actions/managing-access-to-actions-from-githubcom) and contact your {% data variables.product.prodname_enterprise %} site administrator.

{% endif %}

## Further reading

* [AUTOTITLE](/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions)
* [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners)
* [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/using-self-hosted-runners-in-a-workflow)
* [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/autoscaling-with-self-hosted-runners){% ifversion ghec or ghes %}
* [AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise){% endif %}
* [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/supported-architectures-and-operating-systems-for-self-hosted-runners)
* [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/communicating-with-self-hosted-runners)

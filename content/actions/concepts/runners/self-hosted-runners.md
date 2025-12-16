---
title: Self-hosted runners
intro: 'You can host your own runners and customize the environment used to run jobs in your {% data variables.product.prodname_actions %} workflows.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/about-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/about-self-hosted-runners
  - /actions/hosting-your-own-runners/about-self-hosted-runners
  - /actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners
  - /actions/concepts/runners/about-self-hosted-runners
  - /actions/hosting-your-own-runners
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: concepts
topics:
  - CI
  - CD
---

{% data reusables.actions.self-hosted-price-note %}

A self-hosted runner is a system that you deploy and manage to execute jobs from {% data variables.product.prodname_actions %} on {% data variables.product.github %}.

Self-hosted runners:

{% ifversion fpt or ghec %}
* Give you more control of hardware, operating system, and software tools than {% data variables.product.github %}-hosted runners provide. Be aware that you are responsible for updating the operating system and all other software.
* Allow you to use machines and services that your company already maintains and pays to use.{% endif %} {% ifversion actions-cloud-platform-march %}
* Add little to your bill for actions usage because you pay only for using the actions cloud platform. See [AUTOTITLE](/billing/concepts/product-billing/github-actions).{% elsif fpt or ghec %}
* Are currently free to use with {% data variables.product.prodname_actions %}. From {% data variables.actions.self_hosted_runner_charge_date %}, you will see a small per-minute charge for using the actions cloud platform in your bill for actions usage. See [AUTOTITLE](/billing/concepts/product-billing/github-actions).{% endif %} {% ifversion ghes %}
* Are free to use with {% data variables.product.prodname_actions %}, but you are responsible for the cost of maintaining your runner machines.
* Can use cloud services or local machines that you already pay for.{% endif %}
* Let you create custom hardware configurations that meet your needs with processing power or memory to run larger jobs, install software available on your local network.
* Receive automatic updates for the self-hosted runner application only, though you may disable automatic updates of the runner.
* Don't need to have a clean instance for every job execution.{% ifversion ghec or ghes %}
* Can be organized into groups to restrict access to specific workflows, organizations, and repositories. See [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups).{% endif %}
* Can be physical, virtual, in a container, on-premises, or in a cloud.

You can use self-hosted runners anywhere in the management hierarchy. Repository-level runners are dedicated to a single repository, while organization-level runners can process jobs for multiple repositories in an organization. Organization owners can choose which repositories are allowed to create repository-level self-hosted runners. See [AUTOTITLE](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#limiting-the-use-of-self-hosted-runners). Finally, enterprise-level runners can be assigned to multiple organizations in an enterprise account.

## Next steps

{% ifversion ghec or ghes %}
To get hands-on experience with the policies and usage of self-hosted runners, see [AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise)
{% else %}
To set up a self-hosted runner in your workspace, see [AUTOTITLE](/actions/how-tos/managing-self-hosted-runners/adding-self-hosted-runners).
{% endif %}

To find information about the requirements and supported software and hardware for self-hosted runners, see [AUTOTITLE](/actions/reference/self-hosted-runners-reference).

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

You can use any machine as a self-hosted runner as long at it meets these requirements:

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


Skip to main content
GitHub Docs
Search GitHub Docs
Search GitHub Docs
GitHub Actions/Self-hosted runners/Manage self-hosted runners/Add self-hosted runners
Adding self-hosted runners
You can add a self-hosted runner to a repository, an organization, or an enterprise.

Host your own runners
2 of 8 in learning path
Next:Configuring the self-hosted runner application as a service
In this article
Prerequisites
Adding a self-hosted runner to a repository
Adding a self-hosted runner to an organization
Adding a self-hosted runner to an enterprise
You can add a self-hosted runner to a repository, an organization, or an enterprise.

If you are an organization or enterprise administrator, you might want to add your self-hosted runners at the organization or enterprise level. This approach makes the runner available to multiple repositories in your organization or enterprise, and also lets you to manage your runners in one place.

Warning

We recommend that you only use self-hosted runners with private repositories. This is because forks of your public repository can potentially run dangerous code on your self-hosted runner machine by creating a pull request that executes the code in a workflow.

For more information, see Security hardening for GitHub Actions.

You can set up automation to scale the number of self-hosted runners. For more information, see Autoscaling with self-hosted runners.

You can register ephemeral runners that perform a single job before the registration is cleaned up by using just-in-time runner registration. For more information, see Security hardening for GitHub Actions.

Prerequisites
You must have access to the machine you will use as a self-hosted runner in your environment.
Adding a self-hosted runner to a repository
You can add self-hosted runners to a single repository. To add a self-hosted runner to a user repository, you must be the repository owner. For an organization repository, you must be an organization owner or have admin access to the repository.

For information about how to add a self-hosted runner with the REST API, see REST API endpoints for self-hosted runners.

Note

Organization owners can choose which repositories are allowed to create repository-level self-hosted runners.

For more information, see Disabling or limiting GitHub Actions for your organization.

On GitHub, navigate to the main page of the repository.

Under your repository name, click  Settings. If you cannot see the "Settings" tab, select the  dropdown menu, then click Settings.

Screenshot of a repository header showing the tabs. The "Settings" tab is highlighted by a dark orange outline.
In the left sidebar, click  Actions, then click Runners.

Click New self-hosted runner.

Select the operating system image and architecture of your self-hosted runner machine.

Screenshot of the choice of operating system and architecture. These options are highlighted with a dark orange outline.
You will see instructions showing you how to download the runner application and install it on your self-hosted runner machine.

Open a shell on your self-hosted runner machine and run each shell command in the order shown.

Note

On Windows, if you want to install the self-hosted runner application as a service, you must open a shell with administrator privileges. We also recommend that you use C:\actions-runner as the directory for the self-hosted runner application so that Windows system accounts can access the runner directory.

The instructions walk you through completing these tasks:

Downloading and extracting the self-hosted runner application.
Running the config script to configure the self-hosted runner application and register it with GitHub Actions. The config script requires the destination URL and an automatically-generated time-limited token to authenticate the request. The token expires after one hour.
On Windows, the config script also asks if you would like to install the self-hosted runner application as a service. For Linux and macOS, you can install a service after you finish adding the runner. For more information, see Configuring the self-hosted runner application as a service.
Running the self-hosted runner application to connect the machine to GitHub Actions.
Checking that your self-hosted runner was successfully added
After completing the steps to add a self-hosted runner, the runner and its status are now listed under "Runners".

The self-hosted runner application must be active for the runner to accept jobs. When the runner application is connected to GitHub and ready to receive jobs, you will see the following message on the machine's terminal.

√ Connected to GitHub

2019-10-24 05:45:56Z: Listening for Jobs
For more information, see Monitoring and troubleshooting self-hosted runners.

Adding a self-hosted runner to an organization
You can add self-hosted runners at the organization level, where they can be used to process jobs for multiple repositories in an organization. To add a self-hosted runner to an organization, you must be an organization owner. For information about how to add a self-hosted runner with the REST API, see REST API endpoints for self-hosted runners.

On GitHub, navigate to the main page of the organization.

Under your organization name, click  Settings. If you cannot see the "Settings" tab, select the  dropdown menu, then click Settings.

Screenshot of the tabs in an organization's profile. The "Settings" tab is outlined in dark orange.
In the left sidebar, click  Actions, then click Runners.

Click New runner, then click New self-hosted runner.

Select the operating system image and architecture of your self-hosted runner machine.

Screenshot of the choice of operating system and architecture. These options are highlighted with a dark orange outline.
You will see instructions showing you how to download the runner application and install it on your self-hosted runner machine.

Open a shell on your self-hosted runner machine and run each shell command in the order shown.

Note

On Windows, if you want to install the self-hosted runner application as a service, you must open a shell with administrator privileges. We also recommend that you use C:\actions-runner as the directory for the self-hosted runner application so that Windows system accounts can access the runner directory.

The instructions walk you through completing these tasks:

Downloading and extracting the self-hosted runner application.
Running the config script to configure the self-hosted runner application and register it with GitHub Actions. The config script requires the destination URL and an automatically-generated time-limited token to authenticate the request. The token expires after one hour.
On Windows, the config script also asks if you would like to install the self-hosted runner application as a service. For Linux and macOS, you can install a service after you finish adding the runner. For more information, see Configuring the self-hosted runner application as a service.
Running the self-hosted runner application to connect the machine to GitHub Actions.
Checking that your self-hosted runner was successfully added
After completing the steps to add a self-hosted runner, the runner and its status are now listed under "Runners".

The self-hosted runner application must be active for the runner to accept jobs. When the runner application is connected to GitHub and ready to receive jobs, you will see the following message on the machine's terminal.

√ Connected to GitHub

2019-10-24 05:45:56Z: Listening for Jobs
For more information, see Monitoring and troubleshooting self-hosted runners.

Note

For security reasons, public repositories can't use runners in a runner group by default, but you can override this in the runner group's settings. For more information, see Managing access to self-hosted runners using groups.

Adding a self-hosted runner to an enterprise
If you use GitHub Enterprise Cloud, you can add self-hosted runners to an enterprise, where they can be assigned to multiple organizations. The organization owner can control which repositories can use it. For more information, see the GitHub Enterprise Cloud documentation.

Previous
About self-hosted runners
Next
Configuring the self-hosted runner application as a service
Help and support
Did you find what you needed?

Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Learn how to contribute

Still need help?
Ask the GitHub community
Contact support
Legal
© 2025 GitHub, Inc.
Terms
Privacy
Status
Pricing
Expert services
Blog
Free, Pro, & Team
Enterprise Cloud
Enterprise Server 3.16
Enterprise Server 3.15
Enterprise Server 3.14
Enterprise Server 3.13
Enterprise Server 3.12
All Enterprise Server releases
About versions

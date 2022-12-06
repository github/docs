---
title: Introducing GitHub Actions to your enterprise
shortTitle: Introduce Actions
intro: 'You can plan how to roll out {% data variables.product.prodname_actions %} in your enterprise.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
---

## About {% data variables.product.prodname_actions %} for enterprises

{% data reusables.actions.about-actions %} With {% data variables.product.prodname_actions %}, your enterprise can automate, customize, and execute your software development workflows like testing and deployments. For more information, see "[About {% data variables.product.prodname_actions %} for enterprises](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)."

![Diagram of jobs running on self-hosted runners](/assets/images/help/images/actions-enterprise-overview.png)

Before you introduce {% data variables.product.prodname_actions %} to a large enterprise, you first need to plan your adoption and make decisions about how your enterprise will use {% data variables.product.prodname_actions %} to best support your unique needs.

## Governance and compliance

You should create a plan to govern your enterprise's use of {% data variables.product.prodname_actions %} and meet your compliance obligations.

Determine which actions {% ifversion actions-workflow-policy %}and reusable workflows{% endif %} your developers will be allowed to use. {% ifversion ghes %}First, decide whether you'll enable access to actions {% ifversion actions-workflow-policy %}and reusable workflows{% endif %} from outside your instance. {% data reusables.actions.access-actions-on-dotcom %} For more information, see "[About using actions in your enterprise](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise)."

Then,{% else %}First,{% endif %} decide whether you'll allow third-party actions {% ifversion actions-workflow-policy %}and reusable workflows{% endif %} that were not created by {% data variables.product.company_short %}. You can configure the actions {% ifversion actions-workflow-policy %}and reusable workflows{% endif %} that are allowed to run at the repository, organization, and enterprise levels and can choose to only allow actions that are created by {% data variables.product.company_short %}. If you do allow third-party actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %}, you can limit allowed actions to those created by verified creators or a list of specific actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %}. For more information, see "[Managing {% data variables.product.prodname_actions %} settings for a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#managing-github-actions-permissions-for-your-repository)", "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization)", and "[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-to-restrict-the-use-of-github-actions-in-your-enterprise)."

{% ifversion actions-workflow-policy %}
![Screenshot of {% data variables.product.prodname_actions %} policies](/assets/images/help/organizations/enterprise-actions-policy-with-workflows.png)
{%- else %}
![Screenshot of {% data variables.product.prodname_actions %} policies](/assets/images/help/organizations/enterprise-actions-policy.png)
{%- endif %}

{% ifversion ghec or ghes > 3.4 %}
Consider combining OpenID Connect (OIDC) with reusable workflows to enforce consistent deployments across your repository, organization, or enterprise. You can do this by defining trust conditions on cloud roles based on reusable workflows. For more information, see "[Using OpenID Connect with reusable workflows](/actions/deployment/security-hardening-your-deployments/using-openid-connect-with-reusable-workflows)."
{% endif %}

You can access information about activity related to {% data variables.product.prodname_actions %} in the audit logs for your enterprise. If your business needs require retaining this information longer than audit log data is retained, plan how you'll export and store this data outside of {% data variables.product.prodname_dotcom %}. For more information, see {% ifversion ghec %}"[Exporting audit log activity for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise)" and "[Streaming the audit log for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)."{% else %}{% ifversion audit-log-streaming %}"[Streaming the audit log for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)" and {% endif %}"[Log forwarding](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)."{% endif %}

![Audit log entries](/assets/images/help/repository/audit-log-entries.png)

## Security

You should plan your approach to security hardening for {% data variables.product.prodname_actions %}.

### Security hardening individual workflows and repositories

Make a plan to enforce good security practices for people using {% data variables.product.prodname_actions %} features within your enterprise. For more information about these practices, see "[Security hardening for {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions)."

You can also encourage reuse of workflows that have already been evaluated for security. For more information, see "[Innersourcing](#innersourcing)."

### Securing access to secrets and deployment resources

You should plan where you'll store your secrets. We recommend storing secrets in {% data variables.product.prodname_dotcom %}, but you might choose to store secrets in a cloud provider.

In {% data variables.product.prodname_dotcom %}, you can store secrets at the repository or organization level. Secrets at the repository level can be limited to workflows in certain environments, such as production or testing. For more information, see "[Encrypted secrets](/actions/security-guides/encrypted-secrets)."

![Screenshot of a list of secrets](/assets/images/help/settings/actions-org-secrets-list.png)
You should consider adding manual approval protection for sensitive environments, so that workflows must be approved before getting access to the environments' secrets. For more information, see "[Using environments for deployments](/actions/deployment/targeting-different-environments/using-environments-for-deployment)."

### Security considerations for third-party actions

There is significant risk in sourcing actions from third-party repositories on {% data variables.product.prodname_dotcom %}. If you do allow any third-party actions, you should create internal guidelines that encourage your team to follow best practices, such as pinning actions to the full commit SHA. For more information, see "[Using third-party actions](/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions)."

## Innersourcing

Think about how your enterprise can use features of {% data variables.product.prodname_actions %} to innersource automation. Innersourcing is a way to incorporate the benefits of open source methodologies into your internal software development cycle. For more information, see [An introduction to innersource](https://resources.github.com/whitepapers/introduction-to-innersource/) in {% data variables.product.company_short %} Resources.

{% data reusables.actions.internal-actions-summary %}

{% ifversion ghec or ghes > 3.3 or ghae > 3.3 %}
{% data reusables.actions.reusable-workflows-ghes-beta %}
With reusable workflows, your team can call one workflow from another workflow, avoiding exact duplication. Reusable workflows promote best practice by helping your team use workflows that are well designed and have already been tested. For more information, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)."
{% endif %}

To provide a starting place for developers building new workflows, you can use starter workflows. This not only saves time for your developers, but promotes consistency and best practice across your enterprise. For more information, see "[Creating starter workflows for your organization](/actions/learn-github-actions/creating-starter-workflows-for-your-organization)."

{% ifversion not internal-actions %}
Whenever your workflow developers want to use an action that's stored in a private repository, they must configure the workflow to clone the repository first. To reduce the number of repositories that must be cloned, consider grouping commonly used actions in a single repository. For more information, see "[About custom actions](/actions/creating-actions/about-custom-actions#choosing-a-location-for-your-action)."
{% endif %}

## Managing resources

You should plan for how you'll manage the resources required to use {% data variables.product.prodname_actions %}.

{% ifversion ghes %}
### Hardware requirements

You may need to upgrade the CPU and memory resources for {% data variables.location.product_location %} to handle the load from {% data variables.product.prodname_actions %} without causing performance loss. For more information, see "[Getting started with {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-requirements)."
{% endif %}

### Runners

{% data variables.product.prodname_actions %} workflows require runners.{% ifversion ghec %} You can choose to use {% data variables.product.prodname_dotcom %}-hosted runners or self-hosted runners. {% data variables.product.prodname_dotcom %}-hosted runners are convenient because they are managed by {% data variables.product.company_short %}, who handles maintenance and upgrades for you. However, you may want to consider self-hosted runners if you need to run a workflow that will access resources behind your firewall or you want more control over the resources, configuration, or geographic location of your runner machines. For more information, see "[About {% data variables.product.prodname_dotcom %}-hosted runners](/actions/using-github-hosted-runners/about-github-hosted-runners)" and "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners)."{% else %} You will need to host your own runners by installing the {% data variables.product.prodname_actions %} self-hosted runner application on your own machines. For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners)."{% endif %}

{% ifversion ghec %}If you are using self-hosted runners, you have to decide whether you want to use physical machines, virtual machines, or containers.{% else %}Decide whether you want to use physical machines, virtual machines, or containers for your self-hosted runners.{% endif %} Physical machines will retain remnants of previous jobs, and so will virtual machines unless you use a fresh image for each job or clean up the machines after each job run. If you choose containers, you should be aware that the runner auto-updating will shut down the container, which can cause workflows to fail. You should come up with a solution for this by preventing auto-updates or skipping the command to kill the container.

You also have to decide where to add each runner. You can add a self-hosted runner to an individual repository, or you can make the runner available to an entire organization or your entire enterprise. Adding runners at the organization or enterprise levels allows sharing of runners, which might reduce the size of your runner infrastructure. You can use policies to limit access to self-hosted runners at the organization and enterprise levels by assigning groups of runners to specific repositories or organizations. For more information, see "[Adding self-hosted runners](/actions/hosting-your-own-runners/adding-self-hosted-runners)" and "[Managing access to self-hosted runners using groups](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)."

{% ifversion ghec or ghes %}
You should consider using autoscaling to automatically increase or decrease the number of available self-hosted runners. For more information, see "[Autoscaling with self-hosted runners](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)."
{% endif %}

Finally, you should consider security hardening for self-hosted runners. For more information, see "[Security hardening for {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)."

### Storage

{% data reusables.actions.about-artifacts %} For more information, see "[Storing workflow data as artifacts](/actions/advanced-guides/storing-workflow-data-as-artifacts)." 

{% ifversion actions-caching %}{% data variables.product.prodname_actions %} also has a caching system that you can use to cache dependencies to speed up workflow runs. For more information, see "[Caching dependencies to speed up workflows](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)."{% endif %}

{% ifversion ghes %}
You must configure external blob storage for workflow artifacts{% ifversion actions-caching %}, caches,{% endif %} and other workflow logs. Decide which supported storage provider your enterprise will use. For more information, see "[Getting started with {% data variables.product.prodname_actions %} for {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#external-storage-requirements)."
{% endif %}

{% ifversion ghec or ghes %}

You can use policy settings for {% data variables.product.prodname_actions %} to customize the storage of workflow artifacts{% ifversion actions-caching %}, caches,{% endif %} and log retention. For more information, see "[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)."

{% endif %}

{% ifversion ghec %}
Some storage is included in your subscription, but additional storage will affect your bill. You should plan for this cost. For more information, see "[About billing for {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)."
{% endif %}

## Tracking usage

You should consider making a plan to track your enterprise's usage of {% data variables.product.prodname_actions %}, such as how often workflows are running, how many of those runs are passing and failing, and which repositories are using which workflows.

{% ifversion ghec %}
You can see basic details of storage and data transfer usage of {% data variables.product.prodname_actions %} for each organization in your enterprise via your billing settings. For more information, see "[Viewing your {% data variables.product.prodname_actions %} usage](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage#viewing-github-actions-usage-for-your-enterprise-account)."

For more detailed usage data, you{% else %}You{% endif %} can use webhooks to subscribe to information about workflow jobs and workflow runs. For more information, see "[About webhooks](/developers/webhooks-and-events/webhooks/about-webhooks)."

Make a plan for how your enterprise can pass the information from these webhooks into a data archiving system. You can consider using "CEDAR.GitHub.Collector", an open source tool that collects and processes webhook data from {% data variables.product.prodname_dotcom %}. For more information, see the [`Microsoft/CEDAR.GitHub.Collector` repository](https://github.com/microsoft/CEDAR.GitHub.Collector/).

You should also plan how you'll enable your teams to get the data they need from your archiving system.

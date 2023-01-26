---
title: Controlling access to larger runners
shortTitle: 'Control access to {% data variables.actions.hosted_runner %}s'
intro: 'You can use policies to limit access to {% data variables.actions.hosted_runner %}s that have been added to an organization or enterprise.'
product: '{% data reusables.gated-features.hosted-runners %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: actions-hosted-runners
type: tutorial
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About runner groups

{% data reusables.actions.about-runner-groups %} {% ifversion fpt %}For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/actions/using-github-hosted-runners/controlling-access-to-larger-runners).{% endif %}

### Default group for {% data variables.actions.hosted_runner %}s

Organizations and enterprises with access to {% data variables.actions.hosted_runner %}s will automatically receive a default runner group called "Default Larger Runners" that includes 4 runners of varying sizes. The runners in this group are pre-configured and ready for immediate use. In order to use the runners in this group, you will need to add the label corresponding to the runner of your choice to your workflow file. See the table below for labels. For more information on how to use labels, see "[Running jobs on your runner](/actions/using-github-hosted-runners/using-larger-runners#running-jobs-on-your-runner)."


#### Default Runners

|Description | Label | Image |
| ------- | ------- | ------ |
| 4-cores Ubuntu Runner | `ubuntu-latest-4-cores` | Ubuntu - Latest |
| 8-cores Ubuntu Runner | `ubuntu-latest-8-cores` | Ubuntu - Latest |
| 16-cores Ubuntu Runner | `ubuntu-latest-16-cores` | Ubuntu - Latest |
| 8-cores Windows Runner | `windows-latest-8-cores` | Windows Server - Latest |

The default {% data variables.actions.hosted_runner %} group is created at the billing entity level. If your organization is part of an enterprise account, the group will be managed on the enterprise level. If your organization does not fall under an enterprise, the group is managed on the organization level. 

You will not be billed for these runners until you use them in your workflows. Once these runners are used, billing works as it normally does. For more information on billing, see "[Using {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/using-larger-runners#understanding-billing)."

The default access for a {% data variables.actions.hosted_runner %} group at the enterprise level is set to automatically share with all organizations in the enterprise, but not all repositories. Organization admins will need to share the default {% data variables.actions.hosted_runner %} group with each repository separately. For {% data variables.actions.hosted_runner %} groups at the organization level, the default access is set to automatically share the group with all repositories. For more information on how to change access policies, and where to view the default {% data variables.actions.hosted_runner %} group, see "[Changing the access policy of a runner group](#changing-the-access-policy-of-a-runner-group)."

{% ifversion ghec or ghes or ghae %}

## Creating a runner group for an organization

{% data reusables.actions.hosted-runner-security-admonition %}
{% data reusables.actions.creating-a-runner-group-for-an-organization %}

## Creating a runner group for an enterprise

{% data reusables.actions.hosted-runner-security-admonition %}
{% data reusables.actions.creating-a-runner-group-for-an-enterprise %}

{% endif %}

{% data reusables.actions.section-using-unique-names-for-runner-groups %}

## Changing the access policy of a runner group

{% data reusables.actions.hosted-runner-security-admonition %}
{% data reusables.actions.changing-the-access-policy-of-a-runner-group %}

## Changing the name of a runner group

{% data reusables.actions.changing-the-name-of-a-runner-group %}

{% ifversion ghec or ghes or ghae %}
## Moving a runner to a group

{% data reusables.actions.moving-a-runner-to-a-group %}

## Removing a runner group

{% data reusables.actions.removing-a-runner-group %}

{% endif %}

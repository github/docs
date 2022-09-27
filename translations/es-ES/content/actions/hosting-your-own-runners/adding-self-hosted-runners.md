---
title: Adding self-hosted runners
intro: 'You can add a self-hosted runner to a repository, an organization, or an enterprise.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/adding-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Add self-hosted runners
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

You can add a self-hosted runner to a repository, an organization, or an enterprise.

If you are an organization or enterprise administrator, you might want to add your self-hosted runners at the organization or enterprise level. This approach makes the runner available to multiple repositories in your organization or enterprise, and also lets you to manage your runners in one place.

For information on supported operating systems for self-hosted runners, or using self-hosted runners with a proxy server, see "[About self-hosted runners](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)."

{% ifversion not ghae %}
{% warning %}

**Warning:** {% data reusables.actions.self-hosted-runner-security %}

For more information, see "[About self-hosted runners](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

{% endwarning %}
{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 %}

You can set up automation to scale the number of self-hosted runners. For more information, see "[Autoscaling with self-hosted runners](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)."

{% endif %}

## Prerequisites

{% data reusables.actions.self-hosted-runners-prerequisites %}

## Adding a self-hosted runner to a repository

You can add self-hosted runners to a single repository. To add a self-hosted runner to a user repository, you must be the repository owner. For an organization repository, you must be an organization owner or have admin access to the repository. For information about how to add a self-hosted runner with the REST API, see "[Self-hosted runners](/rest/reference/actions#self-hosted-runners)."

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions-runners %}
1. Click **New self-hosted runner**.
{% data reusables.actions.self-hosted-runner-configure %}
{% elsif ghae or ghes < 3.4 %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions-runners %}
1. Under {% ifversion ghes or ghae or ghec %}"Runners"{% else %}"Self-hosted runners"{% endif %}, click **Add runner**.
{% data reusables.actions.self-hosted-runner-configure %}
{% endif %}
{% data reusables.actions.self-hosted-runner-check-installation-success %}

For more information, see "[Monitoring and troubleshooting self-hosted runners](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)."

## Adding a self-hosted runner to an organization

You can add self-hosted runners at the organization level, where they can be used to process jobs for multiple repositories in an organization. To add a self-hosted runner to an organization, you must be an organization owner. For information about how to add a self-hosted runner with the REST API, see "[Self-hosted runners](/rest/reference/actions#self-hosted-runners)."

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runners %}
{% ifversion actions-hosted-runners %}1. Click **New runner**, then click **New self-hosted runner**.{% else %}1. Click **New runner**.{% endif %}
{% data reusables.actions.self-hosted-runner-configure %}
{% elsif ghae or ghes < 3.4 %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runners %}
1. Under {% ifversion ghes or ghae %}"Runners", click **Add new**, then click **New runner**.{% endif %}
{% data reusables.actions.self-hosted-runner-configure %}
{% endif %}
{% data reusables.actions.self-hosted-runner-check-installation-success %}

For more information, see "[Monitoring and troubleshooting self-hosted runners](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)."

{% data reusables.actions.self-hosted-runner-public-repo-access %}

## Adding a self-hosted runner to an enterprise

{% ifversion fpt %}If you use {% data variables.product.prodname_ghe_cloud %}, you{% elsif ghec or ghes or ghae %}You{% endif %} can add self-hosted runners to an enterprise, where they can be assigned to multiple organizations. The organization admins are then able to control which repositories can use it. {% ifversion fpt %}For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-enterprise).{% endif %}

{% ifversion ghec or ghes or ghae %}
New runners are assigned to the default group. You can modify the runner's group after you've registered the runner. For more information, see "[Managing access to self-hosted runners](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)."

{% ifversion ghec or ghes > 3.3 or ghae > 3.3 %}

To add a self-hosted runner to an enterprise, you must be an enterprise owner. For information about how to add a self-hosted runner with the REST API,  see the enterprise endpoints in the [{% data variables.product.prodname_actions %} REST API](/rest/reference/actions#self-hosted-runners).

{% endif %}

{% data reusables.actions.self-hosted-runner-add-to-enterprise %}

{% data reusables.actions.self-hosted-runner-check-installation-success %}

For more information, see "[Monitoring and troubleshooting self-hosted runners](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)."

{% data reusables.actions.self-hosted-runner-public-repo-access %}

### Making enterprise runners available to repositories

By default, runners in an enterprise's "Default" self-hosted runner group are available to all organizations in the enterprise, but are not available to all repositories in each organization.

To make an enterprise-level self-hosted runner group available to an organization repository, you might need to change the organization's inherited settings for the runner group to make the runner available to repositories in the organization.

For more information on changing runner group access settings, see "[Managing access to self-hosted runners using groups](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)."
{% endif %}

{% ifversion ghec or ghes or ghae %}

## Further reading

- "[Getting started with self-hosted runners for your enterprise](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise)"

{% endif %}

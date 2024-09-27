---
title: Getting started with self-hosted runners for your enterprise
shortTitle: Self-hosted runners
intro: 'You can configure a runner machine for your enterprise so your developers can start automating workflows with {% data variables.product.prodname_actions %}.'
versions:
  ghec: '*'
  ghes: '*'
permissions: 'Enterprise owners{% ifversion custom-org-roles %} and users with permissions{% endif %} can configure policies for {% data variables.product.prodname_actions %} and add self-hosted runners to the enterprise.'
type: quick_start
topics:
  - Actions
  - Enterprise
  - Fundamentals
redirect_from:
  - /admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise
---

## About self-hosted runners for {% data variables.product.prodname_actions %}

{% data reusables.actions.about-actions-for-enterprises %} For more information, see "[AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)."

With {% data variables.product.prodname_actions %}, developers can write and combine individual tasks called actions to create custom workflows. {% ifversion ghes %}To enable {% data variables.product.prodname_actions %} for {% ifversion ghes %} {% data variables.location.product_location %}{% endif %}, you must host at least one machine to execute jobs.{% endif %} {% ifversion ghec %}You can host your own runner machine to execute jobs, and this{% elsif ghes %}This{% endif %} machine is called a self-hosted runner. {% data reusables.actions.self-hosted-runner-locations %} {% data reusables.actions.self-hosted-runner-architecture %} {% ifversion ghec %}All{% elsif ghes %}Self-hosted{% endif %} runners can run Linux, Windows, or macOS. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)."

{% ifversion ghec %}

Alternatively, you can use runner machines that {% data variables.product.company_short %} hosts. {% data variables.product.company_short %}-hosted runners are outside the scope of this guide. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners)."

{% endif %}

This guide shows you how to apply a centralized management approach to self-hosted runners for {% data variables.product.prodname_actions %} in your enterprise. In the guide, you'll complete the following tasks.

1. Configure a limited policy to restrict the actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %} that can run within your enterprise
1. Deploy a self-hosted runner for your enterprise
1. Create a group to manage access to the runners available to your enterprise
1. Optionally, further restrict the repositories that can use the runner
1. Optionally, {% ifversion actions-runner-controller %}to build and scale self-hosted runners automatically, use {% data variables.product.prodname_actions_runner_controller %} (ARC). For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/about-actions-runner-controller)."{% else %}build custom tooling to automatically scale your self-hosted runners{% endif %}

You'll also find additional information about how to monitor and secure your self-hosted runners,{% ifversion ghes %} how to access actions from {% data variables.product.prodname_dotcom_the_website %},{% endif %} and how to customize the software on your runner machines.

After you finish the guide, {% ifversion ghec %}members of your enterprise{% elsif ghes %}users of {% data variables.location.product_location %}{% endif %} will be able to run workflow jobs from {% data variables.product.prodname_actions %} on a self-hosted runner machine.

## Prerequisites

{% data reusables.actions.self-hosted-runners-prerequisites %}

* Your enterprise must own at least one organization. For more information, see "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/about-organizations)" and "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)."

## 1. Configure policies for {% data variables.product.prodname_actions %}

First, enable {% data variables.product.prodname_actions %} for all organizations, and configure a policy to restrict the actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %} that can run {% ifversion ghec %}within your enterprise on {% data variables.product.product_name %}{% elsif ghes %}on {% data variables.location.product_location %}{% endif %}. Optionally, organization owners can further restrict these policies for each organization.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Under "Policies", select **Enable for all organizations**.
1. To enable local actions{% ifversion actions-workflow-policy %} and reusable workflows, {% endif %} and actions created by {% data variables.product.company_short %}, select {% data reusables.actions.policy-label-for-select-actions-workflows %}, then select **Allow actions created by {% data variables.product.company_short %}**.
1. Click **Save**.

You can configure additional policies to restrict the actions available to {% ifversion ghec %}enterprise members{% elsif ghes %}users of {% data variables.location.product_location %}{% endif %}. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#allowing-select-actions-to-run)."

## 2. Deploy the self-hosted runner for your enterprise

Next, add a self-hosted runner to your enterprise. {% data variables.product.product_name %} will guide you through installation of the necessary software on the runner machine. After you deploy the runner, you can verify connectivity between the runner machine and {%ifversion ghec %}your enterprise{% elsif ghes %}{% data variables.location.product_location %}{% endif %}.

### Adding the self-hosted runner

{% data reusables.actions.self-hosted-runner-add-to-enterprise %}

{% data reusables.actions.self-hosted-runner-check-installation-success %}

## 3. Manage access to the self-hosted runner using a group

You can create a runner group to manage access to the runner that you added to your enterprise. You'll use the group to choose which organizations can execute jobs from {% data variables.product.prodname_actions %} on the runner.

{% data variables.product.product_name %} adds all new runners to a group. Runners can be in one group at a time. By default, {% data variables.product.product_name %} adds new runners to the "Default" group.

{% data reusables.actions.runner-groups-add-to-enterprise-first-steps %}
1. To choose a policy for organization access, under "Organization access", select the **Organization access** drop-down, and click **Selected organizations**.
1. To the right of the drop-down with the organization access policy, click {% octicon "gear" aria-label="Configure organizations" %}.
1. Select the organizations you'd like to grant access to the runner group.
{%- ifversion ghec or ghes %}
1. Optionally, to allow public repositories in the selected organizations to use runners in the group, select **Allow public repositories**.

   {% warning %}

   **Warning**:

   {% data reusables.actions.self-hosted-runner-security %}

   For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
{%- endif %}
{% data reusables.actions.create-runner-group %}
1. Click the "Runners" tab.
1. In the list of runners, click the runner that you deployed in the previous section.
1. Click **Edit**.
1. Click **Runner groups {% octicon "gear" aria-hidden="true" %}**.
1. In the list of runner groups, click the name of the group that you previously created.
1. Click **Save** to move the runner to the group.

You've now deployed a self-hosted runner that can run jobs from {% data variables.product.prodname_actions %} within the organizations that you specified.

## 4. Further restrict access to the self-hosted runner

Optionally, organization owners{% ifversion custom-org-roles %} and users with the "Manage organization runners and runner groups" permission{% endif %} can further restrict the access policy of the runner group that you created. For example, an organization owner could allow only certain repositories in the organization to use the runner group.

For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)."

{% ifversion custom-org-roles %}For more information about custom organization roles, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."{% endif %}

## 5. Automatically scale your self-hosted runners

{% ifversion actions-runner-controller %}Optionally, you can use {% data variables.product.prodname_actions_runner_controller %} (ARC) to automatically scale self-hosted runners. {% data reusables.actions.actions-runner-controller-about-arc %}

{% else %}Optionally, you can build custom tooling to automatically scale the self-hosted runners for {% ifversion ghec %}your enterprise{% elsif ghes %}{% data variables.location.product_location %}{% endif %}. For example, your tooling can respond to webhook events from {% data variables.location.product_location %} to automatically scale a cluster of runner machines. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/autoscaling-with-self-hosted-runners)."
{% endif %}

## Next steps

* You can monitor self-hosted runners and troubleshoot common issues. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/monitoring-and-troubleshooting-self-hosted-runners)."

* {% data variables.product.company_short %} recommends that you review security considerations for self-hosted runner machines. For more information, see "[AUTOTITLE](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)."

* {% ifversion ghec %}If you use {% data variables.product.prodname_ghe_server %}, you{% elsif ghes %}You{% endif %} can manually sync repositories on {% data variables.product.prodname_dotcom_the_website %} containing actions to your enterprise on {% ifversion ghes %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_ghe_server %}{% endif %}. Alternatively, you can allow members of your enterprise to automatically access actions from {% data variables.product.prodname_dotcom_the_website %} by using {% data variables.product.prodname_github_connect %}. For more information, see the following.

  * "[AUTOTITLE]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)"{% ifversion ghec %} in the {% data variables.product.prodname_ghe_server %} documentation{% endif %}
  * "[AUTOTITLE]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)"{% ifversion ghec %} in the {% data variables.product.prodname_ghe_server %} documentation{% endif %}

* You can customize the software available on your self-hosted runner machines, or configure your runners to run software similar to {% data variables.product.company_short %}-hosted runners{% ifversion ghes %} available for customers using {% data variables.product.prodname_dotcom_the_website %}{% endif %}. The software that powers runner machines for {% data variables.product.prodname_actions %} is open source. For more information, see the [`actions/runner`](https://github.com/actions/runner) and [`actions/runner-images`](https://github.com/actions/runner-images) repositories.

## Further reading

* "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/configuring-the-self-hosted-runner-application-as-a-service)"
* "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/using-self-hosted-runners-in-a-workflow)"

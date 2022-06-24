---
title: Getting started with self-hosted runners for your enterprise
shortTitle: セルフホストランナー
intro: 'You can configure a runner machine for your enterprise so your developers can start automating workflows with {% data variables.product.prodname_actions %}.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
permissions: 'Enterprise owners can configure policies for {% data variables.product.prodname_actions %} and add self-hosted runners to the enterprise.'
type: quick_start
topics:
  - Actions
  - Enterprise
  - Fundamentals
---

## About self-hosted runners for {% data variables.product.prodname_actions %}

{% data reusables.actions.about-actions-for-enterprises %} For more information, see "[About {% data variables.product.prodname_actions %} for enterprises](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)."

With {% data variables.product.prodname_actions %}, developers can write and combine individual tasks called actions to create custom workflows. {% ifversion ghes or ghae %}To enable {% data variables.product.prodname_actions %} for {% ifversion ghae %}your enterprise{% elsif ghes %} {% data variables.product.product_location %}{% endif %}, you must host at least one machine to execute jobs.{% endif %} {% ifversion ghec %}You can host your own runner machine to execute jobs, and this{% elsif ghes or ghae %}This{% endif %} machine is called a self-hosted runner. {% data reusables.actions.self-hosted-runner-locations %} {% data reusables.actions.self-hosted-runner-architecture %} {% ifversion ghec %}All{% elsif ghes or ghae %}Self-hosted{% endif %} runners can run Linux, Windows, or macOS. 詳しい情報については「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners)」を参照してください。

{% ifversion ghec %}

Alternatively, you can use runner machines that {% data variables.product.company_short %} hosts. {% data variables.product.company_short %}-hosted runners are outside the scope of this guide. 詳しい情報については「[{% data variables.product.company_short %}ホストランナーについて](/actions/using-github-hosted-runners/about-github-hosted-runners)」を参照してください。

{% endif %}

This guide shows you how to apply a centralized management approach to self-hosted runners for {% data variables.product.prodname_actions %} in your enterprise. In the guide, you'll complete the following tasks.

1. Configure a limited policy to restrict the actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %} that can run within your enterprise
1. Deploy a self-hosted runner for your enterprise
1. Create a group to manage access to the runners available to your enterprise
1. Optionally, further restrict the repositories that can use the runner
{%- ifversion ghec or ghae or ghes > 3.2 %}
1. Optionally, build custom tooling to automatically scale your self-hosted runners
{% endif %}

You'll also find additional information about how to monitor and secure your self-hosted runners,{% ifversion ghes or ghae %} how to access actions from {% data variables.product.prodname_dotcom_the_website %},{% endif %} and how to customize the software on your runner machines.

After you finish the guide, {% ifversion ghec or ghae %}members of your enterprise{% elsif ghes %}users of {% data variables.product.product_location %}{% endif %} will be able to run workflow jobs from {% data variables.product.prodname_actions %} on a self-hosted runner machine.

## 必要な環境

{% data reusables.actions.self-hosted-runners-prerequisites %}

- Your enterprise must own at least one organization. For more information, see "[About organizations](/organizations/collaborating-with-groups-in-organizations/about-organizations)" and "[Creating a new organization from scratch](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)."

## 1. Configure policies for {% data variables.product.prodname_actions %}

First, enable {% data variables.product.prodname_actions %} for all organizations, and configure a policy to restrict the actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %} that can run {% ifversion ghec or ghae%}within your enterprise on {% data variables.product.product_name %}{% elsif ghes %}on {% data variables.product.product_location %}{% endif %}. Optionally, organization owners can further restrict these policies for each organization.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Under "Policies", select **Enable for all organizations**.

   ![Screenshot of "Enable for all organizations" policy for {% data variables.product.prodname_actions %}](/assets/images/help/settings/actions-policy-enable-for-all-organizations.png)
1. Select {% data reusables.actions.policy-label-for-select-actions-workflows %} and **Allow actions created by GitHub** to allow local actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %}, and actions created by {% data variables.product.company_short %}.

   {% ifversion actions-workflow-policy %}
   ![Screenshot of "Allow select actions" and "Allow actions created by {% data variables.product.company_short %}" for {% data variables.product.prodname_actions %}](/assets/images/help/settings/actions-policy-allow-select-actions-and-actions-from-github-with-workflows.png)
   {%- else %}
   ![Screenshot of "Allow select actions" and "Allow actions created by {% data variables.product.company_short %}" for {% data variables.product.prodname_actions %}](/assets/images/help/settings/actions-policy-allow-select-actions-and-actions-from-github.png)
   {%- endif %}
1. [**Save**] をクリックします。

You can configure additional policies to restrict the actions available to {% ifversion ghec or ghae %}enterprise members{% elsif ghes %}users of {% data variables.product.product_location %}{% endif %}. 詳しい情報については「[Enterpriseでの{% data variables.product.prodname_actions %}のポリシーの施行](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#allowing-select-actions-to-run)」を参照してください。

## 2. Deploy the self-hosted runner for your enterprise

Next, add a self-hosted runner to your enterprise. {% data variables.product.product_name %} will guide you through installation of the necessary software on the runner machine. After you deploy the runner, you can verify connectivity between the runner machine and {%ifversion ghec or ghae %}your enterprise{% elsif ghes %}{% data variables.product.product_location %}{% endif %}.

### Adding the self-hosted runner

{% data reusables.actions.self-hosted-runner-add-to-enterprise %}

{% data reusables.actions.self-hosted-runner-check-installation-success %}

## 3. Manage access to the self-hosted runner using a group

You can create a runner group to manage access to the runner that you added to your enterprise. You'll use the group to choose which organizations can execute jobs from {% data variables.product.prodname_actions %} on the runner.

{% data variables.product.product_name %} adds all new runners to a group. Runners can be in one group at a time. By default, {% data variables.product.product_name %} adds new runners to the "Default" group.

{% data reusables.actions.self-hosted-runner-groups-add-to-enterprise-first-steps %}
1. To choose a policy for organization access, under "Organization access", select the **Organization access** drop-down, and click **Selected organizations**.
1. To the right of the drop-down with the organization access policy, click {% octicon "gear" aria-label="The Gear icon" %}.
1. Select the organizations you'd like to grant access to the runner group.
{%- ifversion ghec or ghes %}
1. Optionally, to allow public repositories in the selected organizations to use runners in the group, select **Allow public repositories**.

   {% warning %}

   **Warning**:

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   詳しい情報については「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)」を参照してください。

   {% endwarning %}
{%- endif %}
{% data reusables.actions.self-hosted-runner-create-group %}
{%- ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
1. Click the "Runners" tab.
1. In the list of runners, click the runner that you deployed in the previous section.
1. [**Edit**] をクリックします。
1. Click **Runner groups {% octicon "gear" aria-label="The Gear icon" %}**.
1. In the list of runner groups, click the name of the group that you previously created.
1. Click **Save** to move the runner to the group.
{%- elsif ghes < 3.4 or ghae %}
1. To the right of "Default", click the number of runners in the group to show the runners.
1. Select the runner that you deployed.
1. To the right of "Runner groups", select the **Move to group** dropdown, and click the group that you previously created.
{%- endif %}

You've now deployed a self-hosted runner that can run jobs from {% data variables.product.prodname_actions %} within the organizations that you specified.

## 4. Further restrict access to the self-hosted runner

Optionally, organization owners can further restrict the access policy of the runner group that you created. For example, an organization owner could allow only certain repositories in the organization to use the runner group.

詳しい情報については、「[グループを使用したセルフホストランナーへのアクセスの管理](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)」を参照してください。

{% ifversion ghec or ghae or ghes > 3.2 %}

## 5. Automatically scale your self-hosted runners

Optionally, you can build custom tooling to automatically scale the self-hosted runners for {% ifversion ghec or ghae %}your enterprise{% elsif ghes %}{% data variables.product.product_location %}{% endif %}. For example, your tooling can respond to webhook events from {% data variables.product.product_location %} to automatically scale a cluster of runner machines. For more information, see "[Autoscaling with self-hosted runners](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)."

{% endif %}

## 次のステップ

- You can monitor self-hosted runners and troubleshoot common issues. 詳しい情報については「[セルフホストランナーのモニタリングとトラブルシューティング](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)」を参照してください。

- {% data variables.product.company_short %} recommends that you review security considerations for self-hosted runner machines. For more information, see "[Security hardening for {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)."

- {% ifversion ghec %}If you use {% data variables.product.prodname_ghe_server %} or {% data variables.product.prodname_ghe_managed %}, you{% elsif ghes or ghae %}You{% endif %} can manually sync repositories on {% data variables.product.prodname_dotcom_the_website %} containing actions to your enterprise on {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_ghe_server %} or {% data variables.product.prodname_ghe_managed %}{% endif %}. Alternatively, you can allow members of your enterprise to automatically access actions from {% data variables.product.prodname_dotcom_the_website %} by using {% data variables.product.prodname_github_connect %}. 詳しい情報については、以下を参照してください。

   {%- ifversion ghes or ghae %}
   - "[Manually syncing actions from {% data variables.product.prodname_dotcom_the_website %}](/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)"
   - "[Enabling automatic access to {% data variables.product.prodname_dotcom_the_website %} actions using {% data variables.product.prodname_github_connect %}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)"
   {%- elsif ghec %}
   - "Manually syncing actions from {% data variables.product.prodname_dotcom_the_website %}" in the [{% data variables.product.prodname_ghe_server %}](/enterprise-server@latest//admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom) or [{% data variables.product.prodname_ghe_managed %}](/github-ae@latest//admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom) documentation
   - "Enabling automatic access to {% data variables.product.prodname_dotcom_the_website %} actions using {% data variables.product.prodname_github_connect %}" in the [{% data variables.product.prodname_ghe_server %}](/enterprise-server@latest/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) or [{% data variables.product.prodname_ghe_managed %}](/github-ae@latest//admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) documentation
   {%- endif %}

- You can customize the software available on your self-hosted runner machines, or configure your runners to run software similar to {% data variables.product.company_short %}-hosted runners{% ifversion ghes or ghae %} available for customers using {% data variables.product.prodname_dotcom_the_website %}{% endif %}. The software that powers runner machines for {% data variables.product.prodname_actions %} is open source. For more information, see the [`actions/runner`](https://github.com/actions/runner) and [`actions/virtual-environments`](https://github.com/actions/virtual-environments) repositories.

## 参考リンク

- "[Configuring the self-hosted runner application as a service](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service)"
- "[Using self-hosted runners in a workflow](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow)"

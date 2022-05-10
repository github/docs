---
title: Getting started with self-hosted runners for your enterprise
shortTitle: Ejecutores autoalojados
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

With {% data variables.product.prodname_actions %}, developers can write and combine individual tasks called actions to create custom workflows. {% ifversion ghes or ghae %}Para habilitar las {% data variables.product.prodname_actions %} para {% ifversion ghae %}tu empresa{% elsif ghes %} {% data variables.product.product_location %}{% endif %}, debes hspedar por lo menos una máquina para ejecutar jobs.{% endif %} {% ifversion ghec %}Puedes hospedar tu propia máquina ejecutora para ejecutar jobs y esta{% elsif ghes or ghae %}Esta{% endif %} máquina se denomina como un ejecutor auto-hospedado. {% data reusables.actions.self-hosted-runner-locations %} {% data reusables.actions.self-hosted-runner-architecture %} {% ifversion ghec %}All{% elsif ghes or ghae %}Self-hosted{% endif %} runners can run Linux, Windows, or macOS. Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners)."

{% ifversion ghec %}

Alternatively, you can use runner machines that {% data variables.product.company_short %} hosts. {% data variables.product.company_short %}-hosted runners are outside the scope of this guide. Para obtener más información, consulta la sección "[Acerca de los ejecutores hospedados en {% data variables.product.company_short %}](/actions/using-github-hosted-runners/about-github-hosted-runners)".

{% endif %}

This guide shows you how to apply a centralized management approach to self-hosted runners for {% data variables.product.prodname_actions %} in your enterprise. In the guide, you'll complete the following tasks.

1. Configure a limited policy to restrict the actions{% if actions-workflow-policy %} and reusable workflows{% endif %} that can run within your enterprise
1. Deploy a self-hosted runner for your enterprise
1. Create a group to manage access to the runners available to your enterprise
1. Optionally, further restrict the repositories that can use the runner
{%- ifversion ghec or ghae-issue-4462 or ghes > 3.2 %}
1. Optionally, build custom tooling to automatically scale your self-hosted runners
{% endif %}

You'll also find additional information about how to monitor and secure your self-hosted runners,{% ifversion ghes or ghae %} how to access actions from {% data variables.product.prodname_dotcom_the_website %},{% endif %} and how to customize the software on your runner machines.

After you finish the guide, {% ifversion ghec or ghae %}members of your enterprise{% elsif ghes %}users of {% data variables.product.product_location %}{% endif %} will be able to run workflow jobs from {% data variables.product.prodname_actions %} on a self-hosted runner machine.

## Prerrequisitos

{% data reusables.actions.self-hosted-runners-prerequisites %}

- Your enterprise must own at least one organization. For more information, see "[About organizations](/organizations/collaborating-with-groups-in-organizations/about-organizations)" and "[Creating a new organization from scratch](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)."

## 1. Configure policies for {% data variables.product.prodname_actions %}

Primero, habilita las {% data variables.product.prodname_actions %} para todas las organizaciones y configura una política para restringir las acciones{% if actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %} que pueden ejecutarse {% ifversion ghec or ghae%}dentro de tu empresa en {% data variables.product.product_name %}{% elsif ghes %}en {% data variables.product.product_location %}{% endif %}. Optionally, organization owners can further restrict these policies for each organization.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Under "Policies", select **Enable for all organizations**.

   ![Screenshot of "Enable for all organizations" policy for {% data variables.product.prodname_actions %}](/assets/images/help/settings/actions-policy-enable-for-all-organizations.png)
1. Select {% data reusables.actions.policy-label-for-select-actions-workflows %} and **Allow actions created by GitHub** to allow local actions{% if actions-workflow-policy %} and reusable workflows{% endif %}, and actions created by {% data variables.product.company_short %}.

   {% if actions-workflow-policy %}
   ![Screenshot of "Allow select actions" and "Allow actions created by {% data variables.product.company_short %}" for {% data variables.product.prodname_actions %}](/assets/images/help/settings/actions-policy-allow-select-actions-and-actions-from-github-with-workflows.png)
   {%- else %}
   ![Captura de pantalla de "Permitir acciones seleccionadas" y "Permitir acciones creadas por {% data variables.product.company_short %}" para las {% data variables.product.prodname_actions %}](/assets/images/help/settings/actions-policy-allow-select-actions-and-actions-from-github.png)
   {%- endif %}
1. Haz clic en **Save ** (guardar).

You can configure additional policies to restrict the actions available to {% ifversion ghec or ghae %}enterprise members{% elsif ghes %}users of {% data variables.product.product_location %}{% endif %}. Para obtener más información, consulta la sección "[Requerir políticas para las {% data variables.product.prodname_actions %} en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#allowing-select-actions-to-run)".

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

   **Advertencia**:

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
{%- endif %}
{% data reusables.actions.self-hosted-runner-create-group %}
{%- ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
1. Click the "Runners" tab.
1. In the list of runners, click the runner that you deployed in the previous section.
1. Da clic en **Editar**.
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

Para obtener más información, consulta la sección "[Administrar el acceso a los ejecutores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".

{% ifversion ghec or ghae-issue-4462 or ghes > 3.2 %}

## 5. Automatically scale your self-hosted runners

Optionally, you can build custom tooling to automatically scale the self-hosted runners for {% ifversion ghec or ghae %}your enterprise{% elsif ghes %}{% data variables.product.product_location %}{% endif %}. For example, your tooling can respond to webhook events from {% data variables.product.product_location %} to automatically scale a cluster of runner machines. Para obtener más información, consulta la sección "[Autoescalar con ejecutores auto-hospedados](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)".

{% endif %}

## Pasos siguientes

- You can monitor self-hosted runners and troubleshoot common issues. Para obtener más información, consulta la sección "[Monitorear y solucionar problemas de los ejecutores auto-hospedados](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)".

- {% data variables.product.company_short %} recommends that you review security considerations for self-hosted runner machines. Para obtener más información, consulta la sección "[Fortalecimiento de seguridad para las {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)".

- {% ifversion ghec %}Si utilizas {% data variables.product.prodname_ghe_server %} o {% data variables.product.prodname_ghe_managed %}, puedes{% elsif ghes or ghae %}Puedes{% endif %} sincronizar manualmente los repositorios de {% data variables.product.prodname_dotcom_the_website %} que contengan acciones hacia tu empresa en {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_ghe_server %} o {% data variables.product.prodname_ghe_managed %}{% endif %}. Alternatively, you can allow members of your enterprise to automatically access actions from {% data variables.product.prodname_dotcom_the_website %} by using {% data variables.product.prodname_github_connect %}. Para obtener más información, consulta lo siguiente.

   {%- ifversion ghes or ghae %}
   - "[Manually syncing actions from {% data variables.product.prodname_dotcom_the_website %}](/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)"
   - "[Habilitar el acceso automático a las acciones de {% data variables.product.prodname_dotcom_the_website %} utilizando {% data variables.product.prodname_github_connect %}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)"
   {%- elsif ghec %}
   - "Sincronizar acciones manualmente desde {% data variables.product.prodname_dotcom_the_website %}" en la documentación de [{% data variables.product.prodname_ghe_server %}](/enterprise-server@latest//admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom) o de [{% data variables.product.prodname_ghe_managed %}](/github-ae@latest//admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)
   - "Habilitar el acceso automático a las acciones de {% data variables.product.prodname_dotcom_the_website %} utilizando {% data variables.product.prodname_github_connect %}" en la documentación de [{% data variables.product.prodname_ghe_server %}](/enterprise-server@latest//admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) o de [{% data variables.product.prodname_ghe_managed %}](/github-ae@latest//admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)
   {%- endif %}

- You can customize the software available on your self-hosted runner machines, or configure your runners to run software similar to {% data variables.product.company_short %}-hosted runners{% ifversion ghes or ghae %} available for customers using {% data variables.product.prodname_dotcom_the_website %}{% endif %}. The software that powers runner machines for {% data variables.product.prodname_actions %} is open source. For more information, see the [`actions/runner`](https://github.com/actions/runner) and [`actions/virtual-environments`](https://github.com/actions/virtual-environments) repositories.

## Leer más

- "[Configuring the self-hosted runner application as a service](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service)"
- "[Using self-hosted runners in a workflow](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow)"

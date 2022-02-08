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

{% data reusables.enterprise.upgrade-ghes-for-actions %}

Antes de que incluyas las {% data variables.product.prodname_actions %} en una empresa grande, primero necesitas planear tu adopción y tomar las decisiones de cómo tu empresa utilizará {% data variables.product.prodname_actions %} para apoyar de la mejor forma a tus necesidades únicas.

## Governance and compliance

You should create a plan to govern your enterprise's use of {% data variables.product.prodname_actions %} and meet your compliance obligations.

Determine which actions your developers will be allowed to use. {% ifversion ghes %}First, decide whether you'll enable access to actions from outside your instance. {% data reusables.actions.access-actions-on-dotcom %} Para obtener más información, consulta la sección "[Acerca de utilizar acciones en tu empresa](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise)".

Then,{% else %}First,{% endif %} decide whether you'll allow third-party actions that were not created by {% data variables.product.company_short %}. You can configure the actions that are allowed to run at the repository, organization, and enterprise levels and can choose to only allow actions that are created by {% data variables.product.company_short %}. If you do allow third-party actions, you can limit allowed actions to those created by verified creators or a list of specific actions. Para obtener más información, consulta las secciones "[Administrar los ajustes de las {% data variables.product.prodname_actions %} para un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#managing-github-actions-permissions-for-your-repository)", "[Inhabilitar o limitar las {% data variables.product.prodname_actions %} para tu organización](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization)" y "[Requerir políticas para las {% data variables.product.prodname_actions %} en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-to-restrict-the-use-of-actions-in-your-enterprise)".

![Screenshot of {% data variables.product.prodname_actions %} policies](/assets/images/help/organizations/enterprise-actions-policy.png)

{% ifversion ghec or ghae-issue-4757 %}
Consider combining OpenID Connect (OIDC) with reusable workflows to enforce consistent deployments across your repository, organization, or enterprise. Puedes hacerlo si defines las condiciones de confianza en los roles de la nube con base en los flujos reutilizables. For more information, see "[Using OpenID Connect with reusable workflows](/actions/deployment/security-hardening-your-deployments/using-openid-connect-with-reusable-workflows)."
{% endif %}

You can access information about activity related to {% data variables.product.prodname_actions %} in the audit logs for your enterprise. If your business needs require retaining audit logs for longer than six months, plan how you'll export and store this data outside of {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección {% ifversion ghec %}"[Transmitir las bitácoras de auditoría en tu empresa](/admin/user-management/managing-organizations-in-your-enterprise/streaming-the-audit-logs-for-organizations-in-your-enterprise-account)".{% else %}"[Transmitir la bitácora de auditoría](/admin/user-management/monitoring-activity-in-your-enterprise/searching-the-audit-log)".{% endif %}

![Entradas de la bitácora de auditoría](/assets/images/help/repository/audit-log-entries.png)

## Seguridad

You should plan your approach to security hardening for {% data variables.product.prodname_actions %}.

### Security hardening individual workflows and repositories

Make a plan to enforce good security practices for people using {% data variables.product.prodname_actions %} features within your enterprise. For more information about these practices, see "[Security hardening for {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions)."

You can also encourage reuse of workflows that have already been evaluated for security. Para obtener más información, consulta la sección de "[Innersourcing](#innersourcing)".

### Securing access to secrets and deployment resources

You should plan where you'll store your secrets. We recommend storing secrets in {% data variables.product.prodname_dotcom %}, but you might choose to store secrets in a cloud provider.

In {% data variables.product.prodname_dotcom %}, you can store secrets at the repository or organization level. Secrets at the repository level can be limited to workflows in certain environments, such as production or testing. Para obtener más información, consulta la sección "[Secretos cifrados](/actions/security-guides/encrypted-secrets)".

![Screenshot of a list of secrets](/assets/images/help/settings/actions-org-secrets-list.png)
{% ifversion fpt or ghes > 3.0 or ghec or ghae %}
You should consider adding manual approval protection for sensitive environments, so that workflows must be approved before getting access to the environments' secrets. For more information, see "[Using environments for deployments](/actions/deployment/targeting-different-environments/using-environments-for-deployment)."{% endif %}

### Security considerations for third-party actions

There is significant risk in sourcing actions from third-party repositories on {% data variables.product.prodname_dotcom %}. If you do allow any third-party actions, you should create internal guidelines that encourage your team to follow best practices, such as pinning actions to the full commit SHA. For more information, see "[Using third-party actions](/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions)."

## Innersourcing

Think about how your enterprise can use features of {% data variables.product.prodname_actions %} to innersource automation. Innersourcing is a way to incorporate the benefits of open source methodologies into your internal software development cycle. For more information, see [An introduction to innersource](https://resources.github.com/whitepapers/introduction-to-innersource/) in {% data variables.product.company_short %} Resources.

{% data reusables.actions.internal-actions-summary %}

{% ifversion ghec or ghes > 3.3 or ghae-issue-4757 %}
With reusable workflows, your team can call one workflow from another workflow, avoiding exact duplication. Reusable workflows promote best practice by helping your team use workflows that are well designed and have already been tested. Para obtener más información, consulta la sección "[Reutilizar flujos de trabajo](/actions/learn-github-actions/reusing-workflows)".
{% endif %}

To provide a starting place for developers building new workflows, you can use starter workflows. This not only saves time for your developers, but promotes consistency and best practice across your enterprise. Para obtener más información, consulta la sección "[Crear flujos de trabajo iniciales para tu organización](/actions/learn-github-actions/creating-starter-workflows-for-your-organization)".

{% if not internal-actions %}
Whenever your workflow developers want to use an action that's stored in a private repository, they must configure the workflow to clone the repository first. To reduce the number of repositories that must be cloned, consider grouping commonly used actions in a single repository. Para obtener más información, consulta la sección "[Acerca de las acciones personalizadas](/actions/creating-actions/about-custom-actions#choosing-a-location-for-your-action)".
{% endif %}

## Managing resources

You should plan for how you'll manage the resources required to use {% data variables.product.prodname_actions %}.

### Ejecutores

{% data variables.product.prodname_actions %} workflows require runners.{% ifversion ghec %} You can choose to use {% data variables.product.prodname_dotcom %}-hosted runners or self-hosted runners. {% data variables.product.prodname_dotcom %}-hosted runners are convenient because they are managed by {% data variables.product.company_short %}, who handles maintenance and upgrades for you. Sin embargo, podrías querer considerar los ejecutores auto-hospedados si necesitas ejecutar un flujo de trabajo que accederá a los recursos tras tu cortafuegos o si quieres tener más control sobre los recursos, configuración o ubicación geográfica de tus máquinas de ejecutores. Para obtener más información, consulta las secciones "[Acerca de los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners)" y "[Acerca de los ejecutores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)".{% else %} Necesitarás hospedar tus propios ejecutores instalando la aplicación de ejecutores auto-hospedados de {% data variables.product.prodname_actions %} en tus propias máquinas. Para obtener más información, consulta la sección "[Acerca de los ejecutores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)".{% endif %}

{% ifversion ghec %}Si estás utilizando ejecutores auto-hospedados, tienes que decidir si quieres utilizar máquinas físicas, virtuales o contenedores.{% else %}Decide si quieres utilizar máquinas físicas, virtuales o contenedores para tus ejecutores auto-hospedados.{% endif %} Las máquinas físicas conservarán los restos de los jobs anteriores, así como las máquinas virtuales, a menos de que utilices una imagen nueva para cada job o que limpies las máquinas después de cada ejecución de un job. If you choose containers, you should be aware that the runner auto-updating will shut down the container, which can cause workflows to fail. You should come up with a solution for this by preventing auto-updates or skipping the command to kill the container.

You also have to decide where to add each runner. You can add a self-hosted runner to an individual repository, or you can make the runner available to an entire organization or your entire enterprise. Adding runners at the organization or enterprise levels allows sharing of runners, which might reduce the size of your runner infrastructure. You can use policies to limit access to self-hosted runners at the organization and enterprise levels by assigning groups of runners to specific repositories or organizations. Para obtener más información, consulta las secciones "[Agregar ejecutores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)" y "[Administrar el acceso a los ejecutores auto-hospedados utilizando grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)".

{% ifversion ghec or ghes > 3.2 %}
You should consider using autoscaling to automatically increase or decrease the number of available self-hosted runners. Para obtener más información, consulta la sección "[Autoescalar con ejecutores auto-hospedados](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)".
{% endif %}

Finally, you should consider security hardening for self-hosted runners. For more information, see "[Security hardening for {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)."

### Almacenamiento

{% data reusables.actions.about-artifacts %} For more information, see "[Storing workflow data as artifacts](/actions/advanced-guides/storing-workflow-data-as-artifacts)."

![Screenshot of artifact](/assets/images/help/repository/passing-data-between-jobs-in-a-workflow-updated.png)

{% ifversion ghes %}
You must configure external blob storage for these artifacts. Decide which supported storage provider your enterprise will use. Para obtener más información, consulta la sección "[Iniciar con las {% data variables.product.prodname_actions %} para {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#external-storage-requirements)".
{% endif %}

{% ifversion ghec or ghes %}

{% data reusables.github-actions.artifact-log-retention-statement %}

{% endif %}

If you want to retain logs and artifacts longer than the upper limit you can configure in {% data variables.product.product_name %}, you'll have to plan how to export and store the data.

{% ifversion ghec %}
Some storage is included in your subscription, but additional storage will affect your bill. You should plan for this cost. Para obtener más información, consulta "[Acerca de la facturación para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)".
{% endif %}

## Tracking usage

Debes considerar hacer un plan para rastrear el uso que tu empresa tiene para las {% data variables.product.prodname_actions %}, tal como qué tan a menudo se ejecutan los flujos de trabajo, cuántas de estas ejecuciones están pasando y fallando y qué repositorios están utilizando cuáles flujos de trabajo.

{% ifversion ghec %}
You can see basic details of storage and data transfer usage of {% data variables.product.prodname_actions %} for each organization in your enterprise via your billing settings. Para obtener más información, consulta la sección "[Visualizar tu uso de {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage#viewing-github-actions-usage-for-your-enterprise-account)".

For more detailed usage data, you{% else %}You{% endif %} can use webhooks to subscribe to information about workflow jobs and workflow runs. For more information, see "[About webhooks](/developers/webhooks-and-events/webhooks/about-webhooks)."

Make a plan for how your enterprise can pass the information from these webhooks into a data archiving system. You can consider using "CEDAR.GitHub.Collector", an open source tool that collects and processes webhook data from {% data variables.product.prodname_dotcom %}. For more information, see the [`Microsoft/CEDAR.GitHub.Collector` repository](https://github.com/microsoft/CEDAR.GitHub.Collector/).

You should also plan how you'll enable your teams to get the data they need from your archiving system.

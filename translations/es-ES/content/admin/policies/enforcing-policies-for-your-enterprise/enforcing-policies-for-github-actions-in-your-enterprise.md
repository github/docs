---
title: Enforcing policies for GitHub Actions in your enterprise
intro: 'You can enforce policies for {% data variables.product.prodname_actions %} within your enterprise''s organizations, or allow policies to be set in each organization.'
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_actions %} in an enterprise.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Policies
shortTitle: GitHub Actions policies
---

{% data reusables.actions.enterprise-beta %}

## About policies for {% data variables.product.prodname_actions %} in your enterprise

{% data variables.product.prodname_actions %} helps members of your enterprise automate software development workflows on {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Entender las {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions)".

{% ifversion ghes %}If you enable {% data variables.product.prodname_actions %}, any{% else %}Any{% endif %} organization on {% data variables.product.product_location %} can use {% data variables.product.prodname_actions %}. You can enforce policies to control how members of your enterprise on {% data variables.product.product_name %} use {% data variables.product.prodname_actions %}. By default, organization owners can manage how members use {% data variables.product.prodname_actions %}. For more information, see "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)."

## Enforcing a policy to restrict the use of actions in your enterprise

Puedes elegir inhabilitar {% data variables.product.prodname_actions %} para todas las organizaciones en tu empresa, o puedes permitir solo organizaciones específicas. También puedes limitar el uso de acciones públicas para que las personas solo puedan utilizar las acciones locales que existen en tu empresa.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.enterprise-actions-permissions %}
1. Haz clic en **Save ** (guardar).

{% ifversion ghec or ghes or ghae %}

### Allowing select actions to run

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Debajo de **Políticas**, selecciona **Permitir las acciones seleccionadas** y agrega tus acciones requeridas a la lista.
   {%- ifversion ghes > 3.0 or ghae-issue-5094 %}
   ![Agregar acciones a la lista de permitidos](/assets/images/help/organizations/enterprise-actions-policy-allow-list.png)
   {%- elsif ghae %}
   ![Agregar acciones a la lista de permitidos](/assets/images/enterprise/github-ae/enterprise-actions-policy-allow-list.png)
   {%- endif %}
{% endif %}

{% ifversion ghec or ghes or ghae %}

## Enforcing a policy for artifact and log retention in your enterprise

{% data variables.product.prodname_actions %} can store artifact and log files. Para obtener más información, consulta la sección "[Descargar artefactos de los flujos de trabajo ](/actions/managing-workflow-runs/downloading-workflow-artifacts)".

{% data reusables.actions.about-artifact-log-retention %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.change-retention-period-for-artifacts-logs  %}

{% endif %}

## Enforcing a policy for fork pull requests in your enterprise

You can enforce policies to control how {% data variables.product.prodname_actions %} behaves for {% data variables.product.product_location %} when members of your enterprise{% ifversion ghec %} or outside collaborators{% endif %} run workflows from forks.

{% ifversion ghec %}

### Enforcing a policy for approval of pull requests from outside collaborators

{% data reusables.actions.workflow-run-approve-public-fork %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}

{% endif %}

{% ifversion ghec or ghes or ghae %}

### Enforcing a policy for fork pull requests in private repositories

{% data reusables.github-actions.private-repository-forks-overview %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.private-repository-forks-configure %}

{% endif %}

{% ifversion ghec or ghes > 3.1 or ghae %}

## Enforcing a policy for workflow permissions in your enterprise

{% data reusables.github-actions.workflow-permissions-intro %}

Puedes configurar los permisos predeterminados para del `GITHUB_TOKEN` en la configuración de tu empresa, organización o repositorio. Si eliges la opción restringida como lo predeterminado en la configuración de tu empresa, esto previene que puedas elegir más configuraciones permisivas en la configuración de tu organización o repositorio.

{% data reusables.github-actions.workflow-permissions-modifying %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Debajo de **Permisos del flujo de trabajo**, elige si quieres que el `GITHUB_TOKEN` tenga permisos de lectura y escritura para todos los alcances o solo acceso de lectura para el alcance `contents`. ![Configurar los permisos del GITHUB_TOKEN para esta empresa](/assets/images/help/settings/actions-workflow-permissions-enterprise.png)
1. Da clic en **Guardar** para aplicar la configuración.

{% endif %}

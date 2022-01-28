---
title: Requerir políticas para las GitHub Actions en tu empresa
intro: 'Puedes requerir políticas para las {% data variables.product.prodname_actions %} dentro de las organizaciones de tu empresa o permitir que estas se configuren en cada organización.'
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
shortTitle: Políticas de GitHub Actions
---

{% data reusables.actions.enterprise-beta %}

## Acerca de las políticas para {% data variables.product.prodname_actions %} en tu empresa

Las {% data variables.product.prodname_actions %} ayudan a los miembros de tu empresa a automatizar los flujos de trabajo de desarrollo de software en {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Entender las {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions)".

{% ifversion ghes %}Si habilitas las {% data variables.product.prodname_actions %}, cualquier{% else %}Cualquier{% endif %} organización en {% data variables.product.product_location %} podrá utilizar {% data variables.product.prodname_actions %}. Puedes requerir políticas para controlar la forma en la que los miembros de tu empresa de {% data variables.product.product_name %} utilizan las {% data variables.product.prodname_actions %}. Predeterminadamente, los propietarios de las organizaciones pueden administrar la forma en la que los miembros utilizan las {% data variables.product.prodname_actions %}. Para obtener más información, consulta la sección "[Inhabilitar o limitar las {% data variables.product.prodname_actions %} para tu organización](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)".

## Requerir una política para restringir el uso de las acciones en tu empresa

Puedes elegir inhabilitar {% data variables.product.prodname_actions %} para todas las organizaciones en tu empresa, o puedes permitir solo organizaciones específicas. También puedes limitar el uso de acciones públicas para que las personas solo puedan utilizar las acciones locales que existen en tu empresa.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.enterprise-actions-permissions %}
1. Haz clic en **Save ** (guardar).

{% ifversion ghec or ghes or ghae %}

### Permitir que se ejecuten acciones específicas

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

## Requerir una política para la retención de bitácoras y artefactos en tu empresa

Las {% data variables.product.prodname_actions %} pueden restablecer los archivos de bitácora y artefactos. Para obtener más información, consulta la sección "[Descargar artefactos de los flujos de trabajo ](/actions/managing-workflow-runs/downloading-workflow-artifacts)".

{% data reusables.actions.about-artifact-log-retention %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.change-retention-period-for-artifacts-logs  %}

{% endif %}

## Requerir una política para bifurcar solicitudes de cambio en tu empresa

Puedes requerir políticas para controlar la forma en la que se comportan las {% data variables.product.prodname_actions %} en {% data variables.product.product_location %} cuando los miembros de tu empresa{% ifversion ghec %} o colaboradores externos{% endif %} ejecutan flujos de trabajo desde las bifurcaciones.

{% ifversion ghec %}

### Requerir una política para la aprobación de las solicitudes de cambio desde los colaboradores externos

{% data reusables.actions.workflow-run-approve-public-fork %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}

{% endif %}

{% ifversion ghec or ghes or ghae %}

### Requerir una política para bifurcar solicitudes de cambio en repositorios privados

{% data reusables.github-actions.private-repository-forks-overview %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.github-actions.private-repository-forks-configure %}

{% endif %}

{% ifversion ghec or ghes > 3.1 or ghae %}

## Requerir una política para los permisos de flujo de trabajo en tu empresa

{% data reusables.github-actions.workflow-permissions-intro %}

Puedes configurar los permisos predeterminados para del `GITHUB_TOKEN` en la configuración de tu empresa, organización o repositorio. Si eliges la opción restringida como lo predeterminado en la configuración de tu empresa, esto previene que puedas elegir más configuraciones permisivas en la configuración de tu organización o repositorio.

{% data reusables.github-actions.workflow-permissions-modifying %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Debajo de **Permisos del flujo de trabajo**, elige si quieres que el `GITHUB_TOKEN` tenga permisos de lectura y escritura para todos los alcances o solo acceso de lectura para el alcance `contents`. ![Configurar los permisos del GITHUB_TOKEN para esta empresa](/assets/images/help/settings/actions-workflow-permissions-enterprise.png)
1. Da clic en **Guardar** para aplicar la configuración.

{% endif %}

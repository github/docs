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

## Requerir una política para restringir el uso de las {% data variables.product.prodname_actions %} en tu empresa

Puedes elegir inhabilitar {% data variables.product.prodname_actions %} para todas las organizaciones en tu empresa, o puedes permitir solo organizaciones específicas. También puedes limitar el uso de las acciones públicas {% ifversion actions-workflow-policy %}y flujos de trabajo reutilizables{% endif %} para que las personas solo puedan utilizar acciones {% ifversion actions-workflow-policy %}y flujos de trabajo reutilizables{% endif %} que existan en tu empresa.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Debajo de "Políticas", selecciona tus opciones.

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {%- ifversion ghes or ghae %}
   {% note %}

   **Nota:** Para habilitar el acceso a las acciones públicas{% ifversion actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %}, primero debes configurar {% data variables.product.product_location %} para que se conecte a {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información, consulta la sección "[Habilitar el acceso automática para las acciones de GitHub.com utilizando GitHub Connect](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".

   {% endnote %}
   {%- endif %}
   {% ifversion actions-workflow-policy %}
   ![Habilita, inhabilita o limita las acciones para esta cuenta empresarial](/assets/images/help/organizations/enterprise-actions-policy-with-workflows.png)
   {%- else %}
   ![Habilita, inhabilita o limita las acciones para esta cuenta empresarial](/assets/images/help/organizations/enterprise-actions-policy.png)
   {%- endif %}
1. Haz clic en **Save ** (guardar).

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Debajo de "Políticas", selecciona {% data reusables.actions.policy-label-for-select-actions-workflows %} y agrega tus acciones{% ifversion actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %} requeridos a la lista.
   {% ifversion actions-workflow-policy %}
   ![Agrega acciones y flujos de trabajo reutilizables a la lista de elementos permitidos](/assets/images/help/organizations/enterprise-actions-policy-allow-list-with-workflows.png)
   {%- elsif ghes or ghae %}
   ![Agregar acciones a la lista de elementos permitidos](/assets/images/help/organizations/enterprise-actions-policy-allow-list.png)
   {%- elsif ghae %}
   ![Agregar acciones a la lista de elementos permitidos](/assets/images/enterprise/github-ae/enterprise-actions-policy-allow-list.png)
   {%- endif %}

## Requerir una política para la retención de bitácoras y artefactos en tu empresa

Las {% data variables.product.prodname_actions %} pueden restablecer los archivos de bitácora y artefactos. Para obtener más información, consulta la sección "[Descargar artefactos de los flujos de trabajo ](/actions/managing-workflow-runs/downloading-workflow-artifacts)".

{% data reusables.actions.about-artifact-log-retention %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.change-retention-period-for-artifacts-logs  %}

## Requerir una política para bifurcar solicitudes de cambio en tu empresa

Puedes requerir políticas para controlar la forma en la que se comportan las {% data variables.product.prodname_actions %} en {% data variables.product.product_location %} cuando los miembros de tu empresa{% ifversion ghec %} o colaboradores externos{% endif %} ejecutan flujos de trabajo desde las bifurcaciones.

{% ifversion ghec %}

### Requerir una política para la aprobación de las solicitudes de cambio desde los colaboradores externos

{% data reusables.actions.workflow-run-approve-public-fork %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}

{% endif %}

### Requerir una política para bifurcar solicitudes de cambio en repositorios privados

{% data reusables.actions.private-repository-forks-overview %}

Si se habilita una política para una empresa, esta puede inhabilitarse selectivamente en organizaciones o repositorios individuales. Si se inhabilita una política para una empresa, las organizaciones o repositorios individuales no pueden habilitarla.

{% data reusables.actions.private-repository-forks-options %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.private-repository-forks-configure %}

{% ifversion ghec or ghes or ghae %}

## Requerir una política para los permisos de flujo de trabajo en tu empresa

{% data reusables.actions.workflow-permissions-intro %}

Puedes configurar los permisos predeterminados para del `GITHUB_TOKEN` en la configuración de tu empresa, organización o repositorio. Si eliges la opción restringida como la predeterminada en tus ajustes de empresa, esto prevendrá que se elija el ajuste más permisivo en los ajustes de repositorio u organización.

{% data reusables.actions.workflow-permissions-modifying %}

### Configuring the default `GITHUB_TOKEN` permissions

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}
Predeterminadamente, cuando creas una empresa nueva, el `GITHUB_TOKEN` solo tendrá acceso de lectura para el alcance `contents`.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Debajo de "Permisos de flujo de trabajo", elige si quieres que el `GITHUB_TOKEN` tenga acceso de lectura y escritura para todos los alcances o solo acceso de lectura para el alcance `contents`.

   ![Configurar los permisos del GITHUB_TOKEN para esta empresa](/assets/images/help/settings/actions-workflow-permissions-enterprise{% ifversion allow-actions-to-approve-pr-with-ent-repo %}-with-pr-approval{% endif %}.png)
1. Da clic en **Guardar** para aplicar la configuración.

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}
### Prevenir que las {% data variables.product.prodname_actions %} creen o aprueben solicitudes de cambio

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

Predeterminadamente, cuando creas una empresa nueva, no se permite que los flujos de trabajo creen o aprueben las solicitudes de cambio.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Debajo de "Permisos de flujo de trabajo", utiliza el ajuste **Permitir que las GitHub Actions creen y aprueben solicitudes de cambios** para configurar si el `GITHUB_TOKEN` puede crear y aprobar solicitudes de cambios.

   ![Configurar los permisos del GITHUB_TOKEN para esta empresa](/assets/images/help/settings/actions-workflow-permissions-enterprise-with-pr-approval.png)
1. Da clic en **Guardar** para aplicar la configuración.

{% endif %}
{% endif %}

{% ifversion actions-cache-policy-apis %}

## Requerir una política para almacenamiento en caché dentro de tu empresa

{% data reusables.actions.cache-default-size %} {% data reusables.actions.cache-eviction-process %}

Sin embargo, puedes configurar una política de empresa para personalizar tanto el tamaño total predeterminado de almacenamiento en caché para cada repositorio como el tamaño total máximo de almacenamiento en caché permitido para un repositorio individual. Por ejemplo, podrías querer que el tamaño de caché total predeterminado para cada repositorio sea de 5GB, pero también permitir que los administradores configuren un tamaño total de almacenamiento en caché de 15 GB de ser necesario.

Las personas con acceso administrativo a un repositorio pueden configurar un tamaño total de almacenamiento en caché para su repositorio de has el tamaño máximo permitido por el ajuste de la política empresarial.

Los ajustes de política para el almacenamiento en caché de {% data variables.product.prodname_actions %} actualmente solo pueden modificarse utilizando la API de REST:

* Para ver los ajustes de política empresarial actuales, consulta la sección "[Obtener una política de uso del caché de GitHub Actions para una empresa](/rest/actions/cache#get-github-actions-cache-usage-policy-for-an-enterprise)".
* Para cambiar los ajustes de la política empresarial, consulta la sección "[Configurar la política de uso de caché de GitHub Actions para una empresa](/rest/actions/cache#get-github-actions-cache-usage-policy-for-an-enterprise)".

{% data reusables.actions.cache-no-org-policy %}

{% endif %}

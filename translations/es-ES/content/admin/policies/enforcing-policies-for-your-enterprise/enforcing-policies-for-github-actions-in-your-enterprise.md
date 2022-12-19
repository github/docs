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
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
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
ms.openlocfilehash: 21b2cfa73ef84ba6635f05b9fc25bb48df2b87cb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147400343'
---
{% data reusables.actions.enterprise-beta %}

## Acerca de las políticas para {% data variables.product.prodname_actions %} en tu empresa

Las {% data variables.product.prodname_actions %} ayudan a los miembros de tu empresa a automatizar los flujos de trabajo de desarrollo de software en {% data variables.product.product_name %}. Para obtener más información, consulta "[Descripción de {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions)".

{% ifversion ghes %}Si habilitas las {% data variables.product.prodname_actions %}, cualquier{% else %}Cualquier{% endif %} organización en {% data variables.product.product_location %} podrá utilizar {% data variables.product.prodname_actions %}. Puedes requerir políticas para controlar la forma en la que los miembros de tu empresa de {% data variables.product.product_name %} utilizan las {% data variables.product.prodname_actions %}. Predeterminadamente, los propietarios de las organizaciones pueden administrar la forma en la que los miembros utilizan las {% data variables.product.prodname_actions %}. Para obtener más información, consulta "[Deshabilitación o limitación de {% data variables.product.prodname_actions %} para la organización](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)".

## Aplicación de una directiva para restringir el uso de {% data variables.product.prodname_actions %} en la empresa

Puedes elegir inhabilitar {% data variables.product.prodname_actions %} para todas las organizaciones en tu empresa, o puedes permitir solo organizaciones específicas. También puedes limitar el uso de acciones públicas{% ifversion actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %}, de modo que los usuarios solo puedan utilizar acciones locales {% ifversion actions-workflow-policy %}y flujos de trabajo reutilizables{% endif %} que existan en la empresa.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. Debajo de "Políticas", selecciona tus opciones.

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {%- ifversion ghes or ghae %} {% note %}

   **Nota:** Para habilitar el acceso a acciones públicas{% ifversion actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %}, primero debes configurar {% data variables.product.product_location %} para que se conecte a {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información, consulta "[Habilitación del acceso automático a las acciones de GitHub.com mediante GitHub Connect](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".

   {% endnote %} {%- endif %} {% ifversion actions-workflow-policy %} ![Habilitación, deshabilitación o limitación de las acciones para esta cuenta empresarial](/assets/images/help/organizations/enterprise-actions-policy-with-workflows.png) {%- else %} ![Habilitación, deshabilitación o limitación de las acciones para esta cuenta empresarial](/assets/images/help/organizations/enterprise-actions-policy.png) {%- endif %}
1. Haga clic en **Save**(Guardar).

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. En "Directivas", selecciona {% data reusables.actions.policy-label-for-select-actions-workflows %} y agrega las acciones necesarias{% ifversion actions-workflow-policy %} y los flujos de trabajo reutilizables{% endif %} a la lista.
   {% ifversion actions-workflow-policy %} ![Incorporación de acciones y flujos de trabajo reutilizables a la lista de permitidos](/assets/images/help/organizations/enterprise-actions-policy-allow-list-with-workflows.png) {%- elsif ghes or ghae %} ![Incorporación de acciones a la lista de permitidos](/assets/images/help/organizations/enterprise-actions-policy-allow-list.png) {%- elsif ghae %} ![Incorporación de acciones a la lista de permitidos](/assets/images/enterprise/github-ae/enterprise-actions-policy-allow-list.png) {%- endif %}

## Requerir una política para la retención de bitácoras y artefactos en tu empresa

Las {% data variables.product.prodname_actions %} pueden restablecer los archivos de bitácora y artefactos. Para obtener más información, consulta "[Descarga de artefactos de flujo de trabajo](/actions/managing-workflow-runs/downloading-workflow-artifacts)".

{% data reusables.actions.about-artifact-log-retention %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.actions.change-retention-period-for-artifacts-logs  %}

## Requerir una política para bifurcar solicitudes de cambio en tu empresa

Puedes requerir políticas para controlar la forma en la que se comportan las {% data variables.product.prodname_actions %} en {% data variables.product.product_location %} cuando los miembros de tu empresa{% ifversion ghec %} o colaboradores externos{% endif %} ejecutan flujos de trabajo desde las bifurcaciones.

{% ifversion ghec %}

### Requerir una política para la aprobación de las solicitudes de cambio desde los colaboradores externos

{% data reusables.actions.workflow-run-approve-public-fork %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}

{% endif %}

### Requerir una política para bifurcar solicitudes de cambio en repositorios privados

{% data reusables.actions.private-repository-forks-overview %}

Si se habilita una política para una empresa, esta puede inhabilitarse selectivamente en organizaciones o repositorios individuales. Si se inhabilita una política para una empresa, las organizaciones o repositorios individuales no pueden habilitarla.

{% data reusables.actions.private-repository-forks-options %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.actions.private-repository-forks-configure %}

{% ifversion ghec or ghes or ghae %}

## Requerir una política para los permisos de flujo de trabajo en tu empresa

{% data reusables.actions.workflow-permissions-intro %}

Puedes configurar los permisos predeterminados para `GITHUB_TOKEN` en la configuración de la empresa, las organizaciones o los repositorios. Si eliges una opción restringida como valor predeterminado en la configuración de tu empresa, esto impide que puedas elegir configuraciones más permisivas en la configuración de la organización o el repositorio.

{% data reusables.actions.workflow-permissions-modifying %}

### Configuración de los permisos de `GITHUB_TOKEN` predeterminados

{% ifversion allow-actions-to-approve-pr-with-ent-repo %} De manera predeterminada, al crear una empresa, `GITHUB_TOKEN` solo tiene acceso de lectura para el ámbito `contents`.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. En "Permisos de flujo de trabajo", elige si quieres que `GITHUB_TOKEN` tenga acceso de lectura y escritura para todos los ámbitos, o simplemente acceso de lectura para el ámbito `contents`.

   ![Configurar los permisos del GITHUB_TOKEN para esta empresa](/assets/images/help/settings/actions-workflow-permissions-enterprise{% ifversion allow-actions-to-approve-pr-with-ent-repo %}-with-pr-approval{% endif %}.png)
1. Haz clic en **Guardar** para aplicar los valores.

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}
### Impedir la creación o aprobación de solicitudes de incorporación de cambios por parte de {% data variables.product.prodname_actions %}

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

De forma predeterminada, cuando se crea una empresa, los flujos de trabajo no pueden crear ni aprobar solicitudes de incorporación de cambios.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. En "Permisos de flujo de trabajo", usa la opción **Permitir que Acciones de GitHub cree y apruebe solicitudes de incorporación de cambios** para configurar si `GITHUB_TOKEN` puede crear y aprobar solicitudes de incorporación de cambios.

   ![Configurar los permisos del GITHUB_TOKEN para esta empresa](/assets/images/help/settings/actions-workflow-permissions-enterprise-with-pr-approval.png)
1. Haz clic en **Guardar** para aplicar los valores.

{% endif %} {% endif %}

{% ifversion actions-cache-policy-apis %}

## Aplicación de una directiva para el almacenamiento en caché en la empresa

{% data reusables.actions.cache-default-size %} {% data reusables.actions.cache-eviction-process %}

Aun así, puedes establecer una directiva empresarial para personalizar tanto el tamaño de caché total predeterminado de cada repositorio como el tamaño máximo de caché total permitido para un repositorio. Por ejemplo, es posible que te interese que el tamaño de caché total predeterminado de cada repositorio sea de 5 GB, pero también permitir que los administradores del repositorio puedan configurar un tamaño total de caché de hasta 15 GB si es necesario.

Las personas con acceso de administrador a un repositorio pueden establecer un tamaño total de caché del repositorio de hasta el tamaño máximo de caché que se permite en la configuración de directiva de empresa.

La configuración de directiva para el almacenamiento en caché de {% data variables.product.prodname_actions %} solo puede modificarse actualmente mediante la API REST:

* Para ver la configuración de directiva actual de la empresa, consulta "[Obtener la directiva de uso de caché de Acciones de GitHub para una empresa](/rest/actions/cache#get-github-actions-cache-usage-policy-for-an-enterprise)".
* Para cambiar la configuración de directiva de la empresa, consulta "[Establecer la directiva de uso de caché de Acciones de GitHub para una empresa](/rest/actions/cache#get-github-actions-cache-usage-policy-for-an-enterprise)".

{% data reusables.actions.cache-no-org-policy %}

{% endif %}

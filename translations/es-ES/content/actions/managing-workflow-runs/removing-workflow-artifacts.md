---
title: Eliminar artefactos de flujo de trabajo
intro: 'Puedes reclamar el almacenamiento de {% data variables.product.prodname_actions %} que se haya utilizado si borras los artefactos antes de que venzan en {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Remove workflow artifacts
ms.openlocfilehash: e5fe2bb21f72785f55d22fffd9ba46420d791fce
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199806'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Borrar un artefacto

{% warning %}

**Advertencia:** Una vez que eliminas un artefacto, no se puede restaurar.

{% endwarning %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.actions.artifact-log-retention-statement %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. En **Artifacts** (Artefactos), haga clic en {% octicon "trash" aria-label="The trash icon" %} junto al artefacto que quiere quitar.
    
    ![Menú desplegable Delete artifact (Eliminar artefacto)](/assets/images/help/repository/actions-delete-artifact-updated.png)
    

## Configurar el periodo de retención para un artefacto

Los periodos de retención para los artefactos y las bitácoras pueden configurarse a nivel de repositorio, organización y empresa. Para obtener más información, vea {% ifversion fpt or ghec or ghes %}"[Límites de uso, facturación y administración](/actions/reference/usage-limits-billing-and-administration#artifact-and-log-retention-policy)".{% elsif ghae %}"[Administración de la configuración de {% data variables.product.prodname_actions %} para un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)", "[Configuración del período de retención para los artefactos y los registros de {% data variables.product.prodname_actions %} en la organización](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)" o "[Aplicación de directivas de {% data variables.product.prodname_actions %} en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)."{% endif %}

También puede definir un período de retención personalizado para artefactos individuales mediante la acción `actions/upload-artifact` en un flujo de trabajo. Para más información, vea "[Almacenamiento de datos de flujo de trabajo como artefactos](/actions/guides/storing-workflow-data-as-artifacts#configuring-a-custom-artifact-retention-period)".

## Encontrar la fecha de vencimiento de un artefacto

Puedes utilizar la API para confirmar la fecha de programación para el borrado de un artefacto. Para obtener más información, consulte el valor `expires_at` devuelto por el punto de conexión "[Enumerar artefactos para un repositorio](/rest/reference/actions#artifacts)".

---
title: Suppression d’artefacts de workflow
intro: 'Vous pouvez récupérer l’espace de stockage utilisé sur {% data variables.product.prodname_actions %} en supprimant les artefacts avant leur expiration sur {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Remove workflow artifacts
ms.openlocfilehash: e5fe2bb21f72785f55d22fffd9ba46420d791fce
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199801'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Suppression d’un artefact

{% warning %}

**Avertissement :** Une fois que vous supprimez un artefact, vous ne pouvez pas le restaurer.

{% endwarning %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.actions.artifact-log-retention-statement %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. Sous **Artefacts**, cliquez sur {% octicon "trash" aria-label="The trash icon" %} en regard de l’artefact que vous souhaitez supprimer.
    
    ![Menu déroulant Supprimer l’artefact](/assets/images/help/repository/actions-delete-artifact-updated.png)
    

## Définition de la durée de conservation d’un artefact

Des périodes de conservation d’artefacts et de journaux peuvent être configurées au niveau du dépôt, de l’organisation et de l’entreprise. Pour plus d’informations, consultez {% ifversion fpt or ghec or ghes %}« [Limites d’utilisation, facturation et administration](/actions/reference/usage-limits-billing-and-administration#artifact-and-log-retention-policy) ».{% elsif ghae %}« [Gestion des paramètres de {% data variables.product.prodname_actions %} pour un dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository) », « [Configuration de la période de conservation des artefacts et des journaux {% data variables.product.prodname_actions %} dans votre organisation](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization) » ou « [Application de stratégies pour {% data variables.product.prodname_actions %} dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise) ». {% endif %}

Vous pouvez également définir une période de conservation personnalisée pour des artefacts individuels à l’aide de l’action `actions/upload-artifact` dans un workflow. Pour plus d’informations, consultez « [Stockage des données de workflow en tant qu’artefacts](/actions/guides/storing-workflow-data-as-artifacts#configuring-a-custom-artifact-retention-period) ».

## Recherche de la date d’expiration d’un artefact

Vous pouvez utiliser l’API pour confirmer la date à laquelle il est prévu qu’un artefact soit supprimé. Pour plus d’informations, consultez la valeur `expires_at` retournée par « [Lister les artefacts d’un dépôt](/rest/reference/actions#artifacts) ».

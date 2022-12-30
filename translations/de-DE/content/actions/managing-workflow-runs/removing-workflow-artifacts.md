---
title: Entfernen von Workflowartefakten
intro: 'Du kannst genutzten {% data variables.product.prodname_actions %}-Speicher freigeben, indem du Artefakte löschst, bevor sie am {% data variables.product.product_name %} ablaufen.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Remove workflow artifacts
ms.openlocfilehash: e5fe2bb21f72785f55d22fffd9ba46420d791fce
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199802'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Löschen eines Artefakts

{% warning %}

**Warnung:** Sobald du ein Artefakt gelöscht hast, kann es nicht mehr wiederhergestellt werden.

{% endwarning %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.actions.artifact-log-retention-statement %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. Klicke unter **Artefakte** auf {% octicon "trash" aria-label="The trash icon" %} neben dem Artefakt, das du entfernen möchtest.
    
    ![Dropdown-Menü zum Löschen von Artefakten](/assets/images/help/repository/actions-delete-artifact-updated.png)
    

## Festlegen des Aufbewahrungszeitraums für ein Artefakt

Aufbewahrungszeiträume für Artefakte und Protokolle können auf Repository-, Organisations- und Unternehmensebene konfiguriert werden. Weitere Informationen findest du unter {% ifversion fpt or ghec or ghes %}[Nutzungseinschränkungen, Abrechnung und Verwaltung](/actions/reference/usage-limits-billing-and-administration#artifact-and-log-retention-policy).{% elsif ghae %}[Verwalten von Einstellungen für {% data variables.product.prodname_actions %} für ein Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository), [Konfigurieren der Aufbewahrungsdauer für {% data variables.product.prodname_actions %} für Artefakte und Protokolle in deiner Organisation](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization), oder [Erzwingen von Richtlinien für {% data variables.product.prodname_actions %} in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise).{% endif %}

Du kannst außerdem eine eigene Aufbewahrungsdauer für einzelne Artefakte festlegen, indem du die `actions/upload-artifact`-Aktion in einem Workflow verwendest. Weitere Informationen findest du unter [Speichern von Workflowdaten als Artefakte](/actions/guides/storing-workflow-data-as-artifacts#configuring-a-custom-artifact-retention-period).

## Suchen des Ablaufdatums eines Artefakts

Du kannst mithilfe der API das geplante Datum für die Löschung eines Artefakts bestätigen. Weitere Informationen findest du im `expires_at`-Wert, der beim [Auflisten von Artefakten für ein Repository](/rest/reference/actions#artifacts) zurückgegeben wird.

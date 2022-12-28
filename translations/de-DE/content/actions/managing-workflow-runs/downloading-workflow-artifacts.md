---
title: Herunterladen von Workflowartefakten
intro: 'Du kannst archivierte Artefakte herunterladen, ehe sie automatisch ablaufen.'
permissions: 'People who are signed into {% data variables.product.product_name %} and have read access to a repository can download workflow artifacts.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Download workflow artifacts
ms.openlocfilehash: dcb2d97095f6cdd704207084b776db05a4d1bd44
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160632'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Standardmäßig speichert {% data variables.product.product_name %} Buildprotokolle und Artefakte 90 Tage lang, und du kannst diesen Aufbewahrungszeitraum je nach Repositorytyp anpassen. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_actions %}-Einstellungen für ein Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository).

{% data reusables.repositories.permissions-statement-read %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. Klicke unter **Artefakte** auf das Artefakt, das du herunterladen möchtest.
    
    ![Dropdown-Menü zum Herunterladen von Artefakten](/assets/images/help/repository/artifact-drop-down-updated.png)
    

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

{% data variables.product.prodname_cli %} lädt jedes Artefakt basierend auf dem Artefaktnamen in separate Verzeichnisse herunter. Bei Angabe eines einzelnen Artefakts wird dieses in das aktuelle Verzeichnis extrahiert.

Um alle von einer Workflowausführung generierten Artefakte herunterzuladen, verwende den Unterbefehl `run download`. Ersetze `run-id` durch die ID der Ausführung, aus der du Artefakte herunterladen möchtest. Wenn du keine `run-id` angibst, gibt {% data variables.product.prodname_cli %} ein interaktives Menü zurück, in dem du eine der letzten Ausführungen auswählen kannst.

```shell
gh run download RUN_ID
```

Um ein bestimmtes Artefakte aus einer Ausführung herunterzuladen, verwende den Unterbefehl `run download`. Ersetze `run-id` durch die ID der Ausführung, aus der du Artefakte herunterladen möchtest. Ersetze `artifact-name` durch den Namen des Artefakts, das du herunterladen möchtest.

```shell
gh run download RUN_ID -n ARTIFACT_NAME
```

Du kannst mehrere Artefakte angeben.

```shell
gh run download RUN_ID> -n ARTIFACT_NAME-1 -n ARTIFACT_NAME-2
```

Um bestimmte Artefakte aus allen Ausführungen in einem Repository herunterzuladen, verwende den Unterbefehl `run download`.

```shell
gh run download -n ARTIFACT_NAME-1 ARTIFACT_NAME-2
```

{% endcli %}

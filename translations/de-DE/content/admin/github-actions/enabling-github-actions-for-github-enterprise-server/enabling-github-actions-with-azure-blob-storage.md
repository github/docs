---
title: Aktivieren von GitHub Actions mit Azure Blob Storage
intro: 'Du kannst {% data variables.product.prodname_actions %} auf {% data variables.product.prodname_ghe_server %} aktivieren und Azure Blob Storage zum Speichern von Daten verwenden, die durch Workflowausführungen generiert wurden.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Infrastructure
  - Storage
redirect_from:
  - /admin/github-actions/enabling-github-actions-with-azure-blob-storage
shortTitle: Azure Blob storage
ms.openlocfilehash: b6abccdfea0d33b387fc3ec6df563fcbaf57f861
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109542'
---
## Voraussetzungen

Stelle vor dem Aktivieren von {% data variables.product.prodname_actions %} sicher, dass du die folgenden Schritte ausgeführt hast:

* Erstellen deines Azure-Speicherkontos zum Speichern von Workflowdaten. {% data variables.product.prodname_actions %} speichert seine Daten als Blockblobs, und zwei Speicherkontotypen werden unterstützt:
  * Ein **allgemeines** Speicherkonto (auch bekannt als `general-purpose v1` oder `general-purpose v2`) mit der **Standard**-Leistungsstufe.

    {% warning %}

    **Warnung:** Die Verwendung der **Premium**-Leistungsstufe mit einem allgemeinen Speicherkonto wird nicht unterstützt. Die **Standard**-Leistungsstufe muss beim Erstellen des Speicherkontos ausgewählt werden und kann später nicht geändert werden.

    {% endwarning %}
  * Ein **BlockBlobStorage**-Speicherkonto, das die **Premium**-Leistungsstufe verwendet.

  Weitere Informationen zu Azure-Speicherkontotypen und Leistungsstufen findest du in der [Azure-Dokumentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview?toc=/azure/storage/blobs/toc.json#types-of-storage-accounts).
{% data reusables.actions.enterprise-common-prereqs %}

## Aktivieren von {% data variables.product.prodname_actions %} mit Azure Blob Storage

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. Wähle unter „Artefakt- und Protokollspeicher" **Azure Blob Storage** aus, und gib die Verbindungszeichenfolge deines Azure-Speicherkontos ein. Weitere Informationen zum Abrufen der Verbindungszeichenfolge für dein Speicherkonto findest du in der [Azure-Dokumentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal#view-account-access-keys).

   ![Optionsfeld zum Auswählen von Azure Blob Storage und das Feld „Verbindungszeichenfolge“](/assets/images/enterprise/management-console/actions-azure-storage.png) {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}

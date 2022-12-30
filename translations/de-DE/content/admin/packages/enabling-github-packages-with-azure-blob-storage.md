---
title: Aktivieren von GitHub Packages mit Azure Blob Storage
intro: 'Richte die {% data variables.product.prodname_registry %} mit Azure Blob Storage als deinem externen Speicher ein.'
versions:
  ghes: '*'
type: tutorial
topics:
  - Enterprise
  - Packages
  - Storage
shortTitle: Enable Packages with Azure
ms.openlocfilehash: b851f698baba60323cbaaa69122cacdc92ec83c2
ms.sourcegitcommit: 3ece72cf2d90987575d369c44101d19d3bb06f76
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/02/2022
ms.locfileid: '148190387'
---
{% warning %}

**Warnungen:**
- Es ist wichtig, dass du für deinen Speicherbucket die benötigten Zugriffsbeschränkungsrichtlinien konfigurierst, da {% data variables.product.company_short %} keine spezifischen Objektberechtigungen oder zusätzlichen Zugriffssteuerungslisten (Access Control Lists, ACLs) auf deine Speicherbucketkonfiguration anwendet. Wenn du z. B. deinen Bucket als öffentlich festlegst, kann auf die Daten in diesem Bucket über das öffentliche Internet zugegriffen werden.
- Wir empfehlen die Nutzung eines dedizierten Buckets für {% data variables.product.prodname_registry %}, der vom Bucket für die Speicherung von {% data variables.product.prodname_actions %} getrennt ist.
- Konfiguriere den Bucket, den du in Zukunft verwenden möchtest. Es wird nicht empfohlen, den Speicher nach der Verwendung von {% data variables.product.prodname_registry %} noch einmal zu ändern.

{% endwarning %}

## Voraussetzungen

Bevor du {% data variables.product.prodname_registry %} in {% data variables.location.product_location_enterprise %} aktivieren und konfigurieren kannst, musst du deinen Azure Blob Storage-Bucket vorbereiten. Zur Vorbereitung deines Azure Blob-Speicherbuckets empfehlen wir dir, die Azure Blob Storage-Dokumente auf der offiziellen [Azure Blob Storage-Dokumentationswebsite](https://docs.microsoft.com/en-us/azure/storage/blobs/) zu lesen.

## Aktivieren von {% data variables.product.prodname_registry %} mit Azure Blob Storage

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %} {% data reusables.package_registry.enable-enterprise-github-packages %}
1. Wähle unter „Paketspeicher“ die Option **Azure Blob Storage** aus, und gib den Namen deines Azure-Containers für deinen Paketspeicherbucket sowie die Verbindungszeichenfolge ein.

    - Du musst einen Speichercontainer erstellen, bevor du den Containernamen und die Verbindungszeichenfolge festlegst.

  ![Felder für den Namen des Azure Blob Storage-Containers und die Verbindungszeichenfolgen](/assets/images/help/package-registry/azure-blob-storage-settings.png)

  {% note %}

  **Hinweis:** Du findest deine Azure-Verbindungszeichenfolge, indem du in deinem Azure-Speicherkonto zum Menü „Zugriffsschlüssel“ navigierst. 
  Die Verwendung eines SAS-Tokens oder einer SAS-URL als Verbindungszeichenfolge wird derzeit nicht unterstützt.
  
  {% endnote %}

{% data reusables.enterprise_management_console.save-settings %}

## Nächste Schritte

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}

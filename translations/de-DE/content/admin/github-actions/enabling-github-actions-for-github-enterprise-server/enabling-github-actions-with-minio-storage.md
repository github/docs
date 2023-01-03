---
title: Aktivieren von GitHub Actions mit dem MinIO-Speicher
intro: 'Du kannst {% data variables.product.prodname_actions %} auf {% data variables.product.prodname_ghe_server %} aktivieren und MinIO zum Speichern von Daten verwenden, die durch Workflowausführungen generiert wurden.'
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
  - /admin/github-actions/enabling-github-actions-with-minio-gateway-for-nas-storage
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-minio-gateway-for-nas-storage
shortTitle: MinIO storage
ms.openlocfilehash: 3d9c6cfca6b81a66185515c8757cef22290ead30
ms.sourcegitcommit: 8f1801040a84ca9353899a2d1e6782c702aaed0d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/16/2022
ms.locfileid: '148166569'
---
## Voraussetzungen

Stelle vor dem Aktivieren von {% data variables.product.prodname_actions %} sicher, dass du die folgenden Schritte ausgeführt hast:

* Erstelle deinen MinIO-Bucket zum Speichern von Daten, die von Workflowausführungen generiert werden. Weitere Informationen zum Installieren und Konfigurieren von MinIO findest du unter [MinIO High Performance Object Storage](https://min.io/docs/minio/container/index.html) (Hochleistungsobjektspeicher von MinIO) und [mc mb](https://min.io/docs/minio/linux/reference/minio-mc/mc-mb.html) in der MinIO-Dokumentation.

  Um Ressourcenkonflikte in der Appliance zu vermeiden, empfehlen wir, MinIO separat von {% data variables.location.product_location %} zu hosten.

  {% indented_data_reference reusables.actions.enterprise-s3-permission spaces=2 %} {% data reusables.actions.enterprise-common-prereqs %}

## Aktivieren von {% data variables.product.prodname_actions %} mit dem MinIO-Speicher

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. Wähle unter "Artefakt- und Protokollspeicher" die Option **Amazon S3** aus, und gib die Details des Speicherbuckets ein:

   * **AWS-Service-URL**: Die URL für deinen MinIO-Service. Beispiel: `https://my-minio.example:9000`.
   * **AWS S3 Bucket**: Der Name deines S3-Buckets.
   * **AWS S3-Zugriffsschlüssel und Geheimer AWS S3****-Schlüssel**: `MINIO_ACCESS_KEY` und `MINIO_SECRET_KEY`, verwendet für deine MinIO-Instanz.

   ![Optionsschaltfläche zum Auswählen von Amazon S3 Storage und der Felder für die MinIO-Konfiguration](/assets/images/enterprise/management-console/actions-minio-s3-storage.png)
1. Wähle unter "Artifact & Log Storage" (Artefakte & Protokoll Storage) die Option **Pfadformat erzwingen** aus.

   ![Kontrollkästchen „Pfadformat erzwingen“](/assets/images/enterprise/management-console/actions-minio-force-path-style.png) {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}

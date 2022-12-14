---
title: Aktivieren von GitHub Actions mit Google Cloud Storage
intro: 'Du kannst {% data variables.product.prodname_actions %} auf {% data variables.product.prodname_ghe_server %} aktivieren und Google Cloud Storage zum Speichern von Daten verwenden, die durch Workflowausführungen generiert wurden.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  feature: actions-ghes-gcp-storage
type: how_to
topics:
  - Actions
  - Enterprise
  - Infrastructure
  - Storage
shortTitle: Google Cloud Storage
ms.openlocfilehash: abbac860ed3f6f1caaec1152b426762535b8fba4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109724'
---
{% note %}

**Hinweis:** {% data variables.product.prodname_actions %}-Support für Google Cloud Storage befindet sich derzeit in der Betaversion und unterliegt Änderungen.

{% endnote %}

## Voraussetzungen

Stelle vor dem Aktivieren von {% data variables.product.prodname_actions %} sicher, dass du die folgenden Schritte ausgeführt hast:

* Erstelle Deinen Google Cloud Storage-Bucket zum Speichern von Daten, die von Workflowausführungen generiert werden.
* Erstelle ein Google Cloud-Dienstkonto, das auf den Bucket zugreifen kann, und einen Hash-based Message Authentication Code (HMAC) für das Dienstkonto. Weitere Informationen findest du in der Google Cloud-Dokumentation unter [Verwalten von HMAC-Schlüsseln für Dienstkonten](https://cloud.google.com/storage/docs/authentication/managing-hmackeys).

  Das Dienstkonto muss über die folgenden [Berechtigungen für Identitäts- und Zugriffsverwaltung (IAM)](https://cloud.google.com/storage/docs/access-control/iam-permissions) für den Bucket verfügen:

  * `storage.objects.create`
  * `storage.objects.get`
  * `storage.objects.list`
  * `storage.objects.update`
  * `storage.objects.delete`
  * `storage.multipartUploads.create`
  * `storage.multipartUploads.abort`
  * `storage.multipartUploads.listParts`
  * `storage.multipartUploads.list` {% data reusables.actions.enterprise-common-prereqs %}

## Aktivieren von {% data variables.product.prodname_actions %} mit Google Cloud Storage

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. Wähle unter „Artefakt- und Protokollspeicher“ die Option **Google Cloud Storage** aus, und gib die Details deines Buckets ein:

   * **Dienst-URL**: Die Dienst-URL für deinen Bucket. Dies ist normalerweise `https://storage.googleapis.com`.
   * **Bucketname**: Der Name deines Buckets.
   * **HMAC Access ID** und **HMAC Secret**: Die Google Cloud-Zugriffs-ID und der geheime Schlüssel für dein Speicherkonto. Weitere Informationen findest du in der Google Cloud-Dokumentation unter [Verwalten von HMAC-Schlüsseln für Dienstkonten](https://cloud.google.com/storage/docs/authentication/managing-hmackeys).

   ![Optionsfeld zum Auswählen von Google Cloud Storage und Felder zur Konfiguration](/assets/images/enterprise/management-console/actions-google-cloud-storage.png) {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}

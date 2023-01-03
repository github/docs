---
title: Aktivieren von GitHub-Paketen mit MinIO
intro: 'Richte {% data variables.product.prodname_registry %} mit MinIO als deinem externen Speicher ein.'
versions:
  ghes: '*'
type: tutorial
topics:
  - Enterprise
  - Packages
  - Storage
shortTitle: Enable Packages with MinIO
ms.openlocfilehash: 2e7d76ee696dfbcd2369c577ef2d2ee803a09638
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104812'
---
{% warning %}

**Warnungen:**
- Es ist wichtig, dass du für deinen Speicherbucket die benötigten Zugriffsbeschränkungsrichtlinien konfigurierst, da {% data variables.product.company_short %} keine spezifischen Objektberechtigungen oder zusätzlichen Zugriffssteuerungslisten (Access Control Lists, ACLs) auf deine Speicherbucketkonfiguration anwendet. Wenn du z. B. deinen Bucket als öffentlich festlegst, kann auf die Daten in diesem Bucket über das öffentliche Internet zugegriffen werden.
- Wir empfehlen die Nutzung eines dedizierten Buckets für {% data variables.product.prodname_registry %}, der vom Bucket für die Speicherung von {% data variables.product.prodname_actions %} getrennt ist.
- Konfiguriere den Bucket, den du in Zukunft verwenden möchtest. Es wird nicht empfohlen, den Speicher nach der Verwendung von {% data variables.product.prodname_registry %} noch einmal zu ändern.

{% endwarning %}

## Voraussetzungen

Bevor du {% data variables.product.prodname_registry %} auf {% data variables.product.product_location_enterprise %} aktivieren und konfigurieren kannst, musst du deinen MinIO-Speicherbucket vorbereiten. Informationen zum schnellen Einrichten eines MinIO-Buckets und zum Navigieren zu den Anpassungsoptionen von MinIO findest du im Abschnitt [Schnellstart zum Konfigurieren deines MinIO-Speicherbuckets für {% data variables.product.prodname_registry %}](/admin/packages/quickstart-for-configuring-your-minio-storage-bucket-for-github-packages).

Stelle sicher, dass deine Zugriffsschlüssel-ID und dein Geheimnis für den externen MinIO-Speicher über die folgenden Berechtigungen verfügen:
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

## Aktivieren von {% data variables.product.prodname_registry %} mit einem externen MinIO-Speicher

Obwohl MinIO derzeit nicht auf der Benutzeroberfläche unter „Paketspeicher“ angezeigt wird, wird MinIO trotzdem von {% data variables.product.prodname_registry %} für {% data variables.product.prodname_enterprise %} unterstützt. Beachte außerdem, dass der Objektspeicher von MinIO mit der S3-API kompatibel ist und dass du die Bucketdetails von MinIO anstelle von AWS S3-Details eingeben kannst.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %} {% data reusables.package_registry.enable-enterprise-github-packages %}

{% ifversion ghes %}
1. Wähle unter „Paketspeicher“ **Amazon S3** aus.
1. Gib die Details deines MinIO-Speicherbuckets für die AWS-Speichereinstellungen ein.
    - **AWS-Dienst-URL:** Hosting-URL für deinen MinIO-Bucket
    - **AWS S3-Bucket:** Name deines S3-kompatiblen MinIO-Buckets für {% data variables.product.prodname_registry %}
    - **AWS S3-Zugriffsschlüssel** und **Geheimer AWS S3-Schlüssel**: Gib hier die Zugriffsschlüssel-ID und den geheimen Schlüssel von MinIO für den Zugriff auf deinen Bucket ein.

    ![Eingabefelder für Details deines AWS S3-Buckets](/assets/images/help/package-registry/s3-aws-storage-bucket-details.png) {% endif %} {% data reusables.enterprise_management_console.save-settings %}

## Nächste Schritte

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}

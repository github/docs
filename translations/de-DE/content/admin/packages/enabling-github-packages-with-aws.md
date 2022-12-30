---
title: Aktivieren von GitHub-Paketen mit AWS
intro: 'Richte {% data variables.product.prodname_registry %} mit AWS als deinen externen Speicher ein.'
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Packages
  - Packages
shortTitle: Enable Packages with AWS
ms.openlocfilehash: 185373657cad88bc0a45e48eb5835abdf394f9ce
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145104815'
---
{% warning %}

**Warnungen:**
- Es ist wichtig, dass du alle Zugriffsbeschränkungsrichtlinien konfigurierst, die du für deinen Speicherbucket benötigst, da {% data variables.product.company_short %} keine bestimmten Objektberechtigungen oder zusätzlichen Zugriffssteuerungslisten (Access Control Lists, ACLs) auf deine Speicherbucketkonfiguration anwendet. Wenn du z. B. deinen Bucket öffentlich machst, kann auf die Daten in diesem Bucket über das öffentliche Internet zugegriffen werden. Weitere Informationen findest du in der AWS-Dokumentation unter [Festlegen von Bucket- und Objektzugriffsberechtigungen](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/set-permissions.html).
- Wir empfehlen die Nutzung eines dedizierten Buckets für {% data variables.product.prodname_registry %}, der vom Bucket für die Speicherung von {% data variables.product.prodname_actions %} getrennt ist.
- Konfiguriere den Bucket, den du in Zukunft verwenden möchtest. Es wird nicht empfohlen, den Speicher nach der Verwendung von {% data variables.product.prodname_registry %} noch einmal zu ändern.

{% endwarning %}

## Voraussetzungen

Bevor du {% data variables.product.prodname_registry %} auf {% data variables.product.product_location_enterprise %} aktivieren und konfigurieren kannst, musst du deinen AWS-Speicherbucket vorbereiten. Informationen zur Vorbereitung des AWS-Speicherbuckets findest du in der offiziellen [AWS-Dokumentation](https://docs.aws.amazon.com/index.html).

Vergewissere dich, dass die ID deines AWS-Zugriffsschlüssels und das Geheimnis über die folgenden Berechtigungen verfügen:
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

## Aktivieren von {% data variables.product.prodname_registry %} mit einem externen AWS-Speicher

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %} {% data reusables.package_registry.enable-enterprise-github-packages %}

{% ifversion ghes %}
1. Wähle unter „Paketspeicher“ die Option **Amazon S3** aus, und gib die Details des Speicherbuckets ein:
    - **URL des AWS-Diensts:** Die Dienst-URL für deinen Bucket. Wurde dein S3-Bucket z. B. in `us-west-2 region` erstellt, sollte dieser Wert `https://s3.us-west-2.amazonaws.com` lauten.

      Weitere Informationen findest du in der AWS-Dokumentation unter [AWS-Dienstendpunkte](https://docs.aws.amazon.com/general/latest/gr/rande.html).

    - **AWS S3-Bucket:** Der Name deines S3-Buckets für {% data variables.product.prodname_registry %}.
    - **AWS S3-Zugriffsschlüssel** und **Geheimer AWS S3-Schlüssel**: Die ID des AWS-Zugriffsschlüssels und der geheime Schlüssel für den Zugriff auf deinen Bucket.

      Weitere Informationen zur Verwaltung von AWS-Zugriffsschlüsseln findest du in der [Dokumentation zu AWS Identity and Access Management](https://docs.aws.amazon.com/iam/index.html).

    ![Eingabefelder für Details deines AWS S3-Buckets](/assets/images/help/package-registry/s3-aws-storage-bucket-details.png) {% endif %} {% data reusables.enterprise_management_console.save-settings %}

## Nächste Schritte

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}

---
title: "Aktivieren von GitHub Actions mit Amazon\_S3-Speicher"
intro: 'Du kannst {% data variables.product.prodname_actions %} auf {% data variables.product.prodname_ghe_server %} aktivieren und Amazon S3 zum Speichern von Daten verwenden, die durch Workflowausführungen generiert wurden.'
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
  - /admin/github-actions/enabling-github-actions-with-amazon-s3-storage
shortTitle: Amazon S3 storage
ms.openlocfilehash: 23fd8eabe502a6a29610de451cae72542ceca53f
ms.sourcegitcommit: 8f7c8d52755cc3af0f366cc74c6db9e9be4d2ecd
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132648'
---
## Voraussetzungen

{% note %}

**Hinweis:** Die einzigen von {% data variables.product.prodname_dotcom %} unterstützten S3-Speicheranbieter sind Amazon S3 und MinIO Gateway für NAS.

{% data reusables.actions.enterprise-s3-tech-partners %}

{% endnote %}

Stelle vor dem Aktivieren von {% data variables.product.prodname_actions %} sicher, dass du die folgenden Schritte ausgeführt hast:

* Erstelle deinen Amazon S3-Bucket zum Speichern von Daten, die von Workflowausführungen generiert werden. {% indented_data_reference reusables.actions.enterprise-s3-permission spaces=2 %}
  
{% data reusables.actions.enterprise-common-prereqs %}

## Aktivieren von {% data variables.product.prodname_actions %} mit dem Amazon S3-Speicher

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. Wähle unter "Artefakt- und Protokollspeicher" die Option **Amazon S3** aus, und gib die Details des Speicherbuckets ein:

   * **URL des AWS-Diensts**: Die Dienst-URL für deinen Bucket. Wurde dein S3-Bucket z. B. in der `us-west-2`-Region erstellt, sollte dieser Wert `https://s3.us-west-2.amazonaws.com` lauten.

     Weitere Informationen findest du in der AWS-Dokumentation unter [AWS-Dienstendpunkte](https://docs.aws.amazon.com/general/latest/gr/rande.html).
   * **AWS S3 Bucket**: Der Name deines S3-Buckets.
   * **AWS S3-Zugriffsschlüssel** und **Geheimer AWS S3-Schlüssel**: Die ID des AWS-Zugriffsschlüssels und der geheime Schlüssel für deinen Bucket. Weitere Informationen zur Verwaltung von AWS-Zugriffsschlüsseln findest du in der [Dokumentation zu AWS Identity and Access Management](https://docs.aws.amazon.com/iam/index.html).

   ![Optionsfeld zum Auswählen von Amazon S3 Storage und Felder zur S3-Konfiguration](/assets/images/enterprise/management-console/actions-aws-s3-storage.png) {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}

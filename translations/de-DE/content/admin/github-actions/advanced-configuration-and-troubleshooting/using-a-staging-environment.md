---
title: Verwenden einer Stagingumgebung
intro: 'Erfahre Näheres zur Verwendung von {% data variables.product.prodname_actions %} mit {% data variables.product.prodname_ghe_server %}-Staginginstanzen.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Infrastructure
  - Upgrades
redirect_from:
  - /admin/github-actions/using-a-staging-environment
shortTitle: Use staging environment
ms.openlocfilehash: 3d244d25aae5a6e21b4db1cd04352343d6650975
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106823'
---
## Informationen zu Stagingumgebungen für {% data variables.product.product_name %}

Eine Staging- oder Testumgebung für {% data variables.product.product_location %} kann nützlich sein, damit du Aktualisierungen oder neue Funktionen testen kannst, bevor du sie in deiner Produktionsumgebung implementierst. Weitere Informationen findest du unter [Einrichten einer Staginginstanz](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance).

## Verwenden einer Stagingumgebung mit {% data variables.product.prodname_actions %}

Eine gängige Methode zum Erstellen der Stagingumgebung ist die Wiederherstellung eines Backups deiner {% data variables.product.product_name %}-Instanz aus der Produktion auf einer neuen VM in der Stagingumgebung. Wenn du eine Staginginstanz verwendest und die {% data variables.product.prodname_actions %}-Funktionalität testen möchtest, solltest du die Speicherkonfiguration in der Stagingumgebung überprüfen.

Wenn du nach der Wiederherstellung einer {% data variables.product.prodname_ghe_server %}-Sicherung auf der Staginginstanz versuchst, Protokolle oder Artefakte von bestehenden {% data variables.product.prodname_actions %}-Workflowausführungen auf deiner Staginginstanz anzuzeigen, werden `404`-Fehler angezeigt, da diese Daten in deinem Stagingspeicherort fehlen. Um die `404`-Fehler zu umgehen, kannst du Daten aus der Produktion kopieren, um sie in deiner Stagingumgebung zu verwenden.

### Konfigurieren des Speichers

Wenn du eine Stagingumgebung einrichtest, die eine Instanz von {% data variables.product.product_name %} mit aktivierten {% data variables.product.prodname_actions %} enthält, musst du eine andere externe Speicherkonfiguration für die Speicherung von {% data variables.product.prodname_actions %} verwenden als deine Produktionsumgebung.

{% warning %}

**Warnung**: Wenn du die Speicherkonfiguration nicht änderst, kann deine Staginginstanz möglicherweise in denselben externen Speicher schreiben, den du für die Produktion verwendest, was zu Datenverlust führen könnte.

{% endwarning %}

Weitere Informationen zur Speicherkonfiguration für {% data variables.product.prodname_actions %} findest du unter [Erste Schritte mit {% data variables.product.prodname_actions %} für {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#enabling-github-actions-with-your-storage-provider).

### Kopieren von Dateien aus der Produktion in die Stagingphase

Um deine Produktionsumgebung genauer abzubilden, kannst du optional Dateien von deinem Produktionsspeicherort für {% data variables.product.prodname_actions %} in den Stagingspeicherort kopieren.

* Für ein Azure-Speicherkonto kannst du [`azcopy`](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-blobs#copy-all-containers-directories-and-blobs-to-another-storage-account) verwenden. Beispiel:

  ```shell
  azcopy copy 'https://<em>SOURCE-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/<em>SAS-TOKEN</em>' 'https://<em>DESTINATION-STORAGE-ACCOUNT-NAME</em>.blob.core.windows.net/' --recursive
  ```
* Für Amazon S3-Buckets kannst du [`aws s3 sync`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/sync.html) verwenden. Beispiel:

  ```shell
  aws s3 sync s3://<em>SOURCE-BUCKET</em> s3://<em>DESTINATION-BUCKET</em>
  ```

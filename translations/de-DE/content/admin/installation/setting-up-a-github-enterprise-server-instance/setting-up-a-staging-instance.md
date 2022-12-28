---
title: Testinstanz einrichten
intro: 'Du kannst eine {% data variables.product.product_name %}-Instanz in einer separaten, isolierten Umgebung einrichten und diese verwenden, um Änderungen zu überprüfen und zu testen.'
redirect_from:
  - /enterprise/admin/installation/setting-up-a-staging-instance
  - /admin/installation/setting-up-a-staging-instance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Upgrades
shortTitle: Set up a staging instance
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ce7d9dde9f86ea5159657203e13d9d191b6b7466
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106861'
---
## Informationen zu Staginginstanzen

{% data variables.product.company_short %} empfiehlt, dass du eine separate Umgebung zum Testen von Sicherungen, Updates oder Änderungen an der Konfiguration für {% data variables.location.product_location %} einrichtest. Diese Umgebung, die du von deinen Produktionssystemen isolieren solltest, wird als „Stagingumgebung“ bezeichnet.

Beispielsweise kannst du zum Schutz vor Datenverlust die Sicherung deiner Produktionsinstanz regelmäßig überprüfen. Du kannst die Sicherung deiner Produktionsdaten in einer separaten {% data variables.product.product_name %}-Instanz in einer Stagingumgebung regelmäßig wiederherstellen. In dieser Staginginstanz könntest du auch das Upgrade auf das neueste Featurerelease von {% data variables.product.product_name %} testen.

{% tip %}

**Tipp:** Du kannst deine vorhandene {% data variables.product.prodname_enterprise %}-Lizenzdatei wiederverwenden, solange die Staginginstanz nicht in einer Produktionskapazität verwendet wird.

{% endtip %}

## Überlegungen zu einer Stagingumgebung

Wenn du {% data variables.product.product_name %} gründlich testen und eine Umgebung neu erstellen möchtest, die deiner Produktionsumgebung möglichst ähnlich ist, berücksichtige die externen Systeme, die mit deiner Instanz interagieren. Du kannst beispielsweise in deiner Stagingumgebung Folgendes testen.

- Authentifizierung – insbesondere, wenn du einen externen Authentifizierungsanbieter wie SAML verwendest
- Integration in ein externes Ticketsystem,
- Integration in einen CI-Server,
- Externe Skripts oder Software, die die {% data variables.product.prodname_enterprise_api %} verwenden
- externer SMTP-Server für E-Mail-Benachrichtigungen.

## Testinstanz einrichten

Du kannst eine Staginginstanz neu einrichten und so konfigurieren, wie du möchtest. Weitere Informationen findest du unter [Einrichten einer Instanz von {% data variables.product.product_name %}](/admin/installation/setting-up-a-github-enterprise-server-instance) und [Konfigurieren deines Unternehmens](/admin/configuration/configuring-your-enterprise).

Alternativ kannst du eine Staginginstanz erstellen, die deine Produktionskonfiguration widerspiegelt, indem du eine Sicherung deiner Produktionsinstanz in die Staginginstanz wiederherstellst.

1. [Sichere deine Produktionsinstanz](#1-back-up-your-production-instance).
2. [Richte eine Staginginstanz ein](#2-set-up-a-staging-instance).
3. [Konfiguriere {% data variables.product.prodname_actions %}](#3-configure-github-actions).
4. [Konfiguriere {% data variables.product.prodname_registry %}](#4-configure-github-packages).
5. [Stelle deine Produktionssicherung wieder her](#5-restore-your-production-backup).
6. [Überprüfe die Konfiguration der Instanz](#6-review-the-instances-configuration).
7. [Wende die Konfiguration der Instanz an](#7-apply-the-instances-configuration).

### 1. Sichern deiner Produktionsinstanz

Wenn du Änderungen an einer Instanz testen möchtest, die dieselbe Daten und Konfiguration wie deine Produktionsinstanz enthält, sichere die Daten und die Konfiguration aus der Produktionsinstanz mithilfe von {% data variables.product.prodname_enterprise_backup_utilities %}. Weitere Informationen findest du unter [Konfigurieren von Sicherungen auf deiner Appliance](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance).

{% warning %}

**Warnung**: Wenn du {% data variables.product.prodname_actions %} oder {% data variables.product.prodname_registry %} in der Produktion verwendest, enthält deine Sicherung deine Produktionskonfiguration für den externen Speicher. Um potenziellen Datenverlust durch Schreiben in deinen Produktionsspeicher von deiner Staginginstanz zu vermeiden, musst du jedes Feature in den Schritten 3 und 4 konfigurieren, bevor du deine Sicherung wiederherstellst.

{% endwarning %}

### 2. Einrichten einer Staginginstanz

Richte eine neue Instanz ein, die als deine Staging-Umgebung fungiert. Du kannst dieselben Leitfäden zum Bereitstellen und Installieren deiner Testinstanz verwendest, die du für deine Produktionsinstanz verwendest. Weitere Informationen findest du unter [Einrichten einer {% data variables.product.prodname_ghe_server %}-Instanz](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance/).

Wenn du eine Sicherung deiner Produktionsinstanz wiederherstellen möchtest, fahre mit dem nächsten Schritt fort. Alternativ kannst du die Instanz manuell konfigurieren und die folgenden Schritte überspringen.

### 3. Konfigurieren von {% data variables.product.prodname_actions %}

Wenn du {% data variables.product.prodname_actions %} auf deiner Produktionsinstanz verwendest, konfiguriere optional das Feature auf der Staginginstanz vor dem Wiederherstellen deiner Produktionssicherung. Wenn du {% data variables.product.prodname_actions %} nicht verwendest, fahre bei [4. Konfigurieren von {% data variables.product.prodname_registry %}](#4-configure-github-packages) fort.

{% warning %}

**Warnung**: Wenn du {% data variables.product.prodname_actions %} auf der Staginginstanz vor dem Wiederherstellen deiner Produktionssicherung nicht konfigurierst, verwendet deine Staginginstanz den externen Speicher deiner Produktionsinstanz. Dies kann zu Datenverlust führen. Es wird dringend empfohlen, einen anderen externen Speicher für deine Staginginstanz zu verwenden. Weitere Informationen findest du unter „[Verwenden einer Stagingumgebung](/admin/github-actions/advanced-configuration-and-troubleshooting/using-a-staging-environment)“.

{% endwarning %}

{% data reusables.enterprise_installation.ssh-into-staging-instance %}
1. Um die Staginginstanz zum Verwenden eines externen Speicheranbieters für {% data variables.product.prodname_actions %} zu konfigurieren, gib einen der folgenden Befehlen ein.
{% indented_data_reference reusables.actions.configure-storage-provider-platform-commands spaces=3 %} {% data reusables.actions.configure-storage-provider %}
1. Gib den folgenden Befehl zum Vorbereiten auf das Aktivieren von {% data variables.product.prodname_actions %} auf der Staginginstanz ein.

   ```shell{:copy}
   ghe-config app.actions.enabled true
   ```

### 4. Konfigurieren von {% data variables.product.prodname_registry %}

Wenn du {% data variables.product.prodname_registry %} auf deiner Produktionsinstanz verwendest, konfiguriere optional das Feature auf der Staginginstanz vor dem Wiederherstellen deiner Produktionssicherung. Wenn du {% data variables.product.prodname_registry %} nicht verwendest, fahre bei [5. Wiederherstellen deiner Produktionssicherung](#5-restore-your-production-backup) fort.

{% warning %}

**Warnung**: Wenn du {% data variables.product.prodname_registry %} auf der Staginginstanz vor dem Wiederherstellen deiner Produktionssicherung nicht konfigurierst, verwendet deine Staginginstanz den externen Speicher deiner Produktionsinstanz. Dies kann zu Datenverlust führen. Es wird dringend empfohlen, einen anderen externen Speicher für deine Staginginstanz zu verwenden.

{% endwarning %}

1. Überprüfe die Sicherung, die du in der Staginginstanz wiederherstellst.
   - Wenn du die Sicherung mit {% data variables.product.prodname_enterprise_backup_utilities %} 3.5 oder höher durchgeführt hast, enthält sie die Konfiguration für {% data variables.product.prodname_registry %}. Fahren Sie mit dem nächsten Schritt fort.
   - Wenn du die Sicherung mit {% data variables.product.prodname_enterprise_backup_utilities %} 3.4 oder früher durchgeführt hast, konfiguriere {% data variables.product.prodname_registry %} auf der Staginginstanz. Weitere Informationen findest du unter [Erste Schritte mit {% data variables.product.prodname_registry %} für dein Unternehmen](/admin/packages/getting-started-with-github-packages-for-your-enterprise).
{% data reusables.enterprise_installation.ssh-into-staging-instance %}
1. Konfiguriere die externe Speicherverbindung, indem du die folgenden Befehle eingibst und die Platzhalterwerte durch tatsächliche Werte für deine Verbindung ersetzt.
   - Azure Blob Storage:

     ```shell{:copy}
     ghe-config secrets.packages.blob-storage-type "azure"
     ghe-config secrets.packages.azure-container-name "AZURE CONTAINER NAME"
     ghe-config secrets.packages.azure-connection-string "CONNECTION STRING"
     ```
   - Amazon S3:

     ```shell{:copy}
     ghe-config secrets.packages.blob-storage-type "s3"
     ghe-config secrets.packages.service-url "S3 SERVICE URL"
     ghe-config secrets.packages.s3-bucket "S3 BUCKET NAME"
     ghe-config secrets.packages.aws-access-key "S3 ACCESS KEY ID"
     ghe-config secrets.packages.aws-secret-key "S3 ACCESS SECRET"
     ```
1. Gib den folgenden Befehl zum Vorbereiten auf das Aktivieren von {% data variables.product.prodname_registry %} auf der Staginginstanz ein.

   ```shell{:copy}
   ghe-config app.packages.enabled true
   ```

### 5. Wiederherstellen deiner Produktionssicherung

Verwende den Befehl `ghe-restore`, um die restlichen Daten aus der Sicherung wiederherzustellen. Weitere Informationen findest du unter [Wiederherstellen einer Sicherung](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup).

Wenn die Staginginstanz bereits konfiguriert ist und du Einstellungs-, Zertifikats- und Lizenzdaten überschreiben möchtest, füge dem Befehl die Option `-c` hinzu. Weitere Informationen zu dieser Option findest du unter [Verwenden der Sicherung und Wiederherstellen von Befehlen](https://github.com/github/backup-utils/blob/master/docs/usage.md#restoring-settings-tls-certificate-and-license) in der Dokumentation zu {% data variables.product.prodname_enterprise_backup_utilities %}.

### 6. Überprüfen der Konfiguration der Instanz

Um mithilfe desselben Hostnamen auf die Staginginstanz zuzugreifen, aktualisiere deine lokale Hostdatei, um den Hostnamen der Staginginstanz nach IP-Adresse aufzulösen. Bearbeite dazu die Datei `/etc/hosts` in macOS oder Linux oder die Datei `C:\Windows\system32\drivers\etc` in Windows.

{% note %}

**Hinweis**: Zugriff auf deine Staginginstanz muss von demselben Hostnamen möglich sein wie auch auf deine Produktionsinstanz. Das Ändern des Hostnamens für {% data variables.location.product_location %} wird nicht unterstützt. Weitere Informationen findest Du unter „[Konfigurieren eines Hosznamens](/admin/configuration/configuring-network-settings/configuring-a-hostname)“.

{% endnote %}

Überprüfe dann die Konfiguration der Staginginstanz auf der {% data variables.enterprise.management_console %}. Weitere Informationen findest du unter [Zugreifen auf die {% data variables.enterprise.management_console %}](/admin/configuration/configuring-your-enterprise/accessing-the-management-console).

{% warning %}

**Warnung**: Wenn du {% data variables.product.prodname_actions %} oder {% data variables.product.prodname_registry %} für die Staginginstanz konfiguriert hast, stelle sicher, dass die Konfiguration für den externen Speicher in der {% data variables.enterprise.management_console %} nicht mit deiner Produktionsinstanz übereinstimmt, sodass das Überschreiben von Produktionsdaten vermieden wird.

{% endwarning %}

### 7. Anwenden der Konfiguration der Instanz

Zum Anwenden der Konfiguration aus der {% data variables.enterprise.management_console %}, klicke auf **Einstellungen speichern**.

## Weitere Informationsquellen

- „[Informationen zu Upgrades auf neue Releases](/admin/overview/about-upgrades-to-new-releases)“

---
title: Providing data to GitHub Support (Bereitstellen von Daten für GitHub Support)
intro: 'Da der {% data variables.contact.github_support %} keinen Zugriff auf deine Umgebung hat, benötigen wir unter Umständen einige zusätzliche Informationen von dir.'
shortTitle: Providing data
versions:
  ghes: '*'
redirect_from:
  - /enterprise/admin/guides/installation/troubleshooting
  - /enterprise/admin/articles/support-bundles
  - /enterprise/admin/guides/enterprise-support/providing-data-to-github-enterprise-support
  - /enterprise/admin/enterprise-support/providing-data-to-github-support
  - /admin/enterprise-support/providing-data-to-github-support
  - /admin/enterprise-support/receiving-help-from-github-support/providing-data-to-github-support
topics:
  - Support
ms.openlocfilehash: 56a90a9449a92577d08e068095e5b0dc5b443bb2
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '146331912'
---
## Informationen zu Diagnosedateien und Supportbundles

{% data variables.contact.github_support %} kann dich bitten, zusätzliche Daten in Form von bereinigten Protokolldateien bereitzustellen. Es gibt drei Arten von Protokolldateien, die du möglicherweise angeben sollst.

Diagnosedateien enthalten Informationen zu den Einstellungen und Umgebungen einer {% data variables.product.prodname_ghe_server %}-Instanz, Supportbundles enthalten Diagnosen und Protokolle der letzten zwei Tage, und erweiterte Supportbundles enthalten auch Diagnose- und Protokolle, aber aus den letzten sieben Tagen.

## Informationen zur Protokolldateibereinigung

Authentifizierungstoken, Schlüssel und Geheimnisse werden aus Protokolldateien in den folgenden Protokollverzeichnissen entfernt, die in einer Supportbundle- oder Diagnosedatei enthalten sind:

* `alambic-logs`
* `babeld-logs`
* `codeload-logs`
* `enterprise-manage-logs`
* `github-logs`
* `hookshot-logs`
* `lfs-server-logs`
* `semiotic-logs`
* `task-dispatcher-logs`
* `pages-logs`
* `registry-logs`
* `render-logs`
* `svn-bridge-logs`

## Diagnosedateien erstellen und freigeben

Diagnosedateien stellen eine Übersicht der Einstellungen und Umgebung einer {% data variables.product.prodname_ghe_server %}-Instanz dar, die Folgendes enthält:

- Kundenlizenz-Informationen, einschließlich Firmenname, Ablaufdatum und Anzahl der Benutzerlizenzen
- Versionsnummern und SHAs
- VM-Architektur
- Hostname, Privatmodus, SSL-Einstellungen
- Lade- und Prozessauflistungen
- Netzwerkeinstellungen
- Authentifizierungsmethode und -details
- Anzahl der Repositorys, Benutzer und andere Installationsdaten

Du kannst die Diagnose für deine Instanz über die {% data variables.enterprise.management_console %} oder durch Ausführen des Befehlszeilenprogramms `ghe-diagnostics` herunterladen.

### Diagnosedatei über die {% data variables.enterprise.management_console %} erstellen

Du kannst diese Methode verwenden, wenn du deinen SSH-Schlüssel nicht zur Hand hast.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %} {% data reusables.enterprise_management_console.support-link %}
5. Klicke auf **Diagnoseinformationen herunterladen**.

### Diagnosedatei mithilfe von SSH erstellen

Du kannst diese Methode verwenden, ohne sich bei der {% data variables.enterprise.management_console %} anzumelden.

Verwende das Befehlszeilenprogramm [ghe-diagnostics](/enterprise/admin/guides/installation/command-line-utilities#ghe-diagnostics), um die Diagnose für deine Instanz abzurufen.

```shell
$ ssh -p122 admin@<em>hostname</em> -- 'ghe-diagnostics' > diagnostics.txt
```

## Support-Bundles erstellen und freigeben

Nachdem du deine Supportanfrage eingereicht hast, können wir Dich bitten, unserem Team ein Support-Paket bereitzustellen. Das Support-Bundle ist ein als .gzip komprimiertes TAR-Archiv, das Diagnosen und wichtige Protokolle deiner Instanz enthält, z. B.:

- authentifizierungsbezogene Protokolle, die bei der Behebung von Authentifizierungsfehlern oder der Konfiguration von LDAP, CAS oder SAML hilfreich sein können,
- {% data variables.enterprise.management_console %}-Protokoll,
- `github-logs/exceptions.log`: Informationen zu 500 Fehlern auf der Website
- `github-logs/audit.log`: {% data variables.product.prodname_ghe_server %}-Auditprotokolle
- `babeld-logs/babeld.log`: Git-Proxyprotokolle
- `system-logs/haproxy.log`: HAProxy-Protokolle
- `elasticsearch-logs/github-enterprise.log`: Elasticsearch-Protokolle
- `configuration-logs/ghe-config.log`: {% data variables.product.prodname_ghe_server %}-Konfigurationsprotokolle
- `collectd/logs/collectd.log`: Collectd-Protokolle
- `mail-logs/mail.log`: SMTP-E-Mail-Übermittlungsprotokolle

Weitere Informationen findest du unter [Informationen zum Überwachungsprotokoll für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise).

Support-Bundles enthalten Protokolle der letzten zwei Tage. Um Protokolle der letzten sieben Tage abzurufen, kannst du ein erweitertes Support-Bundle herunterladen. Weitere Informationen findest du unter [Erstellen und Freigeben erweiterter Supportbundles](#creating-and-sharing-extended-support-bundles).

{% tip %}

**Tipp:** Wenn du den {% data variables.contact.github_support %} kontaktierst, erhältst du eine Bestätigungs-E-Mail mit einem Ticket-Referenzlink. Wenn der {% data variables.contact.github_support %} dich bittet, ein Support-Bundle hochzuladen, kannst du dazu den Ticket-Referenzlink verwenden.

{% endtip %}

### Support-Bundle über die {% data variables.enterprise.management_console %} erstellen

Mit diesen Schritten kannst du ein Support-Bundle erstellen und freigeben, wenn du auf die webbasierte {% data variables.enterprise.management_console %} zugreifen kannst und einen ausgehenden Internetzugang hast.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %} {% data reusables.enterprise_management_console.support-link %}
5. Klicke auf **Supportbundle herunterladen**.
{% data reusables.enterprise_enterprise_support.sign-in-to-support %} {% data reusables.enterprise_enterprise_support.upload-support-bundle %}

### Support-Bundle mithilfe von SSH erstellen

Mit diesen Schritten kannst du ein Support-Bundle erstellen und freigeben, wenn du SSH-Zugriff auf {% data variables.product.product_location %} und ausgehenden Internetzugang hast.

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %}

1. Lade das Support-Bundle über SSH herunter:
  ```shell
  $ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -o' > support-bundle.tgz
  ```
  Weitere Informationen zum `ghe-support-bundle`-Befehl findest du unter [Befehlszeilenprogramme](/enterprise/admin/guides/installation/command-line-utilities#ghe-support-bundle).
{% data reusables.enterprise_enterprise_support.sign-in-to-support %} {% data reusables.enterprise_enterprise_support.upload-support-bundle %}

### Ein Support-Paket wird mit deinem Unternehmenskonto hochladen

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
3. Klicke auf der linken Seitenleiste auf **Enterprise-Lizenzierung**.
  ![Screenshot mit dem Link „Enterprise-Lizenzierung“ in der Seitenleiste der Unternehmenskontoeinstellungen](/assets/images/help/enterprises/enterprise-licensing-tab.png)
4. Klicke unter {% data variables.product.prodname_enterprise %}-Hilfe auf **Supportbundle hochladen**.
  ![Screenshot der den Link zum Hochladen eines Supportbundles zeigt](/assets/images/enterprise/support/upload-support-bundle.png)
5. Wähle unter „Select an enterprise account“ (Unternehmenskonto auswählen) das zugehörige Konto des Support-Pakets aus dem Dropdown-Menü aus.
  ![Screenshot des Dropdownmenüs zum Auswählen des Unternehmenskontos des Supportbundles](/assets/images/enterprise/support/support-bundle-account.png)
6. Klicke unter „Hochladen eines Supportbundles für {% data variables.contact.enterprise_support %}“ auf **Datei auswählen**, um dein Supportbundle auszuwählen, oder ziehe alternativ deine Supportbundledatei auf **Datei auswählen**.
  ![Screenshot mit der Schaltfläche „Datei auswählen“, um eine Supportbundledatei hochzuladen](/assets/images/enterprise/support/choose-support-bundle-file.png)
7. Klicken Sie auf **Hochladen**.

### Support-Bundle mithilfe von SSH direkt hochladen

Unter folgenden Voraussetzungen kannst du ein Support-Bundle direkt auf unseren Server hochladen:
- Du hast SSH-Zugriff auf {% data variables.product.product_location %}.
- Ausgehende HTTPS-Verbindungen über TCP-Port 443 sind von {% data variables.product.product_location %} zu _enterprise-bundles.github.com_ und _esbtoolsproduction.blob.core.windows.net_.

1. Lade das Bundle auf unseren Support-Bundle-Server hoch:
  ```shell
  $ ssh -p122 admin@<em>hostname</em> -- 'ghe-support-bundle -u'
  ```

## Erweiterte Support-Bundles erstellen und freigeben

Supportbundles beinhalten Protokolle der letzten zwei Tage, wohingegen _erweiterte_ Supportbundles Protokolle der letzten sieben Tage beinhalten. Wenn die vom {% data variables.contact.github_support %} untersuchten Ereignisse vor mehr als zwei Tagen aufgetreten sind, bitten wir dich möglicherweise, ein erweitertes Support-Bundle bereitzustellen. Du benötigst SSH-Zugriff, um ein erweitertes Bundle herunterzuladen. Du kannst ein erweitertes Bundle nicht über die {% data variables.enterprise.management_console %} herunterladen.

Damit die Pakete nicht zu groß werden, enthalten sie nur Protokolle, die nicht rotiert und komprimiert wurden. Die Protokollrotation unter {% data variables.product.prodname_ghe_server %} erfolgt in verschiedenen Intervallen (täglich oder wöchentlich) für verschiedene Protokolldateien, je nachdem, wie groß die Protokolle schätzungsweise sein werden.

### Erweitertes Support-Bundle mithilfe von SSH erstellen

Mit diesen Schritten kannst du ein erweitertes Supportbundle erstellen und freigeben, wenn du SSH-Zugriff auf {% data variables.product.product_location %} und ausgehenden Internetzugang hast.

1. Lade das erweiterte Supportbundle über SSH herunter, indem du dem `ghe-support-bundle`-Befehl das Flag `-x` hinzufügst:
  ```shell
  $ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -o -x' > support-bundle.tgz
  ```
{% data reusables.enterprise_enterprise_support.sign-in-to-support %} {% data reusables.enterprise_enterprise_support.upload-support-bundle %}

### Erweitertes Support-Bundle mithilfe von SSH direkt hochladen

Unter folgenden Voraussetzungen kannst du ein Support-Bundle direkt auf unseren Server hochladen:
- Du hast SSH-Zugriff auf {% data variables.product.product_location %}.
- Ausgehende HTTPS-Verbindungen über TCP-Port 443 sind von {% data variables.product.product_location %} zu _enterprise-bundles.github.com_ und _esbtoolsproduction.blob.core.windows.net_.

1. Lade das Bundle auf unseren Support-Bundle-Server hoch:
  ```shell
  $ ssh -p122 admin@<em>hostname</em> -- 'ghe-support-bundle -u -x'
  ```

## Weitere Informationsquellen

- [Informationen zum GitHub-Support](/support/learning-about-github-support/about-github-support)
- [Generieren einer Integritätsprüfung für dein Unternehmen](/enterprise-server@latest/admin/enterprise-management/monitoring-your-appliance/generating-a-health-check-for-your-enterprise)

---
title: Verwenden von LDAP
redirect_from:
  - /enterprise/admin/articles/configuring-ldap-authentication
  - /enterprise/admin/articles/about-ldap-authentication
  - /enterprise/admin/articles/viewing-ldap-users
  - /enterprise/admin/hidden/enabling-ldap-sync
  - /enterprise/admin/hidden/ldap-sync
  - /enterprise/admin/user-management/using-ldap
  - /enterprise/admin/authentication/using-ldap
  - /admin/authentication/using-ldap
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-ldap
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-ldap
intro: 'Wenn du das Lightweight Directory Access-Protokoll (LDAP) verwendest, um den Zugriff auf alle Anwendungen zu zentralisieren, kannst du {% data variables.product.product_name %} durch die Konfiguration der LDAP-Authentifizierung für deine Instanz integrieren.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
ms.openlocfilehash: 5d9b6aa9a5d641afa0b24dbe0e0f446ab723c735
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107525'
---
## Informationen zur LDAP-Authentifizierung für {% data variables.product.product_name %}

LDAP ist ein beliebtes Anwendungsprotokoll für den Zugriff auf und die Verwaltung von Verzeichnisinformationsdiensten. Zudem ist es eines der gängigsten Protokolle zur Integration von Drittanbietersoftware in große Benutzerverzeichnisse von Unternehmen. Weitere Informationen findest du unter [Lightweight Directory Access Protocol](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol) auf Wikipedia.

Wenn du ein LDAP-Verzeichnis für die zentralisierte Authentifizierung verwendest, kannst du die LDAP-Authentifizierung für die Personen konfigurieren, die {% data variables.location.product_location %} verwenden.

{% data reusables.enterprise_user_management.built-in-authentication %}

## Unterstützte LDAP-Dienste

{% data variables.product.prodname_ghe_server %} lässt sich in die folgenden LDAP-Dienste integrieren:

* Active Directory
* FreeIPA
* Oracle Directory Server Enterprise Edition
* OpenLDAP
* Open Directory
* 389-ds

## Grundlegendes für Benutzernamen bei LDAP

{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} Weitere Informationen findest du unter [Benutzernamenüberlegungen für die externe Authentifizierung](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication).

## Konfigurieren von LDAP mit {% data variables.location.product_location %}

Nach der Konfiguration von LDAP können sich Benutzer*innen mit ihren LDAP-Anmeldeinformationen bei deiner Instanz anmelden. Wenn sich Benutzer erstmals anmelden, werden ihre Profilnamen, E-Mail-Adressen und SSH-Schlüssel mit den LDAP-Attributen aus deinem Verzeichnis festgelegt.

Wenn du LDAP-Zugriff für Benutzer über die {% data variables.enterprise.management_console %} konfigurierst, werden deine Benutzerlizenzen erst verwendet, sobald sich ein Benutzer bei deiner Instanz zum ersten Mal anmeldet. Wenn du jedoch ein Konto manuell in den Website-Administratoreinstellungen erstellst, wird die Benutzerlizenz sofort gezählt.

{% warning %}

**Warnung:** Vergewissere dich vor dem Konfigurieren von LDAP für {% data variables.location.product_location %}, dass der LDAP-Dienst paginierte Ergebnisse unterstützt.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
3. Wähle unter „Authentication“ (Authentifizierung) die Option **LDAP** aus.
![LDAP-Auswahl](/assets/images/enterprise/management-console/ldap-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %} ![Aktivierung des Kontrollkästchen für integrierte LDAP-Authentifizierung](/assets/images/enterprise/management-console/ldap-built-in-authentication.png)
5. Füge die gewünschten Konfigurationseinstellungen hinzu.

## LDAP-Attribute
Verwende diese Attribute, um die Konfiguration von LDAP für {% data variables.location.product_location %} abzuschließen.

| Attributname           | type     | BESCHREIBUNG |
|--------------------------|----------|-------------|
| `Host`                   | Erforderlich | Der LDAP-Host, z. B. `ldap.example.com` oder `10.0.0.30`. Wenn der Hostname nur über dein internes Netzwerk verfügbar ist, musst du eventuell zuerst den DNS von {% data variables.location.product_location %} konfigurieren, damit er den Hostnamen über deine internen Namenserver auflösen kann. |
| `Port`                   | Erforderlich | Der Port, der von den LDAP-Diensten des Hosts überwacht wird. Beispiele: 389 und 636 (für LDAPS). |
| `Encryption`             | Erforderlich | Die Verschlüsselungsmethode, die verwendet wird, um Kommunikationen zum LDAP-Server zu schützen. Dazu zählen beispielsweise Nur-Text (keine Verschlüsselung), SSL/LDAPS (von Anfang an verschlüsselt) und StartTLS (Upgrade auf verschlüsselte Kommunikation nach dem Herstellen der Verbindung). |
| `Domain search user`     | Optional | Der LDAP-Benutzer, der nach anderen Benutzern sucht, die sich anmelden, um die Authentifizierung zuzulassen. In der Regel handelt es sich dabei um ein Dienstkonto, das speziell für Drittanbieterintegrationen erstellt wird. Verwende einen vollqualifizierten Namen wie `cn=Administrator,cn=Users,dc=Example,dc=com`. Mit Active Directory kannst du auch die `[DOMAIN]\[USERNAME]`-Syntax (z. B. `WINDOWS\Administrator`) für den Benutzer der Domänensuche mit Active Directory verwenden. |
| `Domain search password` | Optional | Das Passwort für den Benutzer der Domain-Suche. |
| `Administrators group`   | Optional | Benutzer*innen in dieser Gruppe werden auf Websiteadministrator*innen hochgestuft, wenn sie sich bei deiner Appliance anmelden. Wenn du keine Gruppe für LDAP-Administratoren konfigurierst, wird das erste LDAP-Benutzerkonto, das sich bei deiner Appliance anmeldet, automatisch auf einen Websiteadministrator hochgestuft. |
| `Domain base`            | Erforderlich | Der vollqualifizierte `Distinguished Name` (DN) einer LDAP-Unterstruktur, die du nach Benutzern und Gruppen durchsuchen möchtest. Du kannst beliebig viele hinzufügen. Jede Gruppe muss jedoch in derselben Domain-Basis definiert sein wie die zugehörigen Benutzer. Wenn du eingeschränkte Benutzergruppen angibst, befinden sich nur die diesen Gruppen zugehörigen Benutzer im Geltungsbereich. Zum Steuern des Zugriffs solltest du die oberste Ebene deiner LDAP-Verzeichnisstruktur als deine Domain-Basis angeben und eingeschränkte Benutzergruppen verwenden. |
| `Restricted user groups` | Optional | Wenn diese Option angegeben ist, können sich nur die Benutzer dieser Gruppen anmelden. Du musst nur die allgemeinen Namen (Common Names, CNs) der Gruppen angeben. Zudem kannst du beliebig viele Gruppen hinzufügen. Sind keine Gruppen angegeben, können sich *alle* Benutzer im Bereich der angegebenen Domänenbasis bei deiner {% data variables.product.prodname_ghe_server %}-Instanz anmelden. |
| `User ID`                | Erforderlich | Das LDAP-Attribut, das den LDAP-Benutzer identifiziert, der versucht, sich zu authentifizieren. Nach dem Herstellen einer Zuordnung können Benutzer ihre {% data variables.product.prodname_ghe_server %}-Benutzernamen ändern. Dieses Feld sollte für die meisten Active Directory-Installationen auf `sAMAccountName` festgelegt sein, kann aber für andere LDAP-Lösungen wie OpenLDAP auf `uid` festgelegt sein. Standardwert: `uid`. |
| `Profile name`           | Optional | Der Name, der auf der {% data variables.product.prodname_ghe_server %}-Profilseite des Benutzers angezeigt wird. Sofern die LDAP-Synchronisierung nicht aktiviert ist, können Benutzer ihre Profilnamen ändern. |
| `Emails`                 | Optional | Die E-Mail-Adressen für das {% data variables.product.prodname_ghe_server %}-Konto eines Benutzers. |
| `SSH keys`               | Optional | Die öffentlichen SSH-Schlüssel, die an das {% data variables.product.prodname_ghe_server %}-Konto eines Benutzers angehängt sind. Die Schlüssel müssen im OpenSSH-Format vorliegen. |
| `GPG keys`               | Optional | Die GPG-Schlüssel, die an das {% data variables.product.prodname_ghe_server %}-Konto eines Benutzers angehängt sind. |
| `Disable LDAP authentication for Git operations` | Optional |Wenn ausgewählt, wird die Möglichkeit der Benutzer [deaktiviert](#disabling-password-authentication-for-git-operations), LDAP-Kennwörter zum Authentifizieren von Git-Vorgängen zu verwenden. |
| `Enable LDAP certificate verification` | Optional |Wenn ausgewählt, wird die LDAP-Zertifikatüberprüfung [aktiviert](#enabling-ldap-certificate-verification). |
| `Synchronization` | Optional |Wenn ausgewählt, wird die LDAP-Synchronisierung [aktiviert](#enabling-ldap-sync). |

### Passwortauthentifizierung für Git-Vorgänge deaktivieren

Wähle in deinen LDAP-Einstellungen die Option **Authentifizierung mit Benutzername und Kennwort für Git-Vorgänge deaktivieren**, um die Verwendung von {% data variables.product.pat_generic %} oder SSH-Schlüsseln für den Git-Zugriff zu erzwingen. Dies kann dazu beitragen, dass dein Server nicht durch LDAP-Authentifizierungsanforderungen überlastet wird. Diese Einstellung wird empfohlen, da ein langsam reagierender LDAP-Server, insbesondere in Kombination mit einer Vielzahl an Anforderungen (infolge des automatischen Abrufens) häufig für Leistungsprobleme und Ausfälle verantwortlich ist.

![Kontrollkästchen zum Deaktivieren der LDAP-Passwortauthentifizierung für Git](/assets/images/enterprise/management-console/ldap-disable-password-auth-for-git.png)

Wenn ein Benutzer versucht, ein Kennwort für Git-Vorgänge über die Befehlszeile zu verwenden, wird bei Auswahl dieser Option eine Fehlermeldung mit folgendem Wortlaut angezeigt: `Password authentication is not allowed for Git operations. You must use a {% data variables.product.pat_generic %}.`

### LDAP-Zertifikatsverifizierung aktivieren

Wähle **Enable LDAP certificate verification** (LDAP-Zertifikatüberprüfung aktivieren) in den LDAP-Einstellungen aus, um das von dir verwendete LDAP-Serverzertifikat mit TLS zu überprüfen.

![Feld für die LDAP-Zertifikatsverifizierung](/assets/images/enterprise/management-console/ldap-enable-certificate-verification.png)

Wenn diese Option ausgewählt ist, wird das Zertifikat validiert, um Folgendes sicherzustellen:
- Wenn das Zertifikat mindestens einen Subject Alternative Name (SAN) enthält, stimmt einer der SANs mit dem LDAP-Hostnamen überein. Andernfalls stimmt der allgemeine Name (Common Name, CN) mit dem LDAP-Hostnamen überein.
- Das Zertifikat ist nicht abgelaufen.
- Das Zertifikat wurde von einer vertrauenswürdigen Zertifizierungsstelle (CA) signiert.

### LDAP-Synchronisierung aktivieren

{% note %}

**Hinweis:** Teams, die LDAP-Synchronisierung verwenden, sind auf maximal 1499 Mitglieder beschränkt.

{% endnote %}

Mithilfe der LDAP-Synchronisierung kannst du {% data variables.product.prodname_ghe_server %}-Benutzer und die -Teammitgliedschaft mit deinen festgelegten LDAP-Gruppen synchronisieren. Dadurch kannst du eine rollenbasierte Zugriffskontrolle (Role-Based Access Control, RBAC) für Benutzer von deinem LDAP-Server aus einrichten, anstatt manuell innerhalb von {% data variables.product.prodname_ghe_server %}. Weitere Informationen findest du unter [Erstellen von Teams](/enterprise/admin/guides/user-management/creating-teams#creating-teams-with-ldap-sync-enabled).

Wähle zum Aktivieren der LDAP-Synchronisierung in den LDAP-Einstellungen die Option **Synchronize Emails** (E-Mails synchronisieren), **Synchronize SSH Keys** (SSH-Schlüssel synchronisieren) oder **Synchronize GPG Keys** (GPG-Schlüssel synchronisieren) aus.

![Kontrollkästchen für die Synchronisierung](/assets/images/enterprise/management-console/ldap-synchronize.png)

Nach der Aktivierung der LDAP-Synchronisierung wird ein Synchronisierungsauftrag entsprechend dem angegebenen Zeitintervall ausgeführt, um die folgenden Vorgänge in jedem Benutzerkonto durchzuführen:

- Wenn du die integrierte Authentifizierung für Benutzer außerhalb deines Identity Providers erlaubt hast und der Benutzer die integrierte Authentifizierung verwendet, kannst du zum nächsten Benutzer wechseln.
- Wenn für den Benutzer keine LDAP-Zuordnung vorliegt, solltest du versuchen, den Benutzer einem LDAP-Eintrag im Verzeichnis zuzuordnen. Wenn es nicht möglich ist, den Benutzer einem LDAP-Eintrag zuzuordnen, sperre den Benutzer, und wechsle zum nächsten Benutzer.
- Wenn eine LDAP-Zuordnung vorliegt, der entsprechende LDAP-Eintrag im Verzeichnis jedoch fehlt, sperre den Benutzer, und wechsle zum nächsten Benutzer.
- Wenn der entsprechende LDAP-Eintrag als deaktiviert markiert wurde und der Benutzer nicht bereits gesperrt ist, sperre den Benutzer, und wechsle zum nächsten Benutzer.
- Wenn der entsprechende LDAP-Eintrag nicht als deaktiviert markiert ist, der Benutzer gesperrt ist und _Reactivate suspended users_ (Gesperrte Benutzer erneut aktivieren) im Admin Center aktiviert ist, entsperre den Benutzer.
- Sperre den Benutzer, wenn Benutzergruppen mit eingeschränktem Zugriff in der Instanz konfiguriert sind und sich der entsprechende LDAP-Eintrag nicht in einer dieser Gruppen befindet.
- Entsperre den Benutzer, wenn Benutzergruppen mit eingeschränktem Zugriff in der Instanz konfiguriert sind, wenn sich der entsprechende LDAP-Eintrag in einer dieser Gruppen befindet und wenn _Reactivate suspended users_ (Gesperrte Benutzer erneut aktivieren) im Admin Center aktiviert ist.
- Wenn der entsprechende LDAP-Eintrag das Attribut `name` enthält, aktualisiere den Profilnamen des Benutzers.
- Wenn sich der entsprechende LDAP-Eintrag in der Gruppe „Administrators“ (Administratoren) befindet, stufe den Benutzer auf einen Websiteadministrator hoch.
- Wenn sich der entsprechende LDAP-Eintrag nicht in der Gruppe „Administrators“ (Administratoren) befindet, stufe den Benutzer auf ein normales Konto zurück.
- Wenn das Feld „LDAP User“ (LDAP-Benutzer) für E-Mails festgelegt ist, synchronisiere die E-Mail-Einstellungen des Benutzers mit dem LDAP-Eintrag. Lege den ersten LDAP-`mail`-Eintrag als primäre E-Mail-Adresse fest.
- Wenn das Feld „LDAP User“ (LDAP-Benutzer) für öffentliche SSH-Schlüssel festgelegt ist, synchronisiere die öffentlichen SSH-Schlüssel des Benutzers mit dem LDAP-Eintrag.  
- Wenn das Feld „LDAP User“ (LDAP-Benutzer) für GPG-Schlüssel festgelegt ist, synchronisiere die GPG-Schlüssel des Benutzers mit dem LDAP-Eintrag.  

{% note %}

**Hinweis**: LDAP-Einträge können nur als deaktiviert gekennzeichnet werden, wenn du Active Directory verwendest und das Attribut `userAccountControl` vorhanden und mit `ACCOUNTDISABLE` gekennzeichnet ist. Einige Varianten von Active Directory, z. B. AD LDS und ADAM, unterstützen das Attribut `userAccountControl` nicht.

{% endnote %}

Darüber hinaus wird ein Synchronisierungsauftrag im angegebenen Zeitintervall ausgeführt, um die folgenden Aktionen für jedes Team durchzuführen, das einer LDAP-Gruppe zugeordnet wurde:

- Wenn die entsprechende LDAP-Gruppe eines Teams entfernt wurde, entferne alle Mitglieder aus dem Team.
- Wenn Einträge von LDAP-Mitgliedern aus der LDAP-Gruppe entfernt wurden, entferne die entsprechenden Benutzer aus dem Team. Wenn der Benutzer nicht länger Mitglied eines Teams in der Organisation und kein Organisationsbesitzer ist, entferne den Benutzer aus der Organisation. Wenn der Benutzer den Zugriff auf die Repositorys verloren hat, lösche die privaten Forks, die der Benutzer für diese Repositorys besitzt.

  {% note %}

  **Hinweis:** Bei der LDAP-Synchronisierung wird ein Benutzer nicht aus einer Organisation entfernt, wenn der Benutzer ein Organisationsbesitzer ist. Stattdessen muss ein anderer Organisationsbesitzer den Benutzer manuell entfernen.

  {% endnote %}
- Wenn die LDAP-Mitgliedereinträge zur LDAP-Gruppe hinzugefügt wurden, füge die entsprechenden Benutzer dem Team hinzu. Wenn der Benutzer den Zugriff auf Repositorys zurückerlangt, solltest du die privaten Forks der Repositorys wiederherstellen, die gelöscht wurden, weil der Benutzer den Zugriff in den vergangenen 90 Tagen verloren hat.

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% warning %}

**Sicherheitswarnung:**

Wenn die LDAP-Synchronisierung aktiviert ist, können Websiteadministratoren und Organisationsinhaber das LDAP-Verzeichnis nach Gruppen durchsuchen, um sie dem Team zuzuordnen.

Dadurch können sensible Organisationsinformationen potenziell Vertragsnehmern oder anderen nicht privilegierten Benutzern offengelegt werden, darunter

- die Verfügbarkeit von spezifischen LDAP-Gruppen, die für den *Benutzer der Domänensuche* sichtbar sind,
- Mitglieder der LDAP-Gruppe, die über {% data variables.product.prodname_ghe_server %}-Benutzerkonten verfügen, die beim Erstellen eines Teams offengelegt werden, das mit dieser LDAP-Gruppe synchronisiert ist.

Wenn die Offenlegung solcher Informationen nicht gewünscht wird, sollte dein Unternehmen oder deine Organisation in der Administratorkonsole die Berechtigungen des konfigurierten *Benutzers der Domänensuche* einschränken. Ist eine solche Einschränkung nicht möglich, wende dich an {% data variables.contact.contact_ent_support %}.

{% endwarning %}

### Unterstützte LDAP-Gruppenobjektklassen

{% data variables.product.prodname_ghe_server %} unterstützt die folgenden LDAP-Gruppenobjektklassen. Gruppen können verschachtelt werden.

- `group`
- `groupOfNames`
- `groupOfUniqueNames`
- `posixGroup`

## LDAP-Benutzer anzeigen und erstellen

Du kannst die vollständige Liste der LDAP-Benutzer anzeigen, die Zugriff auf deine Instanz besitzen, und neue Benutzer bereitstellen.

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %}
3. Klicke auf der linken Randleiste auf **LDAP users** (LDAP-Benutzer).
![Registerkarte „LDAP users“ (LDAP-Benutzer)](/assets/images/enterprise/site-admin-settings/ldap-users-tab.png)
4. Gib zum Suchen nach einem Benutzer einen vollständigen oder einen Teil von einem Benutzernamen ein, und klicke auf **Search** (Suchen). Die vorhandenen Benutzer werden in den Suchergebnissen angezeigt. Wenn ein Benutzer nicht vorhanden ist, klicke auf **Create** (Erstellen), um das neue Benutzerkonto bereitzustellen.
![LDAP-Suche](/assets/images/enterprise/site-admin-settings/ldap-users-search.jpg)

## LDAP-Konten aktualisieren

Nur wenn die [LDAP-Synchronisierung aktiviert ist](#enabling-ldap-sync), werden Änderungen an LDAP-Konten automatisch mit {% data variables.product.prodname_ghe_server %} synchronisiert.

* Zum Verwenden einer neuen LDAP-Administratorgruppe müssen die Benutzer manuell auf {% data variables.product.prodname_ghe_server %} hoch- und zurückgestuft werden, um die Änderungen in LDAP zu berücksichtigen.
* Zum Hinzufügen oder Entfernen von LDAP-Konten in LDAP-Administratorgruppen [stufst du die Konten auf {% data variables.product.prodname_ghe_server %} höher oder tiefer](/enterprise/admin/guides/user-management/promoting-or-demoting-a-site-administrator).
* Zum Entfernen von LDAP-Konten [sperrst du die {% data variables.product.prodname_ghe_server %}-Konten](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users).

### LDAP-Konten manuell synchronisieren

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user %} {% data reusables.enterprise_site_admin_settings.click-user %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Klicke unter „LDAP“ auf **Sync now** (Jetzt synchronisieren), um das Konto manuell mit Daten aus deinem LDAP-Server zu aktualisieren.
![Schaltfläche „Sync now“ (Jetzt synchronisieren) für LDAP](/assets/images/enterprise/site-admin-settings/ldap-sync-now-button.png)

Du kannst auch [die API verwenden, um eine manuelle Synchronisierung auszulösen](/enterprise/user/rest/reference/enterprise-admin#ldap).

## Widerrufen des Zugriffs auf {% data variables.location.product_location %}

Wenn die [LDAP-Synchronisierung aktiviert ist](#enabling-ldap-sync), wird durch das Entfernen der LDAP-Anmeldeinformationen eines Benutzers das Konto des Benutzers nach der nächsten Synchronisierungsausführung gesperrt.

Bei **nicht** aktivierter LDAP-Synchronisierung musst du das {% data variables.product.prodname_ghe_server %}-Konto nach dem Entfernen der LDAP-Anmeldeinformationen manuell sperren. Weitere Informationen findest du unter [Sperren und Entsperren von Benutzern](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users).

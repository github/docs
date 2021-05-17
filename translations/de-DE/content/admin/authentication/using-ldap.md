---
title: LDAP verwenden
redirect_from:
  - /enterprise/admin/articles/configuring-ldap-authentication/
  - /enterprise/admin/articles/about-ldap-authentication/
  - /enterprise/admin/articles/viewing-ldap-users/
  - /enterprise/admin/hidden/enabling-ldap-sync/
  - /enterprise/admin/hidden/ldap-sync/
  - /enterprise/admin/user-management/using-ldap
  - /enterprise/admin/authentication/using-ldap
intro: 'Mithilfe von LDAP können Sie {% data variables.product.prodname_ghe_server %} bei Ihren vorhandenen Konten authentifizieren und den Zugriff auf Repositorys zentral verwalten. LDAP ist ein beliebtes Anwendungsprotokoll für den Zugriff auf und die Verwaltung von Verzeichnisinformationsdiensten. Zudem ist es eines der gängigsten Protokolle zur Integration von Drittanbietersoftware in große Benutzerverzeichnisse von Unternehmen.'
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

{% data reusables.enterprise_user_management.built-in-authentication %}

### Unterstützte LDAP-Dienste

{% data variables.product.prodname_ghe_server %} lässt sich in die folgenden LDAP-Dienste integrieren:

* Active Directory
* FreeIPA
* Oracle Directory Server Enterprise Edition
* OpenLDAP
* Open Directory
* 389-ds

### Grundlegendes für Benutzernamen bei LDAP

{% data reusables.enterprise_management_console.username_normalization %}

{% data reusables.enterprise_management_console.username_normalization_sample %}

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.2fa_is_available %}

### LDAP für {% data variables.product.product_location %} konfigurieren

Nach der Konfiguration von LDAP können sich Benutzer mit ihren LDAP-Anmeldeinformationen bei Ihrer Instanz anmelden. Wenn sich Benutzer erstmals anmelden, werden ihre Profilnamen, E-Mail-Adressen und SSH-Schlüssel mit den LDAP-Attributen aus Ihrem Verzeichnis festgelegt.

Wenn Du LDAP-Zugriff für Benutzer über die {% data variables.enterprise.management_console %} konfigurierst, werden Deine Benutzerlizenzen erst verwendet, sobald sich ein Benutzer bei Deiner Instanz zum ersten Mal anmeldet. Wenn Du jedoch ein Konto manuell in den Website-Administratoreinstellungen erstellst, wird die Benutzerlizenz sofort gezählt.

{% warning %}

**Warnung:** Stellen Sie sicher, dass Ihr LDAP-Dienst seitenweise Ergebnisse unterstützt, bevor Sie LDAP auf {% data variables.product.product_location %} konfigurieren.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
3. Wählen Sie **LDAP** unter „Authentication“ (Authentifizierung) aus. ![LDAP-Auswahl](/assets/images/enterprise/management-console/ldap-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %} ![Aktivierung des Kontrollkästchen für integrierte LDAP-Authentifizierung](/assets/images/enterprise/management-console/ldap-built-in-authentication.png)
5. Fügen Sie die gewünschten Konfigurationseinstellungen hinzu.

### LDAP-Attribute
Verwenden Sie die folgenden Attribute, um die Konfiguration von LDAP für {% data variables.product.product_location %} abzuschließen.

| Attributname                                     | Typ          | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Host`                                           | Erforderlich | Der LDAP-Host, z. B. `ldap.example.com` oder `10.0.0.30`. Wenn der Hostnamen nur in Ihrem internen Netzwerk verfügbar ist, müssen Sie möglicherweise zunächst den DNS von {% data variables.product.product_location %} konfigurieren, damit der Hostname mithilfe Ihrer internen Nameserver aufgelöst werden kann.                                                                                                                                                                                                                                                  |
| `Port`                                           | Erforderlich | Der Port, der von den LDAP-Diensten des Hosts überwacht wird. Beispiele: 389 und 636 (für LDAPS).                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `Encryption`                                     | Erforderlich | Die Verschlüsselungsmethode, die verwendet wird, um Kommunikationen zum LDAP-Server zu schützen. Dazu zählen beispielsweise Nur-Text (keine Verschlüsselung), SSL/LDAPS (von Anfang an verschlüsselt) und StartTLS (Upgrade auf verschlüsselte Kommunikation nach dem Herstellen der Verbindung).                                                                                                                                                                                                                                                                    |
| `Domain search user`                             | Optional     | The LDAP user that looks up other users that sign in, to allow authentication. In der Regel handelt es sich dabei um ein Dienstkonto, das speziell für Drittanbieterintegrationen erstellt wird. Verwenden Sie einen vollqualifizierten Namen, beispielsweise `cn=Administrator,cn=Users,dc=Example,dc=com`. Mit Active Directory können Sie zudem die Syntax `[DOMAIN]\[USERNAME]` (z. B. `WINDOWS\Administrator`) für den Benutzer der Domain-Suche mit Active Directory verwenden.                                                                              |
| `Domain search password`                         | Optional     | Das Passwort für den Benutzer der Domain-Suche.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `Administrators group`                           | Optional     | Benutzer in dieser Gruppe werden auf Websiteadministratoren hochgestuft, wenn sie sich bei Ihrer Appliance anmelden. Wenn Sie keine Gruppe für LDAP-Administratoren konfigurieren, wird das erste LDAP-Benutzerkonto, das sich bei Ihrer Appliance anmeldet, automatisch auf einen Websiteadministrator hochgestuft.                                                                                                                                                                                                                                                 |
| `Domain base`                                    | Erforderlich | Der vollqualifizierte `Distinguished Name` (DN) einer LDAP-Unterstruktur, die auf Benutzer und Gruppen durchsucht werden soll. Sie können beliebig viele hinzufügen. Jede Gruppe muss jedoch in derselben Domain-Basis definiert sein wie die zugehörigen Benutzer. Wenn Sie eingeschränkte Benutzergruppen angeben, befinden sich nur die diesen Gruppen zugehörigen Benutzer im Geltungsbereich. Zum Steuern des Zugriffs sollten Sie die oberste Ebene Ihrer LDAP-Verzeichnisstruktur als Ihre Domain-Basis angeben und eingeschränkte Benutzergruppen verwenden. |
| `Restricted user groups`                         | Optional     | Wenn diese Option angegeben ist, können sich nur die Benutzer dieser Gruppen anmelden. Sie müssen nur die allgemeinen Namen (Common Names, CNs) der Gruppen angeben. Zudem können Sie beliebig viele Gruppen hinzufügen. Sind keine Gruppen angegeben, können sich *alle* Benutzer im Geltungsbereich der angegebenen Domain-Basis bei Ihrer {% data variables.product.prodname_ghe_server %}-Instanz anmelden.                                                                                                                                                    |
| `User ID`                                        | Erforderlich | Das LDAP-Attribut, das den LDAP-Benutzer identifiziert, der versucht, sich zu authentifizieren. Nach dem Herstellen einer Zuordnung können Benutzer ihre {% data variables.product.prodname_ghe_server %}-Benutzernamen ändern. Dieses Feld sollte für die meisten Active Directory-Installationen `sAMAccountName` lauten. Für andere LDAP-Lösungen wie OpenLDAP lautet es ggf. `uid`. Der Standardwert lautet `uid`.                                                                                                                                             |
| `Profilname`                                     | Optional     | Der Name, der auf der {% data variables.product.prodname_ghe_server %}-Profilseite des Benutzers angezeigt wird. Sofern die LDAP-Synchronisierung nicht aktiviert ist, können Benutzer ihre Profilnamen ändern.                                                                                                                                                                                                                                                                                                                                                    |
| `Emails`                                         | Optional     | Die E-Mail-Adressen für das {% data variables.product.prodname_ghe_server %}-Konto eines Benutzers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `SSH keys`                                       | Optional     | Die öffentlichen SSH-Schlüssel, die an das {% data variables.product.prodname_ghe_server %}-Konto eines Benutzers angehängt sind. Die Schlüssel müssen im OpenSSH-Format vorliegen.                                                                                                                                                                                                                                                                                                                                                                                |
| `GPG keys`                                       | Optional     | Die GPG-Schlüssel, die an das {% data variables.product.prodname_ghe_server %}-Konto eines Benutzers angehängt sind.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `Disable LDAP authentication for Git operations` | Optional     | Wenn diese Option ausgewählt ist, wird die Möglichkeit der Benutzer [deaktiviert](#disabling-password-authentication-for-git-operations), LDAP-Passwörter zur Authentifizierung von Git-Vorgängen zu verwenden.                                                                                                                                                                                                                                                                                                                                                      |
| `Enable LDAP certificate verification`           | Optional     | Wenn diese Option ausgewählt ist, wird die LDAP-Zertifikatsverifizierung [aktiviert](#enabling-ldap-certificate-verification).                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `Synchronization`                                | Optional     | Wenn diese Option ausgewählt ist, wird die LDAP-Synchronisierung [aktiviert](#enabling-ldap-sync).                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Passwortauthentifizierung für Git-Vorgänge deaktivieren

Aktivieren Sie **Disable username and password authentication for Git operations** (Authentifizierung mittels Benutzername und Passwort für Git-Vorgänge deaktivieren) in Ihren LDAP-Einstellungen, um die Verwendung von persönlichen Zugriffstoken oder SSH-Schlüsseln für den Git-Zugriff zu erzwingen, wodurch verhindert werden kann, dass Ihr Server von LDAP-Authentifizierungsanforderungen überladen wird. Diese Einstellung wird empfohlen, da ein langsam reagierender LDAP-Server, insbesondere in Kombination mit einer Vielzahl an Anforderungen (infolge des automatischen Abrufens) häufig für Leistungsprobleme und Ausfälle verantwortlich ist.

![Kontrollkästchen zum Deaktivieren der LDAP-Passwortauthentifizierung für Git](/assets/images/enterprise/management-console/ldap-disable-password-auth-for-git.png)

Wenn ein Benutzer bei Auswahl dieser Option versucht, ein Passwort für Git-Vorgänge an der Befehlszeile zu verwenden, wird die Fehlermeldung `Password authentication is not allowed for Git operations. You must use a personal access token` angezeigt.

#### LDAP-Zertifikatsverifizierung aktivieren

Wählen Sie **Enable LDAP certificate verification** (LDAP-Zertifikatsverifizierung aktivieren) in Ihren LDAP-Einstellungen aus, um das von Ihnen verwendete LDAP-Serverzertifikat mit TLS zu validieren.

![Feld für die LDAP-Zertifikatsverifizierung](/assets/images/enterprise/management-console/ldap-enable-certificate-verification.png)

Wenn diese Option ausgewählt ist, wird das Zertifikat validiert, um Folgendes sicherzustellen:
- Wenn das Zertifikat mindestens einen Subject Alternative Name (SAN) enthält, stimmt einer der SANs mit dem LDAP-Hostnamen überein. Andernfalls stimmt der allgemeine Name (Common Name, CN) mit dem LDAP-Hostnamen überein.
- Das Zertifikat ist nicht abgelaufen.
- Das Zertifikat wurde von einer vertrauenswürdigen Zertifizierungsstelle (CA) signiert.

#### LDAP-Synchronisierung aktivieren

{% note %}

**Note:** Teams using LDAP Sync are limited to a maximum 1499 members.

{% endnote %}

Mithilfe der LDAP-Synchronisierung können Sie {% data variables.product.prodname_ghe_server %}-Benutzer und die -Teammitgliedschaft mit Ihren festgelegten LDAP-Gruppen synchronisieren. Dadurch können Sie eine rollenbasierte Zugriffskontrolle (Role-Based Access Control, RBAC) für Benutzer von Ihrem LDAP-Server aus einrichten, anstatt manuell innerhalb von {% data variables.product.prodname_ghe_server %}. Weitere Informationen finden Sie unter „[Teams erstellen](/enterprise/{{ currentVersion }}/admin/guides/user-management/creating-teams#creating-teams-with-ldap-sync-enabled)“.

Wählen Sie **Synchronize Emails** (E-Mails synchronisieren), **Synchronize SSH Keys** (SSH-Schlüssel synchronisieren) oder **Synchronize GPG Keys** (GPG-Schlüssel synchronisieren) aus, um die LDAP-Synchronisierung zu aktivieren.

![Kontrollkästchen für die Synchronisierung](/assets/images/enterprise/management-console/ldap-synchronize.png)

Nach der Aktivierung der LDAP-Synchronisierung wird ein Synchronisierungsauftrag entsprechend dem angegebenen Zeitintervall ausgeführt, um die folgenden Vorgänge in jedem Benutzerkonto durchzuführen:

- Wenn Sie die integrierte Authentifizierung für Benutzer außerhalb Ihres Identity Providers erlaubt haben und der Benutzer die integrierte Authentifizierung verwendet, können Sie zum nächsten Benutzer wechseln.
- Wenn für den Benutzer keine LDAP-Zuordnung vorliegt, sollten Sie versuchen, den Benutzer einem LDAP-Eintrag im Verzeichnis zuzuordnen. Wenn es nicht möglich ist, den Benutzer einem LDAP-Eintrag zuzuordnen, sperren Sie den Benutzer, und wechseln Sie zum nächsten Benutzer.
- Wenn eine LDAP-Zuordnung vorliegt, der entsprechende LDAP-Eintrag im Verzeichnis jedoch fehlt, sperren Sie den Benutzer, und wechseln Sie zum nächsten Benutzer.
- Wenn der entsprechende LDAP-Eintrag als deaktiviert markiert wurde und der Benutzer nicht bereits gesperrt ist, sperren Sie den Benutzer, und wechseln Sie zum nächsten Benutzer.
- Wenn der entsprechende LDAP-Eintrag nicht als deaktiviert markiert ist, der Benutzer gesperrt ist und _Reactivate suspended users_ (Gesperrte Benutzer erneut aktivieren) im Admin-Center aktiviert ist, entsperren Sie den Benutzer.
- Wenn der entsprechende LDAP-Eintrag das Attribut `name` enthält, aktualisieren Sie den Profilnamen des Benutzers.
- Wenn sich der entsprechende LDAP-Eintrag in der Gruppe „Administrators“ (Administratoren) befindet, stufen Sie den Benutzer auf einen Websiteadministrator hoch.
- Wenn sich der entsprechende LDAP-Eintrag nicht in der Gruppe „Administrators“ (Administratoren) befindet, stufen Sie den Benutzer auf ein normales Konto zurück.
- Wenn das Feld „LDAP User“ (LDAP-Benutzer) für E-Mails festgelegt ist, synchronisieren Sie die E-Mail-Einstellungen des Benutzers mit dem LDAP-Eintrag. Legen Sie den ersten LDAP-Eintrag vom Typ `mail` als die primäre E-Mail fest.
- Wenn das Feld „LDAP User“ (LDAP-Benutzer) für öffentliche SSH-Schlüssel festgelegt ist, synchronisieren Sie die öffentlichen SSH-Schlüssel des Benutzers mit dem LDAP-Eintrag.
- Wenn das Feld „LDAP User“ (LDAP-Benutzer) für GPG-Schlüssel festgelegt ist, synchronisieren Sie die GPG-Schlüssel des Benutzers mit dem LDAP-Eintrag.

{% note %}

**Hinweis**: LDAP-Einträge können nur dann als deaktiviert markiert werden, wenn Sie Active Directory verwenden und das Attribut `userAccountControl` vorhanden und mit `ACCOUNTDISABLE` gekennzeichnet ist.

{% endnote %}

Darüber hinaus wird ein Synchronisierungsauftrag im angegebenen Zeitintervall ausgeführt, um die folgenden Aktionen für jedes Team durchzuführen, das einer LDAP-Gruppe zugeordnet wurde:

- Wenn die entsprechende LDAP-Gruppe eines Teams entfernt wurde, entfernen Sie alle Mitglieder aus dem Team.
- Wenn Einträge von LDAP-Mitgliedern aus der LDAP-Gruppe entfernt wurden, entfernen Sie die entsprechenden Benutzer aus dem Team. Wenn der Benutzer den Zugriff auf die Repositorys verloren hat, löschen Sie die privaten Forks, die der Benutzer für diese Repositorys besitzt.
- Wenn die LDAP-Mitgliedereinträge zur LDAP-Gruppe hinzugefügt wurden, fügen Sie die entsprechenden Benutzer dem Team hinzu. Wenn der Benutzer den Zugriff auf Repositorys zurückerlangt, sollten Sie die privaten Forks der Repositorys wiederherstellen, die gelöscht wurden, weil der Benutzer den Zugriff in den vergangenen 90 Tagen verloren hat.

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% warning %}

**Sicherheitswarnung:**

Wenn die LDAP-Synchronisierung aktiviert ist, können Websiteadministratoren und Organisationsinhaber das LDAP-Verzeichnis nach Gruppen durchsuchen, um sie dem Team zuzuordnen.

Dadurch können sensible Organisationsinformationen potenziell Vertragsnehmern oder anderen nicht privilegierten Benutzern offengelegt werden, darunter

- die Verfügbarkeit von spezifischen LDAP-Gruppen, die für den *Benutzer der Domain-Suche* sichtbar sind,
- Mitglieder der LDAP-Gruppe, die über {% data variables.product.prodname_ghe_server %}-Benutzerkonten verfügen, die beim Erstellen eines Teams offengelegt werden, das mit dieser LDAP-Gruppe synchronisiert ist.

Wenn die Offenlegung solcher Informationen nicht gewünscht wird, sollte Ihr Unternehmen oder Ihre Organisation in der Administratorkonsole die Berechtigungen des konfigurierten *Benutzers der Domain-Suche* einschränken. Ist eine solche Einschränkung nicht möglich, wenden Sie sich an {% data variables.contact.contact_ent_support %}.

{% endwarning %}

#### Unterstützte LDAP-Gruppenobjektklassen

{% data variables.product.prodname_ghe_server %} unterstützt die folgenden LDAP-Gruppenobjektklassen. Gruppen können verschachtelt werden.

- `Gruppe`
- `groupOfNames`
- `groupOfUniqueNames`
- `posixGroup`

### LDAP-Benutzer anzeigen und erstellen

Sie können die vollständige Liste der LDAP-Benutzer anzeigen, die Zugriff auf Ihre Instanz besitzen, und neue Benutzer bereitstellen.

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
3. Klicken Sie auf der linken Seitenleiste auf **LDAP users** (LDAP-Benutzer). ![Registerkarte „LDAP users“ (LDAP-Benutzer)](/assets/images/enterprise/site-admin-settings/ldap-users-tab.png)
4. Geben Sie bei der Suche nach einem Benutzer einen vollständigen oder den Teil eines Benutzernamens ein, und klicken Sie auf **Search** (Suchen). Die vorhandenen Benutzer werden in den Suchergebnissen angezeigt. Wenn ein Benutzer nicht vorhanden ist, klicken Sie auf **Create** (Erstellen), um das neue Benutzerkonto bereitzustellen. ![LDAP-Suche](/assets/images/enterprise/site-admin-settings/ldap-users-search.png)

### LDAP-Konten aktualisieren

Sofern die [LDAP-Synchronisierung nicht aktiviert ist](#enabling-ldap-sync), werden Änderungen an LDAP-Konten nicht automatisch mit {% data variables.product.prodname_ghe_server %} synchronisiert.

* Zum Verwenden einer neuen LDAP-Administratorgruppe müssen die Benutzer manuell auf {% data variables.product.prodname_ghe_server %} hoch- und zurückgestuft werden, um die Änderungen in LDAP zu berücksichtigen.
* [Stufen Sie die Konten auf {% data variables.product.prodname_ghe_server %} hoch und zurück](/enterprise/{{ currentVersion }}/admin/guides/user-management/promoting-or-demoting-a-site-administrator), um LDAP-Konten in LDAP-Administratorgruppen hinzuzufügen oder zu entfernen.
* [Sperren Sie die {% data variables.product.prodname_ghe_server %}-Konten](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users), wenn Sie die LDAP-Konten entfernen möchten.

#### LDAP-Konten manuell synchronisieren

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Klicken Sie unter „LDAP“ auf **Sync now** (Jetzt synchronisieren), um das Konto mit den Daten Ihres LDAP-Servers manuell zu aktualisieren. ![Schaltfläche „Sync now“ (Jetzt synchronisieren) für LDAP](/assets/images/enterprise/site-admin-settings/ldap-sync-now-button.png)

You can also [use the API to trigger a manual sync](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#ldap).

### Zugriff auf {% data variables.product.product_location %} widerrufen

Bei [aktivierter LDAP-Synchronisierung](#enabling-ldap-sync) wird beim Entfernen der LDAP-Anmeldeinformationen eines Benutzers dessen Konto nach der nächsten Synchronisierungsausführung gesperrt.

Bei **nicht** aktivierter LDAP-Synchronisierung müssen Sie das {% data variables.product.prodname_ghe_server %}-Konto nach dem Entfernen der LDAP-Anmeldeinformationen manuell sperren. Weitere Informationen finden Sie unter „[Benutzer sperren und entsperren](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users)“.

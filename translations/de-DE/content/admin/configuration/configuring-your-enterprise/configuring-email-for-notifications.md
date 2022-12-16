---
title: E-Mail für Benachrichtigungen konfigurieren
intro: 'Damit Benutzer*innen schnell auf Aktivitäten auf {% data variables.product.product_name %} reagieren können, kannst du {% data variables.product.product_location %} so konfigurieren, dass E-Mail-Benachrichtigungen zu Kommentaren zu Issues, Pull Requests und Commits gesendet werden.'
redirect_from:
  - /enterprise/admin/guides/installation/email-configuration
  - /enterprise/admin/articles/configuring-email
  - /enterprise/admin/articles/troubleshooting-email
  - /enterprise/admin/articles/email-configuration-and-troubleshooting
  - /enterprise/admin/user-management/configuring-email-for-notifications
  - /admin/configuration/configuring-email-for-notifications
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Notifications
shortTitle: Configure email notifications
ms.openlocfilehash: d7dd82fa95db462abe8d9d19e8df60a45dab3f0c
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718133'
---
{% ifversion ghae %} Unternehmensbesitzer können E-Mails für Benachrichtigungen konfigurieren.
{% endif %}
## Konfigurieren von SMTP für dein Unternehmen

{% ifversion ghes %} {% data reusables.enterprise_site_admin_settings.email-settings %}
4. Wähle **E-Mail aktivieren** aus. Hierdurch werden sowohl ausgehende als auch eingehende E-Mails aktiviert. Damit eingehende E-Mails empfangen werden können, musst du jedoch auch deine DNS-Einstellungen wie unten unter [Konfigurieren der DNS-Einstellungen und Firewalleinstellungen zum Zulassen eingehender E-Mails](#configuring-dns-and-firewall-settings-to-allow-incoming-emails) beschrieben konfigurieren.
![Aktivieren ausgehender E-Mails](/assets/images/enterprise/management-console/enable-outbound-email.png)
5. Gib die Einstellungen für deinen SMTP-Server ein.
      - Gib im Feld **Serveradresse** die Adresse deines SMTP-Servers an.
      - Gib im Feld **Port** den Port an, den dein SMTP-Server zum Senden von E-Mails verwendet.
      - Gib im Feld **Domäne** den Domänennamen an, den dein SMTP-Server mit einer HELO-Antwort sendet (sofern vorhanden).
      - Klicke auf die Dropdownliste **Authentifizierung**, und wähle die von deinem SMTP-Server verwendete Art von Verschlüsselung aus.
      - Gib im Feld **No-Reply-E-Mail-Adresse** die E-Mail-Adresse an, die bei allen Benachrichtigungs-E-Mails in den Feldern „Von“ und „An“ verwendet werden soll.      
6. Wenn du alle eingehenden E-Mails an die No-Reply-E-Mail-Adresse verwerfen möchtest, wähle **E-Mails an die No-Reply-E-Mail-Adresse verwerfen** aus.
![Kontrollkästchen zum Verwerfen der E-Mails an die No-Reply-E-Mail-Adresse](/assets/images/enterprise/management-console/discard-noreply-emails.png)
7. Wähle unter **Support** einen Linktyp aus, um den Benutzer*innen zusätzliche Unterstützung anzubieten.
    - **E-Mail**: Eine interne E-Mail-Adresse
    - **URL**: Ein Link zu einer internen Supportwebsite. Dieser muss entweder `http://` oder `https://` enthalten.
  ![Support-E-Mail-Adresse oder -URL](/assets/images/enterprise/management-console/support-email-url.png)
8. [Teste die E-Mail-Zustellung](#testing-email-delivery).
{% elsif ghae %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.email-tab %}
2. Wähle **E-Mail aktivieren** aus.
  ![Kontrollkästchen zum Aktivieren bei der Konfiguration der E-Mail-Einstellungen](/assets/images/enterprise/configuration/ae-enable-email-configure.png)
3. Gib die Einstellungen für deinen E-Mail-Server ein.
    - Gib im Feld **Serveradresse** die Adresse deines SMTP-Servers an.
    - Gib im Feld **Port** den Port an, den dein SMTP-Server zum Senden von E-Mails verwendet.
    - Gib im Feld **Domäne** den Domänennamen an, den dein SMTP-Server mit einer HELO-Antwort sendet (sofern vorhanden).
    - Klicke auf die Dropdownliste **Authentifizierung**, und wähle die von deinem SMTP-Server verwendete Art von Verschlüsselung aus.
    - Gib im Feld **No-Reply-E-Mail-Adresse** die E-Mail-Adresse an, die bei allen Benachrichtigungs-E-Mails in den Feldern „Von“ und „An“ verwendet werden soll.
4. Wenn du alle eingehenden E-Mails an die No-Reply-E-Mail-Adresse verwerfen möchtest, wähle **E-Mails an die No-Reply-E-Mail-Adresse verwerfen** aus.
  ![Kontrollkästchen zum Verwerfen bei der Konfiguration der E-Mail-Einstellungen](/assets/images/enterprise/configuration/ae-discard-email.png)
5. Klicke auf **E-Mail-Einstellungen testen**.
  ![Schaltfläche „E-Mail-Einstellungen testen“ bei der Konfiguration der E-Mail-Einstellungen](/assets/images/enterprise/configuration/ae-test-email.png)
6. Gib unter „Test-E-Mail senden an“ die E-Mail-Adresse ein, an die du eine Test-E-Mail senden möchtest, und klicke dann auf **Test-E-Mail senden**.
  ![Schaltfläche „Test-E-Mail senden“ bei der Konfiguration der E-Mail-Einstellungen](/assets/images/enterprise/configuration/ae-send-test-email.png)
7. Klicken Sie auf **Speichern**.
  ![Schaltfläche „Speichern“ bei der Konfiguration des Unternehmenssupportkontakts](/assets/images/enterprise/configuration/ae-save.png) {% endif %}

{% ifversion ghes %}
## E-Mail-Zustellung testen

1. Klicke oben im Abschnitt **E-Mail** auf **E-Mail-Einstellungen testen**.
![E-Mail-Einstellungen testen](/assets/images/enterprise/management-console/test-email.png)
2. Gib im Feld **Test-E-Mail senden an** eine Adresse ein, an die die Test-E-Mail gesendet werden soll.
![Adresse für Test-E-Mail](/assets/images/enterprise/management-console/test-email-address.png)
3. Klicke auf **Test-E-Mail senden**.
![Senden einer Test-E-Mail](/assets/images/enterprise/management-console/test-email-address-send.png)

  {% tip %}

  **Tipp**: Wenn beim Senden einer Test-E-Mail SMTP-Fehler auftreten (z. B. ein sofortiger Zustellfehler oder ein Konfigurationsfehler für ausgehende E-Mails), werden diese im Dialogfeld „E-Mail-Einstellungen testen“ angezeigt.

  {% endtip %}

4. Wenn bei der Test-E-Mail ein Fehler auftritt, [führe eine Problembehandlung für deine E-Mail-Einstellungen durch](#troubleshooting-email-delivery).
5. Wenn die Test-E-Mail erfolgreich zugestellt wird, klicke unten auf der Seite auf **Einstellungen speichern**.
![Schaltfläche „Einstellungen speichern“](/assets/images/enterprise/management-console/save-settings.png) {% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}

{% ifversion require-tls-for-smtp %}
## Erzwingen von TLS für SMTP-Verbindungen

Du kannst die TLS-Verschlüsselung für alle eingehenden SMTP-Verbindungen erzwingen, wodurch eine ISO-27017-Zertifizierungsanforderung erfüllt werden kann.

{%- ifversion ghes = 3.6 %} {% note %}

**Hinweis**: Das Erzwingen von TLS für SMTP-Verbindungen ist in {% data variables.product.product_name %} 3.6.0 nicht verfügbar. Dieses Feature wird in einer der nächsten Versionen verfügbar sein.

{% endnote %} {%- endif %}

{% data reusables.enterprise_site_admin_settings.email-settings %}
1. Wähle unter „Authentifizierung“ die Option **TLS-Authentifizierung erzwingen (empfohlen)** aus.

   ![Screenshot: Das Kontrollkästchen „TLS-Authentifizierung erzwingen (empfohlen)“](/assets/images/enterprise/configuration/enforce-tls-for-smtp-checkbox.png) {% data reusables.enterprise_management_console.save-settings %} {% endif %}

## DNS- und Firewalleinstellungen zum Zulassen eingehender E-Mails konfigurieren

Wenn du E-Mail-Antworten auf Benachrichtigungen zulassen möchtest, musst du deine DNS-Einstellungen konfigurieren.

1. Stelle sicher, dass Port 25 auf der Instanz für deinen SMTP-Server erreichbar ist.
2. Erstelle einen A-Eintrag, der auf `reply.[hostname]` verweist. Je nach DNS-Anbieter und Instanzhostkonfiguration kannst du stattdessen möglicherweise auch nur einen einzelnen A-Eintrag erstellen, der auf `*.[hostname]` verweist.
3. Erstelle einen MX-Eintrag, der auf `reply.[hostname]` verweist, damit E-Mails an diese Domäne an die Instanz weitergeleitet werden.
4. Erstelle einen MX-Eintrag, der von `noreply.[hostname]` auf `[hostname]` verweist, damit Antworten an die `cc`-Adresse in Benachrichtigungs-E-Mails an die Instanz weitergeleitet werden. Weitere Informationen findest du unter {% ifversion ghes %}[Konfigurieren von Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications){% else %}[Informationen zu E-Mail-Benachrichtigungen](/github/receiving-notifications-about-activity-on-github/about-email-notifications){% endif %}.

## Fehlerbehebung bei der E-Mail-Zustellung

### Support-Bundle erstellen

Wenn du anhand der angezeigten Fehlermeldung nicht ermitteln kannst, was das Problem ist, kannst du ein [Supportbundle](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support) herunterladen, das die gesamte SMTP-Kommunikation zwischen deinem Mailserver und {% data variables.product.prodname_ghe_server %} enthält. Überprüfe nach dem Herunterladen und Extrahieren des Bundles in den Einträgen in *enterprise-manage-logs/unicorn.log* das gesamte SMTP-Kommunikationsprotokoll und die zugehörigen Fehler.

Das Unicorn-Protokoll sollte in etwa folgende Transaktion anzeigen:

```shell
This is a test email generated from https://10.0.0.68/setup/settings
Connection opened: smtp.yourdomain.com:587
-> "220 smtp.yourdomain.com ESMTP nt3sm2942435pbc.14\r\n"
<- "EHLO yourdomain.com\r\n"
-> "250-smtp.yourdomain.com at your service, [1.2.3.4]\r\n"
-> "250-SIZE 35882577\r\n"
-> "250-8BITMIME\r\n"
-> "250-STARTTLS\r\n"
-> "250-ENHANCEDSTATUSCODES\r\n"
-> "250 PIPELINING\r\n"
<- "STARTTLS\r\n"
-> "220 2.0.0 Ready to start TLS\r\n"
TLS connection started
<- "EHLO yourdomain.com\r\n"
-> "250-smtp.yourdomain.com at your service, [1.2.3.4]\r\n"
-> "250-SIZE 35882577\r\n"
-> "250-8BITMIME\r\n"
-> "250-AUTH LOGIN PLAIN XOAUTH\r\n"
-> "250-ENHANCEDSTATUSCODES\r\n"
-> "250 PIPELINING\r\n"
<- "AUTH LOGIN\r\n"
-> "334 VXNlcm5hbWU6\r\n"
<- "dGhpc2lzbXlAYWRkcmVzcy5jb20=\r\n"
-> "334 UGFzc3dvcmQ6\r\n"
<- "aXRyZWFsbHl3YXM=\r\n"
-> "535-5.7.1 Username and Password not accepted. Learn more at\r\n"
-> "535 5.7.1 http://support.yourdomain.com/smtp/auth-not-accepted nt3sm2942435pbc.14\r\n"
```

Dieses Protokoll zeigt, dass die Appliance

* Eine Verbindung mit dem SMTP-Server geöffnet hat (`Connection opened: smtp.yourdomain.com:587`)
* Erfolgreich eine Verbindung hergestellt und sich für die Nutzung von TLS entschieden hat (`TLS connection started`)
* Der Authentifizierungstyp `login` wurde ausgeführt (`<- "AUTH LOGIN\r\n"`).
* Der SMTP-Server hat die Authentifizierung als ungültig abgelehnt (`-> "535-5.7.1 Username and Password not accepted.`).

### Überprüfen von {% data variables.product.product_location %}-Protokollen

Wenn du überprüfen musst, ob der Empfang eingehender E-Mails funktioniert, gibt es zwei Protokolldateien in deiner Instanz, die du hierzu untersuchen kannst: */var/log/mail.log* und */var/log/mail-replies/metroplex.log*.

*/var/log/mail.log* überprüft, ob Nachrichten deinen Server erreichen. Im Folgenden findest du ein Beispiel einer erfolgreichen E-Mail-Antwort:

```
Oct 30 00:47:18 54-171-144-1 postfix/smtpd[13210]: connect from st11p06mm-asmtp002.mac.com[17.172.124.250]
Oct 30 00:47:19 54-171-144-1 postfix/smtpd[13210]: 51DC9163323: client=st11p06mm-asmtp002.mac.com[17.172.124.250]
Oct 30 00:47:19 54-171-144-1 postfix/cleanup[13216]: 51DC9163323: message-id=<b2b9c260-4aaa-4a93-acbb-0b2ddda68579@me.com>
Oct 30 00:47:19 54-171-144-1 postfix/qmgr[17250]: 51DC9163323: from=<tcook@icloud.com>, size=5048, nrcpt=1 (queue active)
Oct 30 00:47:19 54-171-144-1 postfix/virtual[13217]: 51DC9163323: to=<reply+i-1-1801beb4df676a79250d1e61e54ab763822c207d-5@reply.ghe.tjl2.co.ie>, relay=virtual, delay=0.12, delays=0.11/0/0/0, dsn=2.0.0, status=sent (delivered to maildir)
Oct 30 00:47:19 54-171-144-1 postfix/qmgr[17250]: 51DC9163323: removed
Oct 30 00:47:19 54-171-144-1 postfix/smtpd[13210]: disconnect from st11p06mm-asmtp002.mac.com[17.172.124.250]
```

Der Client stellt zunächst eine Verbindung her. Anschließend wird die Warteschlange aktiv. Anschließend wird die Nachricht zugestellt, der Client aus der Warteschlange entfernt und die Sitzung getrennt.

*/var/log/mail-replies/metroplex.log* zeigt, ob eingehende E-Mails verarbeitet werden, um Issues und Pull Requests als Antworten hinzugefügt zu werden. Im Folgenden findest du ein Beispiel einer erfolgreichen Nachricht:

```
[2014-10-30T00:47:23.306 INFO (5284) #] metroplex: processing <b2b9c260-4aaa-4a93-acbb-0b2ddda68579@me.com>
[2014-10-30T00:47:23.333 DEBUG (5284) #] Matched /data/user/mail/reply/new/1414630039.Vfc00I12000eM445784.ghe-tjl2-co-ie
[2014-10-30T00:47:23.334 DEBUG (5284) #] Moving /data/user/mail/reply/new/1414630039.Vfc00I12000eM445784.ghe-tjl2-co-ie => /data/user/incoming-mail/success
```

Wie du siehst, erfasst `metroplex` die eingehende Nachricht, verarbeitet sie und verschiebt dann die Datei in `/data/user/incoming-mail/success`.{% endif %}

### Verifizieren deiner DNS-Einstellungen

Damit eingehende E-Mails ordnungsgemäß verarbeitet werden, musst du eine gültigen A-Datensatz (oder CNAME) und einen MX-Datensatz konfigurieren. Weitere Informationen findest du unter [Konfigurieren der DNS-Einstellungen und Firewalleinstellungen zum Zulassen eingehender E-Mails](#configuring-dns-and-firewall-settings-to-allow-incoming-emails).

### Einstellungen der Firewall oder der AWS-Sicherheitsgruppe überprüfen

Wenn {% data variables.product.product_location %} sich hinter einer Firewall befindet oder über eine AWS-Sicherheitsgruppe bereitgestellt wird, stelle sicher, dass Port 25 für alle E-Mail-Server offen ist, die E-Mails an `reply@reply.[hostname]` senden.

### Support kontaktieren
{% ifversion ghes %} Wenn du das Problem immer noch nicht beheben kannst, wende dich an den {% data variables.contact.contact_ent_support %}. Füge die Ausgabedatei von `http(s)://[hostname]/setup/diagnostics` an deine E-Mail an, um uns bei der Problembehandlung zu unterstützen.
{% elsif ghae %} Du kannst den {% data variables.contact.github_support %} um Hilfe dabei bitten, E-Mails so zu konfigurieren, dass Benachrichtigungen über deinen SMTP-Server gesendet werden. Weitere Informationen findest du unter [Anfordern von Unterstützung beim {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support).
{% endif %}

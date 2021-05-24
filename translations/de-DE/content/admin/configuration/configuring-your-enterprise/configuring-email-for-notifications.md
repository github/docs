---
title: E-Mail für Benachrichtigungen konfigurieren
intro: 'To make it easy for users to respond quickly to activity on {% data variables.product.product_name %}, you can configure {% data variables.product.product_location %} to send email notifications for issue, pull request, and commit comments.'
redirect_from:
  - /enterprise/admin/guides/installation/email-configuration/
  - /enterprise/admin/articles/configuring-email/
  - /enterprise/admin/articles/troubleshooting-email/
  - /enterprise/admin/articles/email-configuration-and-troubleshooting/
  - /enterprise/admin/user-management/configuring-email-for-notifications
  - /admin/configuration/configuring-email-for-notifications
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Notifications
---
{% if currentVersion == "github-ae@latest" %}
Enterprise owners can configure email for notifications.
{% endif %}
### Configuring SMTP for your enterprise

{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. Klicken Sie im oberen Bereich der Seite auf **Settings** (Einstellungen). ![Registerkarte „Settings“ (Einstellungen)](/assets/images/enterprise/management-console/settings-tab.png)
3. Klicken Sie auf der linken Seitenleiste auf **Email** (E-Mail). ![Registerkarte „Email“ (E-Mail)](/assets/images/enterprise/management-console/email-sidebar.png)
4. Wählen Sie **Enable email** (E-Mail aktivieren) aus. Dadurch werden aus- und eingehende E-Mails aktiviert. Damit eingehende E-Mails funktionieren, müssen Sie jedoch auch Ihre DNS-Einstellungen konfigurieren, wie dies im Folgenden unter „[DNS- und Firewalleinstellungen zum Zulassen eingehender E-Mails konfigurieren](#configuring-dns-and-firewall-settings-to-allow-incoming-emails)“ beschrieben ist. ![Option zum Aktivieren ausgehender E-Mails](/assets/images/enterprise/management-console/enable-outbound-email.png)
5. Type the settings for your SMTP server.
      - Geben Sie im Feld **Server address** (Serveradresse) die Adresse Ihres SMTP-Servers ein.
      - Geben Sie im Feld **Port** den Port ein, der von Ihrem SMTP-Server zum Senden von E-Mails verwendet wird.
      - Geben Sie im Feld **Domain** den Domain-Namen ein, der ggf. von Ihrem SMTP-Server mit einer HELO-Antwort gesendet wird.
      - Select the **Authentication** dropdown, and choose the type of encryption used by your SMTP server.
      - Geben Sie im Feld **No-reply email address** („no-reply“-E-Mail-Adresse) die E-Mail-Adresse ein, die für alle Benachrichtigungs-E-Mails in den Feldern „From“ (Von) und „To“ (An) verwendet werden soll.
6. Wenn Sie alle eingehenden E-Mails verwerfen möchten, die an die „no-reply“-E-Mail-Adresse adressiert sind, sollten Sie **Discard email addressed to the no-reply email address** (An die „no-reply“-E-Mail-Adresse adressierte E-Mails verwerfen) aktivieren. ![Kontrollkästchen zum Verwerfen der an die „no-reply“-E-Mail-Adresse adressierten E-Mails](/assets/images/enterprise/management-console/discard-noreply-emails.png)
7. Under **Support**, choose a type of link to offer additional support to your users.
    - **Email** (E-Mail): Eine interne E-Mail-Adresse.
    - **URL:** Ein Link zu einer internen Supportwebsite. Sie müssen `http://` oder `https://` verwenden. ![Support-E-Mail oder -URL](/assets/images/enterprise/management-console/support-email-url.png)
8. [Testen Sie die E-Mail-Zustellung](#testing-email-delivery).
{% elsif currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.email-tab %}
2. Wählen Sie **Enable email** (E-Mail aktivieren) aus. !["Enable" checkbox for email settings configuration](/assets/images/enterprise/configuration/ae-enable-email-configure.png)
3. Type the settings for your email server.
    - Geben Sie im Feld **Server address** (Serveradresse) die Adresse Ihres SMTP-Servers ein.
    - Geben Sie im Feld **Port** den Port ein, der von Ihrem SMTP-Server zum Senden von E-Mails verwendet wird.
    - Geben Sie im Feld **Domain** den Domain-Namen ein, der ggf. von Ihrem SMTP-Server mit einer HELO-Antwort gesendet wird.
    - Select the **Authentication** dropdown, and choose the type of encryption used by your SMTP server.
    - Geben Sie im Feld **No-reply email address** („no-reply“-E-Mail-Adresse) die E-Mail-Adresse ein, die für alle Benachrichtigungs-E-Mails in den Feldern „From“ (Von) und „To“ (An) verwendet werden soll.
4. Wenn Sie alle eingehenden E-Mails verwerfen möchten, die an die „no-reply“-E-Mail-Adresse adressiert sind, sollten Sie **Discard email addressed to the no-reply email address** (An die „no-reply“-E-Mail-Adresse adressierte E-Mails verwerfen) aktivieren. !["Discard" checkbox for email settings configuration](/assets/images/enterprise/configuration/ae-discard-email.png)
5. Click **Test email settings**. !["Test email settings" button for email settings configuration](/assets/images/enterprise/configuration/ae-test-email.png)
6. Under "Send test email to," type the email address where you want to send a test email, then click **Send test email**. !["Send test email" button for email settings configuration](/assets/images/enterprise/configuration/ae-send-test-email.png)
7. Klicke auf **Save** (Speichern). !["Save" button for enterprise support contact configuration](/assets/images/enterprise/configuration/ae-save.png)
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
### E-Mail-Zustellung testen

1. Klicken Sie im oberen Bereich des Abschnitts **Email** (E-Mail) auf **Test email settings** (Einstellungen für Test-E-Mail). ![Test email settings (Einstellungen für Test-E-Mail)](/assets/images/enterprise/management-console/test-email.png)
2. Geben Sie im Feld **Send test email to** (Test-E-Mail senden an) eine Adresse ein, an welche die Test-E-Mail gesendet werden soll. ![Test der E-Mail-Adresse](/assets/images/enterprise/management-console/test-email-address.png)
3. Klicken Sie auf **Send test email** (Test-E-Mail senden). ![„Send test email“ (Test-E-Mail senden)](/assets/images/enterprise/management-console/test-email-address-send.png)

  {% tip %}

  **Tipp:** Wenn beim Senden einer Test-E-Mail SMTP-Fehler auftreten, werden diese im Dialogfeld „Test email settings“ (Einstellungen für Test-E-Mail) angezeigt.

  {% endtip %}

4. Wenn die Test-E-Mail nicht zugestellt werden kann, führen Sie eine [Fehlerbehebung bei Ihren E-Mail-Einstellungen durch](#troubleshooting-email-delivery).
5. Wenn die Test-E-Mail erfolgreich war, klicken Sie im unteren Bereich der Seite auf **Save settings** (Einstellungen speichern). ![Schaltfläche „Save settings“ (Einstellungen speichern)](/assets/images/enterprise/management-console/save-settings.png)
6. Warten Sie auf den Abschluss der Konfigurationsausführung.![„Configuring your instance“ (Instanz konfigurieren)](/assets/images/enterprise/management-console/configuration-run.png)

### DNS- und Firewalleinstellungen zum Zulassen eingehender E-Mails konfigurieren

Wenn Sie E-Mail-Antworten auf Benachrichtigungen zulassen möchten, müssen Sie Ihre DNS-Einstellungen konfigurieren.

1. Stellen Sie sicher, dass Port 25 auf der Instanz für Ihren SMTP-Server erreichbar ist.
2. Erstellen Sie einen Datensatz, der auf `reply.[hostname]` verweist. In Abhängigkeit Ihres DNS-Providers und Ihrer Instanz-Host-Konfiguration können Sie ggf. stattdessen einen einzelnen A-Datensatz erstellen, der auf `*.[hostname]` verweist.
3. Erstellen Sie einen MX-Datensatz, der auf `reply.[hostname]` verweist, sodass an diese Domain gesendete E-Mails zur Instanz weitergeleitet werden.
4. Erstellen Sie einen MX-Datensatz, wodurch `noreply.[hostname]` auf `[hostname]` verweist, damit an die in Benachrichtigungs-E-Mails enthaltene `cc`-Adresse gesendete Antworten an die Instanz weitergeleitet werden. For more information, see {% if currentVersion ver_gt "enterprise-server@2.20" %}"[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications){% else %}"[About email notifications](/github/receiving-notifications-about-activity-on-github/about-email-notifications){% endif %}."

### Fehlerbehebung bei der E-Mail-Zustellung

#### Support-Bundle erstellen

Wenn Sie anhand der angezeigten Fehlermeldung nicht ermitteln können, was falsch ist, können Sie ein [Support-Bundle](/enterprise/{{ currentVersion }}/admin/guides/enterprise-support/providing-data-to-github-support) herunterladen, das die gesamte SMTP-Kommunikation zwischen Ihrem E-Mail-Server und {% data variables.product.prodname_ghe_server %} enthält. Überprüfen Sie nach dem Herunterladen und Extrahieren des Bundles die Einträge in *enterprise-manage-logs/unicorn.log* für das gesamte SMTP-Kommunikationsprotokoll und auf die zugehörigen Fehler.

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

* eine Verbindung mit dem SMTP-Server hergestellt hat (`Connection opened: smtp.yourdomain.com:587`),
* eine erfolgreiche Verbindung hergestellt hat und dazu TLS  (`TLS connection started`) ausgewählt hat,
* der Authentifizierungstyp `login` durchgeführt wurde (`<- "AUTH LOGIN\r\n"`),
* der SMTP-Server die Authentifizierung als ungültig (`-> "535-5.7.1 Username and Password not accepted.`) abgelehnt hat.

#### {% data variables.product.product_location %}-Protokolle überprüfen

If you need to verify that your inbound email is functioning, there are two log files that you can examine on your instance: To verify that */var/log/mail.log* and */var/log/mail-replies/metroplex.log*.

*/var/log/mail.log* verifiziert, dass die Nachrichten Ihren Server erreichen. Im Folgenden finden Sie ein Beispiel einer erfolgreichen E-Mail-Antwort:

```
Oct 30 00:47:18 54-171-144-1 postfix/smtpd[13210]: connect from st11p06mm-asmtp002.mac.com[17.172.124.250]
Oct 30 00:47:19 54-171-144-1 postfix/smtpd[13210]: 51DC9163323: client=st11p06mm-asmtp002.mac.com[17.172.124.250]
Oct 30 00:47:19 54-171-144-1 postfix/cleanup[13216]: 51DC9163323: message-id=<b2b9c260-4aaa-4a93-acbb-0b2ddda68579@me.com>
Oct 30 00:47:19 54-171-144-1 postfix/qmgr[17250]: 51DC9163323: from=<tcook@icloud.com>, size=5048, nrcpt=1 (queue active)
Oct 30 00:47:19 54-171-144-1 postfix/virtual[13217]: 51DC9163323: to=<reply+i-1-1801beb4df676a79250d1e61e54ab763822c207d-5@reply.ghe.tjl2.co.ie>, relay=virtual, delay=0.12, delays=0.11/0/0/0, dsn=2.0.0, status=sent (delivered to maildir)
Oct 30 00:47:19 54-171-144-1 postfix/qmgr[17250]: 51DC9163323: removed
Oct 30 00:47:19 54-171-144-1 postfix/smtpd[13210]: disconnect from st11p06mm-asmtp002.mac.com[17.172.124.250]
```

Beachten Sie, dass der Client zunächst eine Verbindung herstellt und anschließend die Warteschlange aktiv wird. Anschließend wird die Nachricht zugestellt, der Client aus der Warteschlange entfernt und die Sitzung getrennt.

*/var/log/mail-replies/metroplex.log* zeigt an, ob eingehende E-Mails verarbeitet werden, um Issues und Pull Requests als Antworten hinzuzufügen. Im Folgenden finden Sie ein Beispiel einer erfolgreichen Nachricht:

```
[2014-10-30T00:47:23.306 INFO (5284) #] metroplex: processing <b2b9c260-4aaa-4a93-acbb-0b2ddda68579@me.com>
[2014-10-30T00:47:23.333 DEBUG (5284) #] Matched /data/user/mail/reply/new/1414630039.Vfc00I12000eM445784.ghe-tjl2-co-ie
[2014-10-30T00:47:23.334 DEBUG (5284) #] Moving /data/user/mail/reply/new/1414630039.Vfc00I12000eM445784.ghe-tjl2-co-ie => /data/user/incoming-mail/success
```

You'll notice that `metroplex` catches the inbound message, processes it, then moves the file over to `/data/user/incoming-mail/success`.{% endif %}

#### Ihre DNS-Einstellungen verifizieren

Damit eingehende E-Mails ordnungsgemäß verarbeitet werden, müssen Sie eine gültigen A-Datensatz (oder CNAME) und einen MX-Datensatz konfigurieren. For more information, see "[Configuring DNS and firewall settings to allow incoming emails](#configuring-dns-and-firewall-settings-to-allow-incoming-emails)."

#### Einstellungen der Firewall oder der AWS-Sicherheitsgruppe überprüfen

Wenn sich {% data variables.product.product_location %} hinter einer Firewall befindet oder durch eine AWS-Sicherheitsgruppe betrieben wird, muss Port 25 auf allen E-Mail-Servern geöffnet sein, auf denen E-Mails an `reply@reply.[hostname]` gesendet werden.

#### Support kontaktieren
{% if enterpriseServerVersions contains currentVersion %}
If you're still unable to resolve the problem, contact
{% data variables.contact.contact_ent_support %}. Hängen Sie die Ausgabedatei von `http(s)://[hostname]/setup/diagnostics` an Ihre E-Mail an, um uns bei der Fehlerbehebung zu unterstützen.
{% elsif currentVersion == "github-ae@latest" %}
You can contact
{% data variables.contact.github_support %} for help configuring email for notifications to be sent through your SMTP server. For more information, see "[Receiving help from {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)."
{% endif %}

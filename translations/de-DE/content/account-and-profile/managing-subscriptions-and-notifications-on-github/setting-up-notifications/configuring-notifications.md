---
title: Benachrichtigungen konfigurieren
intro: 'Wähle die Art der Aktivitäten auf {% data variables.product.prodname_dotcom %} aus, für die du Benachrichtigungen erhalten möchtest, und wie du diese Benachrichtigungen erhalten möchtest.'
redirect_from:
  - /articles/about-web-notifications
  - /format-of-notification-emails
  - /articles/configuring-notification-emails
  - /articles/about-notification-emails
  - /articles/about-email-notifications
  - /articles/accessing-your-notifications
  - /articles/configuring-notification-delivery-methods
  - /articles/managing-notification-delivery-methods
  - /articles/managing-notification-emails-for-organizations
  - /articles/choosing-the-delivery-method-for-your-notifications
  - /articles/choosing-the-types-of-notifications-you-receive
  - /github/managing-subscriptions-and-notifications-on-github/configuring-notifications
  - /github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
ms.openlocfilehash: b7822a7db40455476c5fc5ac6f779e45d7f558a9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060762'
---
## Zustellungsoptionen für Benachrichtigungen

Benachrichtigungen für Aktivitäten auf {% data variables.product.product_location %} erhältst du an folgenden Stellen.

  - Im Posteingang für Benachrichtigungen über die Webschnittstelle von {% data variables.product.product_location %} {% ifversion fpt or ghes or ghec %}
  - Im Posteingang für Benachrichtigungen auf {% data variables.product.prodname_mobile %}, der mit dem Posteingang auf {% data variables.product.product_location %}{% endif %} synchronisiert wird
  - Über einen E-Mail-Client, der eine überprüfte E-Mail-Adresse verwendet, der ebenfalls mit dem Posteingang für Benachrichtigungen auf {% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} und {% data variables.product.prodname_mobile %}{% endif %} synchronisiert werden kann

{% ifversion fpt or ghes or ghec %} {% data reusables.notifications-v2.notifications-inbox-required-setting %} Weitere Informationen findest du unter [Festlegen von Benachrichtigungseinstellungen](#choosing-your-notification-settings).
{% endif %}

{% data reusables.notifications.shared_state %}

### Vorteile des Posteingangs für Benachrichtigungen

Der Posteingang für Benachrichtigungen auf {% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} und {% data variables.product.prodname_mobile %}{% endif %} beinhaltet Selektierungsoptionen speziell für deinen {% data variables.product.prodname_dotcom %}-Benachrichtigungsflow. Hierzu gehören folgende Optionen:
  - Selektierung mehrerer Benachrichtigungen gleichzeitig.
  - Markieren abgeschlossener Benachrichtigungen als **Fertig** und Entfernen aus deinem Posteingang. Verwende die Abfrage `is:done`, um alle Benachrichtigungen anzuzeigen, die als **Fertig** markiert sind.
  - Speichern einer Benachrichtigung für die spätere Überprüfung. Gespeicherte Benachrichtigungen werden in deinem Posteingang gekennzeichnet und für unbegrenzte Dauer aufbewahrt. Verwende die Abfrage `is:saved`, um alle gespeicherten Benachrichtigungen anzuzeigen.
  - Abbestellen und Entfernen einer Benachrichtigung aus Ihrem Posteingang.
  - Vorschau des Issue, Pull Request oder der Team-Diskussion, aus der die Benachrichtigung auf {% data variables.product.product_location %} erstellt wurde, direkt im Posteingang für Benachrichtigungen.
  - Anzeigen der zuletzt verwendeten Gründe, aus denen Sie eine Benachrichtigung mit einer `reasons`-Bezeichnung in Ihrem Posteingang empfangen haben.
  - Erstellen benutzerdefinierter Filter, um sich bei Bedarf auf bestimmte Benachrichtigungen zu konzentrieren.
  - Gruppiere Benachrichtigungen in deinem Posteingang nach Repository oder Datum, um einen schnellen Überblick mit weniger Kontextwechseln zu erhalten

{% ifversion fpt or ghes or ghec %} Darüber hinaus kannst du mit {% data variables.product.prodname_mobile %} auf deinem mobilen Gerät Benachrichtigungen empfangen und selektieren. Weitere Informationen findest du unter [Verwalten von Benachrichtigungseinstellungen mit GitHub Mobile](#managing-your-notification-settings-with-github-mobile) oder [GitHub Mobile](/get-started/using-github/github-mobile).
{% endif %}

### Vorteile beim Benutzen eines E-Mail-Client für Benachrichtigungen

Ein Vorteil der Verwendung eines E-Mail-Clients ist, dass alle deine Benachrichtigungen unbegrenzt aufbewahrt werden können, abhängig von der Speicherkapazität deines E-Mail-Clients. Deine Benachrichtigungen im Posteingang werden auf {% data variables.product.prodname_dotcom %} nur fünf Monate gespeichert, es sei denn, du hast sie als **Gespeichert** gekennzeichnet. **Gespeicherte** Benachrichtigungen werden unbegrenzt gespeichert. Weitere Informationen zur Aufbewahrungsrichtlinie deines Posteingangs findest du unter [Informationen zu Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notification-retention-policy).

Benachrichtigungen an deinen E-Mail-Client zu senden ermöglicht es dir auch, deinen Posteingang gemäß allen Einstellungen deines E-Mail-Clients anzupassen, die benutzerdefinierte oder farbcodierte Kennzeichnungen beinhalten können.

E-Mail-Benachrichtigungen ermöglichen auch Flexibilität bei der Art von Benachrichtigungen, die du erhältst und erlauben Dir die Auswahl verschiedener E-Mail-Adressen für Aktualisierungen. Beispielsweise kannst du bestimmte Benachrichtigungen für ein Repository an die verifizierte persönliche E-Mail-Adresse senden. Weitere Informationen zu den Anpassungsoptionen für deine E-Mail-Benachrichtigungen findest du unter [Anpassen von E-Mail-Benachrichtigungen](#customizing-your-email-notifications).

## Über die Teilnahme und das Beobachten von Benachrichtigungen

Wenn du ein Repository beobachtest, abonnierst du Aktualisierungen für Aktivitäten in diesem Repository. Ebenfalls, wenn du die Diskussionen eines bestimmten Teams verfolgst, abonnierst du alle Aktualisierungen der Unterhaltung auf der Seite dieses Teams. Weitere Informationen findest du unter [Informationen zu Teamdiskussionen](/organizations/collaborating-with-your-team/about-team-discussions).

Wechsle zur [Überwachungsseite](https://github.com/watching). Dort werden die Repositorys angezeigt, die du überwachst. Weitere Informationen findest du unter [Verwalten von Abonnements und Benachrichtigungen auf GitHub](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github).

{% ifversion ghae %}
### Benachrichtigungen konfigurieren
{% endif %} Benachrichtigungen für ein Repository können auf der Repositoryseite oder auf der Überwachungsseite angezeigt werden.

### Informationen zu benutzerdefinierten Benachrichtigungen
Benachrichtigungen für ein Repository können angepasst werden. So kannst du beispielsweise festlegen, dass du nur benachrichtigt wirst, wenn mindestens ein Ereignistyp ({% data reusables.notifications-v2.custom-notification-types %}) in einem Repository aktualisiert wurde, oder dass alle Benachrichtigungen für ein Repository ignoriert werden sollen. Weitere Informationen findest du unter [Konfigurieren von Überwachungseinstellungen für ein einzelnes Repository](#configuring-your-watch-settings-for-an-individual-repository) weiter unten.

### Teilnehmen an Unterhaltungen
Jedes Mal, wenn du in einer Unterhaltung einen Kommentar abgibst oder wenn jemand deinen Benutzernamen @mentions, _nimmst du an einer Unterhaltung teil_. Standardmäßig abonnierst du automatisch eine Unterhaltung, wenn du daran teilnimmst. Es gibt zwei Möglichkeiten eine Unterhaltung, an der du teilgenommen hast, manuell abzubestellen: indem du auf dem Issue oder Pull Request auf **Abbestellen** klickst oder über die Option **Abbestellen** im Posteingang für Benachrichtigungen.

Für Unterhaltungen, die du überwachst oder an denen du teilnimmst, kannst du festlegen, ob du Benachrichtigungen per E-Mail oder über den Posteingang für Benachrichtigungen auf {% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} und {% data variables.product.prodname_mobile %}{% endif %} erhalten möchtest.

![Optionen für Teilnahme- und Beobachtungs-Benachrichtigungen](/assets/images/help/notifications-v2/participating-and-watching-options.png)

Beispiel:
  - Wenn du nicht möchtest, dass Benachrichtigungen an deine E-Mail-Adresse gesendet werden, deaktiviere die Option **E-Mail** für Teilnahme- und Überwachungsbenachrichtigungen.
  - Wenn du an einer Unterhaltung teilnehmen und Benachrichtigungen per E-Mail erhalten möchtest, wähle unter „Teilnehmen“ die Option **E-Mail** aus.

Wenn du für Web{% ifversion fpt or ghes or ghec %} und Mobile{% endif %} keine Überwachungs- oder Teilnahmebenachrichtigungen aktivierst, sind in deinem Posteingang für Benachrichtigungen keine Updates enthalten.

## E-Mail-Benachrichtigungen anpassen

Nach der Aktivierung von E-Mail-Benachrichtigungen erhältst du von {% data variables.product.product_location %} Benachrichtigungen als mehrteilige E-Mails, die sowohl HTML- als auch Nur-Text-Kopien des Inhalts enthalten. Zum Inhalt einer E-Mail-Benachrichtigung gehören Markdowns, @mentions, Emojis, Hash-Links und vieles mehr, das im ursprünglichen Inhalt auf {% data variables.product.product_location %} angezeigt wird. Wenn du nur den Text in der E-Mail sehen möchtest, kannst du deinen E-Mail-Client so konfigurieren, dass er nur die reine Textkopie anzeigt.

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

{% ifversion fpt or ghec %}

Wenn du Gmail verwendest, kannst du auf eine Schaltfläche neben der Benachrichtigungs-E-Mail klicken, um den ursprünglichen Issue respektive Pull Request anzuzeigen, der die Benachrichtigung generiert hat.

![Schaltflächen in Gmail](/assets/images/help/notifications/gmail-buttons.png)

{% endif %}

Wähle eine Standard-E-Mail-Adresse, an die du Aktualisierungen für Unterhaltungen senden willst, an denen du teilnimmst oder die du beobachtest. Du kannst auch festlegen, zu welchen Aktivitäten auf {% data variables.product.product_location %} du Updates über deine Standard-E-Mail-Adresse erhalten möchtest. Wähle zum Beispiel aus, ob du Aktualisierungen an deine Standard-E-Mail senden möchtest für:
  - Kommentare für Issues und Pull Requests.
  - Pull-Request-Reviews.
  - Pull-Request-Pushes.
  - Deine eigenen Aktualisierungen, wie wenn du beispielsweise einen Issue oder Pull Request öffnest, kommentierst oder schließt.

Abhängig davon, welche Organisation das Repository besitzt, kannst du auch Benachrichtigungen an verschiedene E-Mail-Adressen senden. Deine Organisation verlangt möglicherweise, dass E-Mail-Adressen für bestimmte Domänen verifiziert sein müssen. Weitere Informationen findest du unter [Auswählen, wohin E-Mail-Benachrichtigungen deiner Organisation gesendet werden](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-where-your-organizations-email-notifications-are-sent).

Benachrichtigungen für ein bestimmtes Repository können auch an eine E-Mail-Adresse gesendet werden. Weitere Informationen hierzu findest du unter [Informationen zu E-Mail-Benachrichtigungen für Pushes an dein Repository](/github/administering-a-repository/about-email-notifications-for-pushes-to-your-repository).

{% data reusables.notifications-v2.email-notification-caveats %}

## E-Mail-Benachrichtigungen filtern

Alle E-Mail-Benachrichtigungen, die von {% data variables.product.product_location %} gesendet werden, enthalten Headerinformationen. Die Headerinformationen sind in allen E-Mails einheitlich, sodass du sie im E-Mail-Client zum Filtern oder Weiterleiten aller {% data variables.product.prodname_dotcom %}-Benachrichtigungen oder bestimmter Arten von {% data variables.product.prodname_dotcom %} verwenden kannst.

Wenn du der Meinung bist, dass du Benachrichtigungen erhältst, die nicht für dich bestimmt bist, überprüfe die Header `X-GitHub-Recipient` und `X-GitHub-Recipient-Address`. Diese Header zeigen an, wer der beabsichtigte Empfänger ist. Abhängig von deiner E-Mail-Einrichtung erhältst du möglicherweise Benachrichtigungen für einen anderen Benutzer.

E-Mail-Benachrichtigungen von {% data variables.product.product_location %} enthalten die folgenden Headerinformationen:

| Header | Information |
| --- | --- |
| `From`-Adresse | Diese Adresse lautet immer {% ifversion fpt or ghec %}'`notifications@github.com`'{% else %}'die vom Websiteadministrator konfigurierte No-Reply-E-Mail-Adresse'{% endif %}. |
| `To` -Feld | Dieses Feld wird direkt mit dem Thread verbunden.{% ifversion not ghae %} Wenn du auf diese E-Mail antwortest, füge der Unterhaltung einen neuen Kommentar hinzu.{% endif %} |
| `Cc`-Adresse | Wenn du eine Unterhaltung abonniert hast, wirst du von {% data variables.product.product_name %} auf `Cc` gesetzt. Die zweite `Cc`-E-Mail-Adresse entspricht dem Benachrichtigungsgrund. Das Suffix für diese Benachrichtigungsgründe lautet {% data variables.notifications.cc_address %}. Zu den möglichen Benachrichtigungsgründen gehören folgende: <ul><li>`assign`: Ihnen wurde ein Issue oder Pull Request zugewiesen.</li><li>`author`: du hast ein Issue oder einen Pull Request erstellt.</li><li>`ci_activity`: Eine von Ihnen ausgelöste {% data variables.product.prodname_actions %}-Workflowausführung, wurde abgeschlossen.</li><li>`comment`: du hast ein Issue oder einen Pull Request kommentiert.</li><li>`manual`: Ein Issue oder Pull Request, das bzw. den du manuell abonniert hast, wurde aktualisiert.</li><li>`mention`: Du wurdest in einem Issue oder Pull Request erwähnt.</li><li>`push`: Jemand hat einen Commit für einen Pull Request erstellt, den du abonniert hast.</li><li>`review_requested`: Du oder ein Team, bei dem du Mitglied bist, wurdest bzw. wurde aufgefordert, einen Pull Request zu überprüfen.</li><li>`security_alert`: Von {% data variables.product.prodname_dotcom %} wurde ein Sicherheitsrisiko in einem Repository erkannt, für das du Warnungen erhältst.</li><li>`state_change`: Ein Issue oder Pull Request, das bzw. den du abonniert hast, wurde geschlossen oder geöffnet.</li><li>`subscribed`: Ein von Ihnen beobachtetes Repository wurde aktualisiert.</li><li>`team_mention`: Ein Team, dem du angehörst, wurde in einem Issue oder Pull Request erwähnt.</li><li>`your_activity`: du hast ein Issue oder einen Pull Request geöffnet, kommentiert oder geschlossen.</li></ul> |
| `mailing list` -Feld | In diesem Feld werden der Name des Repositorys und sein Inhaber identifiziert. Das Format dieser Adresse lautet immer `<repository name>.<repository owner>.{% data variables.command_line.backticks %}`. |
| `X-GitHub-Severity` -Feld | {% data reusables.repositories.security-alerts-x-github-severity %} Die möglichen Schweregrade sind:<ul><li>`low`</li><li>`moderate`</li><li>`high`</li><li>`critical`</li></ul>Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies). |

## Wähle deine Benachrichtigungseinstellungen

{% data reusables.notifications.access_notifications %} {% data reusables.notifications-v2.manage-notifications %}
3. Auf der Seite für Benachrichtigungseinstellungen wählst Du, wie du Benachrichtigungen erhalten willst, wenn:
    - Es Aktualisierungen in Repositories oder Teamdiskussionen gibt, die du beobachtest, oder in einer Unterhaltung, an der du teilnimmst. Weitere Informationen findest du unter [Informationen zu Teilnahme- und Überwachungsbenachrichtigungen](#about-participating-and-watching-notifications).
    - Du Zugriff erhältst auf ein neues Repository oder wenn du einem neuen Team beigetreten bist. Weitere Informationen findest du unter [Automatische Wiederholungsversuche](#automatic-watching).
    - Es sind neue {% data variables.product.prodname_dependabot_alerts %} in deinem Repository vorhanden. Weitere Informationen findest du unter [Optionen für Benachrichtigungen zu {% data variables.product.prodname_dependabot_alerts %}](#dependabot-alerts-notification-options).  {% ifversion fpt or ghec %}
    - Es Aktualisierungen zu Workflow-Ausführungen auf Repositorys gibt, die mit {% data variables.product.prodname_actions %} aufgesetzt wurden. Weitere Informationen findest du unter [Optionen für Benachrichtigungen zu {% data variables.product.prodname_actions %}](#github-actions-notification-options).{% endif %}{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5668 %}
    - Für Repositorys, die Organisationen gehören, deren Besitzer du bist, gibt es neue Bereitstellungsschlüssel. Weitere Informationen findest du unter [Optionen für Benachrichtigungen zu Organisationswarnungen](#organization-alerts-notification-options).{% endif %}

## Automatisches Beobachten

Standardmäßig wirst du jedes Mal, wenn du Zugriff auf ein neues Repository erhältst, automatisch mit der Beobachtung dieses Repository beginnen. Jedes Mal, wenn du einem neuen Team beitrittst, abonnierst du automatisch Updates und erhältst Benachrichtigungen, wenn dieses Team @mentioned wird. Wenn du keine automatischen Abonnements möchtest, kannst du die automatischen Beobachtungsoptionen deaktivieren.

  ![Optionen für automatisches Beobachten](/assets/images/help/notifications-v2/automatic-watching-options.png)

Wenn "Automatisch Repositories beobachten" deaktiviert ist, wirst du auch nicht automatisch deine eigenen Repositorys beobachten. Du musst dann zu deiner Repository-Seite navigieren und die Beobachtungsoption wählen.

## Konfiguration der Beobachtungseinstellungen für ein einzelnes Repository

Du kannst wählen, ob du ein einzelnes Repository ansehen möchtest oder nicht mehr. Du kannst auch angeben, ob du nur bei bestimmten Ereignistypen wie {% data reusables.notifications-v2.custom-notification-types %} (if enabled for the repository) benachrichtigt werden möchtest oder ob ein bestimmtes Repository vollkommen ignoriert werden soll.

{% data reusables.repositories.navigate-to-repo %}
2. Wähle in der oberen rechten Ecke das Dropdownmenü „Beobachten“ aus, um auf eine Überwachungsoption zu klicken.
{% ifversion fpt or ghes or ghae-issue-4910 or ghec %} ![Beobachtungsoptionen in einem Dropdownmenü für ein Repository](/assets/images/help/notifications-v2/watch-repository-options-custom.png)

   Mithilfe der Option **Benutzerdefiniert** kannst du Benachrichtigungen weiter anpassen, sodass du außer bei Teilnahme- und @mentions-Ereignissen nur bei bestimmten Ereignissen im Repository benachrichtigt wirst.
{% else %} ![Beobachtungsoptionen in einem Dropdownmenü für ein Repository](/assets/images/help/notifications-v2/watch-repository-options.png){% endif %} {% ifversion fpt or ghes or ghae-issue-4910 or ghec %} ![Benutzerdefinierte Beobachtungsoptionen in einem Dropdownmenü für ein Repository](/assets/images/help/notifications-v2/watch-repository-options-custom2-dotcom.png) Wenn du „Issues“ auswählst, wirst du über Updates für alle Issues (auch bei denen, die bereits vor der Auswahl dieser Option vorhandenwaren) im Repository benachrichtigt und abonnierst alle Issues im Repository. Wenn du in einem Pull Request in diesem Repository @mentioned wirst, erhältst du auch für dieses Repository Benachrichtigungen. Zudem abonnierst du damit Updates für diesen Pull Request und wirst bei Issues benachrichtigt.
   {% endif %}

## Wähle, wohin die E-Mail-Benachrichtigungen deiner Organisation gesendet werden

Wenn du einer Organisation angehörst, kannst du das E-Mail-Konto auswählen, an das die Benachrichtigungen für Aktivitäten in der Organisation gesendet werden sollen. Wenn du beispielsweise einer Organisation aus geschäftlichen Gründen angehörst, kannst du Dir die Benachrichtigungen an deine berufliche E-Mail-Adresse senden lassen statt an deine private.    

{% data reusables.notifications-v2.email-notification-caveats %}

{% data reusables.notifications.access_notifications %} {% data reusables.notifications-v2.manage-notifications %}
3. Wähle unter „Standardmäßige Benachrichtigungs-E-Mail" die E-Mail-Adresse, an die du Benachrichtigungen senden lassen möchtest.   
![Dropdownmenü mit standardmäßigen Benachrichtigungs-E-Mail-Adressen](/assets/images/help/notifications/notifications_primary_email_for_orgs.png) 
4. Klicken Sie auf **Speichern**.  

### E-Mail-Routen pro Organisation anpassen   

Wenn du in mindestens einer Organisation Mitglied bist, kannst du diese so konfigurieren, dass an eine{% ifversion fpt or ghec %} der verifizierten E-Mail-Adressen{% else %} die E-Mail-Adressen für dein Konto{% endif %} Benachrichtigungen gesendet werden. {% ifversion fpt or ghec %} Weitere Informationen findest du unter [Verifizieren einer E-Mail-Adresse](/articles/verifying-your-email-address).{% endif %} 

{% data reusables.notifications.access_notifications %} {% data reusables.notifications-v2.manage-notifications %}
3. Suche unter „Custom routing" (benutzerdefiniertes Routing) den Namen deiner Organisation in der Liste.   
![Liste der Organisationen und E-Mail-Adressen](/assets/images/help/notifications/notifications_org_emails.png)    
4. Klicke auf **Bearbeiten** neben der E-Mail-Adresse, die du ändern möchtest.
![E-Mail-Adressen einer Organisation bearbeiten](/assets/images/help/notifications/notifications_edit_org_emails.png)   
5. Wähle eine der verifizierten E-Mail-Adressen aus, und klicke auf **Speichern**.    
![Eigene E-Mail-Adressen pro Organisation ändern](/assets/images/help/notifications/notifications_switching_org_email.gif)

## Optionen für Benachrichtigungen zu {% data variables.product.prodname_dependabot_alerts %} 

{% data reusables.notifications.vulnerable-dependency-notification-enable %} {% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} {% data reusables.notifications.vulnerable-dependency-notification-options %}

Weitere Informationen zu den für dich verfügbaren Benachrichtigungsübermittlungsmethoden und Empfehlungen zur Optimierung von Benachrichtigungen für {% data variables.product.prodname_dependabot_alerts %} findest du unter [Konfigurieren von Benachrichtigungen für {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts).

{% ifversion fpt or ghes or ghec %}
## {% data variables.product.prodname_actions %} Benachrichtigungsoptionen

Wähle, wie du Aktualisierungen für Workflow-Ausführungen erhalten willst für Repositorys, die du beobachtest und die mit {% data variables.product.prodname_actions %} aufgesetzt sind. Du kannst auch wählen, nur Benachrichtigungen für fehlgeschlagene Workflow-Ausführungen zu erhalten.

  ![Benachrichtigungsoptionen für {% data variables.product.prodname_actions %}](/assets/images/help/notifications-v2/github-actions-notification-options.png)

{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5668 %}
## Optionen für Benachrichtigungen zu Organisationswarnungen 

Wenn du Besitzer einer Organisation bist, erhältst du standardmäßig E-Mail-Benachrichtigungen, wenn Organisationsmitglieder innerhalb der Organisation neue Bereitstellungsschlüssel zu Repositorys hinzufügen. Du kannst das Abonnement dieser Benachrichtigungen kündigen. Deaktiviere hierzu auf der Seite mit den Benachrichtigungseinstellungen unter „Organisationswarnungen“ die Option **E-Mail**. 

{% endif %}

{% ifversion fpt or ghes or ghec %}
## Verwalten deiner Benachrichtigungseinstellungen mit {% data variables.product.prodname_mobile %}

Wenn du {% data variables.product.prodname_mobile %} installierst, bist du automatisch für Web-Benachrichtigungen abonniert. Innerhalb der App kannst du Pushbenachrichtigungen für die folgenden Ereignisse aktivieren.
- Direkte Erwähnungen
- Zuweisungen zu Issues oder Pull Requests
- Anforderungen für den Review eines Pull Requests
- Anforderungen zum Genehmigen einer Bereitstellung

Du kannst auch festlegen, wann von {% data variables.product.prodname_mobile %} Pushbenachrichtigungen an dein mobiles Gerät gesendet werden sollen.

{% data reusables.mobile.push-notifications-on-ghes %}

### Verwalten deiner Benachrichtigungseinstellungen mit {% data variables.product.prodname_ios %}

1. Tippe im unteren Menü auf **Profil**.
2. Tippe zum Anzeigen deiner Einstellungen auf {% octicon "gear" aria-label="The Gear icon" %}.
3. Wenn du deine Benachrichtigungseinstellungen aktualisieren möchtest, tippe auf **Benachrichtigungen**, und aktiviere oder deaktiviere anschließend die gewünschten Pushbenachrichtigungen mit den Umschaltflächen.
4. Optional kannst du festlegen, wann von {% data variables.product.prodname_mobile %} Pushbenachrichtigungen an dein mobiles Gerät gesendet werden sollen. Tippe hierzu auf **Arbeitszeiten**, dann auf die Umschaltfläche **Benutzerdefinierte Arbeitszeiten**, und wähle anschließend aus, wann du Pushbenachrichtigungen erhalten möchtest.

### Verwalten deiner Benachrichtigungseinstellungen mit {% data variables.product.prodname_android %}

1. Tippe im unteren Menü auf **Profil**.
2. Tippe zum Anzeigen deiner Einstellungen auf {% octicon "gear" aria-label="The Gear icon" %}.
3. Wenn du deine Benachrichtigungseinstellungen aktualisieren möchtest, tippe auf **Benachrichtigungen konfigurieren**, und aktiviere oder deaktiviere anschließend die gewünschten Pushbenachrichtigungen mit den Umschaltflächen.
4. Optional kannst du festlegen, wann von {% data variables.product.prodname_mobile %} Pushbenachrichtigungen an dein mobiles Gerät gesendet werden sollen. Tippe hierzu auf **Arbeitszeiten**, dann auf die Umschaltfläche **Benutzerdefinierte Arbeitszeiten**, und wähle anschließend aus, wann du Pushbenachrichtigungen erhalten möchtest.

## Konfigurieren der Überwachungseinstellungen für ein einzelnes Repository mit {% data variables.product.prodname_mobile %} 

Du kannst wählen, ob du ein einzelnes Repository ansehen möchtest oder nicht mehr. Du kannst auch festlegen, dass du nur bei {% ifversion fpt or ghec %}bestimmten Ereignistypen wie Issues, Pull Requests, Diskussionen (sofern für das Repository aktiviert) und {% endif %}neuen Releases benachrichtigt werden möchtest, oder dass ein bestimmtes Repository vollkommen ignoriert werden soll.

1. Navigiere in {% data variables.product.prodname_mobile %} zur Hauptseite des Repositorys.
2. Tippe auf **Überwachen**.
   ![Die Schaltfläche „Überwachen“ in {% data variables.product.prodname_mobile %}](/assets/images/help/notifications-v2/mobile-watch-button.png)
3. Wenn du festlegen möchtest, für welche Aktivitäten du Benachrichtigungen erhalten möchtest, tippe auf die gewünschten Beobachtungseinstellungen.
   ![Dropdownmenü für Beobachtungseinstellungen in {% data variables.product.prodname_mobile %}](/assets/images/help/notifications-v2/mobile-watch-settings.png)

{% endif %}

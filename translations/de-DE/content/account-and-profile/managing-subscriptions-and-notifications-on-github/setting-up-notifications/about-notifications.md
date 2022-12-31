---
title: Informationen zu Benachrichtigungen
intro: 'Benachrichtigungen bieten Neuigkeiten über die Aktivitäten auf {% data variables.product.product_location %}, die du abonniert hast. Du kannst den Benachrichtigungseingang nutzen, um deine Nachrichten anzupassen, zu sortieren und zu verwalten.'
redirect_from:
  - /articles/notifications
  - /articles/about-notifications
  - /github/managing-subscriptions-and-notifications-on-github/about-notifications-beta
  - /github/managing-subscriptions-and-notifications-on-github/about-notifications
  - /github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
ms.openlocfilehash: 87034df88eb94c1d880806f01cb8748ed555a284
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147432024'
---
## Benachrichtigungen und Abonnements

Du kannst angeben, dass du über ein Abonnement fortlaufende Updates zu bestimmten Aktivitäten auf {% data variables.product.product_location %} erhalten möchtest. Benachrichtigungen sind Aktualisierungen, die du für bestimmte Aktivitäten erhältst, die du abonniert hast.

### Abonnementoptionen

Du kannst Benachrichtigungen abonnieren für:
- Eine Unterhaltung in einem spezifischen Issue, Pull Request oder Gist.
- Alle Aktivitäten in einem Repository oder in einer Team-Diskussion.
- CI-Aktivität wie beispielsweise der Status von Workflows in Repositorys, die mit {% data variables.product.prodname_actions %} aufgesetzt wurden. 
- {% data reusables.notifications-v2.custom-notification-types %} des Repositorys (falls aktiviert)

Du kannst auch automatisch alle Repositorys überwachen, auf die du Pushzugriff hast, mit Ausnahme von Forks. Du kannst allen anderen Repositorys überwachen, auf die du Zugriff hast, indem du auf **Überwachen** klickst.

Wenn du kein Interesse mehr an einer Unterhaltung hast, kannst du das Abonnement abmelden oder die Art der Benachrichtigungen anpassen, die du in der Zukunft erhalten möchtest. Wenn du beispielsweise nicht länger Benachrichtigungen zu einem bestimmten Repository erhalten möchtest, kannst du auf **Abonnement kündigen** klicken. Weitere Informationen findest du unter [Verwalten deiner Abonnements](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions).

### Standardabonnements

Im Allgemeinen werden Unterhaltungen für dich automatisch abonniert, wenn Folgendes gilt:
- Du hast automatische Beobachtungen auf Repositorys oder Teams, denen du beigetreten bist, in deinen Benachrichtigungseinstellungen nicht deaktiviert. Die Einstellung ist standardmäßig aktiviert.
- Du bist einem Issue oder Pull Request zugewiesen worden.
- Du hast einen Pull Request oder einen Issue eröffnet oder einen Beitrag in einer Teamdiskussion erstellt.
- Du hast einen Thread kommentiert.
- Du hast einen Thread abonniert, indem du manuell auf **Überwachen** oder **Abonnieren** geklickt hast.
- Dein Benutzername wurde mit einer @mentioned @erwähnt.
- Du hast den Status eine Thread geändert, zum Beispiel durch Schließen eines Issues oder Zusammenführen eines Pull Request.
- Ein Team wurde erwähnt, in dem du Mitglied bist.

Standardmäßig überwachst du auch automatisch alle Repositorys, die du erstellst und die im Besitz deines persönlichen Kontos sind.

Wenn du das Abonnement von automatisch abonnierten Unterhaltung kündigen möchtest, kannst du die Benachrichtigungseinstellungen ändern oder Aktivitäten auf {% data variables.product.product_location %} direkt entfolgen oder das Abonnement kündigen. Weitere Informationen findest du unter [Verwalten deiner Abonnements](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions).

## Benachrichtigungen und Abonnements anpassen

Du kannst die Benachrichtigungen über den Posteingang für Benachrichtigungen auf [https://github.com/notifications](https://github.com/notifications){% ifversion fpt or ghes or ghec %}, in der {% data variables.product.prodname_mobile %}-App{% endif %} und über E-Mail oder eine Kombination dieser Optionen anzeigen.

Konfiguriere deine Benachrichtigungseinstellungen, um die Art von Aktualisierungen anzupassen, die du erhalten möchtest, und wohin sie gesendet werden sollen. Weitere Informationen findest du unter [Konfigurieren von Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications).

Um deine Abonnements übersichtlich zu halten, überprüfe deine Abonnements und deine verfolgten Repositorys regelmäßig und melde sie bei Bedarf ab. Weitere Informationen findest du unter [Verwalten von Abonnement für Aktivitäten auf GitHub](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github).

Um anzupassen, wie du Aktualisierungen für bestimmte Pull Requests oder Issues erhalten möchtest, kannst du deine Einstellungen innerhalb des Issues oder Pull Requests konfigurieren. Weitere Informationen findest du unter [Selektierung einer einzelnen Benachrichtigung](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification#customizing-when-to-receive-future-updates-for-an-issue-or-pull-request).

{% ifversion fpt or ghes or ghec %} Du kannst Pushbenachrichtigungen in der {% data variables.product.prodname_mobile %}-App anpassen und planen. Weitere Informationen findest du unter [Konfigurieren von Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#managing-your-notification-settings-with-github-mobile).
{% endif %}

## Gründe für den Erhalt von Benachrichtigungen

Dein Posteingang ist mit Standardfiltern konfiguriert, die die häufigsten Gründe dafür darstellen, warum Personen ihre Benachrichtigungen nachverfolgen müssen. Weitere Informationen zu Posteingangsfiltern findest du unter [Verwalten von Benachrichtigungen aus deinem Posteingang](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#default-notification-filters).

In deinem Posteingang werden die `reasons` angezeigt, aufgrund derer du Bezeichnungen als Etikett erhältst.

![Begründungskennzeichnungen im Posteingang](/assets/images/help/notifications-v2/reasons-as-labels-in-inbox.png)

Du kannst deinen Posteingang nach dem Grund filtern, warum du Benachrichtigungen abonniert hast. Du kannst beispielsweise den `review-requested`-Abfragefilter verwenden, um nur Pull Requests anzuzeigen, bei denen jemand deine Überprüfung angefordert hat.

![Filtere Benachrichtigungen nach "Review Requested" (Review angefordert)](/assets/images/help/notifications-v2/review-requested-reason.png)

Wenn du Benachrichtigungen so konfiguriert hast, dass sie per E-Mail gesendet werden und du glaubst, dass du Benachrichtigungen erhältst, die dir nicht gehören, versuche die Fehlerbehebung über E-Mail-Kopfzeilen, die den beabsichtigten Empfänger anzeigen. Weitere Informationen findest du unter [Konfigurieren von Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications).

## Selektieren von Benachrichtigungen in deinem Posteingang

Um deine Benachrichtigungen effektiv zu verwalten, kannst du sie in deinem Posteingang mit folgenden Optionen selektieren:
- Entferne eine Benachrichtigung mit **Fertig** aus dem Posteingang. Du kannst die als **Fertig** gekennzeichneten Benachrichtigungen an einem Ort überprüfen, indem du in der Seitenleiste auf **Fertig** klicken oder die Abfrage `is:done` verwendest.
- Markiere eine Benachrichtigung als gelesen oder ungelesen.
- **Speichere** eine Benachrichtigung zur späteren Überprüfung. **Gespeicherte** Benachrichtigungen werden in deinem Posteingang gekennzeichnet. Du kannst alle **gespeicherten** Benachrichtigungen an einem Ort in der Seitenleiste überprüfen, indem du auf **Gespeichert** klickst oder die Abfrage `is:saved` verwendest.
- Melde eine Benachrichtigung automatisch ab und auch künftige Aktualisierungen dieser Unterhaltung. Das Abmelden entfernt die Benachrichtigung auch aus deinem Posteingang. Wenn du dich aus einer Unterhaltung abmeldest und später jemand deinen Benutzernamen oder ein Team erwähnt, von dem du Aktualisierungen erhältst, erhältst du wieder Benachrichtigungen von dieser Unterhaltung.

Über deinen Posteingang kannst du auch mehrere Benachrichtigungen auf einmal selektieren. Weitere Informationen findest du unter [Verwalten von Benachrichtigungen aus deinem Posteingang](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-multiple-notifications-at-the-same-time).

## Anpassen deines Posteingangs für Benachrichtigungen

Wenn du dich auf eine Gruppe von Benachrichtigungen in deinem Posteingang auf {% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} oder {% data variables.product.prodname_mobile %}{% endif %} konzentrieren möchtest, kannst du benutzerdefinierte Filter erstellen. Zum Beispiel kannst du einen benutzerdefinierten Filter für ein Open-Source-Projekt erstellen, zu dem du beiträgst, und nur Benachrichtigungen für das Repository sehen, in dem du erwähnt bist. Weitere Informationen findest du unter [Verwalten von Benachrichtigungen aus deinem Posteingang](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox). Weitere Beispiele zum Anpassen des Selektierungsworkflows findest du unter [Anpassen eines Workflows zur Selektierung von Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications).

## Richtlinie zur Aufbewahrung von Benachrichtigungen

Benachrichtigungen, die nicht als **Gespeichert** gekennzeichnet sind, werden fünf Monate lang gespeichert. Als **Gespeichert** gekennzeichnete Benachrichtigungen werden auf unbegrenzte Zeit gespeichert. Wenn deine gesicherte Benachrichtigung älter als 5 Monate ist und du die Speicherung aufhebst, wird die Benachrichtigung innerhalb eines Tages aus deinem Posteingang entfernt.

## Feedback und Support

Für Feedback oder Feature-Anfragen für Benachrichtigungen verwende das [{% data variables.product.prodname_github_community %}-Forum](https://github.com/orgs/community/discussions/categories/general).

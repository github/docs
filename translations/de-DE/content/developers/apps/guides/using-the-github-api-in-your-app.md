---
title: Verwenden der GitHub-API in deiner App
intro: 'Hier erfährst du, wie du deine App so einrichten kannst, dass sie auf Ereignisse lauscht. Zudem wird erläutert, wie du die Octokit-Bibliothek zum Ausführen von REST-API-Vorgängen verwenden kannst.'
redirect_from:
  - /apps/building-your-first-github-app
  - /apps/quickstart-guides/using-the-github-api-in-your-app
  - /developers/apps/using-the-github-api-in-your-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Build an app with the REST API
ms.openlocfilehash: 93679e41fe145406ed1eb99e2daaba6bf8e10e76
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145089908'
---
## Einführung

Dieser Leitfaden unterstützt dich dabei, eine GitHub-App zu erstellen und auf einem Server auszuführen. Mit der von Ihnen erstellten App wird allen neuen Issues, die im Repository geöffnet werden, in dem die App installiert ist, eine Bezeichnung hinzugefügt.

In diesem Projekt wirst du durch die folgenden Schritte geführt:

* Programmieren der App zum Überwachen von Ereignissen
* Verwenden der Octokit.rb-Bibliothek zum Ausführen von REST-API-Vorgängen

{% data reusables.apps.app-ruby-guides %}

Nachdem du die Schritte durchgearbeitet hast, kannst du andere Arten von Integrationen mithilfe der vollständigen Suite der GitHub-APIs entwickeln. {% ifversion fpt or ghec %}Du kannst erfolgreiche Beispiele für Apps auf [GitHub Marketplace](https://github.com/marketplace) und [Works with GitHub](https://github.com/works-with) auschecken.{% endif %}

## Voraussetzungen

Du dürftest es als hilfreich empfinden, ein grundlegendes Verständnis von Folgendem zu haben:

* [GitHub Apps](/apps/about-apps)
* [Webhooks](/webhooks)
* [Programmiersprache Ruby](https://www.ruby-lang.org/en/)
* [REST-APIs](/rest)
* [Sinatra](http://sinatrarb.com/)

Du kannst die Schritte jedoch mit jedem Kenntnisstand nachverfolgen. Auf während des Durcharbeitens benötigte Informationen wird jeweils mit einem Link verwiesen.

Bevor du beginnst, musst du folgende Aufgaben durchführen:

1. Klone das Repository [Using the GitHub API in your app](https://github.com/github-developer/using-the-github-api-in-your-app) (Verwenden der GitHub-API in deiner App).
  ```shell
    $ git clone https://github.com/github-developer/using-the-github-api-in-your-app.git
  ```

  In dem Verzeichnis befindet sich die Datei `template_server.rb` mit dem Vorlagencode, den du bei diesem Schnellstart verwendest, und die Datei `server.rb` mit dem gesamten Projektcode.

1. Gehe wie im Schnellstart [Einrichten der Entwicklungsumgebung](/apps/quickstart-guides/setting-up-your-development-environment/) beschrieben vor, um den `template_server.rb`-App-Server zu konfigurieren und auszuführen. Wenn du zuvor einen anderen GitHub-App-Schnellstart als das [Einrichten der Entwicklungsumgebung](/apps/quickstart-guides/setting-up-your-development-environment/) abgeschlossen hast, solltest du eine _neue_ GitHub-App registrieren und einen neuen Smee-Kanal starten, der mit dieser Schnellstartanleitung verwendet werden soll.

  Diese Schnellstartanleitung enthält denselben `template_server.rb`-Code wie die Schnellstartanleitung [Einrichten der Entwicklungsumgebung](/apps/quickstart-guides/setting-up-your-development-environment/). **Hinweis:** Wenn du die Schnellstartanleitung [Einrichten der Entwicklungsumgebung](/apps/quickstart-guides/setting-up-your-development-environment/) durcharbeitest, achte darauf, dass du die Projektdateien verwendest, die im Repository [Using the GitHub API in your app](https://github.com/github-developer/using-the-github-api-in-your-app) (Verwenden der GitHub-API in deiner App) enthalten sind.

  Bei Problemen beim Einrichten der GitHub-App-Vorlage findest du im Abschnitt zur [Problembehandlung](/apps/quickstart-guides/setting-up-your-development-environment/#troubleshooting) weitere Informationen.

## Erstellen der App

Nachdem du nun mit dem `template_server.rb`-Code vertraut bist, erstelle Code, mit dem die Bezeichnung `needs-response` automatisch allen geöffneten Issues im Repository hinzugefügt wird, in dem die App installiert ist.

Die Datei `template_server.rb` enthält App-Vorlagencode, der noch nicht angepasst wurde. In dieser Datei wird Platzhaltercode zum Verarbeiten von Webhookereignissen und anderer Code zum Initialisieren eines Octokit.rb-Clients angezeigt.

{% note %}

**Hinweis:** `template_server.rb` enthält viele Codekommentare, die diesen Leitfaden ergänzen und zusätzliche technische Details erläutern. Du könntest es hilfreich finden, die Kommentare in dieser Datei jetzt zu lesen, bevor du mit diesem Abschnitt fortfährst. So erhältst du einen Überblick über die Funktionsweise des Codes.

Der endgültige angepasste Code, den du am Ende dieses Leitfadens erstellst, wird in [`server.rb`](https://github.com/github-developer/using-the-github-api-in-your-app/blob/master/server.rb) bereitgestellt. Versuche aber, bis zum Ende zu warten, bis du dir den Code ansiehst.

{% endnote %}

Dies sind die Schritte, die du ausführst, um deine erste GitHub-App zu erstellen:

1. [Aktualisieren von App-Berechtigungen](#step-1-update-app-permissions)
2. [Hinzufügen von Ereignisbehandlung](#step-2-add-event-handling)
3. [Erstellen einer neuen Bezeichnung](#step-3-create-a-new-label)
4. [Hinzufügen von Bezeichnungsbehandlung](#step-4-add-label-handling)

## Schritt 1: Aktualisieren von App-Berechtigungen

Bei der [ersten Registrierung der App](/apps/quickstart-guides/setting-up-your-development-environment/#step-2-register-a-new-github-app) hast du die Standardberechtigungen übernommen, was bedeutet, dass die App auf die meisten Ressourcen keinen Zugriff hat. In diesem Beispiel benötigt die App die Berechtigung zum Lesen von Issues und Schreiben von Bezeichnungen.

So aktualisierst du die Berechtigungen deiner App:

1. Wähle auf der Seite der [App-Einstellungen](https://github.com/settings/apps) die App aus, und klicke in der Seitenleiste auf **Permissions & Webhooks** (Berechtigungen und Webhooks).
1. Suche im Abschnitt „Permissions“ (Berechtigungen) nach „Issues“, und wähle im Dropdownmenü „Access“ (Zugriff) den Eintrag **Read & Write** (Lesen und Schreiben) aus. Die Beschreibung gibt an, dass mit dieser Option Zugriff sowohl auf Issues als auch auf Bezeichnungen gewährt wird. Dies ist genau das, was du benötigst.
1. Wähle im Abschnitt „Subscribe to events“ (Ereignisse abonnieren) die Option **Issues** zum Abonnieren des Ereignisses aus.
{% data reusables.apps.accept_new_permissions_steps %}

Sehr gut! Deine App verfügt nun über die Berechtigung zum Ausführen der gewünschten Aufgaben. Jetzt kannst du den für die Funktion nötigen Code hinzufügen.

## Schritt 2: Hinzufügen von Ereignisbehandlung

Die erste notwendige Aufgabe der App ist die Überwachung auf neue Issues, die geöffnet werden. Nachdem du das Ereignis **Issues** abonniert hast, erhältst du den [`issues`](/webhooks/event-payloads/#issues)-Webhook, der ausgelöst wird, wenn bestimmte mit Issues verbundene Aktionen auftreten. Du kannst diesen Ereignistyp nach der gewünschten Aktion im Code filtern.

GitHub sendet Webhooknutzdaten als `POST`-Anforderungen. Da du die Smee-Webhooknutzdaten an `http://localhost/event_handler:3000` weitergeleitet hast, erhält der Server die `POST`-Anforderungsnutzdaten auf der `post '/event_handler'`-Route.

In der Datei `template_server.rb`, die du im Abschnitt mit den [Voraussetzungen](#prerequisites) heruntergeladen hast, befindet sich bereits eine leere `post '/event_handler'`-Route. Die leere Route sieht wie folgt aus:

``` ruby
  post '/event_handler' do

    # # # # # # # # # # # #
    # ADD YOUR CODE HERE  #
    # # # # # # # # # # # #

    200 # success status
  end
```

Verwende diese Route zur Behandlung des Ereignisses `issues`, indem du den folgenden Code hinzufügst:

``` ruby
case request.env['HTTP_X_GITHUB_EVENT']
when 'issues'
  if @payload['action'] === 'opened'
    handle_issue_opened_event(@payload)
  end
end
```

Alle Ereignisse, die von GitHub gesendet werden, enthalten den Anforderungsheader `HTTP_X_GITHUB_EVENT`, der den Ereignistyp in der `POST`-Anforderung angibt. Jetzt bist du nur an `issues`-Ereignistypen interessiert. Alle Ereignisse enthalten ein zusätzliches `action`-Feld, das die Aktion angibt, durch die die Ereignisse ausgelöst wurden. Bei `issues` kann das `action`-Feld `assigned`, `unassigned`, `labeled`, `unlabeled`, `opened`, `edited`, `milestoned`, `demilestoned`, `closed` oder `reopened` angeben.

Versuche zum Testens des Ereignishandlers, eine temporäre Hilfsmethode hinzuzufügen. Du führst später eine Aktualisierung durch, wenn du die [Bezeichnungsbehandlung hinzufügst](#step-4-add-label-handling). Füge jetzt den folgenden Code im `helpers do`-Abschnitt des Codes hinzu. Du kannst die neue Methode über oder unter einer der anderen Hilfsmethoden platzieren. Die Reihenfolge spielt keine Rolle.

``` ruby
def handle_issue_opened_event(payload)
  logger.debug 'An issue was opened!'
end
```

Diese Methode empfängt JSON-formatierte Ereignisnutzdaten als Argument. Dies bedeutet, dass du die Nutzdaten in der Methode analysieren und Detailinformationen für alle benötigten Daten anzeigen kannst. Du könntest es hilfreich finden, irgendwann die vollständigen Nutzdaten zu überprüfen: Versuche es mit einem Wechsel von `logger.debug 'An issue was opened!` zu `logger.debug payload`. Die Nutzdatenstruktur, die du siehst, sollte mit dem übereinstimmen, was [in der `issues`-Webhook-Ereignisdokumentation](/webhooks/event-payloads/#issues) angezeigt wird.

Sehr gut! Es ist an der Zeit, die Änderungen zu testen.

{% data reusables.apps.sinatra_restart_instructions %}

Rufe im Browser das Repository auf, in dem du die App installiert hast. Öffne ein neues Issue in diesem Repository. Das Issue kann einen beliebigen Inhalt aufweisen. Es wird nur zu Testzwecken verwendet.

Wenn du wieder auf dein Terminal blickst, solltest du eine Meldung in der Ausgabe sehen, die besagt: `An issue was opened!` Gut gemacht. Du hast der App einen Ereignishandler hinzugefügt. 💪

## Schritt 3: Erstellen einer neuen Bezeichnung

Gut. Von der App kann festgestellt werden, wann Issues geöffnet werden. Nun möchtest du, dass die App einem neu geöffneten Issue in einem Repository, in dem die App installiert ist, die Bezeichnung `needs-response` hinzufügt.

Bevor die Bezeichnung irgendwo _hinzugefügt_ werden kann, musst du die benutzerdefinierte Bezeichnung im Repository _erstellen_. Dies ist nur einmal erforderlich. Erstelle für die Zwecke dieser Anleitung die Bezeichnung manuell auf GitHub. Klicke im Repository auf **Issues**, dann auf **Labels** (Bezeichnungen), und klicke dann auf **New label** (Neue Bezeichnung). Benenne die neue Bezeichnung als `needs-response`.

{% tip %}

**Tipp**: Wäre es nicht großartig, wenn die App die Bezeichnung programmgesteuert erstellen könnte? [Das ist möglich](/rest/reference/issues#create-a-label). Versuche, den Code für diese Aufgabe selbständig hinzuzufügen, nachdem du die Schritte in diesem Leitfaden abgeschlossen hast.

{% endtip %}

Nachdem die Bezeichnung jetzt vorhanden ist, kannst du die App dafür programmieren, die REST-API dazu zu verwenden, [die Bezeichnung jedem neu geöffneten Issue hinzuzufügen](/rest/reference/issues#add-labels-to-an-issue).

## Schritt 4. Hinzufügen von Bezeichnungsbehandlung

Gut gemacht. Du hast es zum letzten Schritt geschafft: Hinzufügen der Bezeichnungshandhabung zu deiner App. Für diese Aufgabe verwendest du die [Octokit.rb-Ruby-Bibliothek](http://octokit.github.io/octokit.rb/).

Suche in der Octokit.rb-Dokumentation nach der Liste der [Bezeichnungsmethoden](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html). Die zu verwendende Methode lautet [`add_labels_to_an_issue`](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html#add_labels_to_an_issue-instance_method).

Suche wieder in `template_server.rb` nach der zuvor definierten Methode:

``` ruby
def handle_issue_opened_event(payload)
  logger.debug 'An issue was opened!'
end
```

Die [`add_labels_to_an_issue`](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html#add_labels_to_an_issue-instance_method)-Dokumentation zeigt, dass du drei Argumente an diese Methode übergeben musst:

* Repository (Zeichenfolge im `"owner/name"`-Format)
* Issuenummer (ganze Zahl)
* Bezeichnungen (Array)

Du kannst die Nutzdaten analysieren, um sowohl das Repository als auch die Issuenummer abzurufen. Da der Bezeichnungsname immer gleich ist (`needs-response`), kannst du ihn als hartcodierte Zeichenfolge im Beschriftungsarray übergeben. Wenn du diese Teile zusammensetzt, sieht die aktualisierte Methode möglicherweise wie folgt aus:

``` ruby
# When an issue is opened, add a label
def handle_issue_opened_event(payload)
  repo = payload['repository']['full_name']
  issue_number = payload['issue']['number']
  @installation_client.add_labels_to_an_issue(repo, issue_number, ['needs-response'])
end
```

Versuche, ein neues Issue im Testrepository zu öffnen, und achte darauf, was passiert. Wenn nicht sofort etwas passiert, versuche es mit einer Aktualisierung.

Es wird nicht viel im Terminal angezeigt, _aber_ du solltest erkennen, dass ein Botbenutzer dem Issue eine Bezeichnung hinzugefügt hat.

{% note %}

**Hinweis:** Wenn von GitHub-Apps Aktionen über die API ausgeführt werden, z. B. das Hinzufügen von Bezeichnungen, werden diese Aktionen in GitHub so angezeigt, als seien sie von _Botkonten_ ausgeführt worden. Weitere Informationen findest du unter [Computer- und Botkonten im Vergleich](/apps/differences-between-apps/#machine-vs-bot-accounts).

{% endnote %}

Wenn ja, gut gemacht. Du hast erfolgreich eine funktionierende App erstellt. 🎉

Du kannst den endgültigen Code in `server.rb` im [App-Vorlagenrepository](https://github.com/github-developer/using-the-github-api-in-your-app) sehen.

Weitere Informationen dazu, wie du von dieser Stelle aus fortfahren kannst, findest du unter [Nächste Schritte](#next-steps).

## Problembehandlung

Im Folgenden werden einige häufige Probleme beschrieben und entsprechende Lösungen vorgeschlagen. Wenn du auf andere Probleme stößt, erhältst du im {% data variables.product.prodname_support_forum_with_url %} Unterstützung oder Beratung.

* **F:** Mein Server überwacht keine Ereignisse. Der Smee-Client wird in einem Terminalfenster ausgeführt, und ich sende Ereignisse auf GitHub.com, indem ich neue Issues öffne, aber ich sehe keine Ausgabe im Terminalfenster, in dem ich den Server ausführe.

    **A:** Möglicherweise verfügst du nicht über die richtige Smee-Domäne in den App-Einstellungen. Besuche die [Seite der App-Einstellungen](https://github.com/settings/apps), und überprüfe die in [Registrieren einer neuen App mit GitHub](/apps/quickstart-guides/setting-up-your-development-environment/#step-2-register-a-new-github-app) angezeigten Felder. Vergewissere dich, dass die Domäne in diesen Feldern mit der Domäne übereinstimmt, die du im Befehl `smee -u <unique_channel>` unter [Starten eines neuen Smee-Kanals](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel) verwendet hast.

* **F:** Meine App funktioniert nicht. Ich habe ein neues Issue geöffnet, aber auch nach dem Aktualisieren wurde ihm keine Bezeichnung hinzugefügt.

    **A:** Vergewissere dich, dass alle folgenden Punkte zutreffen:

    * Du hast [die App in dem Repository installiert](/apps/quickstart-guides/setting-up-your-development-environment/#step-7-install-the-app-on-your-account), in dem du das Issue öffnest.
    * Die [Ausführung des Smee-Clients](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel) erfolgt in einem Terminalfenster.
    * Die [Ausführung des Webservers](/apps/quickstart-guides/setting-up-your-development-environment/#step-6-start-the-server) erfolgt ohne Fehler in einem anderen Terminalfenster.
    * Die App verfügt über [Lese- und Schreibberechtigungen für Issues und hat Issueereignisse abonniert](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel).
    * Du [hast deine E-Mails](#step-1-update-app-permissions) nach dem Aktualisieren der Berechtigungen überprüft und die neuen Berechtigungen akzeptiert.

## Schlussbemerkung

Nachdem du diesen Leitfaden durchgearbeitet hast, bist du nun mit den grundlegenden Bausteinen für die Entwicklung von GitHub-Apps vertraut. Du hast folgende Schritte durchgeführt:

* Programmieren der App zum Überwachen von Ereignissen
* Verwenden der Octokit.rb-Bibliothek zum Ausführen von REST-API-Vorgängen

## Nächste Schritte

Hier einige Ideen, was du als Nächstes tun kannst:

* [Schreibe die App mit GraphQL neu](https://developer.github.com/changes/2018-04-30-graphql-supports-github-apps/).
* Schreibe die App in Node.js mit [Probot](https://github.com/probot/probot) neu.
* Lass von der App überprüfen, ob die `needs-response`-Bezeichnung bereits für das Issue vorhanden ist, und, falls nicht, füge sie hinzu.
* Wenn der Bot die Bezeichnung erfolgreich hinzufügt, zeige eine Nachricht im Terminal an. (Hinweis: Vergleiche die `needs-response`-Bezeichnungs-ID mit der ID der Bezeichnung in den Nutzdaten als Bedingung für die Nachricht, sodass die Nachricht nur angezeigt wird, wenn die relevante Bezeichnung hinzugefügt wird, und nicht, wenn eine andere Bezeichnung hinzugefügt wird.)
* Füge der App eine Landing Page hinzu, und verbinde eine [Sinatra-Route](https://github.com/sinatra/sinatra#routes) dafür.
* Verschiebe den Code auf einen gehosteten Server (z. B. Heroku). Denke daran, die App-Einstellungen mit der neuen Domäne zu aktualisieren.
* Teile dein Projekt, oder bitte im {% data variables.product.prodname_support_forum_with_url %}{% ifversion fpt or ghec %} um Rat.
* Hast du eine ganz neue App erstellt, von der du glaubst, dass andere sie hilfreich finden? [Füge die App dem GitHub Marketplace hinzu](/apps/marketplace/creating-and-submitting-your-app-for-approval/). {% endif %}

---
title: Erstellen von CI-Tests mit der API für Überprüfungen
intro: 'Erstelle einen kontinuierlichen Integrationsserver, um Tests mithilfe einer {% data variables.product.prodname_github_app %} und der API für Überprüfungen auszuführen.'
redirect_from:
  - /apps/quickstart-guides/creating-ci-tests-with-the-checks-api
  - /developers/apps/creating-ci-tests-with-the-checks-api
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: CI tests using Checks API
ms.openlocfilehash: 0459714ae9ffb8094c70a714a60a66a19964424f
ms.sourcegitcommit: 06d16bf9a5c7f3e7107f4dcd4d06edae5971638b
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179677'
---
## Einführung

Dieser Leitfaden enthält eine Einführung in [GitHub-Apps](/apps/) und in die [API für Überprüfungen](/rest/reference/checks), mit der du einen CI-Server (Continuous Integration) zum Ausführen von Tests erstellen kannst.

Bei der Softwarepraktik der CI erfolgen häufige Codecommits an ein gemeinsames Repository. Codecommits in kurzen Abständen tragen dazu bei, Fehler frühzeitiger aufzudecken, und verringern die Codemenge, die ein Entwickler auf der Suche nach der Fehlerursache debuggen muss. Durch häufige Code-Aktualisierungen lassen sich zudem Änderungen von verschiedenen Mitgliedern eines Software-Entwicklungsteams leichter zusammenführen. Dies bedeutet einen erheblichen Vorteil für die Entwickler, die sich damit stärker auf das Schreiben des Codes konzentrieren können, statt Fehler debuggen oder Mergekonflikte beheben zu müssen. 🙌

Auf einem CI-Server wird Code zum Ausführen von CI-Tests wie Code-Linter (zum Überprüfen der Formatvorlagenformatierung), Sicherheitsüberprüfungen, Code Coverage und andere Überprüfungen bei neuen Codecommits in einem Repository gehostet. CI-Server können auch Code für Staging- oder Produktionsserver erstellen und bereitstellen. Einige Beispiele für die Arten von CI-Tests, die du mit einer GitHub-App erstellen kannst, findest du unter den [CI-Apps](https://github.com/marketplace/category/continuous-integration), die im GitHub Marketplace verfügbar sind.

{% data reusables.apps.app-ruby-guides %}

### Übersicht über die API für Überprüfungen

Mit der [API für Überprüfungen](/rest/reference/checks) kannst du CI-Tests einrichten, die automatisch für jeden Codecommit in einem Repository ausgeführt werden. Die API für Überprüfungen liefert zu jeder Überprüfung detaillierte Informationen auf der Registerkarte **Überprüfungen** des Pull Requests auf GitHub. Mit der API für Überprüfungen kannst du Anmerkungen mit zusätzlichen Details für bestimmte Codezeilen erstellen. Anmerkungen werden auf der Registerkarte **Überprüfungen** angezeigt. Wenn du eine Anmerkung für eine Datei erstellst, die Teil des Pull Requests ist, werden die Anmerkungen auch auf der Registerkarte **Geänderte Dateien** angezeigt.

Eine _Überprüfungssammlung_ ist eine Gruppe von _Überprüfungsausführungen_ (einzelne CI-Tests). Sowohl die Sammlung als auch die Ausführungen enthalten _Status_, die in einem Pull Request auf GitHub angezeigt werden. Du kannst Status verwenden, um zu bestimmen, wann mit einem Codecommit Fehler verursacht werden. Durch die Verwendung dieser Status mit [geschützten Branches](/rest/reference/repos#branches) kann verhindert werden, dass Pull Requests vorzeitig zusammengeführt werden. Weitere Informationen findest du unter [About protected branches (Informationen zu geschützten Branches)](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging).

Jedes Mal, wenn neuer Code in das Repository gepusht wird, sendet die API für Überprüfungen das [`check_suite`-Webhook-Ereignis](/webhooks/event-payloads/#check_suite) an alle in einem Repository installierten GitHub-Apps. Damit die App alle Ereignisaktionen der API für Überprüfungen erhalten kann, muss sie über die Berechtigung `checks:write` verfügen. GitHub erstellt im Rahmen des Standardablaufs automatisch `check_suite`-Ereignisse für neue Codecommits in einem Repository, obwohl du [Repositoryeinstellungen für Überprüfungssammlungen aktualisieren](/rest/reference/checks#update-repository-preferences-for-check-suites) kannst, wenn du möchtest. Und so sieht der Standardablauf aus:

1. Wenn Code in das Repository gepusht wird, sendet GitHub das `check_suite`-Ereignis mit der Aktion `requested` an alle im Repository installierten GitHub-Apps, die über die Berechtigung `checks:write` verfügen. Dieses Ereignis enthält für die Apps die Informationen, dass Code pusht wurde und dass GitHub automatisch eine neue Überprüfungssammlung erstellt hat.
1. Wenn deine App dieses Ereignis empfängt, kann sie dieser Sammlung [Überprüfungsausführungen hinzufügen](/rest/reference/checks#create-a-check-run).
1. Deine Überprüfungsausführungen können [Anmerkungen](/rest/reference/checks#annotations-object) enthalten, die in bestimmten Codezeilen angezeigt werden.

**In diesem Leitfaden lernst du Folgendes:**

* Teil 1: Einrichten des Frameworks für einen CI-Server mithilfe der API für Überprüfungen
  * Konfigurieren einer GitHub-App als Server, auf dem Ereignisse der API für Überprüfungen empfangen werden
  * Erstellen neuer Überprüfungsausführungen für CI-Tests, wenn ein Repository neu gepushte Commits empfängt
  * Erneutes Ausführen von Überprüfungsausführungen, wenn die Aktion auf GitHub angefordert wird
* Teil 2: Aufbauen auf dem erstellten CI-Serverframework, durch Hinzufügen eines Linter-CI-Tests
  * Aktualisieren einer Überprüfungsausführung mit den Details `status`, `conclusion` und `output`
  * Erstellen von Anmerkungen zu Codezeilen, die in GitHub auf den Registerkarten **Überprüfungen** und **Geänderte Dateien** eines Pull Requests angezeigt werden
  * Automatische Korrektur von Linter-Empfehlungen durch Anzeige der Schaltfläche „Problem beheben“ auf der Registerkarte **Überprüfungen** des Pull Requests

Anhand der folgenden Demo kannst du sehen, wie die API für Überprüfungen auf dem CI-Server funktioniert, wenn du diesen Schnellstart abgeschlossen hast:

![Demo zum Schnellstart für die API für Überprüfungen auf dem CI-Server](/assets/images/github-apps/github_apps_checks_api_ci_server.gif)

## Voraussetzungen

Zunächst solltest du dich mit [GitHub-Apps](/apps/), [Webhooks](/webhooks) und der [API für Überprüfungen](/rest/reference/checks) vertraut machen, sofern du dies nicht bereits getan hast. Weitere APIs findest du in der [Dokumentation zu REST-API](/rest). Die API für Überprüfungen ist auch in [GraphQL](/graphql) verfügbar. Bei diesem Schnellstart liegt der Fokus jedoch auf REST. Weitere Details findest du in den Objekten [Überprüfungssammlung](/graphql/reference/objects#checksuite) und [Überprüfungsausführung](/graphql/reference/objects#checkrun) von GraphQL.

Für die GitHub-REST-API verwendest du die [Programmiersprache Ruby](https://www.ruby-lang.org/en/), den Webhook-Nutzdatenbereitstellungsdienst [Smee](https://smee.io/), die [Ruby-Bibliothek Octokit.rb](http://octokit.github.io/octokit.rb/) und zum Erstellen der App für den CI-Server mit der API für Überprüfungen das [Webframework Sinatra](http://sinatrarb.com/).

Für dieses Projekt musst du kein Experte für diese Tools oder Konzepte sein. Dieser Leitfaden enthält eine Anleitung für alle erforderlichen Schritte. Bevor du mit dem Erstellen von CI-Tests mit der API für Überprüfungen beginnst, musst du folgende Schritte ausführen:

1. Klone das Repository [Erstellen von CI-Tests mit der API für Überprüfungen](https://github.com/github-developer/creating-ci-tests-with-the-checks-api).
  ```shell
    $ git clone https://github.com/github-developer/creating-ci-tests-with-the-checks-api.git
  ```

  In dem Verzeichnis befindet sich die Datei `template_server.rb` mit dem Vorlagencode, den du bei diesem Schnellstart verwendest, und die Datei `server.rb` mit dem gesamten Projektcode.

1. Gehe wie im Schnellstart [Einrichten der Entwicklungsumgebung](/apps/quickstart-guides/setting-up-your-development-environment/) beschrieben vor, um den App-Server zu konfigurieren und auszuführen. **Hinweis:** Statt [das GitHub-App-Vorlagenrepository](/apps/quickstart-guides/setting-up-your-development-environment/#prerequisites) zu klonen, kannst du die Datei `template_server.rb` in dem Repository verwenden, das du im vorherigen Schritt in diesem Schnellstart geklont hast.

  Wenn du bereits einen Schnellstart für eine GitHub-App durchgeführt hast, musst du für diesen Schnellstart eine _neue_ GitHub-App registrieren und einen neuen Smee-Kanal starten.

  Bei Problemen beim Einrichten der GitHub-App-Vorlage findest du im Abschnitt zur [Problembehandlung](/apps/quickstart-guides/setting-up-your-development-environment/#troubleshooting) weitere Informationen.

## Teil 1: Erstellen der API für Überprüfungen

In diesem Teil wird der für den Empfang von `check_suite`-Webhookereignissen erforderliche Code hinzugefügt. Zudem werden Überprüfungsausführungen erstellt und aktualisiert. Darüber hinaus erfährst du auch, wie Überprüfungsausführungen erstellt werden, wenn eine Überprüfung auf GitHub erneut angefordert wurde. Am Ende dieses Abschnitts kannst du die Überprüfungsausführung anzeigen, die du in einem Pull Request auf GitHub erstellt hast.

In diesem Abschnitt werden mit der Überprüfungsausführung noch keine Überprüfungen für den Code durchgeführt. Diese Funktionalität wird erst in [Teil 2: Erstellen des CI-Tests „Octo RuboCop“](#part-2-creating-the-octo-rubocop-ci-test) hinzugefügt.

Du solltest bereits einen Smee-Kanal konfiguriert haben, über den Webhooknutzdaten an deinen lokalen Server weitergeleitet werden. Dein Server sollte ausgeführt werden und mit der GitHub-App verbunden sein, die du in einem Testrepository registriert und installiert hast. Wenn du die Schritte unter [Einrichten der Entwicklungsumgebung](/apps/quickstart-guides/setting-up-your-development-environment/) noch nicht durchgeführt hast, hole dies nun nach, damit du fortfahren kannst.

Jetzt geht‘s los! Folgende Schritte werden in Teil 1 durchgeführt:

1. [Aktualisieren von App-Berechtigungen](#step-11-updating-app-permissions)
1. [Hinzufügen der Ereignisbehandlung](#step-12-adding-event-handling)
1. [Erstellen einer Überprüfungsausführung](#step-13-creating-a-check-run)
1. [Aktualisieren einer Überprüfungsausführung](#step-14-updating-a-check-run)

## Schritt 1.1. Aktualisieren von App-Berechtigungen

Bei der [ersten Registrierung der App](#prerequisites) hast du die Standardberechtigungen übernommen, was bedeutet, dass die App auf die meisten Ressourcen keinen Zugriff hat. In diesem Beispiel benötigt die App die Berechtigung zum Lesen und Schreiben von Überprüfungen.

So aktualisierst du die Berechtigungen deiner App:

1. Wähle auf der Seite [App-Einstellungen](https://github.com/settings/apps) deine App aus, und klicke in der Seitenleiste auf **Berechtigungen und Webhooks**.
1. Wähle im Abschnitt „Berechtigungen“ unter „Überprüfungen“ im Dropdownmenü „Zugriff“ den Eintrag **Lesen und Schreiben** aus.
1. Wähle im Abschnitt „Ereignisse abonnieren“ die Optionen **Überprüfungssammlung** und **Überprüfungsausführung** aus, um diese Ereignisse zu abonnieren.
{% data reusables.apps.accept_new_permissions_steps %}

Sehr gut! Deine App verfügt nun über die Berechtigung zum Ausführen der gewünschten Aufgaben. Jetzt kannst du den Code zur Behandlung der Ereignisse hinzufügen.

## Schritt 1.2. Hinzufügen der Ereignisbehandlung

Nachdem du für deine App die Ereignisse **Überprüfungssammlung** und **Überprüfungsausführung** abonniert hast, können nun die Webhooks [`check_suite`](/webhooks/event-payloads/#check_suite) und [`check_run`](/webhooks/event-payloads/#check_run) empfangen werden. GitHub sendet Webhooknutzdaten als `POST`-Anforderungen. Da du die Smee-Webhooknutzdaten an `http://localhost/event_handler:3000` weitergeleitet hast, erhält der Server die `POST`-Anforderungsnutzdaten auf der `post '/event_handler'`-Route.

In der Datei `template_server.rb`, die du im Abschnitt mit den [Voraussetzungen](#prerequisites) heruntergeladen hast, befindet sich bereits eine leere `post '/event_handler'`-Route. Die leere Route sieht wie folgt aus:

``` ruby
  post '/event_handler' do

    # # # # # # # # # # # #
    # ADD YOUR CODE HERE  #
    # # # # # # # # # # # #

    200 # success status
  end
```

Verwende diese Route zur Behandlung des Ereignisses `check_suite`, indem du den folgenden Code hinzufügst:

``` ruby
# Get the event type from the HTTP_X_GITHUB_EVENT header
case request.env['HTTP_X_GITHUB_EVENT']
when 'check_suite'
  # A new check_suite has been created. Create a new check run with status queued
  if @payload['action'] == 'requested' || @payload['action'] == 'rerequested'
    create_check_run
  end
end
```

Alle Ereignisse, die von GitHub gesendet werden, enthalten den Anforderungsheader `HTTP_X_GITHUB_EVENT`, der den Ereignistyp in der `POST`-Anforderung angibt. Im Moment sind nur Ereignisse vom Typ `check_suite` von Interesse, die immer dann gesendet werden, wenn eine neue Überprüfungssammlung erstellt wird. Alle Ereignisse enthalten ein zusätzliches `action`-Feld, das die Aktion angibt, durch die die Ereignisse ausgelöst wurden. Bei `check_suite` kann das `action`-Feld `requested`, `rerequested` oder `completed` angeben.

Mit der Aktion `requested` wird jedes Mal, wenn Code in das Repository gepusht wird, eine Überprüfungsausführung angefordert, während mit der Aktion `rerequested` angefordert wird, dass du für Code, der im Repository bereits vorhanden ist, erneut eine Überprüfung ausführst. Da für die beiden Aktionen `requested` und `rerequested` eine Überprüfungsausführung erstellt werden muss, rufe das Hilfsprogramm `create_check_run` auf. Im nächsten Schritt wird diese Methode geschrieben.

## Schritt 1.3. Erstellen einer Überprüfungsausführung

Füge diese neue Methode als [Sinatra-Hilfsprogramm](https://github.com/sinatra/sinatra#helpers) hinzu, wenn sie auch von anderen Routen verwendet werden soll. Füge diese `create_check_run`-Methode unter `helpers do` hinzu:

``` ruby
# Create a new check run with the status queued
def create_check_run
  @installation_client.create_check_run(
    # [String, Integer, Hash, Octokit Repository object] A GitHub repository.
    @payload['repository']['full_name'],
    # [String] The name of your check run.
    'Octo RuboCop',
    # [String] The SHA of the commit to check 
    # The payload structure differs depending on whether a check run or a check suite event occurred.
    @payload['check_run'].nil? ? @payload['check_suite']['head_sha'] : @payload['check_run']['head_sha'],
    # [Hash] 'Accept' header option, to avoid a warning about the API not being ready for production use.
    accept: 'application/vnd.github+json'
  )
end
```

Mit diesem Code wird der Endpunkt [Überprüfungsausführung erstellen](/rest/reference/checks#create-a-check-run) mithilfe der [Methode „create_check_run“](https://msp-greg.github.io/octokit/Octokit/Client/Checks.html#create_check_run-instance_method) aufgerufen.

Zum Erstellen einer Überprüfungsausführung sind nur zwei Parameter erforderlich: `name` und `head_sha`. Da wir zum Implementieren des CI-Tests später in diesem Schnellstart [RuboCop](https://rubocop.readthedocs.io/en/latest/) verwenden, wird hier der Name „Octo RuboCop“ verwendet. Du kannst für die Überprüfungsausführung jedoch auch einen anderen Namen verwenden.

Als Nächstes gibst du die für die grundlegende Funktionalität erforderlichen Parameter an. Du wirst die Überprüfungsausführung jedoch später aktualisieren, wenn du weitere Informationen zur Überprüfungsausführung sammelst. In GitHub wird `status` standardmäßig auf `queued` festgelegt.

Da in GitHub für eine bestimmte Commit-SHA-Komponente eine Überprüfungsausführung erstellt wird, ist `head_sha` ein erforderlicher Parameter. Die Commit-SHA-Komponente befindet sich in den Webhooknutzdaten. Auch wenn du im Moment nur eine Überprüfungsausführung für das Ereignis `check_suite` erstellst, ist es dennoch gut zu wissen, dass der Parameter `head_sha` sowohl im Objekt `check_suite` als auch im Objekt `check_run` in den Ereignisnutzdaten enthalten ist.

Im obigen Code verwendest du zum Überprüfen, ob die Nutzdaten ein `check_run`-Objekt enthalten, den [ternären Operator](https://ruby-doc.org/core-2.3.0/doc/syntax/control_expressions_rdoc.html#label-Ternary+if), der wie eine `if/else`-Anweisung funktioniert. Wenn das Objekt enthalten ist, wird der Parameter `head_sha` über das Objekt `check_run` gelesen, wenn nicht, über das Objekt `check_suite`.

Starte den Server zum Testen dieses Codes über dein Terminal neu:

```shell
$ ruby template_server.rb
```

{% data reusables.apps.sinatra_restart_instructions %}

Öffne als Nächstes in dem Repository, in dem du deine App installiert hast, einen Pull Request. Deine App sollte reagieren, indem sie eine Überprüfungsausführung für den Pull Request erstellt. Wenn du auf die Registerkarte **Überprüfungen** klickst, sollte in etwa Folgendes angezeigt werden:

![Überprüfungsausführung in der Warteschlange](/assets/images/github-apps/github_apps_queued_check_run.png)

Wenn auf der Registerkarte „Überprüfungen“ weitere Apps angezeigt werden, bedeutet das, dass im Repository weitere Apps mit der Berechtigung zum **Lesen und Schreiben** für Überprüfungen installiert sind, für die die Ereignisse **Überprüfungssammlung** und **Überprüfungsausführung** abonniert wurden.

Sehr gut! Du hast GitHub aufgefordert, eine Überprüfungsausführung zu erstellen. Neben einem gelben Symbol wird angezeigt, dass der Status der Überprüfungsausführung auf `queued` festgelegt ist. Als Nächstes wartest du, bis in GitHub die Überprüfungsausführung erstellt und der Status aktualisiert wurde.

## Schritt 1.4. Aktualisieren einer Überprüfungsausführung

Bei der Ausführung der Methode `create_check_run` wird GitHub aufgefordert, eine neue Überprüfungsausführung zu erstellen. Nachdem die Überprüfungsausführung in GitHub erstellt wurde, erhältst du das `check_run`-Webhookereignis mit der Aktion `created`. Dieses Ereignis ist dein Signal, mit der Ausführung der Überprüfung zu beginnen.

Als Nächstes aktualisierst du den Ereignishandler so, dass damit nach der Aktion `created` gesucht wird. Beim Aktualisieren des Ereignishandlers kannst du für die Aktion `rerequested` eine Bedingung hinzufügen. Wenn ein einzelner Test in GitHub durch einen Klick auf die Schaltfläche „Erneut ausführen“ erneut ausgeführt wird, wird in GitHub das Ereignis `rerequested` der Überprüfungsausführung an deine App gesendet. Wenn eine Überprüfungsausführung den Status `rerequested` aufweist, beginne von vorn, und erstelle eine neue Überprüfungsausführung.

Wenn du in das Ereignis `check_run` in der `post '/event_handler'`-Route eine Bedingung einbinden möchtest, füge unter `case request.env['HTTP_X_GITHUB_EVENT']` den folgenden Code hinzu:

``` ruby
when 'check_run'
  # Check that the event is being sent to this app
  if @payload['check_run']['app']['id'].to_s === APP_IDENTIFIER
    case @payload['action']
    when 'created'
      initiate_check_run
    when 'rerequested'
      create_check_run
    end
  end
```

In GitHub werden alle Ereignisse für Überprüfungsausführungen mit dem Status `created` an alle Apps gesendet, die in einem Repository mit den erforderlichen Überprüfungsberechtigungen installiert sind. Das bedeutet, dass deine App Überprüfungsausführungen empfängt, die von anderen Apps erstellt wurden. Eine Überprüfungsausführung mit dem Status `created` unterscheidet sich ein wenig von einer Überprüfungssammlung mit dem Status `requested` oder `rerequested`, die in GitHub nur an Apps gesendet werden, die aufgefordert sind, eine Überprüfung auszuführen. Mit dem obigen Code wird nach der Anwendungs-ID der Überprüfungsausführung gesucht. Dadurch werden alle Überprüfungsausführungen für andere Apps im Repository herausgefiltert.

Als Nächstes schreibst du die `initiate_check_run`-Methode, mit der du den Ausführungsstatus aktualisierst und den Start deines CI-Tests vorbereitest.

In diesem Abschnitt wird der CI-Test noch nicht gestartet. Vielmehr wird hier der Status der Überprüfungsausführung von `queued` in `pending` und anschließend von `pending` in `completed` geändert, um den gesamten Ablauf einer Überprüfungsausführung anzuzeigen. In [Teil 2: Erstellen des CI-Tests „Octo RuboCop“](#part-2-creating-the-octo-rubocop-ci-test) füge den Code hinzu, mit dem der CI-Test tatsächlich durchgeführt wird.

Zunächst erstellst du die Methode `initiate_check_run` und aktualisierst den Status der Überprüfungsausführung. Füge dem Abschnitt „Hilfsprogramme“ den folgenden Code hinzu:

``` ruby
# Start the CI process
def initiate_check_run
  # Once the check run is created, you'll update the status of the check run
  # to 'in_progress' and run the CI process. When the CI finishes, you'll
  # update the check run status to 'completed' and add the CI results.

  @installation_client.update_check_run(
    @payload['repository']['full_name'],
    @payload['check_run']['id'],
    status: 'in_progress',
    accept: 'application/vnd.github+json'
  )

  # ***** RUN A CI TEST *****

  # Mark the check run as complete!
  @installation_client.update_check_run(
    @payload['repository']['full_name'],
    @payload['check_run']['id'],
    status: 'completed',
    conclusion: 'success',
    accept: 'application/vnd.github+json'
  )
end
```

Mit dem obigen Code wird der API-Endpunkt [Überprüfungsausführung aktualisieren](/rest/reference/checks#update-a-check-run) mithilfe der [Octokit-Methode `update_check_run`](https://msp-greg.github.io/octokit/Octokit/Client/Checks.html#update_check_run-instance_method) zum Aktualisieren der bereits erstellten Überprüfungsausführung aufgerufen.

Und so funktioniert dieser Code. Zunächst wird der Status der Überprüfungsausführung in `in_progress` geändert und die `started_at`-Zeit auf die aktuelle Uhrzeit festgelegt. In [Teil 2](#part-2-creating-the-octo-rubocop-ci-test) dieses Schnellstarts füge Code hinzu, mit dem unter `***** RUN A CI TEST *****` ein echter CI-Test gestartet wird. Im Moment lässt du diesen Abschnitt als Platzhalter stehen, sodass mit dem nachfolgenden Code nur der fehlerfreie Ablauf des CI-Prozesses und aller Tests simuliert wird. Abschließend wird mit dem Code der Status der Überprüfungsausführung in `completed` geändert.

In den Dokumenten zum [Aktualisieren einer Überprüfungsausführung](/rest/reference/checks#update-a-check-run) wirst du feststellen, dass beim Ändern des Status in `completed` die Parameter `conclusion` und `completed_at` angegeben werden müssen. Unter `conclusion` wird das Ergebnis einer Überprüfungsausführung zusammengefasst, die den Status `success`, `failure`, `neutral`, `cancelled`, `timed_out` oder `action_required` aufweisen kann. Lege das Ergebnis („conclusion“) auf `success`, die `completed_at`-Zeit auf die aktuelle Uhrzeit und den Status auf `completed` fest.

Du kannst darüber hinaus noch weitere Informationen zur Funktionsweise der Überprüfung bereitstellen. Das wird jedoch erst im nächsten Abschnitt behandelt. Teste den Code nun erneut, indem du `template_server.rb` erneut ausführst:

```shell
$ ruby template_server.rb
```

Navigiere zum geöffneten Pull Request, und klicke auf die Registerkarte **Überprüfungen**. Klicke in der oberen linken Ecke auf die Schaltfläche „Alle erneut ausführen“. Der Status für die Überprüfungsausführung sollte von `pending` zu `in_progress` und schließlich zu `success` wechseln:

![Durchgeführte Überprüfungsausführung](/assets/images/github-apps/github_apps_complete_check_run.png)

## Teil 2: Erstellen des CI-Tests „Octo RuboCop“

[RuboCop](https://rubocop.readthedocs.io/en/latest/) ist ein Ruby-Code-Linter und -Formatierer. Damit wird Ruby-Code überprüft, um sicherzustellen, dass er dem [Ruby-Styleguide](https://github.com/rubocop-hq/ruby-style-guide) entspricht. RuboCop erfüllt im Wesentlichen drei Funktionen:

* Linten zum Überprüfen des Codeformats
* Codeformatierung
* Ersetzen der nativen Ruby-Lintfunktionen mithilfe von `ruby -w`

Nachdem du die Schnittstelle zum Empfangen von Ereignissen der API für Überprüfungen und Überprüfungsausführungen erstellt hast, kannst du eine Überprüfungsausführung erstellen, mit der ein CI-Test implementiert wird.

Mit deiner App wird RuboCop auf dem CI-Server ausgeführt, und es werden Überprüfungsausführungen (in diesem Fall CI-Tests) erstellt, mit denen die Ergebnisse angezeigt werden, die von RuboCop an GitHub gesendet werden.

Mit der API für Überprüfungen kannst du umfangreiche Informationen zu den einzelnen Überprüfungsausführungen wie Status, Bilder, Zusammenfassungen, Anmerkungen und angeforderte Aktionen anzeigen.

Anmerkungen sind Informationen zu bestimmten Codezeilen in einem Repository. Mit einer Anmerkung kannst du die Teile des Codes genau festlegen und visualisieren, für die zusätzliche Informationen angezeigt werden sollen. Bei diesen Informationen kann es sich beispielsweise um einen Kommentar, einen Fehler oder eine Warnung handeln. In diesem Schnellstart werden Anmerkungen zum Visualisieren von RuboCop-Fehlern verwendet.

App-Entwickler*innen können zum Erstellen von Schaltflächen auf der Registerkarte **Überprüfungen** von Pull Requests angeforderte Aktionen nutzen. Bei einem Klick auf eine dieser Schaltflächen wird für die Aktion `requested_action` ein `check_run`-Ereignis an die GitHub-App gesendet. Die von der App verwendete Aktion kann vom App-Entwickler beliebig konfiguriert werden. In diesem Schnellstart erfährst du, wie eine Schaltfläche hinzugefügt wird, mit der Benutzer*innen anfordern können, dass mit RuboCop alle gefundenen Fehler behoben werden. In RuboCop wird das automatische Beheben von Fehlern mithilfe einer Befehlszeilenoption unterstützt, und du konfigurierst die Aktion `requested_action` so, dass diese Option verwendet werden kann.

Jetzt geht‘s los! Folgende Schritte werden in diesem Abschnitt durchgeführt:

1. [Hinzufügen einer Ruby-Datei](#step-21-adding-a-ruby-file)
1. [Klonen des Repositorys](#step-22-cloning-the-repository)
1. [Ausführen von RuboCop](#step-23-running-rubocop)
1. [Sammeln von RuboCop-Fehlern](#step-24-collecting-rubocop-errors)
1. [Aktualisieren der Überprüfungsausführung mit CI-Testergebnissen](#step-25-updating-the-check-run-with-ci-test-results)
1. [Automatisches Beheben von RuboCop-Fehlern](#step-26-automatically-fixing-rubocop-errors)
1. [Tipps zur Sicherheit](#step-27-security-tips)

## Schritt 2.1. Hinzufügen einer Ruby-Datei

Du kannst einzelne Dateien oder ganze Verzeichnisse zum Überprüfen durch RuboCop übergeben. In diesem Schnellstart führst du RuboCop in einem ganzen Verzeichnis aus. Da mit RuboCop nur Ruby-Code überprüft wird, sollte dein Repository mindestens eine Ruby-Datei mit Fehlern enthalten. Die folgende Beispieldatei enthält einige Fehler. Füge diese Ruby-Beispieldatei dem Repository hinzu, in dem deine App installiert ist (gib der Datei einen Namen mit der Erweiterung `.rb` wie etwa bei `myfile.rb`):

```ruby
# The Octocat class tells you about different breeds of Octocat
class Octocat
  def initialize(name, *breeds)
    # Instance variables
    @name = name
    @breeds = breeds
  end

  def display
    breed = @breeds.join("-")

    puts "I am of #{breed} breed, and my name is #{@name}."
  end
end

m = Octocat.new("Mona", "cat", "octopus")
m.display
```

## Schritt 2.2. Klonen des Repositorys

RuboCop ist als Befehlszeilen-Hilfsprogramm verfügbar. Das bedeutet, dass mit deiner GitHub-App eine lokale Kopie des Repositorys auf dem CI-Server geklont werden muss, damit die Dateien mit RuboCop analysiert werden können. Zum Ausführen von Git-Vorgängen in deiner Ruby-App kannst du das Gem [ruby-git](https://github.com/ruby-git/ruby-git) verwenden.

Im `Gemfile` des Repositorys `building-a-checks-api-ci-server` ist das Gem „ruby-git“ bereits enthalten. Du hast es beim Ausführen von `bundle install` in den [erforderlichen Schritten](#prerequisites) installiert. Wenn du das Gem verwenden möchtest, füge diesen Code am Anfang der Datei `template_server.rb` hinzu:

``` ruby
require 'git'
```

Zum Klonen eines Repositorys benötigt die App Leseberechtigungen für „Repositoryinhalte“. Später in diesem Schnellstart musst du Inhalte an GitHub pushen. Dazu sind Schreibberechtigungen erforderlich. Lege die Berechtigung für „Repositoryinhalte“ für deine App jetzt auf **Lesen und Schreiben** fest, sodass du sie später nicht aktualisieren musst. So aktualisierst du die Berechtigungen deiner App:

1. Wähle auf der Seite [App-Einstellungen](https://github.com/settings/apps) deine App aus, und klicke in der Seitenleiste auf **Berechtigungen und Webhooks**.
1. Wähle im Abschnitt „Berechtigungen“ unter „Repositoryinhalte“ im Dropdownmenü „Zugriff“ den Eintrag **Lesen und Schreiben** aus.
{% data reusables.apps.accept_new_permissions_steps %}

Zum Klonen eines Repositorys mithilfe der Berechtigungen deiner GitHub-App kannst du das im folgenden Beispiel dargestellte Installationstoken der App (`x-access-token:<token>`) verwenden:

```shell
git clone https://x-access-token:<token>@github.com/<owner>/<repo>.git
```

Mit dem obigen Code wird ein Repository über HTTP geklont. Dazu muss der vollständige Repositoryname angegeben werden, der den Repositorybesitzer (Benutzer oder Organisation) und den Repositorynamen umfasst. Der vollständige Name des Repositorys [octocat Hello-World](https://github.com/octocat/Hello-World) lautet beispielsweise `octocat/hello-world`.

Nachdem das Repository mit der App geklont wurde, müssen die aktuellen Codeänderungen abgerufen werden. Zudem muss eine bestimmte Git-Referenz ausgecheckt werden. Der Code dazu passt gut in seine eigene Methode. Zum Ausführen dieser Vorgänge muss für die Methode der Name und der vollständige Name des Repositorys und der Referenz angegeben werden, die ausgecheckt werden soll. Bei der Referenz kann es sich um eine Commit-SHA-Komponente, einen Branch oder ein Tag handeln. Füge dem Abschnitt der Hilfsprogramm-Methode in `template_server.rb` die folgende neue Methode hinzu:

``` ruby
# Clones the repository to the current working directory, updates the
# contents using Git pull, and checks out the ref.
#
# full_repo_name  - The owner and repo. Ex: octocat/hello-world
# repository      - The repository name
# ref             - The branch, commit SHA, or tag to check out
def clone_repository(full_repo_name, repository, ref)
  @git = Git.clone("https://x-access-token:#{@installation_token.to_s}@github.com/#{full_repo_name}.git", repository)
  pwd = Dir.getwd()
  Dir.chdir(repository)
  @git.pull
  @git.checkout(ref)
  Dir.chdir(pwd)
end
```

Im obigen Code wird das `ruby-git`-Gem zum Klonen des Repositorys mithilfe des Installationstokens der App verwendet. Mit diesem Code wird der Code im selben Verzeichnis wie `template_server.rb` geklont. Zum Ausführen von Git-Befehlen im Repository muss der Code in das Repositoryverzeichnis wechseln. Vor dem Wechsel in ein anderes Verzeichnis wird mit dem Code das aktuelle Arbeitsverzeichnis in einer Variablen (`pwd`) und damit die Stelle gespeichert, an die vor dem Beenden der Methode `clone_repository` zurückgekehrt werden muss.

Mit dem Code werden die aktuellen Änderungen aus dem Repositoryverzeichnis abgerufen (`@git.pull`) und zusammengeführt, die Referenz ausgecheckt (`@git.checkout(ref)`) und anschließend wieder zum ursprünglichen Arbeitsverzeichnis gewechselt (`pwd`).

Nun verfügst du über eine Methode, mit der ein Repository geklont und eine Referenz ausgecheckt wird. Als Nächstes musst du Code hinzufügen, um die erforderlichen Eingabeparameter abzurufen und die neue `clone_repository`-Methode aufzurufen. Füge den folgenden Code unter dem Kommentar `***** RUN A CI TEST *****` in deiner Hilfsprogramm-Methode `initiate_check_run` hinzu:

``` ruby
# ***** RUN A CI TEST *****
full_repo_name = @payload['repository']['full_name']
repository     = @payload['repository']['name']
head_sha       = @payload['check_run']['head_sha']

clone_repository(full_repo_name, repository, head_sha)
```

Mit dem obigen Code werden der vollständige Repositoryname und der Parameter „head_SHA“ des Commits aus den `check_run`-Webhooknutzdaten abgerufen.

## Schritt 2.3. Ausführen von RuboCop

Sehr gut! Im Folgenden verwendest du deinen CI-Server zum Klonen des Repositorys und zum Erstellen von Überprüfungsausführungen. Jetzt geht es an die Feinheiten des [RuboCop-Linters](https://docs.rubocop.org/rubocop/usage/basic_usage.html#code-style-checker) und der [Anmerkungen in der API für Überprüfungen](/rest/reference/checks#create-a-check-run).

Mit dem folgenden Code wird RuboCop ausgeführt. Dabei werden die Formatcodefehler im JSON-Format gespeichert. Füge diesen Code unter dem im [vorherigen Schritt](#step-22-cloning-the-repository) hinzugefügten Aufruf von `clone_repository` und über dem Code, mit dem der Status der Überprüfungsausführung in „complete“ geändert wird, hinzu.

``` ruby
# Run RuboCop on all files in the repository
@report = `rubocop '#{repository}' --format json`
logger.debug @report
`rm -rf #{repository}`
@output = JSON.parse @report
```

Mit dem obigen Code wird RuboCop für alle Dateien im Verzeichnis des Repositorys ausgeführt. Mit der Option `--format json` kann eine Kopie der Lintingergebnisse bequem in einem Format gespeichert werden, das vom Computer analysiert werden kann. Weitere Informationen sowie ein Beispiel für das JSON-Format findest du in den [RuboCop-Dokumenten](https://docs.rubocop.org/rubocop/formatters.html#json-formatter).

Da mit diesem Code die RuboCop-Ergebnisse in einer `@report`-Variablen gespeichert werden, kann das Auschecken des Repositorys problemlos übersprungen werden. Mit diesem Code wird auch der JSON-Code analysiert, sodass du mithilfe der `@output`-Variablen ganz einfach auf die Schlüssel und Werte in deiner GitHub-App zugreifen kannst.

{% note %}

**Hinweis:** Der Befehl zum Entfernen des Repositorys (`rm -rf`) kann nicht rückgängig machen. Informationen zum Überprüfen von Webhooks auf eingefügte schädliche Befehle, mit denen ein anderes Verzeichnis als das von deiner App beabsichtigte entfernt werden kann, findest du unter [Schritt 2.7. Tipps zur Sicherheit](#step-27-security-tips). Wenn beispielsweise ein*e böswillige*r Akteur*in einen Webhook mit dem Repositorynamen `./` sendet, entfernt deine App das Stammverzeichnis. 😱 Wenn du aus irgendeinem Grund _nicht_ die Methode `verify_webhook_signature` (die in `template_server.rb` enthalten ist) verwendest, um den Absender des Webhooks zu überprüfen, stelle sicher, dass der Repositoryname gültig ist.

{% endnote %}

Du kannst testen, ob dieser Code funktioniert, und die von RuboCop gemeldeten Fehler in der Debugausgabe deines Servers anzeigen. Starte den Server `template_server.rb` erneut, und erstelle einen neuen Pull Request in dem Repository, in dem du deine App testest:

```shell
$ ruby template_server.rb
```

Die Lintingfehler sollten in der Debugausgabe angezeigt werden, obwohl sie nicht mit Formatierung gedruckt werden. Du kannst ein Webtool wie [JSON Formatter](https://jsonformatter.org/) verwenden, um deine JSON-Ausgabe wie diese formatierte Lintingfehlerausgabe zu formatieren:

```json
{
  "metadata": {
    "rubocop_version": "0.60.0",
    "ruby_engine": "ruby",
    "ruby_version": "2.3.7",
    "ruby_patchlevel": "456",
    "ruby_platform": "universal.x86_64-darwin18"
  },
  "files": [
    {
      "path": "Octocat-breeds/octocat.rb",
      "offenses": [
        {
          "severity": "convention",
          "message": "Style/StringLiterals: Prefer single-quoted strings when you don't need string interpolation or special symbols.",
          "cop_name": "Style/StringLiterals",
          "corrected": false,
          "location": {
            "start_line": 17,
            "start_column": 17,
            "last_line": 17,
            "last_column": 22,
            "length": 6,
            "line": 17,
            "column": 17
          }
        },
        {
          "severity": "convention",
          "message": "Style/StringLiterals: Prefer single-quoted strings when you don't need string interpolation or special symbols.",
          "cop_name": "Style/StringLiterals",
          "corrected": false,
          "location": {
            "start_line": 17,
            "start_column": 25,
            "last_line": 17,
            "last_column": 29,
            "length": 5,
            "line": 17,
            "column": 25
          }
        }
      ]
    }
  ],
  "summary": {
    "offense_count": 2,
    "target_file_count": 1,
    "inspected_file_count": 1
  }
}
```

## Schritt 2.4. Sammeln von RuboCop-Fehlern

Die `@output`-Variable enthält die analysierten JSON-Ergebnisse des RuboCop-Berichts. Wie oben gezeigt, enthalten die Ergebnisse den Abschnitt `summary`, mit dem dein Code schnell ermitteln kann, ob Fehler vorhanden sind. Mit dem folgenden Code wird das Ergebnis der Überprüfungsausführung auf `success` festgelegt, wenn keine Fehler gemeldet werden. RuboCop meldet Fehler für jede Datei im `files`-Array. Wenn Fehler vorhanden sind, musst du einige Daten aus dem Dateiobjekt extrahieren.

Mit der API für Überprüfungen kannst du für bestimmte Codezeilen Anmerkungen erstellen. Wenn du eine Überprüfungsausführung erstellst oder aktualisierst, kannst du Anmerkungen hinzufügen. In diesem Schnellstart [aktualisierst du die Überprüfungsausführung](/rest/reference/checks#update-a-check-run) mit Anmerkungen.

Bei der API für Überprüfungen ist die Anzahl der Anmerkungen auf maximal 50 pro API-Anforderung begrenzt. Wenn du mehr als 50 Anmerkungen erstellen möchtest, musst du mehrere Anforderungen für den Endpunkt [Überprüfungsausführung aktualisieren](/rest/reference/checks#update-a-check-run) erstellen. Wenn du beispielsweise 105 Anmerkungen erstellen möchtest, musst du den Endpunkt [Überprüfungsausführung aktualisieren](/rest/reference/checks#update-a-check-run) dreimal aufrufen. Dabei umfassen die ersten beiden Anforderungen jeweils 50 Anmerkungen, während die dritte Anforderung die fünf verbleibenden Anmerkungen enthält. Jedes Mal, wenn du die Überprüfungsausführung aktualisierst, werden an die für die Überprüfungsausführung bereits vorhandene Liste mit Anmerkungen weitere Anmerkungen angefügt.

Für eine Überprüfungsausführung müssen Anmerkungen in Form von Objektarrays vorliegen. Jedes Anmerkungsobjekt muss `path`, `start_line`, `end_line`, `annotation_level` und `message` enthalten. RuboCop stellt auch `start_column` und `end_column` bereit, sodass du diese optionalen Parameter in die Anmerkung einschließen kannst. In Anmerkungen dürfen die Parameter `start_column` und `end_column` nur in einer Zeile verwendet werden. Weitere Informationen findest du in der Referenzdokumentation zum [Objekt `annotations`](/rest/reference/checks#annotations-object-1).

Du extrahierst die erforderlichen Informationen aus RuboCop, die zum Erstellen jeder Anmerkung erforderlich sind. Füge den folgenden Code an den im [vorherigen Abschnitt](#step-23-running-rubocop) hinzugefügten Code an:

``` ruby
annotations = []
# You can create a maximum of 50 annotations per request to the Checks
# API. To add more than 50 annotations, use the "Update a check run" API
# endpoint. This example code limits the number of annotations to 50.
# See /rest/reference/checks#update-a-check-run
# for details.
max_annotations = 50

# RuboCop reports the number of errors found in "offense_count"
if @output['summary']['offense_count'] == 0
  conclusion = 'success'
else
  conclusion = 'neutral'
  @output['files'].each do |file|

    # Only parse offenses for files in this app's repository
    file_path = file['path'].gsub(/#{repository}\//,'')
    annotation_level = 'notice'

    # Parse each offense to get details and location
    file['offenses'].each do |offense|
      # Limit the number of annotations to 50
      next if max_annotations == 0
      max_annotations -= 1

      start_line   = offense['location']['start_line']
      end_line     = offense['location']['last_line']
      start_column = offense['location']['start_column']
      end_column   = offense['location']['last_column']
      message      = offense['message']

      # Create a new annotation for each error
      annotation = {
        path: file_path,
        start_line: start_line,
        end_line: end_line,
        start_column: start_column,
        end_column: end_column,
        annotation_level: annotation_level,
        message: message
      }
      # Annotations only support start and end columns on the same line
      if start_line == end_line
        annotation.merge({start_column: start_column, end_column: end_column})
      end

      annotations.push(annotation)
    end
  end
end
```

Mit diesem Code wird die Gesamtzahl der Anmerkungen auf 50 beschränkt. Du kannst diesen Code jedoch ändern, sodass die Überprüfungsausführung für alle Batches mit 50 Anmerkungen aktualisiert wird. Der obige Code enthält die Variable `max_annotations`, mit der Grenzwert auf 50 festgelegt wird. Dieser Wert wird in der Schleife verwendet, die für die Verletzungen durchlaufen wird.

Wenn `offense_count` null ist, ist der CI-Test ein `success`. Wenn Fehler vorhanden sind, wird das Ergebnis vom Code auf `neutral` festgelegt, um die strikte Erzwingung von Fehlern über Code-Linter zu verhindern. Du kannst das Ergebnis jedoch in `failure` ändern, wenn du sicherstellen möchtest, dass bei der Überprüfungssammlung ein Fehler auftritt, wenn Lintingfehler vorhanden sind.

Wenn Fehler gemeldet werden, durchläuft der obige Code das `files`-Array im RuboCop-Bericht. Für jede Datei wird der Dateipfad extrahiert und die Anmerkungsebene auf `notice` festgelegt. Du kannst noch einen Schritt weitergehen und für jeden [RuboCop-Cop](https://docs.rubocop.org/rubocop/cops.html)-Typ eine Warnstufe festlegen. Damit dieser Schnellstart jedoch nicht zu kompliziert wird, werden alle Fehler auf die Ebene `notice` festgelegt.

Dieser Code durchläuft darüber hinaus alle Fehler im `offenses`-Array und erfasst den Ort der Verletzung und die Fehlermeldung. Nach dem Extrahieren der erforderlichen Informationen erstellt der Code eine Anmerkung für jeden Fehler und speichert sie im `annotations`-Array. Da in Anmerkungen Start- und Endspalten nur in einer Zeile verwendet werden dürfen, werden die Parameter `start_column` und `end_column` dem `annotation`-Objekt nur dann hinzugefügt, wenn die Werte der Anfangs- und Endzeile identisch sind.

Mit dem Code wird noch keine Anmerkung für die Überprüfungsausführung erstellt. Der entsprechende Code wird im nächsten Abschnitt erstellt.

## Schritt 2.5. Aktualisieren der Überprüfungsausführung mit CI-Testergebnissen

Alle Überprüfungsausführungen in GitHub enthalten ein `output`-Objekt, das die Parameter `title`, `summary`, `text`, `annotations` und `images` enthält. `summary` und `title` sind die einzigen Parameter, die für das `output`-Objekt erforderlich sind. Diese allein bieten jedoch nicht viele Details. Daher werden in diesem Schnellstart auch die Parameter `text` und `annotations` hinzugefügt. Mit dem Code hier wird kein Bild hinzugefügt. Wenn du möchtest, kannst du jedoch eines hinzufügen.

Für den Parameter `summary` werden in diesem Beispiel Zusammenfassungsinformationen von RuboCop verwendet. Zudem wird die Ausgabe durch Hinzufügen einiger neuer Zeilen (`\n`) formatiert. Alles, was du dem Parameter `text` hinzufügst, kannst du anpassen. In diesem Beispiel wird der Parameter `text` jedoch auf die RuboCop-Version festgelegt. Wenn du die Parameter `summary` und `text` festlegen möchtest, füge diesen Code an den Code an, den du im [vorherigen Abschnitt](#step-24-collecting-rubocop-errors) hinzugefügt hast:

``` ruby
# Updated check run summary and text parameters
summary = "Octo RuboCop summary\n-Offense count: #{@output['summary']['offense_count']}\n-File count: #{@output['summary']['target_file_count']}\n-Target file count: #{@output['summary']['inspected_file_count']}"
text = "Octo RuboCop version: #{@output['metadata']['rubocop_version']}"
```

Nun sind alle Informationen vorhanden, die du zum Aktualisieren deiner Überprüfungsausführung benötigst. In der [ersten Hälfte dieses Schnellstarts](#step-14-updating-a-check-run) hast du diesen Code hinzugefügt, um den Status der Überprüfungsausführung auf `success` festzulegen:

``` ruby
# Mark the check run as complete!
@installation_client.update_check_run(
  @payload['repository']['full_name'],
  @payload['check_run']['id'],
  status: 'completed',
  conclusion: 'success',
  accept: 'application/vnd.github+json'
)
```

Du musst diesen Code aktualisieren, damit die `conclusion`-Variable verwendet wird, die du basierend auf den RuboCop-Ergebnissen (auf `neutral` oder `success`) festgelegt hast. Du kannst den Code wie folgt aktualisieren:

``` ruby
# Mark the check run as complete! And if there are warnings, share them.
@installation_client.update_check_run(
  @payload['repository']['full_name'],
  @payload['check_run']['id'],
  status: 'completed',
  conclusion: conclusion,
  output: {
    title: 'Octo RuboCop',
    summary: summary,
    text: text,
    annotations: annotations
  },
  actions: [{
    label: 'Fix this',
    description: 'Automatically fix all linter notices.',
    identifier: 'fix_rubocop_notices'
  }],
  accept: 'application/vnd.github+json'
)
```

Nachdem du basierend auf dem Status des CI-Tests ein Ergebnis festgelegt und die Ausgabe aus den RuboCop-Ergebnissen hinzugefügt hast, hast du einen CI-Test erstellt. Herzlichen Glückwunsch. 🙌

Mit dem obigen Code wird deinem CI-Server das Feature [angeforderte Aktionen](https://developer.github.com/changes/2018-05-23-request-actions-on-checks/) über das `actions`-Objekt hinzugefügt. {% ifversion fpt or ghec %}(Dieses steht nicht im Zusammenhang mit [GitHub Actions](/actions).) {% endif %}Mit angeforderten Aktionen wird auf der Registerkarte **Überprüfungen** auf GitHub eine Schaltfläche hinzugefügt, über die angefordert werden kann, dass mit der Überprüfungsausführung eine weitere Aktion durchgeführt wird. Diese zusätzliche Aktion kann von deiner App umfassend konfiguriert werden. Da RuboCop beispielsweise über ein Feature verfügt, um die im Ruby-Code gefundenen Fehler automatisch zu beheben, kann dein CI-Server eine Schaltfläche für angeforderte Aktionen enthalten, damit Benutzer*innen automatische Fehlerkorrekturen anfordern können. Wenn ein Benutzer auf die Schaltfläche klickt, empfängt die App das `check_run`-Ereignis mit einer `requested_action`-Aktion. Jede angeforderte Aktion weist den Parameter `identifier` auf, der von der App verwendet wird, um zu ermitteln, auf welche Schaltfläche geklickt wurde.

Mit dem obigen Code werden noch keine RuboCop-Fehler automatisch behoben. Diese Funktion wird im nächsten Abschnitt hinzugefügt. Zunächst wirfst du einen Blick auf den eben erstellten CI-Test, indem du den `template_server.rb`-Server erneut startest und einen neuen Pull Request erstellst:

```shell
$ ruby template_server.rb
```

Die Anmerkungen werden auf der Registerkarte **Überprüfungen** angezeigt.

![Anmerkungen der Überprüfungsausführung auf der Registerkarte „Überprüfungen“](/assets/images/github-apps/github_apps_checks_annotations.png)

Beachte die Schaltfläche „Problem beheben“, die du erstellt hast, indem du eine angeforderte Aktion hinzugefügt hast.

![Schaltfläche mit angeforderter Aktion für die Überprüfungsausführung](/assets/images/github-apps/github_apps_checks_fix_this_button.png)

Wenn die Anmerkungen mit einer Datei verknüpft sind, die bereits im PR enthalten ist, werden die Anmerkungen auch auf der Registerkarte **Geänderte Dateien** angezeigt.

![Anmerkungen der Überprüfungsausführung auf der Registerkarte „Geänderte Dateien“](/assets/images/github-apps/github_apps_checks_annotation_diff.png)

## Schritt 2.6. Automatisches Beheben von RuboCop-Fehlern

Wenn du es bis hierher geschafft hast, gratuliere ich dir! 👏 Du hast bereits einen CI-Test erstellt. In diesem Abschnitt füge ein weiteres Feature hinzu, das RuboCop verwendet, um die gefundenen Fehler automatisch zu beheben. Im [vorherigen Abschnitt](#step-25-updating-the-check-run-with-ci-test-results) hast du bereits die Schaltfläche „Problem beheben“ hinzugefügt. Im Folgenden füge den Code hinzu, mit dem das Ereignis `requested_action` der Überprüfungsausführung behandelt wird, das beim Klicken auf die Schaltfläche „Problem beheben“ ausgelöst wird.

Das RuboCop-Tool [enthält](https://docs.rubocop.org/rubocop/usage/basic_usage.html#auto-correcting-offenses) die Befehlszeilenoption `--auto-correct` zum automatischen Beheben von gefundenen Fehlern. Wenn du das Feature `--auto-correct` verwendest, werden die Updates auf die lokalen Dateien auf dem Server angewendet. Nachdem RuboCop seine Arbeit getan hat, musst du die Änderungen an GitHub pushen.

Zum Pushen an ein Repository muss deine App über Schreibberechtigungen für Repositoryinhalte verfügen. Diese Berechtigung setzt du in [Schritt 2.2. Klonen des Repositorys](#step-22-cloning-the-repository) auf **Lesen und Schreiben** zurück. Dann bist du startklar.

Damit Dateien committet werden können, muss Git wissen, welcher [Benutzername](/github/getting-started-with-github/setting-your-username-in-git/) und welche [E-Mail-Adresse](/articles/setting-your-commit-email-address-in-git/) mit dem Commit verknüpft werden muss. Füge in deiner `.env`-Datei zwei weitere Umgebungsvariablen hinzu, um die Einstellungen für Name (`GITHUB_APP_USER_NAME`) und E-Mail-Adresse (`GITHUB_APP_USER_EMAIL`) zu speichern. Bei dem Namen kann es sich um den Namen deiner App und bei der E-Mail-Adresse um eine beliebige E-Mail-Adresse handeln. Beispiel:

```ini
GITHUB_APP_USER_NAME=Octoapp
GITHUB_APP_USER_EMAIL=octoapp@octo-org.com
```

Nachdem du deine `.env`-Datei mit dem Namen und der E-Mail-Adresse des Erstellers und Committers aktualisiert hast, kannst du Code zum Lesen der Umgebungsvariablen und zum Festlegen der Git-Konfiguration hinzufügen. Diesen Code füge in Kürze hinzu.

Wenn ein*e Benutzer*in auf die Schaltfläche „Problem beheben“ klickt, empfängt deine App den [Webhook der Überprüfungsausführung](/webhooks/event-payloads/#check_run) mit dem Aktionstyp `requested_action`.

In [Schritt 1.4. Aktualisieren einer Überprüfungsausführung](#step-14-updating-a-check-run) hast du den `event_handler` aktualisiert, um im `check_run`-Ereignis die Suche nach Aktionen zu behandeln. Du verfügst bereits über eine CASE-Anweisung zur Behandlung der Aktionstypen `created` und `rerequested`:

``` ruby
when 'check_run'
  # Check that the event is being sent to this app
  if @payload['check_run']['app']['id'].to_s === APP_IDENTIFIER
    case @payload['action']
    when 'created'
      initiate_check_run
    when 'rerequested'
      create_check_run
  end
end
```

Fügen sie nach dem `rerequested`-Fall eine weitere `when`-Anweisung hinzu, um das `rerequested_action`-Ereignis zu behandeln:

``` ruby
when 'requested_action'
  take_requested_action
```

Mit diesem Code wird eine neue Methode aufgerufen, mit der alle `requested_action`-Ereignisse für deine App verarbeitet werden. Füge die folgende Methode zum Abschnitt mit den Methoden des Hilfsprogramms in deinem Code hinzu:

``` ruby
# Handles the check run `requested_action` event
# See /webhooks/event-payloads/#check_run
def take_requested_action
  full_repo_name = @payload['repository']['full_name']
  repository     = @payload['repository']['name']
  head_branch    = @payload['check_run']['check_suite']['head_branch']

  if (@payload['requested_action']['identifier'] == 'fix_rubocop_notices')
    clone_repository(full_repo_name, repository, head_branch)

    # Sets your commit username and email address
    @git.config('user.name', ENV['GITHUB_APP_USER_NAME'])
    @git.config('user.email', ENV['GITHUB_APP_USER_EMAIL'])

    # Automatically correct RuboCop style errors
    @report = `rubocop '#{repository}/*' --format json --auto-correct`

    pwd = Dir.getwd()
    Dir.chdir(repository)
    begin
      @git.commit_all('Automatically fix Octo RuboCop notices.')
      @git.push("https://x-access-token:#{@installation_token.to_s}@github.com/#{full_repo_name}.git", head_branch)
    rescue
      # Nothing to commit!
      puts 'Nothing to commit'
    end
    Dir.chdir(pwd)
    `rm -rf '#{repository}'`
  end
end
```

Mit dem obigen Code wird wie mit dem Code, den du in [Schritt 2.2. Klonen des Repositorys](#step-22-cloning-the-repository) hinzugefügt hast, ein Repository geklont. Mit einer `if`-Anweisung wird überprüft, ob der Bezeichner der angeforderten Aktion dem Bezeichner der RuboCop-Schaltfläche (`fix_rubocop_notices`) entspricht. Wenn die Bezeichner übereinstimmen, klont der Code das Repository, legt den Git-Benutzernamen und die E-Mail-Adresse fest und führt RuboCop mit der Option `--auto-correct` aus. Die Änderungen werden mit der Option `--auto-correct` automatisch auf die lokalen CI-Serverdateien angewendet.

Die Dateien werden lokal geändert. Du musst sie jedoch noch an GitHub pushen. Zum Committen aller Dateien verwendest du das praktische `ruby-git`-Gem. Git verfügt über einen Befehl, mit dem alle geänderten oder gelöschten Dateien gestagt und committet werden: `git commit -a`. Zum Erledigen derselben Aufgabe mit `ruby-git` verwendet der obige Code die Methode `commit_all`. Danach pusht der Code die committeten Dateien mithilfe des Installationstokens in GitHub und verwendet dabei dieselbe Authentifizierungsmethode wie der Git-Befehl `clone`. Schließlich entfernt er das Repositoryverzeichnis, um sicherzustellen, dass das Arbeitsverzeichnis für das nächste Ereignis vorbereitet ist.

Das ist alles! Mit dem Code, den du geschrieben hast, ist dein CI-Server der API für Überprüfungen komplett. 💪 Starte den Server `template_server.rb` neu, und erstelle einen neuen Pull Request:

```shell
$ ruby template_server.rb
```

{% data reusables.apps.sinatra_restart_instructions %}

Klicke diesmal auf der Registerkarte **Überprüfungen** auf die Schaltfläche „Problem beheben“, damit die Fehler, die von RuboCop gefunden werden, automatisch behoben werden.

Auf der Registerkarte **Commits** wird ein neuer Commit mit dem Benutzernamen angezeigt, den du in deiner Git-Konfiguration festgelegt hast. Möglicherweise musst du den Browser aktualisieren, damit das Update angezeigt wird.

![Ein neuer Commit zum automatischen Beheben von Octo RuboCop-Benachrichtigungen](/assets/images/github-apps/github_apps_new_requested_action_commit.png)

Da ein neuer Commit in das Repository gepusht wurde, wird auf der Registerkarte **Überprüfungen** eine neue Überprüfungssammlung für Octo RuboCop angezeigt, diesmal jedoch ohne Fehler, da diese von RuboCop behoben wurden. 🎉

![Keine Fehler in der Überprüfungssammlung oder Überprüfungsausführung](/assets/images/github-apps/github_apps_checks_api_success.png)

Den vollständigen Code für die eben erstellte App findest du in der Datei `server.rb` im Repository [Erstellen von CI-Tests mit der API für Überprüfungen](https://github.com/github-developer/creating-ci-tests-with-the-checks-api).

## Schritt 2.7. Tipps zur Sicherheit

Der Code für die Vorlage der GitHub-App enthält bereits eine Methode zur Überprüfung eingehender Webhooknutzdaten, um sicherzustellen, dass diese von einer vertrauenswürdigen Quelle stammen. Wenn du keine Webhooknutzdaten überprüfst und Repositorynamen in den Webhooknutzdaten enthalten sind, musst du sicherstellen, dass der Webhook keine Befehle enthält, die böswillig verwendet werden können. Mit dem folgenden Code wird überprüft, ob der Repositoryname nur lateinische Buchstaben, Bindestriche und Unterstriche enthält. Der vollständige `server.rb`-Code, der im [begleitenden Repository](https://github.com/github-developer/creating-ci-tests-with-the-checks-api) für diesen Schnellstart verfügbar ist, enthält sowohl die Methode für die Überprüfung eingehender Webhooknutzdaten als auch diese Überprüfung des Repositorynamens, sodass du damit ein umfassendes Beispiel erhältst.

``` ruby
# This quickstart example uses the repository name in the webhook with
# command-line utilities. For security reasons, you should validate the
# repository name to ensure that a bad actor isn't attempting to execute
# arbitrary commands or inject false repository names. If a repository name
# is provided in the webhook, validate that it consists only of latin
# alphabetic characters, `-`, and `_`.
unless @payload['repository'].nil?
  halt 400 if (@payload['repository']['name'] =~ /[0-9A-Za-z\-\_]+/).nil?
end
```

## Problembehandlung

Im Folgenden werden einige häufige Probleme beschrieben und entsprechende Lösungen vorgeschlagen. Wenn du auf andere Probleme stößt, erhältst du im {% data reusables.support.prodname_support_forum_with_url %} Unterstützung oder Beratung.

* **F:** Mit meiner App lässt sich Code nicht in GitHub pushen. Es ist nicht erkennbar, dass von RuboCop automatisch eine Fehlerbehebung vorgenommen wird.

    **A:** Stelle sicher, dass du über die Berechtigung zum **Lesen und Schreiben** verfügst und dass du das Repository mit deinem Installationstoken klonst. Ausführlichere Informationen hierzu findest du unter [Schritt 2.2. Klonen des Repositorys](#step-22-cloning-the-repository).

* **F:** In der `template_server.rb`-Debugausgabe wird ein Fehler im Zusammenhang mit dem Klonen meines Repositorys angezeigt.

    **A:** Wenn der folgende Fehler angezeigt wird, hast du den Check-Out des Repositorys in der Methode `initiate_check_run` und/oder `take_requested_action` nicht gelöscht:

    ```shell
    2018-11-26 16:55:13 - Git::GitExecuteError - git  clone '--' 'https://x-access-token:ghs_9b2080277016f797074c4dEbD350745f4257@github.com/codertocat/octocat-breeds.git' 'Octocat-breeds'  2>&1:fatal: destination path 'Octocat-breeds' already exists and is not an empty directory.:
    ```

    Vergleiche deinen Code mit der Datei `server.rb`, um sicherzustellen, dass du in den Methoden `initiate_check_run` und `take_requested_action` denselben Code verwendest.

* **F:** Auf der Registerkarte „Überprüfungen“ auf GitHub werden keine neuen Überprüfungsausführungen angezeigt.

    **A:** Starte Smee neu, und führe den Server `template_server.rb` erneut aus.

* **F:** Auf der Registerkarte „Überprüfungen“ auf GitHub wird die Schaltfläche „Alle erneut ausführen“ nicht angezeigt.

    **A:** Starte Smee neu, und führe den Server `template_server.rb` erneut aus.

## Zusammenfassung

Nachdem du diesen Leitfaden durchgearbeitet hast, weißt du, wie du mit der API für Überprüfungen einen CI-Server erstellen kannst. Du hast folgende Schritte durchgeführt:

* Konfigurieren des Servers für den Empfang von Ereignissen der API für Überprüfungen und Erstellen von Überprüfungsausführungen
* Überprüfen von Code in Repositorys und Erstellen von Anmerkungen bei Fehlern mithilfe von RuboCop
* Implementieren einer angeforderten Aktion, mit der Linter-Fehler automatisch behoben werden

## Nächste Schritte

Hier einige Ideen, was du als Nächstes tun kannst:

* Derzeit wird die Schaltfläche „Problem beheben“ immer angezeigt. Aktualisiere den Code, den du geschrieben hast, so, dass die Schaltfläche „Problem beheben“ nur angezeigt wird, wenn von RuboCop Fehler gefunden werden.
* Wenn Dateien von RuboCop nicht direkt in den Head-Branch committet werden sollen, kannst du den Code so aktualisieren, dass ein [Pull Request](/rest/reference/pulls#create-a-pull-request) mit einem neuen Branch erstellt wird, der auf dem Head-Branch basiert.

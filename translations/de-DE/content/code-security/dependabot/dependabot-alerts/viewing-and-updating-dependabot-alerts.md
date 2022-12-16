---
title: Anzeigen und Aktualisieren von Dependabot-Warnungen
intro: 'Wenn {% data variables.product.product_name %} unsichere Abhängigkeiten in deinem Projekt erkennt, kannst du die Details dazu auf der Registerkarte „Dependabot-Warnungen“ deines Repositorys anzeigen. Anschließend kannst du dein Projekt aktualisieren, um die Warnung zu verwerfen oder zu löschen.'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: 'Repository administrators and organization owners can view and update dependencies, as well as users and teams with explicit access.'
shortTitle: View Dependabot alerts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: 8bf53452bd6518f5525d67994f3e6711ef33de0d
ms.sourcegitcommit: 7e2b5213fd15d91222725ecab5ee28cef378d3ad
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185551'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

Auf der {% data variables.product.prodname_dependabot_alerts %}-Registerkarte deines Repositorys werden alle offenen und geschlossenen {% data variables.product.prodname_dependabot_alerts %}{% ifversion fpt or ghec or ghes %} und die entsprechenden {% data variables.product.prodname_dependabot_security_updates %}{% endif %} angezeigt. Du kannst{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} die Warnungen nach Paket, Ökosystem oder Manifest filtern. Du kannst {% endif %} die Warnungsliste sortieren, und du kannst auf bestimmte Warnungen klicken, um weitere Details anzuzeigen. {% ifversion dependabot-bulk-alerts %}Du kannst auch Warnungen verwerfen oder erneut öffnen, entweder einzeln oder mehrere gleichzeitig.{% else %}Du kannst Warnungen auch verwerfen oder erneut öffnen. {% endif %} Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies). 

{% ifversion fpt or ghec or ghes %} Du kannst automatische Sicherheitsupdates für jedes Repository aktivieren, das {% data variables.product.prodname_dependabot_alerts %} und das Abhängigkeitsdiagramm verwendet. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates).
{% endif %}

{% ifversion fpt or ghec or ghes %}
## Informationen zu Updates für anfällige Abhängigkeiten in deinem Repository

{% data variables.product.product_name %} generiert {% data variables.product.prodname_dependabot_alerts %}, wenn erkannt wird, dass deine Codebasis Abhängigkeiten verwendet, für die Sicherheitsrisiken bekannt sind. Wenn {% data variables.product.product_name %} bei Repositorys mit aktivierten {% data variables.product.prodname_dependabot_security_updates %} eine anfällige Abhängigkeit im Standardbranch erkennt, erstellt {% data variables.product.prodname_dependabot %} einen Pull Request, um diese zu beheben. Der Pull Request aktualisiert die Abhängigkeit auf die minimal mögliche sichere Version, die erforderlich ist, um das Sicherheitsrisiko zu vermeiden.

Jede {% data variables.product.prodname_dependabot %}-Warnung verfügt über einen eindeutigen numerischen Bezeichner, und auf der {% data variables.product.prodname_dependabot_alerts %}-Registerkarte wird eine Warnung für jedes erkannte Sicherheitsrisiko aufgeführt. {% data variables.product.prodname_dependabot_alerts %}-Legacywarnungen haben Sicherheitsrisiken nach Abhängigkeit gruppiert und eine einzelne Warnung pro Abhängigkeit generiert. Wenn du zu einer {% data variables.product.prodname_dependabot %}-Legacywarnung navigierst, wirst du zu einer {% data variables.product.prodname_dependabot_alerts %}-Registerkarte weitergeleitet, die nach diesem Paket gefiltert ist. {% endif %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} Du kannst {% data variables.product.prodname_dependabot_alerts %} mithilfe einer Vielzahl von Filtern und Sortieroptionen filtern und sortieren, die auf der Benutzeroberfläche verfügbar sind. Weitere Informationen findest du im Folgenden unter [Priorisieren von {% data variables.product.prodname_dependabot_alerts %}](#prioritizing-across--data-variablesproductprodname_dependabot_alerts-).

## Priorisieren von {% data variables.product.prodname_dependabot_alerts %}

{% data variables.product.company_short %} unterstützt dich dabei, die Korrektur von {% data variables.product.prodname_dependabot_alerts %} zu priorisieren. {% ifversion dependabot-most-important-sort-option %} Standardmäßig werden {% data variables.product.prodname_dependabot_alerts %} nach Relevanz sortiert. Mit der Sortierung nach „Wichtigste“ kannst du priorisieren, auf welche {% data variables.product.prodname_dependabot_alerts %} du dich zuerst konzentrieren möchtest. Warnungen werden basierend auf potenziellen Auswirkungen, Aktionen und Relevanz bewertet. Unsere Priorisierungsberechnung wird ständig verbessert und umfasst Faktoren wie die CVSS-Bewertung,den Abhängigkeitsbereich und ob anfällige Funktionsaufrufe für die Warnung gefunden werden.

![Screenshot des Dropdownmenüs „Sortierung“ mit der Auswahl „Wichtigste“](/assets/images/help/dependabot/dependabot-alerts-sort-dropdown.png) {% endif %}

{% data reusables.dependabot.dependabot-alerts-filters %}

Zusätzlich zu den über die Suchleiste verfügbaren Filtern kannst du {% data variables.product.prodname_dependabot_alerts %} mithilfe der Dropdownmenüs oben in der Warnungsliste sortieren und filtern. Die Suchleiste ermöglicht auch die Volltextsuche für Warnungen und verwandte Sicherheitsempfehlungen. Du kannst nach einem Teil des Namens einer Sicherheitsempfehlung oder nach einer Beschreibung suchen, um die Warnungen in deinem Repository zurückzugeben, die sich auf diese Sicherheitsempfehlung beziehen. Beispielsweise gibt die Suche nach `yaml.load() API could execute arbitrary code` {% data variables.product.prodname_dependabot_alerts %} im Zusammenhang mit [PyYAML insecurely deserializes YAML strings leading to arbitrary code execution](https://github.com/advisories/GHSA-rprw-h62v-c2w7) (Die PyYAML-Deserialisierung von YAML-Zeichenfolgen ist unsicher und führt zu einer beliebigen Codeausführung) zurück, da die Suchzeichenfolge in der Beschreibung der Empfehlung vorkommt.

{% endif %}

{% ifversion dependabot-bulk-alerts %} ![ Screenshot: Filter- und Sortiermenüs auf der Registerkarte „{% data variables.product.prodname_dependabot_alerts %}“](/assets/images/help/graphs/dependabot-alerts-filters-checkbox.png){% elsif ghes = 3.5 %} Du kannst einen Filter in einem Dropdownmenü oben in der Liste auswählen und dann auf den Filter klicken, den du anwenden möchtest.
   ![Screenshot: Filter- und Sortiermenüs auf der Registerkarte „{% data variables.product.prodname_dependabot_alerts %}“](/assets/images/enterprise/3.5/dependabot/dependabot-alerts-filters.png){% endif %}

{% ifversion dependabot-alerts-development-label %}
## Unterstützte Ökosysteme und Manifeste für abhängigkeitsbezogene Bereiche

{% data reusables.dependabot.dependabot-alerts-dependency-scope %}

Warnungen für Pakete, die als Entwicklungsabhängigkeiten aufgeführt sind, werden mit der Bezeichnung `Development` auf der {% data variables.product.prodname_dependabot_alerts %}-Seite markiert und sind auch für die Filterung über den `scope`-Filter verfügbar.

![Screenshot der Bezeichnung „Entwicklung“ in der Liste der Warnungen](/assets/images/help/repository/dependabot-alerts-development-label.png)

Die Seite „Warnungsdetails“ von Warnungen in entwicklungsbezogenen Paketen zeigt einen Abschnitt „Tags“, der eine `Development`-Bezeichnung enthält.

![Screenshot mit dem Abschnitt „Tags“ auf der Seite mit den Warnungsdetails](/assets/images/help/repository/dependabot-alerts-tags-section.png)

{% endif %}

{% ifversion dependabot-alerts-vulnerable-calls %}
## Informationen zur Erkennung von Aufrufen anfälliger Funktionen

{% data reusables.dependabot.vulnerable-calls-beta %}

Wenn {% data variables.product.prodname_dependabot %} dich darauf hinweist, dass dein Repository eine anfällige Abhängigkeit verwendet, musst du herausfinden, um welche anfälligen Funktionen es sich handelt, und du musst überprüfen, ob du sie verwendest. Sobald du über diese Informationen verfügst, kannst du bestimmen, wie wichtig ein Upgrade auf eine sichere Version der Abhängigkeit ist. 

Für unterstützte Sprachen erkennt {% data variables.product.prodname_dependabot %} automatisch, ob du eine anfällige Funktion verwendest und kennzeichnet betroffene Warnmeldungen mit dem Hinweis „Anfälliger Aufruf“. Du kannst diese Informationen in der {% data variables.product.prodname_dependabot_alerts %}-Ansicht verwenden, um Maßnahmen zur Problementschärfung besser bewerten und priorisieren zu können.

{% note %}

**Hinweis:** Während der Betaphase ist dieses Feature nur für neue Python-Empfehlungen verfügbar, die *nach* dem 14. April 2022 erstellt wurden, sowie für eine Teilmenge der historischen Python-Empfehlungen. {% data variables.product.prodname_dotcom %} arbeitet daran, die Daten für weitere historische Python-Empfehlungen zu ergänzen, die laufend hinzugefügt werden. Anfällige Aufrufe werden nur auf den {% data variables.product.prodname_dependabot_alerts %}-Seiten hervorgehoben.

{% endnote %}

![Screenshot einer Warnung mit der Bezeichnung „Anfälliger Aufruf“](/assets/images/help/repository/dependabot-alerts-vulnerable-call-label.png)

Du kannst die Ansicht so filtern, dass nur Warnungen angezeigt werden, bei denen {% data variables.product.prodname_dependabot %} mindestens einen Aufruf einer anfälligen Funktion erkannt hat, indem du den Filter `has:vulnerable-calls` im Suchfeld verwendest.

Für Warnungen, bei denen anfällige Aufrufe erkannt wurden, werden auf der Seite mit den Warnungsdetails zusätzliche Informationen angezeigt:

- Mindestens ein Codeblock, der zeigt, wo die Funktion verwendet wird.
- Eine Anmerkung, die die Funktion selbst auflistet, mit einem Link zu der Zeile, in der die Funktion aufgerufen wird.

![Screenshot der Seite „Warnungsdetails“ für eine Warnung mit der Bezeichnung „Anfälliger Aufruf“](/assets/images/help/repository/review-calls-to-vulnerable-functions.png)

Weitere Informationen findest du unter [Überprüfen und Beheben von Warnungen](#reviewing-and-fixing-alerts).

{% endif %}

## Anzeige von {% data variables.product.prodname_dependabot_alerts %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-dependabot-alerts %}
1. Optional kannst du zum Filtern von Warnungen einen Filter in einem Dropdownmenü auswählen und dann auf den Filter klicken, den du anwenden möchtest. Du kannst Filter auch in die Suchleiste eingeben. Weitere Informationen zum Filtern und Sortieren von Warnungen findest du unter [Priorisieren von {% data variables.product.prodname_dependabot_alerts %}](#prioritizing-across--data-variablesproductprodname_dependabot_alerts-).
{%- ifversion dependabot-bulk-alerts %} ![ Screenshot: Filter- und Sortiermenüs auf der Registerkarte „{% data variables.product.prodname_dependabot_alerts %}“](/assets/images/help/graphs/dependabot-alerts-filters-checkbox.png){% else %} ![Screenshot: Filter- und Sortiermenüs auf der Registerkarte „{% data variables.product.prodname_dependabot_alerts %}“](/assets/images/enterprise/3.5/dependabot/dependabot-alerts-filters.png){% endif %}
1. Klicke auf die Warnung, die du anzeigen möchtest.{% ifversion dependabot-bulk-alerts %} ![Die in der Warnungsliste ausgewählte Warnung](/assets/images/help/graphs/click-alert-in-alerts-list-checkbox.png){% else %} ![Die in der Warnungsliste ausgewählte Warnung](/assets/images/enterprise/3.5/dependabot/click-alert-in-alerts-list-ungrouped.png){% endif %}

{% else %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-dependabot-alerts %}
1. Klicke auf die Warnung, die angezeigt werden soll.
  ![Ausgewählte Warnung in der Liste der Warnungen](/assets/images/help/graphs/click-alert-in-alerts-list.png) {% endif %}

## Überprüfen und Beheben von Warnungen

Es ist wichtig, sicherzustellen, dass keine deiner Abhängigkeiten Sicherheitslücken aufweist. Wenn {% data variables.product.prodname_dependabot %} Sicherheitsrisiken {% ifversion GH-advisory-db-supports-malware %} oder Malware{% endif %} in deinen Abhängigkeiten erkennt, solltest du den Grad der Gefährdung deines Projekts einschätzen und festlegen, welche Maßnahmen zur Entschärfung du ergreifen musst, um deine Anwendung abzusichern.

Wenn eine gepatchte Version der Abhängigkeit verfügbar ist, kannst du einen {% data variables.product.prodname_dependabot %}-Pull Request generieren, um die betroffene Abhängigkeit direkt aus einer {% data variables.product.prodname_dependabot %}-Warnung zu aktualisieren. Wenn du {% data variables.product.prodname_dependabot_security_updates %} aktiviert hast, kann der Pull Request in der Dependabot-Warnung verlinkt werden. 

In Fällen, in denen keine gepatchte Version verfügbar ist oder du nicht auf die sichere Version aktualisieren kannst, stellt {% data variables.product.prodname_dependabot %} zusätzliche Informationen zur Verfügung, damit du die nächsten Schritte festlegen kannst. Wenn du auf eine {% data variables.product.prodname_dependabot %}-Warnung klickst, kannst du die vollständigen Details zur Sicherheitsempfehlung für die Abhängigkeit einschließlich der betroffenen Funktionen anzeigen. Du kannst dann überprüfen, ob dein Code die betroffenen Funktionen aufruft. Diese Informationen können dir helfen, den Gefährdungsgrad einzuschätzen und zu entscheiden, ob du das Risiko, das der Sicherheitshinweis angibt, in Kauf nehmen kannst oder nicht.

{% ifversion dependabot-alerts-vulnerable-calls %}

Für unterstützte Sprachen werden Aufrufe anfälliger Funktionen automatisch von {% data variables.product.prodname_dependabot %} erkannt. Wenn du eine Warnung mit der Bezeichnung „Anfälliger Aufruf“ anzeigst, enthalten die Details den Namen der Funktion und einen Link zum Code, der sie aufruft. Häufig kannst du auf Grundlage dieser Informationen eine Entscheidung treffen, ohne dass weitere Untersuchungen durchgeführt werden müssen.

{% endif %}

### Beheben von anfälligen Abhängigkeiten

1. Sieh dir die Details zu einer Warnung an. Weitere Informationen findest du unter [Anzeigen von {% data variables.product.prodname_dependabot_alerts %}](#viewing-dependabot-alerts) weiter oben.
{% ifversion fpt or ghec or ghes %}
1. Wenn du {% data variables.product.prodname_dependabot_security_updates %} aktiviert hast, gibt es möglicherweise einen Link zu einem Pull Request, der die Abhängigkeit behebt. Alternativ kannst du oben auf der Seite mit den Warnungsdetails auf **{% data variables.product.prodname_dependabot %}-Sicherheitsupdate erstellen** klicken, um einen Pull Request zu erstellen.
  ![Die Schaltfläche „{% data variables.product.prodname_dependabot %}-Sicherheitsupdate erstellen“](/assets/images/help/repository/create-dependabot-security-update-button-ungrouped.png)
1. (Optional) Falls du {% data variables.product.prodname_dependabot_security_updates %} nicht verwendest, kannst du anhand der Informationen auf der Seite entscheiden, auf welche Version der Abhängigkeit du ein Upgrade durchführen möchtest und einen Pull Request erstellen, um die Abhängigkeit auf eine sichere Version zu aktualisieren.
{% elsif ghae %}
1. Du kannst anhand der Informationen auf der Seite entscheiden, auf welche Version der Abhängigkeit du ein Upgrade durchführen möchtest und einen Pull Request für das Manifest oder die Sperrdatei zur Aktualisierung auf eine sichere Version erstellen.
{% endif %}
1. Wenn du zum Aktualisieren deiner Abhängigkeit und zum Beheben deiner Schwachstelle bereit bist, führe den Merge für den Pull Request durch. 

{% ifversion fpt or ghec or ghes %} Jeder von {% data variables.product.prodname_dependabot %} ausgelöste Pull Request enthält Informationen zu Befehlen, mit denen du {% data variables.product.prodname_dependabot %} steuern kannst. Weitere Informationen findest du unter [Verwalten von Pull Requests für Abhängigkeitsupdates](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands).
{% endif %}

## Schließen von {% data variables.product.prodname_dependabot_alerts %}

{% tip %}

**Tipp:** Du kannst nur offene Warnungen verwerfen.
{% endtip %}

Wenn du umfangreiche Arbeiten zum Upgrade einer Abhängigkeit planst oder entscheidest, dass für eine Warnung keine Maßnahmen ergriffen werden müssen, kannst du die Warnung schließen. Durch das Schließen von bereits bewerteten Warnungen kannst du neue Warnungen leichter einordnen, sobald sie auftreten.

1. Sieh dir die Details zu einer Warnung an. Weitere Informationen findest du unter [Anzeigen von anfälligen Abhängigkeiten](#viewing-dependabot-alerts) (oben).
1. Wähle das Dropdownmenü „Schließen“ aus, und klicke auf einen Grund für das Schließen der Warnung.{% ifversion reopen-dependabot-alerts %} Nicht behobene geschlossene Warnungen können später erneut geöffnet werden.{% endif %} {% ifversion dependabot-alerts-dismissal-comment %}1. Füge optional einen Kommentar hinzu. Der Kommentar zum Schließen wird der Zeitleiste der Warnung hinzugefügt und kann bei Prüfungen und Berichterstellungen als Begründung verwendet werden. Du kannst einen Kommentar über die GraphQL-API abrufen oder festlegen. Der Kommentar ist im Feld `dismissComment` enthalten. Weitere Informationen findest du in der Dokumentation zur GraphQL-API unter [{% data variables.product.prodname_dependabot_alerts %}](/graphql/reference/objects#repositoryvulnerabilityalert).
![Screenshot: Schließen einer Warnung über das Dropdownfeld „Schließen“ mit der Option zum Hinzufügen eines Kommentars](/assets/images/help/repository/dependabot-alerts-dismissal-comment.png)
1. Klicke auf **Warnung schließen**.
{% else %} ![Auswählen der Begründung zum Schließen der Warnung über das Dropdownfeld „Schließen“](/assets/images/help/repository/dependabot-alert-dismiss-drop-down-ungrouped.png) {% endif %} {% ifversion dependabot-bulk-alerts %}

### Gleichzeitiges Verwerfen mehrerer Warnungen

1. Zeige die geöffnete {% data variables.product.prodname_dependabot_alerts %} an. Weitere Informationen findest du unter [Anzeigen von {% data variables.product.prodname_dependabot_alerts %}](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-dependabot-alerts).
2. Filtere optional die Liste der Warnungen, indem du ein Dropdownmenü auswählst und dann auf den Filter klickst, den du anwenden möchtest. Du kannst Filter auch in die Suchleiste eingeben.
3. Wähle links neben jedem Warnungstitel die Warnungen aus, die du verwerfen möchtest.
   ![Screenshot der geöffneten Warnungen mit hervorgehobenen Kontrollkästchen](/assets/images/help/graphs/select-multiple-alerts.png)
4. Wähle optional oben in der Liste der Warnungen alle Warnungen auf der Seite aus.
   ![Screenshot aller geöffneten ausgewählten Warnungen](/assets/images/help/graphs/select-all-alerts.png)
5. Wähle die Dropdownliste „Warnungen verwerfen“ aus, und klicke auf einen Grund zum Verwerfen der Warnungen.
   ![Screenshot der Seite mit offenen Warnungen mit hervorgehobener Dropdownliste „Warnungen verwerfen“](/assets/images/help/graphs/dismiss-multiple-alerts.png)

{% endif %}

{% ifversion reopen-dependabot-alerts %}

## Anzeigen und Aktualisieren von geschlossenen Warnungen

Du kannst alle geöffneten Warnungen anzeigen und Warnungen erneut öffnen, die zuvor geschlossen wurden. Geschlossene Warnungen, die bereits behoben wurden, können nicht erneut geöffnet werden.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-dependabot-alerts %}
1. Klicke auf **Geschlossen**, um geschlossene Warnungen anzuzeigen.

   {%- ifversion dependabot-bulk-alerts %} ![Screenshot mit der Option „Geschlossen“](/assets/images/help/repository/dependabot-alerts-closed-checkbox.png) {%- else %} ![Screenshot mit der Option „Geschlossen“](/assets/images/help/repository/dependabot-alerts-closed.png) {%- endif %}
1. Klicke auf die Warnung, die du anzeigen oder aktualisieren möchtest.

   {%- ifversion dependabot-bulk-alerts %} ![Screenshot einer hervorgehobenen Dependabot-Warnung](/assets/images/help/repository/dependabot-alerts-select-closed-alert-checkbox.png) {%- else %} ![Screenshot einer hervorgehobenen Dependabot-Warnung](/assets/images/help/repository/dependabot-alerts-select-closed-alert.png)   {%- endif %}
2. Alternativ kannst du auf **Erneut öffnen** klicken, wenn die Datei geschlossen wurde und du sie wieder öffnen möchtest. Warnungen, die bereits behoben wurden, können nicht erneut geöffnet werden.

   {% indented_data_reference reusables.enterprise.3-5-missing-feature spaces=3 %} ![Screenshot: Schaltfläche „Erneut öffnen“](/assets/images/help/repository/reopen-dismissed-alert.png)

{% endif %}

{% ifversion dependabot-bulk-alerts %}

### Gleichzeitiges erneutes Öffnen mehrerer Warnungen

1. Zeige die geschlossenen {% data variables.product.prodname_dependabot_alerts %} an. Weitere Informationen findest du unter [Anzeigen und Aktualisieren geschlossener Warnungen](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-and-updating-closed-alerts) (weiter oben).
2. Wähle links jedem neben Warnungstitel die Warnungen aus, die du erneut öffnen möchtest.
   ![Screenshot der geschlossenen Warnungen mit hervorgehobenen Kontrollkästchen](/assets/images/help/repository/dependabot-alerts-open-checkbox.png)
3. Wähle optional oben in der Warnungsliste alle geschlossenen Warnungen auf der Seite aus.
   ![Screenshot der geschlossenen Warnungen mit Auswahl aller Warnungen](/assets/images/help/graphs/select-all-closed-alerts.png)
4. Klicke auf **Erneut öffnen**, um die Warnungen erneut zu öffnen. Warnungen, die bereits behoben wurden, können nicht erneut geöffnet werden.
   ![Screenshot der geschlossenen Warnungen mit hervorgehobener Schaltfläche „Erneut öffnen“](/assets/images/help/graphs/reopen-multiple-alerts.png)

{% endif %}

 
## Überprüfen der Überwachungsprotokolle für {% data variables.product.prodname_dependabot_alerts %}

Wenn ein Mitglied deiner Organisation {% ifversion not fpt %}oder deines Unternehmens {% endif %}eine Aktion im Zusammenhang mit {% data variables.product.prodname_dependabot_alerts %} ausführt, kannst du die Aktionen im Überwachungsprotokoll überprüfen. Weitere Informationen zum Zugriff auf das Protokoll findest du unter „[Überwachungsprotokoll deiner Organisation überprüfen](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#accessing-the-audit-log){% ifversion not fpt %}“ und „[Zugreifen auf das Überwachungsprotokoll für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)“.{% else %}." {% endif %} {% ifversion dependabot-alerts-audit-log %}

![Screenshot des Überwachungsprotokolls mit Dependabot-Warnungen](/assets/images/help/dependabot/audit-log-UI-dependabot-alert.png){% endif %}

Ereignisse in deinem Überwachungsprotokoll für {% data variables.product.prodname_dependabot_alerts %} enthalten Details, z. B. wer die Aktion ausgeführt hat, was die Aktion war und wann die Aktion ausgeführt wurde. {% ifversion dependabot-alerts-audit-log %}Das Ereignis enthält auch einen Link zur Warnung selbst. Wenn ein Mitglied deiner Organisation eine Warnung schließt, zeigt das Ereignis den Grund für die Schließung und den Kommentar an.{% endif %} Informationen zu den {% data variables.product.prodname_dependabot_alerts %}-Aktionen findest du in der `repository_vulnerability_alert`-Kategorie in „[Überwachungsprotokoll deiner Organisation überprüfen](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#repository_vulnerability_alert-category-actions){% ifversion not fpt %}“ und „[Überwachungsprotokollereignisse für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#repository_vulnerability_alert-category-actions)“.{% else %}."{% endif %}

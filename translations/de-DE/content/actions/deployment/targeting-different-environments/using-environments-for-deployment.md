---
title: Verwenden von Umgebungen für die Bereitstellung
shortTitle: Use environments for deployment
intro: 'Du kannst Umgebungen mit Schutzregeln und Geheimnissen konfigurieren. Ein Workflowauftrag, der auf eine Umgebung verweist, muss alle Schutzregeln für diese Umgebung befolgen, ehe er ausgeführt wird oder auf die Geheimnisse der Umgebung zugreift.'
product: '{% data reusables.gated-features.environments %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/reference/environments
  - /actions/deployment/environments
  - /actions/deployment/using-environments-for-deployment
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 21163a759cfd7eab3b197aeb4bb9283e1ccb90a2
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147572303'
---
## Informationen zu Umgebungen

Umgebungen werden verwendet, um ein allgemeines Bereitstellungsziel wie `production`, `staging` oder `development` zu beschreiben. Wenn ein {% data variables.product.prodname_actions %}-Workflow in einer Umgebung bereitgestellt wird, wird die Umgebung auf der Hauptseite des Repositorys angezeigt. Weitere Informationen zum Anzeigen von Bereitstellungen in Umgebungen findest du unter [Anzeigen des Bereitstellungsverlaufs](/developers/overview/viewing-deployment-history).

Du kannst Umgebungen mit Schutzregeln und Geheimnissen konfigurieren. Wenn ein Workflowauftrag auf eine Umgebung verweist, wird der Auftrag erst dann gestartet, wenn alle Schutzregeln der Umgebung erfüllt sind. Ein Auftrag kann außerdem erst dann auf Geheimnisse zugreifen, die in einer Umgebung definiert sind, wenn alle Regeln zum Schutz der Umgebung erfüllt sind.

{% ifversion fpt %} {% note %}

**Hinweis:** Du kannst nur Umgebungen für öffentliche Repositorys konfigurieren. Wenn du ein öffentliches Repository in ein privates umwandelst, werden alle konfigurierten Schutzregeln oder Umgebungsgeheimnisse ignoriert, und du kannst keine Umgebungen konfigurieren. Wenn du das Repository wieder als öffentlich markierst, erhältst du Zugriff auf alle zuvor konfigurierten Schutzregeln und Umgebungsgeheimnisse.

Organisationen mit {% data variables.product.prodname_team %} und Benutzer*innen mit {% data variables.product.prodname_pro %} können Umgebungen für private Repositorys konfigurieren. Weitere Informationen findest du unter [{% data variables.product.prodname_dotcom %}-Produkte](/get-started/learning-about-github/githubs-products).

{% endnote %} {% endif %}

## Umgebungsschutzregeln

Umgebungsschutzregeln geben vor, dass bestimmte Bedingungen erfüllt sein müssen, bevor ein Auftrag ausgeführt werden kann, der auf die Umgebung verweist. Du kannst Umgebungsschutzregeln verwenden, um eine manuelle Genehmigung zu erfordern, einen Auftrag zu verzögern oder die Umgebung auf bestimmte Branches einzuschränken.

### Erforderliche Reviewer

Verwende erforderliche Reviewer, um für Workflowaufträge, die auf die Umgebung verweisen, eine Genehmigung durch eine bestimmte Person oder ein Team als erforderlich festzulegen. Du kannst bis zu sechs Benutzer oder Teams als Reviewer auflisten. Die Reviewer müssen mindestens Lesezugriff auf das Repository haben. Nur einer der erforderlichen Reviewer muss den Auftrag genehmigen, damit er fortgesetzt werden kann.

Weitere Informationen zum Review von Aufträgen, die auf eine Umgebung mit erforderlichen Reviewern verweisen, findest du unter [Überprüfen von Bereitstellungen](/actions/managing-workflow-runs/reviewing-deployments).

### Wartetimer

Verwende einen Wartetimer, um einen Auftrag für eine bestimmte Zeit zu verzögern, nachdem der Auftrag ausgelöst wurde. Die Zeit (in Minuten) muss eine ganze Zahl zwischen 0 und 43.200 (30 Tage) sein.

### Bereitstellungsbranches

Verwende Bereitstellungsbranches, um einzuschränken, welche Branches Bereitstellungen in der Umgebung durchführen können. Im Folgenden findest du die Optionen für Bereitstellungsbranches für eine Umgebung:

* **Alle Branches**: Alle Branches im Repository können Bereitstellungen in der Umgebung durchführen.
* **Geschützte Branches**: Nur Branches mit aktivierten Schutzregeln können Bereitstellungen in der Umgebung durchführen. Wenn für keinen Branch im Repository Schutzregeln definiert sind, können alle Branches Bereitstellungen durchführen. Weitere Informationen zu Regeln für den Schutz von Branches findest du unter [Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches).
* **Ausgewählte Branches**: Es können nur die Branches Bereitstellungen in der Umgebung durchführen, die den von dir angegebenen Namensmustern entsprechen.

  Wenn du zum Beispiel `releases/*` als Bereitstellungsbranchregel angibst, können nur Branches Bereitstellungen in der Umgebung durchführen, deren Name mit `releases/` beginnt. (Platzhalterzeichen liefern keine Übereinstimmung mit `/`. Um Branches zu finden, die mit `release/` beginnen und einen zusätzlichen einfachen Schrägstrich enthalten, verwendest du `release/*/*`). Wenn du `main` als Branchregel hinzufügst, kann auch ein Branch namens `main` Bereitstellungen in der Umgebung durchführen. Weitere Informationen zu den Syntaxoptionen für Bereitstellungsbranches findest du in der [Ruby File.fnmatch-Dokumentation](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).
## Umgebungsgeheimnisse

Die in einer Umgebung gespeicherten Geheimnisse sind nur für Workflowaufträge verfügbar, die auf diese Umgebung verweisen. Wenn für die Umgebung eine Genehmigung erforderlich ist, kann ein Auftrag erst dann auf Umgebungsgeheimnisse zugreifen, wenn einer der erforderlichen Reviewer den Auftrag genehmigt hat. Weitere Informationen zu Geheimnissen findest du unter [Verschlüsselte Geheimnisse](/actions/reference/encrypted-secrets).

{% note %}

**Hinweis:** Workflows, die auf selbstgehosteten Runnern ausgeführt werden, werden nicht in einem isolierten Container ausgeführt. Dies gilt auch dann, wenn sie Umgebungen verwenden. Umgebungsgeheimnisse sollten mit der gleichen Sicherheitsstufe behandelt werden wie Repository- und Organisationsgeheimnisse. Weitere Informationen findest du unter [Sicherheitshärtung für GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#hardening-for-self-hosted-runners).

{% endnote %}

## Erstellen einer Umgebung

{% data reusables.actions.permissions-statement-environment %}

{% ifversion fpt or ghec %} {% note %}

**Hinweis:** Die Erstellung einer Umgebung in einem privaten Repository steht Organisationen mit {% data variables.product.prodname_team %} und Benutzer*innen mit {% data variables.product.prodname_pro %} zur Verfügung.

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-environment %} {% data reusables.actions.new-environment %} {% data reusables.actions.name-environment %}
1. Du kannst optional Personen oder Teams angeben, die Workflowaufträge mit Verwendung dieser Umgebung genehmigen müssen.
   1. Wähle **Required reviewers** aus.
   1. Gib bis zu 6 Personen oder Teams ein. Nur einer der erforderlichen Reviewer muss den Auftrag genehmigen, damit er fortgesetzt werden kann.
   1. Klicke auf **Schutzregeln speichern**.
2. Gib optional die Zeitspanne an, die gewartet werden soll, bevor Workflowaufträge mit Verwendung dieser Umgebung fortgesetzt werden können.
   1. Wähle **Wartetimer** aus.
   1. Gib die gewünschte Wartezeit in Minuten ein.
   1. Klicke auf **Schutzregeln speichern**.
3. Optional kannst du angeben, welche Branches Bereitstellungen in dieser Umgebung durchführen können. Weitere Informationen zu den möglichen Werten findest du unter [Bereitstellungsbranches](#deployment-branches).
   1. Wähle die gewünschte Option im Dropdownmenü **Bereitstellungsbranches** aus.
   1. Wenn du **Ausgewählte Branches** ausgewählt hast, gib die Branchnamensmuster ein, die du zulassen möchtest.
4. Optional kannst du Umgebungsgeheimnisse hinzufügen. Diese Geheimnisse sind nur für Workflowaufträge verfügbar, die die Umgebung verwenden. Außerdem können Workflowaufträge mit Verwendung dieser Umgebung erst dann auf diese Geheimnisse zugreifen, wenn alle konfigurierten Regeln (z. B. erforderliche Reviewer) erfüllt sind. Weitere Informationen zu Geheimnissen findest du unter [Verschlüsselte Geheimnisse](/actions/reference/encrypted-secrets).
   1. Klicke unter **Umgebungsgeheimnisse** auf **Geheimnis hinzufügen**.
   1. Gib den Geheimnisnamen ein.
   1. Gib den Geheimniswert ein.
   1. Klicke auf **Geheimnis hinzufügen**.

Du kannst auch Umgebungen über die REST-API erstellen und konfigurieren. Weitere Informationen findest du unter [Bereitstellungsumgebungen](/rest/deployments/environments), [GitHub Actions-Geheimnisse](/rest/actions/secrets) und [ Richtlinien für Bereitstellungsbranches](/rest/deployments/branch-policies).

Wenn du einen Workflow ausführst, der auf eine nicht vorhandene Umgebung verweist, wird eine Umgebung mit dem referenzierten Namen erstellt. Für die neu erstellte Umgebung sind keine Schutzregeln oder Geheimnisse konfiguriert. Jeder Benutzer, der Workflows im Repository bearbeiten kann, kann Umgebungen über eine Workflowdatei erstellen, aber nur Repositoryadministratoren können die Umgebung konfigurieren.

## Verwenden einer Umgebung

Jeder Auftrag in einem Workflow kann auf eine einzelne Umgebung verweisen. Alle für die Umgebung konfigurierten Schutzregeln müssen eingehalten werden, bevor ein Auftrag, der auf die Umgebung verweist, an einen Runner gesendet wird. Der Auftrag kann erst dann auf die Geheimnisse der Umgebung zugreifen, wenn der Auftrag an einen Runner gesendet wird.

Wenn ein Workflow auf eine Umgebung verweist, wird die Umgebung in den Bereitstellungen des Repositorys angezeigt. Weitere Informationen zum Anzeigen aktueller und früherer Bereitstellungen findest du unter [Anzeigen des Bereitstellungsverlaufs](/developers/overview/viewing-deployment-history).

{% data reusables.actions.environment-example %}

## Löschen einer Umgebung

{% data reusables.actions.permissions-statement-environment %}

Wenn du eine Umgebung löschst, werden alle Geheimnisse und Schutzregeln gelöscht, die dieser Umgebung zugeordnet sind. Alle Aufträge, die aufgrund von Schutzregeln aus der gelöschten Umgebung warten, schlagen automatisch fehl.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-environment %}
1. Klicke neben der Umgebung, die du löschen möchtest, auf {% octicon "trash" aria-label="The trash icon" %}.
2. Klicke auf **Verstanden, diese Umgebung löschen**.

Du kannst Umgebungen auch über die REST-API löschen. Weitere Informationen findest du unter [Umgebungen](/rest/reference/repos#environments).

## Beziehung zwischen Umgebungen und Bereitstellungen

{% data reusables.actions.environment-deployment-event %}

Du kannst auf diese Objekte über die REST-API oder die GraphQL-API zugreifen. Du kannst diese Webhookereignisse auch abonnieren. Weitere Informationen findest du unter [Repositorys](/rest/reference/repos#deployments) (REST-API), [Objekte](/graphql/reference/objects#deployment) (GraphQL-API) oder [Webhookereignisse und Nutzdaten](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment).

## Nächste Schritte

{% data variables.product.prodname_actions %} bietet verschiedene Funktionen zum Verwalten deiner Bereitstellungen. Weitere Informationen findest du unter [Bereitstellen mit GitHub Actions](/actions/deployment/deploying-with-github-actions).

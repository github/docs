---
title: Informationen zu benutzerdefinierten Aktionen
intro: 'Aktionen sind einzelne Aufgaben, die du kombinieren kannst, um Aufträge zu erstellen und deinen Workflow anzupassen. Du kannst eigene Aktionen erstellen oder Aktionen verwenden und anpassen, die von der {% data variables.product.prodname_dotcom %}-Community geteilt wurden.'
redirect_from:
  - /articles/about-actions
  - /github/automating-your-workflow-with-github-actions/about-actions
  - /actions/automating-your-workflow-with-github-actions/about-actions
  - /actions/building-actions/about-actions
  - /actions/creating-actions/about-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Action development
  - Fundamentals
ms.openlocfilehash: 1e81bea551ceff1980b0bbe96202f60db0d0e7f2
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191952'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zu benutzerdefinierten Aktionen

Zum Erstellen von Aktionen kannst du benutzerdefinierten Code schreiben, der mit deinem Repository auf die gewünschte Weise interagiert und sich dabei beispielsweise in die APIs von {% data variables.product.prodname_dotcom %} und in öffentlich zugängliche Drittanbieter-APIs integriert. Beispielsweise kann eine Aktion npm-Module veröffentlichen, SMS-Warnungen senden, wenn dringende Probleme erstellt werden, oder produktionsbereiten Code bereitstellen.

{% ifversion fpt or ghec %} Du kannst eigene Aktionen zur Verwendung in deinem Workflow schreiben oder die von dir erstellten Aktionen mit der {% data variables.product.prodname_dotcom %}-Community teilen. Damit du die von dir erstellten Aktionen mit anderen teilen kannst, muss dein Repository öffentlich sein. {% ifversion internal-actions %}Wenn du Aktionen nur innerhalb deines Unternehmens freigeben möchtest, muss dein Repository als intern gekennzeichnet sein.{% endif %} {% endif %}

Aktionen können direkt auf einem Computer oder in einem Docker-Container laufen. Du kannst für eine Aktion die Eingabe, die Ausgabe und die Umgebungsvariablen definieren.

## Arten von Aktionen

Du kannst Docker-Container-, JavaScript- und zusammengesetzte Aktionen erstellen. Aktionen benötigen eine Metadaten-Datei, in der die Eingaben, Ausgaben und der Haupteinstiegspunkt für die Aktion definiert werden. Der Name der Metadatendatei muss entweder `action.yml` oder `action.yaml` lauten. Weitere Informationen findest du unter [Metadatensyntax für {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions).

| type | Betriebssystem |
| ---- | ------------------- |
| Docker-Container | Linux |
| JavaScript | Linux, macOS, Windows |
| Zusammengesetzte Aktionen | Linux, macOS, Windows |

### Docker-Containeraktionen

Docker-Container packen die Umgebung mit dem {% data variables.product.prodname_actions %}-Code. So entsteht eine konsistentere, zuverlässigere Arbeitseinheit, da der Aktionsbenutzer sich nicht um Tools oder Abhängigkeiten kümmern muss.

Mit einem Docker-Container kannst du bestimmte Versionen eines Betriebssystems sowie bestimmte Abhängigkeiten, Tools und Code verwenden. Bei Aktionen, die in einer bestimmten Umgebungs-Konfiguration laufen müssen, ist Docker eine ideale Option, da du das Betriebssystem und die Tools anpassen kannst. Wegen der Latenz für das Erstellen und Abrufen des Containers sind Docker-Container-Aktionen langsamer als JavaScript-Aktionen.

Docker Container-Aktionen können nur auf Runnern mit einem Linux-Betriebssystem ausgeführt werden. {% data reusables.actions.self-hosted-runner-reqs-docker %}

### JavaScript-Aktionen

JavaScript-Aktionen können direkt auf einem Runner-Rechner laufen und den Aktions-Code von der Umgebung trennen, in der der Code läuft. Eine JavaScript-Aktion enthält einfacheren Aktionscode und läuft schneller als eine Docker-Container-Aktion.

{% data reusables.actions.pure-javascript %}

Wenn du ein Node.js Projekt entwickelst, bietet das {% data variables.product.prodname_actions %} Toolkit Pakete, die du in deinem Projekt verwenden kannst, um die Entwicklung zu beschleunigen. Weitere Informationen findest du im Repository für [Aktionen/Toolkits](https://github.com/actions/toolkit).

### Zusammengesetzte Aktionen

Mit einer _zusammengesetzten_ Aktion kannst du mehrere Workflowschritte in einer Aktion kombinieren. Du kannst diese Funktion zum Beispiel nutzen, um mehrere Ausführungsbefehle in einer Aktion zu bündeln und dann einen Workflow einzurichten, der die gebündelten Befehle in einem einzigen Schritt mit dieser Aktion ausführt. Ein Beispiel findest du unter [Erstellen einer zusammengesetzten Aktion](/actions/creating-actions/creating-a-composite-action).

## Ort für eine Aktion auswählen

Wenn du eine Aktion entwickelst, die von anderen Personen genutzt werden soll, empfehlen wir, die Aktion in ihrem eigenen Repository zu belassen, also nicht mit anderem Anwendungscode zu einem Bundle zusammenzufassen. Damit kannst du die Aktion wie jede andere Software versionieren, nachverfolgen und veröffentlichen.

{% ifversion fpt or ghec %} Wenn du eine Aktion in einem eigenen Repository speicherst, ist es für die {% data variables.product.prodname_dotcom %}-Community einfacher, die Aktion zu finden. Außerdem grenzt dies den Umfang der Codebasis für Entwickler ein, die Issues beheben und die Aktion erweitern möchten, und entkoppelt die Versionsverwaltung der Aktion von der Versionsverwaltung des übrigen Anwendungscodes.
{% endif %}

{% data reusables.actions.internal-actions-summary %}

{% ifversion fpt or ghec %}Wenn du eine Aktion erstellst, die du nicht für andere verfügbar machen möchtest, kannst du {% else %} Du kannst {% endif %}die Dateien der Aktion an einem beliebigen Speicherort in deinem Repository speichern. Wenn du planst, Aktions-, Workflow- und Anwendungscode in einem einzigen Repository zu kombinieren, empfehlen wir, Aktionen im Verzeichnis `.github` zu speichern. Beispiel: `.github/actions/action-a` und `.github/actions/action-b`.

## Kompatibilität mit {% data variables.product.prodname_ghe_server %}

Um sicherzustellen, dass deine Aktion mit {% data variables.product.prodname_ghe_server %} kompatibel ist, solltest du darauf achten, dass du keine hartcodierten Verweise auf {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API-URLs verwendest. Du solltest stattdessen Umgebungsvariablen verwenden, um auf die {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API zu verweisen:

- Verwende für die REST-API die Umgebungsvariable `GITHUB_API_URL`.
- Verwende für GraphQL die Umgebungsvariable `GITHUB_GRAPHQL_URL`.

Weitere Informationen findest du unter [Standardumgebungsvariablen](/actions/configuring-and-managing-workflows/using-environment-variables#default-environment-variables).

## Using release management for actions (Verwenden der Releaseverwaltung für Aktionen)

In diesem Abschnitt erfährst du, wie du mithilfe der Releaseverwaltung Updates auf planbare Weise an deine Aktionen verteilen kannst.

### Bewährte Methoden für die Releaseverwaltung

Wenn du eine Aktion entwickelst, die auch von anderen genutzt werden soll, empfehlen wir dir, die Verteilung von Updates mithilfe der Releaseverwaltung zu steuern. Die Benutzer*innen können erwarten, dass die Patchversion einer Aktion die notwendigen kritischen Fixes und Sicherheitspatches enthält und dennoch weiterhin mit ihren vorhandenen Workflows kompatibel ist. Du solltest die Veröffentlichung einer neuen Hauptversion in Betracht ziehen, wenn sich deine Änderungen auf die Kompatibilität auswirken.

Bei diesem Releaseverwaltungsansatz sollten Benutzer nicht auf den <code>Master</code> Zweig einer Aktion verweisen, da dieser wahrscheinlich den neuesten Code enthält und daher möglicherweise instabil ist. Stattdessen kannst du deinen Benutzern empfehlen, bei Verwendung deiner Aktion eine Hauptversion anzugeben und nur dann auf eine spezifischere Version zu verweisen, wenn sie auf Probleme stoßen.

Um eine bestimmte Version einer Aktion zu verwenden, kannst du deinen {% data variables.product.prodname_actions %}-Workflow für ein Tag, den SHA eines Commits oder einen Branch für ein Release konfigurieren.

### Verwenden von Tags für die Releaseverwaltung

Es wird empfohlen, Tags für die Releaseverwaltung von Aktionen zu verwenden. Bei diesem Ansatz können deine Benutzer leicht zwischen Haupt- und Nebenversionen unterscheiden:

- Erstelle und überprüfe ein Release in einem Releasebranch (z. B. `release/v1` ), bevor du das Versionstag (z. B. `v1.0.2`) erstellst.
- Erstelle ein Release mittels semantischer Versionierung. Weitere Informationen findest du unter [Erstellen von Releases](/articles/creating-releases).
- Verschiebe das Hauptversionstag (z. B. `v1`, `v2`) so, dass es auf die Git-Referenz der aktuellen Version zeigt. Weitere Informationen findest du unter [Git-Grundlagen – Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging).
- Führe ein neues Hauptversionstag (`v2`) für Änderungen ein, die vorhandene Workflows unterbrechen. Eine störende Änderung liegt beispielsweise vor, wenn die Eingabe einer Aktion geändert wird.
- Hauptversionen können zunächst mit einem `beta`-Tag veröffentlicht werden, um ihren Status anzugeben, z. B. `v2-beta`. Das `-beta`-Tag kann dann später wieder entfernt werden.

Dieses Beispiel zeigt, wie ein Benutzer auf ein Tag für ein Hauptrelease verweisen kann:

```yaml
steps:
    - uses: actions/javascript-action@v1
```

Dieses Beispiel zeigt, wie ein Benutzer auf ein Tag für ein bestimmtes Patchrelease verweisen kann:

```yaml
steps:
    - uses: actions/javascript-action@v1.0.1
```

### Verwenden von Branches für die Releaseverwaltung

Wenn du lieber Branchnamen für die Releaseverwaltung verwendest, zeigt dir dieses Beispiel, wie du auf einen benannten Branch verweisen kannst:

```yaml
steps:
    - uses: actions/javascript-action@v1-beta
```

### Verwenden des SHA eines Commits für die Releaseverwaltung

Jeder Git-Commit erhält einen berechneten SHA-Wert, der eindeutig und unveränderlich ist. Die Benutzer deiner Aktion ziehen es vielleicht vor, sich auf den SHA-Wert eines Commits zu verlassen, da dieser Ansatz zuverlässiger ist als das Angeben eines Tags, das gelöscht oder verschoben werden könnte. Das bedeutet jedoch, dass die Benutzer keine weiteren Updates erhalten, die für die Aktion vorgenommen werden. Du musst den vollständigen SHA-Wert eines Commits verwenden, keinen abgekürzten Wert.

```yaml
steps:
    - uses: actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89
```

## Eine README-Datei für die Aktion erstellen

Wenn du deine Aktion öffentlich bereitstellen möchten, empfehlen wir, eine README-Datei zu erstellen, damit andere Benutzer verstehen, wie die Aktion zu verwenden ist. Du kannst diese Informationen in deine `README.md` aufnehmen:

- Eine ausführliche Beschreibung, was die Aktion bewirkt
- Erforderliche Eingabe- und Ausgabe-Argumente
- Optionale Eingabe- und Ausgabe-Argumente
- Geheimnisse, die in der Aktion verwendet werden
- Umgebungsvariablen, die in der Aktion verwendet werden
- Ein Beispiel für die Verwendung der Aktion in einem Workflow

## Unterschiede zwischen {% data variables.product.prodname_actions %} und {% data variables.product.prodname_github_apps %}

{% data variables.product.prodname_marketplace %} bietet Tools, um deinen Workflow zu verbessern. Wenn du die Unterschiede und die Vorteile der einzelnen Tools verstehst, kannst du das beste Tool für deinen Auftrag auswählen. Weitere Informationen zum Erstellen von Apps findest du unter [Informationen zu Apps](/apps/about-apps/).

### Stärken von GitHub Aktionen und GitHub Apps

Sowohl {% data variables.product.prodname_actions %} als auch {% data variables.product.prodname_github_apps %} bieten Möglichkeiten zur Entwicklung von Automatisierungs- und Workflowtools, aber durch ihre jeweiligen Stärken sind sie für unterschiedliche Zwecke von Nutzen.

{% data variables.product.prodname_github_apps %}:
* Laufen dauerhaft und können schnell auf Ereignisse reagieren.
* Funktionieren hervorragend, wenn persistente Daten benötigt werden.
* Funktionieren am besten mit API-Anforderungen, die nicht zeitaufwändig sind.
* Laufen auf deinem Server oder auf deiner Rechner-Infrastruktur.

{% data variables.product.prodname_actions %}:
* Bieten Automatisierung für eine kontinuierliche Integration und kontinuierliche Bereitstellung.
* Können direkt auf Runner-Maschinen oder in Docker-Containern laufen.
* Können auch Zugriff auf einen Klon deines Repositorys einschließen und dadurch Bereitstellungs- und Veröffentlichungstools, Codeformatierern und Befehlszeilentools den Zugriff auf deinen Code erlauben.
* Erfordern weder, dass du Code noch eine App bereitstellst.
* Du benötigst eine einfache Schnittstelle zum Erstellen und Verwenden von Geheimnissen. Dadurch können die Aktionen mit Diensten von Drittanbietern interagieren, ohne die Anmelde-Informationen des Aktions-Benutzers speichern zu müssen.

## Weitere Informationsquellen

- [Entwicklungstools für {% data variables.product.prodname_actions %}](/articles/development-tools-for-github-actions)

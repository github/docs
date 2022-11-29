---
ms.openlocfilehash: a9f12214edcef8a107ad9c447fea7207cfdc48f4
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/28/2022
ms.locfileid: "148184090"
---
Wenn ein gleichzeitiger Auftrag oder ein Workflow in die Warteschlange gestellt wird, wenn ein anderer Auftrag oder Workflow, der dieselbe Übereinstimmungsgruppe im Repository verwendet, in Bearbeitung ist, wird `pending` der Warteschlangeauftrag oder der Workflow ausgeführt. Alle zuvor anhängigen Aufträge oder Workflows in der Parallelitätsgruppe werden abgebrochen. Du kannst auch mit `cancel-in-progress: true` alle derzeit ausgeführten Aufträge oder Workflows in derselben Parallelitätsgruppe abbrechen.

### Beispiele: Verwenden der Parallelität und des Standardverhaltens

{% raw %}
```yaml
concurrency: staging_environment
```
{% endraw %}

{% raw %}
```yaml
concurrency: ci-${{ github.ref }}
```
{% endraw %}

### Beispiel: Verwenden von Parallelität zum Abbrechen eines In-Progress-Auftrags oder Ausführens

{% raw %}
```yaml
concurrency:
  group: ${{ github.ref }}
  cancel-in-progress: true
```
{% endraw %}

### Beispiel: Verwenden eines Fallbackwerts

Wenn du den Gruppennamen mit einer Eigenschaft erstellst, die nur für bestimmte Ereignisse definiert ist, kannst du einen Fallbackwert verwenden. So wird beispielsweise `github.head_ref` nur für `pull_request` Ereignisse definiert. Wenn dein Workflow zusätzlich `pull_request` zu Ereignissen auf andere Ereignisse reagiert, musst du einen Fallback bereitstellen, um einen Syntaxfehler zu vermeiden. Die folgende Parallelitätsgruppe bricht laufende Aufträge oder Ausführungen nur bei `pull_request` Ereignissen ab. Wenn `github.head_ref` nicht definiert ist, greift die Parallelitätsgruppe auf die Ausführungs-ID zurück, die garantiert eindeutig und für die Ausführung definiert ist.

{% raw %}
```yaml
concurrency:
  group: ${{ github.head_ref || github.run_id }}
  cancel-in-progress: true
```
{% endraw %}


### Beispiel: Nur laufende Aufträge oder Ausführungen für den aktuellen Workflow abbrechen

 Wenn du mehrere Workflows im selben Repository hast, müssen die Namen der Parallelitätsgruppen für alle Workflows eindeutig sein, um zu vermeiden, dass laufende Aufträge oder Ausführungen von anderen Workflows abgebrochen werden. Andernfalls werden alle zuvor ausgeführten oder ausstehenden Aufgaben abgebrochen, unabhängig vom Workflow.

Um nur die Ausführung desselben Workflows abzubrechen, kannst du die `github.workflow` Eigenschaft verwenden, um die Parallelitätsgruppe zu erstellen:

{% raw %}
```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```
{% endraw %}


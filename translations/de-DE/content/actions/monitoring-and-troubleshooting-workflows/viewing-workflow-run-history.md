---
title: Anzeigen des Ausführungsverlaufs eines Workflows
intro: Du kannst für jede Ausführung eines Workflows Protokolle anzeigen. Protokolle enthalten den Status für jeden Auftrag und Schritt in einem Workflow.
redirect_from:
  - /actions/managing-workflow-runs/viewing-workflow-run-history
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: View workflow run history
ms.openlocfilehash: bfef1ccd9f15480000332aec3ced6dc326cb9af3
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145107203'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-read %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

### Anzeigen der letzten Workflowausführungen

Verwende zum Auflisten der letzten Workflowausführungen den Unterbefehl `run list`.

```shell
gh run list
```

Um die maximale Anzahl der zurückzugebenden Ausführungen anzugeben, kannst du das Flag `-L` oder `--limit` verwenden. Der Standardwert ist `10`.

```shell
gh run list --limit 5
```

Um nur Ausführungen für den angegebenen Workflow zurückzugeben, kannst du das Flag `-w` oder `--workflow` verwenden.  Ersetze `workflow` entweder durch den Workflownamen, die Workflow-ID oder den Workflowdateinamen. Beispiel: `"Link Checker"`, `1234567` oder `"link-check-test.yml"`.

```shell
gh run list --workflow <em>workflow</em>
```

### Anzeigen von Details für eine bestimmte Workflowausführung

Verwende den Unterbefehl `run view`, um Details für eine bestimmte Workflowausführung anzuzeigen. Ersetze `run-id` durch die ID der Ausführung, die du anzeigen möchtest. Wenn du keine `run-id` angibst, gibt {% data variables.product.prodname_cli %} ein interaktives Menü zurück, in dem du eine der letzten Ausführungen auswählen kannst.

```shell
gh run view <em>run-id</em>
```

Um Auftragsschritte in die Ausgabe einzuschließen, verwende das Flag `-v` oder `--verbose`.

```shell
gh run view <em>run-id</em> --verbose
```

Zum Anzeigen von Details zu einem bestimmten Auftrag in der Ausführung verwendest du das Flag `-j` oder `--job`.  Ersetze `job-id` durch die ID des Auftrags, den du anzeigen möchtest.

```shell
gh run view --job <em>job-id</em>
```

Verwende das Flag `--log`, um das vollständige Protokoll für einen Auftrag anzuzeigen.

```shell
gh run view --job <em>job-id</em> --log
```

Verwende das Flag `--exit-status`, um den Vorgang mit einem Status ungleich 0 zu beenden, wenn die Ausführung fehlgeschlagen ist. Beispiel:

```shell
gh run view 0451 --exit-status && echo "run pending or passed"
```

{% endcli %}

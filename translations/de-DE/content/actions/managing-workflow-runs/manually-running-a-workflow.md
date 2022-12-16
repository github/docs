---
title: Manuelles Ausführen eines Workflows
intro: 'Wenn ein Workflow für die Ausführung im Falle des `workflow_dispatch`-Ereignisses konfiguriert ist, kannst du den Workflow über die Registerkarte „Aktionen“ in {% data variables.product.prodname_dotcom %}, die {% data variables.product.prodname_cli %} oder die REST-API ausführen.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Manually run a workflow
ms.openlocfilehash: 22717c31a6bc2599f066b0e870f0aa652c18cc6f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145105184'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Konfigurieren eines Workflows zur manuellen Ausführung

Um einen Workflow manuell auszuführen, muss der Workflow so konfiguriert sein, dass er auf dem `workflow_dispatch`-Ereignis ausgeführt wird. Um das `workflow_dispatch`-Ereignis auszulösen, muss sich dein Workflow im Standardbranch befinden. Weitere Informationen zum Konfigurieren des `workflow_dispatch`-Ereignisses findest du unter [Ereignisse, die Workflows auslösen](/actions/reference/events-that-trigger-workflows#workflow_dispatch).

{% data reusables.repositories.permissions-statement-write %}

## Ausführen eines Workflows

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. Klicke in der linken Randleiste auf den Workflow, den du ausführen möchtest.
![Aktionen: Workflow auswählen](/assets/images/actions-select-workflow.png)
1. Wähle über der Liste der Workflowausführungen **Workflow ausführen** aus.
![Aktionen: Workflow versenden](/assets/images/actions-workflow-dispatch.png)
1. Wähle im Dropdownmenü **Branch** den Branch des Workflows aus, und gib die Eingabeparameter ein. Klicke auf **Workflow ausführen**.
![Aktionen: Workflow manuell ausführen](/assets/images/actions-manually-run-workflow.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Um einen Workflow auszuführen, verwende den Unterbefehl `workflow run`. Ersetze den `workflow`-Parameter durch den Namen, die ID oder den Dateinamen des Workflows, den du ausführen möchtest. Beispiel: `"Link Checker"`, `1234567` oder `"link-check-test.yml"`. Wenn du keinen Workflow angibst, gibt {% data variables.product.prodname_cli %} ein interaktives Menü zurück, in dem du einen Workflow auswählen kannst.

```shell
gh workflow run <em>workflow</em>
```

Wenn dein Workflow Eingaben akzeptiert, wirst du von {% data variables.product.prodname_cli %} aufgefordert, sie einzugeben. Alternativ kannst du mit `-f` oder `-F` eine Eingabe im `key=value`-Format hinzufügen. Lies mit `-F` aus einer Datei.

```shell
gh workflow run greet.yml -f name=mona -f greeting=hello -F data=@myfile.txt
```

Du kannst Eingaben auch im JSON-Format übergeben, indem du die Standardeingabe verwendest.

```shell
echo '{"name":"mona", "greeting":"hello"}' | gh workflow run greet.yml --json
```

Um einen Workflow auf einem anderen Branch als dem Standardbranch des Repositorys auszuführen, verwende das `--ref`-Flag.

```shell
gh workflow run <em>workflow</em> --ref <em>branch-name</em>
```

Um den Fortschritt der Workflowausführung anzuzeigen, verwende den Unterbefehl `run watch`, und wähle die Ausführung in der interaktiven Liste aus.

```shell
gh run watch
```

{% endcli %}

## Ausführen eines Workflows mithilfe der REST-API

Wenn du die REST-API verwendest, konfiguriere `inputs` und `ref` als Anforderungstextparameter. Wenn die Eingaben weggelassen werden, werden die in der Workflowdatei definierten Standardwerte verwendet.

{% note %}

**Hinweis:** Du kannst bis zu 10 `inputs` für ein `workflow_dispatch`-Ereignis definieren.

{% endnote %}

Weitere Informationen zur Verwendung der REST-API findest du unter [Erstellen eines Workflowversandereignisses](/rest/reference/actions/#create-a-workflow-dispatch-event).

---
title: Deaktivieren und Aktivieren eines Workflows
intro: 'Du kannst einen Workflow mithilfe der {% data variables.product.prodname_dotcom %}-Benutzeroberfläche, der REST-API oder {% data variables.product.prodname_cli %} deaktivieren und erneut aktivieren.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Disable & enable a workflow
ms.openlocfilehash: 1c0ebc0f56ba8c337648670e0f07d8a56e2fc326
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145125946'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Indem du einen Workflow deaktivierst, kannst du das Auslösen dieses Workflows verhindern, ohne die Datei aus dem Repository löschen zu müssen. Du kannst den Workflow problemlos wieder auf {% data variables.product.prodname_dotcom %} aktivieren.

Das vorübergehende Deaktivieren eines Workflows kann in vielen Szenarien nützlich sein. Im Folgenden sind einige Beispiele aufgeführt, in denen das Deaktivieren eines Workflows hilfreich sein kann:

- Ein Workflowfehler erzeugt zu viele oder falsche Anforderungen und beeinträchtigt damit externe Dienste.
- Ein Workflow ist nicht kritisch und verbraucht in deinem Konto zu viele Minuten.
- Ein Workflow sendet Anforderungen an einen Dienst, der nicht aktiv ist.
- Workflows in einem geforkten Repository werden nicht benötigt (z. B. geplante Workflows).

{% warning %}

**Warnung**: {% data reusables.actions.scheduled-workflows-disabled %}

{% endwarning %}

Du kannst einen Workflow auch mithilfe der REST-API deaktivieren und aktivieren. Weitere Informationen findest du in der [REST-API-Dokumentation zu Aktionen](/rest/reference/actions#workflows).

## Deaktivieren eines Workflows

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. Klicke auf der linken Randleiste auf den Workflow, der deaktiviert werden soll.
![Aktionen: Workflows auswählen](/assets/images/actions-select-workflow.png)
1. Klicke auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
![Drei-Punkte-Menü für Aktionen](/assets/images/help/repository/actions-workflow-menu-kebab.png)
1. Klicke auf **Workflow deaktivieren**.
![Aktionen: Workflow deaktivieren](/assets/images/help/repository/actions-disable-workflow.png) Der deaktivierte Workflow wird mit {% octicon "stop" aria-label="The stop icon" %} markiert, um den Status anzuzeigen.
![Aktionen: deaktivierten Workflow auflisten](/assets/images/help/repository/actions-find-disabled-workflow.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Um einen Workflow zu deaktivieren, verwende den Unterbefehl `workflow disable`. Ersetze `workflow` durch den Namen, die ID oder den Dateinamen des Workflows, den du deaktivieren möchtest. Beispiel: `"Link Checker"`, `1234567` oder `"link-check-test.yml"`. Wenn du keinen Workflow angibst, gibt {% data variables.product.prodname_cli %} ein interaktives Menü zurück, in dem du einen Workflow auswählen kannst.

```shell
gh workflow disable <em>workflow</em>
```

{% endcli %}

## Aktivieren eines Workflows

{% webui %}

Du kannst einen zuvor deaktivierten Workflow wieder aktivieren.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. Klicke auf der linken Randleiste auf den Workflow, den du aktivieren möchtest.
![Aktionen: deaktivierten Workflow auswählen](/assets/images/help/repository/actions-select-disabled-workflow.png)
1. Klicke auf **Workflow aktivieren**.
![Aktionen: Workflow aktivieren](/assets/images/help/repository/actions-enable-workflow.png)

{% endwebui %}

{% cli %}

Um einen Workflow zu aktivieren, verwende den Unterbefehl `workflow enable`. Ersetze `workflow` durch den Namen, die ID oder den Dateinamen des Workflows, den du aktivieren möchtest. Beispiel: `"Link Checker"`, `1234567` oder `"link-check-test.yml"`. Wenn du keinen Workflow angibst, gibt {% data variables.product.prodname_cli %} ein interaktives Menü zurück, in dem du einen Workflow auswählen kannst.

```shell
gh workflow enable <em>workflow</em>
```

{% endcli %}

---
ms.openlocfilehash: 89c3ed1592c000322cf4f0d6915e355bc81014ed
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120927"
---
Verwende `jobs.<job_id>.runs-on` zum Definieren des Computertyps, auf dem der Auftrag ausgeführt werden soll. 

{% ifversion fpt or ghec %}: Der Zielcomputer kann ein [auf {% data variables.product.prodname_dotcom %} gehosteter Runner](#choosing-github-hosted-runners), ein [{% data variables.actions.hosted_runner %}](#choosing-runners-in-a-group) oder ein [selbstgehosteter Runner](#choosing-self-hosted-runners) sein.{% else %}
- Der Zielcomputer kann ein [selbstgehosteter Runner](#choosing-self-hosted-runners) sein. {% endif %} {% ifversion target-runner-groups %}: Sie können Runner basierend auf den ihnen zugewiesenen Bezeichnungen oder ihrer Gruppenmitgliedschaft oder einer Kombination aus diesen als Ziel festlegen. {% else %}
- Du kannst Runner basierend auf den ihnen zugewiesenen Bezeichnungen als Ziel festlegen. {% endif %}
- Du kannst `runs-on` als einzelne Zeichenfolge oder als Array von Zeichenfolgen bereitstellen. 
- Wenn du ein Array von Zeichenfolgen angibst, wird dein Workflow auf jedem Runner ausgeführt, der allen angegebenen `runs-on`-Werten entspricht. 
- Wenn du deinen Workflow auf mehreren Computern ausführen möchtest, verwende [`jobs.<job_id>.strategy`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy).

{% ifversion fpt or ghec or ghes %} {% data reusables.actions.enterprise-github-hosted-runners %}

### Auswählen von {% data variables.product.prodname_dotcom %}-gehosteten Runnern

Wenn du einen {% data variables.product.prodname_dotcom %}-gehosteten Runner verwendest, läuft jeder Job in einer neuen Instanz eines von `runs-on` angegebenen Runner-Images.

Verfügbare Arten von {% data variables.product.prodname_dotcom %}-gehostete Runnern sind:

{% data reusables.actions.supported-github-runners %}

#### Beispiel: Angeben eines Betriebssystems

```yaml
runs-on: ubuntu-latest
```

Weitere Informationen findest du unter [Informationen zu auf {% data variables.product.prodname_dotcom %} gehosteten Runnern](/actions/using-github-hosted-runners/about-github-hosted-runners).
{% endif %}

{% ifversion fpt or ghec or ghes %}
### Auswählen von selbstgehosteten Runnern
{% endif %}

{% data reusables.actions.self-hosted-runner-labels-runs-on %}

#### Beispiel: Verwenden von Bezeichnungen für die Auswahl von Runnern

```yaml
runs-on: [self-hosted, linux]
```

Weitere Informationen findest du unter [Informationen zu selbstgehosteten Runnern](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners) und [Verwenden von selbstgehosteten Runnern in einem Workflow](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow).

{% ifversion target-runner-groups %}

### Auswählen von Runnern in einer Gruppe

Du kannst `runs-on` verwenden, um Runnergruppen als Ziel zu verwenden, sodass der Auftrag auf jedem Runner ausgeführt wird, der Mitglied dieser Gruppe ist. Für eine präzisere Steuerung kannst du auch Runnergruppen mit Bezeichnungen kombinieren.

Runnergruppen können nur [{% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/using-larger-runners) oder [selbstgehostete Runner](/actions/hosting-your-own-runners) als Mitglieder haben.

#### Beispiel: Verwenden von Gruppen zum Steuern, wo Aufträge ausgeführt werden

{% data reusables.actions.jobs.example-runs-on-groups %}

#### Beispiel: Kombinieren von Gruppen und Bezeichnungen

{% data reusables.actions.jobs.example-runs-on-labels-and-groups %}

{% endif %}
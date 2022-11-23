---
ms.openlocfilehash: 714bd89ad6e55900871cc7622d922495b8c09a9d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145103800"
---
### Ausführen auf einem anderen Betriebssystem

Die Vorlage zum Starter-Workflow konfiguriert Aufträge zur Ausführung unter Linux und verwendet mit {% data variables.product.prodname_dotcom %} gehostete `ubuntu-latest`-Runner. Du kannst den `runs-on`-Schlüssel ändern, um deine Aufträge auf einem anderen Betriebssystem auszuführen. Beispielsweise kannst Du die {% data variables.product.prodname_dotcom %}-gehosteten Windows-Läufer verwenden.

{% raw %}
```yaml
runs-on: windows-latest
```
{% endraw %}

Oder Du kannst auf den {% data variables.product.prodname_dotcom %}-gehosteten macOS-Läufern laufen.

{% raw %}
```yaml
runs-on: macos-latest
```
{% endraw %}

Du kannst Aufträge auch in Docker-Containern ausführen oder einen selbst gehosteten Läufer bereitstellen, der auf Deiner eigenen Infrastruktur läuft. Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on).

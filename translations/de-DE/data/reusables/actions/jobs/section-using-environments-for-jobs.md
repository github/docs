---
ms.openlocfilehash: 5b827a2f598a6067ae3c486dbe046effda95bb7f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145089475"
---
Verwende `jobs.<job_id>.environment` zum Definieren der Umgebung, auf die der Auftrag verweist. Alle Umgebungsschutzregeln müssen erfüllt sein, bevor ein Auftrag, der auf die Umgebung verweist, an einen Runner gesendet wird. Weitere Informationen findest du unter [Verwenden von Umgebungen für die Bereitstellung](/actions/deployment/using-environments-for-deployment).

Du kannst die Umgebung nur mit dem `name`-Wert oder als Umgebungsobjekt mit `name` und `url` bereitstellen. Die URL entspricht `environment_url` ist in der Bereitstellungs-API. Weitere Informationen zu den Bereitstellungs-API findest du unter [Bereitstellungen](/rest/reference/repos#deployments).

### Beispiel: Verwenden eines einzelnen Umgebungsnamens
{% raw %}
```yaml
environment: staging_environment
```
{% endraw %}

### Beispiel: Verwenden von Umgebungsnamen und URL

```yaml
environment:
  name: production_environment
  url: https://github.com
```

Die URL kann ein Ausdruck sein und kann einen beliebigen Kontext mit Ausnahme des [`secrets`-Kontexts](/actions/learn-github-actions/contexts#contexts)verwenden. Weitere Informationen zu Ausdrücken findest du unter [Ausdrücke](/actions/learn-github-actions/expressions).

### Beispiel: Verwenden der Ausgabe als URL
{% raw %}
```yaml
environment:
  name: production_environment
  url: ${{ steps.step_id.outputs.url_output }}
```
{% endraw %}

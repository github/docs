---
ms.openlocfilehash: 59a9cc8c52f8e3d28b2b392c28ef6abcb52439a9
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147718205"
---
Verwende `jobs.<job_id>.container`, um einen Container zu erstellen, in dem alle Schritte eines Jobs ausgeführt werden, die noch keinen Container angeben. Wenn ein Schritt sowohl Skript- als auch Container-Aktionen umfasst, werden die Container-Aktionen als nebengeordnete Container in demselben Netzwerk mit denselben Volume-Mounts ausgeführt.

Wenn du keinen `container` festlegst, werden alle Schritte direkt auf dem durch `runs-on` angegebenen Host ausgeführt, es sei denn, ein Schritt bezieht sich auf eine Aktion, die für die Ausführung in einem Container konfiguriert ist.

{% note %}

**Hinweis:** Die Standardshell für `run`-Schritte innerhalb eines Containers lautet `sh` anstelle von `bash`. Dies kann mit [`jobs.<job_id>.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iddefaultsrun) oder [`jobs.<job_id>.steps[*].shell`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsshell) überschrieben werden.

{% endnote %}

### Beispiel: Ausführen eines Auftrags innerhalb eines Containers

```yaml{:copy}
name: CI
on:
  push:
    branches: [ main ]
jobs:
  container-test-job:
    runs-on: ubuntu-latest
    container:
      image: node:14.16
      env:
        NODE_ENV: development
      ports:
        - 80
      volumes:
        - my_docker_volume:/volume_mount
      options: --cpus 1
    steps:
      - name: Check for dockerenv file
        run: (ls /.dockerenv && echo Found dockerenv) || (echo No dockerenv)
```

Wenn du nur ein Containerimage angibst, kannst du das `image`-Schlüsselwort weglassen.

```yaml
jobs:
  container-test-job:
    runs-on: ubuntu-latest
    container: node:14.16
```

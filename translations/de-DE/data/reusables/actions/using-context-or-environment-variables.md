---
ms.openlocfilehash: c8e09d66bc8f0f35ca319e3650c6913174e59067
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145067825"
---
{% data variables.product.prodname_actions %} enthält eine Sammlung von Variablen namens _Kontexte_ und einer ähnlichen Auflistung von Variablen namens _Standardumgebungsvariablen_. Umgebungsvariablen und Kontexte sind für verschiedene Stellen im Workflow vorgesehen:

- **Standardumgebungsvariablen:** Diese Variablen sind nur auf dem Runner vorhanden, der deinen Auftrag ausführt. Weitere Informationen findest du unter „[Standardumgebungsvariablen](/actions/reference/environment-variables#default-environment-variables)“.
- **Kontexte:** Du kannst die meisten Kontexte an einem beliebigen Punkt in deinem Workflow verwenden, einschließlich, wenn _Standardumgebungsvariablen_ nicht verfügbar sind. Du kannst beispielsweise Kontexte mit Ausdrücken verwenden, um die anfängliche Verarbeitung auszuführen, bevor der Auftrag zur Ausführung an einen Runner weitergeleitet wird; dadurch kannst du einen Kontext mit dem bedingten `if`-Schlüsselwort verwenden, um festzustellen, ob ein Schritt ausgeführt werden soll. Sobald der Auftrag ausgeführt wird, kannst du auch Kontextvariablen aus dem Runner abrufen, der den Auftrag ausführt, so wie `runner.os`. Ausführliche Informationen dazu, wo du bestimmte Kontexte innerhalb eines Workflows verwenden kannst, findest du unter „[Kontextverfügbarkeit](/actions/reference/context-and-expression-syntax-for-github-actions#context-availability)“.

Im folgenden Beispiel wird veranschaulicht, wie diese verschiedenen Arten von Umgebungsvariablen in einem Auftrag zusammen verwendet werden können:

{% raw %}
```yaml
name: CI
on: push
jobs:
  prod-check:
    if: ${{ github.ref == 'refs/heads/main' }}
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying to production server on branch $GITHUB_REF"
```
{% endraw %}

In diesem Beispiel überprüft die `if`-Anweisung den Kontext, um den [`github.ref`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context) aktuellen Zweignamen zu ermitteln; wenn der Name `refs/heads/main` lautet, werden die nachfolgenden Schritte ausgeführt. Die `if`-Überprüfung wird von {% data variables.product.prodname_actions %} verarbeitet und der Auftrag wird nur an den Runner gesendet, wenn das Ergebnis `true` ist. Sobald der Auftrag an den Runner gesendet wird, wird der Schritt ausgeführt und bezieht sich auf die [`$GITHUB_REF`](/actions/reference/environment-variables#default-environment-variables)-Umgebungsvariable des Runners.

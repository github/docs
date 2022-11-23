---
title: Ausführen der CodeQL-Codeüberprüfung in einem Container
shortTitle: '{% data variables.product.prodname_code_scanning_capc %} in a container'
intro: 'Du kannst {% data variables.product.prodname_code_scanning %} in einem Container ausführen, indem du sicherstellst, dass alle Prozesse im selben Container ablaufen.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-a-container
  - /code-security/secure-coding/running-codeql-code-scanning-in-a-container
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/running-codeql-code-scanning-in-a-container
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Actions
  - Repositories
  - Containers
  - Java
ms.openlocfilehash: 60dac8a7f71af067c5cfaba5f48d123a3068f704
ms.sourcegitcommit: aa488e9e641139f9056885b1479c8801e9906131
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/11/2022
ms.locfileid: '148162807'
---
{% data reusables.code-scanning.beta %}

## Informationen zu {% data variables.product.prodname_code_scanning %} mit einem containerisierten Build

Wenn du {% data variables.product.prodname_code_scanning %} für eine kompilierte Sprache einrichtest und den Code in einer containerisierten Umgebung erstellst, schlägt die Analyse möglicherweise mit der Fehlermeldung „Während des Builds wurde kein Quellcode angezeigt“ fehl. Dies weist darauf hin, dass {% data variables.product.prodname_codeql %} den Code nicht überwachen konnten, da er kompiliert wurde.

Du musst {% data variables.product.prodname_codeql %} innerhalb des Containers ausführen, in dem du deinem Code erstellst. Dies gilt unabhängig davon, ob du die {% data variables.product.prodname_codeql_cli %}{% ifversion codeql-runner-supported %}, den {% data variables.code-scanning.codeql_runner %}{% endif %} oder {% data variables.product.prodname_actions %} verwendest. Weitere Informationen zur {% data variables.product.prodname_codeql_cli %} {% ifversion codeql-runner-supported %}oder dem {% data variables.code-scanning.codeql_runner %}{% endif %} findest du unter [Installieren der {% data variables.product.prodname_codeql_cli %} in deinem CI-System](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system){% ifversion codeql-runner-supported %} oder [Ausführen von {% data variables.code-scanning.codeql_runner %} in deinem CI-System](/code-security/secure-coding/running-codeql-runner-in-your-ci-system){% endif %}. Wenn du {% data variables.product.prodname_actions %} verwenden, konfiguriere deinen Workflow so, dass alle Aktionen im selben Container ausgeführt werden. Weitere Informationen finden im [Beispielworkflow](#example-workflow).

{% note %}

**Hinweis**: {% data reusables.code-scanning.non-glibc-linux-support %}

{% endnote %}

## Abhängigkeiten

Möglicherweise hast du Schwierigkeiten, {% data variables.product.prodname_code_scanning %} auszuführen, wenn deinem verwendeten Container bestimmte Abhängigkeiten fehlen (z. B. muss Git installiert und zur PATH-Variable hinzugefügt werden). Bei Abhängigkeitsproblemen überprüfe die Liste der Software, die normalerweise in den Runner-Images von {% data variables.product.prodname_dotcom %} enthalten ist. Weitere Informationen findest du in den versionsspezifischen `readme`-Dateien an diesen Speicherorten:

* Linux: https://github.com/actions/runner-images/tree/main/images/linux
* macOS: https://github.com/actions/runner-images/tree/main/images/macos
* Windows: https://github.com/actions/runner-images/tree/main/images/win

## Beispielworkflow

{% ifversion ghes or ghae %} {% note %}

**Hinweis:** In diesem Artikel werden die Features beschrieben, die mit der Version der CodeQL-Aktion und dem zugehörigen CodeQL-CLI-Bundle im ursprünglichen Release dieser Version von {% data variables.product.product_name %} verfügbar sind. Wenn dein Unternehmen eine neuere Version der CodeQL-Aktion verwendet, findest du im [{% data variables.product.prodname_ghe_cloud %}-Artikel](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/running-codeql-code-scanning-in-a-container) Informationen zu den neuesten Funktionen.{% ifversion not ghae %} Informationen zur Verwendung der neuesten Version findest du unter [Konfigurieren der Codeüberprüfung für deine Appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access).{% endif %}

{% endnote %} {% endif %}

Dieser Beispielworkflow verwendet {% data variables.product.prodname_actions %}, um {% data variables.product.prodname_codeql %}-Analysen in einer containerisierten Umgebung durchzuführen. Der Wert von `container.image` gibt den zu verwendenden Container an. In diesem Beispiel wird das Image `codeql-container` mit einem Tag von `f0f91db` genannt. Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontainer).

``` yaml
name: "{% data variables.product.prodname_codeql %}"

on: 
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    - cron: '15 5 * * 3'

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest
    permissions:
      security-events: write
      actions: read

    strategy:
      fail-fast: false
      matrix:
        language: [java]

    # Specify the container in which actions will run
    container:
      image: codeql-container:f0f91db

    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: {% data reusables.actions.action-codeql-action-init %}
        with:
          languages: {% raw %}${{ matrix.language }}{% endraw %}
      - name: Build
        run: |
          ./configure
          make
      - name: Perform {% data variables.product.prodname_codeql %} Analysis
        uses: {% data reusables.actions.action-codeql-action-analyze %}
```

---
title: Выполнение проверки кода CodeQL в контейнере
shortTitle: '{% data variables.product.prodname_code_scanning_capc %} in a container'
intro: 'Вы можете запустить {% data variables.product.prodname_code_scanning %} в контейнере, обеспечив выполнение всех процессов в одном контейнере.'
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
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/11/2022
ms.locfileid: '148162810'
---
{% data reusables.code-scanning.beta %}

## Сведения о {% data variables.product.prodname_code_scanning %} с контейнерной сборкой

Если вы настраиваете {% data variables.product.prodname_code_scanning %} для скомпилированного языка и создаете код в контейнерной среде, анализ может завершиться ошибкой с сообщением "Исходный код во время сборки не обнаружен". Это означает, что {% data variables.product.prodname_codeql %} не удалось отследить код в процессе его компиляции.

Необходимо запустить {% data variables.product.prodname_codeql %} в контейнере, где происходит сборка кода. Это применимо, если вы используете {% data variables.product.prodname_codeql_cli %}{% ifversion codeql-runner-supported %}, {% data variables.code-scanning.codeql_runner %},{% endif %} или {% data variables.product.prodname_actions %}. Дополнительные сведения о {% data variables.product.prodname_codeql_cli %} {% ifversion codeql-runner-supported %} или {% data variables.code-scanning.codeql_runner %}{% endif %} см. [в разделе Установка {% data variables.product.prodname_codeql_cli %} в системе CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system){% ifversion codeql-runner-supported %} или [Выполнение {% data variables.code-scanning.codeql_runner %} в системе CI](/code-security/secure-coding/running-codeql-runner-in-your-ci-system){% endif %}. Если вы используете {% data variables.product.prodname_actions %}, настройте рабочий процесс таким образом, чтобы все действия выполнялись в одном контейнере. Дополнительные сведения см. в разделе [Пример рабочего процесса](#example-workflow).

{% note %}

**Примечание.** {% data reusables.code-scanning.non-glibc-linux-support %}

{% endnote %}

## Зависимости

Проблемы с проверкой {% data variables.product.prodname_code_scanning %} могут возникнуть, если в контейнере, который вы используете, отсутствуют определенные зависимости (например, необходимо установить Git и добавить его в переменную PATH). При возникновении проблем с зависимостями просмотрите список программного обеспечения, обычно включенного в образы средства выполнения тестов {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в файлах `readme` для соответствующих версий в следующих местах:

* Linux: https://github.com/actions/runner-images/tree/main/images/linux
* macOS: https://github.com/actions/runner-images/tree/main/images/macos
* Windows: https://github.com/actions/runner-images/tree/main/images/win

## Пример рабочего процесса

{% ifversion ghes or ghae %} {% note %}

**Примечание.** В этой статье описываются функции, доступные в версии действия CodeQL и в связанном пакете интерфейса командной строки CodeQL, который входит в первоначальный выпуск этой версии {% data variables.product.product_name %}. Если в вашей организации используется более поздняя версия действия CodeQL, сведения об актуальных функциях см. в статье [{% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/running-codeql-code-scanning-in-a-container).{% ifversion not ghae %} Сведения об использовании последней версии см. в разделе [Настройка проверки кода для устройства](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access).{% endif %}

{% endnote %} {% endif %}

В этом примере рабочего процесса {% data variables.product.prodname_actions %} используется для анализа {% data variables.product.prodname_codeql %} в контейнерной среде. Значение `container.image` идентифицирует используемый контейнер. В этом примере изображение называется `codeql-container` и снабжено тегом `f0f91db`. Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontainer).

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

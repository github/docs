---
title: Устранение неполадок с обязательными проверками состояния
intro: Вы можете проверить наличие распространенных ошибок и устранить проблемы с помощью обязательных проверок состояния.
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/troubleshooting-required-status-checks
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks
shortTitle: Required status checks
ms.openlocfilehash: 6e99f8ebf0275d065c640bb7b4c7b60462f51ec0
ms.sourcegitcommit: 84a9475bf99a37021746349a51ce814516928516
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135809'
---
Если у вас есть проверка и состояние с одинаковыми именами и вы выбираете это имя в качестве обязательной проверки состояния, обязательными будут и проверка, и состояние. Дополнительные сведения см. в разделе [Проверки](/rest/reference/checks).

После включения обязательных проверок состояния личную ветвь может потребоваться синхронизировать с базовой перед слиянием. Это гарантирует, что ваша ветвь была протестирована с использованием последнего кода из базовой ветви. Если ваша ветвь устарела, необходимо выполнить слияние базовой ветви с ней. Дополнительные сведения см. в разделе [Сведения о защищенных ветвях](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging).

{% note %}

**Примечание**. Синхронизировать личную ветвь с базовой можно также путем перемещения изменений из одной ветви в другую в GIT. Дополнительные сведения см. в разделе [Сведения о перемещении изменения из одной ветви в другую в GIT](/github/getting-started-with-github/about-git-rebase).

{% endnote %}

Вы не сможете отправить локальные изменения в защищенную ветвь, пока не будут пройдены все необходимые проверки состояния. Вместо этого вы получите сообщение об ошибке, аналогичное указанному ниже.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```
{% note %}

**Примечание**. Запросы на вытягивание, которые являются актуальными и прошли необходимые проверки состояния, допускают слияние и отправку в защищенную ветвь. Это можно сделать без проверок состояния для самой фиксации слияния.

{% endnote %}

## Конфликты между головной фиксацией и тестовой фиксацией слияния

Иногда результаты проверок состояния для тестовой фиксации слияния и головной фиксации противоречат друг другу. Если тестовая фиксация слияния имеет состояние, то она должна проходить проверки. В противном случае состояние головной фиксации должно проходить проверки, прежде чем можно будет выполнить слияние ветви. Дополнительные сведения о тестовых фиксациях слияния см. в разделе [Вытягивание](/rest/reference/pulls#get-a-pull-request).

![Ветвь с конфликтующими фиксациями слияния](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)

## Обработка пропущенных, но обязательных проверок

{% note %}

**Примечание.** Если рабочий процесс пропускается из-за [фильтрации путей](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), [фильтрации ветви](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) или [сообщения фиксации](/actions/managing-workflow-runs/skipping-workflow-runs), проверки, связанные с этим рабочим процессом, останутся в состоянии ожидания. Запрос на вытягивание, требующий успешной проверки, будет заблокирован при слиянии.

Если задание в рабочем процессе пропущено из-за условий, оно сообщит о своем состоянии: "Успешно". Дополнительные сведения см. в разделах [Пропуск выполнения рабочего процесса](/actions/managing-workflow-runs/skipping-workflow-runs) и [Использование условий для управления выполнением задания](/actions/using-jobs/using-conditions-to-control-job-execution).

{% endnote %}

### Пример

В следующем примере показан рабочий процесс, требующий состояния завершения "Успешно" для задания `build`, но рабочий процесс будет пропущен, если запрос на вытягивание не изменяет файлы в каталоге `scripts`.

```yaml
name: ci
on:
  pull_request:
    paths:
      - 'scripts/**'
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [12.x, 14.x, 16.x]
    steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
      uses: {% data reusables.actions.action-setup-node %}
      with:
        node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
```

Из-за [фильтрации путей](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore) запрос на вытягивание, который изменяет только файл в корне репозитория, не активирует этот рабочий процесс и блокируется от слияния. В запросе на вытягивание отобразится следующее состояние:

![Обязательная проверка пропущена, но отображается как ожидающая](/assets/images/help/repository/PR-required-check-skipped.png)

Эту проблему можно исправить, создав универсальный рабочий процесс с тем же именем, который будет возвращать значение true в любом случае, как в следующем случае:

```yaml
name: ci
on:
  pull_request:
    paths-ignore:
      - 'scripts/**'
      - 'middleware/**'
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - run: 'echo "No build required"'
```
Теперь проверки будут проходить успешно при каждой отправке запроса на вытягивание, который не изменяет файлы, перечисленные в разделе `paths` в первом рабочем процессе.

![Проверка пропущена, но пройдена вследствие использования универсального рабочего процесса](/assets/images/help/repository/PR-required-check-passed-using-generic.png)

{% note %}

**Примечания.**
* Убедитесь в том, что ключ `name` и обязательное имя задания в обоих файлах рабочего процесса одинаковы. Дополнительные сведения см. в разделе [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions).
* В приведенном выше примере используется {% data variables.product.prodname_actions %}, но это обходное решение также применимо к другим поставщикам CI/CD, которые интегрируются с {% data variables.product.company_short %}.

{% endnote %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## Обязательные проверки состояния из непредвиденных источников

Защищенная ветвь также может требовать проверку состояния из определенного {% data variables.product.prodname_github_app %}. Если отображается сообщение наподобие приведенного ниже, убедитесь в том, что проверка, указанная в поле слияния, была задана соответствующим приложением.

```
Required status check "build" was not set by the expected {% data variables.product.prodname_github_app %}.
```
{% endif %}

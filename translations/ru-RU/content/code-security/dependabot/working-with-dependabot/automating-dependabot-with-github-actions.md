---
title: Автоматизация Dependabot с помощью GitHub Actions
intro: 'Примеры использования {% data variables.product.prodname_actions %} для автоматизации распространенных задач, связанных с {% data variables.product.prodname_dependabot %}.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_actions %} to respond to {% data variables.product.prodname_dependabot %}-created pull requests.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Use Dependabot with Actions
redirect_from:
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/automating-dependabot-with-github-actions
ms.openlocfilehash: 3280b42309b388c5faf2071d6e3a39d9a0e58474
ms.sourcegitcommit: 67aba5f277f3a8ef2ab1ccb14465ae486eabaa2b
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165084'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Сведения о {% data variables.product.prodname_dependabot %} и {% data variables.product.prodname_actions %}

{% data variables.product.prodname_dependabot %} создает запросы на вытягивание для поддержания актуальности зависимостей, и вы можете использовать {% data variables.product.prodname_actions %} для выполнения автоматических задач при создании этих запросов на вытягивание. Например, получение дополнительных артефактов, добавление меток, выполнение тестов или изменение запроса на вытягивание.

## Реагирование на события

{% data variables.product.prodname_dependabot %} может активировать рабочие процессы {% data variables.product.prodname_actions %} в запросах на вытягивание и комментариях; однако некоторые события обрабатываются иначе.

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} Для рабочих процессов, инициированных {% data variables.product.prodname_dependabot %} (`github.actor == 'dependabot[bot]'`) с помощью `pull_request`событий , `pull_request_review`, `pull_request_review_comment`, `push``create`, , `deployment`и`deployment_status`, применяются следующие ограничения: {% endif %}

- {% ifversion ghes = 3.3 %}`GITHUB_TOKEN` имеет разрешения только на чтение, если только администратор не удалил ограничения. {% else %}`GITHUB_TOKEN` по умолчанию имеет разрешения только на чтение. {% endif %}
- {% ifversion ghes = 3.3 %} Секреты недоступны, если администратор не удалил ограничения.{% else %} Секреты заполняются из секретов {% data variables.product.prodname_dependabot %}. Секреты {% data variables.product.prodname_actions %} недоступны.{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} Для рабочих процессов, инициированных {% data variables.product.prodname_dependabot %} (`github.actor == 'dependabot[bot]'`) с помощью `pull_request_target` события, если базовая ссылка запроса на вытягивание была создана {% data variables.product.prodname_dependabot %} (`github.actor == 'dependabot[bot]'`), `GITHUB_TOKEN` объект будет доступен только для чтения, а секреты недоступны.
{% endif %}

{% ifversion actions-stable-actor-ids %}Эти ограничения применяются, даже если рабочий процесс повторно запускается другим субъектом.{% endif %}

Дополнительные сведения см. в статье [Обеспечение безопасности GitHub Actions и рабочих процессов: предотвращение запросов pwn](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/).

{% ifversion fpt or ghec or ghes > 3.3 %}

### Изменение разрешений `GITHUB_TOKEN`

По умолчанию рабочие процессы {% data variables.product.prodname_actions %}, активированные{% data variables.product.prodname_dependabot %}, получают `GITHUB_TOKEN` с разрешениями только на чтение. В рабочем процессе можно использовать ключ `permissions` для увеличения доступа к маркеру:

{% raw %}

```yaml
name: CI
on: pull_request

# Set the access for individual scopes, or use permissions: write-all
permissions:
  pull-requests: write
  issues: write
  repository-projects: write
  ...

jobs:
  ...
```

{% endraw %}

Дополнительные сведения см. в статье [Изменение разрешений для GITHUB_TOKEN](/actions/security-guides/automatic-token-authentication#modifying-the-permissions-for-the-github_token).

### Доступ к секретам

Когда событие {% data variables.product.prodname_dependabot %} активирует рабочий процесс, единственными секретами, доступными для рабочего процесса, являются секреты {% data variables.product.prodname_dependabot %}. Секреты {% data variables.product.prodname_actions %} недоступны. Следовательно, необходимо хранить все секреты, используемые рабочим процессом, инициированным событиями {% data variables.product.prodname_dependabot %}, в виде секретов {% data variables.product.prodname_dependabot %}. Дополнительные сведения см. в разделе [Управление зашифрованными секретами для Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot).

Секреты {% data variables.product.prodname_dependabot %} добавляются в контекст `secrets`, и ссылки на них имеют точно такой же синтаксис, что и секреты для {% data variables.product.prodname_actions %}. Дополнительные сведения см. в статье [Зашифрованные секреты](/actions/security-guides/encrypted-secrets#using-encrypted-secrets-in-a-workflow).

Если у вас есть рабочий процесс, который будет активироваться {% data variables.product.prodname_dependabot %}, а также другими субъектами, проще всего сохранить маркер с необходимыми разрешениями в действии и в секрете {% data variables.product.prodname_dependabot %} с идентичными именами. Затем рабочий процесс может включать один вызов этих секретов. Если у секрета для {% data variables.product.prodname_dependabot %} другое имя, используйте условия, чтобы указать правильные секреты для различных субъектов. Примеры использования условий см. в разделе [Распространенные автоматизации](#common-dependabot-automations) ниже.

Чтобы получить доступ к частному реестру контейнеров в AWS с именем пользователя и паролем, рабочий процесс должен содержать секрет для `username` и `password`. В приведенном ниже примере, когда {% data variables.product.prodname_dependabot %} активирует рабочий процесс, используются секреты {% data variables.product.prodname_dependabot %} с именами `READONLY_AWS_ACCESS_KEY_ID` и `READONLY_AWS_ACCESS_KEY`. Если другой субъект активирует рабочий процесс, используются секреты действий с этими именами.

```yaml
name: CI
on:
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}

      - name: Login to private container registry for dependencies
        uses: docker/login-action@v1
        with:
          registry: https://1234567890.dkr.ecr.us-east-1.amazonaws.com
          username: {% raw %}${{ secrets.READONLY_AWS_ACCESS_KEY_ID }}{% endraw %}
          password: {% raw %}${{ secrets.READONLY_AWS_ACCESS_KEY }}{% endraw %}

      - name: Build the Docker image
        run: docker build . --file Dockerfile --tag my-image-name:$(date +%s)
```

{% endif %}

{% ifversion ghes = 3.3 %}

{% note %}

**Примечание:** Администратор сайта может переопределить эти ограничения для {% data variables.location.product_location %}. Дополнительные сведения см. в разделе [Устранение неполадок {% data variables.product.prodname_actions %} для вашего предприятия](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#troubleshooting-failures-when-dependabot-triggers-existing-workflows).

Если ограничения удалены, когда {% data variables.product.prodname_dependabot %} запускает рабочий процесс, у него будет доступ к секретам {% data variables.product.prodname_actions %}, и он может использовать термин `permissions` для увеличения области для `GITHUB_TOKEN` с доступа только на чтение. Вы можете игнорировать конкретные шаги в разделах "Обработка событий `pull_request`" и "Обработка событий `push`", так как они больше не применяются.

{% endnote %}

### Обработка событий `pull_request`

Если вашему рабочему процессу требуется доступ к секретам или `GITHUB_TOKEN` с разрешениями на запись, у вас есть два варианта: использовать `pull_request_target` или два отдельных рабочих процессов. В этом разделе мы подробно рассмотрим использование `pull_request_target`, а использование двух рабочих процессов мы рассмотрим ниже в разделе [Обработка событий `push`](#handling-push-events).

Ниже приведен простой пример рабочего процесса `pull_request`, который теперь может завершаться сбоем:

```yaml
### This workflow now has no secrets and a read-only token
name: Dependabot Workflow
on:
  pull_request

jobs:
  dependabot:
    runs-on: ubuntu-latest
    # Always check the actor is Dependabot to prevent your workflow from failing on non-Dependabot PRs
    if: {% raw %}${{ github.actor == 'dependabot[bot]' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
```

Вы можете заменить `pull_request` на `pull_request_target`, который используется для запросов на вытягивание из вилок, и явным образом извлечь запрос на вытягивание `HEAD`.

{% warning %}

**Предупреждение.** Использование `pull_request_target` в качестве замены `pull_request` приводит к рискам небезопасного поведения. Рекомендуется использовать метод с двумя рабочими процессами, как описано ниже в разделе [Обработка событий `push`](#handling-push-events).

{% endwarning %}

```yaml
### This workflow has access to secrets and a read-write token
name: Dependabot Workflow
on:
  pull_request_target

permissions:
  # Downscope as necessary, since you now have a read-write token

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.actor == 'dependabot[bot]' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
        with:
          # Check out the pull request HEAD
          ref: {% raw %}${{ github.event.pull_request.head.sha }}{% endraw %}
          github-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

Настоятельно рекомендуется также уменьшить область разрешений, предоставленных для `GITHUB_TOKEN`, чтобы избежать утечки маркера с более высоким уровнем привилегией, чем необходимо. Дополнительные сведения см. в разделе «[Разрешения для`GITHUB_TOKEN`](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)».

### Обработка событий `push`

Так как для событий `push` нет эквивалента `pull_request_target`, необходимо использовать два рабочих процесса: один недоверенный рабочий процесс, заканчивающийся отправкой артефактов, который активирует второй, доверенный рабочий процесс, скачивающий артефакты и продолжающий обработку.

Первый рабочий процесс выполняет любые недоверенные действия:

{% raw %}

```yaml
### This workflow doesn't have access to secrets and has a read-only token
name: Dependabot Untrusted Workflow
on:
  push

jobs:
  check-dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - uses: ...
```

{% endraw %}

Второй рабочий процесс выполняет доверенные действия после успешного завершения первого рабочего процесса:

{% raw %}

```yaml
### This workflow has access to secrets and a read-write token
name: Dependabot Trusted Workflow
on:
  workflow_run:
    workflows: ["Dependabot Untrusted Workflow"]
    types:
      - completed

permissions:
  # Downscope as necessary, since you now have a read-write token

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.conclusion == 'success' }}
    steps:
      - uses: ...
```

{% endraw %}

{% endif %}

### Повторный запуск рабочего процесса вручную

{% ifversion actions-stable-actor-ids %}

При повторном запуске рабочего процесса Dependabot вручную он будет выполняться с теми же привилегиями, что и раньше, даже если пользователь, инициировавший повторный запуск, обладает другими привилегиями. Дополнительные сведения см. в статье [Повторный запуск рабочих процессов и заданий](/actions/managing-workflow-runs/re-running-workflows-and-jobs).

{% else %}

Вы также можете вручную повторно запустить рабочий процесс Dependabot, который завершился сбоем, и он будет выполняться с маркером чтения и записи и доступом к секретам. Перед повторным запуском рабочего процесса, завершившегося сбоем, всегда следует проверять обновляемую зависимость, чтобы убедиться, что изменение не приводит к вредоносному или непредвиденному поведению.

{% endif %}

## Распространенные автоматизации Dependabot

Ниже приведены несколько распространенных сценариев, которые можно автоматизировать с помощью {% data variables.product.prodname_actions %}.

{% ifversion ghes = 3.3 %}

{% note %}

**Примечание:** Если администратор сайта переопределил ограничения для {% data variables.product.prodname_dependabot %} в {% data variables.location.product_location %}, вы можете использовать `pull_request` вместо `pull_request_target` в следующих рабочих процессах.

{% endnote %}

{% endif %}

### Получение метаданных о запросе на вытягивание

Для большого объема автоматизации требуется знать о содержимом запроса на вытягивание: имя зависимости, если это зависимость в производственной среде, и является ли это обновлением основной или дополнительной версии или исправлением.

Действие `dependabot/fetch-metadata` предоставляет все эти сведения:

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot fetch metadata
on: pull_request_target

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      # The following properties are now available:
      #  - steps.dependabot-metadata.outputs.dependency-names
      #  - steps.dependabot-metadata.outputs.dependency-type
      #  - steps.dependabot-metadata.outputs.update-type      
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot fetch metadata
on: pull_request

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      # The following properties are now available:
      #  - steps.metadata.outputs.dependency-names
      #  - steps.metadata.outputs.dependency-type
      #  - steps.metadata.outputs.update-type      
```

{% endraw %}

{% endif %}

Дополнительные сведения см. в репозитории [`dependabot/fetch-metadata`](https://github.com/dependabot/fetch-metadata).

### Пометка запроса на вытягивание

Если у вас есть другие рабочие процессы автоматизации или рассмотрения на основе меток {% data variables.product.prodname_dotcom %}, можно настроить действие для назначения меток на основе предоставленных метаданных.

Например, если вы хотите пометить все обновления зависимости в рабочей среде:

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot auto-label
on: pull_request_target

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Add a label for all production dependencies
        if: ${{ steps.dependabot-metadata.outputs.dependency-type == 'direct:production' }}
        run: gh pr edit "$PR_URL" --add-label "production"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot auto-label
on: pull_request

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Add a label for all production dependencies
        if: ${{ steps.metadata.outputs.dependency-type == 'direct:production' }}
        run: gh pr edit "$PR_URL" --add-label "production"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
```

{% endraw %}

{% endif %}

### Одобрение запроса на вытягивание

Если вы хотите автоматически утверждать запросы на вытягивание Dependabot, можно использовать {% data variables.product.prodname_cli %} в рабочем процессе:

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot auto-approve
on: pull_request_target

permissions:
  pull-requests: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Approve a PR
        run: gh pr review --approve "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot auto-approve
on: pull_request

permissions:
  pull-requests: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Approve a PR
        run: gh pr review --approve "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% endif %}

### Включение автоматического слияния для запроса на вытягивание

Если вы хотите разрешить специалистам по поддержке помечать определенные запросы на вытягивание для автоматического слияния, можно использовать функцию автоматического слияния {% data variables.product.prodname_dotcom %}. Это позволяет объединять запрос на вытягивание при успешном выполнении всех тестов и утверждений, требуемых правилами защиты ветвей. Дополнительные сведения см. в [разделах Автоматическое слияние запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request) и [Управление правилом защиты ветви](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule).

{% note %}

**Примечание:** Если для тестирования запросов на вытягивание используются проверки состояния, необходимо включить **параметр Требовать прохождение проверок состояния перед слиянием** целевой ветви для запросов на вытягивание {% data variables.product.prodname_dependabot %}. Это правило защиты ветви гарантирует, что запросы на вытягивание не будут объединены, если не будут пройдены все необходимые проверки состояния. Дополнительные сведения см. в разделе [Управление правилом защиты ветви](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule).

{% endnote %}

Вместо этого можно использовать {% data variables.product.prodname_actions %} и {% data variables.product.prodname_cli %}. Ниже приведен пример автоматического слияния всех исправлений с `my-dependency`:

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot auto-merge
on: pull_request_target

permissions:
  contents: write
  pull-requests: write
  
jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Enable auto-merge for Dependabot PRs
        if: ${{contains(steps.dependabot-metadata.outputs.dependency-names, 'my-dependency') && steps.dependabot-metadata.outputs.update-type == 'version-update:semver-patch'}}
        run: gh pr merge --auto --merge "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot auto-merge
on: pull_request

permissions:
  contents: write
  pull-requests: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Enable auto-merge for Dependabot PRs
        if: ${{contains(steps.metadata.outputs.dependency-names, 'my-dependency') && steps.metadata.outputs.update-type == 'version-update:semver-patch'}}
        run: gh pr merge --auto --merge "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% endif %}

## Устранение неполадок неудачных запусков рабочих процессов

Если выполнение рабочего процесса завершается сбоем, проверьте следующее:

{% ifversion ghes = 3.3 %}

- Вы выполняете рабочий процесс только в том случае, если он активируется правильным субъектом.
- Вы извлекаете корректную `ref` для `pull_request`.
- Вы не пытаетесь получить доступ к секретам из события `pull_request`, `pull_request_review`, `pull_request_review_comment` или `push`, активированного Dependabot.
- Вы не пытаетесь выполнить действия `write` из события `pull_request`, `pull_request_review`, `pull_request_review_comment` или `push`, активированного Dependabot.

{% else %}

- Вы выполняете рабочий процесс только в том случае, если он активируется правильным субъектом.
- Вы извлекаете корректную `ref` для `pull_request`.
- Секреты доступны в секретах {% data variables.product.prodname_dependabot %}, а не {% data variables.product.prodname_actions %}.
- У вас есть `GITHUB_TOKEN` с надлежащими разрешениями.

{% endif %}

Сведения о записи и отладке {% data variables.product.prodname_actions %} см. в разделе [Изучение GitHub Actions](/actions/learn-github-actions).

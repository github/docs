---
title: Повторное использование рабочих процессов
shortTitle: Reuse workflows
intro: 'Узнайте, как избежать дублирования при создании рабочего процесса путем повторного использования существующих рабочих процессов.'
redirect_from:
  - /actions/learn-github-actions/reusing-workflows
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.4'
  ghae: '>= 3.4'
type: how_to
topics:
  - Workflows
ms.openlocfilehash: 2053b2bfd653a1f6633ab5d568e5b2fdb75d7335
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191929'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.reusable-workflows-enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Общие сведения

Вместо того, чтобы копировать и вставлять из одного рабочего процесса в другой, вы можете сделать рабочие процессы многоразовыми. После этого вы и каждый, у кого есть доступ к повторно используемому рабочему процессу, можете вызвать повторно используемый рабочий процесс из другого рабочего процесса.

Повторное использование рабочих процессов позволяет избежать дублирования. Это упрощает обслуживание рабочих процессов и позволяет быстрее создавать новые рабочие процессы, основываясь на работе других пользователей так же, как и в случае с действиями. Повторное использование рабочих процессов также способствует внедрению передового опыта, помогая вам использовать хорошо спроектированные, уже испытанные и доказавшие свою эффективность рабочие процессы. Ваша организация может создать библиотеку повторно используемых рабочих процессов, которые можно будет обслуживать централизованно.

На схеме ниже показан выполняемый рабочий процесс, использующий повторно используемый рабочий процесс.

* После успешного завершения каждого из трех заданий сборки слева от схемы выполняется зависимое задание с именем Deploy.
* Задание "Развертывание" вызывает повторно используемый рабочий процесс, который содержит три задания: "Промежуточное", "Проверка" и "Рабочая среда".
* Задание развертывания "Производство" выполняется только после успешного завершения задания "Промежуточное хранение".
* Когда задание предназначено для среды, при выполнении рабочего процесса отображается индикатор выполнения, показывающий количество шагов в задании. На приведенной ниже схеме задание "Рабочая среда" содержит 8 шагов, при этом шаг 6 в настоящее время обрабатывается.
* Использование повторно используемого рабочего процесса для выполнения заданий развертывания позволяет выполнять эти задания для каждой сборки без дублирования кода в рабочих процессах.

![Схема повторно используемого рабочего процесса для развертывания](/assets/images/help/images/reusable-workflows-ci-cd.png)

Рабочий процесс, использующий другой рабочий процесс, называется "вызывающим" рабочим процессом. Повторно используемый рабочий процесс — это "вызываемый" рабочий процесс. Один вызывающий рабочий процесс может использовать несколько вызываемых рабочих процессов. Каждый вызываемый рабочий процесс упоминается в одной строке. В результате файл вызывающего рабочего процесса может содержать всего несколько строк YAML, но при запуске может выполнять большое количество задач. При повторном использовании рабочего процесса используется весь вызываемый рабочий процесс, как если бы он был частью вызывающего рабочего процесса.

Если вы повторно используете рабочий процесс из другого репозитория, любые действия в вызываемом рабочем процессе выполняются так, как если бы они были частью вызывающего рабочего процесса. Например, если вызываемый рабочий процесс использует `actions/checkout`, действие извлекает содержимое репозитория, в котором размещается вызывающий, а не вызываемый рабочий процесс.

Если рабочий процесс, подлежащий повторному использованию, активируется вызывающим рабочим процессом, контекст `github` всегда связан с вызывающим рабочим процессом. Вызываемый рабочий процесс автоматически получает доступ к `github.token` и `secrets.GITHUB_TOKEN`. Дополнительные сведения о контексте `github` см. в статье [Синтаксис контекста выражений для GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions#github-context).

Вы можете просматривать повторно используемые рабочие процессы, на которые есть ссылки в ваших рабочих процессах {% data variables.product.prodname_actions %}, как зависимости в графе зависимостей репозитория, содержащего рабочие процессы. Дополнительные сведения см. в разделе [Сведения о графе зависимостей](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph).

### Повторно используемые рабочие процессы и начальные рабочие процессы

Начальные рабочие процессы позволяют всем сотрудникам организации, имеющим право создавать рабочие процессы, делать это быстрее и проще. При создании рабочего процесса можно выбрать начальный рабочий процесс, и вам не придется выполнять часть работы или всю работу по написанию рабочего процесса. В рамках начального рабочего процесса вы также можете ссылаться на повторно используемые рабочие процессы, чтобы упростить использование пользователями повторно управляемого кода рабочего процесса. Если при ссылке на повторно используемый рабочий процесс используется SHA фиксации, вы можете убедиться, что каждый, кто повторно использует этот рабочий процесс, всегда будет использовать один и тот же код YAML. Однако если вы ссылаетесь на повторно используемый рабочий процесс с помощью тега или ветви, убедитесь, что вы можете доверять этой версии рабочего процесса. Дополнительные сведения см. в разделе [Защита безопасности для {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#reusing-third-party-workflows).

Дополнительные сведения см. в разделе [Создание рабочих процессов начального уровня для вашей организации](/actions/learn-github-actions/creating-starter-workflows-for-your-organization).

## Доступ к повторно используемым рабочим процессам

Повторно используемый рабочий процесс может использоваться другим рабочим процессом, если верно {% ifversion ghes or ghec or ghae %}любое{% else %}either{% endif %} из следующих утверждений:

* Оба рабочих процесса находятся в одном репозитории.
* Вызываемый рабочий процесс хранится в общедоступном репозитории{% ifversion actions-workflow-policy %}, и ваше {% ifversion ghec %}предприятие{% else %}организация{% endif %} позволяет вам использовать общедоступные повторно используемые рабочие процессы{% endif %}.{% ifversion ghes or ghec or ghae %}
* Вызываемый рабочий процесс хранится во внутреннем репозитории, а параметры этого репозитория позволяют получить к нему доступ. Дополнительные сведения см. в статье {% ifversion internal-actions %}[Совместное использование действий и рабочих процессов с вашим предприятием](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise){% else %}[Управление параметрами {% data variables.product.prodname_actions %} для репозитория](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository){% endif %}."{% endif %}

## Использование средств выполнения тестов

{% ifversion fpt or ghes or ghec %}

### Использование средств выполнения тестов, размещенных в GitHub

Назначение размещенных в {% data variables.product.prodname_dotcom %} средств выполнения тестов всегда оценивается только с использованием контекста вызывающего. Выставление счетов за средства выполнения тестов, размещенные в {% data variables.product.prodname_dotcom %}, всегда связано с вызывающим. Вызывающий рабочий процесс не может использовать средства выполнения тестов, размещенные в {% data variables.product.prodname_dotcom %}, из вызываемого репозитория. Дополнительные сведения см. в статье [Сведения о средствах выполнения тестов, размещенных в {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners).

### Добавление локально размещенных средств выполнения тестов

{% endif %}

Вызываемые рабочие процессы, принадлежащие тому же пользователю, организации{% ifversion ghes or ghec or ghae %} или предприятию{% endif %}, что и рабочий процесс вызывающего, могут получать доступ к локально размещенным средствам выполнения тестов из контекста вызывающего. Это означает, что вызываемый рабочий процесс может получить доступ к локально размещенным средствам выполнения тестов, которые находятся:
* в репозитории вызывающего;
* в организации репозитория вызывающего{% ifversion ghes or ghec or ghae %} или предприятия{% endif %}, если средство выполнения тестов было доступно репозиторию вызывающего.

## Ограничения

{% ifversion nested-reusable-workflow %}
* Вы можете подключить до четырех уровней рабочих процессов. Дополнительные сведения см. в разделе [Вложенные повторно используемые рабочие процессы](#nesting-reusable-workflows).
{% else %}
* Повторно используемые рабочие процессы не могут вызывать другие повторно используемые рабочие процессы.
{% endif %}
* Повторно используемые рабочие процессы, хранящиеся в частном репозитории, могут использоваться только рабочими процессами в том же репозитории.
* Любые переменные среды, заданные в контексте `env`, определенном на уровне рабочего процесса в вызывающем рабочем процессе, не распространяются на вызываемый рабочий процесс. Дополнительные сведения о контексте `env` см. в статье [Синтаксис контекста выражений для GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions#env-context).{% ifversion actions-reusable-workflow-matrix %}{% else %}
* Свойство `strategy` не поддерживается ни в одном задании, которое вызывает повторно используемый рабочий процесс.{% endif %}

## Создание повторно используемых рабочих процессов

Повторно используемые рабочие процессы — это файлы в формате YAML, очень похожие на любой другой файл рабочего процесса. Как и в случае с другими файлами рабочих процессов, повторно используемые рабочие процессы можно найти в каталоге `.github/workflows` репозитория. Подкаталоги каталога `workflows` не поддерживаются.

Чтобы рабочий процесс можно было использовать повторно, значения для `on` должны включать `workflow_call`:

```yaml
on:
  workflow_call:
```

### Использование входных данных и секретов в повторно используемом рабочем процессе

Вы можете определить входные данные и секреты, которые можно передать из вызывающего рабочего процесса, а затем использовать в вызываемом рабочем процессе. Существует три этапа использования входных данных или секрета в повторно используемом рабочем процессе.

1. В повторно используемом рабочем процессе используйте ключевые слова `inputs` и `secrets` для определения входных данных или секретов, которые будут передаваться из вызывающего рабочего процесса.
   {% raw %}
   ```yaml
   on:
     workflow_call:
       inputs:
         config-path:
           required: true
           type: string
       secrets:
         envPAT:
           required: true
   ```
   {% endraw %} Дополнительные сведения о синтаксисе для определения входных данных и секретов см. в разделах [`on.workflow_call.inputs`](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callinputs) и [`on.workflow_call.secrets`](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callsecrets).
   {% ifversion actions-inherit-secrets-reusable-workflows %}
1. В повторно используемом рабочем процессе укажите входные данные или секрет, определенный в ключе `on` на предыдущем шаге.

   {% note %}

   **Примечание**. Если секреты наследуются с помощью `secrets: inherit` в вызывающем рабочем процессе, вы можете ссылаться на них, даже если они явно не определены в ключе `on`. Дополнительные сведения см. в статье "[Синтаксис рабочего процесса для GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit)".

   {% endnote %} {%- else %}
1. В повторно используемом рабочем процессе укажите входные данные или секрет, определенный в ключе `on` на предыдущем шаге.
   {%- endif %}

   {% raw %}
   ```yaml
   jobs:
     reusable_workflow_job:
       runs-on: ubuntu-latest
       environment: production
       steps:
       - uses: actions/labeler@v4
         with:
           repo-token: ${{ secrets.envPAT }}
           configuration-path: ${{ inputs.config-path }}
   ```
   {% endraw %} В приведенном выше примере `envPAT` — это окружения, добавленный в окружение `production`. Таким образом, в задании на это окружение указывает ссылка.

   {% note %}

   **Примечание**. Секреты окружения — это зашифрованные строки, хранящиеся в окружении, определенном для репозитория. Секреты среды доступны только для заданий рабочего процесса, которые ссылаются на соответствующее окружение. Дополнительные сведения см. в разделе [Использование сред для развертывания](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets).

   {% endnote %}

1. Передайте входные или секретные данные из вызывающего рабочего процесса.

{% indented_data_reference reusables.actions.pass-inputs-to-reusable-workflows spaces=3 %}

### Пример повторно используемого рабочего процесса

Этот повторно используемый файл рабочего процесса с именем `workflow-B.yml` (мы обратимся к нему позже в [примере вызывающего рабочего процесса](#example-caller-workflow)) принимает входную строку и секрет от вызывающего рабочего процесса и использует их в действии.

{% raw %}
```yaml{:copy}
name: Reusable workflow example

on:
  workflow_call:
    inputs:
      config-path:
        required: true
        type: string
    secrets:
      token:
        required: true

jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/labeler@v4
      with:
        repo-token: ${{ secrets.token }}
        configuration-path: ${{ inputs.config-path }}
```
{% endraw %}

## Вызов повторно используемого рабочего процесса

Повторно используемый рабочий процесс вызывается с помощью ключевого слова `uses`. В отличие от случаев, когда в рабочем процессе используются действия, повторно используемые рабочие процессы вызываются непосредственно из задания, а не из шагов задания.

[`jobs.<job_id>.uses`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_iduses)

Вы ссылаетесь на повторно используемые файлы рабочего процесса с помощью {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}один из следующих синтаксисов:{% else %}синтаксис:{% endif %}

{% data reusables.actions.reusable-workflow-calling-syntax %}

Можно вызвать несколько рабочих процессов, ссылаясь на каждый из них в отдельном задании.

{% data reusables.actions.uses-keyword-example %}

### Передача входных данных и секретов в многократно используемый рабочий процесс

{% data reusables.actions.pass-inputs-to-reusable-workflows%}

{% ifversion actions-reusable-workflow-matrix %}
### Использование стратегии матрицы с повторно используемым рабочим процессом

Задания, использующие стратегию матрицы, могут вызывать повторно используемый рабочий процесс.

Стратегия матрицы позволяет использовать переменные в одном определении задания для автоматического создания нескольких выполнений заданий, основанных на сочетаниях переменных. Например, можно использовать стратегию матрицы для передачи различных входных данных в повторно используемый рабочий процесс. Дополнительные сведения о матрицах см. в разделе [Использование матрицы для заданий](/actions/using-jobs/using-a-matrix-for-your-jobs).

Приведенный ниже пример задания вызывает повторно используемый рабочий процесс и ссылается на контекст матрицы, определяя переменную `target` со значениями `[dev, stage, prod]`. Он будет выполнять три задания, по одному для каждого значения в переменной.

{% raw %}
```yaml{:copy}
jobs:
  ReuseableMatrixJobForDeployment:
    strategy:
      matrix:
        target: [dev, stage, prod]
    uses: octocat/octo-repo/.github/workflows/deployment.yml@main
    with:
      target: ${{ matrix.target }}
```
{% endraw %} {% endif %}

### Поддерживаемые ключевые слова для заданий, вызывающих повторно используемый рабочий процесс

При вызове повторно используемого рабочего процесса можно использовать только следующие ключевые слова в задании, содержащем вызов:

* [`jobs.<job_id>.name`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idname)
* [`jobs.<job_id>.uses`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_iduses)
* [`jobs.<job_id>.with`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idwith)
* [`jobs.<job_id>.with.<input_id>`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idwithinput_id)
* [`jobs.<job_id>.secrets`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsecrets)
* [`jobs.<job_id>.secrets.<secret_id>`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsecretssecret_id) {%- ifversion actions-inherit-secrets-reusable-workflows %}
* [`jobs.<job_id>.secrets.inherit`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit) {%- endif %} {%- ifversion actions-reusable-workflow-matrix %}
* [`jobs.<job_id>.strategy`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstrategy) {%- endif %}
* [`jobs.<job_id>.needs`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)
* [`jobs.<job_id>.if`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idif)
* [`jobs.<job_id>.permissions`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idpermissions)
* [`jobs.<job_id>.concurrency`](/actions/reference/workflow-syntax-for-github-actions#concurrency)

   {% note %}

   **Примечание**.

   * Если `jobs.<job_id>.permissions` не указан в вызывающем задании, вызываемый рабочий процесс будет иметь разрешения по умолчанию для `GITHUB_TOKEN`. Дополнительные сведения см. в статье "[Проверка подлинности в рабочем процессе](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)".
   * Вызываемый рабочий процесс может снизить (а не повысить) разрешения `GITHUB_TOKEN`, передаваемые из вызывающего рабочего процесса.

   {% endnote %}

### Пример вызывающего рабочего процесса

Этот файл рабочего процесса вызывает два файла рабочего процесса. Второму из них, `workflow-B.yml` (показанному в [примере повторноно используемого рабочего процесса](#example-reusable-workflow)), передаются входные данные (`config-path`) и секрет (`token`).

{% raw %}
```yaml{:copy}
name: Call a reusable workflow

on:
  pull_request:
    branches:
      - main

jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/workflow-A.yml@v1

  call-workflow-passing-data:
    permissions:
      contents: read
      pull-requests: write
    uses: octo-org/example-repo/.github/workflows/workflow-B.yml@main
    with:
      config-path: .github/labeler.yml
    secrets:
      token: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

{% ifversion nested-reusable-workflow %}
## Вложение повторно используемых рабочих процессов

Вы можете подключить не более четырех уровней рабочих процессов, то есть рабочий процесс вызывающего объекта верхнего уровня и до трех уровней повторно используемых рабочих процессов. Например: _caller-workflow.yml_ → _called-workflow-1.yml_ → _called-workflow-2.yml_ → _called-workflow-3.yml_. Циклы в дереве рабочих процессов запрещены.

В рамках повторно используемых рабочих процессов можно вызвать другой повторно используемый рабочий процесс.

{% raw %}
```yaml{:copy}
name: Reusable workflow

on:
  workflow_call:

jobs:
  call-another-reusable:
    uses: octo-org/example-repo/.github/workflows/another-reusable.yml@v1
```
{% endraw %}

### Передача секретов во вложенные рабочие процессы

Вы можете использовать `jobs.<job_id>.secrets` в вызывающем рабочем процессе для передачи именованных секретов в непосредственно вызываемый рабочий процесс. Кроме того, вы можете использовать `jobs.<job_id>.secrets.inherit` для передачи всех секретов вызывающего рабочего процесса в непосредственно вызываемый рабочий процесс. Дополнительные сведения см. в разделе [Передача входных данных и секретов в повторно используемый рабочий процесс](/actions/using-workflows/reusing-workflows#passing-inputs-and-secrets-to-a-reusable-workflow) выше, а также в справочной статье [Синтаксис рабочего процесса для GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit). Секреты передаются только в непосредственно вызываемый рабочий процесс, поэтому в цепочке рабочих процессов A > B > C рабочий процесс C будет получать секреты от A, только если они переданы из A в B, а затем из B в C.

В следующем примере рабочий процесс A передает все секреты в рабочий процесс B, используя ключевое слово `inherit`, но рабочий процесс B передает только один секрет в рабочий процесс C. Любые другие секреты, передаваемые в рабочий процесс B, недоступны для рабочего процесса C.

{% raw %}
```yaml
jobs:
  workflowA-calls-workflowB:
    uses: octo-org/example-repo/.github/workflows/B.yml@main
    secrets: inherit # pass all secrets
```

```yaml
jobs:
  workflowB-calls-workflowC:
    uses: different-org/example-repo/.github/workflows/C.yml@main
    secrets:
      envPAT: ${{ secrets.envPAT }} # pass just this secret
```
{% endraw %}

### Доступ и разрешения

Рабочий процесс, содержащий повторно используемые вложенные рабочие процессы, завершится ошибкой, если любой из вложенных рабочих процессов недоступен для исходного рабочего процесса вызывающего объекта. Дополнительные сведения см. в разделе [Доступ к повторно используемым рабочим процессам](/actions/using-workflows/reusing-workflows#access-to-reusable-workflows).

Разрешения `GITHUB_TOKEN` во вложенных рабочих процессах могут быть такими же или более ограничивающими. Например, в цепочке рабочих процессов A > B > C, если рабочий процесс A имеет разрешение `package: read`, B и C не могут иметь разрешения `package: write`. Дополнительные сведения см. в разделе [Автоматическая проверка подлинности токенов](/actions/security-guides/automatic-token-authentication).

Сведения о том, как с помощью API определить, какие файлы рабочего процесса были задействованы в выполнении конкретного рабочего процесса, см. в разделе [Мониторинг используемых рабочих процессов](#monitoring-which-workflows-are-being-used).
{% endif %}

## Использование выходных данных из повторно используемого рабочего процесса

Повторно используемый рабочий процесс может создавать данные, которые необходимо использовать в вызывающем рабочем процессе. Чтобы использовать эти выходные данные, необходимо указать их в качестве выходных данных повторно используемого рабочего процесса.{% ifversion actions-reusable-workflow-matrix %}

Если повторно используемый рабочий процесс, который задает выходные данные, выполняется с помощью стратегии матрицы, выходные данные будут задаваться последним успешно завершенным повторно используемым рабочим процессом матрицы, которая фактически задает значение.
Это означает, что если последний успешный завершенный повторно используемый рабочий процесс задает пустую строку для выходных данных, а второй последний успешный рабочий процесс задает фактическое значение, выходные данные будут содержать значение второго рабочего процесса. {% endif %}

В следующем повторно используемом рабочем процессе есть одно задание, содержащее два шага. В каждом из этих шагов мы задаем одно слово в качестве выходных данных: "hello" и "world". В разделе `outputs` задания мы сопоставляем эти выходные данные шага с выходными данными задания, называемыми: `output1` и `output2`. Затем в разделе `on.workflow_call.outputs` мы определяем два набора выходных данных для самого рабочего процесса, один с именем `firstword`, который мы сопоставляем с `output1`, и один с именем `secondword`, который сопоставляем с `output2`.

{% raw %}
```yaml{:copy}
name: Reusable workflow

on:
  workflow_call:
    # Map the workflow outputs to job outputs
    outputs:
      firstword:
        description: "The first output string"
        value: ${{ jobs.example_job.outputs.output1 }}
      secondword:
        description: "The second output string"
        value: ${{ jobs.example_job.outputs.output2 }}

jobs:
  example_job:
    name: Generate output
    runs-on: ubuntu-latest
    # Map the job outputs to step outputs
    outputs:
      output1: ${{ steps.step1.outputs.firstword }}
      output2: ${{ steps.step2.outputs.secondword }}
    steps:
      - id: step1{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "firstword=hello" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=firstword::hello"
{%- endif %}{% raw %}
      - id: step2{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "secondword=world" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=secondword::world"
{%- endif %}{% raw %}
```
{% endraw %}

Теперь мы можем использовать выходные данные в вызывающем рабочем процессе точно так же, как вы использовали бы выходные данные задания в том же рабочем процессе. Мы ссылаемся на выходные данные, используя имена, определенные на уровне рабочего процесса в повторно используемом рабочем процессе: `firstword` и `secondword`. В этом рабочем процессе `job1` вызывает повторно используемый рабочий процесс, а `job2` печатает выходные данные многократно используемого рабочего процесса ("hello world") в стандартный поток вывода в журнале рабочего процесса.

{% raw %}
```yaml{:copy}
name: Call a reusable workflow and use its outputs

on:
  workflow_dispatch:

jobs:
  job1:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@v1

  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
      - run: echo ${{ needs.job1.outputs.firstword }} ${{ needs.job1.outputs.secondword }}
```
{% endraw %}

Дополнительные сведения об использовании выходных данных задания см. в разделе [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs).

## Мониторинг используемых рабочих процессов

Вы можете использовать REST API {% data variables.product.prodname_dotcom %}, чтобы отслеживать использование многоразовых рабочих процессов. Действие журнала аудита `prepared_workflow_job` активируется при запуске задания рабочего процесса. В регистрируемые данные входят:
* `repo` — организация/репозиторий, в которых находится задание рабочего процесса. Для задания, вызывающего другой рабочий процесс, это —организация/репозиторий вызывающего рабочего процесса.
* `@timestamp` — дата и время запуска задания в формате эпохи Unix.
* `job_name` — имя выполняемого задания.
{% ifversion nested-reusable-workflow %}
* `calling_workflow_refs` — массив путей к файлам для всех рабочих процессов вызывающего объекта, участвующих в этом задании рабочего процесса. Элементы в массиве находятся в обратном порядке, в который они были вызваны. Например, в цепочке рабочих процессов A > B > C при просмотре журналов задания в рабочем процессе C массив будет иметь значение `["octo-org/octo-repo/.github/workflows/B.yml", "octo-org/octo-repo/.github/workflows/A.yml"]`.
* `calling_workflow_shas` — массив shas для всех рабочих процессов вызывающего объекта, участвующих в этом задании рабочего процесса. Массив содержит то же количество элементов в том же порядке, что и `calling_workflow_refs` массив. {% endif %}
* `job_workflow_ref` — файл рабочего процесса, который использовался в форме `{owner}/{repo}/{path}/{filename}@{ref}`. Для задания, которое вызывает другой рабочий процесс, с его помощью идентифицируется вызываемый рабочий процесс.

Сведения об использовании REST API для запроса журнала аудита для организации см. в статье [Организации](/rest/reference/orgs#get-the-audit-log-for-an-organization).

{% note %}

**Примечание**. Данные аудита для `prepared_workflow_job` можно просмотреть только с помощью REST API. Они не отображается в веб-интерфейсе {% data variables.product.prodname_dotcom %} и не включены в экспортированные данные аудита JSON/CSV.

{% endnote %}

{% ifversion partial-reruns-with-reusable %}

## Повторное выполнение рабочих процессов и заданий с помощью повторно используемых рабочих процессов

{% data reusables.actions.partial-reruns-with-reusable %}

{% endif %}

## Дальнейшие действия

Дополнительные сведения о {% data variables.product.prodname_actions %} см. в статье [События, запускающие рабочие процессы](/actions/learn-github-actions/events-that-trigger-workflows).

{% ifversion restrict-groups-to-workflows %}Вы можете стандартизировать развертывания путем создания группы локально размещенных средств выполнения тестов, которая может выполнять только определенный повторно используемый рабочий процесс. Дополнительные сведения см. в разделе [Управление доступом к локальным средствам выполнения тестов с помощью групп](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)."{% endif %}

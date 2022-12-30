---
title: Контексты
shortTitle: Contexts
intro: Доступ к контексту можно получить в рабочих процессах и действиях.
redirect_from:
  - /articles/contexts-and-expression-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/reference/contexts-and-expression-syntax-for-github-actions
  - /actions/reference/context-and-expression-syntax-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 3f73082600ce3bf300ce4565c2bdbc826eb357ca
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191937'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Сведения о контекстах

С помощью контекстов можно получать сведения об экземплярах рабочих процессов, средах выполнения задач, заданиях и шагах. Каждый контекст — это объект, который содержит свойства в виде строк или других объектов.

{% data reusables.actions.context-contents %} Например, контекст `matrix` заполняется только для заданий в [матрице](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix).

Обращаться к контекстам можно с помощью синтаксиса выражений. Дополнительные сведения см. в разделе [Выражения](/actions/learn-github-actions/expressions).

{% raw %} `${{ <context> }}`
{% endraw %}

{% data reusables.actions.context-injection-warning %}

| Имя контекста | Тип | Описание |
|---------------|------|-------------|
| `github` | `object` | Сведения об экземпляре рабочего процесса. Дополнительные сведения см. в разделе о [контексте `github`](#github-context). |
| `env` | `object` | Содержит переменные среды, которые заданы в рабочем процессе, задании или шаге. Дополнительные сведения см. в разделе о [контексте `env`](#env-context). |
| `job` | `object` | Сведения о выполняемом в данный момент задании. Дополнительные сведения см. в разделе о [контексте `job`](#job-context). |
{%- ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %} | `jobs` | `object` | Только для повторно используемых рабочих процессов содержит выходные данные заданий из повторно используемых рабочих процессов. Дополнительные сведения см. в разделе о [контексте `jobs`](#jobs-context). |{% endif %} | `steps` | `object` | Сведения о шагах, которые были выполнены в текущем задании. Дополнительные сведения см. в разделе о [контексте `steps`](#steps-context). | | `runner` | `object` | Сведения о средстве выполнения, в котором выполняется текущее задание. Дополнительные сведения см. в разделе о [контексте `runner`](#runner-context). | | `secrets` | `object` | Содержит имена и значения секретов, доступных для экземпляра рабочего процесса. Дополнительные сведения см. в разделе о [контексте `secrets`](#secrets-context). | | `strategy` | `object` | Сведения о стратегии выполнения матрицы для текущего задания. Дополнительные сведения см. в разделе о [контексте `strategy`](#strategy-context). | | `matrix` | `object` | Содержит свойства матрицы, определенные в рабочем процессе, который применяется к текущему заданию. Дополнительные сведения см. в разделе о [контексте `matrix`](#matrix-context). | | `needs` | `object` | Содержит выходные данные всех заданий, которые определены как зависимые для текущего задания. Дополнительные сведения см. в разделе о [контексте `needs`](#needs-context). | {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `inputs` | `object` | Содержит входные данные повторно используемых рабочих процессов {% ifversion actions-unified-inputs %} или вручную активируемых рабочих процессов {% endif %}. Дополнительные сведения см. в разделе о [контексте `inputs`](#inputs-context). |{% endif %}

В выражении доступ к данным контекста можно получить с помощью одного из двух видов синтаксиса.

- Синтаксис индексов: `github['sha']`
- Синтаксис разыменования свойств: `github.sha`

Чтобы использовать синтаксис разыменования свойств, имя свойства должно начинаться с буквы или `_` и содержать только буквенно-цифровые символы, `-` или `_`.

Если попытаться разыменовать несуществующее свойство, оно будет вычислено как пустая строка.

### Когда используются контексты

{% data reusables.actions.using-context-or-environment-variables %}

### Доступность контекста

В экземпляре рабочего процесса доступны различные контексты. Например, контекст `secrets` может использоваться только в определенных местах задания.

Кроме того, некоторые функции также могут использоваться только в определенных местах. Например, функция `hashFiles` доступна не везде.

В следующей таблице показано, где в рабочем процессе можно использовать каждый контекст и специальную функцию. Если эти сведения не приводятся, значит функцию можно использовать где угодно.

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}

| Ключ рабочего процесса | Контекст | Специальные функции |
| ---- | ------- | ----------------- |
{%- ifversion actions-run-name %} | <code>run-name</code> | <code>github, inputs</code> | | {%- endif %} | <code>concurrency</code> | <code>github, inputs</code> | | | <code>env</code> | <code>github, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.concurrency</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.container</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.container.credentials</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.container.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.continue-on-error</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.defaults.run</code> | <code>github, needs, strategy, matrix, env, inputs</code> | | | <code>jobs.&lt;job_id&gt;.env</code> | <code>github, needs, strategy, matrix, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.environment</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.environment.url</code> | <code>github, needs, strategy, matrix, job, runner, env, steps, inputs</code> | | | <code>jobs.&lt;job_id&gt;.if</code> | <code>github, needs, inputs</code> | <code>always, cancelled, success, failure</code> | | <code>jobs.&lt;job_id&gt;.name</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.outputs.&lt;output_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | | | <code>jobs.&lt;job_id&gt;.runs-on</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.secrets.&lt;secrets_id&gt;</code> | <code>github, needs,{% ifversion actions-reusable-workflow-matrix %} strategy, matrix,{% endif %} secrets{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | | | <code>jobs.&lt;job_id&gt;.services</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.credentials</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.steps.continue-on-error</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.env</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.if</code> | <code>github, needs, strategy, matrix, job, runner, env, steps, inputs</code> | <code>always, cancelled, success, failure, hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.name</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.run</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.timeout-minutes</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.with</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.working-directory</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.strategy</code> | <code>github, needs, inputs</code> | | | <code>jobs.&lt;job_id&gt;.timeout-minutes</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.with.&lt;with_id&gt;</code> | <code>github, needs{% ifversion actions-reusable-workflow-matrix %}, strategy, matrix{% endif %}{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | | | <code>on.workflow_call.inputs.&lt;inputs_id&gt;.default</code> | <code>github{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | | | <code>on.workflow_call.outputs.&lt;output_id&gt;.value</code> | <code>github, jobs, inputs</code> | | {% else %}
| Путь | Контекст | Специальные функции |
| ---- | ------- | ----------------- |
| <code>concurrency</code> | <code>github</code> | |
| <code>env</code> | <code>github, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.concurrency</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.container</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.container.credentials</code> | <code>github, needs, strategy, matrix, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.container.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.continue-on-error</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.defaults.run</code> | <code>github, needs, strategy, matrix, env</code> | |
| <code>jobs.&lt;job_id&gt;.env</code> | <code>github, needs, strategy, matrix, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.environment</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.environment.url</code> | <code>github, needs, strategy, matrix, job, runner, env, steps</code> | |
| <code>jobs.&lt;job_id&gt;.if</code> | <code>github, needs</code> | <code>always, cancelled, success, failure</code> |
| <code>jobs.&lt;job_id&gt;.name</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.outputs.&lt;output_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | |
| <code>jobs.&lt;job_id&gt;.runs-on</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.services</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.credentials</code> | <code>github, needs, strategy, matrix, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.steps.continue-on-error</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.env</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.if</code> | <code>github, needs, strategy, matrix, job, runner, env, steps</code> | <code>always, cancelled, success, failure, hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.name</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.run</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.timeout-minutes</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.with</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.working-directory</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.strategy</code> | <code>github, needs</code> | |
| <code>jobs.&lt;job_id&gt;.timeout-minutes</code> | <code>github, needs, strategy, matrix</code> | |
{% endif %}

### Пример: вывод данных контекста в журнал

Содержимое контекстов можно выводить в журнал для отладки. Для вывода объектов JSON в журнал в правильном формате требуется [функция `toJSON`](/actions/learn-github-actions/expressions#tojson).

{% data reusables.actions.github-context-warning %}

{% raw %}
```yaml{:copy}
name: Context testing
on: push

jobs:
  dump_contexts_to_log:
    runs-on: ubuntu-latest
    steps:
      - name: Dump GitHub context
        id: github_context_step
        run: echo '${{ toJSON(github) }}'
      - name: Dump job context
        run: echo '${{ toJSON(job) }}'
      - name: Dump steps context
        run: echo '${{ toJSON(steps) }}'
      - name: Dump runner context
        run: echo '${{ toJSON(runner) }}'
      - name: Dump strategy context
        run: echo '${{ toJSON(strategy) }}'
      - name: Dump matrix context
        run: echo '${{ toJSON(matrix) }}'
```
{% endraw %}

## Контекст `github`

Контекст `github` содержит сведения об экземпляре рабочего процесса и событии, которое запустило этот экземпляр. Большую часть данных контекста `github` можно прочитать в переменных среды. Подробные сведения о переменных среды см. в разделе "[Настройка переменных среды](/actions/automating-your-workflow-with-github-actions/using-environment-variables).

{% data reusables.actions.github-context-warning %} {% data reusables.actions.context-injection-warning %}

| Имя свойства | Тип | Описание |
|---------------|------|-------------|
| `github` | `object` | Контекст верхнего уровня, доступный во время любого задания или шага рабочего процесса. Этот объект содержит все свойства, перечисленные ниже. |
| `github.action` | `string` | Имя выполняемого в настоящий момент действия или параметр [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid) шага. {% data variables.product.prodname_dotcom %} удаляет специальные символы и использует имя `__run`, когда в текущем шаге выполняется скрипт без параметра `id`. Если одно действие используется в задании несколько раз, к имени добавляется суффикс в виде знака подчеркивания и порядкового номера после него. Например, первый выполняемый скрипт будет называться `__run`, а второй — `__run_2`. Аналогично второй вызов `actions/checkout` будет называться `actionscheckout2`. |
| `github.action_path` | `string` | Путь к расположению действия. Это свойство поддерживается только в составных действиях. С помощью этого пути можно обращаться к файлам, расположенным в том же репозитории, что и действие. |
| `github.action_ref` | `string` | Для шага, в котором выполняется действие, это номер выполняемого действия. Например, `v2`. |
| `github.action_repository` | `string` | Для шага, в котором выполняется действие, это имя владельца и репозитория, где находится действие. Например, `actions/checkout`. |
| `github.action_status` | `string` | Текущий результат составного действия. |
| `github.actor` | `string` | {% ifversion actions-stable-actor-ids %}Имя пользователя, который активировал начальный запуск рабочего процесса. Если рабочий процесс выполняется повторно, это значение может отличаться от `github.triggering_actor`. В повторных запусках рабочих процессов будут использоваться привилегии `github.actor`, даже если субъект, инициировавший повторный запуск (`github.triggering_actor`), имеет другие привилегии.{% else %}Имя пользователя, который инициировал запуск рабочего процесса.{% endif %} |
| `github.api_url` | `string` | URL-адрес REST API {% data variables.product.prodname_dotcom %}. |
| `github.base_ref` | `string` | `base_ref` или целевая ветвь запроса на включение внесенных изменений в экземпляре рабочего процесса. Это свойство доступно, только если экземпляр рабочего процесса был запущен событием `pull_request` или `pull_request_target`. |
| `github.env` | `string` | В средстве выполнения это путь к файлу, в котором задаются переменные среды для команд рабочего процесса. Этот файл уникален для каждого шага в задании. Дополнительные сведения см. в статье "[Команды рабочего процесса для {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-commands-for-github-actions#setting-an-environment-variable)". |
| `github.event` | `object` | Все полезные данные веб-перехватчика события. Этот контекст дает доступ к отдельным свойствам события. Этот объект идентичен полезным данным веб-перехватчика события, которое запустило экземпляр рабочего процесса, и у каждого события он свой. Веб-перехватчики для событий {% data variables.product.prodname_actions %} указаны в разделе "[События, которые запускают рабочие процессы](/articles/events-that-trigger-workflows/)". Например, для экземпляра рабочего процесса, запущенного [событием ](/actions/using-workflows/events-that-trigger-workflows#push)`push`, в этом объекте содержатся [полезные данные веб-перехватчика события push](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#push). |
| `github.event_name` | `string` | Имя события, которое запустило экземпляр рабочего процесса. |
| `github.event_path` | `string` | В средстве выполнения это путь к файлу, в котором содержатся все полезные данные веб-перехватчика события. |
| `github.graphql_url` | `string` | URL-адрес GraphQL API {% data variables.product.prodname_dotcom %}. |
| `github.head_ref` | `string` | `head_ref` или исходная ветвь запроса на включение внесенных изменений в экземпляре рабочего процесса. Это свойство доступно, только если экземпляр рабочего процесса был запущен событием `pull_request` или `pull_request_target`. |
| `github.job` | `string` | Свойство [`job_id`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id) текущего задания. <br /> Примечание. Это свойство контекста задается средством выполнения Acrions и доступно только в рамках выполнения этапов (`steps`) задания. В противном случае значение этого свойства будет равно `null`. |
| `github.ref` | `string` | {% data reusables.actions.ref-description %} |
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `github.ref_name` | `string` | | | {% data reusables.actions.ref_name-description %} `github.ref_protected` | `boolean` | | | {% data reusables.actions.ref_protected-description %} `github.ref_type` | `string` | | {% data reusables.actions.ref_type-description %} | {%- endif %} `github.path` | `string` | Путь в средстве выполнения к файлу, который задает системные `PATH` переменные из команд рабочего процесса. Этот файл уникален для каждого шага в задании. Дополнительные сведения см. в статье "[Команды рабочего процесса для {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-commands-for-github-actions#adding-a-system-path)". | | `github.repository` | `string` | Имя владельца и репозитория. Например, `Codertocat/Hello-World`. | | `github.repository_owner` | `string` | Имя владельца репозитория. Например, `Codertocat`. | | `github.repositoryUrl` | `string` | URL-адрес репозитория в Git. Например, `git://github.com/codertocat/hello-world.git`. | | `github.retention_days` | `string` | Время хранения (в днях) журналов и артефактов экземпляра рабочего процесса. | | `github.run_id` | `string` | | | {% data reusables.actions.run_id_description %} `github.run_number` | `string` | | {% data reusables.actions.run_number_description %} {%- ifversion fpt or ghec or ghes > 3.5 or ghae > 3.4 %} | `github.run_attempt` | `string` | Уникальный номер для каждой попытки выполнения определенного рабочего процесса в репозитории. Первая попытка обозначается номером 1, для всех последующих номер увеличивается. | {%- endif %} {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `github.secret_source` | `string` | Источник секрета, используемого в рабочем процессе. Возможные значения: `None`, `Actions`, `Dependabot` или `Codespaces`. | {%- endif %} | `github.server_url` | `string` | URL-адрес сервера GitHub. Например: `https://github.com`. | | `github.sha` | `string` | {% data reusables.actions.github_sha_description %} | | `github.token` | `string` | Токен для аутентификации от имени приложения GitHub, которое установлено в вашем репозитории. Эта функциональность равнозначна секрету `GITHUB_TOKEN`. Дополнительные сведения см. в разделе [Автоматическая проверка подлинности токенов](/actions/security-guides/automatic-token-authentication).  <br /> Примечание. Это свойство контекста задается средством выполнения Acrions и доступно только в рамках выполнения этапов (`steps`) задания. В противном случае значение этого свойства будет равно `null`. |{% ifversion actions-stable-actor-ids %} | `github.triggering_actor` | `string` | Имя пользователя, который инициировал запуск рабочего процесса. Если рабочий процесс выполняется повторно, это значение может отличаться от `github.actor`. В повторных запусках рабочих процессов будут использоваться привилегии `github.actor`, даже если субъект, инициировавший повторный запуск (`github.triggering_actor`), имеет другие привилегии. |{% endif %} | `github.workflow` | `string` | Имя рабочего процесса. Если в файле рабочего процесса не указано свойство `name`, в качестве его значения используется полный путь к файлу рабочего процесса в репозитории. | | `github.workspace` | `string` | Рабочий каталог по умолчанию в средстве выполнения для шагов и расположение по умолчанию репозитория при использовании действия [`checkout`](https://github.com/actions/checkout). |

### Пример содержимого контекста `github`

Следующий пример контекста взят из экземпляра рабочего процесса, запущенного событием `push`. В этом примере объект `event` усечен, так как он идентичен [полезным данным веб-перехватчика `push`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#push).

{% data reusables.actions.context-example-note %}

```json
{
  "token": "***",
  "job": "dump_contexts_to_log",
  "ref": "refs/heads/my_branch",
  "sha": "c27d339ee6075c1f744c5d4b200f7901aad2c369",
  "repository": "octocat/hello-world",
  "repository_owner": "octocat",
  "repositoryUrl": "git://github.com/octocat/hello-world.git",
  "run_id": "1536140711",
  "run_number": "314",
  "retention_days": "90",
  "run_attempt": "1",
  "actor": "octocat",
  "workflow": "Context testing",
  "head_ref": "",
  "base_ref": "",
  "event_name": "push",
  "event": {
    ...
  },
  "server_url": "https://github.com",
  "api_url": "https://api.github.com",
  "graphql_url": "https://api.github.com/graphql",
  "ref_name": "my_branch",
  "ref_protected": false,
  "ref_type": "branch",
  "secret_source": "Actions",
  "workspace": "/home/runner/work/hello-world/hello-world",
  "action": "github_step",
  "event_path": "/home/runner/work/_temp/_github_workflow/event.json",
  "action_repository": "",
  "action_ref": "",
  "path": "/home/runner/work/_temp/_runner_file_commands/add_path_b037e7b5-1c88-48e2-bf78-eaaab5e02602",
  "env": "/home/runner/work/_temp/_runner_file_commands/set_env_b037e7b5-1c88-48e2-bf78-eaaab5e02602"
}
```

### Пример использования контекста `github`

В этом примере задание выполняется с помощью контекста `github.event_name`, только если экземпляр рабочего процесса был запущен событием `pull_request`.

```yaml{:copy}
name: Run CI
on: [push, pull_request]

jobs:
  normal_ci:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Run normal CI
        run: ./run-tests

  pull_request_ci:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event_name == 'pull_request' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Run PR CI
        run: ./run-additional-pr-ci
```

## Контекст `env`

Контекст `env` содержит переменные среды, заданные в рабочем процессе, задании или шаге. Дополнительные сведения о настройке переменных среды в рабочем процессе см. в разделе "[Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env)".

Синтаксис контекста `env` позволяет использовать значение переменной среды в файле рабочего процесса. Контекст `env` можно использовать в значении любого ключа в шаге кроме `id` и `uses`. Дополнительные сведения о синтаксисе шагов см. в статье "[Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)".

Если вы хотите использовать значение переменной среды в средстве выполнения, считайте переменную среды с помощью стандартного метода операционной системы, в которой работает средство выполнения.

| Имя свойства | Тип | Описание |
|---------------|------|-------------|
| `env` | `object` | Этот контекст меняется для каждого шага в задании. Доступ к этому контексту можно получить из любого шага задания. Этот объект содержит свойства, перечисленные ниже. |
| `env.<env_name>` | `string` | Значение конкретной переменной среды. |

### Пример содержимого контекста `env`

Содержимое контекста `env` — это сопоставление имен переменных среды с их значениями. Содержимое контекста зависит от места, где он используется в экземпляре рабочего процесса.

```json
{
  "first_name": "Mona",
  "super_duper_var": "totally_awesome"
}
```

### Пример использования контекста `env`

В этом примере рабочего процесса показано, как настроить контекст `env` на уровне рабочего процесса, задания и шага, а также как использовать контекст в шагах.

{% data reusables.repositories.actions-env-var-note %}

{% raw %}
```yaml{:copy}
name: Hi Mascot
on: push
env:
  mascot: Mona
  super_duper_var: totally_awesome

jobs:
  windows_job:
    runs-on: windows-latest
    steps:
      - run: echo 'Hi ${{ env.mascot }}'  # Hi Mona
      - run: echo 'Hi ${{ env.mascot }}'  # Hi Octocat
        env:
          mascot: Octocat
  linux_job:
    runs-on: ubuntu-latest
    env:
      mascot: Tux
    steps:
      - run: echo 'Hi ${{ env.mascot }}'  # Hi Tux
```
{% endraw %}

## Контекст `job`

Контекст `job` содержит сведения о выполняемом в данный момент задании.

| Имя свойства | Тип | Описание |
|---------------|------|-------------|
| `job` | `object` | Этот контекст меняется для каждого задания в экземпляре рабочего процесса. Доступ к этому контексту можно получить из любого шага задания. Данный объект содержит все свойства, перечисленные ниже. |
| `job.container` | `object` | Сведения о контейнере задания. Дополнительные сведения о контейнерах см. в статье "[Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idcontainer)". |
| `job.container.id` | `string` | Идентификатор контейнера. |
| `job.container.network` | `string` | Идентификатор сети контейнеров. Средство выполнения создает сеть, которая используется всеми контейнерами в задании. |
| `job.services` | `object` | Контейнеры служб, созданные для задания. Дополнительные сведения о контейнерах служб см. в статье "[Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idservices)". |
| `job.services.<service_id>.id` | `string` | Идентификатор контейнера службы. |
| `job.services.<service_id>.network` | `string` | Идентификатор сети контейнеров служб. Средство выполнения создает сеть, которая используется всеми контейнерами в задании. |
| `job.services.<service_id>.ports` | `object` | Доступные порты контейнера службы. |
| `job.status` | `string` | текущее состояние задания; Возможные значения — `success`, `failure` или `cancelled`. |

### Пример содержимого контекста `job`

В этом примере контекста `job` используется контейнер службы PostgreSQL с сопоставленными портами. Если в задании не используются контейнеры или контейнеры служб, контекст `job` содержит только свойство `status`.

```json
{
  "status": "success",
  "container": {
    "network": "github_network_53269bd575974817b43f4733536b200c"
  },
  "services": {
    "postgres": {
      "id": "60972d9aa486605e66b0dad4abb638dc3d9116f566579e418166eedb8abb9105",
      "ports": {
        "5432": "49153"
      },
      "network": "github_network_53269bd575974817b43f4733536b200c"
    }
  }
}
```

### Пример использования контекста `job`

В этом примере рабочего процесса настраивается контейнер службы PostgreSQL и порт 5432 в контейнере службы автоматически сопоставляется со случайным выбранным доступным портом на узле. Контекст `job` используется для получения номера порта, назначенного на узле.

```yaml{:copy}
name: PostgreSQL Service Example
on: push
jobs:
  postgres-job:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres
        env:
          POSTGRES_PASSWORD: postgres
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5
        ports:
          # Maps TCP port 5432 in the service container to a randomly chosen available port on the host.
          - 5432

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: pg_isready -h localhost -p {% raw %}${{ job.services.postgres.ports[5432] }}{% endraw %}
      - run: ./run-tests
```

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}

## Контекст `jobs`

Контекст `jobs` доступен только в повторно используемых рабочих процессах и может использоваться только для задания выходных данных для повторно используемого рабочего процесса. Дополнительные сведения см. в статье [Многократное использование рабочих процессов](/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow).

| Имя свойства | Тип | Описание |
|---------------|------|-------------|
| `jobs` | `object` | Доступен только в повторно используемых рабочих процессах и может использоваться только для задания выходных данных для повторно используемого рабочего процесса. Данный объект содержит все свойства, перечисленные ниже.
| `jobs.<job_id>.result` | `string` | Результат задания в повторно используемом рабочем процессе. Возможные значения: `success`, `failure`, `cancelled` или `skipped`. |
| `jobs.<job_id>.outputs` | `object` | Набор выходных данных задания в повторно используемом рабочем процессе. |
| `jobs.<job_id>.outputs.<output_name>` | `string` | Значение определенных выходных данных для задания в повторно используемых рабочих процессах. |

### Пример содержимого контекста `jobs`

Этот пример контекста `jobs` содержит результат и выходные данные задания из повторно используемых рабочих процессов.

```json
{
  "example_job": {
    "result": "success",
    "outputs": {
      "output1": "hello",
      "output2": "world"
    }
  }
}
```

### Пример использования контекста `jobs`

В этом примере повторно используемый рабочий процесс использует контекст `jobs` для задания выходных данных для повторно используемого рабочего процесса. Обратите внимание, как выходные данные передаются из шагов в задание, а затем в триггер `workflow_call`. Дополнительные сведения см. в статье [Многократное использование рабочих процессов](/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow).

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

{% endif %}

## Контекст `steps`

В контексте `steps` содержатся сведения об уже запущенных шагах в текущем задании с указанным свойством [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid).

| Имя свойства | Тип | Описание |
|---------------|------|-------------|
| `steps` | `object` | Этот контекст меняется для каждого шага в задании. Доступ к этому контексту можно получить из любого шага задания. Данный объект содержит все свойства, перечисленные ниже. |
| `steps.<step_id>.outputs` | `object` | Набор выходных данных, определенных для шага. Дополнительные сведения см. в разделе [Синтаксис метаданных для {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions). |
| `steps.<step_id>.conclusion` | `string` | Результат завершенного шага после применения [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error). Возможные значения: `success`, `failure`, `cancelled` или `skipped`. Если шаг `continue-on-error` завершается сбоем, то `outcome` имеет значение `failure`, однако последнее свойство `conclusion` имеет значение `success`. |
| `steps.<step_id>.outcome` | `string` | Результат завершенного шага до применения [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error). Возможные значения: `success`, `failure`, `cancelled` или `skipped`. Если шаг `continue-on-error` завершается сбоем, то `outcome` имеет значение `failure`, однако последнее свойство `conclusion` имеет значение `success`. |
| `steps.<step_id>.outputs.<output_name>` | `string` | Значение определенного набора выходных данных. |

### Пример содержимого контекста `steps`

В этом примере контекста `steps` показаны два предыдущих шага с заданным свойством [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid). У первого шага свойство `id` называлось `checkout`, у второго — `generate_number`. Выходными данными шага `generate_number` был номер `random_number`.

```json
{
  "checkout": {
    "outputs": {},
    "outcome": "success",
    "conclusion": "success"
  },
  "generate_number": {
    "outputs": {
      "random_number": "1"
    },
    "outcome": "success",
    "conclusion": "success"
  }
}
```

### Пример использования контекста `steps`

В этом примере рабочего процесса в качестве выходных данных одного шага создается случайное число, а на последующем шаге эти выходные данные считываются с помощью контекста `steps`.

```yaml{:copy}
name: Generate random failure
on: push
jobs:
  randomly-failing-job:
    runs-on: ubuntu-latest
    steps:
      - id: checkout
        uses: {% data reusables.actions.action-checkout %}
      - name: Generate 0 or 1
        id: generate_number
{%- ifversion actions-save-state-set-output-envs %}
        run:  echo "random_number=$(($RANDOM % 2))" >> $GITHUB_OUTPUT
{%- else %}
        run:  echo "::set-output name=random_number::$(($RANDOM % 2))"
{%- endif %}
      - name: Pass or fail
        run: |
          if [[ {% raw %}${{ steps.generate_number.outputs.random_number }}{% endraw %} == 0 ]]; then exit 0; else exit 1; fi
```

## Контекст `runner`

Контекст `runner` содержит сведения о средстве выполнения, которое запускает текущее задание.

| Имя свойства | Тип | Описание |
|---------------|------|-------------|
| `runner` | `object` | Этот контекст меняется для каждого задания в экземпляре рабочего процесса. Данный объект содержит все свойства, перечисленные ниже. |
| `runner.name` | `string` | {% data reusables.actions.runner-name-description %} |
| `runner.os` | `string` | {% data reusables.actions.runner-os-description %} |{% ifversion actions-runner-arch-envvars %}
| `runner.arch` | `string` | {% data reusables.actions.runner-arch-description %} |{% endif %}
| `runner.temp` | `string` | {% data reusables.actions.runner-temp-directory-description %} |
| `runner.tool_cache` | `string` | {% ifversion ghae %}{% data reusables.actions.self-hosted-runners-software %} {% else %} {% data reusables.actions.runner-tool-cache-description %} {% endif %}|
| `runner.debug` | `string` | {% data reusables.actions.runner-debug-description %} |

{%- comment %} Свойство `runner.workspace` отсутствует в описании намеренно. В отличие от `github.workspace` это одно из старых свойств Actions, которое не предназначено для пользователей. Он сохранено для обеспечения совместимости.
| `runner.workspace` | `string` | | {%- endcomment %}

### Пример содержимого контекста `runner`

Ниже приводится пример контекста из средства выполнения для Linux, размещенного в {% data variables.product.prodname_dotcom %}.

```json
{
  "os": "Linux",
  "arch": "X64",
  "name": "GitHub Actions 2",
  "tool_cache": "/opt/hostedtoolcache",
  "temp": "/home/runner/work/_temp"
  {%- comment %}
  # The `runner.workspace` property is purposefully not documented. It is an early Actions property that now isn't relevant for users, compared to `github.workspace`. It is kept around for compatibility.
  "workspace": "/home/runner/work/hello-world"
  {%- endcomment %}
}
```

### Пример использования контекста `runner`

В этом примере рабочего процесса с помощью контекста `runner` задается путь к временному каталогу для записи журналов, а если рабочий процесс завершается сбоем, эти журналы отправляются в качестве артефакта.

```yaml{:copy}
name: Build
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build with logs
        run: |
          mkdir {% raw %}${{ runner.temp }}{% endraw %}/build_logs
          ./build.sh --log-path {% raw %}${{ runner.temp }}{% endraw %}/build_logs
      - name: Upload logs on fail
        if: {% raw %}${{ failure() }}{% endraw %}
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: Build failure logs
          path: {% raw %}${{ runner.temp }}{% endraw %}/build_logs
```

## Контекст `secrets`

Контекст `secrets` содержит имена и значения секретов, доступных для экземпляра рабочего процесса. Контекст `secrets` недоступен для составных действий из-за соображений безопасности. Если вы хотите передать секрет в составное действие, необходимо явно сделать это в качестве входных данных. Дополнительные сведения о секретах см. в разделе [Зашифрованные секреты](/actions/security-guides/encrypted-secrets).

`GITHUB_TOKEN` — это секрет, который автоматически создается для каждого экземпляра рабочего процесса и всегда включается в контекст `secrets`. Дополнительные сведения см. в разделе [Автоматическая проверка подлинности токенов](/actions/security-guides/automatic-token-authentication).

{% data reusables.actions.secrets-redaction-warning %}

| Имя свойства | Тип | Описание |
|---------------|------|-------------|
| `secrets` | `object` | Этот контекст одинаков для каждого задания в экземпляре рабочего процесса. Доступ к этому контексту можно получить из любого шага задания. Данный объект содержит все свойства, перечисленные ниже. |
| `secrets.GITHUB_TOKEN` | `string` | Автоматически созданный токен для каждого экземпляра рабочего процесса. Дополнительные сведения см. в разделе [Автоматическая проверка подлинности токенов](/actions/security-guides/automatic-token-authentication). |
| `secrets.<secret_name>` | `string` | Значение определенного секрета. |

### Пример содержимого контекста `secrets`

В следующем примере содержимого контекста `secrets` показан токен `GITHUB_TOKEN` с автоматической проверкой, а также два других секрета, доступных экземпляру рабочего процесса.

```json
{
  "github_token": "***",
  "NPM_TOKEN": "***",
  "SUPERSECRET": "***"
}
```

### Пример использования контекста `secrets`

{% data reusables.actions.github_token-input-example %}

## Контекст `strategy`

Для рабочих процессов с матрицей контекст `strategy` содержит сведения о стратегии выполнения матрицы для текущего задания.

| Имя свойства | Тип | Описание |
|---------------|------|-------------|
| `strategy` | `object` | Этот контекст меняется для каждого задания в экземпляре рабочего процесса. Доступ к этому контексту можно получить из любого задания или шага рабочего процесса. Данный объект содержит все свойства, перечисленные ниже. |
| `strategy.fail-fast` | `boolean` | Если свойство имеет значение `true`, все выполняемые задания отменяются при сбое какого-либо задания в матрице. Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategyfail-fast). |
| `strategy.job-index` | `number` | Индекс текущего задания в матрице. **Примечание.** Это число с отсчетом от нуля. Индекс первого задания в матрице равен `0`. |
| `strategy.job-total` | `number` | Общее количество заданий в матрице. **Примечание.** Это **не** число с отсчетом от нуля. Например, для матрицы с четырьмя заданиями `job-total` имеет значение `4`. |
| `strategy.max-parallel` | `number` | Максимальное число заданий, которые могут выполняться одновременно при использовании стратегии заданий `matrix`. Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel). |

### Пример содержимого контекста `strategy`

В следующем примере содержимое контекста `strategy` взято из последнего задания в матрице с четырьмя заданиям. Обратите внимание на разницу между числом `job-index` с отсчетом от нуля и свойством `job-total`, которое не отсчитывается от нуля.

```json
{
  "fail-fast": true,
  "job-index": 3,
  "job-total": 4,
  "max-parallel": 4
}
```

### Пример использования контекста `strategy`

В этом примере рабочего процесса с помощью свойства `strategy.job-index` задается уникальное имя файла журнала для каждого задания в матрице.

```yaml{:copy}
name: Test matrix
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        test-group: [1, 2]
        node: [14, 16]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: npm test > test-job-{% raw %}${{ strategy.job-index }}{% endraw %}.txt
      - name: Upload logs
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: Build log for job {% raw %}${{ strategy.job-index }}{% endraw %}
          path: test-job-{% raw %}${{ strategy.job-index }}{% endraw %}.txt
```

## Контекст `matrix`

Для рабочих процессов с матрицей контекст `matrix` содержит свойства матрицы, определенные в файле рабочего процесса, который применяется к текущему заданию. Например, если настроить матрицу с ключами `os` и `node`, объект контекста `matrix` включает свойства `os` и `node` со значениями, которые используются для текущего задания.

В контексте `matrix` нет стандартных свойств, а есть только те, что определены в файле рабочего процесса.

| Имя свойства | Тип | Описание |
|---------------|------|-------------|
| `matrix` | `object` | Этот контекст доступен только для заданий в матрице и меняется для каждого задания в экземпляре рабочего процесса. Доступ к этому контексту можно получить из любого задания или шага рабочего процесса. Этот объект содержит свойства, перечисленные ниже. |
| `matrix.<property_name>` | `string` | Значение свойства matrix. |

### Пример содержимого контекста `matrix`

В следующем примере содержимое контекста `matrix` взято из задания в матрице, у которой есть свойства `os` и `node`, определенные в рабочем процессе. Задание выполняется с сочетанием ОС `ubuntu-latest` и Node.js версии `16`.

```json
{
  "os": "ubuntu-latest",
  "node": 16
}
```

### Пример использования контекста `matrix`

В этом примере рабочий процесс создает матрицу с ключами `os` и `node`. В нем для каждого задания с помощью свойства `matrix.os` задается тип средства выполнения, а с помощью свойства `matrix.node` — версия Node.js.

```yaml{:copy}
name: Test matrix
on: push

jobs:
  build:
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest]
        node: [14, 16]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node }}{% endraw %}
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
```

## Контекст `needs`

Контекст `needs` содержит выходные данные всех заданий, которые определены как прямая зависимость текущего задания. Обратите внимание, что сюда не входят неявно зависимые задания (например, зависимые задания зависимого задания). Дополнительные сведения об определении зависимостей заданий см. в статье "[Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idneeds)".

| Имя свойства | Тип | Описание |
|---------------|------|-------------|
| `needs` | `object` | Этот контекст заполняется только для экземпляров рабочих процессов с зависимыми заданиями и меняется для каждого задания в рабочем процессе. Доступ к этому контексту можно получить из любого задания или шага рабочего процесса. Данный объект содержит все свойства, перечисленные ниже. |
| `needs.<job_id>` | `object` | Одно задание, от которого зависит текущее задание. |
| `needs.<job_id>.outputs` | `object` | Набор выходных данных задания, от которого зависит текущее задание. |
| `needs.<job_id>.outputs.<output name>` | `string` | Значение определенного набора выходных данных для задания, от которого зависит текущее задание. |
| `needs.<job_id>.result` | `string` | Результат задания, от которого зависит текущее задание. Возможные значения: `success`, `failure`, `cancelled` или `skipped`. |

### Пример содержимого контекста `needs`

В следующем примере содержимого контекста `needs` показаны сведения о двух заданиях, от которых зависит текущее задание.

```json
{
  "build": {
    "result": "success",
    "outputs": {
      "build_id": "ABC123"
    }
  },
  "deploy": {
    "result": "failure",
    "outputs": {}
  }
}
```

### Пример использования контекста `needs`

В этом примере рабочего процесса есть три задания: `build`, которое выполняет сборку, `deploy`, которому требуется задание `build`, а также `debug`, которому требуются и задание `build`, и `deploy` и которое выполняется, только если в рабочем процессе произошел сбой. Задание `deploy` также использует контекст `needs` для доступа к выходным данным задания `build`.

```yaml{:copy}
name: Build and deploy
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      build_id: {% raw %}${{ steps.build_step.outputs.build_id }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        id: build_step
        run: |
          ./build
{%- ifversion actions-save-state-set-output-envs %}
          echo "build_id=$BUILD_ID" >> $GITHUB_OUTPUT
{%- else %}
          echo "::set-output name=build_id::$BUILD_ID"
{%- endif %}
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: ./deploy --build {% raw %}${{ needs.build.outputs.build_id }}{% endraw %}
  debug:
    needs: [build, deploy]
    runs-on: ubuntu-latest
    if: {% raw %}${{ failure() }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: ./debug
```

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
## Контекст `inputs`

Контекст `inputs` содержит входные свойства, передаваемые в действие{% ifversion actions-unified-inputs %},{% else %} или{% endif %} в повторно используемый рабочий процесс{% ifversion actions-unified-inputs %}, или в рабочий процесс, активируемый вручную{% endif %}. {% ifversion actions-unified-inputs %}Для многократно используемых рабочих процессов. {% else %}{% endif %}Имена и типы входных данных определяются в [конфигурации события `workflow_call`](/actions/learn-github-actions/events-that-trigger-workflows#workflow-reuse-events) многократно используемого рабочего процесса, а входные значения передаются из [`jobs.<job_id>.with`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idwith) во внешнем рабочем процессе, который вызывает многократно используемый рабочий процесс. {% ifversion actions-unified-inputs %} Для рабочих процессов, активированных вручную, входные данные определяются в [конфигурации события `workflow_dispatch`](/actions/learn-github-actions/events-that-trigger-workflows#workflow_dispatch) рабочего процесса.{% endif %}

В контексте `inputs` нет стандартных свойств, а есть только те, что определены в файле рабочего процесса.

{% data reusables.actions.reusable-workflows-enterprise-beta %}

| Имя свойства | Тип | Описание |
|---------------|------|-------------|
| `inputs` | `object` | Этот контекст доступен только в [многократно используемых рабочих процессах](/actions/learn-github-actions/reusing-workflows){% ifversion actions-unified-inputs %} или в рабочем процессе, активируемом [событием`workflow_dispatch`](/actions/learn-github-actions/events-that-trigger-workflows#workflow_dispatch){% endif %}. Доступ к этому контексту можно получить из любого задания или шага рабочего процесса. Этот объект содержит свойства, перечисленные ниже. |
| `inputs.<name>` | `string`, `number` или `boolean` | Каждое входное значение, которое передается из внешнего рабочего процесса. |

### Пример содержимого контекста `inputs`

Следующий пример содержимого контекста `inputs` взят из рабочего процесса, в котором определены входные данные `build_id`, `deploy_target` и `perform_deploy`.

```json
{
  "build_id": 123456768,
  "deploy_target": "deployment_sys_1a",
  "perform_deploy": true
}
```

### Пример использования контекста `inputs` в многократно используемом рабочем процессе

В этом примере многократно используемого рабочего процесса с помощью контекста `inputs` получаются значения входных данных `build_id`, `deploy_target` и `perform_deploy`, которые были переданы в многократно используемый рабочий процесс из рабочего процесса вызывающего объекта.

{% raw %}
```yaml{:copy}
name: Reusable deploy workflow
on:
  workflow_call:
    inputs:
      build_id:
        required: true
        type: number
      deploy_target:
        required: true
        type: string
      perform_deploy:
        required: true
        type: boolean

jobs:
  deploy:
    runs-on: ubuntu-latest
    if: ${{ inputs.perform_deploy }}
    steps:
      - name: Deploy build to target
        run: deploy --build ${{ inputs.build_id }} --target ${{ inputs.deploy_target }}
```
{% endraw %}

{% ifversion actions-unified-inputs %}
### Пример использования контекста `inputs` в рабочем процессе, активированном вручную

В этом примере рабочего процесса, активируемого событием `workflow_dispatch`, используется контекста `inputs` для получения значения входных данных `build_id`, `deploy_target` и `perform_deploy`, которые были переданы в рабочий процесс.

{% raw %}
```yaml{:copy}
on:
  workflow_dispatch:
    inputs:
      build_id:
        required: true
        type: string
      deploy_target:
        required: true
        type: string
      perform_deploy:
        required: true
        type: boolean

jobs:
  deploy:
    runs-on: ubuntu-latest
    if: ${{ inputs.perform_deploy }}
    steps:
      - name: Deploy build to target
        run: deploy --build ${{ inputs.build_id }} --target ${{ inputs.deploy_target }}
```
{% endraw %} {% endif %}

{% endif %}

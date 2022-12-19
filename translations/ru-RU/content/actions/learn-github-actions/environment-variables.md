---
title: Переменные среды
intro: '{% data variables.product.prodname_dotcom %} задает переменные среды по умолчанию для каждого запуска рабочего процесса {% data variables.product.prodname_actions %}. Вы также можете задать настраиваемые переменные среды в файле рабочего процесса.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/configuring-and-managing-workflows/using-environment-variables
  - /actions/reference/environment-variables
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 578b85facbb8fc6a7ff45f0d56a460eb3e2ab217
ms.sourcegitcommit: 99eb4456062aea31ca381977396417cf92e5798d
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179543'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Сведения о переменных среды

Переменные среды можно использовать для хранения сведений, на которые вы хотите ссылаться в рабочем процессе. Вы ссылаетесь на переменные среды в шаге рабочего процесса или действия, а переменные интерполируются на компьютере средства выполнения, на котором выполняется рабочий процесс. Команды, которые выполняются в действиях или в шагах рабочего процесса, могут создавать, читать и изменять переменные среды.

Вы можете задать собственные пользовательские переменные среды, использовать переменные среды по умолчанию, которые автоматически задаются с помощью {% data variables.product.prodname_dotcom %}, а также использовать любые другие переменные среды, установленные в рабочей среде в средстве выполнения. В переменных среды учитывается регистр. 

Чтобы задать пользовательскую переменную среды, ее необходимо определить в файле рабочего процесса. Область действия пользовательской переменной среды ограничена элементом, в котором она определена. Можно определить переменные среды, для которых задана следующая область:

* Весь рабочий процесс с использованием [`env`](/actions/using-workflows/workflow-syntax-for-github-actions#env) на верхнем уровне файла рабочего процесса.
* Содержимое задания в рабочем процессе с использованием [`jobs.<job_id>.env`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idenv).
* Определенный шаг задания с использованием [`jobs.<job_id>.steps[*].env`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsenv).

{% raw %}
```yaml
name: Greeting on variable day

on:
  workflow_dispatch

env:
  DAY_OF_WEEK: Monday

jobs:
  greeting_job:
    runs-on: ubuntu-latest
    env:
      Greeting: Hello
    steps:
      - name: "Say Hello Mona it's Monday"
        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK!"
        env:
          First_Name: Mona
```
{% endraw %}

В приведенном выше примере показаны три пользовательские переменные среды, используемые в команде `echo`: `$DAY_OF_WEEK`, `$Greeting`и `$First_Name`. Значения этих переменных среды задаются и ограничиваются на уровне рабочего процесса, задания и уровня шага соответственно. 

Поскольку интерполяция переменных среды выполняется после отправки задания рабочего процесса на компьютер средства выполнения, необходимо использовать соответствующий синтаксис для оболочки, используемой в средстве выполнения. В этом примере рабочим процессом указано `ubuntu-latest`. По умолчанию средства выполнения Linux используют оболочку Bash, поэтому необходимо использовать синтаксис `$NAME`. Если рабочим процессом указано средство выполнения Windows, используется синтаксис PowerShell, `$env:NAME`. Дополнительные сведения об оболочках см. в разделе [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsshell).

{% note %}

**Примечание**. Вы можете перечислить весь набор переменных среды, доступных для шага рабочего процесса, с помощью <span style="white-space: nowrap;">`run: env`</span> в шаге, а затем проверить вывод для шага.

{% endnote %}

## Использование контекстов для доступа к значениям переменных среды

Помимо переменных среды, {% data variables.product.prodname_actions %} также позволяет задавать и считывать значения с помощью контекстов. Переменные среды и контексты предназначены для использования в разных точках рабочего процесса.

Переменные среды всегда интерполируются в средстве выполнения виртуальной машины. Однако части рабочего процесса обрабатываются с помощью {% data variables.product.prodname_actions %} и не отправляются средству выполнения. Переменные среды нельзя использовать в этих частях файла рабочего процесса. Вместо этого можно использовать контексты. Например, условный объект `if`, определяющий, отправляется ли задание или шаг средству выполнения, всегда обрабатывается с помощью {% data variables.product.prodname_actions %}. Контекст можно использовать в условном операторе `if` для доступа к значению переменной среды.

{% raw %}
```yaml
env:
  DAY_OF_WEEK: Monday

jobs:
  greeting_job:
    runs-on: ubuntu-latest
    env:
      Greeting: Hello
    steps:
      - name: "Say Hello Mona it's Monday"
        if: ${{ env.DAY_OF_WEEK == 'Monday' }}
        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK!"
        env:
          First_Name: Mona
```
{% endraw %}

В этом изменении первого примера мы представили условный объект `if`. Теперь шаг рабочего процесса выполняется только в том случае, если для `DAYS_OF_WEEK` задано значение "Понедельник". Доступ к этому значению выполняется от условного оператора `if` с помощью [`env` контекста](/actions/learn-github-actions/contexts#env-context).

{% note %}

**Примечание**. Контексты обычно обозначаются с помощью знака доллара и фигурных скобок, в виде {% raw %}`${{ context.property }}`{% endraw %}. В условном объекте `if` {% raw %}`${{` и `}}`{% endraw %} необязательны, но если вы их используете, они должны охватывать целый оператор сравнения, как показано выше. 

{% endnote %}

Обычно вы будете использовать контекст `env` или `github` для доступа к значениям переменных среды в частях рабочего процесса, которые обрабатываются перед отправкой заданий средствам выполнения. 


| Контекст | Вариант использования | Пример |
| --- | --- | --- |
| `env` | Ссылка на пользовательские переменные среды, которые определены в рабочем процессе. | <span style="white-space: nowrap;">{% raw %}`${{ env.MY_VARIABLE }}`{% endraw %}</span> |
| `github` | Справочная информация о запуске рабочего процесса и событии, которое инициировало запуск. | <span style="white-space: nowrap;">{% raw %}`${{ github.repository }}`{% endraw %}</span> |


 
Существует множество других контекстов, которые можно использовать для различных целей в рабочих процессах. Дополнительные сведения см. в разделе «[Контексты](/actions/learn-github-actions/contexts)». Дополнительные сведения о том, где можно использовать различные контексты в рабочем процессе, см. в разделе [Доступность контекста](/actions/learn-github-actions/contexts#context-availability).

### Другие типы переменных

В большинстве случаев в рабочем процессе вы можете использовать только переменные среды, например `$MY_VARIABLE`, или эквивалентное свойство контекста, например <span style="white-space: nowrap;">{% raw %}`${{ env.MY_VARIABLE }}`{% endraw %}</span>. Однако имеются исключения.

* Вводы для событий `workflow_call` и `workflow_dispatch`, которые позволяют передавать значения в рабочий процесс. Дополнительные сведения см. в разделах [`on.workflow_call.inputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_callinputs) и [`on.workflow_dispatch.inputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_dispatchinputs).
* Выводы задания, позволяющие передавать значения между заданиями в рабочем процессе. Дополнительные сведения см. на веб-сайте [`jobs.<job_id>.outputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs).
* Переменные в выражении формата, которые позволяют заменить части строки. Дополнительные сведения см. на веб-сайте [`format`](/actions/learn-github-actions/expressions#format).

## Соглашения об именовании для переменных среды

Устанавливая пользовательскую переменную среды, вы не можете использовать какие-либо имена переменных среды по умолчанию. Полный список этих переменных см. ниже в разделе [Переменные среды по умолчанию](#default-environment-variables). Если вы попытаетесь переопределить значение одной из этих переменных среды по умолчанию, присвоение будет проигнорировано.

Любые новые переменные среды, которые вы устанавливаете для указания расположения в файловой системе, должны иметь суффикс `_PATH`. Переменные `GITHUB_ENV` среды по умолчанию и `GITHUB_WORKSPACE` являются исключениями из этого соглашения.

## Переменные среды по умолчанию

Переменные среды по умолчанию, которые устанавливает {% data variables.product.prodname_dotcom %}, доступны для каждого шага в рабочем процессе. 

Настоятельно рекомендуется, чтобы действия использовали переменные среды для доступа к файловой системе, а не жестко заданные пути к файлам. {% data variables.product.prodname_dotcom %} задает переменные среды для действий, используемых во всех средах средства выполнения.

| Переменная среды | Описание |
| ---------------------|------------ |
| `CI` | Всегда имеет значение `true`. |
| `GITHUB_ACTION` | Имя выполняемого в данный момент действия или [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid) шага. Например, для действия — `__repo-owner_name-of-action-repo`.<br><br>{% data variables.product.prodname_dotcom %} удаляет специальные символы и использует имя `__run`, когда в текущем шаге выполняется скрипт без параметра `id`. При использовании одного сценария или действия несколько раз в одном задании имя будет включать суффикс, состоящий из порядкового номера перед символом подчеркивания. Например, первый сценарий, который вы запустите, будет иметь имя `__run`, а второй сценарий будет называться `__run_2`. Аналогично второй вызов `actions/checkout` будет называться `actionscheckout2`. |
| `GITHUB_ACTION_PATH` | Путь к расположению действия. Это свойство поддерживается только в составных действиях. С помощью этого пути можно обращаться к файлам, расположенным в том же репозитории, что и действие. Например, `/home/runner/work/_actions/repo-owner/name-of-action-repo/v1`. |
| `GITHUB_ACTION_REPOSITORY` | Для шага, в котором выполняется действие, это имя владельца и репозитория, где находится действие. Например, `actions/checkout`. |
| `GITHUB_ACTIONS` | Всегда имеет значение `true`, когда {% data variables.product.prodname_actions %} запускает рабочий процесс. Эту переменную можно использовать, чтобы различать, когда тесты выполняются локально или с помощью {% data variables.product.prodname_actions %}.
| `GITHUB_ACTOR` | Имя пользователя или приложения, инициирующего рабочий процесс. Например, `octocat`. |
| `GITHUB_API_URL` | Возвращает URL-адрес API. Например: `{% data variables.product.api_url_code %}`.
| `GITHUB_BASE_REF` | Имя базовой ссылки или целевой ветки запроса на вытягивание в рабочем процессе. Это значение устанавливается только в том случае, если событием, запускающим рабочий процесс, является `pull_request` или `pull_request_target`. Например, `main`. |
| `GITHUB_ENV` | Путь к файлу в средстве выполнения, который устанавливает переменные среды из команд рабочего процесса. Этот файл уникален для текущего шага и изменяется для каждого шага задания. Например, `/home/runner/work/_temp/_runner_file_commands/set_env_87406d6e-4979-4d42-98e1-3dab1f48b13a`. Дополнительные сведения см. в статье [Команды рабочего процесса для {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable). | 
| `GITHUB_EVENT_NAME` | Имя события, через которое был инициирован рабочий процесс. Например, `workflow_dispatch`. |
| `GITHUB_EVENT_PATH` | Путь к файлу в средстве выполнения, который содержит полные полезные данные веб-перехватчика событий. Например, `/github/workflow/event.json`. |
| `GITHUB_GRAPHQL_URL` | Возвращает URL-адрес API GraphQL. Например: `{% data variables.product.graphql_url_code %}`.
| `GITHUB_HEAD_REF` | Начальная ссылка или исходная ветвь запроса на вытягивание в рабочем процессе. Это свойство задается только в том случае, если событием, запускающим рабочий процесс, является `pull_request` или `pull_request_target`. Например, `feature-branch-1`. |
| `GITHUB_JOB` | [job_id](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id) текущего задания. Например, `greeting_job`. |
| `GITHUB_PATH` | Путь средства выполнения к файлу, который устанавливает системные переменные `PATH` из команд рабочего процесса. Этот файл уникален для текущего шага и изменяется для каждого шага задания.  Например, `/home/runner/work/_temp/_runner_file_commands/add_path_899b9445-ad4a-400c-aa89-249f18632cf5`. Дополнительные сведения см. в статье [Команды рабочего процесса для {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-commands-for-github-actions#adding-a-system-path). |
| `GITHUB_REF` | {% data reusables.actions.ref-description %} |
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `GITHUB_REF_NAME` | {% data reusables.actions.ref_name-description %} | | `GITHUB_REF_PROTECTED` | {% data reusables.actions.ref_protected-description %} | | `GITHUB_REF_TYPE` | {% data reusables.actions.ref_type-description %} | {%- endif %} | `GITHUB_REPOSITORY` | Имя владельца и репозитория. Например, `octocat/Hello-World`. | | `GITHUB_REPOSITORY_OWNER` | Имя владельца репозитория. Например, `octocat`. | | `GITHUB_RETENTION_DAYS` | Количество дней, в течение которых хранятся журналы запуска рабочего процесса и артефакты. Например, `90`. | | `GITHUB_RUN_ATTEMPT` | Уникальный номер для каждой попытки запуска определенного рабочего процесса в репозитории. Этот номер начинается с 1 для первой попытки запуска рабочего процесса и увеличивается при каждом повторном запуске. Например, `3`. | | `GITHUB_RUN_ID` | {% data reusables.actions.run_id_description %} Например, `1658821493`. | | `GITHUB_RUN_NUMBER` | {% data reusables.actions.run_number_description %} Например, `3`. | | `GITHUB_SERVER_URL`| URL-адрес сервера {% data variables.product.product_name %}. Например: `https://{% data variables.product.product_url %}`.
| `GITHUB_SHA` | {% data reusables.actions.github_sha_description %} | {%- ifversion actions-job-summaries %} | `GITHUB_STEP_SUMMARY` | Путь средства выполнения тестов к файлу, который содержит сводки заданий из команд рабочего процесса. Этот файл уникален для текущего шага и изменяется для каждого шага задания. Например, `/home/rob/runner/_layout/_work/_temp/_runner_file_commands/step_summary_1cb22d7f-5663-41a8-9ffc-13472605c76c`. Дополнительные сведения см. в статье [Команды рабочего процесса для {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary). | {%- endif %} | `GITHUB_WORKFLOW` | Имя рабочего процесса. Например, `My test workflow`. Если в файле рабочего процесса не указано свойство `name`, значением этой переменной является полный путь к файлу рабочего процесса в репозитории. | | `GITHUB_WORKSPACE` | Рабочий каталог по умолчанию в средстве выполнения для шагов и стандартное расположение вашего репозитория при использовании действия [`checkout`](https://github.com/actions/checkout). Например, `/home/runner/work/my-repo-name/my-repo-name`. | {%- ifversion actions-runner-arch-envvars %} | `RUNNER_ARCH` | {% data reusables.actions.runner-arch-description %} | {%- endif %} | `RUNNER_DEBUG` | {% data reusables.actions.runner-debug-description %} | | `RUNNER_NAME` | {% data reusables.actions.runner-name-description %} Например, `Hosted Agent` | | `RUNNER_OS` | {% data reusables.actions.runner-os-description %} Например, `Windows` | | `RUNNER_TEMP` | {% data reusables.actions.runner-temp-directory-description %} Например, `D:\a\_temp` | {%- ifversion not ghae %} | `RUNNER_TOOL_CACHE` | {% data reusables.actions.runner-tool-cache-description %} Например, `C:\hostedtoolcache\windows` | {%- endif %}

{% note %}

**Примечание**. 

* Если необходимо использовать URL-адрес запуска рабочего процесса из задания, можно объединить следующие переменные среды: `$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID`
* Большинство переменных среды по умолчанию имеют соответствующее свойство контекста с аналогичным названием. Например, значение переменной среды `GITHUB_REF` можно считывать во время обработки рабочего процесса с помощью свойства контекста {% raw %}`${{ github.ref }}`{% endraw %}.

{% endnote %}

## Обнаружение операционной системы

Вы можете написать один файл рабочего процесса, который можно использовать для разных операционных систем, используя переменную среды по умолчанию `RUNNER_OS` и соответствующее свойство контекста <span style="white-space: nowrap;">{% raw %}`${{ runner.os }}`{% endraw %}</span>. Например, следующий рабочий процесс может быть успешно запущен, если вы изменили операционную систему с `macos-latest` на `windows-latest` без необходимости изменять синтаксис переменных среды, который различается в зависимости от оболочки, используемой средством выполнения.

{% raw %}
```yaml
jobs:
  if-Windows-else:
    runs-on: macos-latest
    steps:
      - name: condition 1
        if: runner.os == 'Windows'
        run: echo "The operating system on the runner is $env:RUNNER_OS."
      - name: condition 2
        if: runner.os != 'Windows'
        run: echo "The operating system on the runner is not Windows, it's $RUNNER_OS."
```
{% endraw %}

В этом примере два оператора `if` проверяют свойство `os` контекста `runner`, чтобы определить операционную систему средства выполнения. Условные объекты `if` обрабатываются с помощью {% data variables.product.prodname_actions %}, и средству выполнения отправляются только те шаги, для которых проверка разрешается в виде `true`. Здесь одна из проверок всегда будет иметь значение `true`, а другая — `false`, поэтому только один из этих шагов отправляется в средство выполнения. После отправки задания средству выполнения шаг выполняется и переменная среды в команде `echo` интерполируется с использованием соответствующего синтаксиса (`$env:NAME` для PowerShell в Windows и `$NAME` для bash и sh в Linux и MacOS). В этом примере оператор `runs-on: macos-latest` означает, что будет выполняться второй шаг.

## Передача значений между шагами и заданиями в рабочем процессе

 Если вы создаете значение в одном шаге задания, его можно использовать в последующих шагах того же задания, назначив значение существующей или новой переменной среды, а затем записав это значение в файл среды `GITHUB_ENV`. Файл среды может использоваться непосредственно действием или командой оболочкой в файле рабочего процесса с помощью ключевого слова `run`. Дополнительные сведения см. в статье [Команды рабочего процесса для {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-environment-variable). 
 
 Если вы хотите передать значение из шага одного задания в рабочем процессе в шаг другого задания в рабочем процессе, можно определить значение как вывод задания. Затем вы можете ссылаться на этот вывод задания из шага другого задания. Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs). 
 

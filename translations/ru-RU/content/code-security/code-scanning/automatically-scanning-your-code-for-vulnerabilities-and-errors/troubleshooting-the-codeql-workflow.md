---
title: Устранение неполадок рабочего процесса CodeQL
shortTitle: Troubleshoot CodeQL workflow
intro: 'Если у вас возникли проблемы с {% data variables.product.prodname_code_scanning %}, вы можете устранить неполадки с помощью этих советов.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-the-codeql-workflow
  - /code-security/secure-coding/troubleshooting-the-codeql-workflow
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow
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
  - Troubleshooting
  - Repositories
  - Pull requests
  - C/C++
  - C#
  - Java
ms.openlocfilehash: 4cbf57959776fee375eef2ea08778bf4c66b6324
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161194'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.not-available %}

{% ifversion ghes or ghae %} {% note %}

**Примечание.** В этой статье описываются функции, доступные в версии действия CodeQL и в связанном пакете интерфейса командной строки CodeQL, который входит в первоначальный выпуск этой версии {% data variables.product.product_name %}. Если в вашей организации используется более поздняя версия действия CodeQL, сведения о последних функциях см. в [статье, посвященной {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow). {% ifversion not ghae %} Сведения об использовании последней версии см. в разделе [Настройка сканирования кода для устройства](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access).{% endif %}

{% endnote %} {% endif %}

## Создание подробных журналов для отладки

Чтобы получить более подробные выходные данные журнала, можно включить ведение журнала пошаговой отладки. Дополнительные сведения см. в статье [Включение ведения журнала отладки](/actions/managing-workflow-runs/enabling-debug-logging#enabling-step-debug-logging).

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}

## Создание артефактов отладки данных {% data variables.product.prodname_codeql %}

Вы можете получить артефакты, которые помогут отлаживать {% data variables.product.prodname_codeql %}.
Артефакты отладки передаются в рабочий процесс, выполняемый от имени артефакта под названием `debug-artifacts`. Данные содержат журналы {% data variables.product.prodname_codeql %}, базы данных {% data variables.product.prodname_codeql %} и все файлы SARIF, созданные рабочим процессом.

Эти артефакты помогут вам устранять проблемы с {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}. Если вы обращаетесь в поддержку GitHub, то могут запросить эти данные.

{% endif %}

{% ifversion codeql-action-debug-logging %}

### Создание артефактов отладки {% data variables.product.prodname_codeql %} путем повторного выполнения заданий с включенным ведением журнала отладки

Вы можете создать артефакты отладки {% data variables.product.prodname_codeql %}, включив ведение журнала отладки и повторно выполнив задания. Дополнительные сведения о повторном выполнении рабочих процессов и заданий {% data variables.product.prodname_actions %} см. в статье [Повторное выполнение рабочих процессов и заданий](/actions/managing-workflow-runs/re-running-workflows-and-jobs).

Необходимо выбрать параметр **Включить ведение журнала отладки**. Он позволит включить ведение журнала диагностики средства выполнения и ведение журнала отладки шага для выполнения. Затем вы сможете скачать `debug-artifacts` для дальнейшего изучения. Изменять файл рабочего процесса при создании артефактов отладки {% data variables.product.prodname_codeql %} путем повторного выполнения заданий не требуется.

{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}

### Создание артефактов отладки данных {% data variables.product.prodname_codeql %} с помощью флага рабочего процесса

Вы можете создать артефакты отладки {% data variables.product.prodname_codeql %} с помощью флага в рабочем процессе. Для этого необходимо изменить `init` шаг файла {% data variables.code-scanning.codeql_workflow %} и задать .`debug: true`

```yaml
- name: Initialize CodeQL
  uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    debug: true
```

{% endif %}

## Сбой автоматической сборки для скомпилированного языка

Если автоматическая сборка кода для скомпилированного языка в проекте завершается ошибкой, выполните следующие действия по устранению неполадок.

- Удалите шаг `autobuild` из рабочего процесса {% data variables.product.prodname_code_scanning %} и добавьте конкретные шаги сборки. Сведения об изменении рабочего процесса см. в статье [Настройка {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow). Дополнительные сведения о замене шага `autobuild` см. в статье [Настройка рабочего процесса {% data variables.product.prodname_codeql %} для скомпилированных языков](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language).

- Если рабочий процесс явно не указывает языки для анализа, {% data variables.product.prodname_codeql %} неявно обнаруживает поддерживаемые языки в базе кода. В этой конфигурации из скомпилированных языков C/C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} и Java {% data variables.product.prodname_codeql %} анализирует только язык с наибольшим числом исходных файлов. Измените рабочий процесс и добавьте матрицу, указывающую языки, которые требуется проанализировать. Такую матрицу использует рабочий процесс анализа CodeQL по умолчанию.

  В следующих извлечениях из рабочего процесса показано, как можно использовать матрицу в стратегии задания для указания языков, а затем ссылаться на каждый язык в шаге "Инициализировать {% data variables.product.prodname_codeql %}".

  ```yaml
  jobs:
    analyze:
      permissions:
        security-events: write
        actions: read
      ...
      strategy:
        fail-fast: false
        matrix:
          language: ['csharp', 'cpp', 'javascript']

      steps:
      ...
        - name: Initialize {% data variables.product.prodname_codeql %}
          uses: {% data reusables.actions.action-codeql-action-init %}
          with:
            languages: {% raw %}${{ matrix.language }}{% endraw %}
  ```

  Дополнительные сведения об изменении рабочего процесса см. в статье [Настройка проверки кода](/code-security/secure-coding/configuring-code-scanning).

## Во время сборки не найден код

Если рабочий процесс завершается ошибкой `No source code was seen during the build` или `The process '/opt/hostedtoolcache/CodeQL/0.0.0-20200630/x64/codeql/codeql' failed with exit code 32`, это означает, что {% data variables.product.prodname_codeql %} не удалось отследить код. У этого сбоя может быть несколько причин.

1. Репозиторий может не содержать исходный код, написанный на языках, поддерживаемых {% data variables.product.prodname_codeql %}. Проверьте список поддерживаемых языков и, если дело в этом, удалите рабочий процесс {% data variables.product.prodname_codeql %}. Дополнительные сведения см. в статье [Сведения о проверке кода с помощью CodeQL](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql).

1. Автоматическое определение языка идентифицировало поддерживаемый язык, но в репозитории нет анализируемого кода на этом языке. Типичный пример — служба определения языка находит файл, связанный с определенным языком, например файл `.h` или `.gyp`, но в репозитории отсутствует соответствующий исполняемый код. Чтобы решить эту проблему, можно вручную определить языки, которые требуется проанализировать, обновив список языков в матрице `language`. Например, следующая конфигурация проанализирует только Go и JavaScript.

  ```yaml
  strategy:
    fail-fast: false
    matrix:
      # Override automatic language detection by changing the list below.
      # Supported options are listed in a comment in the default workflow.
      language: ['go', 'javascript']
  ```

   Дополнительные сведения см. в приведенном выше разделе [Сбой автоматической сборки для скомпилированного языка](#automatic-build-for-a-compiled-language-fails).

1. Рабочий процесс {% data variables.product.prodname_code_scanning %} анализирует скомпилированный язык (C, C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} или Java), но код не скомпилирован. По умолчанию рабочий процесс анализа {% data variables.product.prodname_codeql %} содержит шаг `autobuild`, хотя этот шаг и представляет собой оптимальный процесс, но в зависимости от конкретной среды сборки он может не выполнить сборку кода. Компиляция также может завершиться ошибкой, если вы удалили этот шаг `autobuild` и не включили шаги сборки вручную.  Дополнительные сведения об указании шагов сборки см. в статье [Настройка рабочего процесса {% data variables.product.prodname_codeql %} для скомпилированных языков](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language).
1. Рабочий процесс анализирует скомпилированный язык (C, C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} или Java), но части сборки кэшируются для повышения производительности (скорее всего, в системах сборки, таких как Gradle или Bazel). Поскольку {% data variables.product.prodname_codeql %} наблюдает за активностью компилятора, чтобы распознать потоки данных в репозитории, для {% data variables.product.prodname_codeql %} требуется полная сборка для выполнения анализа.
1. Рабочий процесс анализирует скомпилированный язык (C, C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} или Java), но компиляция не выполняется между `init` шагами и `analyze` в рабочем процессе. Для {% data variables.product.prodname_codeql %} требуется выполнение сборки между этими двумя шагами, чтобы наблюдать за активностью компилятора и выполнять анализ.
1. Скомпилированный код (в C, C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} или Java) успешно скомпилирован, но {% data variables.product.prodname_codeql %} не удалось обнаружить вызовы компилятора. Ниже перечислены наиболее распространенные из них.

   - Выполнение процесса сборки в отдельном контейнере для {% data variables.product.prodname_codeql %}. Дополнительные сведения см. в статье [Выполнение проверки кода CodeQL в контейнере](/code-security/secure-coding/running-codeql-code-scanning-in-a-container).
   - Создание с помощью распределенной системы сборки, внешней для функции GitHub Actions, использующей процесс управляющей программы.
   - {% data variables.product.prodname_codeql %} не знает об используемом конкретном компиляторе.

  При сборке кода для проектов .NET Framework, а также для проектов C# с помощью `dotnet build` или `msbuild` нужно указать `/p:UseSharedCompilation=false` на шаге `run` рабочего процесса.
  
  Например, следующая конфигурация для C# будет передавать флаг на первом шаге сборки.

   ``` yaml
   - run: |
       dotnet build /p:UseSharedCompilation=false
   ```

  Если возникла другая проблема с конкретным компилятором или конфигурацией, обратитесь в {% data variables.contact.contact_support %}.

Дополнительные сведения об указании шагов сборки см. в статье [Настройка рабочего процесса {% data variables.product.prodname_codeql %} для скомпилированных языков](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language).

{% ifversion fpt or ghes > 3.1  or ghae or ghec %}

## Проверенных строк кода меньше, чем ожидалось

Для скомпилированных языков, таких как C/C++, C#, Go и Java {% data variables.product.prodname_codeql %} проверяет только файлы, созданные во время анализа. Поэтому число проверенных строк кода будет меньше, чем ожидалось, если некоторые строки исходного кода компилируются неправильно. Это может произойти по следующим причинам.

1. Функция {% data variables.product.prodname_codeql %} `autobuild` использует эвристические методы для сборки кода в репозитории. Но иногда такой подход приводит к неполному анализу репозитория. Например, если в одном репозитории существует несколько команд `build.sh`, анализ может и не завершиться, так как шаг `autobuild` будет выполняет только одну из команд, поэтому некоторые исходные файлы могут не компилироваться.
1. Некоторые компиляторы не работают с {% data variables.product.prodname_codeql %} и могут вызывать проблемы при анализе кода. Например, Project Lombok использует API-интерфейсы компилятора, не являющиеся открытыми, для изменения поведения компилятора. Допущения, используемые в этих изменениях компилятора, недопустимы для средства извлечения Java для {% data variables.product.prodname_codeql %}, поэтому не удается проанализировать код.

Если анализ {% data variables.product.prodname_codeql %} проверяет меньше строк кода, чем ожидалось, есть несколько подходов, которые вы можете попробовать, чтобы убедиться, что все необходимые исходные файлы скомпилированы.

### Замена шага `autobuild`

Замените шаг `autobuild` теми же командами сборки, которые будут использоваться в рабочей среде. Это гарантирует, что {% data variables.product.prodname_codeql %} точно знает, как скомпилировать все исходные файлы, которые требуется проверить.
Дополнительные сведения см. в статье [Настройка рабочего процесса {% data variables.product.prodname_codeql %} для скомпилированных языков](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language).

### Проверка копии исходных файлов в базе данных {% data variables.product.prodname_codeql %}

Вы можете понять, почему некоторые исходные файлы не были проанализированы, проверив копию исходного кода, включенную в базу данных {% data variables.product.prodname_codeql %}. Чтобы получить базу данных из рабочего процесса Actions, измените шаг `init` файла рабочего процесса {% data variables.product.prodname_codeql %} и задайте `debug: true`.

```yaml
- name: Initialize CodeQL
  uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    debug: true
```

При этом база данных передается в виде артефакта действий, который можно скачать на локальный компьютер. Дополнительные сведения см. в статье [Хранение артефактов рабочего процесса](/actions/guides/storing-workflow-data-as-artifacts).

Артефакт будет содержать архивную копию исходных файлов, проверенных с помощью {% data variables.product.prodname_codeql %} под названием _src.zip_. При сравнении файлов исходного кода в репозитории с файлами в _src.zip_ можно увидеть, какие типы файлов отсутствуют. Узнав, какие типы файлов не анализируются, проще понять, как нужно изменить рабочий процесс для анализа {% data variables.product.prodname_codeql %}.

## Оповещения, найденные в созданном коде

{% data reusables.code-scanning.alerts-found-in-generated-code %}

## Ошибки извлечения в базе данных

Команда {% data variables.product.prodname_codeql %} постоянно работает над устранением критических ошибок извлечения, чтобы обеспечить проверку всех исходных файлов. Но средства извлечения {% data variables.product.prodname_codeql %} иногда генерируют ошибки во время создания базы данных. {% data variables.product.prodname_codeql %} предоставляет сведения об ошибках извлечения и предупреждениях, сгенерированных во время создания базы данных в файле журнала.
Сведения о диагностике извлечения указывают на общую работоспособность базы данных. Большинство ошибок средства извлечения существенно не влияют на анализ. Небольшое количество ошибок средства извлечения является нормальным и обычно указывает на хорошее состояние анализа.

Но если в подавляющем большинстве файлов, скомпилированных во время создания базы данных, возникают ошибки средства извлечения, то следует более подробно их изучить, чтобы понять, почему некоторые исходные файлы не извлечены должным образом.

{% else %}

## Части репозитория не проанализированы с помощью `autobuild`

Функция {% data variables.product.prodname_codeql %} `autobuild` использует эвристические методы для сборки кода в репозитории, но иногда такой подход приводит к неполному анализу репозитория. Например, если в одном репозитории существует несколько команд `build.sh`, анализ может и не завершиться, так как шаг `autobuild` будет выполнять только одну из команд. Решение состоит в том, чтобы заменить шаг `autobuild`на шаги сборки, которые компилируют весь необходимый для анализа исходный код. Дополнительные сведения см. в статье [Настройка рабочего процесса {% data variables.product.prodname_codeql %} для скомпилированных языков](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language).
{% endif %}

## Сборка занимает слишком много времени

Если сборка с помощью анализа {% data variables.product.prodname_codeql %} занимает слишком много времени, есть несколько подходов, которые вы можете попробовать, чтобы сократить время сборки.

### Увеличение объема памяти или числа ядер

Если для запуска анализа {% data variables.product.prodname_codeql %} используются локальные средства выполнения тестов, можно увеличить объем памяти или число ядер в этих средствах выполнения тестов.

### Использование матричных сборок для параллелизации анализа

По умолчанию {% data variables.code-scanning.codeql_workflow %} использует матрицу языков, которая приводит к параллельному выполнению анализа каждого языка. Если вы указали языки, которые необходимо проанализировать непосредственно на шаге "Инициализировать CodeQL", анализ каждого языка будет выполняться последовательно. Чтобы ускорить анализ нескольких языков, измените рабочий процесс для использования матрицы. Дополнительные сведения см. в приведенном выше разделе [Сбой автоматической сборки для скомпилированного языка](#automatic-build-for-a-compiled-language-fails).

### Уменьшение объема кода, анализируемого в одном рабочем процессе

Время анализа обычно пропорционально объему анализируемого кода. Вы можете сократить время анализа, уменьшая объем одновременно анализируемого кода, например путем исключения тестового кода или разбиения анализа на несколько рабочих процессов, которые анализируют только подмножество кода за раз.

{% data reusables.code-scanning.alerts-found-in-generated-code %}

Если вы разделяете анализ на несколько рабочих процессов, как описано выше, мы по-прежнему рекомендуем использовать хотя бы один рабочий процесс, который выполняется при событии `schedule`, что анализирует весь код в репозитории. Так как {% data variables.product.prodname_codeql %} анализирует потоки данных между компонентами, некоторые сложные расширения функциональности безопасности можно обнаружить только в полной сборке.

### Выполнение только во время события `schedule`

Если во время событий `push` и `pull_request` анализ все еще выполняется слишком долго, можно активировать анализ только для события `schedule`. Дополнительные сведения см. в разделе [События](/actions/learn-github-actions/introduction-to-github-actions#events).

### Определение наборов запросов, выполняемых рабочим процессом

По умолчанию для каждого языка доступно три основных набора запросов. Если вы оптимизировали сборку базы данных CodeQL и процесс все еще слишком долгий, можно уменьшить число выполняемых запросов. Набор запросов по умолчанию выполняется автоматически. Он содержит самые быстрые запросы безопасности с наименьшими показателями ложноположительных результатов.

Вы можете выполнять дополнительные запросы или наборы запросов в добавок к запросам по умолчанию. Проверьте, определяет ли рабочий процесс дополнительный набор запросов или дополнительные запросы для выполнения с помощью элемента `queries`. Вы можете поэкспериментировать с отключением дополнительных запросов или набора запросов. Дополнительные сведения см. в статье [Настройка {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-queries-in-ql-packs).

{% ifversion codeql-ml-queries %} {% note %}

**Примечание.** При запуске набора запросов `security-extended` или `security-and-quality` для JavaScript некоторые запросы используют экспериментальную технологию. Дополнительные сведения см. в статье [Сведения об оповещениях проверки кода](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts).
{% endnote %} {% endif %}

{% ifversion fpt or ghec %}

## Между платформами анализа результаты отличаются

При анализе кода, написанного на Python, результаты могут отличаться в зависимости от того, выполняете ли {% data variables.code-scanning.codeql_workflow %} в Linux, macOS или Windows.

В средствах выполнения, размещенных на GitHub, использующих Linux, {% data variables.code-scanning.codeql_workflow %} пытается установить и проанализировать зависимости Python, что может привести к дополнительным результатам. Чтобы отключить автоматическую установку, добавьте `setup-python-dependencies: false` на шаге "Инициализация CodeQL" рабочего процесса. Дополнительные сведения о настройке анализа зависимостей Python см. в разделе [Анализ зависимостей Python](/code-security/secure-coding/configuring-code-scanning#analyzing-python-dependencies).

{% endif %}

## Ошибка "Ошибка сервера"

Если выполнение рабочего процесса для {% data variables.product.prodname_code_scanning %} завершается сбоем из-за ошибки сервера, попробуйте запустить рабочий процесс еще раз. Если проблема повторится, обратитесь в {% data variables.contact.contact_support %}.

## Ошибка "Недостаточно свободного места на диске" или "Недостаточно памяти"

В очень больших проектах {% data variables.product.prodname_codeql %} может не хватить места на диске или объема памяти для средства выполнения тестов.
{% ifversion fpt or ghec %}Если вы столкнулись с этой проблемой в размещенном средстве выполнения тестов {% data variables.product.prodname_actions %}, обратитесь в {% data variables.contact.contact_support %}, чтобы мы могли изучить проблему.
{% else %}Если вы столкнулись с этой проблемой, попробуйте увеличить объем памяти для средства выполнения тестов.{% endif %}

{% ifversion fpt or ghec %}

## Ошибка 403 "Ресурс недоступен для интеграции" при использовании {% data variables.product.prodname_dependabot %}

{% data variables.product.prodname_dependabot %} считается недоверенным, когда активирует выполнение рабочего процесса, и рабочий процесс будет выполняться с использованием областей, которые доступны только для чтения. Для отправки результатов {% data variables.product.prodname_code_scanning %} для ветви обычно требуется область `security_events: write`. Но {% data variables.product.prodname_code_scanning %} всегда позволяет отправить результаты, когда событие `pull_request` активирует выполнение действия. Поэтому для ветвей {% data variables.product.prodname_dependabot %} рекомендуем использовать событие `pull_request` вместо события `push`.

Для простоты можно запустить принудительную отправку в ветвь по умолчанию и другие важные ветви длительного выполнения, а также инициировать выполнение запросов на вытягивание, открытых для этого набора ветвей:

```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
```

Альтернативный подход заключается в выполнении всех принудительных отправок, за исключением ветвей {% data variables.product.prodname_dependabot %}:

```yaml
on:
  push:
    branches-ignore:
      - 'dependabot/**'
  pull_request:
```

### Анализ по-прежнему завершается сбоем в ветви по умолчанию

Если {% data variables.code-scanning.codeql_workflow %} по-прежнему завершается сбоем при фиксации, выполненной в ветви по умолчанию, необходимо проверить следующее:

- является ли {% data variables.product.prodname_dependabot %} автором фиксации;
- был ли объединен запрос на вытягивание, включающий фиксацию, с помощью `@dependabot squash and merge`.

Этот тип фиксации слияния создан с помощью {% data variables.product.prodname_dependabot %}, поэтому все рабочие процессы, выполняемые при фиксации, будут иметь разрешения только для чтения. Если вы включили {% data variables.product.prodname_code_scanning %} и обновления системы безопасности {% data variables.product.prodname_dependabot %} или обновления версии в репозитории, рекомендуем не использовать команду {% data variables.product.prodname_dependabot %} `@dependabot squash and merge`. Вместо этого можно включить автоматическое слияние для репозитория. Это означает, что запросы на вытягивание будут автоматически объединены, если будут выполнены все необходимые проверки и пройдена проверка состояния. Дополнительные сведения о включении автоматического слияния см. в статье [Автоматическое слияние запроса на вытягивание](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request#enabling-auto-merge).
{% endif %}

## Ошибка: "не является файлом .ql, .qls, каталогом или спецификацией пакета запросов"

Эта ошибка возникает, если CodeQL не может найти именованный запрос, набор запросов или пакет запросов в расположении, запрошенном в рабочем процессе. Эта ошибка возникает по следующим двум причинам.

- В рабочем процессе есть опечатка.
- Ресурс, на который ссылается рабочий процесс по пути, был переименован, удален или перемещен в новое расположение.

После проверки расположения ресурса можно обновить рабочий процесс, чтобы указать правильное расположение.

## Предупреждение "git checkout HEAD^2 больше не требуется"

Если вы используете старый рабочий процесс {% data variables.product.prodname_codeql %}, в выходных данных действия "Инициализировать {% data variables.product.prodname_codeql %}" может появиться следующее предупреждение:

```
Warning: 1 issue was detected with this workflow: git checkout HEAD^2 is no longer 
necessary. Please remove this step as Code Scanning recommends analyzing the merge 
commit for best results.
```

Исправьте это, удалив указанные строки из рабочего процесса {% data variables.product.prodname_codeql %}. Эти строки были добавлены в раздел `steps` задания `Analyze` в начальных версиях рабочего процесса {% data variables.product.prodname_codeql %}.

```yaml
        with:
          # We must fetch at least the immediate parents so that if this is
          # a pull request then we can checkout the head.
          fetch-depth: 2

      # If this run was triggered by a pull request event, then checkout
      # the head of the pull request instead of the merge commit.
      - run: git checkout HEAD^2
        if: {% raw %}${{ github.event_name == 'pull_request' }}{% endraw %}
```

Измененный раздел `steps` рабочего процесса будет выглядеть следующим образом:

```yaml
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}

      # Initializes the {% data variables.product.prodname_codeql %} tools for scanning.
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: {% data reusables.actions.action-codeql-action-init %}

      ...
```

Дополнительные сведения об изменении файла рабочего процесса {% data variables.product.prodname_codeql %} см. в статье [Настройка {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow).

---
title: Хранение данных рабочего процесса в виде артефактов
shortTitle: Store artifacts
intro: С помощью артефактов можно обмениваться данными между заданиями в рабочем процессе и хранить данные после завершения рабочего процесса.
redirect_from:
  - /articles/persisting-workflow-data-using-artifacts
  - /github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts
  - /actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts
  - /actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts
  - /actions/guides/storing-workflow-data-as-artifacts
  - /actions/advanced-guides/storing-workflow-data-as-artifacts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
ms.openlocfilehash: 0dcd8230e0e387570110fb9c3a4d2ef659ef76d0
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093580'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Сведения об артефактах рабочего процесса

Артефакты служат для сохранения данных после завершения задания и совместного использования этих данные в других заданиях в том же рабочем процессе. Артефакт представляет собой файл или коллекцию файлов, которые создаются во время выполнения рабочего процесса. Например, с помощью артефактов можно сохранить выходные данные сборки и тестирования после завершения выполнения рабочего процесса. {% data reusables.actions.reusable-workflow-artifacts %}

{% data reusables.actions.artifact-log-retention-statement %} Отсчет периода хранения запроса на вытягивание начинается заново каждый раз, когда в него отправляется новая фиксация.

Ниже перечислены некоторые распространенные артефакты, которые можно отправлять:

- Файлы журналов и дампы ядра.
- Результаты тестов, сведения о сбоях и снимки экрана.
- Двоичные или сжатые файлы.
- Выходные показатели нагрузочных тестов и объема протестированного кода.

{% ifversion fpt or ghec %}

Для хранения артефактов используется пространство хранилища {% data variables.product.product_name %}. {% data reusables.actions.actions-billing %} Дополнительные сведения см. в разделе [Управление выставлением счетов для {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions).

{% else %}

Артефакты используют дисковое пространство во внешнем хранилище BLOB-объектов, настроенном для {% данных variables.product.prodname_actions %} на {% данных variables.location.product_location %}.

{% endif %}

Артефакты отправляются во время выполнения рабочего процесса. При этом вы можете просмотреть имя и размер артефакта в пользовательском интерфейсе. При скачивании артефакта с помощью пользовательского интерфейса {% data variables.product.product_name %} все отдельные файлы, которые были отправлены в составе артефакта, упаковываются в один файл. Это означает, что счета выставляются на основе размера отправленного артефакта, а не ZIP-файла.

Для отправки и скачивания артефактов сборки {% data variables.product.product_name %} предоставляет два действия. Дополнительные сведения см. в разделе {% ifversion fpt или ghec %}[actions/upload-artifact и download-artifact actions](https://github.com/actions/upload-artifact){% else %} [](https://github.com/actions/download-artifact) `actions/upload-artifact` и `download-artifact` actions on {% data variables.location.product_location %}{% endif %}.

Совместное использование данных между заданиями:

* **Отправка файлов**. Присвойте отправляемому файлу имя и отправьте данные до завершения задания.
* **Скачивание файлов**. Скачивать можно только те артефакты, которые были отправлены во время выполнения того же рабочего процесса. При скачивании файла можно задавать ссылку на него по имени.

Шаги задания размещаются в общей среде на компьютере средства выполнения, но выполняются в отдельных процессах. Для передачи данных между шагами задания можно использовать входные и выходные данные. Дополнительные сведения о входных и выходных данных см. в разделе [Синтаксис метаданных для {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions).

{% ifversion actions-caching %}

{% data reusables.actions.comparing-artifacts-caching %}

Дополнительные сведения см. в разделе [Кэширование зависимостей для ускорения рабочих процессов](/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching).

{% endif %}

## Отправка артефактов сборки и тестирования

Вы можете создать рабочий процесс непрерывной интеграции для сборки и тестирования кода. Дополнительные сведения о выполнении непрерывной интеграции с помощью {% data variables.product.prodname_actions %} см. в разделе [Сведения о непрерывной интеграции](/articles/about-continuous-integration).

Выходные данные сборки и тестирования кода часто содержат файлы, которые можно использовать для отладки сбоев тестов и рабочего кода, который можно развернуть. Вы можете настроить рабочий процесс для сборки и тестирования отправляемого в репозиторий кода, а также получения отчетов об успешном или неудачном выполнении. Вы можете отправить выходные данные сборки и тестирования для развертывания, отладки неудачно завершенных тестов или сбоев, а также для просмотра охвата набора тестов.

Для отправки артефактов можно использовать действие `upload-artifact`. При отправке артефакта можно указать любое количество файлов или каталогов. Также можно исключить конкретные файлы или каталоги и использовать шаблоны с подстановочными знаками. Рекомендуется указать имя артефакта. Если это не сделать, по умолчанию будет использоваться имя `artifact`. Дополнительные сведения о синтаксисе см. в действии {% ifversion fpt или ghec %}[actions/upload-artifact](https://github.com/actions/upload-artifact) {% else %} `actions/upload-artifact` для {% данных variables.location.product_location %}{% endif %}.

### Пример

Например, репозиторий или веб-приложение может содержать файлы SASS и TypeScript, которые необходимо преобразовать в CSS и JavaScript. Если в соответствии с конфигурацией сборки скомпилированные файлы записываются в каталог `dist`, в случае успешного завершения всех тестов файлы будут развернуты в каталоге `dist` на сервере веб-приложений.

```
|-- hello-world (repository)
|   └── dist
|   └── tests
|   └── src
|       └── sass/app.scss
|       └── app.ts
|   └── output
|       └── test
|   
```

В этом примере показано, как создать для проекта Node.js рабочий процесс, который создает код в каталоге `src` и выполняет тесты в каталоге `tests`. Можно предположить, что при выполнении `npm test` в каталоге `output/test/` будет создан отчет об объеме протестированного кода с именем `code-coverage.html`.

Рабочий процесс отправляет рабочие артефакты в каталог `dist`, исключая при этом все файлы Markdown. Также в виде другого артефакта отправляется отчет `code-coverage.html`.

```yaml{:copy}
name: Node CI

on: [push]

jobs:
  build_and_test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: npm install, build, and test
        run: |
          npm install
          npm run build --if-present
          npm test
      - name: Archive production artifacts
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: dist-without-markdown
          path: |
            dist
            !dist/**/*.md
      - name: Archive code coverage results
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: code-coverage-report
          path: output/test/code-coverage.html
```

## Настройка пользовательского периода хранения артефакта

Вы можете определить пользовательский период хранения для отдельных артефактов, создаваемых рабочим процессом. При создании нового артефакта в рамках рабочего процесса можно использовать значение `retention-days` с действием `upload-artifact`. В этом примере показано, как установить 5-дневный пользовательский период хранения для артефакта с именем `my-artifact`:

```yaml{:copy}
  - name: 'Upload Artifact'
    uses: {% data reusables.actions.action-upload-artifact %}
    with:
      name: my-artifact
      path: my_file.txt
      retention-days: 5
```

Значение `retention-days` не может превышать установленное для репозитория, организации или предприятия ограничение на продолжительность хранения.

## Скачивание или удаление артефактов

С помощью действия [`download-artifact`](https://github.com/actions/download-artifact) во время выполнения рабочего процесса можно скачивать артефакты, которые ранее были отправлены в том же рабочем процессе.

После завершения выполнения рабочего процесса можно скачать или удалить артефакты на {% data variables.product.prodname_dotcom %} или с помощью REST API. Дополнительные сведения см. в разделах [Скачивание артефактов рабочего процесса](/actions/managing-workflow-runs/downloading-workflow-artifacts), [Удаление артефактов рабочего процесса](/actions/managing-workflow-runs/removing-workflow-artifacts) и [REST API артефактов](/rest/reference/actions#artifacts).

### Скачивание артефактов во время выполнения рабочего процесса

С помощью действия [`actions/download-artifact`](https://github.com/actions/download-artifact) во время выполнения рабочего процесса можно скачать ранее отправленные артефакты.

{% note %}

**Примечание**. Скачивать можно только те артефакты, которые были отправлены во время выполнения того же рабочего процесса.

{% endnote %}

Чтобы скачать отдельный артефакт, укажите его имя. Если не указать имя артефакта при скачивании, по умолчанию будет использоваться имя `artifact`.

```yaml
- name: Download a single artifact
  uses: {% data reusables.actions.action-download-artifact %}
  with:
    name: my-artifact
```

Также во время выполнения рабочего процесса можно скачать все артефакты, не указывая имя. Это удобно при работе с большим количеством артефактов.

```yaml
- name: Download all workflow run artifacts
  uses: {% data reusables.actions.action-download-artifact %}
```

При скачивании всех артефактов во время выполнения рабочего процесса для каждого артефакта создается каталог с его именем.

Дополнительные сведения о синтаксисе см. в действии {% ifversion fpt или ghec %}[actions/download-artifact](https://github.com/actions/download-artifact) {% else %} `actions/download-artifact` для {% данных variables.location.product_location %}{% endif %}.

## Передача данных между заданиями в рабочем процессе

Действия `upload-artifact` и `download-artifact` позволяют совместно использовать данные между заданиями в рабочем процессе. В этом примере рабочего процесса показано, как передавать данные между заданиями в одном рабочем процессе. Дополнительные сведения см. в разделе {% ifversion fpt или ghec %}[actions/upload-artifact и download-artifact actions](https://github.com/actions/upload-artifact){% else %} [](https://github.com/actions/download-artifact) `actions/upload-artifact` и `download-artifact` actions on {% data variables.location.product_location %}{% endif %}.

Задания, зависящие от артефактов предыдущего задания, должны дожидаться его успешного завершения. В этом рабочем процессе используется ключевое слово `needs`, чтобы обеспечить последовательное выполнение заданий `job_1`, `job_2` и `job_3`. Например, требование использовать задание `job_1` в задании `job_2`, задается с помощью синтаксиса `needs: job_1`.

Задание 1 выполняет следующие действия:
- Выполняет математические вычисления и сохраняет результат в текстовый файл с именем `math-homework.txt`.
- С помощью действия `upload-artifact` отправляет файл `math-homework.txt` с именем артефакта `homework`.

Используя результаты предыдущего задания, задание 2 выполняет следующие действия:
- Скачивает артефакт `homework`, отправленный в предыдущем задании. По умолчанию действие `download-artifact` скачивает артефакты в каталог рабочей области, где выполняется шаг. С помощью входного параметра `path` можно указать другой каталог для скачивания.
- Считывает значение в файле `math-homework.txt`, выполняет математические вычисления и снова сохраняет результат в файл `math-homework.txt`, перезаписывая его содержимое.
- Отправляет файл `math-homework.txt`. При этом ранее отправленный артефакт с тем же именем перезаписывается.

Задание 3 отображает отправленный в предыдущем задании результат, выполняя следующие действия:
- Скачивает артефакт `homework`.
- Выводит результат вычисления в журнал.

В этом примере рабочего процесса вычисляется выражение `(3 + 7) x 9 = 90`.

```yaml{:copy}
name: Share data between jobs

on: [push]

jobs:
  job_1:
    name: Add 3 and 7
    runs-on: ubuntu-latest
    steps:
      - shell: bash
        run: |
          expr 3 + 7 > math-homework.txt
      - name: Upload math result for job 1
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: homework
          path: math-homework.txt

  job_2:
    name: Multiply by 9
    needs: job_1
    runs-on: windows-latest
    steps:
      - name: Download math result for job 1
        uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: homework
      - shell: bash
        run: |
          value=`cat math-homework.txt`
          expr $value \* 9 > math-homework.txt
      - name: Upload math result for job 2
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: homework
          path: math-homework.txt

  job_3:
    name: Display results
    needs: job_2
    runs-on: macOS-latest
    steps:
      - name: Download math result for job 2
        uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: homework
      - name: Print the final result
        shell: bash
        run: |
          value=`cat math-homework.txt`
          echo The result is $value
```

При выполнении рабочего процесса архивируются все создаваемые им артефакты. Дополнительные сведения о скачивании архивных артефактов см. в разделе [Скачивание артефактов рабочего процесса](/actions/managing-workflow-runs/downloading-workflow-artifacts).
![Рабочий процесс, в котором данные передаются между заданиями для выполнения математических вычислений](/assets/images/help/repository/passing-data-between-jobs-in-a-workflow-updated.png)

{% ifversion fpt or ghec %}

## Дополнительные материалы

- [Управление выставлением счетов для {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions).

{% endif %}

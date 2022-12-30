---
title: Поиск и настройка действий
shortTitle: Find and customize actions
intro: 'Важнейшим структурным элементом рабочего процесса являются действия. Рабочий процесс может содержать действия, созданные в сообществе, а также вы можете создать собственные действия непосредственно в репозитории своего приложения. В этом руководстве описывается обнаружение, использование и настройка действий.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-github-marketplace-actions
  - /actions/automating-your-workflow-with-github-actions/using-actions-from-github-marketplace-in-your-workflow
  - /actions/getting-started-with-github-actions/using-actions-from-github-marketplace
  - /actions/getting-started-with-github-actions/using-community-workflows-and-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Fundamentals
ms.openlocfilehash: 87557d4e057d1886d01e978adf56cdc71a390fdf
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009988'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Обзор

Действия, используемые в рабочем процессе, можно определять в следующих местах:

- в том же репозитории, в котором находится файл рабочего процесса;{% ifversion internal-actions %}
- во внутреннем репозитории в той же корпоративной учетной записи, настроенной для предоставления доступа к рабочим процессам;{% endif %}
- в любом общедоступном репозитории;
- в опубликованном образе контейнера Docker в Docker Hub.

{% data variables.product.prodname_marketplace %} — это основное место для поиска действий, созданных сообществом {% data variables.product.prodname_dotcom %}.{% ifversion fpt or ghec %} На [странице {% data variables.product.prodname_marketplace %}](https://github.com/marketplace/actions/) можно фильтровать действия по категориям. {% endif %}

{% data reusables.actions.enterprise-marketplace-actions %}

{% ifversion fpt or ghec %}

## Просмотр действий Marketplace в редакторе рабочих процессов

Вы искать находить и просматривать действия непосредственно в редакторе рабочих процессов репозитория. На боковой панели можно найти конкретное действие, просмотреть рекомендуемые действия и рекомендуемые категории. Вы также можете просмотреть количество звездочек, полученных действием от сообщества {% data variables.product.prodname_dotcom %}.

1. В репозитории перейдите к файлу рабочего процесса, который необходимо изменить.
1. В правом верхнем углу представления файла щелкните {% octicon "pencil" aria-label="The edit icon" %}, чтобы открыть редактор рабочих процессов.
   ![Кнопка изменения файла рабочего процесса](/assets/images/help/repository/actions-edit-workflow-file.png)
1. Справа от редактора используйте боковую панель {% data variables.product.prodname_marketplace %} для просмотра действий. Наличие значка {% octicon "verified" aria-label="The verified badge" %} у действия означает, что создатель действия является подтвержденной партнерской организацией на {% data variables.product.prodname_dotcom %}.
   ![Боковая панель рабочих процессов Marketplace](/assets/images/help/repository/actions-marketplace-sidebar.png)

## Добавление действия в рабочий процесс

Вы можете добавить действие в рабочий процесс, сославшись на действие в файле рабочего процесса. 

Действия, на которые ссылаются ваши рабочие процессы {% data variables.product.prodname_actions %}, можно просмотреть в виде зависимостей в графе зависимостей репозитория, содержащего рабочие процессы. Дополнительные сведения см. в разделе [Сведения о графе зависимостей](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph).

{% ifversion fpt или ghec или ghes > 3.4 или ghae > 3,4 %}

{% note %}

**Примечание**. Для повышения безопасности перенаправления для действий в {% data variables.product.prodname_actions %} являются нерекомендуемыми. Это означает, что при изменении владельца или имени репозитория действия все рабочие процессы, в которых используется это действие с предыдущим именем, будут завершаться сбоем.

{% endnote %}

{% endif %}

### Добавление действия из {% data variables.product.prodname_marketplace %}

На странице со списком действий приводятся версия действия и синтаксис рабочего процесса, необходимый для использования действия. Чтобы обеспечить стабильность рабочего процесса даже при изменении действия, можно указывать версию действия, которую требуется использовать, с помощью номера тега GIT или Docker в файле рабочего процесса.

1. Перейдите к действию, которое необходимо использовать в рабочем процессе.
1. В разделе "Установка" щелкните {% octicon "clippy" aria-label="The edit icon" %}, чтобы скопировать синтаксис рабочего процесса.
   ![Просмотр списка действий](/assets/images/help/repository/actions-sidebar-detailed-view.png)
1. Вставьте синтаксис в качестве нового шага рабочего процесса. Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps).
1. Если действие требует предоставления входных данных, задайте их в рабочем процессе. Сведения о входных данных, которые могут потребоваться действию, см. в разделе [Использование входных и выходных данных с действием](/actions/learn-github-actions/finding-and-customizing-actions#using-inputs-and-outputs-with-an-action).

{% data reusables.dependabot.version-updates-for-actions %}

{% endif %}

### Добавление действия из того же репозитория

Если действие определено в том же репозитории, в котором оно используется в файле рабочего процесса, можно сослаться на действие с помощью синтаксиса `{owner}/{repo}@{ref}` или `./path/to/dir` в файле рабочего процесса.

Пример структуры файла репозитория:

```
|-- hello-world (repository)
|   |__ .github
|       └── workflows
|           └── my-first-workflow.yml
|       └── actions
|           |__ hello-world-action
|               └── action.yml
```

Пример файла рабочего процесса:

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # This step checks out a copy of your repository.
      - uses: {% data reusables.actions.action-checkout %}
      # This step references the directory that contains the action.
      - uses: ./.github/actions/hello-world-action
```

Файл `action.yml` применяется для предоставления метаданных для действия. Сведения о содержимом этого файла см. в разделе [Синтаксис метаданных для GitHub Actions](/actions/creating-actions/metadata-syntax-for-github-actions).

### Добавление действия из другого репозитория

Если действие определено не в том же репозитории, где находится файл рабочего процесса, сослаться на действие можно с помощью синтаксиса `{owner}/{repo}@{ref}` в файле рабочего процесса.

Действие должно храниться в общедоступном репозитории{% ifversion internal-actions %} или во внутреннем репозитории, которому разрешен доступ к рабочим процессам. Дополнительные сведения см. в разделе [Общий доступ к действиям и рабочим процессам в организации](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise).{% else %}.{% endif %}

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: {% data reusables.actions.action-setup-node %}
```

### Ссылка на контейнер в Docker Hub

Если действие определено в опубликованном образе контейнера Docker в Docker Hub, на действие необходимо ссылаться с помощью синтаксиса `docker://{image}:{tag}` в файле рабочего процесса. Чтобы защитить код и данные, настоятельно рекомендуется проверить целостность образа контейнера Docker из Docker Hub перед его использованием в рабочем процессе.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://alpine:3.8
```

Некоторые примеры действий Docker см. в разделах [Рабочий процесс Docker-image.yml](https://github.com/actions/starter-workflows/blob/main/ci/docker-image.yml) и [Создание действия контейнера Docker](/articles/creating-a-docker-container-action).


## Применение управления выпусками для пользовательских действий

Создатели действия сообщества могут использовать теги, ветви или значения SHA для управления выпусками действия. Как и в случае с любой зависимостью, следует указать версию действия, которую необходимо использовать, в зависимости от того, насколько приемлемо автоматическое принятие изменений действия.

Версия действия указывается в файле рабочего процесса. Узнать, какой подход к управлению выпусками применяется и какой тег, ветвь или значение SHA следует использовать, можно в документации по действию.

{% note %}

**Примечание**. При использовании сторонних действий рекомендуется применять значение SHA. Дополнительные сведения см. в разделе [Усиление безопасности GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#using-third-party-actions).

{% endnote %}

### Использование тегов

Теги помогают решить, когда следует переключаться между основными и дополнительными версиями, но они являются временными и могут перемещаться или удаляться ответственным лицом. В этом примере показано, как нацелиться на действие, помеченное как `v1.0.1`:

```yaml
steps:
  - uses: actions/javascript-action@v1.0.1
```

### Использование значений SHA

Если требуется более надежное управление версиями, следует использовать значение SHA, связанное с версией действия. Значения SHA являются неизменяемыми и, следовательно, более надежными, чем теги или ветви. Однако этот подход означает, что вы не будете автоматически получать обновления для действия, включая важные исправления ошибок и обновления системы безопасности. Необходимо использовать полное значение SHA фиксации, а не сокращенное. В этом примере используется SHA действия:

```yaml
steps:
  - uses: actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89
```

### Использование ветвей

Указание целевой ветви для действия означает, что всегда будет использоваться версия в этой ветви. Этот подход может вызвать проблемы, если обновление ветви включает критические изменения. В этом примере используется ветвь с именем `@main`:

```yaml
steps:
  - uses: actions/javascript-action@main
```

Дополнительные сведения см. в разделе [Использование управления выпусками для действий](/actions/creating-actions/about-actions#using-release-management-for-actions).

## Использование входных и выходных данных с действием

Действие часто принимает входные данные или требует их и создает выходные данные, которые можно использовать. Например, действие может требовать указать путь к файлу, имя метки или другие данные, которые будут использоваться в процессе обработки действия.

Чтобы просмотреть входные и выходные данные действия, проверьте `action.yml` или `action.yaml` в корневом каталоге репозитория.

В этом примере файла `action.yml` ключевое слово `inputs` определяет обязательные входные данные `file-path` и включает значение по умолчанию, которое будет использоваться, если значение не указано. Ключевое слово `outputs` определяет выходные данные `results-file`, то есть файл с результатами.

```yaml
name: "Example"
description: "Receives file and generates output"
inputs:
  file-path: # id of input
    description: "Path to test script"
    required: true
    default: "test-file.js"
outputs:
  results-file: # id of output
    description: "Path to results file"
```

{% ifversion ghae %}

## Использование действий, включенных в {% data variables.product.prodname_ghe_managed %}

По умолчанию в {% data variables.product.prodname_ghe_managed %} можно использовать большинство официальных действий, созданных на {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Использование действий в {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/using-actions-in-github-ae).
{% endif %}

## Дальнейшие действия

Дальнейшие сведения о {% data variables.product.prodname_actions %} см. в разделе [Основные функции {% data variables.product.prodname_actions %}](/actions/learn-github-actions/essential-features-of-github-actions).

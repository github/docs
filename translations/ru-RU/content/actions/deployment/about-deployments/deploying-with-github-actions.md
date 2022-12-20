---
title: Развертывание с помощью GitHub Actions
intro: 'Узнайте, как управлять развертываниями с помощью таких функций, как среды и параллелизм.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/deployment/deploying-with-github-actions
topics:
  - CD
shortTitle: Deploy with GitHub Actions
ms.openlocfilehash: 1e832b9fb4094009bc9b977e1ee2ab937839db41
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098423'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

{% data variables.product.prodname_actions %} предлагает возможности, позволяющие управлять развертываниями. Можно сделать следующее:

- Активировать рабочие процессы с различными событиями.
- Настроить среды для задания правил, прежде чем задание сможет продолжить работу, и ограничить доступ к секретам.
- Использовать параллелизм для управления количеством развертываний, выполняемых за раз.

Дополнительные сведения о непрерывном развертывании см. в статье [Сведения о непрерывном развертывании](/actions/deployment/about-continuous-deployment).

## Предварительные требования

Требуются знания синтаксиса для {% data variables.product.prodname_actions %}. Дополнительные сведения см. в статье со [сведениями о {% data variables.product.prodname_actions %}](/actions/learn-github-actions).

## Активация развертывания

Для активации рабочего процесса развертывания можно использовать различные события. Некоторые из наиболее распространенных вариантов: `pull_request`, `push` и `workflow_dispatch`.

Например, рабочий процесс со следующими триггерами выполняется каждый раз, когда:

- Есть отправка в ветвь `main`.
- Запрос на вытягивание, предназначенный для ветви `main`, открывается, синхронизируется или открывается повторно.
- Кто-то активирует его вручную.

```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  workflow_dispatch:
```

Дополнительные сведения см. в разделе [События, активирующие рабочие процессы](/actions/reference/events-that-trigger-workflows).

## Использование сред

{% data reusables.actions.about-environments %}

## Использование параллелизма

Параллелизм обеспечивает одновременное выполнение только одного задания или процесса с использованием одной группы параллелизма. Параллелизм нужен для того, чтобы в среде одновременно выполнялось не более одного развертывания и было не более одного ожидающего развертывания.

{% note %}

**Примечание.** `concurrency` и `environment` не подключены. Значением параллелизма может быть любая строка. Это не обязательно должно быть имя среды. Кроме того, если та же среда используется для другого рабочего процесса, но не указывается параллелизм, этот рабочий процесс не будет подчиняться правилам параллелизма.

{% endnote %}

Например, если выполняется следующий рабочий процесс, он будет приостановлен с состоянием `pending`, в случае выполнения задания или рабочего процесса, использующего группу параллелизма `production`. Кроме этого, будет отменено любое задание или рабочий процесс, использующий группу параллелизма `production` и имеющий состояние `pending`. Это означает, что в нем будет не более одного запущенного и одного ожидающего задания или рабочего процесса, в котором используется группа параллелизма `production`.

```yaml
name: Deployment

concurrency: production

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

Вы также можете указать параллелизм на уровне задания. Это позволит продолжить выполнение других заданий в рабочем процессе, даже если этим параллельным заданием является `pending`.

```yaml
name: Deployment

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    concurrency: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

Вы также можете использовать `cancel-in-progress`, чтобы отменить задание или рабочий процесс, которые сейчас выполняются в той же группе параллелизма.

```yaml
name: Deployment

concurrency: 
  group: production
  cancel-in-progress: true

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

Руководство по написанию действий по развертыванию см. в статье [Поиск примеров развертывания](#finding-deployment-examples).

## Просмотр журнала развертывания

Когда рабочий процесс {% data variables.product.prodname_actions %} выполняет развертывание в среде, эта среда отображается на главной странице репозитория. Дополнительные сведения о просмотре развертываний в средах см. в разделе [Просмотр журнала развертывания](/developers/overview/viewing-deployment-history).

## Мониторинг выполнения рабочего процесса

Во время каждого выполнения рабочего процесса создается граф в режиме реального времени, иллюстрирующий ход выполнения. Этот граф можно использовать для мониторинга и отладки развертываний. Дополнительные сведения см. в статье [Использование графа визуализации](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph).

Кроме этого, вы можете просматривать журналы каждого выполнения рабочего процесса, а также журнал запусков рабочего процесса. Дополнительные сведения см. в статье "[Просмотр журнала выполнения рабочего процесса](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)".

## Отслеживание развертываний с помощью приложений

{% ifversion fpt или ghec %} Если ваша личная учетная запись или организация на {% ifversion ghae %}{% данных variables.product.product_name %}{% else %}{% данных variables.location.product_location %}{% endif %} интегрирована с Microsoft Teams или Slack, вы можете отслеживать развертывания, использующие среды с помощью Microsoft Teams или Slack. Например, вы можете через приложение получать уведомления, когда развертывание ожидает утверждения, развертывание утверждено или когда изменяется состояние развертывания. Дополнительные сведения об интеграции Microsoft Teams или Slack см. в статье [Расширения и интеграции GitHub](/github/customizing-your-github-workflow/exploring-integrations/github-extensions-and-integrations#team-communication-tools).
{% endif %}

Вы также можете создать приложение, использующее веб-перехватчики развертываний и их состояния для отслеживания развертываний. {% data reusables.actions.environment-deployment-event %} Дополнительные сведения см. в статьях [Приложения](/developers/apps) и [События веб-перехватчика и полезные данные](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment).

{% ifversion fpt or ghes or ghec %}

## Выбор средства выполнения тестов

Вы можете выполнять рабочий процесс развертывания в средствах выполнения тестов, размещенных в {% data variables.product.company_short %} или в локальных средствах выполнения. Трафик от средств выполнения тестов, размещенных в {% data variables.product.company_short %}, может поступать из [широкого диапазона сетевых адресов](/rest/reference/meta#get-github-meta-information). Если вы выполняете развертывание во внутренней среде, а ваша компания ограничивает внешний трафик частными сетями, рабочие процессы {% data variables.product.prodname_actions %}, выполняемые в средствах выполнения тестов, размещенных в {% data variables.product.company_short %}, могут не иметь возможности взаимодействовать с внутренними службами или ресурсами. Чтобы решить эту проблему, вы можете разместить собственные средства выполнения тестов. Дополнительные сведения см. в статьях [Сведения о локальных средствах выполнения тестов](/actions/hosting-your-own-runners/about-self-hosted-runners) и [Сведения о средствах выполнения тестов, размещенных в GitHub](/actions/using-github-hosted-runners/about-github-hosted-runners).

{% endif %}

## Отображение эмблемы состояния

Для отображения состояния рабочего процесса развертывания можно использовать эмблему состояния. {% data reusables.repositories.actions-workflow-status-badge-intro %}

Дополнительные сведения см. в статье [Добавление индикатора состояния рабочего процесса](/actions/managing-workflow-runs/adding-a-workflow-status-badge).

## Поиск примеров развертывания

В этой статье продемонстрированы возможности {% data variables.product.prodname_actions %}, которые можно добавить в рабочие процессы развертывания.

{% data reusables.actions.cd-templates-actions %}

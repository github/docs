---
title: Общие сведения о GitHub Actions
shortTitle: Understand GitHub Actions
intro: 'Изучите основы {% data variables.product.prodname_actions %}, включая основные понятия и основную терминологию.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/getting-started-with-github-actions/core-concepts-for-github-actions
  - /actions/learn-github-actions/introduction-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
ms.openlocfilehash: f2937ba88b4e47f59e9b845c7c87b7de9f4cc2f3
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093652'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Обзор

{% data reusables.actions.about-actions %}  Вы можете создавать рабочие процессы для построения и тестирования каждого запроса на вытягивание в репозиторий или развертывания объединенных запросов на вытягивание в рабочую среду.

{% data variables.product.prodname_actions %} выходит за рамки только DevOps и позволяет запускать рабочие процессы, когда в репозитории происходят определенные события. Например, можно запустить рабочий процесс для автоматического добавления соответствующих меток, когда кто-то создает проблему в репозитории.

{% ifversion fpt or ghec %}

{% data variables.product.prodname_dotcom %} предоставляет виртуальные машины Linux, Windows и macOS для выполнения рабочих процессов, либо вы можете разместить собственные локальные средства выполнения в собственном центре обработки данных или облачной инфраструктуре.

{% elsif ghes or ghae %}

Для запуска рабочих процессов для {% данных variables.location.product_location %}необходимо разместить собственные виртуальные машины Linux, Windows или macOS. {% data reusables.actions.self-hosted-runner-locations %}

{% endif %}

{% ifversion ghec or ghes or ghae %}

Дополнительные сведения об использовании {% data variables.product.prodname_actions %} на предприятии см. в статье с [вводными сведениями о {% data variables.product.prodname_actions %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise).

{% endif %}

## Компоненты {% data variables.product.prodname_actions %}

Для _рабочего процесса_ {% data variables.product.prodname_actions %} можно настроить активацию при возникновении _события_ в репозитории, например когда открывается запрос на вытягивание или создается проблема.  Рабочий процесс содержит одно или несколько _заданий_, которые могут выполняться последовательно или параллельно.  Каждое задание будет выполняться в собственном _средстве выполнения_ виртуальной машины или в контейнере. Оно имеет один или несколько _этапов_, которые выполняют определяемый вами скрипт, или выполняют _действие_, которое является многократно используемым расширением для упрощения рабочего процесса.

![Обзор рабочего процесса](/assets/images/help/images/overview-actions-simple.png)

### Рабочие процессы

{% data reusables.actions.about-workflows-long %}

{% ifversion fpt или ghes > 3.3 или ghae > 3.3 или ghec %} Вы можете ссылаться на рабочий процесс в другом рабочем процессе, см. раздел "[Повторное использование рабочих процессов](/actions/learn-github-actions/reusing-workflows)". {% endif %}

Дополнительные сведения о рабочих процессах см. в статье "[Использование рабочих процессов](/actions/using-workflows)".

### События

Событие — это определенное действие в репозитории, которое активирует выполнение рабочего процесса. Например, источником действия может быть {% data variables.product.prodname_dotcom %}, когда кто-то создает запрос на вытягивание, открывает проблему или отправляет фиксацию в репозиторий.  Кроме того, можно активировать выполнение рабочего процесса по расписанию, [разместив его в REST API](/rest/reference/repos#create-a-repository-dispatch-event), или вручную.

Полный список событий, которые можно использовать для активации рабочих процессов, см. в статье [События, которые активируют рабочие процессы](/actions/reference/events-that-trigger-workflows).

### Задания

Задание — это ряд _этапов_, выполняемых в одном и том же средстве выполнения.  Каждый этап — это скрипт оболочки, который будет выполняться, или _действие_, которое будет выполняться.  Этапы выполняются по порядку и зависят друг от друга.  Так как каждый этап выполняется в одном средстве выполнения, данные нескольких этапов могут быть общими.  Например, может быть этап, который создает приложение, за ним следует этап, который проверяет созданное приложение.

Можно настроить зависимости задания от других заданий. По умолчанию задания не имеют зависимостей и выполняются параллельно друг с другом.  Когда задание становится зависимым от другого задания, оно будет ждать завершения зависимого задания, прежде чем сможет начать выполнение.  Например, у вас может быть несколько заданий сборки для различных архитектур без зависимостей, а также задание упаковки, зависящее от этих заданий.  Задания сборки будут выполняться параллельно, а когда все они успешно завершатся, будет запущено задание упаковки.

Дополнительные сведения о заданиях см. в статье "[Использование заданий](/actions/using-jobs)".

### Действия

_Действие_ — это пользовательское приложение для платформы {% data variables.product.prodname_actions %}, которое выполняет сложную, но часто повторяющуюся задачу.  Действие позволяет сократить объем повторяющегося кода, написанного в файлах рабочего процесса.  Действие может извлечь репозиторий Git из {% data variables.product.prodname_dotcom %}, настроить правильную цепочку инструментов для среды сборки или настроить проверку подлинности для поставщика облачных служб.

Можно написать собственные действия или найти действия для использования в рабочих процессах в {% data variables.product.prodname_marketplace %}.

{% data reusables.actions.internal-actions-summary %}

Дополнительные сведения см. в статье "[Создание действий](/actions/creating-actions)".

### Средства выполнения

{% data reusables.actions.about-runners %}Каждое средство выполнения может выполнять одно задание за раз. {% ifversion ghes or ghae %} Необходимо разместить собственные средства выполнения для {% data variables.product.product_name %}. {% elsif fpt or ghec %}{% data variables.product.company_short %} предоставляет средства выполнения Ubuntu Linux, Microsoft Windows и macOS для выполнения рабочих процессов. Каждый рабочий процесс выполняется на новой подготовленной виртуальной машине. {% ifversion actions-hosted-runners %} {% data variables.product.prodname_dotcom %} также предлагает {% data variables.actions.hosted_runner %}, которые доступны в более крупных конфигурациях. Дополнительные сведения см. в разделе [Использование {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/using-larger-runners). {% endif %} Если необходима другая операционная система или требуется определенная конфигурация оборудования, можно разместить собственные средства выполнения.{% endif %} Дополнительные сведения{% ifversion fpt or ghec %} о локально размещенных средствах выполнения{% endif %} см. в статье [Размещение собственных средств выполнения](/actions/hosting-your-own-runners).

{% data reusables.actions.workflow-basic-example-and-explanation %}

## Дальнейшие действия

{% данных reusables.actions.onboarding-next-steps %}

## Обращение в службу поддержки

{% data reusables.actions.contacting-support %}

{% ifversion ghec or ghes or ghae %}
## Дополнительные материалы

- [Сведения о {% data variables.product.prodname_actions %} для предприятий](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises) {% endif %}

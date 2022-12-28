---
title: Создание проверки работоспособности для предприятия
intro: 'Вы можете получить представление об общем состоянии работоспособности и запросах Git и API для {% данных variables.location.product_location %} путем создания проверки работоспособности.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
product: '{% data reusables.gated-features.generated-health-checks %}'
ms.openlocfilehash: 5b03c307c474d18c4f4e2a4891103759e9f8195e
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098775'
---
{% note %}

**Примечание.** Создание проверки работоспособности в настоящее время доступно в бета-версии для {% data variables.product.prodname_ghe_server %}, но это может измениться.

{% endnote %}

## Сведения о созданных проверках работоспособности

Вы можете создать пакет поддержки для {% данных variables.location.product_location %}, который содержит много данных, таких как файлы диагностики и журналов. Чтобы проанализировать и интерпретировать эти данные, можно создать проверку работоспособности. Дополнительные сведения о пакетах поддержки см. в статье [Предоставление данных для {% data variables.contact.github_support %}](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles).

Проверка работоспособности предоставляет следующие сведения о {% данных variables.location.product_location %}.
- Общие сведения о работоспособности {% данных variables.location.product_location %}, таких как состояние обновления, хранение и потребление рабочих мест на лицензировании
- Раздел безопасности, посвященный изоляции поддомена и проверке подлинности пользователей.
- Анализ запросов Git с подробными сведениями о самых загруженных репозиториях и пользователях Git. 
- Анализ запросов API, включая самое загруженное время, наиболее часто запрашиваемые конечные точки и самые активные вызывающие объекты.

Чтобы создать проверку работоспособности для {% data variables.product.prodname_ghe_cloud %}, обратитесь к {% data variables.contact.github_support %}. Дополнительные сведения см. в разделе [Создание запроса в службу поддержки](/support/contacting-github-support/creating-a-support-ticket).

## Создание проверки работоспособности

Перед генерированием проверки работоспособности необходимо создать пакет поддержки. Дополнительные сведения см. в разделе [Предоставление данных для {% data variables.contact.github_support %}](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles).

1. Перейдите на [{% data variables.contact.support_portal %}](https://support.github.com/).
2. В правом верхнем углу страницы щелкните **Премиум**.

   ![Снимок экрана: ссылка "Премиум" в заголовке портала поддержки GitHub.](/assets/images/enterprise/support/support-portal-header-premium.png)
   
3. Справа от **проверок работоспособности** нажмите кнопку **Request Health Check** (Запросить проверку работоспособности).

   ![Снимок экрана: кнопка Request Health Check (Запросить проверку работоспособности).](/assets/images/enterprise/support/support-portal-request-health-check.png)
   
4. В разделе Select an enterprise account (Выбор учетной записи предприятия) выберите раскрывающееся меню и щелкните учетную запись предприятия.

   ![Снимок экрана: раскрывающееся меню с учетной записью предприятия.](/assets/images/enterprise/support/health-check-dialog-ea.png)
   
5. В разделе Upload a support bundle (Отправка пакета поддержки) нажмите кнопку **Chose File** (Выбрать файл) и выберите файл для отправки. Затем нажмите кнопку **Request Health Check** (Запросить проверку работоспособности).

   ![Снимок экрана: кнопки Choose file (Выбрать файл) и Request Health Check (Запросить проверку работоспособности).](/assets/images/enterprise/support/health-check-dialog-choose-file.png)
   

После запроса проверки работоспособности планируется задание для создания проверки работоспособности. В период от нескольких часов до одного дня созданная проверка работоспособности появится в разделе Health Checks (Проверки работоспособности) {% data variables.contact.support_portal %}.

![Снимок экрана: раздел Health Checks (Проверки работоспособности) {% data variables.contact.support_portal %}.](/assets/images/enterprise/support/support-portal-health-checks-section.png)

---
title: Сведения о непрерывной интеграции
intro: 'Вы можете создавать пользовательские рабочие процессы непрерывной интеграции (CI) непосредственно в репозитории {% data variables.product.prodname_dotcom %} с помощью {% data variables.product.prodname_actions %}.'
redirect_from:
  - /articles/about-continuous-integration
  - /github/automating-your-workflow-with-github-actions/about-continuous-integration
  - /actions/automating-your-workflow-with-github-actions/about-continuous-integration
  - /actions/building-and-testing-code-with-continuous-integration/about-continuous-integration
  - /actions/guides/about-continuous-integration
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - CI
shortTitle: Continuous integration
ms.openlocfilehash: d09fcbdb62a07f7c046cdf8f630798d7f15c957f
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097969'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Сведения о непрерывной интеграции

Непрерывная интеграция (CI) — это программная практика, которая требует частой фиксации кода в общем репозитории. Более частая фиксация кода позволяет быстрее обнаруживать ошибки и сокращает объем кода, который разработчику необходимо отлаживать при поиске источника ошибки. Частые обновления кода также упрощают слияние изменений, полученных от разных членов группы разработчиков программного обеспечения. Это отлично подходит для разработчиков, которые могут тратить больше времени на написание кода и меньше на отладку ошибок или разрешение конфликтов слияния.

При фиксации кода в репозитории можно непрерывно создавать и тестировать его, чтобы убедиться, что фиксация не приводит к ошибкам. Тесты могут включать анализаторы кода (которые проверяют форматирование стилей), проверки безопасности, объем протестированного кода, функциональные тесты и другие пользовательские проверки.

Для создания и тестирования кода требуется сервер. Можно создавать и тестировать обновления локально перед отправкой кода в репозиторий или использовать CI-сервер, который проверяет наличие новых фиксаций кода в репозитории.

## Сведения о непрерывной интеграции с использованием {% data variables.product.prodname_actions %}

{% ifversion ghae %}CI с использованием {% data variables.product.prodname_actions %} предлагает рабочие процессы, которые могут создавать код в репозитории и выполнять тесты. Рабочие процессы могут выполняться в системах выполнения, которые вы разместили. Дополнительные сведения см. в статье "[Сведения о локально размещенных средствах выполнения](/actions/hosting-your-own-runners/about-self-hosted-runners)."
{% else %} CI с использованием {% data variables.product.prodname_actions %} предлагает рабочие процессы, которые могут создавать код в репозитории и выполнять тесты. Рабочие процессы могут выполняться на виртуальных машинах, размещенных на {% data variables.product.prodname_dotcom %}, или на машинах, которые вы самостоятельно разместили. Дополнительные сведения см. в разделах [Сведения о средствах выполнения тестов, размещенных в {% data variables.product.prodname_dotcom %} средств выполнения](/actions/using-github-hosted-runners/about-github-hosted-runners) и [Сведения о локальных средствах выполнения](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners).
{% endif %}

Вы можете настроить рабочий процесс CI для запуска при возникновении события {% data variables.product.prodname_dotcom %} (например, при отправке нового кода в свой репозиторий), по заданному расписанию или при возникновении внешнего события с использованием веб-перехватчика репозитория.

{% data variables.product.product_name %} запускает ваши тесты CI и предоставляет результаты каждого теста в запросе на вытягивание, чтобы вы могли видеть, вызывает ли изменение в вашей ветви ошибку. Когда все тесты CI в рабочем процессе пройдены, внесенные вами изменения готовы к рассмотрению членом команды или слиянию. Если тест не пройден, причиной сбоя могло быть одно из ваших изменений.

Когда вы настраиваете CI в своем репозитории, {% data variables.product.product_name %} анализирует код в вашем репозитории и рекомендует рабочие процессы CI на основе языка и фреймворка в нем. Например, если вы используете [Node.js](https://nodejs.org/en/), {% data variables.product.product_name %} предложит начальный рабочий процесс, который устанавливает ваши пакеты Node.js и запускает тесты. Можно использовать начальный рабочий процесс CI, предложенный {% data variables.product.product_name %}, настроить предложенный начальный рабочий процесс или создать собственный файл рабочего процесса для запуска тестов CI.

![Снимок экрана: рекомендуемые начальные рабочие процессы непрерывной интеграции](/assets/images/help/repository/ci-with-actions-template-picker.png)

Помимо помощи в настройке рабочих процессов CI для вашего проекта, можно использовать {% data variables.product.prodname_actions %} для создания рабочих процессов на протяжении всего жизненного цикла разработки программного обеспечения. Например, вы можете использовать действия для развертывания, упаковки или выпуска проекта. Дополнительную информацию см. в разделе [Сведения о {% data variables.product.prodname_actions %}](/articles/about-github-actions).

Определение общих терминов см. в разделе [Основные понятия для {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions).

## Начальные рабочие процессы

{% data variables.product.product_name %} предлагает начальный рабочий процесс CI для различных языков и платформ.

Просмотрите полный список начального рабочего процесса CI, предлагаемого {% данных variables.product.company_short %} в репозитории {% ifversion fpt или ghec %}[actions/starter-workflows](https://github.com/actions/starter-workflows/tree/main/ci) repository{% else %} `actions/starter-workflows` в репозитории {% данных variables.location.product_location %}{%endif %}.

## Дополнительные материалы

{% ifversion fpt or ghec %}
- [Управление выставлением счетов {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions) {% endif %}

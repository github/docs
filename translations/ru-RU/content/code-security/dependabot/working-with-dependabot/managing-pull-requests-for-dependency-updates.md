---
title: Управление запросами на вытягивание для обновлений зависимостей
intro: 'Управлять запросами на вытягивание, созданными с помощью {% data variables.product.prodname_dependabot %}, можно практически так же, как и другими запросами на вытягивание, но существуют дополнительные параметры.'
redirect_from:
  - /github/administering-a-repository/managing-pull-requests-for-dependency-updates
  - /code-security/supply-chain-security/managing-pull-requests-for-dependency-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: how_to
topics:
  - Repositories
  - Version updates
  - Security updates
  - Pull requests
  - Dependencies
  - Vulnerabilities
shortTitle: Manage Dependabot PRs
ms.openlocfilehash: e33b176ced7d10ed70f4c521ce2c18be776a7f8e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147112321'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Сведения о запросах на вытягивание {% data variables.product.prodname_dependabot %}

{% data reusables.dependabot.pull-request-introduction %}

Когда {% data variables.product.prodname_dependabot %} создает запрос на вытягивание, вы получите уведомление выбранным методом для репозитория. Каждый запрос на вытягивание содержит подробные сведения о предлагаемых изменениях, взятых из диспетчера пакетов. Эти запросы на вытягивание соответствуют обычным проверкам и тестам, определенным в репозитории. {% ifversion fpt or ghec %}Кроме того, вы сможете увидеть оценку совместимости там, где есть достаточно сведений. Это также может помочь вам решить, следует ли объединять изменения. Дополнительные сведения об этой оценке см. в статье [Сведения о {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates).{% endif %}

Если вы управляете многими зависимостями, может потребоваться настроить конфигурацию для каждого диспетчера пакетов, чтобы запросы на вытягивание имели определенных рецензентов, уполномоченных и метки. Дополнительные сведения см. в статье [Настройка обновлений зависимостей](/github/administering-a-repository/customizing-dependency-updates).

## Просмотр запросов на вытягивание {% data variables.product.prodname_dependabot %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
1. Вы можете легко определить любые запросы на вытягивание для обновлений системы безопасности или версии.
    - Автором является {% ifversion fpt or ghec %}[dependabot](https://github.com/dependabot){% else %}dependabot{% endif %}, учетная запись бота, используемая {% data variables.product.prodname_dependabot %}.
    - По умолчанию они имеют метку `dependencies`.

## Выбор стратегии перемещения изменений из одной ветви в другую для запросов на вытягивание {% data variables.product.prodname_dependabot %}

По умолчанию{% data variables.product.prodname_dependabot %} автоматически перемещает изменения из одной ветви в другую для запросов на вытягивание, чтобы разрешить любые конфликты. Если вы предпочитаете обрабатывать конфликты слияния вручную, его можно отключить с помощью параметра `rebase-strategy`. Подробные сведения см. в статье [Параметры конфигурации для файла dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#rebase-strategy).

## Разрешение {% data variables.product.prodname_dependabot %} перемещения изменений из одной ветви в другую и принудительной отправки дополнительных фиксаций

По умолчанию {% data variables.product.prodname_dependabot %} перестанет перемещать запрос на вытягивание в другую ветвь после отправки дополнительных фиксаций. Чтобы разрешить {% data variables.product.prodname_dependabot %} принудительно отправлять фиксации, добавленные в свои ветви, включите в сообщение фиксации любую из следующих строк: `[dependabot skip]`, `[skip dependabot]`, `[dependabot-skip]` или `[skip-dependabot]` в нижнем или верхнем регистре.

## Управление запросами на вытягивание {% data variables.product.prodname_dependabot %} с помощью команд комментариев

{% data variables.product.prodname_dependabot %} отвечает на простые команды в комментариях. Каждый запрос на вытягивание содержит подробные сведения о командах, которые можно использовать для обработки запроса на вытягивание (например, для слияния, объединения, повторного открытия, закрытия или перемещения изменений из одной ветви в другую для запросов на вытягивание) в разделе "Команды и параметры {% data variables.product.prodname_dependabot %}". Цель состоит в том, чтобы как можно больше упростить рассмотрение этих автоматически созданных запросов на вытягивание.

Для запроса на вытягивание {% data variables.product.prodname_dependabot %} можно использовать любую из следующих команд.

- `@dependabot cancel merge` отменяет ранее запрошенное слияние.
- `@dependabot close` закрывает запрос на вытягивание и не позволяет {% data variables.product.prodname_dependabot %} воссоздать этот запрос на вытягивание. Вы можете получить тот же результат, закрыв запрос на вытягивание вручную.
- `@dependabot ignore this dependency` закрывает запрос на вытягивание и не позволяет {% data variables.product.prodname_dependabot %} создавать дополнительные запросы на вытягивание для этой зависимости (если вы не откроете запрос на вытягивание повторно или самостоятельно не обновите его до предлагаемой версии зависимости).
- `@dependabot ignore this major version` закрывает запрос на вытягивание и не позволяет {% data variables.product.prodname_dependabot %} создавать дополнительные запросы на вытягивание для этого основного номера версии (если вы не откроете запрос на вытягивание повторно или самостоятельно не обновите его до основного номера версии).
- `@dependabot ignore this minor version` закрывает запрос на вытягивание и не позволяет {% data variables.product.prodname_dependabot %} создавать дополнительные запросы на вытягивание для этого дополнительного номера версии (если вы не откроете запрос на вытягивание повторно или самостоятельно не обновите его до дополнительного номера версии).
- `@dependabot merge` объединяет запрос на вытягивание после прохождения тестов CI.
- `@dependabot rebase` перемещает изменения из одной ветви в другую для запроса на вытягивание.
- `@dependabot recreate` повторно создает запрос на вытягивание, перезаписывая все изменения, внесенные в запрос на вытягивание.
- `@dependabot reopen` повторно открывает запрос на вытягивание, если он закрыт.
- `@dependabot squash and merge` объединяет и выполняет слияние запроса на вытягивание после прохождения тестов CI.

{% data variables.product.prodname_dependabot %} отправит "большой палец вверх" для подтверждения команды и может оставить комментарий к запросу на вытягивание. Хотя {% data variables.product.prodname_dependabot %} обычно реагирует быстро, выполнение некоторых команд может занять несколько минут, если {% data variables.product.prodname_dependabot %} занят обработкой других обновлений или команд.

При выполнении любой команды для игнорирования зависимостей или версий {% data variables.product.prodname_dependabot %} сохраняет параметры репозитория централизованно. Хотя это решение является быстрым, для репозиториев с несколькими участниками лучше явно определить зависимости и версии, которые следует игнорировать в файле конфигурации. Это позволяет всем участникам легко узнать, почему определенная зависимость не обновляется автоматически. Дополнительные сведения см. в разделе [Параметры конфигурации для файла dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore).

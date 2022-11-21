---
title: Автоматическое слияние запроса на вытягивание
intro: 'Скорость разработки можно увеличить благодаря автоматическому слиянию запроса на вытягивание, которое будет автоматически выполняться при соблюдении всех требований к слиянию.'
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request
shortTitle: Merge PR automatically
ms.openlocfilehash: 07069657c870751849d3b7e80c7817f908c2bda5
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: '147770916'
---
## Сведения об автоматическом слиянии

Если включить автоматическое слияние для запроса на вытягивание, этот запрос будет объединяться автоматически при выполнении всех необходимых проверок, включая проверки состояния. Автоматическое слияние не предусматривает, чтобы вы ждали выполнения требований, поэтому вы можете перейти к другим задачам.

Прежде чем использовать автоматическое слияние с запросом на вытягивание, необходимо включить автоматическое слияние для репозитория. Дополнительные сведения см. в статье "[Управление автоматическим слиянием для запросов на вытягивание в репозитории](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository)".

Если после включения автоматического слияния для запроса на вытягивание кто-то без разрешений на запись в репозиторий отправит новые изменения в головную ветвь или переключит базовую ветвь запроса на вытягивание, автоматическое слияние будет отключено. Например, если средство поддержки включает автоматическое слияние для запроса на вытягивание из вилки, после отправки участником новых изменений в запрос на вытягивание автоматическое слияние отключается.

Вы можете оставить отзыв об автоматическом слиянии в [обсуждении {% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/pull-requests).

## Включение автоматического слияния

{% data reusables.pull_requests.auto-merge-requires-branch-protection %}

Пользователи с разрешениями на запись в репозиторий могут включить автоматическое слияние для запроса на вытягивание.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
1. В списке Pull Requests (Запросы на вытягивание) выберите тот, который нужно изменить.
1. При необходимости, чтобы указать метод слияния, выберите раскрывающееся меню **Enable auto-merge** (Включить автоматическое слияние), а затем щелкните метод слияния. Дополнительную информацию см. в статье [Сведения о слияниях запросов на вытягивание](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges).
  ![Раскрывающееся меню Enable auto-merge (Включить автоматическое слияние)](/assets/images/help/pull_requests/enable-auto-merge-drop-down.png)
1. Щелкните кнопку **Enable auto-merge** (Включить автоматическое слияние).
  ![Кнопка для включения автоматического слияния](/assets/images/help/pull_requests/enable-auto-merge-button.png) {% ifversion fpt %}
1. Если вы указали методы слияния со сжатием, введите сообщение и описание для фиксации, а также выберите адрес электронной почты, который вы хотите создать для фиксации слияния.
  ![Поля для ввода сообщения и описания для фиксации и выбора адреса электронной почты автора фиксации](/assets/images/help/pull_requests/pull-request-information-fields.png) {% note %}

  **Примечание.** Раскрывающееся меню электронной почты недоступно, если у вас включена конфиденциальность электронной почты или есть только один подтвержденный и видимый адрес электронной почты, связанный с вашей учетной записью {% data variables.product.company_short %}.

  {% endnote %} {% endif %} {% ifversion ghes or ghae or ghec %}
1. Если вы выбрали методы слияния со сжатием, введите сообщение и описание для фиксации.
   ![Поля для ввода сообщения и описания для фиксации](/assets/images/help/pull_requests/pull-request-information-fields-enterprise.png) {% endif %}
1. Щелкните кнопку **Confirm auto-merge** (Подтвердить автоматическое слияние).

## Отключение автоматического слияния

Пользователи с разрешениями на запись в репозиторий и авторы запросов на вытягивание могут отключить автоматическое слияние для запроса на вытягивание.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
1. В списке Pull Requests (Запросы на вытягивание) выберите тот, который нужно изменить.
1. В поле слияния нажмите кнопку **Disable auto-merge** (Отключить автоматическое слияние).
  ![Кнопка для отключения автоматического слияния](/assets/images/help/pull_requests/disable-auto-merge-button.png)

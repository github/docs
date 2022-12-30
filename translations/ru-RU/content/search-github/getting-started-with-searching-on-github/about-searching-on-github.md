---
title: Сведения о поиске в GitHub
intro: 'Наш встроенный поиск работает с множеством репозиториев, пользователей и строк кода в {% data variables.product.product_name %}.'
redirect_from:
  - /articles/using-the-command-bar
  - /articles/github-search-basics
  - /articles/search-basics
  - /articles/searching-github
  - /articles/advanced-search
  - /articles/about-searching-on-github
  - /github/searching-for-information-on-github/about-searching-on-github
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 58ecec218d8f8f0ee3d11afbf65debf7df72e811
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159104'
---
{% ifversion github-code-search %} {% примечание %}

  **Примечание.** {% data reusables.search.classic-search-code-search-note %}

  {% endnote %} {% endif %}

{% data reusables.search.you-can-search-globally %}

- Чтобы выполнить глобальный поиск по всем {% data variables.product.product_name %}, введите нужные данные в поле поиска в верхней части любой страницы и в раскрывающемся меню поиска выберите "Все {% data variables.product.prodname_dotcom %}".
- Чтобы выполнить поиск в определенном репозитории или организации, перейдите на страницу репозитория или организации, введите то, что ищете, в поле поиска в верхней части страницы и нажмите клавишу **ВВОД**.

{% note %}

**Примечания.**

{% ifversion fpt or ghes or ghec %}
- {% data reusables.search.required_login %}{% endif %}
- Сайты {% data variables.product.prodname_pages %} недоступны для поиска в {% data variables.product.product_name %}. Однако можно выполнить поиск исходного содержимого, если он существует в ветви репозитория по умолчанию, используя поиск кода. Дополнительные сведения см. в разделе [Поиск кода](/search-github/searching-on-github/searching-code). Дополнительные сведения о {% data variables.product.prodname_pages %} см. в разделе [Что такое GitHub Pages](/articles/what-is-github-pages/).
- В настоящее время поиск не поддерживает точное сопоставление.
- При поиске в файлах кода возвращаются только первые два результата в каждом файле.

{% endnote %}

После выполнения поиска в {% data variables.product.product_name %} вы можете отсортировать результаты или уточнить их, щелкнув один из языков на боковой панели. Дополнительные сведения см. в разделе [Сортировка результатов поиска](/search-github/getting-started-with-searching-on-github/sorting-search-results).

Поиск {% data variables.product.product_name %} использует кластер ElasticSearch для индексирования проектов каждый раз при отправке изменений в {% data variables.product.product_name %}. Проблемы и запросы на вытягивание индексируются при их создании или изменении.

## Типы поиска в {% data variables.product.prodname_dotcom %}

Вы можете искать следующие сведения во всех репозиториях, к которые вы можете получить доступ в {% data variables.location.product_location %}.

- [Репозитории](/search-github/searching-on-github/searching-for-repositories)
- [Разделы](/search-github/searching-on-github/searching-topics)
- [Проблемы и запросы на вытягивание](/search-github/searching-on-github/searching-issues-and-pull-requests){% ifversion fpt or ghec %}
- [Обсуждения](/search-github/searching-on-github/searching-discussions){% endif %}
- [Код](/search-github/searching-on-github/searching-code)
- [Фиксации](/search-github/searching-on-github/searching-commits)
- [Пользователи](/search-github/searching-on-github/searching-users)
- [Пакеты](/search-github/searching-on-github/searching-for-packages)
- [Вики](/search-github/searching-on-github/searching-wikis)

## Поиск с помощью визуального интерфейса

Вы можете выполнять поиск в {% data variables.product.product_name %} с помощью {% data variables.search.search_page_url %} или {% data variables.search.advanced_url %}. {% ifversion command-palette %}Кроме того, вы можете использовать интерактивный поиск в {% data variables.product.prodname_command_palette %}, чтобы найти ваше текущее расположение в пользовательском интерфейсе, конкретного пользователя, репозиторий или организацию, а также выполнить глобальный поиск по всем {% data variables.product.product_name %}, не отходя от клавиатуры. Дополнительные сведения см. в разделе [{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette).{% endif %}

{% data variables.search.advanced_url %} предоставляет визуальный интерфейс для создания поисковых запросов. Вы можете фильтровать результаты поиска по различным факторам, например по количеству звезд или количеству вилок, которые есть в репозитории. По мере заполнения дополнительных полей поиска запрос будет автоматически формироваться в верхней строке поиска.

![Расширенный поиск](/assets/images/help/search/advanced_search_demo.gif)

## Поиск репозиториев в {% data variables.product.prodname_dotcom_the_website %} из частной корпоративной среды

{% ifversion fpt or ghec %}

Если вы используете {% data variables.product.prodname_dotcom_the_website %} и {% data variables.product.prodname_ghe_server %} или {% data variables.product.prodname_ghe_managed %}, а владелец предприятия включил {% data variables.enterprise.prodname_unified_search %}, вы можете выполнять поиск в обеих средах одновременно из {% data variables.product.prodname_ghe_server %} или {% data variables.product.prodname_ghe_managed %}. Дополнительные сведения см. в [документации по {% data variables.product.prodname_ghe_server %}](/enterprise-server@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment) или [документации по {% data variables.product.prodname_ghe_managed %}](/github-ae@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment).

{% else %}

Если вы используете {% data variables.product.prodname_dotcom_the_website %} и {% data variables.product.product_name %}, а владелец предприятия включил {% data variables.enterprise.prodname_unified_search %}, вы можете выполнять поиск в обеих средах одновременно из {% data variables.product.product_name %}. Дополнительные сведения о том, как владельцы предприятия могут включить {% data variables.enterprise.prodname_unified_search %}, см. в разделе [Включение {% data variables.enterprise.prodname_unified_search %} для вашего предприятия](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise).

Владелец предприятия в {% data variables.product.product_name %} может отдельно включить {% data variables.enterprise.prodname_unified_search %} для всех общедоступных репозиториев в {% data variables.product.prodname_dotcom_the_website %} и частных репозиториев, принадлежащих организации или предприятию в {% data variables.product.prodname_dotcom_the_website %}, подключенных к {% data variables.product.product_name %} через {% data variables.product.prodname_github_connect %}.

Прежде чем использовать {% data variables.enterprise.prodname_unified_search %} для частных репозиториев, необходимо подключить личные учетные записи к {% data variables.product.prodname_dotcom_the_website %} и {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Включение поиска в репозиториях {% data variables.product.prodname_dotcom_the_website %} из частной корпоративной среды](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment).

При поиске из {% data variables.product.product_name %} в результаты поиска будут включены только частные репозитории, к которым у вас есть доступ, и принадлежащие подключенной организации или корпоративной учетной записи. Ни вы, ни кто-либо другой не сможете выполнять поиск в частных репозиториях, принадлежащих вашей личной учетной записи, на {% data variables.product.prodname_dotcom_the_website %} из {% data variables.product.product_name %}.

Чтобы ограничить поиск конкретной средой, можно использовать параметр фильтра в {% data variables.search.advanced_url %} или префикс поиска `environment:`. Чтобы искать только содержимое в {% data variables.product.product_name %}, используйте синтаксис поиска `environment:local`. Чтобы искать только содержимое в {% data variables.product.prodname_dotcom_the_website %}, используйте `environment:github`.
{% endif %}

## Дополнительные материалы

- [Основные сведения о синтаксисе поиска](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)
- [Поиск в GitHub](/articles/searching-on-github)

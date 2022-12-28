---
title: Сведения о вики-сайтах
intro: 'Можно разместить на вики-сайте документацию по репозиторию, чтобы другим пользователям было удобнее использовать его и участвовать в работе над проектом.'
redirect_from:
  - /articles/about-github-wikis
  - /articles/about-wikis
  - /github/building-a-strong-community/about-wikis
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 71d5b7c074247a0deaff74a3101425e49d31ad59
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099351'
---
Каждый репозиторий на {% ifversion ghae %}{% данных variables.product.product_name %}{% else %}{% данных variables.location.product_location %}{% endif %} поставляется с разделом для размещения документации, называемой вики-сайтом. Вы можете использовать вики-сайт репозитория для предоставления общего доступа к информации о проекте в полном формате, например сведения о разработке проекта, о его использовании и ключевых принципах. Файл сведений быстро сообщает о возможностях проекта, и кроме того, вы можете использовать вики-сайт для предоставления дополнительной документации. Дополнительные сведения см. в статье [О файлах README](/articles/about-readmes).

С помощью вики-сайтов вы можете писать содержимое так же, как и в любом другом расположении в {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Начало работы с написанием и форматированием в {% data variables.product.prodname_dotcom %}](/articles/getting-started-with-writing-and-formatting-on-github). Мы используем [библиотеку Markup с открытым кодом](https://github.com/github/markup) для преобразования различных форматов в HTML, поэтому вы можете писать код в Markdown или в любом другом поддерживаемом формате. 

{% data reusables.getting-started.math-and-diagrams %}

{% ifversion fpt или ghes или ghec %} Если вы создаете вики-сайт в общедоступном репозитории, вики-сайт доступен {% ifversion ghes %}любой пользователь с доступом к {% данных variables.location.product_location %}{% еще %}общедоступный {% endif %}. {% endif %}Если вы создаете вики-сайт в частном репозитории {% ifversion ghec or ghes %} or internal{% endif %}, доступ к нему будут иметь только {% ifversion fpt or ghes or ghec %}пользователи{% elsif ghae %}участники предприятия{% endif %} с доступом к репозиторию. Дополнительные сведения см. в разделе [Настройка видимости репозитория](/articles/setting-repository-visibility).

Вы можете редактировать вики-сайты непосредственно в {% data variables.product.product_name %}или изменить вики-файлы локально. По умолчанию только пользователи с доступом на запись в репозитории могут вносить изменения в вики-сайты, хотя вы можете разрешить всем пользователям {% данных variables.location.product_location %} внести свой вклад в вики-сайт в {% ifversion ghae %}внутренний {% else %}общедоступный репозиторий {% endif %} . Дополнительные сведения см. в разделе "[Изменение разрешений для доступа к вики-сайтам](/communities/documenting-your-project-with-wikis/changing-access-permissions-for-wikis)".

{% note %}

**Примечание.** Поисковые системы не будут индексировать содержимое вики-сайтов. Чтобы содержимое индексировалось поисковыми системами, можно использовать [{% data variables.product.prodname_pages %}](/pages) в общедоступном репозитории.

{% endnote %}

## Дополнительные материалы

- [Добавление и редактирование вики-страниц](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages)
- [Создание нижнего колонтитула или боковой панели для вики-сайта](/communities/documenting-your-project-with-wikis/creating-a-footer-or-sidebar-for-your-wiki)
- [Редактирование содержимого вики-сайта](/communities/documenting-your-project-with-wikis/editing-wiki-content)
- [Просмотр истории изменений вики-сайта](/articles/viewing-a-wiki-s-history-of-changes)
- [Поиск вики-сайтов](/search-github/searching-on-github/searching-wikis)

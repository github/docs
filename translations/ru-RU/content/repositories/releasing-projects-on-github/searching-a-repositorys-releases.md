---
title: Поиск выпусков репозитория
intro: 'Для поиска определенных выпусков в репозитории можно использовать ключевые слова, теги и другие квалификаторы.'
permissions: Anyone with read access to a repository can search that repository's releases.
shortTitle: Searching releases
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '>= 3.4'
topics:
  - Repositories
ms.openlocfilehash: a61e49521452befdcddf2724cad837062c7d54a1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109655'
---
## Поиск выпусков в репозитории

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
1. Чтобы найти выпуск репозитория, в поле поиска в верхней части страницы "Выпуски" введите запрос и нажмите клавишу **ВВОД**.
![Поле поиска выпусков](/assets/images/help/releases/search-releases.png)

## Синтаксис поиска выпусков в репозитории

Вы можете указать в поисковом запросе текст, который должен соответствовать заголовку, тексту или тегу выпусков репозитория. Вы также можете объединить следующие квалификаторы для конкретных выпусков.

| Квалификатор        | Пример
| ------------- | -------------
| `draft:true` | **draft:true** — выводит только черновики выпусков.
| `draft:false` | **draft:false** — выводит только опубликованные выпуски.
| `prerelease:true` | **prerelease:true** — выводит только предварительные выпуски.
| `prerelease:false` | **prerelease:false** — выводит только выпуски, которые не являются предварительными.
| <code>tag:<em>TAG</em></code> | **tag:v1** соответствует выпуску с тегом v1 и любыми дополнительными версиями или исправлениями в версии 1, например v1.0, v1.2 и v1.2.5.
| <code>created:<em>DATE</em></code> | **created:2021** будет соответствовать выпускам, созданным в 2021 году. Можно также указать диапазон дат. Для получения дополнительной информации см. раздел [Основные сведения о различных ролях](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates).

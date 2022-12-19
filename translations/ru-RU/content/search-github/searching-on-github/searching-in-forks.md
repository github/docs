---
title: Поиск в вилках
intro: 'По умолчанию в результатах поиска не отображаются [вилки](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks). Их можно включить в поисковые запросы репозитория и в операции поиска по коду, если они соответствуют определенным критериям.'
redirect_from:
  - /articles/searching-in-forks
  - /github/searching-for-information-on-github/searching-in-forks
  - /github/searching-for-information-on-github/searching-on-github/searching-in-forks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 6375fdecd7dba47447b37207467e008f0e7b3fc0
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: '147785793'
---
Чтобы отобразить вилки в результатах [поиска по репозиторию](/search-github/searching-on-github/searching-for-repositories), добавьте к запросу `fork:true` или `fork:only`.

Вилки индексируются для [поиска кода](/search-github/searching-on-github/searching-code), только если они имеют больше звезд, чем родительский репозиторий. Невозможно выполнить поиск кода в вилке, у которой меньше звезд, чем у ее родительского репозитория. Чтобы в результатах поиска кода отображались вилки с большим количеством звездочек, чем у родительского репозитория, добавьте к запросу `fork:true` или `fork:only`.

Классификатор `fork:true` находит все результаты, соответствующие вашему поисковому запросу, включая вилки. Классификатор `fork:only` находит _только_ вилки, соответствующие вашему поисковому запросу.

| Квалификатор  | Пример
| ------------- | -------------
| `fork:true` | [**github fork:true**](https://github.com/search?q=github+fork%3Atrue&type=Repositories) соответствует всем репозиториям, содержащим слово "github", включая вилки.
| | [**android language:java fork:true**](https://github.com/search?q=android+language%3Ajava+fork%3Atrue&type=Code) соответствует коду со словом "android", написанному на Java как в вилках, так и в обычных репозиториях.
| `fork:only` | [**github fork:only**](https://github.com/search?q=github+fork%3Aonly&type=Repositories) соответствует всем репозиториям вилок, содержащих слово "github."
| | [**forks:>500 fork:only**](https://github.com/search?q=forks%3A%3E500+fork%3Aonly&type=Repositories) соответствует репозиториям с более чем 500 вилками и возвращает только те из них, которые являются вилками.

## Дополнительные материалы

- [Сведения о вилках](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)
- [Сведения о поиске в GitHub](/search-github/getting-started-with-searching-on-github/about-searching-on-github)

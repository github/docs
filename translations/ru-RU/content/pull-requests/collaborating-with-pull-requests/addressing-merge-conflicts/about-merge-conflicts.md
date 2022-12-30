---
title: О конфликтах слияния
intro: 'Конфликты слияния происходят при слиянии ветвей, имеющих конкурирующие фиксации, и Git требуется ваша помощь, чтобы принять решение относительно того, какие изменения следует включить в окончательное слияние.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/about-merge-conflicts
  - /articles/about-merge-conflicts
  - /github/collaborating-with-issues-and-pull-requests/about-merge-conflicts
  - /github/about-merge-conflicts
  - /github/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
ms.openlocfilehash: 816830ccd05a29803667c163f850fa5a086a49cd
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009086'
---
Git часто может разрешать различия между ветвями и автоматически объединять их. Как правило, изменения находятся в разных строках или даже в разных файлах, что упрощает понимание слияния компьютерами. Однако иногда возникают конфликтующие изменения, которые Git не может устранить без вашей помощи. Часто конфликты слияния возникают, когда участники вносят разные изменения в одну строку одного файла или когда один участник редактирует файл, а другой — удаляет тот же файл.

Прежде чем объединить запрос на вытягивание на {% data variables.product.product_name %}, необходимо разрешить все конфликты слияния. Если в запросе на вытягивание возник конфликт слияния между ветвью сравнения и базовой ветвью, вы можете просмотреть список файлов с конфликтующими изменениями над кнопкой **Слияние запроса на вытягивание**. Кнопка **Слияние запроса на вытягивание** будет отключена, пока вы не устраните все конфликты между ветвью сравнения и базовой ветвью.

![Сообщение об ошибке из-за конфликта в слияния](/assets/images/help/pull_requests/merge_conflict_error_on_github.png)

## Разрешение конфликтов слияния

Чтобы устранить конфликт слияния, необходимо вручную отредактировать конфликтующий файл и выбрать изменения, которые необходимо сохранить в окончательном слиянии. Существует несколько разных способов устранения конфликта слияния:

- Если конфликт слияния вызван конкурирующими изменениями строк, например при внесении разных изменений в одну строку одного файла в разных ветвях в репозитории Git, его можно разрешить на {% data variables.product.product_name %} с помощью редактора конфликтов. Дополнительные сведения см. на странице [Устранение конфликта слияния на {% data variables.product.prodname_dotcom %}](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github).
- Для остальных типов конфликтов слияния необходимо разрешить конфликт слияния в локальном клоне репозитория и отправить изменение в ветвь на {% data variables.product.product_name %}. Для отправки изменений можно использовать командную строку или средство, например [{% data variables.product.prodname_desktop %}](https://desktop.github.com/). Дополнительные сведения см. в статье [Устранение конфликта слияния с помощью командной строки](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line).

Если в командной строке есть конфликт слияния, локальные изменения нельзя отправлять в {% data variables.product.product_name %}, пока не будет разрешен конфликт слияния локально на компьютере. При попытке объединения ветвей в командной строке с конфликтом слияния появится сообщение об ошибке. Дополнительные сведения см. в статье [Устранение конфликта слияния с помощью командной строки](/articles/resolving-a-merge-conflict-using-the-command-line/).
```shell
$ git merge BRANCH-NAME
> Auto-merging styleguide.md
> CONFLICT (content): Merge conflict in styleguide.md
> Automatic merge failed; fix conflicts and then commit the result
```

## Дополнительные материалы

- [Сведения о слиянии запросов на вытягивание](/articles/about-pull-request-merges/)
- [Сведения о запросах на вытягивание](/articles/about-pull-requests/)
- [Разрешение конфликта слияния с помощью командной строки](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line)
- [Разрешение конфликта слияния на GitHub](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github)

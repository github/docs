---
title: Разрешение конфликта слияния в GitHub
intro: 'Вы можете устранить простые конфликты слияния, которые конкурируют с изменениями строк на сайте GitHub, с помощью редактора конфликтов.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github
  - /articles/resolving-a-merge-conflict-on-github
  - /github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github
  - /github/resolving-a-merge-conflict-on-github
  - /github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Resolve merge conflicts
ms.openlocfilehash: 48613d8c8974d14a1de70e0dee5a7f4819d37fd9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145137838'
---
Конфликты слияния можно разрешать только в {% data variables.product.product_name %}, вызванных конкурирующими изменениями строк, например при внесении разных изменений в одну строку одного файла в разных ветвях в репозитории Git. Остальные типы конфликтов слияния необходимо разрешить локально в командной строке. Дополнительные сведения см. в статье [Устранение конфликта слияния с помощью командной строки](/articles/resolving-a-merge-conflict-using-the-command-line/).

{% ifversion ghes or ghae %} Если администратор сайта отключает редактор конфликтов слияния для запросов на вытягивание между репозиториями, редактор конфликтов невозможно использовать в {% data variables.product.product_name %}, а конфликты слияния необходимо разрешать в командной строке. Например, если редактор конфликтов слияния отключен, его невозможно использовать в запросе на вытягивание между вилкой и вышестоящим репозиторием.
{% endif %}

{% warning %}

**Предупреждение.** При разрешении конфликта слияния в {% data variables.product.product_name %} вся [базовая ветвь](/github/getting-started-with-github/github-glossary#base-branch) запроса на вытягивание объединяется в [главную ветвь](/github/getting-started-with-github/github-glossary#head-branch). Убедитесь, что вам действительно нужно зафиксировать эту ветвь. Если главная ветвь является ветвью репозитория по умолчанию, вам будет предоставлена возможность создать новую ветвь, которая будет главной для запроса на вытягивание. Если главная ветвь защищена, вы не сможете объединить в нее разрешение конфликтов, поэтому вы получите подсказку для создания новой главной ветви. Дополнительные сведения см. в разделе [Сведения о защищенных ветвях](/github/administering-a-repository/about-protected-branches).

{% endwarning %}

{% data reusables.repositories.sidebar-pr %}
1. В списке "Запросы на вытягивание" щелкните запрос на вытягивание вместе с конфликтом слияния, который вы хотите разрешить.
1. В нижней части запроса на вытягивание нажмите кнопку **Разрешить конфликты**.
![Кнопка для разрешения конфликтов слияния](/assets/images/help/pull_requests/resolve-merge-conflicts-button.png)

 {% tip %}

 **Совет.** Если кнопка **Разрешить конфликты** отключена, это означает, что конфликт слияния запроса на вытягивание является слишком сложным для разрешения в {% data variables.product.product_name %}{% ifversion ghes or ghae %} или администратор сайта отключил редактор конфликтов для запросов на вытягивание между репозиториями{% endif %}. Вам необходимо разрешить конфликт слияния с помощью альтернативного клиента Git или использования Git в командной строке. Дополнительные сведения см. в статье [Устранение конфликта слияния с помощью командной строки](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line).

 {% endtip %} {% data reusables.pull_requests.decide-how-to-resolve-competing-line-change-merge-conflict %} ![Просмотр примера конфликта слияния с метками конфликтов](/assets/images/help/pull_requests/view-merge-conflict-with-markers.png)
1. Если в файле имеется несколько конфликтов слияния, прокрутите вниз до следующего набора меток конфликтов и повторите шаги четыре и пять, чтобы устранить конфликт слияния.
1. После устранения всех конфликтов в файле нажмите кнопку **Пометить как разрешенный**.
 ![Нажмите кнопку "Пометить как разрешенный"](/assets/images/help/pull_requests/mark-as-resolved-button.png)
1. Если у вас есть несколько файлов с конфликтом, в левой части страницы в разделе "Конфликтующие файлы" выберите следующий файл, который нужно изменить, и повторите шаги 4–7, пока все конфликты слияния запроса на вытягивание не будут устранены.
 ![Выберите следующий конфликтующий файл (если это применимо)](/assets/images/help/pull_requests/resolve-merge-conflict-select-conflicting-file.png)
1. После устранения всех конфликтов слияния нажмите **Зафиксировать слияние**. Это объединит всю базовую ветвь в главную ветвь.
 ![Кнопка для разрешения конфликтов слияния](/assets/images/help/pull_requests/merge-conflict-commit-changes.png)
1. При появлении подсказки выполните проверку ветви, для которой выполняется фиксация.

   Если главная ветвь является ветвью репозитория по умолчанию, можно либо обновить ее, добавив изменения, внесенные для устранения конфликта, либо создать новую ветвь и использовать ее в качестве главной ветви запроса на вытягивание.
 ![Подсказка для просмотра ветви, которая будет обновлена](/assets/images/help/pull_requests/conflict-resolution-merge-dialog-box.png)

   Если вы решили создать новую ветвь, введите для нее имя.

   Если главная ветвь запроса на вытягивание защищена, необходимо создать новую ветвь. У вас не будет возможности обновить защищенную ветвь.

   Нажмите **Создать ветвь и обновить запрос на вытягивание** или **Все понятно, продолжить обновление _BRANCH_**. Текст кнопки соответствует выполняемому действию.
1. Чтобы выполнить слияние запроса на вытягивание, нажмите **Слияние запроса на вытягивание**. Дополнительные сведения о других вариантах слияния запросов на вытягивание см. в статье [Слияние запросов на вытягивание](/articles/merging-a-pull-request/).

## Дополнительные материалы

- [Сведения о слиянии запросов на вытягивание](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)

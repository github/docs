---
title: О ветвях
intro: Используйте ветвь для изоляции процессов разработки без влияния на другие ветви в репозитории. Каждый репозиторий содержит одну ветвь по умолчанию и может также содержать несколько других ветвей. Можно объединить ветвь в другую ветвь с помощью запроса на вытягивание.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches
  - /articles/working-with-protected-branches
  - /articles/about-branches
  - /github/collaborating-with-issues-and-pull-requests/about-branches
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 0262a7a8fb0bb8556c3f6062e3fc8512eb9fa1c6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139657'
---
## О ветвях

Ветви позволяют разрабатывать возможности, исправлять ошибки или безопасно экспериментировать с новыми идеями в автономной области репозитория.

Вы всегда создаете ветвь из существующей ветви. Как правило, новую ветвь можно создать из ветви репозитория по умолчанию. Затем в этой новой ветви можно работать без учета изменений, вносимых в репозиторий другими людьми. Ветвь, созданная для создания возможности, обычно называется ветвью возможности или тематической веткой. Дополнительные сведения см. в разделе [Создание и удаление ветвей репозитория](/articles/creating-and-deleting-branches-within-your-repository/).

Вы также можете использовать ветвь для публикации сайта {% data variables.product.prodname_pages %}. Дополнительные сведения см. в статье [Сведения о {% data variables.product.prodname_pages %}](/articles/what-is-github-pages).

Необходимо иметь доступ на запись в репозиторий, чтобы создать ветвь, открыть запрос на вытягивание или удалить и восстановить ветви в запросе на вытягивание. Дополнительные сведения см. в разделе [Разрешения на доступ к {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/access-permissions-on-github).

## Сведения о ветви по умолчанию

{% data reusables.branches.new-repo-default-branch %} Ветвь по умолчанию — это ветвь, которую {% data variables.product.prodname_dotcom %} отображает при посещении репозитория. Ветвь по умолчанию также является начальной ветвью, которую Git извлекает локально, когда кто-то клонирует репозиторий. {% data reusables.branches.default-branch-automatically-base-branch %}

По умолчанию {% data variables.product.product_name %} называет ветвь по умолчанию `main` в любом новом репозитории.

{% data reusables.branches.change-default-branch %}

{% data reusables.branches.set-default-branch %}

## Работа с ветвями

Когда вы удовлетворены работой, вы можете открыть запрос на вытягивание, чтобы объединить изменения в текущей ветви (*головной* ветви) в другую ветвь (*базовую* ветвь). Дополнительные сведения см. в разделе [Сведения о запросах на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

После объединения или закрытия запроса на вытягивание можно удалить головную ветвь, так как она больше не нужна. Для удаления ветвей необходимо иметь доступ на запись в репозитории. Невозможно удалить ветви, которые напрямую связаны с открытыми запросами на вытягивание. Дополнительные сведения см. в разделе [Удаление и восстановление ветвей в запросе на вытягивание](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)

{% data reusables.pull_requests.retargeted-on-branch-deletion %} На указанных ниже схемах показано следующее.

 Здесь кто-то создал ветвь, вызываемую `feature1` из ветви `main`, и вы создали ветвь, вызываемую `feature2` из `feature1`. Здесь есть открытые запросы на вытягивание для обеих ветвей. Стрелки указывают текущую базовую ветвь для каждого запроса на вытягивание. На этом этапе `feature1` является базовой ветвью для `feature2`. Если запрос на вытягивание для `feature2` объединен сейчас, ветвь `feature2` будет объединена в `feature1`.

 ![кнопка объединения запросов на вытягивание](/assets/images/help/branches/pr-retargeting-diagram1.png)

На указанной ниже схеме кто-то объединил запрос на вытягивание `feature1` в ветвь `main` и удалил ветвь `feature1`. В результате {% data variables.product.prodname_dotcom %} автоматически перенацелил запрос на вытягивание `feature2` таким образом, чтобы его базовой ветвью стала `main`.

 ![кнопка объединения запросов на вытягивание](/assets/images/help/branches/pr-retargeting-diagram2.png)

Теперь при слиянии запроса на вытягивание `feature2` он будет объединен в ветвь `main`.

## Работа с защищенными ветвями

Администраторы репозитория могут включать защиты в ветви. Если вы работаете с защищенной ветвью, то не сможете удалить или принудительно отправить ее в ветвь. Администраторы репозитория могут дополнительно включить несколько других параметров защищенной ветви для принудительного применения различных рабочих процессов перед слиянием ветви.

{% note %}

**Примечание.** Если вы являетесь администратором репозитория, вы можете объединить запросы на вытягивание в ветвях с включенными защитами ветви, даже если запрос на вытягивание не соответствует требованиям, если только защита ветви не задана как "Включить администраторов".

{% endnote %}

Чтобы узнать, можно ли объединить запрос на вытягивание, просмотрите поле слияния в нижней части вкладки **Беседы** запроса на вытягивание. Дополнительные сведения см. в разделе [Сведения о защищенных ветвях](/articles/about-protected-branches).

Если ветвь защищена:

- Вы не сможете удалить или принудительно отправить ее в ветвь.
- Если в ветви включены необходимые проверки состояния, вы не сможете объединить изменения в ветвь до тех пор, пока не будут пройдены все необходимые проверки CI. Дополнительные сведения см. в разделе [Сведения о проверках состояния](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks).
- Если в ветви включены необходимые проверки запросов на вытягивание, вы не сможете объединить изменения в ветвь до тех пор, пока не будут выполнены все требования в политике проверки запросов на вытягивание. Дополнительные сведения см. в разделе [Слияние запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request).
- Если обязательная проверка от владельца кода включена в ветви, а запрос на вытягивание изменяет код, имеющий владельца, владелец кода должен утвердить запрос на вытягивание, прежде чем его можно будет объединить. Дополнительные сведения см. в разделе [Сведения о владельцах кода](/articles/about-code-owners).
- Если в ветви включена обязательная подпись фиксации, вы не сможете отправлять фиксации в ветвь, которая не подписана и не проверена. Дополнительные сведения см. в разделах [Сведения о проверке подписи фиксации](/articles/about-commit-signature-verification) и [Сведения о защищенных ветвях](/github/administering-a-repository/about-protected-branches#require-signed-commits).
- Если вы используете редактор конфликтов {% data variables.product.prodname_dotcom %}, чтобы устранить конфликты для запроса на вытягивание, созданного из защищенной ветви, {% data variables.product.prodname_dotcom %} помогает создать альтернативную ветвь для запроса на вытягивание, чтобы решения конфликтов можно было объединить. Дополнительные сведения см. на странице [Устранение конфликта слияния для {% data variables.product.prodname_dotcom %}](/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github).

## Дополнительные материалы

- [Сведения о запросах на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- Термин [Ветвь](/articles/github-glossary/#branch) в глоссарии {% data variables.product.prodname_dotcom %}
- Раздел [Branches in a Nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) (Коротко о ветвях) в документации по Git

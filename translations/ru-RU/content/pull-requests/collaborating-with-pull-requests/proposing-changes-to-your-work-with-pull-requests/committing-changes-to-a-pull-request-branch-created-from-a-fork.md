---
title: 'Фиксация изменений в ветви запроса на вытягивание, созданной из вилки'
intro: 'Вы можете зафиксировать изменения в ветви запроса на вытягивание, созданной из вилки репозитория с разрешения автора запроса на вытягивание.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /articles/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Commit to PR branch from fork
ms.openlocfilehash: 2af0bc9969d662d4b4b41331345b6d229b5a7a49
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094644'
---
Фиксации можно выполнять только в ветвях запросов на вытягивание, которые:
- открываются в репозитории, к которому у вас есть доступ на отправку, и созданные из вилки этого репозитория;
- находятся в вилке, принадлежащей пользователю;
- имеют разрешение, предоставленное создателем запроса на вытягивание;
- не имеют [ограничений ветвей](/github/administering-a-repository/about-protected-branches#restrict-who-can-push-to-matching-branches), которые помешают фиксации.

Только пользователь, создавший запрос на вытягивание, может предоставить вам разрешение на отправку фиксаций в вилку, принадлежащую пользователю. Дополнительные сведения см. в разделе [Разрешение изменений в ветвь запроса на вытягивание, созданную из вилки](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork).

{% note %}

**Примечание:** Вы также можете зафиксировать ветвь запроса на вытягивание из вилки репозитория с помощью {% данных variables.location.product_location %} путем создания собственной копии (или вилки) вилки репозитория и фиксации изменений в той же головной ветви, в которую были созданы исходные изменения запроса на вытягивание. Некоторые общие рекомендации см. в разделе [Создание запроса на вытягивание из вилки](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).

{% endnote %}

1. В {% data variables.product.product_name %} перейдите на главную страницу вилки (или копии репозитория), где была создана ветвь запроса на вытягивание.
{% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %} {% tip %}

 **Совет.** Если вы предпочитаете клонировать вилку с помощью {% data variables.product.prodname_desktop %}, см. раздел [Клонирование репозитория в {% data variables.product.prodname_desktop %}](/articles/cloning-a-repository/#cloning-a-repository-to-github-desktop).

 {% endtip %}
4. Измените текущий рабочий каталог на расположение, где должен находиться клонированный каталог.
  ```shell
  $ cd open-source-projects
  ```
5. Введите `git clone` и вставьте URL-адрес, скопированный шаге 3.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/USERNAME/FORK-OF-THE-REPOSITORY
  ```
6. Нажмите клавишу **ВВОД**. Будет создан локальный клон.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/USERNAME/FORK-OF-THE-REPOSITORY
  > Cloning into `FORK-OF-THE-REPOSITORY`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```
 {% tip %}

 **Совет.** Сообщение об ошибке «Неустранимая ошибка: путь назначения "ИМЯ_РЕПОЗИТОРИЯ" уже существует и не является пустым каталогом» означает, что текущий рабочий каталог уже содержит репозиторий с таким же именем. Чтобы устранить эту ошибку, необходимо клонировать вилку в другой каталог.

 {% endtip %}
7. Перейдите к новому клонированному репозиторию.
  ```shell
  $ cd FORK-OF-THE-REPOSITORY
  ```
7. Переключитесь на ветку сравнения запроса на вытягивание, в которой были внесены исходные изменения. При переходе к исходному запросу на вытягивание вы увидите ветвь сравнения в верхней части запроса на вытягивание.
![Пример-ветви-сравнения](/assets/images/help/pull_requests/compare-branch-example.png) В этом примере ветвью сравнения является `test-branch`:
  ```shell
  $ git checkout TEST-BRANCH
  ```

 {% tip %}

 **Совет.** Дополнительные сведения о ветвях запросов на вытягивание, включая примеры, см. в статье [Создание запроса на вытягивание](/articles/creating-a-pull-request#changing-the-branch-range-and-destination-repository).

 {% endtip %}
8. На этом этапе с этой ветвью можно сделать все, что необходимо. Можно отправить новые фиксации в нее, выполнить какие-нибудь локальные тесты или объединить другие ветви в эту ветвь. Внесите изменения, которые вам необходимы.
9. После фиксации изменений в головной ветви запроса на вытягивание можно отправить изменения непосредственно в исходный запрос на вытягивание. В этом примере головной ветвью является `test-branch`.
  ```shell
  $ git push origin <em>test-branch</em>
  > Counting objects: 32, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (26/26), done.
  > Writing objects: 100% (29/29), 74.94 KiB | 0 bytes/s, done.
  > Total 29 (delta 8), reused 0 (delta 0)
  > To https://{% data variables.command_line.codeblock %}/USERNAME/FORK-OF-THE-REPOSITORY.git
  > 12da2e9..250e946  TEST-BRANCH -> TEST-BRANCH
  ```

Новые фиксации будут отражены в исходном запросе на вытягивание {% данных variables.location.product_location %}.

## Дополнительные материалы

- [Сведения о вилках](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)

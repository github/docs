---
title: Создание постоянной ссылки на фрагмент кода
intro: Вы можете создать постоянную ссылку на определенную строку или диапазон строк кода в определенной версии файла или запроса на вытягивание.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/creating-a-permanent-link-to-a-code-snippet
  - /articles/creating-a-permanent-link-to-a-code-snippet
  - /github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet
  - /github/writing-on-github/working-with-advanced-formatting/creating-a-permanent-link-to-a-code-snippet
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Permanent links to code
ms.openlocfilehash: d1c363eba2a45558f3fdc9b55025309544ef677b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145069848'
---
## Ссылка на код

Постоянная ссылка этого типа отображается в виде фрагмента кода только в репозитории, в котором она была создана. В других репозиториях постоянная ссылка на фрагмент кода отображается в виде URL-адреса.

![Фрагмент кода, отображаемый в примечании](/assets/images/help/repository/rendered-code-snippet.png)

{% tip %}

**Совет.** Сведения о создании постоянной ссылки для всего файла см. в разделе "[Получение постоянных ссылок на файлы](/articles/getting-permanent-links-to-files)".

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. Найдите код, на который нужно задать ссылку:
    - Чтобы создать ссылку на код из файла, перейдите к файлу.
    - Чтобы создать ссылку на код из запроса на включение внесенных изменений, откройте этот запрос и щелкните {% octicon "diff" aria-label="The file diff icon" %} **Измененные файлы**. Затем откройте файл, где находится код, который нужно включить в комментарий, и нажмите **Просмотреть**.
{% data reusables.repositories.choose-line-or-range %}
4. Щелкните значок {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %} слева от строки или диапазона строк. В раскрывающемся меню выберите **Копировать постоянную ссылку**.
  ![Меню Kebab с командой копирования постоянной ссылки для выбранной строки](/assets/images/help/repository/copy-permalink-specific-line.png)
5. Перейдите к беседе, в которой нужно оставить ссылку на фрагмент кода.
6. Вставьте постоянную ссылку в комментарий и нажмите кнопку **Комментарий**.
  ![Вставленная постоянная ссылка в комментарии в том же репозитории](/assets/images/help/repository/code-snippet-permalink-in-comment.png)

## Ссылка на Markdown

Чтобы оставить ссылку на определенные строки в файле Markdown, загрузите файл Markdown без отрисовки. Для этого используйте параметр `?plain=1` в конце URL-адреса файла. Например, `github.com/<organization>/<repository>/blob/<branch_name>/README.md?plain=1`.

Можно указать ссылку на определенную строку в файле Markdown так же, как и в ссылке на код. Для этого в конце URL-адреса добавьте к `#L` номер строки или номера строк. Например, ссылка `github.com/<organization>/<repository>/blob/<branch_name>/README.md?plain=1#L14` выделяет 14-ю строку в простом файле README.md.

## Дополнительные материалы

- "[Создание проблемы](/articles/creating-an-issue/)"
- "[Открытие проблемы из кода](/articles/opening-an-issue-from-code/)"
- "[Проверка изменений в запросах на включение внесенных изменений](/articles/reviewing-changes-in-pull-requests/)"

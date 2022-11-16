---
title: Создание проблемы или запроса на вытягивание
intro: 'Можно создать проблему или запрос на вытягивание, чтобы предложить изменения в репозитории и совместно работать над ними.'
permissions: 'Anyone can create an issue in a public repository that has issues enabled. Anyone with read permissions to a repository can create a pull request, but you must have write permissions to create a branch.'
redirect_from:
  - /desktop/contributing-to-projects/creating-an-issue-or-pull-request
  - /desktop/contributing-to-projects/creating-a-pull-request
  - /desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request
versions:
  fpt: '*'
shortTitle: Create an issue or PR
ms.openlocfilehash: 5430c8f11d08efc3f21cf1c62f470f38dcc2f257
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117480'
---
## О проблемах и запросах на вытягивание

Вы можете использовать проблемы для отслеживания идей, ошибок, задач и других сведений, важных для вашего проекта. Вы можете создать проблему в репозитории вашего проекта с помощью {% data variables.product.prodname_desktop %}. Дополнительную информацию о проблемах см. в разделе [Сведения о проблемах](/github/managing-your-work-on-github/about-issues).

После создания ветви и внесения изменений в файлы в проекте можно создать запрос на вытягивание. С помощью запроса на вытягивание можно предложить, обсудить и выполнить итерацию по изменениям, прежде чем выполнить слияние изменений в проект. Можно создать запрос на вытягивание в репозитории проекта с помощью {% data variables.product.prodname_desktop %}. Дополнительную информацию о запросах на вытягивание см. в разделе [Сведения о запросах на вытягивание](/github/collaborating-with-issues-and-pull-requests/about-pull-requests).

## Предварительные требования

Перед созданием запроса на вытягивание необходимо отправить изменения в ветвь на {% data variables.product.prodname_dotcom %}.
- Сохраните и зафиксируйте любые изменения в локальной ветви. Дополнительные сведения см. в разделе [Фиксация и проверка изменений в проекте](/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project).
- Отправьте локальные фиксации в удаленный репозиторий. Дополнительные сведения см. в разделе [Отправка изменений в GitHub](/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github).
- Опубликуйте текущую ветвь в {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в статье [Управление ветвями](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches).

## Создание проблемы

{% mac %}

1. В строке меню используйте раскрывающееся меню **Репозиторий**, а затем щелкните **Создать проблему на {% data variables.product.prodname_dotcom %}** .
    ![Значение репозитория в меню "Ветвь"](/assets/images/help/desktop/create-issue-mac.png)
2. В {% data variables.product.prodname_dotcom %} щелкните **Начало работы**, чтобы открыть шаблон проблемы, или **Открыть пустую проблему**.
    ![Создание новых параметров проблемы](/assets/images/help/desktop/create-new-issue.png)

{% endmac %}

{% windows %}

1. В строке меню используйте раскрывающееся меню **Репозиторий**, а затем щелкните **Создать проблему на {% data variables.product.prodname_dotcom %}** .
    ![Значение репозитория в меню "Ветвь"](/assets/images/help/desktop/create-issue-windows.png)
2. В {% data variables.product.prodname_dotcom %} щелкните **Начало работы**, чтобы открыть шаблон проблемы, или **Открыть пустую проблему**.
    ![Создание новых параметров проблемы](/assets/images/help/desktop/create-new-issue.png)

{% endwindows %}

{% note %}

**Примечание**. Если шаблоны проблем не включены в текущем репозитории, {% data variables.product.prodname_desktop %} направит вас к пустой проблеме на {% data variables.product.prodname_dotcom %}.

{% endnote %}

## Создание запроса на включение изменений

{% mac %}

1. Переключитесь на ветвь, для которой требуется создать запрос на вытягивание. Дополнительные сведения см. в разделе [Коммутация между ветвями](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches).
2. Щелкните **Создать запрос на вытягивание**. {% data variables.product.prodname_desktop %} откроет браузер по умолчанию, чтобы вы могли перейти к {% data variables.product.prodname_dotcom %}.
  ![Кнопка "Создать запрос на вытягивание"](/assets/images/help/desktop/mac-create-pull-request.png).
4. На {% data variables.product.prodname_dotcom %} убедитесь, что ветвь в раскрывающемся меню **база:**  — это ветвь, в которой требуется выполнить слияние изменения. Убедитесь, что ветвь в раскрывающемся меню **сравнить:**  — это тематическая ветвь, в которой вы внесли изменения.
  ![Раскрывающиеся меню для выбора базы и сравнения ветвей](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. Переключитесь на ветвь, для которой требуется создать запрос на вытягивание. Дополнительные сведения см. в разделе [Коммутация между ветвями](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches).
2. Щелкните **Создать запрос на вытягивание**. {% data variables.product.prodname_desktop %} откроет браузер по умолчанию, чтобы вы могли перейти к {% data variables.product.prodname_dotcom %}.
  ![Кнопка "Создать запрос на вытягивание"](/assets/images/help/desktop/windows-create-pull-request.png).
3. На {% data variables.product.prodname_dotcom %} убедитесь, что ветвь в раскрывающемся меню **база:**  — это ветвь, в которой требуется выполнить слияние изменения. Убедитесь, что ветвь в раскрывающемся меню **сравнить:**  — это тематическая ветвь, в которой вы внесли изменения.
  ![Раскрывающиеся меню для выбора базы и сравнения ветвей](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endwindows %}

## Дополнительные материалы
- [Проблема](/github/getting-started-with-github/github-glossary#issue) в глоссарии {% data variables.product.prodname_dotcom %}
- [Запрос на вытягивание](/github/getting-started-with-github/github-glossary#pull-request) в глоссарии {% data variables.product.prodname_dotcom %}
- [Базовая ветвь](/github/getting-started-with-github/github-glossary#base-branch) в глоссарии {% data variables.product.prodname_dotcom %}
- [Тематическая ветвь](/github/getting-started-with-github/github-glossary#topic-branch) в глоссарии {% data variables.product.prodname_dotcom %}

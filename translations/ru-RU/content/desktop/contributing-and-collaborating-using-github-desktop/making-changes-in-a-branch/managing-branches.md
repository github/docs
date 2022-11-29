---
title: Управление ветвями
intro: 'Вы можете создать ветвь на основе ветви репозитория по умолчанию, чтобы можно было безопасно экспериментировать с различными изменениями.'
redirect_from:
  - /desktop/contributing-to-projects/creating-a-branch-for-your-work
  - /desktop/contributing-to-projects/switching-between-branches
  - /desktop/contributing-to-projects/managing-branches
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-branches
versions:
  fpt: '*'
ms.openlocfilehash: 30604c6b3ed0ab9ca5c0f3f8ca0fe853624ee86b
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/12/2022
ms.locfileid: '147886945'
---
## Сведения об управлении ветвями
С помощью ветвей можно безопасно экспериментировать с изменениями в проекте. Ветви изолируют разработку от других ветвей в репозитории. Например, можно использовать ветвь для разработки новой функции или исправления ошибки.

Вы всегда создаете ветвь из существующей ветви. Как правило, ветвь можно создать из ветви по умолчанию репозитория. Затем в этой новой ветви можно работать без учета изменений, вносимых в репозиторий другими людьми.

Вы также можете создать ветвь, начиная с предыдущей фиксации в журнале ветви. Это может быть удобно, если вам нужно вернуться к предыдущему представлению репозитория для исследования ошибки или создать исправление поверх последнего выпуска.

Добившись удовлетворительного результата, вы можете создать запрос на вытягивание, чтобы объединить изменения в текущей ветви с другой ветвью. Дополнительные сведения см. в разделах [Создание проблемы или запроса на вытягивание](/desktop/contributing-to-projects/creating-an-issue-or-pull-request) и [Сведения о запросах на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

Вы всегда можете создать ветвь в {% data variables.product.prodname_desktop %}, если у вас есть доступ на чтение к репозиторию, но вы можете отправить ветвь в {% data variables.product.prodname_dotcom %} только в том случае, если у вас есть доступ на запись в репозиторий.

{% data reusables.desktop.protected-branches %}

## Создание ветви

{% tip %}

**Совет**. Первая созданная вами ветвь будет основана на ветви по умолчанию. Если у вас несколько ветвей, ветвь можно создать на основе текущей извлеченной ветви или ветви по умолчанию.

{% endtip %}

{% mac %}

{% data reusables.desktop.click-base-branch-in-drop-down %} ![ Раскрывающееся меню для переключения текущей ветви](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.create-new-branch %} ![Параметр "Новая ветвь" в меню ветви](/assets/images/help/desktop/new-branch-button-mac.png) {% data reusables.desktop.name-branch %} ![Поле для создания имени новой ветви](/assets/images/help/desktop/create-branch-name-mac.png) {% data reusables.desktop.select-base-branch %} ![Параметры базовой ветви](/assets/images/help/desktop/create-branch-choose-branch-mac.png) {% data reusables.desktop.confirm-new-branch-button %} ![Кнопка "Создать ветвь"](/assets/images/help/desktop/create-branch-button-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.click-base-branch-in-drop-down %} ![ Раскрывающееся меню для переключения текущей ветви](/assets/images/help/desktop/click-branch-in-drop-down-win.png) {% data reusables.desktop.create-new-branch %} ![Параметр "Новая ветвь" в меню ветви](/assets/images/help/desktop/new-branch-button-win.png) {% data reusables.desktop.name-branch %} ![Поле для создания имени новой ветви](/assets/images/help/desktop/create-branch-name-win.png) {% data reusables.desktop.select-base-branch %} ![Параметры базовой ветви](/assets/images/help/desktop/create-branch-choose-branch-win.png) {% data reusables.desktop.confirm-new-branch-button %} ![Кнопка "Создать ветвь"](/assets/images/help/desktop/create-branch-button-win.png)

{% endwindows %}

## Создание ветви из предыдущей фиксации

{% data reusables.desktop.history-tab %}
2. Щелкните правой кнопкой мыши фиксацию, из которой нужно создать ветвь, и выберите **Create Branch from Commit** (Создать ветвь из фиксации).
  ![Контекстное меню для создания ветви из фиксации](/assets/images/help/desktop/create-branch-from-commit-context-menu.png) {% data reusables.desktop.name-branch %} {% data reusables.desktop.confirm-new-branch-button %} ![Создание ветви из фиксации](/assets/images/help/desktop/create-branch-from-commit-overview.png)

## Публикация ветви

Если вы создаете ветвь на {% data variables.product.product_name %}, ее потребуется опубликовать, чтобы сделать доступной для совместной работы на {% data variables.product.prodname_dotcom %}.

1. В верхней части приложения щелкните {% octicon "git-branch" aria-label="The branch icon" %} **Текущая ветвь**, а затем выберите ветвь, которую нужно опубликовать.
  ![Раскрывающееся меню для выбора публикуемой ветви](/assets/images/help/desktop/select-branch-from-dropdown.png)
2. Нажмите кнопку **Опубликовать ветвь**.
  ![Кнопка "Опубликовать ветвь"](/assets/images/help/desktop/publish-branch-button.png)

## Переключение между ветвями
Вы можете просматривать и выполнять фиксации в любой из ветвей репозитория. При наличии незафиксированных сохраненных изменений вам нужно решить, что с ними делать, прежде чем переключать ветви. Вы можете зафиксировать изменения в текущей ветви, спрятать изменения, чтобы временно сохранить их в текущей ветви, или перенести изменения в новую ветвь. Если вы хотите зафиксировать изменения перед переключением ветвей, см. раздел [Фиксация и проверка изменений в проекте](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project).
{% tip %}

**Совет**. Вы можете задать поведение по умолчанию для переключения ветвей в параметрах **Дополнительно**. Дополнительные сведения см. в разделе [Настройка основных параметров](/desktop/getting-started-with-github-desktop/configuring-basic-settings).

{% endtip %}

{% data reusables.desktop.current-branch-menu %} {% data reusables.desktop.switching-between-branches %} ![Список ветвей в репозитории](/assets/images/help/desktop/select-branch-from-dropdown.png)
3. При наличии сохраненных незафиксированных изменений, выберите **Leave my changes** (Оставить изменения) или **Bring my changes** (Перенести изменения), а затем **Switch Branch** (Переключить ветвь).
  ![Параметры переключения ветви с изменениями](/assets/images/help/desktop/stash-changes-options.png)

## Удаление ветви

Вы не можете удалить ветвь, если в настоящее время она связана с открытым запросом на вытягивание. Отменить удаление ветви невозможно.

{% mac %}

{% data reusables.desktop.select-branch-to-delete %} ![Раскрывающееся меню для выбора удаляемой ветви](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.delete-branch-mac %} ![Параметр "Удалить..." в меню ветви](/assets/images/help/desktop/delete-branch-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.select-branch-to-delete %} ![Раскрывающееся меню для выбора удаляемой ветви](/assets/images/help/desktop/select-branch-from-dropdown.png) {% data reusables.desktop.delete-branch-win %} ![Параметр "Удалить..." в меню ветви](/assets/images/help/desktop/delete-branch-win.png)

{% endwindows %}

## Дополнительные материалы

- [Клонирование репозитория из {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)
- Термин [Ветвь](/articles/github-glossary/#branch) в глоссарии {% data variables.product.prodname_dotcom %}
- [Сведения о ветвях](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
- Раздел [Branches in a Nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) (Коротко о ветвях) в документации по Git
- [Прятание изменений](/desktop/contributing-and-collaborating-using-github-desktop/stashing-changes)

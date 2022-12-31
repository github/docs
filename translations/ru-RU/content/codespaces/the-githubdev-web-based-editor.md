---
title: Веб-редактор github.dev
intro: 'Используйте github.dev {% data variables.codespaces.serverless %} из репозитория или запроса на вытягивание для создания и фиксации изменений.'
versions:
  feature: githubdev-editor
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
shortTitle: Web-based editor
redirect_from:
  - /codespaces/developing-in-codespaces/web-based-editor
ms.openlocfilehash: adc5622d666f6a32e698a29ceedfc24217b27df9
ms.sourcegitcommit: 57bef7d45acfa987d82e320c7581c87df320a28a
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172182'
---
{% note %}

**Примечание:** Сейчас github.dev {% data variables.codespaces.serverless %} находится в бета-версии. Вы можете оставить отзыв [в наших обсуждениях](https://github.com/community/community/discussions/categories/general).

{% endnote %}

## Сведения о {% data variables.codespaces.serverless %}

{% data variables.codespaces.serverless %} предоставляет упрощенный интерфейс редактирования, который полностью выполняется в браузере. С помощью {% data variables.codespaces.serverless %} можно перемещаться по файлам и репозиториям исходного кода из {% data variables.product.prodname_dotcom %}, а также вносить и фиксировать изменения кода. В редакторе можно открыть любой репозиторий, вилку или запрос на вытягивание.

{% data variables.codespaces.serverless %} доступен всем бесплатно в {% data variables.product.prodname_dotcom_the_website %}.

{% data variables.codespaces.serverless %} предоставляет многие преимущества {% data variables.product.prodname_vscode %}, такие как поиск, выделение синтаксиса и представление системы управления версиями. Также вы можете с помощью синхронизации параметров передать в редактор собственные настройки {% data variables.product.prodname_vscode_shortname %}. Дополнительные сведения см. в разделе [Синхронизация параметров](https://code.visualstudio.com/docs/editor/settings-sync) документации по {% data variables.product.prodname_vscode_shortname %}.

{% data variables.codespaces.serverless %} полностью выполняется в песочнице браузера. Для выполнения большинства функций, которые вы будете использовать, этот редактор не клонирует репозиторий, а применяет [расширение репозиториев GitHub](https://code.visualstudio.com/docs/editor/github#_github-repositories-extension). Ваша работа сохраняется в локальном хранилище браузера, пока вы не выполните фиксацию. Вам нужно регулярно фиксировать изменения, чтобы они были доступны в репозитории.

Чтобы использовать веб-редактор, необходимо войти в систему.

## Открытие {% data variables.codespaces.serverless %}

Любой репозиторий {% data variables.product.prodname_dotcom %} в {% data variables.codespaces.serverless %} можно открыть любым из следующих способов:

- Чтобы открыть репозиторий на той же вкладке браузера, нажмите клавишу <kbd>.</kbd> при просмотре любого репозитория или запроса на вытягивание в {% data variables.product.prodname_dotcom %}.
 
  Чтобы открыть репозиторий на новой вкладке браузера, нажмите клавишу <kbd>></kbd>.

- В URL-адресе вместо "github.com" укажите "github.dev".
- При просмотре файла откройте раскрывающееся меню рядом с {% octicon "pencil" aria-label="The edit icon" %} и выберите действие **Открыть в github.dev**.

  ![Раскрывающееся меню редактирования файла](/assets/images/help/repository/edit-file-edit-dropdown.png)

## {% data variables.product.prodname_codespaces %} и {% data variables.codespaces.serverless %}

{% data variables.codespaces.serverless %} и {% data variables.product.prodname_github_codespaces %} позволяют редактировать код непосредственно из репозитория. Но они предоставляют немного разные преимущества, в зависимости от варианта использования.

|| {% data variables.codespaces.serverless %} | {% data variables.product.prodname_github_codespaces %}|
|-|----------------|---------|
| **Стоимость** | Свободная.      | Бесплатная ежемесячная квота использования для личных учетных записей. Сведения о ценах см. в разделе [Сведения о выставлении счетов за {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#github-codespaces-pricing).|
| **Доступность** | Доступно для всех пользователей на сайте GitHub.com. | Доступно для всех пользователей на сайте GitHub.com. |
| **Запуск** | {% data variables.codespaces.serverless %} мгновенно открывается нажатием клавиши, и вы можете начать использовать его сразу, не дожидаясь дополнительной настройки или установки. | При создании или возобновлении пространства кода потребуются настройка виртуальной машины и контейнера на основе содержимого файла `devcontainer.json`. Для этого нужно настроить среду, что занимает несколько минут. Дополнительные сведения см. в разделе [Создание codespace для репозитория](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository). |
| **Среда выполнения приложений**  | Вычислительные ресурсы не предоставляются, поэтому вы не сможете компилировать и запускать код или использовать интегрированный терминал. | С помощью {% data variables.product.prodname_github_codespaces %} вы получаете возможности выделенной виртуальной машины, на которой можно запускать и отлаживать приложение.|
| **Доступ к терминалу** | Нет. | {% data variables.product.prodname_github_codespaces %} предоставляет общий набор средств по умолчанию, что означает, что терминал можно использовать точно так же, как и в локальной среде.|
| **Расширения**  | В представлении расширений появится только подмножество расширений, которые могут выполняться в формате веб-приложения. Дополнительные сведения см. в разделе [Использование расширений](#using-extensions).| С помощью {% data variables.product.prodname_github_codespaces %} можно использовать большинство расширений из {% data variables.product.prodname_vscode_marketplace %}.|

### Продолжить работу с {% data variables.product.prodname_codespaces %}

Рабочий процесс можно запустить в {% data variables.codespaces.serverless %} и продолжить работу с codespace. Если вы попытаетесь получить доступ к представлению запуска и отладки или терминалу, вы получите уведомление о том, что они недоступны в {% data variables.codespaces.serverless %}.

Чтобы продолжить работу в пространстве кода, последовательно щелкните **Продолжить работу на...** и **Создать новое пространство кода**, чтобы создать пространство кода для текущей ветви. Перед выполнением этого действия необходимо зафиксировать любые изменения.

![Снимок экрана, на котором показана кнопка "Продолжить работу на" в пользовательском интерфейсе](/assets/images/help/codespaces/codespaces-continue-working.png)

## Использование системы управления версиями

При использовании {% data variables.codespaces.serverless %} все действия управляются через представление системы управления версиями, которое находится на панели действий слева. Дополнительные сведения о представлении системы управления версиями см. в разделе [Управление версиями](https://code.visualstudio.com/docs/editor/versioncontrol) документации по {% data variables.product.prodname_vscode_shortname %}.

Так как веб-редактор использует для управления функциональными возможностями расширение репозиториев GitHub, вы можете переключать ветви без необходимости прятать изменения. Дополнительные сведения см. в разделе [Репозитории GitHub](https://code.visualstudio.com/docs/editor/github#_github-repositories-extension) документации по {% data variables.product.prodname_vscode_shortname %}.

### Создание ветви

{% data reusables.codespaces.create-or-switch-branch %} Все незафиксированные изменения, внесенные в старой ветви, будут доступны и в новой ветви.

### Фиксация изменений

{% data reusables.codespaces.source-control-commit-changes %} 
5. При фиксации изменений они автоматически передаются в выбранную ветвь в {% data variables.product.prodname_dotcom %}.
### Создание запроса на включение изменений

{% data reusables.codespaces.source-control-pull-request %}

### Работа с существующим запросом на вытягивание

{% data variables.codespaces.serverless %} можно использовать для работы с существующим запросом на вытягивание.

1. Перейдите к запросу на вытягивание, который вы хотите открыть в {% data variables.codespaces.serverless %}.
2. Нажмите, `.` чтобы открыть запрос на вытягивание в {% data variables.codespaces.serverless %}.
3. Внесите нужные изменения и зафиксируйте их, выполнив действия, описанные в разделе [Фиксация изменений](#commit-your-changes). Все изменения будут сразу зафиксированы в выбранной ветви, их не нужно дополнительно отправлять.

## Применение расширений

{% data variables.codespaces.serverless %} поддерживает расширения {% data variables.product.prodname_vscode_shortname %}, которые были специально созданы или обновлены для запуска в Интернете. Такие расширения называются "веб-расширениями". Сведения о том, как создать веб-расширение или дополнить существующее расширение поддержкой этого формата, см. в разделе [Веб-расширения](https://code.visualstudio.com/api/extension-guides/web-extensions) документации по {% data variables.product.prodname_vscode_shortname %}.

Расширения, которые могут выполняться в {% data variables.codespaces.serverless %}, будут отображаться в представлении расширений и могут быть установлены. При использовании синхронизации параметров автоматически устанавливаются и все совместимые расширения. Подробнее см. раздел [Синхронизация параметров](https://code.visualstudio.com/docs/editor/settings-sync) документации по {% data variables.product.prodname_vscode_shortname %}.


## Устранение неполадок

Если у вас возникли проблемы при открытии {% data variables.codespaces.serverless %}, попробуйте сделать следующее:

- Убедитесь, что вы выполнили вход в {% data variables.product.prodname_dotcom %}.
- Отключите все блокировщики рекламы.
- Используйте окно без инкогнито в браузере, чтобы открыть {% data variables.codespaces.serverless %}.

### Известные ограничения

- {% data variables.codespaces.serverless %} в настоящее время поддерживается в Chrome (и других браузерах на основе Chromium), Edge, Firefox и Safari. Мы рекомендуем всегда использовать последнюю версию любого из этих браузеров.
- Некоторые настраиваемые сочетания клавиш могут работать не во всех браузерах. Существующие ограничения для настраиваемых сочетаний клавиш описаны в разделе [Известные ограничения и адаптации](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations) документации по {% data variables.product.prodname_vscode_shortname %}.
- `.` может не открыть {% data variables.codespaces.serverless %} в соответствии с локальной раскладкой клавиатуры. В этом случае можно открыть любой репозиторий {% data variables.product.prodname_dotcom %} в {% data variables.codespaces.serverless %}, изменив URL-адрес с `github.com` на `github.dev`.

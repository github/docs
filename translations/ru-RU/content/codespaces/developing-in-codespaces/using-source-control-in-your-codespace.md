---
title: Использование системы управления версиями в codespace
intro: После внесения изменений в файл в codespace можно быстро зафиксировать изменения и отправить обновление в удаленный репозиторий.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Source control
ms.openlocfilehash: 513bf0729e1f04bf93f45999b2fa9e45231add5c
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160002'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## Сведения об управлении версиями в {% data variables.product.prodname_github_codespaces %}

Можно выполнять все необходимые действия Git непосредственно в codespace. Например, можно получать изменения из удаленного репозитория, переключать ветви, создавать новую ветвь, фиксировать и отправлять изменения, а также создавать запрос на вытягивание. Встроенный терминал в codespace можно использовать для ввода команд Git или щелкнуть значки и параметры меню, чтобы выполнить все наиболее распространенные задачи Git. В этом руководстве объясняется, как использовать графический пользовательский интерфейс для управления версиями.

{% vscode %}

Дополнительные сведения о поддержке Git в {% data variables.product.prodname_vscode %} см. в разделе [Использование управления версиями в VS Code](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support) документации по {% data variables.product.prodname_vscode %}.

{% endvscode %}

{% webui %}

Система управления версиями в веб-клиенте {% data variables.product.prodname_vscode %} использует тот же рабочий процесс, что и классическое приложение {% data variables.product.prodname_vscode %}. Дополнительные сведения см. в разделе [Использование управления версиями в VS Code](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support) документации по {% data variables.product.prodname_vscode %}.

{% endwebui %}

Типичным рабочим процессом обновления файла с помощью {% data variables.product.prodname_github_codespaces %} будет следующее:

* Из ветви по умолчанию репозитория на {% data variables.product.prodname_dotcom %} создайте codespace. См. раздел [Создание пространства кода для репозитория](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository).
* В codespace создайте новую ветвь для работы.
* Внесите необходимые изменения и сохраните их.
* Зафиксируйте изменения.
* Создайте запрос на вытягивание.

{% webui %}

{% data reusables.codespaces.source-control %} 

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.source-control %} 

{% endvscode %}

{% jetbrains %}

## Создание или переключение ветвей

1. Щелкните имя ветви в правой части строки состояния.

   ![Снимок экрана: имя ветви в строке состояния](/assets/images/help/codespaces/jetbrains-branch-button.png)

1. Во всплывающем меню выполните одно из указанных ниже действий.
   * Чтобы создать новую ветвь на основе текущей ветви, щелкните имя текущей ветви, а затем выберите **Создать ветвь**. 

     ![Снимок экрана: параметр "Новая ветвь"](/assets/images/help/codespaces/jetbrains-new-branch-option.png)

     Введите имя новой ветви и нажмите кнопку **Создать**.

     ![Снимок экрана: диалоговое окно создания ветви](/assets/images/help/codespaces/jetbrains-create-branch-dialog.png)

   * Чтобы извлечь существующую ветвь, начните вводить имя ветви, которую вы хотите извлечь. Щелкните ветвь из списка и нажмите кнопку **Извлечь**.

     ![Снимок экрана: вариант оформления заказа](/assets/images/help/codespaces/jetbrains-checkout-submenu.png)

     {% tip %}

     **Совет**. Если кто-то недавно изменил файл в удаленном репозитории, в ветви, на который вы переключились, эти изменения могут не отображаться, пока вы не извлекете изменения в codespace. 

     {% endtip %}


## Фиксация изменений 

1. В правой части панели навигации установите флажок.

   ![Снимок экрана: флажок фиксации](/assets/images/help/codespaces/jetbrains-commit-button.png)

1. В диалоговом окне Фиксация изменений введите сообщение о фиксации.
1. Нажмите кнопку **Зафиксировать**.

   Кроме того, щелкните стрелку вниз рядом с **кнопкой Фиксация** и нажмите кнопку **Зафиксировать и отправить**.

   ![Снимок экрана: кнопка фиксации и нажатия](/assets/images/help/codespaces/jetbrains-commit-and-push.png)

## Вытягивание изменений из удаленного репозитория

Вы можете извлекать изменения из той же ветви в удаленном репозитории и применять их к копии репозитория, над которым вы работаете в codespace.

1. В правой части панели навигации щелкните стрелку вниз.

   ![Снимок экрана: кнопка со стрелкой вниз проекта обновления](/assets/images/help/codespaces/jetbrains-update-project-button.png)

1. В диалоговом окне Обновление проекта выберите, нужно ли объединять или переначислить входящие изменения.

   ![Снимок экрана: диалоговое окно "Обновление проекта"](/assets/images/help/codespaces/jetbrains-update-options.png)

1. Нажмите кнопку **ОК**.

## Отправка изменений в удаленный репозиторий

Вы можете отправлять сохраненные и зафиксированные изменения. После этого изменения будут применены к вышестоящей ветви в удаленном репозитории. Это можно сделать, если вы еще не готовы создать запрос на вытягивание или если вы предпочитаете создать такой запрос в {% data variables.product.prodname_dotcom %}.

1. В правой части панели навигации щелкните стрелку вверх.

   ![Снимок экрана: стрелка вверх при отправке фиксаций](/assets/images/help/codespaces/jetbrains-push-button.png)

1. В диалоговом окне Отправка фиксаций нажмите кнопку **Отправить**.

{% endjetbrains %}

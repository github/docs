---
title: Изменение типа компьютера для codespace
shortTitle: Change the machine type
intro: 'Вы можете изменить тип компьютера, на котором выполняется codespace, чтобы использовать ресурсы, соответствующие выполняемой работе.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: b8614e9389aa617b3bfcfa3444f5a60aa7dd3c2e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159088'
---
## Сведения о типах компьютеров

{% data reusables.codespaces.codespaces-machine-types %} Можно выбрать альтернативный тип компьютера при создании codespace или в любое время после создания codespace. 

Сведения о выборе типа компьютера при создании codespace см. в разделе [Создание codespace для репозитория](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository).

{% data reusables.codespaces.machine-types-for-unpublished-codespaces %} Дополнительные сведения см. в разделе [Создание codespace на основе шаблона](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template).

## Изменение типа компьютера

{% note %}

**Примечание**. {% data reusables.codespaces.codespaces-machine-type-availability %}

{% endnote %}

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}

   Отображается текущий тип компьютера для каждого из codespace.

   ![Список "Ваши codespace"](/assets/images/help/codespaces/your-codespaces-list.png)

{% data reusables.codespaces.ellipsis-settings %}
1. Щелкните **Изменить тип компьютера**.

   ![Пункт меню "Изменить тип компьютера"](/assets/images/help/codespaces/change-machine-type-menu-option.png)
1. Если для codespace доступно несколько типов компьютеров, выберите нужный.

   ![Диалоговое окно с доступными типами компьютеров для выбора](/assets/images/help/codespaces/change-machine-type-choice.png)
1. Щелкните **Обновить codespace**. 

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.changing-machine-type-in-vscode %}

{% endvscode %}

{% cli %}

Для изменения типа компьютера codespace можно использовать `gh codespace edit --machine MACHINE-TYPE-NAME` команду {% data variables.product.prodname_cli %}. Чтобы использовать эту команду, сначала необходимо узнать доступные типы компьютеров для codespace.

1. Чтобы просмотреть список codespaces, в окне терминала введите следующую команду.
   
   ```
   gh codespace list
   ```
1. При необходимости, чтобы найти текущий тип компьютера для codespace, введите следующую команду.
   
   ```
   gh api /user/codespaces/CODESPACE-NAME
   ```

   Замените `CODESPACE-NAME` постоянным именем codespace, например `octocat-literate-space-parakeet-mld5`. Постоянные имена перечислены в столбце **NAME** в списке, возвращаемом .`gh codespace list`

   Если вам будет предложено запросить `codespace` область, следуйте инструкциям в терминале.

   Сведения о текущем компьютере перечислены в `machine` поле .
1. Чтобы найти доступные типы компьютеров для codespace, введите следующую команду.
   
   ```
   gh api /user/codespaces/CODESPACE-NAME/machines
   ```

   Замените `CODESPACE-NAME` постоянным именем codespace, например `octocat-literate-space-parakeet-mld5`.
1. Чтобы изменить тип компьютера для codespace, введите следующую команду.

   ```
   gh codespace edit --machine MACHINE-TYPE-NAME
   ```

   Замените `MACHINE-TYPE-NAME` именем доступного типа компьютера для codespace, например `standardLinux32gb`. 
1. С помощью клавиш со стрелками перейдите к пространству кода, которое вы хотите изменить, и нажмите клавишу <kbd>ВВОД</kbd>.

{% endcli %}

{% data reusables.codespaces.about-changing-storage-size %}

{% cli %}

## Дополнительные материалы

- "[Компьютеры Codespaces](/rest/codespaces/machines)" в документации по REST API
- [`gh codespace edit`](https://cli.github.com/manual/gh_codespace_edit) в руководстве по {% data variables.product.prodname_cli %}

{% endcli %}

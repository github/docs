---
title: Добавление значка "Открыть в GitHub Codespaces"
shortTitle: Add a Codespaces badge
intro: 'Вы можете добавить значок в файл Markdown в репозитории, чтобы пользователи могли щелкнуть по нему для создания codespace.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: c69a815501f5943a56d32af3e58cd7850a69588b
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158784'
---
## Обзор

Добавление значка "Открыть в {% data variables.product.prodname_github_codespaces %}" в файл Markdown позволяет пользователям легко создавать codespace для репозитория.

![Снимок экрана: значок Codespaces на странице README](/assets/images/help/codespaces/codespaces-badge-on-readme.png)

При создании значка можно выбрать определенные параметры конфигурации для codespace, которое будет создаваться при нажатии на значок.

Щелкнув значок, пользователь перейдет на страницу дополнительных параметров для создания codespace, где уже указаны выбранные вами параметрами. Дополнительные сведения о странице дополнительных параметров см. в разделе [Создание пространства кода для репозитория](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository).

На странице дополнительных параметров пользователи могут при необходимости изменить предварительно заданные параметры, а затем нажать кнопку **Создать codespace**.

## Создание значка "Открыть в {% data variables.product.prodname_github_codespaces %}"

{% data reusables.repositories.navigate-to-repo %}
1. Под именем репозитория используйте раскрывающееся меню "Ветвь" и выберите ветвь, для которой нужно создать эмблему.

   ![Снимок экрана: раскрывающееся меню "Ветвь"](/assets/images/help/codespaces/branch-drop-down.png)

1. Нажмите кнопку **Код {% octicon "code" aria-label="The code icon" %}** и выберите вкладку **Кодовые пространства**.

   ![Снимок экрана: кнопка "Создать codespace"](/assets/images/help/codespaces/new-codespace-button.png)

1. Щелкните многоточие (**...**) в правом верхнем углу вкладки **Codespaces** , а затем щелкните **Создать с параметрами**.

   ![Снимок экрана: параметр "Настройка и создание codespace"](/assets/images/help/codespaces/default-machine-type.png)

1. На странице дополнительных параметров для создания codespace выберите значения, которые должны быть указаны для пользователей.

   ![Снимок экрана: страница дополнительных параметров](/assets/images/help/codespaces/advanced-options.png)

1. Скопируйте URL-адрес из адресной строки браузера.
1. Добавьте следующий код Markdown, например, в файл `README.md` репозитория:

   ```Markdown{:copy}
   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](COPIED-URL)
   ```

   Например:

   ```Markdown
   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=0000000&machine=premiumLinux&devcontainer_path=.devcontainer%2Fdevcontainer.json&location=WestUs2)
   ```

   В приведенном выше примере `0000000` будет ссылочным номером репозитория. Другие сведения в URL-адресе определяются значениями, выбранными в полях на странице дополнительных параметров.

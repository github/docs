---
title: Добавление компонентов в файл devcontainer.json
shortTitle: Adding features
intro: 'С помощью функций вы можете быстро добавлять средства, среды выполнения или библиотеки в конфигурацию контейнера разработки.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: 7e72739e93e83995d86baf19d62f7bf2e1c5b6bc
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180830'
---
{% data reusables.codespaces.about-features %} Используйте вкладки в этой статье, чтобы отобразить инструкции для каждого из этих способов добавления функций.

## Добавление компонентов в `devcontainer.json` файл

{% webui %}

1. Перейдите в репозиторий на {% data variables.product.prodname_dotcom_the_website %}, найдите `devcontainer.json` файл и щелкните {% octicon "pencil" aria-label="The edit icon" %}, чтобы изменить файл.
   
   Если у `devcontainer.json` вас еще нет файла, его можно создать. Дополнительные сведения см. в статье [Общие сведения о контейнерах разработки](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#creating-a-custom-dev-container-configuration).
1. Справа от редактора файлов на вкладке **Marketplace** найдите или найдите функцию, которую вы хотите добавить, а затем щелкните имя функции.

   ![Снимок экрана: функция Terraform на вкладке Marketplace с "Terra" в строке поиска](/assets/images/help/codespaces/feature-marketplace.png)
3. В разделе "Установка" щелкните фрагмент кода, чтобы скопировать его в буфер обмена, а затем вставьте его в `features` объект в файле `devcontainer.json` .

   ![Снимок экрана: блок кода в разделе "Установка" на вкладке Marketplace](/assets/images/help/codespaces/feature-installation-code.png)

   ```JSON
   "features": {
        ...
        "ghcr.io/devcontainers/features/terraform:1": {},
        ...
    }
    ```
1. По умолчанию будет использоваться последняя версия компонента. Чтобы выбрать другую версию или настроить другие параметры компонента, разверните свойства, перечисленные в разделе "Параметры", чтобы просмотреть доступные значения, а затем добавьте параметры, вручную изменив объект в файле `devcontainer.json` .

   ![Снимок экрана: раздел "Параметры" вкладки Marketplace с развернутыми "версия" и "tflint"](/assets/images/help/codespaces/feature-options.png)

   ```JSON
   "features": {
        ...
        "ghcr.io/devcontainers/features/terraform:1": {
            "version": "1.1",
            "tflint": "latest"
        },
        ...
    }
    ```
1. Зафиксируйте изменения в `devcontainer.json` файле.

Изменения конфигурации вступают в силу в новых пространствах кода, созданных из репозитория. Чтобы изменения вступили в силу в существующих codespaces, необходимо извлечь обновления `devcontainer.json` файла в codespace, а затем перестроить контейнер для codespace. Дополнительные сведения см. в статье [Общие сведения о контейнерах разработки](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace).

{% endwebui %}

{% vscode %}

{% note %}

Чтобы добавить компоненты в {% data variables.product.prodname_vscode_shortname %} во время работы локально и не подключены к codespace, необходимо установить и включить расширение "Контейнеры разработки". Дополнительные сведения об этом расширении см. в [{% data variables.product.prodname_vs_marketplace_shortname %}](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

{% endnote %}

{% data reusables.codespaces.command-pallette %}
2. Начните вводить "Настроить" и выберите **Codespaces: Configure Dev Container Features (Codespaces: Configure Dev Container Features).**

   ![Команда "Настроить компоненты Devcontainer" на палитре команд](/assets/images/help/codespaces/codespaces-configure-features.png)

3. Измените выбранные компоненты, а затем нажмите кнопку **ОК**.

   ![Меню выбора дополнительных компонентов во время настройки контейнера](/assets/images/help/codespaces/select-additional-features.png)

4. Если вы работаете в codespace, в правом нижнем углу появится запрос. Чтобы перестроить контейнер и применить изменения к пространству кода, в который вы работаете, нажмите кнопку **Перестроить сейчас**.

   !["Codespaces: перестроение контейнера" на палитре команд](/assets/images/help/codespaces/rebuild-prompt.png)

{% endvscode %}

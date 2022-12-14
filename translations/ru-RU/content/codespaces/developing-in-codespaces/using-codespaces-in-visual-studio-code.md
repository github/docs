---
title: Использование кодовых пространств в Visual Studio Code
intro: Можно заниматься разработкой в codespace непосредственно в {% data variables.product.prodname_vscode %} путем подключения расширения {% data variables.product.prodname_github_codespaces %} к учетной записи в {% data variables.product.product_name %}.
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
- /github/developing-online-with-codespaces/using-codespaces-in-visual-studio-code
- /github/developing-online-with-codespaces/connecting-to-your-codespace-from-visual-studio-code
- /github/developing-online-with-codespaces/using-codespaces-in-visual-studio
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Visual Studio Code
- Developer
shortTitle: Visual Studio Code
ms.openlocfilehash: b49a0504dd939a18c34073176e11359725cac7e9
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "145148771"
---
## <a name="about--data-variablesproductprodname_codespaces--in--data-variablesproductprodname_vscode-"></a>Сведения о {% data variables.product.prodname_codespaces %} в {% data variables.product.prodname_vscode %}

Локальная установка {% data variables.product.prodname_vscode %} позволяет создавать кодовыми пространства, управлять ими, работать в таких пространствах и удалять их. Чтобы использовать {% data variables.product.prodname_codespaces %} в {% data variables.product.prodname_vscode_shortname %}, необходимо установить расширение {% data variables.product.prodname_github_codespaces %}. Дополнительные сведения о настройке кодовых пространств в {% data variables.product.prodname_vscode_shortname %} см. в разделе [Предварительные требования](#prerequisites).

По умолчанию при создании нового кодовое пространства в {% data variables.product.prodname_dotcom_the_website %} оно открывается в браузере. Если вы хотите, чтобы новые кодовые пространства автоматически открывались в {% data variables.product.prodname_vscode_shortname %}, выберите {% data variables.product.prodname_vscode_shortname %} как редактор по умолчанию. Дополнительные сведения см. в разделе [Настройка редактора по умолчанию для {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces).

Если вы предпочитаете работать в браузере, но хотите и дальше использовать существующие расширения, темы и ярлыки {% data variables.product.prodname_vscode_shortname %}, можно включить синхронизацию параметров. Дополнительные сведения см. в разделе [Персонализация {% data variables.product.prodname_codespaces %} для вашей учетной записи](/codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account#settings-sync).

## <a name="prerequisites"></a>Предварительные требования

Чтобы заниматься разработкой непосредственно в кодовом пространстве {% data variables.product.prodname_vscode_shortname %}, установите расширение {% data variables.product.prodname_github_codespaces %} и выполните вход под своими учетными данными для {% data variables.product.product_name %}. Для расширения {% data variables.product.prodname_github_codespaces %} требуется {% data variables.product.prodname_vscode_shortname %} 1.51 за октябрь 2020 года или более поздней версии.

Используйте {% data variables.product.prodname_vscode_marketplace %} для установки расширения [{% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces). Дополнительные сведения см. в разделе [Магазин расширений](https://code.visualstudio.com/docs/editor/extension-gallery) в документации по {% data variables.product.prodname_vscode_shortname %}.


{% mac %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Нажмите **Войти и посмотреть {% data variables.product.prodname_dotcom %}...** .

   ![Войти и посмотреть {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode-mac.png)

2. Чтобы разрешить {% data variables.product.prodname_vscode_shortname %} доступ к вашей учетной записи в {% data variables.product.product_name %}, нажмите **Разрешить**.
3. Войдите в {% data variables.product.product_name %} и утвердите расширение.

{% endmac %}

{% windows %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. В раскрывающемся меню "УДАЛЕННЫЙ ОБОЗРЕВАТЕЛЬ" выберите **{% data variables.product.prodname_github_codespaces %}** .

   ![Заголовок {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/codespaces-header-vscode.png)

1. Нажмите **Войти и посмотреть {% data variables.product.prodname_codespaces %}...** .

   ![Войти и посмотреть {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)

1. Чтобы разрешить {% data variables.product.prodname_vscode_shortname %} доступ к вашей учетной записи в {% data variables.product.product_name %}, нажмите **Разрешить**.
1. Войдите в {% data variables.product.product_name %} и утвердите расширение.

{% endwindows %}

## <a name="creating-a-codespace-in--data-variablesproductprodname_vscode_shortname-"></a>Создание кодового пространства в {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

## <a name="opening-a-codespace-in--data-variablesproductprodname_vscode_shortname-"></a>Открытие кодового пространства в {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. В разделе "Кодовые пространства" щелкните правой кнопкой мыши кодовое пространство, в котором вы хотите заняться разработкой.
1. Нажмите на значок "Подключение к кодовому пространству".

   ![Значок "Подключение к кодовому пространству" в {% data variables.product.prodname_vscode_shortname %}](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

## <a name="changing-the-machine-type-in--data-variablesproductprodname_vscode_shortname-"></a>Изменение типа компьютера в {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.codespaces-machine-types %} Тип компьютера для кодового пространства можно изменить в любой момент.

1. В {% data variables.product.prodname_vscode_shortname %} откройте палитру команд (`shift command P` / `shift control P`).
1. Найдите и выберите "Кодовые пространства: изменение типа компьютера".

   ![Поиск ветви для создания нового кодового пространства {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/vscode-change-machine-type-option.png)

1. Щелкните кодовое пространство, которое требуется изменить.

   ![Поиск ветви для создания нового кодового пространства {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/vscode-change-machine-choose-repo.png)

1. Щелкните тип компьютера, который хотите использовать. 

   {% note %}

   **Примечание**. {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}

1. Если кодовое пространство запущено, отобразится сообщение с вопросом о необходимости перезапуска и повторного подключения к этому кодовому пространству.

   Нажмите **Да**, если вы хотите изменить тип компьютера, используемый для этого кодового пространства, незамедлительно.
   
   Если вы нажмете **Нет** или кодовое пространство в текущий момент не выполняется, изменение вступит в силу при следующем перезапуске кодового пространства.

## <a name="deleting-a-codespace-in--data-variablesproductprodname_vscode_shortname-"></a>Удаление кодового пространства в {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

## <a name="switching-to-the-insiders-build-of--data-variablesproductprodname_vscode_shortname-"></a>Переключение на сборку участников программы предварительной оценки в {% data variables.product.prodname_vscode_shortname %}

[Сборку участников программы предварительной оценки {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/setup/setup-overview#_insiders-nightly-build) можно использовать в {% data variables.product.prodname_codespaces %}.

1. В левом нижнем углу окна {% data variables.product.prodname_codespaces %} выберите **Параметры {% octicon "gear" aria-label="The settings icon" %}** .
2. В открывшемся списке выберите "Переключиться на версию участников программы предварительной оценки".

   ![Щелкните "Сборка участников программы предварительной оценки" в {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/codespaces-insiders-vscode.png)
3. После выбора этого параметра {% data variables.product.prodname_codespaces %} будет открываться в версии участников программы предварительной оценки.

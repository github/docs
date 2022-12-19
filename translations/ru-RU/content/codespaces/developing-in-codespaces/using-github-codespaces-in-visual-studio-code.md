---
title: Использование GitHub Codespaces в Visual Studio Code
shortTitle: Visual Studio Code
intro: 'Можно заниматься разработкой в codespace непосредственно в {% data variables.product.prodname_vscode %} путем подключения расширения {% data variables.product.prodname_github_codespaces %} к учетной записи в {% data variables.product.product_name %}.'
redirect_from:
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio-code
  - /github/developing-online-with-codespaces/connecting-to-your-codespace-from-visual-studio-code
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio
  - /codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
ms.openlocfilehash: c651620e2795fb29f2b995f745ad3880e99c0f4e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159922'
---
## Сведения о {% data variables.product.prodname_github_codespaces %} в {% data variables.product.prodname_vscode %}

Локальная установка {% data variables.product.prodname_vscode %} позволяет создавать кодовыми пространства, управлять ими, работать в таких пространствах и удалять их. {% data reusables.codespaces.using-codespaces-in-vscode %} Дополнительные сведения о настройке {% data variables.product.prodname_github_codespaces %} в {% data variables.product.prodname_vscode_shortname %} см. в разделе [Предварительные требования](#prerequisites).

По умолчанию при создании нового кодовое пространства в {% data variables.product.prodname_dotcom_the_website %} оно открывается в браузере. Если вы хотите, чтобы новые кодовые пространства автоматически открывались в {% data variables.product.prodname_vscode_shortname %}, выберите {% data variables.product.prodname_vscode_shortname %} как редактор по умолчанию. Дополнительные сведения см. в разделе [Настройка редактора по умолчанию для {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces).

Если вы предпочитаете работать в браузере, но хотите и дальше использовать существующие расширения, темы и ярлыки {% data variables.product.prodname_vscode_shortname %}, можно включить синхронизацию параметров. Дополнительные сведения см. в разделе [Персонализация {% data variables.product.prodname_github_codespaces %} для вашей учетной записи](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#settings-sync).

## Предварительные требования

Чтобы заниматься разработкой непосредственно в кодовом пространстве {% data variables.product.prodname_vscode_shortname %}, установите расширение {% data variables.product.prodname_github_codespaces %} и выполните вход под своими учетными данными для {% data variables.product.product_name %}. Для расширения {% data variables.product.prodname_github_codespaces %} требуется {% data variables.product.prodname_vscode_shortname %} 1.51 за октябрь 2020 года или более поздней версии.

Используйте {% data variables.product.prodname_vscode_marketplace %} для установки расширения [{% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces). Дополнительные сведения см. в разделе [Магазин расширений](https://code.visualstudio.com/docs/editor/extension-gallery) в документации по {% data variables.product.prodname_vscode_shortname %}.


{% mac %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Щелкните **Войти в {% data variables.product.prodname_dotcom %}...**.

   ![Вход в {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode-mac.png)

2. Чтобы разрешить {% data variables.product.prodname_vscode_shortname %} доступ к вашей учетной записи в {% data variables.product.product_name %}, нажмите **Разрешить**.
3. Войдите в {% data variables.product.product_name %} и утвердите расширение.

{% endmac %}

{% windows %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. В раскрывающемся меню "УДАЛЕННЫЙ ОБОЗРЕВАТЕЛЬ" выберите **{% data variables.product.prodname_github_codespaces %}** .

   ![Заголовок {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/codespaces-header-vscode.png)

1. Щелкните **Войти, чтобы просмотреть {% data variables.product.prodname_codespaces %}**.

   ![Вход для просмотра {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)

1. Чтобы разрешить {% data variables.product.prodname_vscode_shortname %} доступ к вашей учетной записи в {% data variables.product.product_name %}, нажмите **Разрешить**.
1. Войдите в {% data variables.product.product_name %} и утвердите расширение.

{% endwindows %}

## Создание кодового пространства в {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

## Открытие кодового пространства в {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. В разделе "Кодовые пространства" щелкните правой кнопкой мыши кодовое пространство, в котором вы хотите заняться разработкой.
1. Нажмите на значок "Подключение к кодовому пространству".

   ![Значок "Подключение к кодовому пространству" в {% data variables.product.prodname_vscode_shortname %}](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

## Изменение типа компьютера в {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.codespaces-machine-types %} Тип компьютера для кодового пространства можно изменить в любой момент.

{% note %}

**Примечание**. {% data reusables.codespaces.codespaces-machine-type-availability %}

{% endnote %}

{% data reusables.codespaces.changing-machine-type-in-vscode %}

{% data reusables.codespaces.about-changing-storage-size %}

## Удаление кодового пространства в {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

## Переключение на сборку участников программы предварительной оценки в {% data variables.product.prodname_vscode_shortname %}

Вы можете использовать [сборку участников программы предварительной оценки {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/setup/setup-overview#_insiders-nightly-build) в {% data variables.product.prodname_github_codespaces %}.

1. В левом нижнем углу окна {% data variables.product.prodname_github_codespaces %} выберите **{% octicon "gear" aria-label="The settings icon" %} Параметры**.
2. В открывшемся списке выберите "Переключиться на версию участников программы предварительной оценки".

   ![Щелкните "Сборка участников программы предварительной оценки" в {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/codespaces-insiders-vscode.png)

3. После выбора {% data variables.product.prodname_github_codespaces %} продолжит открываться в версии участников программы предварительной оценки.

## Дополнительные материалы

- [Использование {% data variables.product.prodname_vscode_command_palette %} в {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces)"
- [Использование {% data variables.product.prodname_copilot %} в {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/using-github-copilot-in-github-codespaces)"

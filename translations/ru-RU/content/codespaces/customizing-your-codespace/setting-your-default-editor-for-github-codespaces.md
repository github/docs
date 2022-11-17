---
title: Настройка редактора по умолчанию для GitHub Codespaces
shortTitle: Set the default editor
intro: '{% data reusables.codespaces.about-changing-default-editor %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces
  - /codespaces/customizing-your-codespace/setting-your-default-editor-for-codespaces
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: 5c286ffe8f96d275dc0b20949a87b7ced411c9af
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159933'
---
На странице параметров можно задать параметры редактора таким образом, чтобы при создании codespace или открытии существующего codespace оно открывалось по вашему выбору:
* {% data variables.product.prodname_vscode %} (классическое приложение)
* {% data variables.product.prodname_vscode %} (веб-клиентское приложение)
* Шлюз JetBrains — для открытия codespace в интегрированной среде разработки JetBrains.
* JupyterLab — веб-интерфейс для Project Jupyter 

{% data reusables.codespaces.template-codespaces-default-editor %}

Если вы хотите использовать {% data variables.product.prodname_vscode %} в качестве редактора по умолчанию для {% data variables.product.prodname_github_codespaces %}, необходимо установить {% data variables.product.prodname_vscode %} и расширение {% data variables.product.prodname_github_codespaces %} для {% data variables.product.prodname_vscode %}. Дополнительные сведения см. на [странице скачивания для {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/download/) и [странице расширения{% data variables.product.prodname_github_codespaces %} в {% data variables.product.prodname_vscode %} Marketplace](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

Если вы хотите работать с codespace в интегрированной среде разработки JetBrains, необходимо установить шлюз JetBrains. Дополнительные сведения см. в разделе [Использование {% data variables.product.prodname_github_codespaces %} в интегрированной среде разработки JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide).

## Настройка редактора по умолчанию

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. В разделе "Параметры редактора" выберите нужный вариант.

   ![Настройка редактора](/assets/images/help/codespaces/select-default-editor.png)

   * {% data reusables.codespaces.application-installed-locally %}<br><br>

   * Если выбрать **{% data variables.product.prodname_vscode %}**, {% data variables.product.prodname_github_codespaces %} автоматически откроется в классическом приложении при следующем создании или открытии codespace. 

     Возможно, вам потребуется разрешить доступ к браузеру и {% data variables.product.prodname_vscode %} для успешного открытия.<br><br>
     
   * Если выбрать **Шлюз JetBrains**, приложение шлюза автоматически откроется при следующем создании или открытии codespace. 

     При первом открытии codespace таким образом необходимо предоставить разрешение на открытие приложения. 

     Откроется приложение шлюза, а пространство codespace будет выбрано автоматически. Затем можно выбрать интегрированную среду разработки JetBrains, если это еще не сделано, и нажать кнопку **Подключиться** , чтобы открыть пространство кода в клиенте JetBrains. Дополнительные сведения см. в разделе [Использование {% data variables.product.prodname_github_codespaces %} в интегрированной среде разработки JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide).
     
     Чтобы подключиться к codespace из приложения шлюза, необходимо иметь сервер SSH, работающий в codespace. {% indented_data_reference reusables.codespaces.ssh-server-installed spaces=5 %}

   * Если выбрать **JupyterLab**, приложение JupyterLab должно быть установлено в открытых пространствах кода. {% data reusables.codespaces.jupyterlab-in-default-image %}

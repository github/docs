---
title: Настройка редактора по умолчанию для Codespaces
shortTitle: Set the default editor
intro: Редактор по умолчанию для {% data variables.product.prodname_codespaces %} можно задать на странице личных параметров.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
- /codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces
topics:
- Codespaces
type: how_to
ms.openlocfilehash: 3c2fe809a749244efd8ffe76cde31646f984bea3
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "146681304"
---
На странице параметров можно задать параметры редактора, чтобы все новые создаваемые пространства codespace открывались автоматически {% data variables.product.prodname_vscode %} for Web или классическом приложении {% data variables.product.prodname_vscode %}.

Если вы хотите использовать {% data variables.product.prodname_vscode %} в качестве редактора данных по умолчанию для {% data variables.product.prodname_codespaces %}, необходимо установить {% data variables.product.prodname_vscode %} и расширение {% data variables.product.prodname_github_codespaces %} для {% data variables.product.prodname_vscode %}. Дополнительные сведения см. на [странице скачивания для {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/download/) и [странице расширения{% data variables.product.prodname_github_codespaces %} в {% data variables.product.prodname_vscode %} Marketplace](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces).

## <a name="setting-your-default-editor"></a>Настройка редактора по умолчанию

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. В разделе "Параметры редактора" выберите нужный вариант.
   ![Настройка редактора](/assets/images/help/codespaces/select-default-editor.png) При выборе варианта **{% data variables.product.prodname_vscode %}** при следующем создании пространства codespace {% data variables.product.prodname_codespaces %} автоматически откроется в классическом приложении. Возможно, вам потребуется разрешить доступ к браузеру и {% data variables.product.prodname_vscode %} для успешного открытия.
   ![Настройка редактора](/assets/images/help/codespaces/launch-default-editor.png)

---
title: Использование GitHub Copilot в Codespaces
intro: Вы можете использовать Copilot в Codespaces, добавив это расширение.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
- Copilot
- Visual Studio Code
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Copilot in Codespaces
redirect_from:
- /codespaces/codespaces-reference/using-copilot-in-codespaces
ms.openlocfilehash: 05e8779688b2136c7fd53a1cebd99fd75b531f2c
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "145149343"
---
## <a name="using--data-variablesproductprodname_copilot-"></a>Использование {% data variables.product.prodname_copilot %}

[{% data variables.product.prodname_copilot %}](https://copilot.github.com/), помощник при написании кода для ИИ, может использоваться в любом пространстве кода. Чтобы начать использование {% data variables.product.prodname_copilot_short %} в {% data variables.product.prodname_codespaces %}, установите [расширение {% data variables.product.prodname_copilot_short %} из магазина {% data variables.product.prodname_vscode_marketplace %}](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot).

Чтобы включить {% data variables.product.prodname_copilot_short %} или другие расширения во всех пространствах кода, включите синхронизацию параметров. Дополнительные сведения см. в разделе [Персонализация {% data variables.product.prodname_codespaces %} для учетной записи](/codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account#settings-sync). Кроме того, чтобы включить {% data variables.product.prodname_copilot_short %} в заданном проекте для всех пользователей, можно указать `GitHub.copilot` в качестве расширения в файле `devcontainer.json`. Сведения о настройке файла `devcontainer.json` см. в разделе [Общие сведения о контейнерах разработки](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project#creating-a-custom-dev-container-configuration).


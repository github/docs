---
ms.openlocfilehash: 5aef043edaeaf981964defece5a3a008a89ee5b8
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160153"
---
## Добавление порта в конфигурацию кодового пространства

Можно добавить переадресованный порт в конфигурацию {% data variables.product.prodname_github_codespaces %} для репозитория, чтобы автоматически выполнять переадресацию порта для всех кодовых пространств, созданных из репозитория. После обновления конфигурации все ранее созданные кодовые пространства необходимо перестроить, чтобы применить изменение. Дополнительные сведения см. в статье [Общие сведения о контейнерах разработки](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace).

Переадресованные порты можно вручную настроить в `.devcontainer.json` файле с помощью `forwardPorts` свойства или использовать панель "Порты" в пространстве кода, открытом в браузере, или в классическом приложении {% data variables.product.prodname_vscode_shortname %}.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Щелкните правой кнопкой мыши порт, который требуется добавить в конфигурацию кодового пространства, а затем выберите пункт **Задать метку и обновить devcontainer.json**.
  ![Параметр задания метки и добавления порта в файл devcontainer.json в контекстном меню](/assets/images/help/codespaces/update-devcontainer-to-add-port-option.png) {% data reusables.codespaces.type-port-label %}
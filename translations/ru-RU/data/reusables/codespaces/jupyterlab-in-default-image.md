---
ms.openlocfilehash: c3900e59c91a3d0afd192b5ff948b612bfe0ba64
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160053"
---
Образ контейнера по умолчанию включает JupyterLab, поэтому в codespace, созданных из образа по умолчанию, всегда будет установлен JupyterLab. Дополнительные сведения об образе по умолчанию см. в разделе [Общие сведения о контейнерах разработки](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)и [Репозиторий `devcontainers/images`](https://github.com/devcontainers/images/tree/main/src/universal). Если вы не используете образ по умолчанию в конфигурации контейнера разработки, можно установить JupyterLab, добавив компонент в `ghcr.io/devcontainers/features/python` `devcontainer.json` файл. Необходимо включить параметр `"installJupyterlab": true`. Дополнительные сведения см. [в файле сведений о `python` функции](https://github.com/devcontainers/features/tree/main/src/python#python-python) в репозитории `devcontainers/features` .
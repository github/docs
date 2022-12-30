---
ms.openlocfilehash: c3900e59c91a3d0afd192b5ff948b612bfe0ba64
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159666"
---
Das Standardcontainerimage enthält JupyterLab, sodass bei Codespaces, die mithilfe des Standardimages erstellt wurden, JupyterLab immer installiert ist. Weitere Informationen zum Standardimage findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration) und [im `devcontainers/images`-Repository](https://github.com/devcontainers/images/tree/main/src/universal). Wenn du nicht das Standardimage in deiner Entwicklungscontainerkonfiguration verwendest, kannst du JupyterLab installieren, indem du das Feature `ghcr.io/devcontainers/features/python` zur Datei `devcontainer.json` hinzufügst. Du solltest die Option `"installJupyterlab": true` einfügen. Weitere Informationen findest du in der [Infodatei für das Feature `python`](https://github.com/devcontainers/features/tree/main/src/python#python-python) im Repository `devcontainers/features`.
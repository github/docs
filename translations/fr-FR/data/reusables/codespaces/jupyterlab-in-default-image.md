---
ms.openlocfilehash: c3900e59c91a3d0afd192b5ff948b612bfe0ba64
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159667"
---
L’image conteneur par défaut comprend JupyterLab, donc les codespaces créés à partir de l’image par défaut ont toujours JupyterLab installé. Pour plus d’informations sur l’image par défaut, consultez « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration) » et [le dépôt `devcontainers/images`](https://github.com/devcontainers/images/tree/main/src/universal). Si vous n’utilisez pas l’image par défaut dans votre configuration de conteneur de développement, vous pouvez installer JupyterLab en ajoutant le composant `ghcr.io/devcontainers/features/python` à votre fichier `devcontainer.json`. Vous devez inclure l’option `"installJupyterlab": true`. Pour plus d’informations, consultez [le fichier README du composant `python`](https://github.com/devcontainers/features/tree/main/src/python#python-python) dans le dépôt `devcontainers/features`.
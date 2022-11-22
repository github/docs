---
ms.openlocfilehash: c3900e59c91a3d0afd192b5ff948b612bfe0ba64
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159473"
---
默认容器映像包括 JupyterLab，因此从默认映像创建的 codespaces 将始终安装 JupyterLab。 有关默认映像的详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)”和 [`devcontainers/images` 存储库](https://github.com/devcontainers/images/tree/main/src/universal)。 如果未在开发容器配置中使用默认映像，则可以通过将 `ghcr.io/devcontainers/features/python` 功能添加到 `devcontainer.json` 文件来安装 JupyterLab。 应该包括选项 `"installJupyterlab": true`。 有关详细信息，请参阅 `devcontainers/features` 存储库中的 [`python` 功能自述文件](https://github.com/devcontainers/features/tree/main/src/python#python-python)。
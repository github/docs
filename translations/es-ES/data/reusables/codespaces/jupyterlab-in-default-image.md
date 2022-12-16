---
ms.openlocfilehash: c3900e59c91a3d0afd192b5ff948b612bfe0ba64
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160052"
---
La imagen de contenedor predeterminada incluye JupyterLab, por lo que los codespaces creados a partir de la imagen predeterminada siempre lo tendrán instalado. Para obtener más información sobre la imagen predeterminada, consulta "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)" y [el `devcontainers/images` repositorio](https://github.com/devcontainers/images/tree/main/src/universal). Si no usa la imagen predeterminada en la configuración del contenedor de desarrollo, puedes instalar JupyterLab agregando la característica `ghcr.io/devcontainers/features/python` al archivo `devcontainer.json`. Debes incluir la opción `"installJupyterlab": true`. Para obtener más información, consulta [el archivo Léame de la característica `python`](https://github.com/devcontainers/features/tree/main/src/python#python-python), en el repositorio `devcontainers/features`.
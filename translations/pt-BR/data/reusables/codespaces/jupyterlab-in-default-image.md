---
ms.openlocfilehash: c3900e59c91a3d0afd192b5ff948b612bfe0ba64
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159347"
---
A imagem de contêiner padrão inclui o JupyterLab, portanto, os codespaces criados com base na imagem padrão sempre terão o JupyterLab instalado. Para obter mais informações sobre a imagem padrão, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)" e [ao repositório `devcontainers/images`](https://github.com/devcontainers/images/tree/main/src/universal). Se você não estiver usando a imagem padrão na configuração do contêiner de desenvolvimento, instale o JupyterLab adicionando o recurso `ghcr.io/devcontainers/features/python` ao arquivo `devcontainer.json`. Você deve incluir a opção `"installJupyterlab": true`. Para obter mais informações, confira o [LEIAME do `python` recurso](https://github.com/devcontainers/features/tree/main/src/python#python-python), no repositório `devcontainers/features`.
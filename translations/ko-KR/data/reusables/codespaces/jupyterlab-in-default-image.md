---
ms.openlocfilehash: c3900e59c91a3d0afd192b5ff948b612bfe0ba64
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160054"
---
기본 컨테이너 이미지에는 JupyterLab이 포함되므로 기본 이미지에서 만든 codespace에는 항상 JupyterLab이 설치됩니다. 기본 이미지에 대한 자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)” 및 [리포지토리`devcontainers/images`를 참조하세요](https://github.com/devcontainers/images/tree/main/src/universal). 개발 컨테이너 구성에서 기본 이미지를 사용하지 않는 경우 파일에 기능을 추가하여 JupyterLab을 `ghcr.io/devcontainers/features/python` 설치할 수 있습니다 `devcontainer.json` . 옵션을 `"installJupyterlab": true`포함해야 합니다. 자세한 내용은 리포지토리[의 `python` 기능에](https://github.com/devcontainers/features/tree/main/src/python#python-python)`devcontainers/features` 대한 추가 정보를 참조하세요.
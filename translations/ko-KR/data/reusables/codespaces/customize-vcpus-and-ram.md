---
ms.openlocfilehash: 5f6285fe19915c3962b43cb45a26e65144607788
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062404"
---
vCPU 및 RAM의 양을 조정하거나 [환경을 개인 설정하기 위해 dot 파일을 추가](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account)하거나 설치된 도구와 스크립트를 수정하여 codespace를 사용자 지정할 수 있습니다.

{% data variables.product.prodname_codespaces %}는 codespace에서 작업할 때 사용하는 개발 컨테이너를 구성하기 위해 `devcontainer.json`이라는 파일을 사용합니다. 각 리포지토리에는 codespace에서 코드 작업을 하는 데 필요한 개발 환경을 정확하게 제공하기 위해 하나 이상의 `devcontainer.json` 파일이 포함될 수 있습니다. 

시작 시 {% data variables.product.prodname_codespaces %}는 개발 컨테이너 구성을 구성하는 `devcontainer.json` 파일 및 종속 파일을 사용하여 도구 및 런타임을 설치하고 프로젝트에 필요한 기타 설치 작업을 수행합니다. 자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)”를 참조하세요.

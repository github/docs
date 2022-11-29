---
ms.openlocfilehash: 35dfd476fcffeaf23740ff0513b2675390f9a76f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145068119"
---
이미지의 컨테이너 레지스트리에서 이미지를 끌어오기 위해 인증이 필요한 경우 `jobs.<job_id>.container.credentials`를 사용하여 `username` 및 `password`의 `map`을 설정할 수 있습니다. 자격 증명은 [`docker login`](https://docs.docker.com/engine/reference/commandline/login/) 명령에 제공하는 것과 동일한 값입니다.

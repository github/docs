---
ms.openlocfilehash: 286ed6049cd19b1d7f4c5c7dfb4d737dd0f68475
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145089489"
---
`jobs.<job_id>.container.volumes`를 사용하여 서비스 컨테이너에서 사용할 볼륨의 `array`를 설정합니다. 볼륨을 사용하여 서비스 또는 작업의 여러 단계 간에 데이터를 공유할 수 있습니다. 명명된 Docker 볼륨, 익명 Docker 볼륨 또는 호스트의 바인딩 탑재를 지정할 수 있습니다.

볼륨을 지정하려면 원본 및 대상 경로를 지정합니다.

`<source>:<destinationPath>`.

`<source>`는 호스트 컴퓨터의 볼륨 이름 또는 절대 경로이며 `<destinationPath>`는 컨테이너의 절대 경로입니다.

#### 예제: 컨테이너에 볼륨 탑재

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```

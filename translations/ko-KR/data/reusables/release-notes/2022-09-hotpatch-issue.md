---
ms.openlocfilehash: cd8183729f7721845c6d750dc237c2207c42de69
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: "148098357"
---
GitHub Enterprise Server {% ifversion ghes = 3.4 %}3.4.9{% elsif ghes = 3.5 %}3.5.6{% elsif ghes = 3.6 %}3.6.2{% endif %}로 핫패치가 업그레이드되지 않을 수 있습니다. 전체 `.pkg` 업그레이드는 영향을 받지 않습니다. 인스턴스에 대한 업그레이드가 실패하는 경우 관리 셸(ssh)에 연결하고 다음 비대화형 명령을 실행하여 이 문제를 해결합니다.

```
echo "grub-pc grub-pc/install_devices_empty boolean true" | sudo debconf-set-selections
```

업그레이드할 수 없거나 추가 지원이 필요한 경우 GitHub 지원에 문의하세요. 자세한 내용은 “[지원 티켓 만들기](/support/contacting-github-support/creating-a-support-ticket)”를 참조하세요. [업데이트: 2022-10-14]

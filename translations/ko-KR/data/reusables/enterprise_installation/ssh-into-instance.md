---
ms.openlocfilehash: fcdec13f55da7c5bd1aece4364b2ecb4098e8cf0
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: "148093787"
---
1. {% 데이터 variables.location.product_location %}에 SSH합니다. 인스턴스가 여러 노드로 구성된 경우(예: 고가용성 또는 지역 복제가 구성된 경우) 주 노드에 대한 SSH를 수행합니다. 클러스터를 사용하는 경우 임의 노드에 대해 SSH를 수행할 수 있습니다. SSH 액세스에 대한 자세한 내용은 “[관리 셸(SSH) 액세스](/admin/configuration/accessing-the-administrative-shell-ssh)”를 참조하세요.

   ```shell
   $ ssh -p 122 admin@HOSTNAME
   ```

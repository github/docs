---
ms.openlocfilehash: 08efc883c983edbb53fd63caae6ab5f7ee335afd
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147060291"
---
1. {% data variables.product.product_name %}의 커밋 서명 서비스에 대한 설정을 업데이트합니다.

   ```bash{:copy}
   sudo consul-template -once -template /etc/consul-templates/etc/nomad-jobs/gpgverify/gpgverify.hcl.ctmpl:/etc/nomad-jobs/gpgverify/gpgverify.hcl
    
   nomad job run /etc/nomad-jobs/gpgverify/gpgverify.hcl
   ```

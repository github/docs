---
ms.openlocfilehash: 40cfb976f7916116555f1b184beadbe25644845e
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: "148097758"
---
SSH(Secure Shell 프로토콜)를 사용하여 {% ifversion fpt 또는 ghec 또는 ghes %}{% 데이터 variables.location.product_location %}{% elsif ghae %}{% 데이터 variables.product.product_name %}{% endif %}의 리포지토리에서 데이터에 액세스하고 쓸 수 있습니다. SSH를 통해 연결할 때 로컬 머신에서 프라이빗 키 파일을 사용하여 인증합니다.

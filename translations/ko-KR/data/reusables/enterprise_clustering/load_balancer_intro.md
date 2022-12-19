---
ms.openlocfilehash: b9aa2cbac3e32319aac7d2b7ef53422f53125643
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878680"
---
부하 분산 장치 디자인은 네트워크 디바이스를 사용하여 Git 및 HTTP 트래픽을 개별 {% data variables.product.prodname_ghe_server %} 어플라이언스로 전달합니다. 부하 분산 장치를 사용하여 보안 목적으로 어플라이언스로 직접 트래픽을 제한하거나 DNS 레코드 변경 없이 필요한 경우 트래픽을 리디렉션할 수 있습니다. 프록시 프로토콜을 지원하는 TCP 기반 부하 분산 장치를 사용하는 것이 좋습니다.

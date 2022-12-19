---
ms.openlocfilehash: 99be41c3a31f1602c08160b3c552e2686820974d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145111543"
---
| 포트 | 서비스 | 설명                                                |
|------|---------|------------------------------------------------------------|
| 22   | SSH     | SSH 액세스를 통한 Git입니다. 퍼블릭/프라이빗 리포지토리에 대한 복제, 가져오기 및 푸시 작업이 지원됩니다. |
| 25   | SMTP    | 암호화를 사용한 SMTP(STARTTLS) 지원입니다. |
| 80   | HTTP    | 웹 애플리케이션 액세스입니다. *SSL을 활성화하면 모든 요청이 HTTPS 포트로 리디렉션됩니다.* |
| 122  | SSH     | 인스턴스 셸 액세스입니다. *기본 SSH 포트(22)는 애플리케이션 git+ssh 네트워크 트래픽 전용입니다.* |
| 161/UDP | SNMP | 네트워크 모니터링 프로토콜 작업에 필요합니다. |
| 443  | HTTPS   | HTTPS 액세스를 통한 웹 애플리케이션 및 Git입니다. |
| 1194/UDP | VPN | 고가용성 구성에서 복제 네트워크 터널을 보호합니다. |
| 8080 | HTTP    | 일반 텍스트 웹 기반 {% data variables.enterprise.management_console %}입니다. *SSL을 사용하지 않도록 수동으로 설정하지 않는 한 필요하지 않습니다.* |
| 8443 | HTTPS   | 웹 기반 {% data variables.enterprise.management_console %}을 보호합니다. *기본 설치 및 구성에 필요합니다.* |
| 9418 | Git     | 간단한 Git 프로토콜 포트입니다. 공용 리포지토리에만 작업을 복제하고 페치합니다. *암호화되지 않은 네트워크 통신입니다.* {% data reusables.enterprise_installation.when-9418-necessary %}  |

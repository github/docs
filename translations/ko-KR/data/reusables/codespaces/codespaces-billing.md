---
ms.openlocfilehash: 5f3c4aa0e4818ac971df77aeab39b75a8ef84b3d
ms.sourcegitcommit: dfdb52a504559d0bccbf0c19691d23421cb71353
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/03/2022
ms.locfileid: "148008740"
---
{% data variables.product.prodname_codespaces %}는 컴퓨팅 및 스토리지 사용량에 따라 USD(미국 달러)로 청구됩니다.

### 컴퓨팅 사용량 계산
컴퓨팅 사용량은 {% data variables.product.prodname_github_codespaces %} 인스턴스가 활성 상태인 총 가동 시간(분)으로 정의됩니다. 컴퓨팅 사용량은 조직 또는 엔터프라이즈에 청구할 수 있는 모든 코드스페이스에서 사용되는 실제 시간(분)을 합산하여 계산됩니다. 해당 합계는 청구 서비스에 매일 보고되며 매월 청구됩니다.

작동 시간은 개발자가 지정한 비활성 기간 후에 수동으로 또는 자동으로 수행할 수 있는 codespace를 중지하여 제어됩니다. 자세한 내용은 “[codespace 닫기 또는 중지](/codespaces/getting-started/deep-dive#closing-or-stopping-your-codespace)”를 참조하세요.

### 스토리지 사용량 계산
{% data variables.product.prodname_github_codespaces %} 청구 목적의 경우 여기에는 계정의 모든 Codespace에서 사용하는 모든 스토리지가 포함됩니다. 여기에는 복제된 리포지토리, 구성 파일 및 확장과 같이 codespace에서 사용되는 모든 파일이 포함됩니다. 해당 합계는 청구 서비스에 매일 보고되며 매월 청구됩니다. 월말에 {% data variables.product.prodname_dotcom %}는 스토리지를 가장 가까운 MB로 반올림합니다. 

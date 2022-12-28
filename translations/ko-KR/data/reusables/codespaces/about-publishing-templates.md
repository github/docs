---
ms.openlocfilehash: 88adaa8f671dd9eb805301c3e659bcdba76f24cc
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160194"
---
템플릿에서 만든 codespace에서 작업하면 작업이 클라우드의 가상 머신에 저장되지만 {% data variables.product.prodname_dotcom %}의 리포지토리에 저장되지 않습니다.

파일을 저장하고, codespace를 닫고 중지하고, 나중에 작업으로 돌아갈 수 있습니다. 일반적으로 Git은 사전 설치되며 {% data variables.product.company_short %}의 빈 템플릿에서 시작하지 않으면 작업 디렉터리가 Git 리포지토리로 자동으로 초기화됩니다. 즉, 파일 추가 및 커밋과 같은 로컬 소스 제어에 Git을 즉시 사용할 수 있습니다.

그러나 게시되지 않은 codespace를 삭제하거나 보존 기간 동안 사용하지 않도록 설정하여 자동으로 삭제되는 경우 작업도 삭제됩니다. 작업을 지속하고 다른 사용자가 프로젝트에서 작업할 수 있도록 하려면 {% data variables.product.prodname_dotcom %}의 리포지토리에 codespace를 게시해야 합니다.
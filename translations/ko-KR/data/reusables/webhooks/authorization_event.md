---
ms.openlocfilehash: 5466f29d4bb496b6451846f80a90f7b0471f8cda
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145067273"
---
누구나 [GitHub 계정 설정 페이지](https://github.com/settings/apps/authorizations)에서 GitHub 앱의 권한 부여를 취소할 수 있습니다. GitHub 앱의 권한 부여를 취소해도 GitHub 앱이 제거되지 않습니다. 이 웹후크를 받으면 토큰을 철회한 사용자를 대신하여 API 호출을 중지하도록 GitHub 앱을 프로그래밍해야 합니다. GitHub 앱이 철회한 액세스 토큰을 계속 사용하는 경우 `401 Bad Credentials` 오류가 발생합니다.

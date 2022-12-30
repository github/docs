---
ms.openlocfilehash: 2bd293f62b5fcf467c379c315347056245029ff6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145087412"
---
키 | 형식 | 설명
----|------|------------
`action` | `string` | 수행된 작업입니다. 다음 중 하나일 수 있습니다.<ul><li>`created` - 누군가가 {% data variables.product.prodname_github_app %}을 설치합니다.</li><li>`deleted` - 누군가가 {% data variables.product.prodname_github_app %}을 제거합니다.</li><li>`suspend` - 누군가가 {% data variables.product.prodname_github_app %} 설치를 일시 중단합니다.</li><li>`unsuspend` - 누군가가 {% data variables.product.prodname_github_app %} 설치 일시 중단을 해제합니다.</li><li>`new_permissions_accepted` - 누군가가 {% data variables.product.prodname_github_app %} 설치에 대한 새 권한을 수락합니다. {% data variables.product.prodname_github_app %} 소유자가 새 권한을 요청하는 경우 {% data variables.product.prodname_github_app %}을 설치한 사용자는 새 권한 요청을 수락해야 합니다. </li></ul>
`repositories` | `array` | 설치에서 액세스할 수 있는 리포지토리 개체의 배열입니다.

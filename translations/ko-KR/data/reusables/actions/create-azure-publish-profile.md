---
ms.openlocfilehash: 00bdf100d02b27ce76aff35582cb4a1f5a2469a3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145116975"
---
1. Azure 게시 프로필을 구성하고 `AZURE_WEBAPP_PUBLISH_PROFILE` 비밀을 만듭니다.

   게시 프로필을 사용하여 Azure 배포 자격 증명을 생성합니다. 자세한 내용은 Azure 설명서의 “[배포 자격 증명 생성](https://docs.microsoft.com/azure/app-service/deploy-github-actions?tabs=applevel#generate-deployment-credentials)”을 참조하세요.

   {% data variables.product.prodname_dotcom %} 리포지토리에서 게시 프로필의 콘텐츠가 포함된 `AZURE_WEBAPP_PUBLISH_PROFILE`이라는 비밀을 만듭니다. 비밀을 만드는 방법에 대한 자세한 내용은 “[암호화된 암호](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)”를 참조하세요.

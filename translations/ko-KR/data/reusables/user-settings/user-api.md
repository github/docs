---
ms.openlocfilehash: 740d5655197f25385b0ac206fdeea33a585f3ad4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147060228"
---
이 API의 많은 리소스는 현재 인증된 사용자에 대한 정보를 가져오는 바로 가기를 제공합니다. 요청 URL에 `{username}` 매개 변수가 포함되어 있지 않으면 응답은 로그인한 사용자에 대해 이루어집니다(요청과 함께 [인증 정보](/rest/overview/resources-in-the-rest-api#authentication)를 전달해야 함).{% ifversion fpt or ghes or ghec %} 사용자가 2단계 인증을 사용했는지 여부와 같은 추가 개인 정보는 기본 인증을 통해 또는 `user` 범위를 사용하여 OAuth를 통해 인증될 때 포함됩니다.{% endif %}

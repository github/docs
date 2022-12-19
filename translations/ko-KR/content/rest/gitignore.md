---
title: gitignore
intro: REST API를 사용하여 파일 및 디렉터리를 무시하는 데 사용할 수 있는 템플릿을 가져옵니다 `.gitignore` .
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/gitignore
ms.openlocfilehash: a3d6d35014a0c6bc46102fa7abfa11659fff6fbf
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193043'
---
## gitignore 정보

{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}에서 API를 통해 새 리포지토리를 만들 때 리포지토리에 적용할 [.gitignore 템플릿](/github/getting-started-with-github/ignoring-files) 을 지정할 수 있습니다. REST API를 사용하여 {% data variables.product.product_name %} [.gitignore 리포지토리에서 .gitignore 템플릿을](https://github.com/github/gitignore) 가져올 수 있습니다.

gitignore 템플릿을 `application/vnd.github.raw` 가져오는 경우 사용자 지정 미디어 형식을 사용할 수 있습니다. 자세한 내용은 “[미디어 유형](/rest/overview/media-types)”을 참조하세요.

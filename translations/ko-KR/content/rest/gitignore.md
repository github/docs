---
title: gitignore
intro: Gitignore API는 파일 및 디렉터리를 무시하는 데 사용할 수 있는 `.gitignore` 템플릿을 가져옵니다.
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
ms.openlocfilehash: e830b0f00d60f3eb121fa2a99a910b073780700e
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181270'
---
## Gitignore API 정보

{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}에서 API를 통해 새 리포지토리를 만들 때 [.gitignore 템플릿](/github/getting-started-with-github/ignoring-files) 을 지정하여 리포지토리에 적용할 수 있습니다. .gitignore 템플릿 API는 {% data variables.product.product_name %} [.gitignore 리포지토리](https://github.com/github/gitignore)에서 템플릿을 나열하고 가져옵니다.

### gitignore에 대한 사용자 지정 미디어 유형

gitignore 템플릿을 가져오는 경우 이 사용자 지정 미디어 유형을 사용할 수 있습니다.

    application/vnd.github.raw

자세한 내용은 “[미디어 유형](/rest/overview/media-types)”을 참조하세요.

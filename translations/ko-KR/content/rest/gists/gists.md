---
title: Gists
intro: 'Gists API를 사용하면 권한이 부여된 사용자가 GitHub에서 공개 gist를 나열, 생성, 업데이트 및 삭제할 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: c51d9275950bbf303caa1a03344ba8402618d65b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136023'
---
## Gist API 정보

Gist API를 사용하여 gist를 보고 수정할 수 있습니다. Gist에 관한 자세한 내용은 “[Gist가 있는 콘텐츠의 편집 및 공유](/get-started/writing-on-github/editing-and-sharing-content-with-gists)”를 참조하세요.

### 인증

토큰이 없는 익명 사용자를 위해 퍼블릭 gist를 읽고 {% ifversion ghae or ghes %} 만들 수 있습니다.{% else %} 익명이긴 하지만, gist를 만들려면 GitHub에 로그인해야 합니다.{% endif %} 사용자를 대신하여 gist를 읽거나 쓰려면 gist OAuth 범위와 토큰이 필요합니다. 자세한 내용은 “[OAuth 앱에 대한 범위](/developers/apps/scopes-for-oauth-apps)”를 참조하세요.

<!-- When an OAuth client does not have the gists scope, the API will return a 404 "Not Found" response regardless of the validity of the credentials. The API will return a 401 "Bad credentials" response if the gists scope was given to the application but the credentials are invalid. -->

### 잘림

Gist API는 gist의 각 파일에 대해 최대 1MB의 콘텐츠를 제공합니다. API를 통해 gist용으로 반환된 각 파일에는 `truncated`라는 키가 있습니다. `truncated`가 `true`인 경우 파일이 너무 커서 내용의 일부만 `content`에 반환된 것입니다.

파일의 전체 내용이 필요한 경우 `raw_url`에서 지정한 URL에 대해 `GET` 요청을 만들 수 있습니다. 10MB보다 큰 파일의 경우 `git_pull_url`에서 제공하는 URL을 통해 gist를 복제해야 합니다.

특정 파일의 내용이 잘리는 것 외에도 총 파일 수가 300개를 초과하면 전체 파일 목록이 잘릴 수 있습니다. 최상위 `truncated` 키가 `true`경우 처음 300개 파일만 파일 목록에 반환됩니다. gist의 파일을 모두 가져와야 하는 경우 `git_pull_url`에서 제공하는 URL을 통해 gist를 복제해야 합니다.

### gist에 대한 사용자 지정 미디어 유형

다음은 gist 콘텐츠를 가져오기 위해 지원되는 미디어 유형입니다.

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.base64

자세한 내용은 “[미디어 유형](/rest/overview/media-types)”을 참조하세요.

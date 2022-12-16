---
title: codespace의 기본 환경 변수
shortTitle: Default environment variables
intro: '{% data variables.product.prodname_dotcom %}는 각 codespace의 기본 환경 변수를 설정합니다.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Fundamentals
  - Developer
ms.openlocfilehash: 1a57445bbffb3e1112299414e29796b716f2d801
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158927'
---
## 기본 환경 변수 정보

{% data variables.product.prodname_dotcom %}는 모든 codespace의 기본 환경 변수를 설정합니다. codespace에서 실행된 명령을 통해 환경 변수를 만들고, 읽고, 수정할 수 있습니다.

{% note %}

**참고**: 환경 변수는 대/소문자를 구분합니다.

{% endnote %}

## 기본 환경 변수 목록

| 환경 변수 | 설명 |
| ---------------------|------------ |
| `CODESPACE_NAME` | codespace 이름입니다. 예를 들어 `octocat-literate-space-parakeet-mld5`입니다. |
| `CODESPACES` | codespace에 있는 동안에는 항상 `true`입니다. |
| `GIT_COMMITTER_EMAIL` | 향후 `git` 커밋의 “작성자” 필드 메일입니다. |
| `GIT_COMMITTER_NAME` | 향후 `git` 커밋의 “커밋한 사람” 필드 이름입니다. |
| `GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN`| {% data variables.product.prodname_github_codespaces %} 전달된 포트의 도메인을 반환합니다. 예: `preview.app.github.dev`. |
| `GITHUB_API_URL` | API URL을 반환합니다. 예: `{% data variables.product.api_url_code %}`. |
| `GITHUB_GRAPHQL_URL` | GraphQL API URL을 반환합니다. 예: `{% data variables.product.graphql_url_code %}`. |
| `GITHUB_REPOSITORY` | 소유자 및 리포지토리 이름입니다. 예: `octocat/Hello-World`. |
| `GITHUB_SERVER_URL`| {% data variables.product.product_name %} 서버의 URL을 반환합니다. 예: `https://{% data variables.product.product_url %}`. |
| `GITHUB_TOKEN` | codespace의 사용자를 나타내는 서명된 인증 토큰입니다. 이 토큰을 사용하여 GitHub API에 대해 인증된 호출을 수행할 수 있습니다. 자세한 내용은 “[인증](/codespaces/codespaces-reference/security-in-codespaces#authentication)”을 참조하세요.  |
| `GITHUB_USER` | codespace를 시작한 사용자의 이름입니다. 예들 들어 `octocat`입니다. |

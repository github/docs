---
title: 코드 소유자 정보
intro: CODEOWNERS 파일을 사용하여 리포지토리의 코드를 담당하는 개인 또는 팀을 정의할 수 있습니다.
redirect_from:
  - /articles/about-codeowners
  - /articles/about-code-owners
  - /github/creating-cloning-and-archiving-repositories/about-code-owners
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-code-owners
product: '{% data reusables.gated-features.code-owners %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 3b6822be6551d43b3af55220ac8f39deec8be1df
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106839'
---
관리자 또는 소유자 권한이 있는 사용자는 리포지토리에서 CODEOWNERS 파일을 설정할 수 있습니다.

코드 소유자로 선택한 사용자는 리포지토리에 대한 쓰기 권한이 있어야 합니다. 코드 소유자가 팀인 경우 해당 팀이 표시되어야 하며, 팀의 모든 개별 멤버에게 직접, 조직 멤버 자격을 통해 또는 다른 팀 멤버 자격을 통해 쓰기 권한이 있더라도 팀에 쓰기 권한이 있어야 합니다.

## 코드 소유자 정보

코드 소유자는 자신이 소유한 코드를 수정하는 끌어오기 요청을 다른 사용자가 열 때 자동으로 검토 요청을 받습니다. 코드 소유자에게 초안 끌어오기 요청을 검토하도록 자동으로 요청되지는 않습니다. 초안 끌어오기 요청에 대한 자세한 내용은 “[끌어오기 요청 정보](/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests)”를 참조하세요. 초안 끌어오기 요청을 검토 준비로 표시하면 코드 소유자가 자동으로 알림을 받게 됩니다. 끌어오기 요청을 초안으로 변환하는 경우 이미 알림을 구독한 사용자는 자동으로 구독 취소되지 않습니다. 자세한 내용은 “[끌어오기 요청의 스테이지 변경](/github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request)”을 참조하세요.

관리자 또는 소유자 권한이 있는 사용자가 필요한 검토를 사용하도록 설정한 경우 작성자가 리포지토리에서 끌어오기 요청을 병합하기 전에 필요에 따라 코드 소유자의 승인을 요구할 수도 있습니다. 자세한 내용은 “[보호된 분기 정보](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)”를 참조하세요.

파일에 코드 소유자가 있는 경우 끌어오기 요청을 열기 전에 코드 소유자가 누구인지 확인할 수 있습니다. 리포지토리에서 파일을 찾은 다음 {% octicon "shield-lock" aria-label="The edit icon" %}을 마우스로 가리킬 수 있습니다.

![리포지토리 파일의 코드 소유자](/assets/images/help/repository/code-owner-for-a-file.png)

## CODEOWNERS 파일 위치

CODEOWNERS 파일을 사용하려면 리포지토리의 루트, `docs/` 또는 `.github/` 디렉터리에서 코드 소유자를 추가하려는 분기에 `CODEOWNERS`라는 새 파일을 만듭니다.

각 CODEOWNERS 파일은 리포지토리의 단일 분기에 대한 코드 소유자를 할당합니다. 따라서 기본 분기의 코드베이스에는 `@octo-org/codeowners-team`, `gh-pages` 분기의 {% data variables.product.prodname_pages %} 사이트에는 `@octocat`를 할당하는 등 분기마다 다른 코드 소유자를 할당할 수 있습니다.

코드 소유자가 검토 요청을 받으려면 CODEOWNERS 파일이 끌어오기 요청의 기본 분기에 있어야 합니다. 예를 들어 리포지토리의 `gh-pages` 분기에서 *.js* 파일의 코드 소유자로 `@octocat`를 할당하는 경우 `@octocat`는 헤드 분기와 `gh-pages` 간에 *.js* 파일에 대한 변경 내용이 포함된 끌어오기 요청이 열릴 때 검토 요청을 받게 됩니다.

## CODEOWNERS 파일 크기

CODEOWNERS 파일의 크기는 3MB 미만이어야 합니다. 이 한도를 초과하는 CODEOWNERS 파일은 로드되지 않으므로 코드 소유자 정보가 표시되지 않으며 적절한 코드 소유자에게 끌어오기 요청의 변경 내용을 검토하도록 요청되지 않습니다.

CODEOWNERS 파일의 크기를 줄이려면 와일드카드 패턴을 사용하여 여러 항목을 단일 항목으로 통합하는 것이 좋습니다.

## CODEOWNERS 구문

{% warning %}

**경고:** CODEOWNERS 파일에서는 적용되지 않는 gitignore 파일의 몇 가지 구문 규칙이 있습니다.
- 주석이 아닌 패턴으로 처리되도록 `\`를 사용하여 `#`으로 시작하는 패턴 이스케이프
- `!`를 사용하여 패턴 부정
- `[ ]`를 사용하여 문자 범위 정의

{% endwarning %}

CODEOWNERS 파일은 [gitignore](https://git-scm.com/docs/gitignore#_pattern_format) 파일에 사용되는 대부분의 동일한 규칙을 따르는 패턴을 사용합니다. 패턴 뒤에는 표준 `@username` 또는 `@org/team-name` 형식을 사용하는 {% data variables.product.prodname_dotcom %} 사용자 이름 또는 팀 이름이 하나 이상 옵니다. 팀 멤버에게 이미 액세스 권한이 있더라도 사용자와 팀에게 리포지토리에 대한 명시적 `write` 권한이 있어야 합니다.

{% ifversion fpt or ghec%} 대부분의 경우{% else %}{% endif %}는 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}(예 `user@example.com`: )의 계정에 추가된 이메일 주소로 사용자를 참조할 수도 있습니다. {% ifversion fpt or ghec %} 메일 주소를 사용하여 {% data variables.enterprise.prodname_managed_user %}을(를) 참조할 수 없습니다. {% data variables.enterprise.prodname_managed_users %}에 대한 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users) 설명서의 "{% data variables.product.prodname_emus %}{% ifversion fpt %} 정보"를 참조하세요. {% else %}." {% endif %} {% endif %}

{% data variables.product.prodname_dotcom %}에서 대/소문자를 구분하는 파일 시스템을 사용하기 때문에 CODEOWNERS 경로는 대/소문자를 구분합니다. CODEOWNERS가 {% data variables.product.prodname_dotcom %}에서 평가되기 때문에 대/소문자를 구분하지 않는 시스템(예: macOS)에서도 CODEOWNERS 파일에서 대/소문자가 올바르게 지정되는 경로와 파일을 사용해야 합니다.

{% ifversion codeowners-errors %} CODEOWNERS 파일에 잘못된 구문이 포함된 줄이 있으면 해당 줄은 건너뜁니다. {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}의 리포지토리에서 CODEOWNERS 파일로 이동하면 강조 표시된 오류를 볼 수 있습니다. 리포지토리 CODEOWNERS 파일의 오류 목록은 API를 통해서도 액세스할 수 있습니다. 자세한 내용은 REST API 설명서에서 “[리포지토리](/rest/reference/repos#list-codeowners-errors)”를 참조하세요.
{% else %} CODEOWNERS 파일에 잘못된 구문이 포함된 줄이 있으면 파일이 검색되지 않으며 검토를 요청하는 데 사용되지 않습니다.
{% endif %}

### CODEOWNERS 파일의 예
```
# This is a comment.
# Each line is a file pattern followed by one or more owners.

# These owners will be the default owners for everything in
# the repo. Unless a later match takes precedence,
# @global-owner1 and @global-owner2 will be requested for
# review when someone opens a pull request.
*       @global-owner1 @global-owner2

# Order is important; the last matching pattern takes the most
# precedence. When someone opens a pull request that only
# modifies JS files, only @js-owner and not the global
# owner(s) will be requested for a review.
*.js    @js-owner

# You can also use email addresses if you prefer. They'll be
# used to look up users just like we do for commit author
# emails.
*.go docs@example.com

# Teams can be specified as code owners as well. Teams should
# be identified in the format @org/team-name. Teams must have
# explicit write access to the repository. In this example,
# the octocats team in the octo-org organization owns all .txt files.
*.txt @octo-org/octocats

# In this example, @doctocat owns any files in the build/logs
# directory at the root of the repository and any of its
# subdirectories.
/build/logs/ @doctocat

# The `docs/*` pattern will match files like
# `docs/getting-started.md` but not further nested files like
# `docs/build-app/troubleshooting.md`.
docs/*  docs@example.com

# In this example, @octocat owns any file in an apps directory
# anywhere in your repository.
apps/ @octocat

# In this example, @doctocat owns any file in the `/docs`
# directory in the root of your repository and any of its
# subdirectories.
/docs/ @doctocat

# In this example, any change inside the `/scripts` directory
# will require approval from @doctocat or @octocat.
/scripts/ @doctocat @octocat

# In this example, @octocat owns any file in the `/apps`
# directory in the root of your repository except for the `/apps/github`
# subdirectory, as its owners are left empty.
/apps/ @octocat
/apps/github
```

## CODEOWNERS 및 분기 보호
리포지토리 소유자는 변경된 파일의 소유자가 변경된 코드를 검토하도록 분기 보호 규칙을 추가할 수 있습니다. 자세한 내용은 “[보호된 분기 정보](/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)”를 참조하세요.

## 추가 참고 자료

- “[새 파일 만들기](/articles/creating-new-files)”
- “[개인 리포지토리에 협력자 초대](/articles/inviting-collaborators-to-a-personal-repository)”
- “[조직 리포지토리에 대한 개인 액세스 권한 관리](/articles/managing-an-individual-s-access-to-an-organization-repository)”
- “[조직 리포지토리에 대한 팀 액세스 관리](/articles/managing-team-access-to-an-organization-repository)”
- “[끌어오기 요청 검토 보기](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/viewing-a-pull-request-review)”

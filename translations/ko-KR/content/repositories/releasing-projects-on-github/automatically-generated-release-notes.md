---
title: 자동으로 생성된 릴리스 정보
intro: GitHub 릴리스에 대한 릴리스 정보를 자동으로 생성할 수 있습니다.
permissions: Repository collaborators and people with write access to a repository can generate and customize automated release notes for a release.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: '>= 3.4'
topics:
  - Repositories
shortTitle: Automated release notes
communityRedirect:
  name: Provide GitHub Feedback
  href: 'https://github.com/orgs/community/discussions/categories/general'
ms.openlocfilehash: a4adfa306873ef172950666756add7d0e67e168d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147432018'
---
## 자동으로 생성된 릴리스 정보 소개

자동으로 생성된 릴리스 정보는 {% data variables.product.prodname_dotcom %} 릴리스에 대한 릴리스 정보를 수동으로 작성하는 작업을 자동화하는 대안을 제공합니다. 자동으로 생성된 릴리스 정보를 사용하여 릴리스 내용의 개요를 신속하게 생성할 수 있습니다. 자동으로 생성된 릴리스 정보에는 병합된 끌어오기 요청 목록, 릴리스에 대한 기여자 목록, 전체 변경 로그에 대한 링크가 포함됩니다.

또한 자동화된 릴리스 정보를 사용자 지정할 수도 있습니다. 즉, 레이블을 사용하여 사용자 지정 범주를 만들어 포함하려는 끌어오기 요청을 구성하고 특정 레이블 및 사용자가 출력에 표시되지 않도록 제외할 수 있습니다.

## 새 릴리스에 대한 자동으로 생성된 릴리스 정보 만들기

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. **새 릴리스 초안 작성** 을 클릭합니다.
   ![릴리스 초안 단추](/assets/images/help/releases/draft_release_button.png)
4. {% ifversion fpt or ghec %}**태그 선택** 을 클릭하고 {% else %}Type{% endif %}릴리스의 버전 번호를 입력합니다. 또는 기존 태그를 선택합니다.
  {% ifversion fpt or ghec %} ![태그 입력](/assets/images/help/releases/releases-tag-create.png)
5. 새 태그를 만드는 경우 **새 태그 만들기** 를 클릭합니다.
![새 태그를 만들 것인지 확인](/assets/images/help/releases/releases-tag-create-confirm.png) {% else %} ![태그가 지정된 버전 릴리스](/assets/images/enterprise/releases/releases-tag-version.png) {% endif %}
6. 새 태그를 만든 경우 드롭다운 메뉴를 사용하여 릴리스하려는 프로젝트가 포함된 분기를 선택합니다.
  {% ifversion fpt or ghec %}![분기 선택](/assets/images/help/releases/releases-choose-branch.png) {% else %}![릴리스 태그가 지정된 분기](/assets/images/enterprise/releases/releases-tag-branch.png) {% endif %} {%- data reusables.releases.previous-release-tag %}
7. 설명 텍스트 상자의 오른쪽 위에서 {% ifversion previous-release-tag %}**릴리스 정보 생성**{% else %}**릴리스 정보 자동 생성**{% endif %}.{% ifversion previous-release-tag %} ![릴리스 정보 생성](/assets/images/help/releases/generate-release-notes.png){% else %} ![릴리스 정보 자동 생성](/assets/images/enterprise/3.5/releases/auto-generate-release-notes.png){% endif %}을 클릭합니다.
8. 생성된 노트를 확인하여 포함하려는 정보가 모두(및 정확히) 포함되는지 확인합니다.
9. 필요에 따라 릴리스에 컴파일된 프로그램과 같은 이진 파일을 포함하려면 이진 상자에서 파일을 끌어서 놓거나 수동으로 선택합니다.
   ![릴리스와 함께 DMG 제공](/assets/images/help/releases/releases_adding_binary.gif)
10. 릴리스가 프로덕션에 사용할 준비가 되지 않았으며 불안정할 수 있음을 사용자에게 알리려면 **시험판입니다** 를 선택합니다.
   ![릴리스를 시험판으로 표시하는 확인란](/assets/images/help/releases/prerelease_checkbox.png) {%- ifversion fpt or ghec %}
11. 필요에 따라 **이 릴리스에 대한 토론 만들기** 를 선택한 다음 **범주** 드롭다운 메뉴를 선택하고 릴리스 토론의 범주를 클릭합니다.
  ![릴리스 토론을 만드는 확인란과 범주를 선택하는 드롭다운 메뉴](/assets/images/help/releases/create-release-discussion.png) {%- endif %}
12. 릴리스를 공개할 준비가 되면 **릴리스 게시** 를 클릭합니다. 나중에 릴리스에서 작업하려면 **초안 저장** 을 클릭합니다.
   ![릴리스 게시 및 릴리스 초안 작성 단추](/assets/images/help/releases/release_buttons.png)


## 자동으로 생성된 릴리스 정보 구성

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. 파일 이름 필드에 `.github/release.yml`을 입력하여 `.github` 디렉터리에 `release.yml` 파일을 만듭니다.
  ![새 파일을 만듭니다.](/assets/images/help/releases/release-yml.png)
4. 파일에서 아래 구성 옵션을 사용하여 YAML에서 이 릴리스에서 제외하려는 끌어오기 요청 레이블 및 작성자를 지정합니다. 새 범주를 만들고 각 범주에 포함할 끌어오기 요청 레이블을 나열할 수도 있습니다.

### 구성 옵션

| 매개 변수 | 설명 |
| :- | :- |
| `changelog.exclude.labels` | 릴리스 정보에서 끌어오기 요청을 제외하는 레이블의 목록입니다. |
| `changelog.exclude.authors` | 릴리스 정보에서 끌어오기 요청을 제외할 사용자 또는 봇 로그인 핸들의 목록입니다. |
| `changelog.categories[*].title` | **필수 사항입니다.** 릴리스 정보에서 변경 내용 범주의 제목입니다. |
| `changelog.categories[*].labels`| **필수 사항입니다.** 이 범주에 대한 끌어오기 요청을 한정하는 레이블입니다. `*`를 이전 범주와 일치하지 않는 끌어오기 요청에 대한 catch-all로 사용합니다. |
| `changelog.categories[*].exclude.labels` | 이 범주에서 끌어오기 요청을 제외하는 레이블의 목록입니다. |
| `changelog.categories[*].exclude.authors` | 이 범주에서 끌어오기 요청을 제외할 사용자 또는 봇 로그인 핸들의 목록입니다. |

### 구성 예

{% raw %}
```yaml{:copy}
# .github/release.yml

changelog:
  exclude:
    labels:
      - ignore-for-release
    authors:
      - octocat
  categories:
    - title: Breaking Changes 🛠
      labels:
        - Semver-Major
        - breaking-change
    - title: Exciting New Features 🎉
      labels:
        - Semver-Minor
        - enhancement
    - title: Other Changes
      labels:
        - "*"
```
{% endraw %}

## 추가 참고 자료

- "[레이블 관리](/issues/using-labels-and-milestones-to-track-work/managing-labels)" 
